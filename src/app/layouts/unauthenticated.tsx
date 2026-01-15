import { Outlet } from "@tanstack/react-router";
import { LanguageToggle } from "@/features/change-language";

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
    <header className="shrink-0 p-3 border-b bg-muted/50">
      <div className="flex items-center">
        <img
          src="/official-logo.svg"
          alt="F-Med Sousse Logo"
          className="h-16 w-auto"
        />
        <div className="ml-auto">
          <LanguageToggle as="dropdown-menu" />
        </div>
      </div>
    </header>
  );
}

function UnauthenticatedFooter() {
  return (
    <footer className="shrink-0 p-2 border-t">
      <div className="flex flex-col-reverse items-center gap-2 sm:grid sm:grid-cols-3">
        <div className="hidden sm:block" />
        <div className="text-center">All rights reserved.</div>
        <div className="sm:ml-auto">
          <LanguageToggle as="footer-link" />
        </div>
      </div>
    </footer>
  );
}
