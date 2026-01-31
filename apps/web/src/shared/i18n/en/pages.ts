export default {
  login: {
    components: {
      card: {
        title: "Log in to your account",
        description: "Enter your email and password to access your portal.",
      },
      form: {
        forgotPassword: "Forgot your password?",
        rememberMe: "Remember me",
      },
    },
  },
  "forgot-password": {
    components: {
      card: {
        title: "Recover your password",
        description: "Enter your email and we’ll send you a reset link.",
      },
      form: {
        submit: "Send reset link",
      },
    },
  },
  "reset-password": {
    components: {
      card: {
        title: "Choose a new password",
        description: "Enter and confirm your new password.",
      },
      form: {
        submit: "Reset password",
      },
    },
    error: {
      h1: "Invalid Password Reset Link",
      p1: "This reset link is invalid or has expired.",
      p2: "Please request a new one.",
      requestNewLink: "Request a new reset link",
      backToSignIn: "Return to sign in",
    },
  },
};
