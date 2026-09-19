import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const GLASS_SELECT_STYLES = `
  .glass-select {
    position: relative;
    width: 100%;
    font-family: inherit;
  }
  .glass-select__trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.75rem 1rem;
    background: rgba(13, 11, 10, 0.4);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.75rem;
    color: #F4EDE3;
    font-size: 0.875rem;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.2s ease;
    outline: none;
  }
  .glass-select__trigger:hover {
    border-color: rgba(243, 107, 63, 0.4);
    background: rgba(13, 11, 10, 0.5);
  }
  .glass-select__trigger:focus {
    border-color: rgba(243, 107, 63, 0.6);
    box-shadow: 0 0 0 2px rgba(243, 107, 63, 0.2);
  }
  .glass-select__trigger[aria-expanded="true"] {
    border-color: rgba(243, 107, 63, 0.6);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background: rgba(13, 11, 10, 0.5);
  }
  .glass-select__value {
    flex: 1;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .glass-select__icon {
    flex-shrink: 0;
    margin-left: 0.75rem;
    width: 1rem;
    height: 1rem;
    color: #FF9A78;
    transition: transform 0.2s ease;
  }
  .glass-select__trigger[aria-expanded="true"] .glass-select__icon {
    transform: rotate(180deg);
  }
  .glass-select__options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 100;
    margin-top: 2px;
    padding: 0.5rem;
    background: rgba(13, 11, 10, 0.6);
    backdrop-filter: blur(28px);
    -webkit-backdrop-filter: blur(28px);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-top: none;
    border-radius: 0 0 0.75rem 0.75rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    animation: glassSelectSlide 0.15s ease-out;
  }
  @keyframes glassSelectSlide {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .glass-select__option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.625rem 0.875rem;
    background: transparent;
    border: none;
    border-radius: 0.5rem;
    color: #F4EDE3;
    font-size: 0.875rem;
    font-family: inherit;
    text-align: left;
    cursor: pointer;
    transition: background-color 0.15s ease;
    outline: none;
  }
  .glass-select__option:hover,
  .glass-select__option:focus {
    background: rgba(255, 120, 70, 0.15);
  }
  .glass-select__option[aria-selected="true"] {
    background: rgba(255, 120, 70, 0.2);
    color: #F4EDE3;
  }
  .glass-select__option[aria-selected="true"]:hover,
  .glass-select__option[aria-selected="true"]:focus {
    background: rgba(255, 120, 70, 0.3);
  }
  .glass-select__option-text {
    flex: 1;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .glass-select__check {
    flex-shrink: 0;
    margin-left: 0.75rem;
    width: 1rem;
    height: 1rem;
    color: #FF9A78;
  }
  .glass-select__label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #8A8A8A;
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }
  .glass-select__label--required::after {
    content: ' *';
    color: rgba(243, 107, 63, 0.8);
  }
`;

// Inject styles once
if (typeof document !== 'undefined' && !document.getElementById('glass-select-styles')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'glass-select-styles';
  styleSheet.textContent = GLASS_SELECT_STYLES;
  document.head.appendChild(styleSheet);
}

export default function GlassSelect({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  disabled = false,
  placeholder = 'Select...',
  ariaLabel,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const triggerRef = useRef(null);
  const optionsRef = useRef(null);
  const optionRefs = useRef([]);

  const openOptions = useCallback(() => {
    if (!disabled) {
      setIsOpen(true);
      setFocusedIndex(options.findIndex(opt => opt.value === value));
    }
  }, [disabled, options, value]);

  const closeOptions = useCallback(() => {
    setIsOpen(false);
    setFocusedIndex(-1);
  }, []);

  const toggleOptions = useCallback(() => {
    if (isOpen) {
      closeOptions();
    } else {
      openOptions();
    }
  }, [isOpen, openOptions, closeOptions]);

  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          openOptions();
        } else {
          setFocusedIndex(prev => Math.min(prev + 1, options.length - 1));
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev => Math.max(prev - 1, 0));
        }
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen && focusedIndex >= 0) {
          onChange({ target: { name, value: options[focusedIndex].value } });
          closeOptions();
        } else if (!isOpen) {
          openOptions();
        }
        break;
      case 'Escape':
        closeOptions();
        break;
      case 'Tab':
        closeOptions();
        break;
      default:
        break;
    }
  }, [isOpen, options, focusedIndex, name, onChange, openOptions, closeOptions]);

  const handleOptionClick = useCallback((optionValue) => {
    onChange({ target: { name, value: optionValue } });
    closeOptions();
  }, [name, onChange, closeOptions]);

  useEffect(() => {
    if (isOpen && optionsRef.current) {
      const handleClickOutside = (e) => {
        if (triggerRef.current && !triggerRef.current.contains(e.target) &&
            optionsRef.current && !optionsRef.current.contains(e.target)) {
          closeOptions();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside, { passive: true });
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
      };
    }
  }, [isOpen, closeOptions]);

  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && optionRefs.current[focusedIndex]) {
      optionRefs.current[focusedIndex].scrollIntoView({ block: 'nearest' });
    }
  }, [focusedIndex, isOpen]);

  const selectedOption = options.find(opt => opt.value === value);
  const displayValue = selectedOption ? selectedOption.label : placeholder;

  return (
    <div className={`glass-select ${className}`} ref={triggerRef}>
      {label && (
        <label className={`glass-select__label ${required ? 'glass-select__label--required' : ''}`}>
          {label}
        </label>
      )}
      <button
        type="button"
        ref={triggerRef}
        className="glass-select__trigger"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={ariaLabel || label}
        disabled={disabled}
        onClick={toggleOptions}
        onKeyDown={handleKeyDown}
      >
        <span className="glass-select__value">{displayValue}</span>
        <ChevronDown className="glass-select__icon" aria-hidden="true" />
      </button>
      {isOpen && (
        <div
          ref={optionsRef}
          className="glass-select__options"
          role="listbox"
          aria-label={ariaLabel || label}
        >
          {options.map((option, index) => (
            <button
              key={option.value}
              ref={(el) => { optionRefs.current[index] = el; }}
              type="button"
              className="glass-select__option"
              role="option"
              aria-selected={option.value === value}
              aria-disabled={disabled}
              onClick={() => handleOptionClick(option.value)}
              onMouseEnter={() => setFocusedIndex(index)}
              onMouseLeave={() => setFocusedIndex(-1)}
            >
              <span className="glass-select__option-text">{option.label}</span>
              {option.value === value && <Check className="glass-select__check" aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}