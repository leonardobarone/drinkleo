import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../assets/animation/not-found.json";
import { Link } from "react-router-dom";
import useTitle from "../utils/useTitle";


const ErrorScreen = () => {
  useTitle('Pagina Non Trovata')
  return <Wrapper>
    <h3>Pagina Non Trovata</h3>
    <Lottie options={{
      loop: true,
      autoplay: true,
      reverse: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }} width={344} height={344} />
    <Link to="/" className="btn btn-primary">Torna in Home</Link>
  </Wrapper>;
};

const Wrapper = styled.section`
  min-height: 86.2vh;
  padding: 50px 0px;
  display: grid;
  display: --ms-grid;
  display: --moz-grid;
  display: --webkit-grid;
  place-items: center;
  h3 {
    text-transform: uppercase;
  }
  .btn {
    border-radius: 22px;
  }
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
`;

export default ErrorScreen;
