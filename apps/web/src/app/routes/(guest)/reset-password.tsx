import { createFileRoute } from "@tanstack/react-router";
import { resetPasswordVerifyToken as verifyToken } from "@/features/reset-password/lib/verify-token.ts";
import { ResetPasswordSearchSchema } from "@/features/reset-password/model/schema.ts";
import { ResetPasswordErrorPage } from "@/pages/reset-password/ui/error-page.tsx";
import { ResetPasswordPage } from "@/pages/reset-password/ui/page.tsx";

export const Route = createFileRoute("/(guest)/reset-password")({
  validateSearch: ResetPasswordSearchSchema,
  beforeLoad: async ({ search }) => {
    return verifyToken(search);
  },
  component: ResetPasswordPage,
  errorComponent: ResetPasswordErrorPage,
});
