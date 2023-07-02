"use client";
const TextField = ({
  name,
  onChange,
  touched,
  error,
  placeholder,
  type,
  className,
  label,
  value,
  onBlur,
  refrence,
  height = "42px",
  ...otherProps
}) => {
  return (
    <label className="w-full h-[60px]">
      <input
        ref={refrence}
        value={value}
        name={name}
        onChange={onChange}
        className={`w-full h-[${height}] border border-primary-main rounded-xl p-3 text-sm focus:outline-slate-200 ${className}`}
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        label={label}
        onBlur={onBlur}
        {...otherProps}
      />
      {touched && error ? (
        <span className="text-xs text-red-800">{error}</span>
      ) : null}
    </label>
  );
};

export default TextField;
