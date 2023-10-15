import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#DAA520",
    },
    secondary: {
      main: "#8a8a8a",
    },
    background: {
      default: "#1e1e1e",
      paper: "#2c2c2c",
    },
    text: {
      primary: "#f5f5dc",
      secondary: "#8a8a8a",
    },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    h6: {
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
      fontWeight: "bold",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "8px 16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: "#bf8f00",
          },
        },
      },
    },
  },
});

export { theme };
