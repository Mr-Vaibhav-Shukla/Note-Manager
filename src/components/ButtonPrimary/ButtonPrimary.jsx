import s from "./style.module.css";

export function ButtonPrimary({ children, onClick, isDisabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn btn-primary ${s.button}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
