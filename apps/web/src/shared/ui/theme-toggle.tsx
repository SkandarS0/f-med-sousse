import { IconSunMoon } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { type Theme, useTheme } from "@/shared/lib/theme.ts";
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

const variants = {
  "dropdown-menu": DropdownMenuThemeToggle,
};

export function ThemeToggle({ as }: { as: "dropdown-menu" }) {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = (newTheme: Theme) => {
    if (newTheme === theme) {
      return;
    }
    setTheme(newTheme);
  };
  const Component = variants[as];
  return (
    <Component currentTheme={theme} handleThemeChange={handleThemeChange} />
  );
}

type ThemeToggleComponentProps = {
  currentTheme: Theme;
  handleThemeChange: (theme: Theme) => void;
};

function DropdownMenuThemeToggle({
  currentTheme,
  handleThemeChange,
}: ThemeToggleComponentProps) {
  const { t } = useTranslation("shared_ui");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button size={"icon-lg"} variant="outline">
            <IconSunMoon />
          </Button>
        }
      />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t("theme-toggle.label")}</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={currentTheme}
            onValueChange={handleThemeChange}
          >
            <DropdownMenuRadioItem value="light">
              {t("theme-toggle.light")}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">
              {t("theme-toggle.dark")}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">
              {t("theme-toggle.system")}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
