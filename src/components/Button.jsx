import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const MotionLink = motion(Link);

const Button = forwardRef(
  ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    to,
    external = false,
    className = '',
    disabled = false,
    type = 'button',
    fullWidth = false,
    showArrow = false,
    arrowIcon = ArrowUpRight,
    ...props
  }, ref) => {
    const ArrowIcon = arrowIcon;
    const baseStyles = `
      relative inline-flex items-center justify-center gap-2
      font-semibold uppercase tracking-[0.12em]
      rounded-full border
      transition-all duration-200 ease-out
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ast-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ast-bg
      disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed
      ${fullWidth ? 'w-full' : ''}
    `;

    const sizeStyles = {
      sm: 'px-4 py-2 text-[10px]',
      md: 'px-6 py-3 text-xs',
      lg: 'px-8 py-4 text-sm',
      xl: 'px-10 py-5 text-base',
    };

    const variantStyles = {
      primary: `
        bg-ast-accent text-ast-bg border-ast-accent
        hover:bg-white hover:text-ast-accent hover:border-white
        hover:shadow-[0_0_32px_rgba(255,255,255,0.2)]
        active:scale-[0.98] active:translate-y-0
      `,
      ghost: `
        bg-transparent text-ast-text border-ast-border
        hover:bg-white hover:text-ast-accent hover:border-white
        active:scale-[0.98]
      `,
      outline: `
        bg-transparent text-ast-accent border-ast-accent/40
        hover:bg-white hover:text-ast-accent hover:border-white
        hover:shadow-[0_0_24px_rgba(255,255,255,0.2)]
        active:scale-[0.98]
      `,
      subtle: `
        bg-ast-surface/50 text-ast-text border-ast-border
        hover:bg-white hover:border-white hover:text-ast-accent
        hover:shadow-[0_0_24px_rgba(255,255,255,0.15)]
        active:scale-[0.98]
      `,
    };

    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    const commonProps = {
      ref,
      className: combinedClassName,
      whileTap: { scale: 0.98 },
      style: { willChange: 'transform' },
      ...props,
    };

    if (to) {
      return (
        <MotionLink
          {...commonProps}
          to={to}
        >
          <span>{children}</span>
          {showArrow && (
            <span className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowIcon className="h-4 w-4" />
            </span>
          )}
        </MotionLink>
      );
    }

    if (href) {
      return (
        <motion.a
          {...commonProps}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          <span>{children}</span>
          {(showArrow || external) && (
            <span className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              {arrowIcon ? <ArrowIcon className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
            </span>
          )}
        </motion.a>
      );
    }

    return (
      <motion.button
        {...commonProps}
        type={type}
        disabled={disabled}
      >
        <span>{children}</span>
        {showArrow && (
          <span className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowIcon className="h-4 w-4" />
          </span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;