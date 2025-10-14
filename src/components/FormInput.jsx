import '../css/formInput.css';

const FormInput = ({ label, register, disabled }) => {
  return (
    <div className="form-input">
      <div className="label">{label}</div>
      <input 
        className="input"
        {...register}
        disabled={disabled}
      />
    </div>
  )
}

export default FormInput