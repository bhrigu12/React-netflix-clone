import React from 'react'
import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from "./Banner"
import Navbar from "./Nav"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Row
       title="Netflix Original" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}
      ></Row>
      <Row title="Trending Now" fetchUrl= {requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl= {requests.fetchTopRated}></Row>
      <Row title="action" fetchUrl= {requests.fetchActionMovies}></Row>
      <Row title="comedy" fetchUrl= {requests.fetchComedyMovies}></Row>
      <Row title="horror" fetchUrl= {requests.fetchHorrorMovies}></Row>
      <Row title="romance" fetchUrl= {requests.fetchRomanceMovies}></Row>
      <Row title="documentary" fetchUrl= {requests.fetchDocumentaryMovies}></Row>

    </div>
  );
}

export default App;
