import React from 'react'
import './Button.scss'

/**
 * Button component props
 */
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

/**
 * Reusable button component
 * @param {ButtonProps} props - Button props
 * @returns {JSX.Element} Button element
 */
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
