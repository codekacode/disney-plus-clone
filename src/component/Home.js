import styled from "styled-components";
import { useEffect } from "react";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import db from "../firebase";

function Home() {
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      console.log(snapshot);
      // let tempMovies = snapshot.docs.map((doc) => {
      //   return { id: doc.id, ...doc.data() };
      // });
      // console.log(tempMovies);
    });
  }, []);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    background-image: url("/images/home-background.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
