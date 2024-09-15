import avatarImgTwo from "../../assets/img/avatarTwo.png";
import avatarImgThree from "../../assets/img/avatarThree.png";
import avatarImgFour from "../../assets/img/avatarFour.png";
import imgSelections from "../../assets/img/imgSelections.jpg";
import audioExample from "../../assets/audio/example.mp3";

export const exampleCoordinates = [
  {
    x: 190,
    y: 110,
    image: avatarImgFour,
    comments: [
      {
        comment: "Great design! The color palette really stands out.",
        time: "12/9/2024, 18:25:47",
        attachImg: "",
        audioUrl: "", // Add audio URL field
      },
      {
        comment:
          "I love the typography choice. It complements the design well.",
        time: "12/9/2024, 22:25:47",
        attachImg: "",
        audioUrl: audioExample,
      },
    ],
    userName: "Ethan Thompson",
  },
  {
    x: 270,
    y: 460,
    image: avatarImgTwo,
    comments: [
      {
        comment:
          "Could use some improvement in spacing. The layout feels cramped.",
        time: "13/9/2024, 9:25:47",
        attachImg: "",
        audioUrl: "", // Add audio URL field
      },
      {
        comment: "Nice color scheme. The contrast is visually appealing.",
        time: "13/9/2024, 10:25:47",
        attachImg: "",
        audioUrl: "", // Add audio URL field
      },
    ],
    userName: "Sofia Martinez",
  },
  {
    x: 770,
    y: 390,
    image: avatarImgThree,
    comments: [
      {
        comment: "Check the alignment of the elements. They seem off.",
        time: "14/9/2024, 19:25:47",
        attachImg: "",
        audioUrl: "", // Add audio URL field
      },
      {
        comment:
          "Consider using a different font for the body text. It’s a bit hard to read.",
        time: "14/9/2024, 19:30:47",
        attachImg: imgSelections,
        audioUrl: "", // Add audio URL field
      },
    ],
    userName: "Rebeca Hernández",
  },
];
