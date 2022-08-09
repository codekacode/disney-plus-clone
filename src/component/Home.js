import styled from "styled-components";
import ImageSlider from "./ImageSlider";

function Home() {
  return (
    <Container>
      <ImageSlider />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

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
