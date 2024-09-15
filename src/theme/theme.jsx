import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0", // Your primary color
    },
  },

  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Set default font for the theme
    button: {
      fontFamily: "Roboto, Arial, sans-serif", // Override font for buttons
    },
    fontSize: 15,
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#9c27b0", // Primary color for the Slider
        },
        thumb: {
          // Customize the thumb (handle) of the slider
          color: "#9c27b0",
          border: "2px solid white",
        },
        track: {
          // Customize the track of the slider
          height: 6,
          borderRadius: 4,
        },
        rail: {
          // Customize the rail (background) of the slider
          height: 6,
          borderRadius: 4,
          backgroundColor: "purple", // Light gray for the background
        },
        valueLabel: {
          // Customize the value label of the slider
          backgroundColor: "#9c27b0",
          color: "white",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#9c27b0", // Primary color for the IconButton
          "&:hover": {
            backgroundColor: "#e1bee7", // Lighter shade for hover effect
          },
        },
      },
    },
  },
});

export default theme;
