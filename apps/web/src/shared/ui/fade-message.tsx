import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/shared/lib/utils";

type FadeMessageProps = {
  message?: string | null;
  children?: ReactNode;
  timeout?: number;
  className?: string;
  onTimeout?: () => void;
};

const FADE_DURATION_MS = 300;

export function FadeMessage({
  message = null,
  children,
  timeout = 5000,
  className,
  onTimeout,
}: FadeMessageProps) {
  const content = useMemo(() => {
    if (children) {
      return children;
    }

    return message;
  }, [children, message]);

  const [isVisible, setIsVisible] = useState(Boolean(content));
  const [shouldRender, setShouldRender] = useState(Boolean(content));

  useEffect(() => {
    if (!content) {
      setIsVisible(false);
      setShouldRender(false);
      return;
    }

    setShouldRender(true);
    setIsVisible(true);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, timeout);

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
      onTimeout?.();
    }, timeout + FADE_DURATION_MS);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, [content, timeout, onTimeout]);

  if (!shouldRender || !content) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "text-sm text-center transition-all duration-300 ease-out motion-reduce:transition-none ",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
        className,
      )}
    >
      {content}
    </div>
  );
}
