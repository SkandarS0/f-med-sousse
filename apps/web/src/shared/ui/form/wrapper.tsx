import type * as React from "react";

type FormProps = {
  children: React.ReactNode;
  handleSubmit: () => void;
};

export function Form({ children, handleSubmit }: FormProps) {
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {children}
    </form>
  );
}
