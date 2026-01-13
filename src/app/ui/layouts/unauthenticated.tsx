import { Outlet } from "@tanstack/react-router";

export function UnauthenticatedLayout() {
  return (
    <>
      <UnauthenticatedHeader />
      <main>
        <Outlet />
      </main>
      <UnauthenticatedFooter />
    </>
  );
}

function UnauthenticatedHeader() {
  return <header>Unauthenticated Header</header>;
}

function UnauthenticatedFooter() {
  return <footer>Unauthenticated Footer</footer>;
}
