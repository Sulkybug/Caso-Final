import React from "react";
import {
  Box,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

// Component for handling user input, including text comments and file uploads
function CommentInput({
  newComment,
  setNewComment,
  handleAudioUpload,
  handleImageUpload,
  handleCommentSubmit,
  index,
  getTextFieldLabel,
  styles,
}) {
  return (
    <Box sx={styles.TextFieldButtonBox}>
      {/* TextField component for user input with label and end adornments */}
      <TextField
        label={getTextFieldLabel()}
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        size="small"
        sx={styles.textField}
        InputLabelProps={{
          style: { fontSize: "0.75rem", color: "#e0e0e0" },
        }}
        InputProps={{
          style: { fontSize: "0.75rem" },
          endAdornment: (
            <InputAdornment position="end">
              {/* IconButton for audio file upload */}
              <IconButton
                sx={{ color: "white", padding: "4px" }}
                component="label" // Ensure this triggers the file input
              >
                <MicIcon fontSize="small" />
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleAudioUpload}
                  style={{ display: "none" }}
                />
              </IconButton>
              {/* IconButton for image file upload */}
              <IconButton
                sx={{ color: "white", padding: "4px" }}
                component="label"
              >
                <AddPhotoAlternateIcon fontSize="small" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {/* Button to submit the comment */}
      <Button
        onClick={() => handleCommentSubmit(index)}
        variant="contained"
        size="small"
        endIcon={
          <SendIcon
            fontSize="small"
            sx={{
              transform: "rotate(-45deg)",
              margin: "auto",
              padding: "0px 5px 7px 2px",
            }}
          />
        }
        sx={styles.submitButton}
      />
    </Box>
  );
}

export default CommentInput;
