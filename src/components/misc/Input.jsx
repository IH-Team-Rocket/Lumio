function Input({
  type = "text", label, placeholder,
  onChange, value, id, name, error, onBlur
}) {
  return (
    <div className="form-input">
      <label htmlFor={id} className={`form-label ${value && 'label-valid'}`}>
        {label}
      </label>
      <input
        type={type} className={`form-control ${error ? 'is-invalid' : ''}`}
        id={id}
        onChange={onChange} value={value}
        name={name} onBlur={onBlur}
      />
      
      {error && (
        <div className="invalid-feedback">
          {error}
        </div>
      )}
    </div>
  )
}

export default Input