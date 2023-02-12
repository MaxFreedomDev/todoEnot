import { createTheme } from "@mui/material";

const Actor = "'Actor', sans-serif";
const Abhaya = "'Abhaya Libre', serif";

const theme = createTheme({
  palette: {
    background: {
      paper: "#282828",
    },
    text: {
      primary: "#F4F4F4",
    },
  },
  typography: {
    h1: { fontSize: 62 },
    h2: { fontSize: 53 },
    h3: { fontSize: 44 },
    h4: { fontSize: 36 },
    h5: { fontSize: 29 },
    h6: { fontSize: 24 },
    subtitle1: { fontSize: 23 },
    subtitle2: { fontSize: 19 },
    body1: { fontSize: 19 },
    body2: { fontSize: 16 },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: [Abhaya, Actor].join(),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#F4F4F4",
          transition: "opacity 0.3s",
          "&:hover": {
            opacity: 0.7,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#F4F4F4",
          "&.Mui-checked": {
            color: "#F4F4F4",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#F4F4F4",
          "&.Mui-focused": {
            color: "#F4F4F4",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          input: {
            color: "#F4F4F4",
          },
          "& label.Mui-focused": {
            color: "#F4F4F4",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#F4F4F4",
            },
            "&:hover fieldset": {
              borderColor: "#F4F4F4",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#F4F4F4",
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            "& .MuiSvgIcon-root": {
              fill: "#121212",
              fontSize: 14,
            },
          },
        },
      },
    },
  },
});

export default theme;
