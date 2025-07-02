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
}) {
  function handleChange(e) {
    e.preventDefault();
    onChange(name, e.target.value);
  }

  return (
    <label htmlFor={id}>
      {label}
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
      />
    </label>
  );
}
