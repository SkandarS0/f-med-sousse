import { IconLanguage } from "@tabler/icons-react";
import { cva } from "class-variance-authority";
import { useTranslation } from "react-i18next";
import type { SupportedLng } from "@/shared/i18n/i18next.ts";
import { Button } from "@/shared/ui/primitives/button.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/shared/ui/primitives/dropdown-menu.tsx";
import { Separator } from "@/shared/ui/primitives/separator.tsx";

type LanguageToggleProps = {
  as?: "menu-item" | "dropdown-menu" | "links";
};

const variants = {
  "menu-item": MenuItemLanguageToggle,
  "dropdown-menu": DropdownMenuLanguageToggle,
  links: FooterLinkLanguageToggle,
};

export function LanguageToggle({ as = "dropdown-menu" }: LanguageToggleProps) {
  const { i18n } = useTranslation();
  const handleLanguageChange = async (lang: SupportedLng) => {
    if (lang === i18n.language) {
      return;
    }
    await i18n.changeLanguage(lang);
  };

  const Component = variants[as];
  return (
    <Component
      language={i18n.language as SupportedLng}
      handleLanguageChange={handleLanguageChange}
    />
  );
}

type LanguageToggleComponentProps = {
  language: SupportedLng;
  handleLanguageChange: (lang: SupportedLng) => void;
};

function DropdownMenuLanguageToggle({
  language,
  handleLanguageChange,
}: LanguageToggleComponentProps) {
  const { t } = useTranslation("shared_ui");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button size={"icon-lg"} variant="outline">
            <IconLanguage />
          </Button>
        }
      />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t("language-toggle.label")}</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={language}
            onValueChange={handleLanguageChange}
          >
            <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="fr">Français</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MenuItemLanguageToggle({
  language: _language,
  handleLanguageChange: _handleLanguageChange,
}: LanguageToggleComponentProps) {
  return <div>Menu Item Language Toggle</div>;
}

const footerLinkClass = cva("transition-colors hover:text-foreground", {
  variants: {
    active: {
      true: "font-semibold text-foreground",
      false: "text-muted-foreground font-normal",
    },
  },
  defaultVariants: {
    active: false,
  },
});

function FooterLinkLanguageToggle({
  language,
  handleLanguageChange,
}: LanguageToggleComponentProps) {
  const isEnglish = language === "en";
  const isFrench = language === "fr";

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="link"
        size="sm"
        onClick={() => handleLanguageChange("en")}
        className={footerLinkClass({ active: isEnglish })}
      >
        English
      </Button>
      <Separator orientation="vertical" />
      <Button
        variant="link"
        size="sm"
        onClick={() => handleLanguageChange("fr")}
        className={footerLinkClass({ active: isFrench })}
      >
        Français
      </Button>
    </div>
  );
}
