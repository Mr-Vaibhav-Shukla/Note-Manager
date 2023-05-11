import s from "./style.module.css";

export function ButtonPrimary({classname ,type, children, onClick, isDisabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-primary ${s.button} ${classname}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
