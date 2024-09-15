import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function NameSection() {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{
        width: "90%",
        height: "9%",
        justifyContent: "flex-start",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="row"
        sx={{ color: "#9c27b0", width: "100%" }}
      >
        <IconButton
          size="small"
          sx={{ padding: "5px 0px 5px 10px", marginRight: 0.8 }}
        >
          <ArrowBackIosIcon fontSize="small" />
        </IconButton>
        <Typography>
          Proyectos / Conoce los nuevos productos de pepsico /
          <strong> Revisión de proyecto</strong>
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography sx={{ fontSize: 22, fontWeight: "bold", marginTop: 4 }}>
          Revision #2
        </Typography>
      </Box>
    </Box>
  );
}

export default NameSection;
