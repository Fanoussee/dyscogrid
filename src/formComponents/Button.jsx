import { Link } from 'react-router-dom'
import './button.css'

const Button = ({ label, href }) => {
  return (
    <nav>
      <Link className='button' to={href}>{label}</Link>
    </nav>
  )
}

export default Button