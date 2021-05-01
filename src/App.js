import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Navbar from "./Nav";
import requests from "./requests";
function App() {
  return (
      <div className="app" id="appp">

            <Navbar />
            <Banner />
            <Row
              title="NETFLIX ORIGINALS"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchDocumentaries} />
            <Row
              title="Romance Movies"
              fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="Documentaries" fetchUrl={requests.fetchTrending} />
            <footer>
        <span>Created By <a href="#">Jaime David</a> | <span>©</span> 2021 All rights reserved.</span>
    </footer>
     
      </div>

  );
}
export default App;
