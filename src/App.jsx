import { useState } from "react";
import "./App.css";
import Comments from "./Components/CommentsSection/Comments";
import DesignProposal from "./Components/DesignSection/DesignProposal";
import { Box, Container } from "@mui/material";
import { exampleCoordinates } from "./Components/Examples/ExamplesData";

function App() {
  const [clickCoordinates, setClickCoordinates] = useState(exampleCoordinates);
  return (
    <>
      <Container maxWidth={false} disableGutters sx={{ padding: 0 }}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            width: "100wh",
            height: "100vh",
          }}
        >
          <DesignProposal
            clickCoordinates={clickCoordinates}
            setClickCoordinates={setClickCoordinates}
          />
          <Comments commentData={clickCoordinates} />
        </Box>
      </Container>
    </>
  );
}

export default App;
