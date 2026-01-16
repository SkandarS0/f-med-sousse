export function AppLogo() {
  return (
    <>
      <img
        src="/official-logo-dark.svg"
        alt="F-Med Sousse Logo"
        className="hidden h-16 w-auto dark:block"
      />
      <img
        src="/official-logo-light.svg"
        alt="F-Med Sousse Logo"
        className="block h-16 w-auto dark:hidden"
      />
    </>
  );
}
