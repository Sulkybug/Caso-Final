import React, { useState } from "react";
import proposal from "../../../assets/img/proposal.jpg";
import avatarImg from "../../../assets/img/avatarOne.png";
import { Box, Avatar, IconButton, Divider, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styles } from "./ImgSectionStyles";
import CommentInput from "./CommentInput";
import ReactAudioPlayer from "react-audio-player";
// Component for handling user input, including text comments and file uploads
function ImgSection({
  isCommenting,
  activeCommentIndex,
  setActiveCommentIndex,
  onDeactivateCommenting,
  clickCoordinates,
  setClickCoordinates,
}) {
  const [newComment, setNewComment] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [audioPreview, setAudioPreview] = useState("");

  // Handle image click to add a new comment bubble
  const handleImageClick = (e) => {
    if (!isCommenting) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Add new comment coordinates
    setClickCoordinates((prevCoords) => [
      ...prevCoords,
      {
        x,
        y,
        image: avatarImg,
        comments: [],
        userName: "UserName",
      },
    ]);
    onDeactivateCommenting(); // Deactivate commenting mode
    // Reset state for new comment
    setNewComment("");
    setSelectedImage(null);
    setImagePreview("");
    setSelectedAudio(null);
    setAudioPreview("");
  };
  // Handle avatar click to toggle the active comment box
  const handleAvatarClick = (index) => {
    if (activeCommentIndex === index) {
      setActiveCommentIndex(null); // Close active comment box
      setNewComment("");
    } else {
      setActiveCommentIndex(index); // Open new comment box
      setNewComment("");
    }
  };
  // Handle comment submission
  const handleCommentSubmit = (index) => {
    // Prevent submission if no content is provided
    if (!newComment.trim() && !imagePreview && !audioPreview) return;
    const updatedCoordinates = [...clickCoordinates];
    const currentTimestamp = new Date().toLocaleString();
    // Add new comment to the specified index
    updatedCoordinates[index].comments.push({
      comment: newComment,
      time: currentTimestamp,
      attachImg: imagePreview,
      audioUrl: audioPreview,
    });
    // Reset state after submission
    setClickCoordinates(updatedCoordinates);
    setNewComment("");
    setImageName("");
    setSelectedImage(null);
    setImagePreview("");
    setSelectedAudio(null);
    setAudioPreview("");
  };
  // Handle closing of the comment box
  const handleCloseCommentBox = () => {
    setActiveCommentIndex(null);
    setNewComment("");
  };
  // Handle image file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImageName(file.name);
      const imageURL = URL.createObjectURL(file);
      setImagePreview(imageURL);
    }
  };
  // Handle audio file upload
  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedAudio(file);
      const audioURL = URL.createObjectURL(file);
      setAudioPreview(audioURL);
    }
  };
  // Determine the label for the text field in the comment input
  const getTextFieldLabel = () => {
    if (selectedImage) return "Image Attached: " + imageName;
    if (selectedAudio) return "Audio Attached";
    if (clickCoordinates[activeCommentIndex]?.comments.length > 0)
      return "REPLY";
    return "COMMENT";
  };

  return (
    <Box sx={styles.container}>
      {/* Main image that triggers comment bubble placement */}
      <img
        src={proposal}
        alt="Design Proposal"
        onClick={handleImageClick}
        style={styles.image}
      />
      {/* Render comment bubbles for each coordinate */}
      {clickCoordinates.map((coord, index) => (
        <Box
          key={index}
          sx={styles.commentBubbleStyles(
            `${coord.y - 30}px`, //correction to make arrow tip match with the click
            `${coord.x + 30}px`, //correction to make arrow tip match with the click
            activeCommentIndex,
            index
          )}
        >
          {" "}
          {/* Avatar for the comment bubble */}
          <Avatar
            src={coord.image}
            sx={styles.avatar}
            alt="User Avatar"
            onClick={() => handleAvatarClick(index)}
          />
          {/* Display comment box if the current bubble is active */}
          {activeCommentIndex === index && (
            <Box sx={styles.boxCommentsOne}>
              <Box sx={styles.boxCommentsTwo}>
                <Box sx={styles.closeIconAndName}>
                  <Box sx={styles.userName}>
                    <Typography>{coord.userName}</Typography>
                  </Box>{" "}
                  {/* Close button to hide the comment box */}
                  <IconButton
                    size="small"
                    onClick={handleCloseCommentBox}
                    sx={{ color: "white", marginRight: 2 }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>

                <Divider sx={styles.divider} />
              </Box>

              <Box sx={styles.commentScroll}>
                {/* Render existing comments */}
                {coord.comments.map((comment, i) => {
                  const hasImage = comment.attachImg;
                  const hasAudio = comment.audioUrl;
                  return (
                    <Box
                      key={i}
                      sx={{
                        color: "rgba(255, 255, 255, 0.877)",
                        marginBottom: "8px",
                      }}
                    >
                      <Box>
                        <Typography sx={{ fontSize: 15 }}>
                          {comment.comment}
                        </Typography>
                      </Box>
                      {hasImage && (
                        <img
                          src={comment.attachImg}
                          alt="Attached"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            marginTop: "8px",
                          }}
                        />
                      )}

                      {hasAudio && (
                        <Box
                          sx={{
                            width: "90%",
                            marginTop: "8px",
                            borderRadius: "4px",
                            padding: "8px",
                            border: "none",
                          }}
                        >
                          <ReactAudioPlayer
                            src={comment.audioUrl}
                            controls
                            className="custom-audio-player"
                          />
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>
              {/* Component for adding a new comment */}
              <CommentInput
                newComment={newComment}
                setNewComment={setNewComment}
                handleAudioUpload={handleAudioUpload}
                handleImageUpload={handleImageUpload}
                handleCommentSubmit={handleCommentSubmit}
                index={index}
                getTextFieldLabel={getTextFieldLabel}
                styles={styles}
              />
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}

export default ImgSection;
