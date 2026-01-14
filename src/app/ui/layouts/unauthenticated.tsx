import { Outlet } from "@tanstack/react-router";

export function UnauthenticatedLayout() {
  return (
    <div className="flex flex-col h-dvh">
      <UnauthenticatedHeader />
      <main className="flex-1 min-h-0 overflow-y-auto">
        <div className="flex min-h-full w-full max-w-sm items-center mx-auto p-6">
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </main>
      <UnauthenticatedFooter />
    </div>
  );
}

function UnauthenticatedHeader() {
  return (
    <header className="shrink-0 px-6 py-4 border-b">
      Unauthenticated Header
    </header>
  );
}

function UnauthenticatedFooter() {
  return (
    <footer className="shrink-0 px-6 py-4 border-t">
      Unauthenticated Footer
    </footer>
  );
}
