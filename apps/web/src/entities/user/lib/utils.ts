import type { SupportedLng } from "@/shared/i18n/i18next.ts";

export const getUserInitials = (
  firstName: string,
  lastName: string,
  language?: SupportedLng,
) => {
  const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : "";
  const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : "";
  return language === "fr"
    ? `${lastInitial}${firstInitial}`
    : `${firstInitial}${lastInitial}`;
};

export const getUserFullName = (
  firstName: string,
  lastName: string,
  language?: SupportedLng,
) => {
  return language === "fr"
    ? `${lastName} ${firstName}`
    : `${firstName} ${lastName}`;
};
