import React from "react";
import Cocktail from "./Cocktail";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Cocktails = ({ data }) => {
  return (<Wrapper>
    {
      data.map((drink) => {
        return <Cocktail key={drink.idDrink} {...drink} />
      })
    }
  </Wrapper>);

  // al posto di useHistory abbiamo iniziato useNavigate()
  // const navigate = useNavigate();

  // al posto di history.push() abbiamo fatto nella funzione goToCocktail()
  // navigate(`/cocktail/${_id}`);
};

const Wrapper = styled.section`
  margin-top: 3rem;
  min-height: 20vh;
  display: grid;
  place-items: center;
  gap: 2rem;
  @media screen and (min-width: 753px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
export default Cocktails;
