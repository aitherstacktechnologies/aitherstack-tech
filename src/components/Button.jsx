import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const MotionLink = motion.create(Link);

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

    const sizeClass = {
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
      xl: 'btn-xl',
    }[size] || 'btn-md';

    const variantClass = {
      primary: 'btn-orange',
      ghost: 'btn-ghost',
      outline: 'btn-outline',
      subtle: 'btn-subtle',
    }[variant] || 'btn-orange';

    const combinedClassName = `${variantClass} ${sizeClass} ${fullWidth ? 'btn-full' : ''} ${className}`.trim();

    const commonProps = {
      ref,
      className: combinedClassName,
      whileTap: { scale: 0.98 },
      style: { willChange: 'transform' },
      disabled,
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
            <span className="flex-shrink-0 transition-transform duration-200">
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
            <span className="flex-shrink-0 transition-transform duration-200">
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
      >
        <span>{children}</span>
        {showArrow && (
          <span className="flex-shrink-0 transition-transform duration-200">
            <ArrowIcon className="h-4 w-4" />
          </span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;