import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import request from "./requests";
import Banner from "./Banner";
function App() {
  return (
    <div className="App">
      <h2>Hell there</h2>
      <Banner />
      <Row title="NETFLIX ORIGINAL" fetchURL={request.fetchNetflixOriginals} isLargeRow />
      <Row title="Treding Now" fetchURL={request.fetchTrending} />
      <Row title="Top Rated" fetchURL={request.fetchTopRated} />
      <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
