type FormPros = {
  children: React.ReactNode;
  handleSubmit: () => void;
};

export function Form({ children, handleSubmit }: FormPros) {
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
