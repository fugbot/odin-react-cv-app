export default function Input({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  ariaLabel,
  ariaDescribedBy,
  ariaInvalid,
  required,
  labelClassName,
  inputClassName,
  wrapperClassName,
  ...props
}) {
  function handleChange(e) {
    e.preventDefault();
    onChange(name, e.target.value);
  }

  return (
    <div className={wrapperClassName}>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        aria-invalid={ariaInvalid}
        required={required}
        className={inputClassName}
        {...props}
      />
    </div>
  );
}
