import { IconLanguage } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/primitives/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/shared/ui/primitives/dropdown-menu";
import { Separator } from "@/shared/ui/primitives/separator";

type LanguageToggleProps = {
  as?: "menu-item" | "dropdown-menu" | "footer-link";
};
export function LanguageToggle({ as = "dropdown-menu" }: LanguageToggleProps) {
  const variants = {
    "menu-item": MenuItemLanguageToggle,
    "dropdown-menu": DropdownMenuLanguageToggle,
    "footer-link": FooterLinkLanguageToggle,
  };
  const Component = variants[as];
  return <Component />;
}

function DropdownMenuLanguageToggle() {
  const { i18n } = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button size={"icon-lg"} variant="outline">
            <IconLanguage />
          </Button>
        }
      />
      <DropdownMenuContent withArrow>
        <DropdownMenuRadioGroup
          defaultValue={i18n.language}
          onValueChange={(value) => i18n.changeLanguage(value)}
        >
          <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="fr">Français</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MenuItemLanguageToggle() {
  return <div>Menu Item Language Toggle</div>;
}

function FooterLinkLanguageToggle() {
  const { i18n } = useTranslation();

  const isEnglish = i18n.language === "en";
  const isFrench = i18n.language === "fr";

  const getLinkClassName = (isActive: boolean) =>
    cn("transition-colors hover:text-foreground", {
      "font-semibold text-foreground": isActive,
      "text-muted-foreground font-normal": !isActive,
    });

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="link"
        size="sm"
        onClick={() => i18n.changeLanguage("en")}
        className={getLinkClassName(isEnglish)}
      >
        English
      </Button>
      <Separator orientation="vertical" />
      <Button
        variant="link"
        size="sm"
        onClick={() => i18n.changeLanguage("fr")}
        className={getLinkClassName(isFrench)}
      >
        Français
      </Button>
    </div>
  );
}
