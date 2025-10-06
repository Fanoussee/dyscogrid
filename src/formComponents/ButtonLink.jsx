import { NavLink } from 'react-router-dom'
import './button.css'

const ButtonLink = ({ label, href, onClick }) => {
  return (
    <NavLink className='button' to={href} onClick={onClick}>{label}</NavLink>
  )
}

export default ButtonLink