import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bgcolor={theme.palette.background.paper}
        width="90%"
        height="85%"
        borderRadius="30px"
        padding="1%"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      >
        {children}
      </Box>
    </Box>
  );
};
