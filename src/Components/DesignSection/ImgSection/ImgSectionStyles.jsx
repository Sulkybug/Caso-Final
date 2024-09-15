export const styles = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "70%",
    margin: "20px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    borderRadius: "5px",
  },

  commentBubbleStyles: (y, x, activeCommentIndex, index) => {
    return {
      position: "absolute",
      top: y,
      left: x,
      width: activeCommentIndex === index ? "300px" : "60px",
      height: activeCommentIndex === index ? "140px" : "60px",
      backgroundColor: "rgba(32, 32, 32, 0.74)",
      borderRadius:
        activeCommentIndex === index
          ? "10px 10px 10px 0px" // All corners except bottom-left
          : "50% 50% 50% 0", // Fully rounded for the bubble
      transform: "translate(-50%, -50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: activeCommentIndex === index ? "flex-start" : "center",
      border: "2px solid white", // White border around avatar
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      padding: activeCommentIndex === index ? "10px" : "0",
      backdropFilter: "blur(5px)", // Apply blur effect
    };
  },

  avatar: {
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },

  boxCommentsOne: {
    marginLeft: "10px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "flex-start", // Ensures the comments and inputs are spaced apart
    height: "100%",
  },

  boxCommentsTwo: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%", // Full width for the container
    right: "0px",
  },

  closeIconAndName: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%", // Ensure the divider spans the full width
  },

  userName: {
    fontWeight: "bold",
    color: "white",
    fontSize: "0.85rem",
    marginLeft: 3,
  },

  divider: {
    backgroundColor: "white",
    width: "88%", // Adjust width of the divider
    margin: "0px 0", // Adjust margin for spacing
  },

  commentScroll: {
    width: "95%", // Adjust width of the comments section
    flex: 1,
    maxHeight: "60px",
    overflowY: "auto", // Scroll if comments exceed space
    marginTop: 5,
    marginBottom: "8px",
    "&::-webkit-scrollbar": {
      width: "5px", // Thin scrollbar
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#2c2c2c", // Dark background for the track
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#888", // Color for the scrollbar thumb
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#555", // Darker color on hover
    },
    scrollbarWidth: "thin", // For Firefox
    scrollbarColor: "#888 #2c2c2c",
  },

  TextFieldButtonBox: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "90%", // 90% width for the input and button
    position: "absolute", // Positioned at the bottom of the rectangle
    bottom: "10px",
    right: "15px",
  },

  textField: {
    backgroundColor: "rgb(59, 59, 59)",
    color: "aliceblue",
    borderRadius: "10px",
    fontSize: "0.75rem",
    flex: 1,
    input: { color: "#e0e0e0" },
  },
  submitButton: {
    fontSize: "0.75rem",
    borderRadius: "50%",
    width: "33px",
    height: "33px",
    minWidth: "0",
  },
};
