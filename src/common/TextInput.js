import React from 'react';
const TextInput = ({
name ,
type,
value,
onChange,
label,
info,
error,
placeholder
}) => {
  return (
    <div className="form-group">
    {label}
    <input type={type} className='form-control form-control-lg' placeholder={placeholder} name={name} value={value} onChange={onChange}/>
    {info  && (<div className="form-text text-muted">{info}</div>)}
    {error && (<div className="invalid-feedback" style={{color : 'red'}}>{error}</div>)}
  </div>
  )
}
export default TextInput;