import '../css/button.css'

const Button = ({ label, onClick, disabled, type }) => {
  return (
    <button
      aria-disabled={disabled}
      className={`button ${disabled ? 'button-disabled' : ''}`}
      onClick={disabled ? null : onClick}
      type={type}
    >
      {label}
    </button>
  )
}

export default Button