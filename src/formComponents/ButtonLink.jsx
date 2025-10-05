import { Link } from 'react-router-dom'
import './button.css'

const Button = ({ label, href }) => {
  return (
    <nav className='button'>
      <Link className='button-title' to={href}>{label}</Link>
    </nav>
  )
}

export default Button