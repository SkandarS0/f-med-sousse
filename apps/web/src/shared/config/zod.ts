import type { i18n } from "i18next";
import z from "zod";

export const zodConfig = (i18n: i18n) =>
  z.config({
    customError: (issue) => {
      if (issue.code === "too_small" && typeof issue.minimum === "number") {
        if (issue.origin === "string") {
          return {
            message: i18n.t("minLength.string", {
              count: issue.minimum,
              ns: "validation",
            }),
          };
        }
        if (issue.origin === "array") {
          return {
            message: i18n.t("minLength.array", {
              count: issue.minimum,
              ns: "validation",
            }),
          };
        }
      } else if (issue.code === "invalid_format") {
        if (issue.format === "email") {
          return {
            message: i18n.t("invalidFormat.email", {
              ns: "validation",
            }),
          };
        } else if (issue.format === "regex") {
          if (issue.pattern === /[A-Z]/.toString()) {
            return {
              message: i18n.t("invalidFormat.regex.uppercase", {
                ns: "validation",
              }),
            };
          } else if (issue.pattern === /[a-z]/.toString()) {
            return {
              message: i18n.t("invalidFormat.regex.lowercase", {
                ns: "validation",
              }),
            };
          } else if (issue.pattern === /[0-9]/.toString()) {
            return {
              message: i18n.t("invalidFormat.regex.number", {
                ns: "validation",
              }),
            };
          } else if (issue.pattern === /[\W_]/.toString()) {
            return {
              message: i18n.t("invalidFormat.regex.special", {
                ns: "validation",
              }),
            };
          }
        }
      }
    },
  });
