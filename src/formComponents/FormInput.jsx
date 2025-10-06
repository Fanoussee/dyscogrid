import './formInput.css';

const FormInput = ({ label, register}) => {
  return (
    <div className="form-input">
            <div className="label">{label}</div>
            <input 
              className="input"
              {...register}
            />
          </div>
  )
}

export default FormInput