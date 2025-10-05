import "./button.css"

const Button = ({ label, onClick }) => {
  return (
    <button className="button button-title button-large" onClick={onClick}>{label}</button>
  )
}

export default Button