import React from 'react';
import './Button.css';

// Asset Constants (from Figma)
const imgIcon = "http://localhost:3845/assets/2160b0a65c36928ef5d1acfd1edd6cd3c07270b8.svg";
const imgIcon1 = "http://localhost:3845/assets/8741dfae9d6a29c6e7d90bde6fc1f2730fc597ec.svg";
const img = "http://localhost:3845/assets/e6a9da3a7a0d57c17a6d50cdcfa7ac1914bc7549.svg";
const img1 = "http://localhost:3845/assets/e950ff47eeacc43554e21bc3417bde2e7cc243f2.svg";

const Button = ({
  className = '',
  hierarchy = 'Primary',
  icon = 'Default',
  iconLeading = false,
  iconLeadingSwap = null,
  iconTrailing = false,
  iconTrailingSwap = null,
  size = 'sm',
  state = 'Default',
  label = 'Button CTA',
  onClick,
  ...props
}) => {

  const isDisabled = state === 'Disabled';

  // Construct class names
  const classes = [
    'button',
    `button-${hierarchy.toLowerCase()}`,
    `size-${size.toLowerCase()}`,
    `icon-${icon.toLowerCase().replace(' ', '-')}`,
    isDisabled ? 'state-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {/* Leading Icon Logic */}
      {(icon === 'Dot leading' || (iconLeading && icon !== 'Only')) && (
        <span className="button-icon leading">
          {iconLeadingSwap || <img src={imgIcon} alt="" style={{ width: '20px', height: '20px' }} />}
        </span>
      )}

      {/* Button Text */}
      {icon !== 'Only' && <span>{label}</span>}

      {/* Trailing Icon Logic */}
      {((iconTrailing && icon !== 'Only' && icon !== 'Dot leading')) && (
        <span className="button-icon trailing">
          {iconTrailingSwap || <img src={imgIcon1} alt="" style={{ width: '20px', height: '20px' }} />}
        </span>
      )}

      {/* Icon Only Logic */}
      {icon === 'Only' && (
        <span className="button-icon only">
          {iconLeadingSwap || <img src={img} alt="" style={{ width: '24px', height: '24px' }} />}
        </span>
      )}
    </button>
  );
};

export default Button;
