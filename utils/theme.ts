import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontFamily: "Heebo, san-serif",
  },
  palette: {
    primary: {
      main: "#FF6464",
    },
    secondary: {
      main: "#00A8CC",
      light: "#EDF7FA",
      dark: "#142850",
    },
    text: {
      primary: "#21243D",
      secondary: "#00A8CC",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover > .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00A8CC",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00A8CC",
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff1714",
          },
          "& > .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00A8CC",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#00A8CC",
          "&.Mui-focused": {
            color: "#00A8CC",
          },
          "&.Mui-error": {
            color: "#ff1714",
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
      styleOverrides: {
        root: {
          color: "#000000",
          "&:hover, &.active ": {
            color: "#FF6464",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          ":last-child": { padding: "0px" },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: "728px",
          "@media (min-width: 600px)": { maxWidth: "728px" },
        },
        maxWidthMd: {
          maxWidth: "908px",
          "@media (min-width: 900px)": { maxWidth: "908px" },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            color: "white",
          },
        },
      ],
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.textHidden": {
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          },
        },
      },
    },
  },
});
