import { cva } from "class-variance-authority";

const logoVariants = cva("h-16 w-auto", {
  variants: {
    variant: {
      dark: "hidden dark:block",
      light: "block dark:hidden",
    },
  },
});

export function AppLogo() {
  return (
    <>
      <img
        src="/official-logo-dark.svg"
        alt="F-Med Sousse Logo"
        className={logoVariants({ variant: "dark" })}
      />
      <img
        src="/official-logo-light.svg"
        alt="F-Med Sousse Logo"
        className={logoVariants({ variant: "light" })}
      />
    </>
  );
}
