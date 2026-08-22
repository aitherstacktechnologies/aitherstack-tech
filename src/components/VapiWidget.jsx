import React, { useState, useEffect, useRef } from 'react';
import Vapi from '@vapi-ai/web';

const VAPI_PUBLIC_KEY = "45380c0b-e771-44e7-9ae5-1714482b25e3"; 
const ALEX_ASSISTANT_ID = "cb15359a-bc0a-4872-8094-035a0ad7b6d5"; 

export default function VapiWidget() {
  const [isCalling, setIsCalling] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const vapiRef = useRef(null);

  useEffect(() => {
    const VapiSDK = Vapi.default || Vapi;
    const vapiInstance = new VapiSDK(VAPI_PUBLIC_KEY);
    vapiRef.current = vapiInstance;

    vapiInstance.on('call-start', () => {
      setConnecting(false);
      setIsCalling(true);
    });

    vapiInstance.on('call-end', () => {
      setConnecting(false);
      setIsCalling(false);
    });

    vapiInstance.on('error', (e) => {
      console.error('Vapi Error:', e);
      setConnecting(false);
      setIsCalling(false);
    });

    return () => {
      if (vapiInstance) {
        vapiInstance.stop();
      }
    };
  }, []);

  const toggleCall = async () => {
    if (!vapiRef.current) return;

    if (isCalling) {
      vapiRef.current.stop();
    } else {
      setConnecting(true);
      try {
        // Force request browser permission & bind active stream
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: false, // Krisp SDK buffer drop fixed by turning false
            autoGainControl: true
          }
        });

        vapiRef.current.start(ALEX_ASSISTANT_ID);
      } catch (err) {
        console.error("Microphone or Speaker Access Failed:", err);
        setConnecting(false);
      }
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 9999 }}>
      <button
        onClick={toggleCall}
        disabled={connecting}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.85rem 1.4rem',
          borderRadius: '100px',
          border: 'none',
          backgroundColor: isCalling ? '#ef4444' : '#000000',
          color: '#ffffff',
          fontWeight: '700',
          fontSize: '0.95rem',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease'
        }}
      >
        <span style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: isCalling ? '#ffffff' : '#22c55e',
          display: 'inline-block'
        }} />
        {connecting ? 'Connecting...' : isCalling ? 'End Voice Call' : 'Talk with AI Assistant'}
      </button>
    </div>
  );
}