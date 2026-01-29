export default {
  login: {
    components: {
      card: {
        title: "Connectez-vous à votre compte",
        description:
          "Entrez votre email et votre mot de passe pour accéder à votre portail.",
      },
      form: {
        forgotPassword: "Mot de passe oublié ?",
        rememberMe: "Se souvenir de moi",
      }
    },
  },
  "forgot-password": {
    components: {
      card: {
        title: "Récupérez votre mot de passe",
        description:
          "Entrez votre email et nous vous enverrons un lien de réinitialisation.",
      },
    },
  },
  "reset-password": {
    components: {
      card: {
        title: "Choisissez un nouveau mot de passe",
        description: "Saisissez et confirmez votre nouveau mot de passe.",
      },
    },
    error: {
      h1: "Lien de réinitialisation de mot de passe invalide",
      p1: "Ce lien est invalide ou a expiré.",
      p2: "Veuillez en demander un nouveau.",
      requestNewLink: "Demander un nouveau lien",
      backToSignIn: "Retour à la connexion",
    },
  },
};
