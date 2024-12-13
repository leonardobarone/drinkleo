import React, { useEffect, useState } from "react";
import { Hero, Cocktails, Loading, ErrorMessage } from "../components";
import { FaSearch } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../assets/animation/drink-animation.json";
import { Link } from "react-router-dom";
import { LinkComponent } from "../utils/links";
import { RiTreasureMapLine } from "react-icons/ri";
import { useGlobalContext } from "../context";
import useTitle from "../utils/useTitle";



const HomeScreen = () => {
  useTitle('Home');

  const {query, isLoading, data, isError, count, searchCocktail, deleteScrollPosition, scrollPosition} = useGlobalContext();
  const [input, setInput] = useState(query);


  const handleSubmit = (e) => {
    e.preventDefault();
    searchCocktail(input)
  }

  useEffect(()=> {
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition)
      deleteScrollPosition();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>
    <Hero >
      <div className="home-hero">
        <div className="home-hero-text">
          <div className="home-hero-title">
            <h2 className="brand-color">
              WIKI DRINK
            </h2>
            <h4 >Tutti i cocktail del mondo a portata di click</h4>
          </div>
          <p>
          Wiki Drink è un database internazionale che mette a tua disposizione, in maniera <span className="brand-color">Gratuita</span>, le ricette dei più importanti e diffusi cocktail al mondo.
          </p>
          <Link to='/about' className="btn btn-primary">
            Scopri di più
          </Link>
        </div>
        <div className="home-hero-img">
          <Lottie 
            options={{
                loop: true,
                autoplay: true,
                reverse: true,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
              height={350}
          />
        </div>
      </div>
    </Hero>
    <section className="container home-screen">
       <div className="search-bar">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="drink">
              <h4>Cerca il tuo Drink</h4>
            </label>
            <div className="input-searc">
              <input type="text" id="drink" className="input" value={input} onChange={e => setInput(e.target.value)} placeholder={query} />
              <button type="submit" className="btn icon-btn">
                <FaSearch className="icon" />
              </button>
            </div>
          </form>
        </div>
        <p className="result">
          {count} risultati
        </p>
       </div>
       {
        !isLoading && isError ? <ErrorMessage>Nessun Cocktail Trovato</ErrorMessage> 
        : !isLoading && !isError ? <Cocktails data={data.drinks} /> 
        : <Loading />
       }
    </section>
  </>;
};

export default HomeScreen;
