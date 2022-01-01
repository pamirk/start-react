import { useTheme } from "@material-ui/core";

// eslint-disable-next-line import/prefer-default-export
export const useDarkMode = () => {
  const theme = useTheme();
  return theme.palette.type === "dark";
};
