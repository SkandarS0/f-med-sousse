const fortifyEndoint = {
  login: "/login",
  logout: "/logout",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
} as const;

type FortifyEndpoint = (typeof fortifyEndoint)[keyof typeof fortifyEndoint];

export const fortifyConfig = {
  prefix: (endpoint: FortifyEndpoint) => `/auth${endpoint}`,
} as const;
