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
        }
      }
    },
  });
