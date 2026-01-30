const fortifyEndpoint = {
  login: "/login",
  logout: "/logout",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
} as const;

type FortifyEndpoint = (typeof fortifyEndpoint)[keyof typeof fortifyEndpoint];

export const fortifyConfig = {
  prefix: (endpoint: FortifyEndpoint) => `/auth${endpoint}`,
} as const;
