import { NavLink } from 'react-router-dom'
import '../css/button.css'

const ButtonLink = ({ label, href, onClick, disabled, className }) => {
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