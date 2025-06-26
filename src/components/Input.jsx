export default function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  ariaLabel,
  ariaDescribedBy,
  ariaInvalid,
  required,
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-invalid={ariaInvalid}
      required={required}
    />
  );
}
