import React, { useState } from "react";
import { Box } from "@mui/material";
import NameSection from "./NameSection";
import ImgSection from "./ImgSection/ImgSection";
import ControlsSection from "./ControlsSection";

function DesignProposal({ clickCoordinates, setClickCoordinates }) {
  const [isViewActive, setView] = useState(false);
  const [isCommenting, setIsComenting] = useState(false);
  const [activeCommentIndex, setActiveCommentIndex] = useState(null);

  const handleCommentButtonClick = () => {
    setIsComenting(true); // to activate commenting mode
  };

  const handleDeactivateCommenting = () => {
    setIsComenting(false); // to disable comments
  };

  const handleSetActiveCommentIndex = (index) => {
    setActiveCommentIndex(index); // Set the index of the active comment box
  };

  const handleViewButtonCLick = () => {
    isViewActive === false ? setView(true) : setView(false); // to disable or enable comments view on the img
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "70%",
        height: "100%",
        background: "linear-gradient(to bottom, white, #a8a8a8)",
      }}
    >
      <NameSection />
      <ImgSection
        isViewActive={isViewActive}
        isCommenting={isCommenting}
        activeCommentIndex={activeCommentIndex}
        setActiveCommentIndex={handleSetActiveCommentIndex}
        onDeactivateCommenting={handleDeactivateCommenting}
        clickCoordinates={clickCoordinates}
        setClickCoordinates={setClickCoordinates}
      />
      <ControlsSection
        isViewActive={isViewActive}
        onViewButton={handleViewButtonCLick}
        isCommenting={isCommenting}
        onCommentButtonClick={handleCommentButtonClick}
      />
    </Box>
  );
}

export default DesignProposal;
