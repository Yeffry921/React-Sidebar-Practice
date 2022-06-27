import React, {useState, useEffect} from "react"
import Showcase from "../Showcase"

const Home = () => {
  const [showcase, setShowcase] = useState([]);

  useEffect(() => {
    fetchShowcase();
  }, []);

  const fetchShowcase = async () => {
    const data = await fetch(
      "https://api.rawg.io/api/games?key=6f59240c598f49feaf7fd46a9990b4ff&metacritic=85,100&dates=2015-01-01,2022-03-31"
    );
    const response = await data.json();
    setShowcase(response.results);
  };
  return (
    <React.Fragment>
      <Showcase title="Popular Releases" showcase={showcase} />
    </React.Fragment>
  )
}

export default Home