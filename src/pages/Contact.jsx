import React, { useState } from 'react';

export default function ContactSection() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your message & file have been sent successfully.");
        event.target.reset();
        setFileName("No file chosen");
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error submitting form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '4rem 1.5rem', fontFamily: 'sans-serif' }} id="contact">
      
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.5rem 0' }}>
          Contact Us
        </h2>
        <p style={{ fontSize: '1rem', color: '#64748b', margin: 0 }}>
          Send us a message and our team will get back to you shortly.
        </p>
      </div>

      <div style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}>Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}>Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@example.com"
              style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}>Project Details</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project requirements..."
              style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
            ></textarea>
          </div>

          {/* IS WALE SECTION SE REPLACE KARO */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}>Attach File (Optional)</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', border: '1px dashed #cbd5e1', padding: '0.75rem 1rem', borderRadius: '0.5rem', backgroundColor: '#f8fafc' }}>
              <label 
                htmlFor="file-upload" 
                style={{ 
                  backgroundColor: '#0f172a', 
                  color: '#ffffff', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '0.375rem', 
                  fontSize: '0.875rem', 
                  fontWeight: '600', 
                  cursor: 'pointer',
                  userSelect: 'none',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#334155'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#0f172a'}
              >
                Choose File
              </label>
              <input
                id="file-upload"
                type="file"
                name="attachment"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <span style={{ fontSize: '0.875rem', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {fileName}
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{ width: '100%', backgroundColor: '#0f172a', color: '#ffffff', fontWeight: '700', padding: '1rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontSize: '1rem', marginTop: '0.5rem', opacity: isSubmitting ? 0.6 : 1 }}
          >
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </button>

          {result && (
            <p style={{ textAlign: 'center', fontSize: '0.875rem', fontWeight: '600', color: result.includes("Thank you") ? "#16a34a" : "#dc2626", margin: '0.5rem 0 0 0' }}>
              {result}
            </p>
          )}
        </form>
      </div>

    </div>
  );
}