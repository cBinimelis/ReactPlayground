import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
};

function Button({ children, isLoading, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={isLoading}
      className={`btn btn-${isLoading ? "secondary" : "primary"}`}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default Button;
