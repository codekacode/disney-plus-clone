import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogo src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Suscribete y disfruta lo mejor de Disney, Pixar, Marvel, Star Wars y
          National Geographic. Descubre nuevos personajes y Originales
          increíbles. Una nueva historia todos los días. Descargala y disfruta.
          Disfruta del streaming. Suscríbete ahora. Originales Disney+.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: top;
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    z-index: -1;
    opacity: 0.7;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTALogo = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 12px;
`;

const CTALogoTwo = styled(CTALogo)`
  width: 90%;
`;
