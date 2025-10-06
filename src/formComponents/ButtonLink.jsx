import { NavLink } from 'react-router-dom'
import './button.css'

const ButtonLink = ({ label, href, onClick, disabled }) => {
  return (
    <NavLink 
      aria-disabled={disabled}
      className={`button ${disabled ? 'button-disabled' : ''}`}
      to={href}
      onClick={disabled ? null : onClick}
    >
      {label}
    </NavLink>
  )
}

export default ButtonLink