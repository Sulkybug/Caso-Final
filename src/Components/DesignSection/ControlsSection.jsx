import React from "react";
import {
  Box,
  Typography,
  Button,
  Slider,
  IconButton,
  Tooltip, // Import Tooltip
  Dialog,
  DialogContent,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddCommentIcon from "@mui/icons-material/AddComment";

function ControlsSection({ onCommentButtonClick, isCommenting }) {
  const [zoom, setZoom] = React.useState(50);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleSliderChange = (event, newValue) => {
    setZoom(newValue);
  };

  // Function to handle the "Finalizar revisión" button click
  const handleFinalizeClick = () => {
    setDialogOpen(true); // Open the dialog
  };

  // Function to handle closing the dialog
  const handleCloseDialog = () => {
    setDialogOpen(false); // Close the dialog
  };

  return (
    <Box
      sx={{
        width: "85%",
        borderRadius: "10px",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "38px", // Adjusted space between zoom and buttons
        padding: "16px 36px 16px 36px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          flex: 1,
          maxWidth: "40%",
          marginLeft: "10px",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            marginRight: "2px",
            color: "#9c27b0",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          -
        </Typography>
        <Box
          sx={{
            position: "relative",
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Slider
            value={zoom}
            onChange={handleSliderChange}
            aria-label="zoom"
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value}%`}
            sx={{
              flex: 1,
              marginX: "8px",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              height: "20px", // Increased height for the line
              width: "2px",
              backgroundColor: "#9c27b0",
            }}
          />
        </Box>
        <Typography
          variant="caption"
          sx={{
            marginRight: "8px",
            color: "#9c27b0",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          +
        </Typography>
        <Typography
          variant="caption"
          sx={{
            marginLeft: "8px",
            color: "#9c27b0",
            fontSize: "20px",
          }}
        >
          {zoom}%
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
          gap: "30px",
          width: "40%",
        }}
      >
        <Tooltip title="View">
          <IconButton
            sx={{
              borderRadius: "20px",
              fontSize: "30px",
            }}
            aria-label="View"
          >
            <VisibilityIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Add Comment">
          {" "}
          {/* Add Tooltip here */}
          <IconButton
            onClick={onCommentButtonClick} // Trigger comment mode
            sx={{
              borderRadius: "20px",
              fontSize: "30px",
              color: isCommenting ? "#ff5722" : "#9c27b0", // Change color based on isCommenting
            }}
            aria-label="Comment"
          >
            <AddCommentIcon />
          </IconButton>
        </Tooltip>

        <Button
          onClick={handleFinalizeClick}
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            padding: "5px 20px 5px 20px",
            fontSize: "17px",
          }}
          variant="contained"
        >
          Finalizar revisión
        </Button>
      </Box>
      {/* Dialog component for alert */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "24px",
            backgroundColor: "white",
            borderRadius: "8px",
            width: "400px", // Set the width of the dialog content
            maxWidth: "90vw", // Set the maximum width relative to the viewport width
            height: "150px",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontSize: 40 }}>
            🎉
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 1, color: "#9c27b0", fontWeight: "bold" }}
          >
            LA REVISION #2
          </Typography>
          <Typography variant="body2">SE HA CREADO CORRECTAMENTE</Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default ControlsSection;
