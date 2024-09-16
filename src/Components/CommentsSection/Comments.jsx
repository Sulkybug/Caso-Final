import React from "react";
import { Box, Avatar, Typography, Divider, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import avatarImg from "../../assets/img/avatarOne.png";
import ReactAudioPlayer from "react-audio-player";
import { styles } from "./CommentsStyles";

function Comments({ commentData }) {
  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.boxTitle}>
        <Typography sx={{ fontSize: 25, marginTop: 3, color: "#9c27b0" }}>
          Comentarios
        </Typography>
        <IconButton size="small" sx={{ color: "#9c27b0", marginTop: 3 }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "100%",
          marginLeft: 5,
        }}
      >
        <Typography sx={{ fontSize: 15, marginBottom: 3, paddingLeft: "10px" }}>
          {commentData.length === 0
            ? "No hay comentarios por el momento"
            : `Comentarios ${commentData.length}`}
        </Typography>
        {commentData
          .slice()
          .reverse() // Reverses the order putting first the last comment
          .map((data, index) => {
            if (data.comments && data.comments.length > 0) {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "80%",
                  }}
                >
                  <Box sx={styles.avatarUsernameBox}>
                    <Avatar
                      src={data.image || avatarImg}
                      alt="User Avatar"
                      sx={{ width: "40px", height: "40px" }}
                    />
                    <Typography sx={{ fontWeight: "bold", color: "#9c27b0" }}>
                      {data.userName || "User Name"}
                    </Typography>
                    <Box sx={{ marginLeft: "auto" }}>
                      <IconButton size="small" sx={{ color: "#9c27b0" }}>
                        <MoreHorizIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>

                  {/* Comments and timestamp */}
                  <Box
                    sx={{ marginTop: "8px", marginLeft: "20px", width: "100%" }}
                  >
                    {data.comments.map((comment, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: "8px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#555",
                              fontSize: "0.875rem",
                            }}
                          >
                            {comment.comment}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#999",
                              fontSize: "0.75rem",
                            }}
                          >
                            {comment.time}
                          </Typography>
                        </Box>

                        {/* Display the attached image if available */}
                        {comment.attachImg && (
                          <img
                            src={comment.attachImg}
                            alt="Attached"
                            draggable="false"
                            style={styles.img}
                          />
                        )}

                        {/* Display the attached audio if available */}
                        {comment.audioUrl && (
                          <Box
                            sx={{
                              width: "90%",
                              borderRadius: "4px",
                              padding: "8px",
                              border: "none",
                            }}
                          >
                            <ReactAudioPlayer
                              src={comment.audioUrl}
                              controls
                              className="custom-audio-player"
                              style={{}}
                            />
                          </Box>
                        )}
                      </Box>
                    ))}
                  </Box>

                  {/* Divider between comments */}
                  {index < commentData.length - 1 && (
                    <Divider sx={{ marginTop: "16px" }} />
                  )}
                </Box>
              );
            }
            return null;
          })}
      </Box>
    </Box>
  );
}

export default Comments;
