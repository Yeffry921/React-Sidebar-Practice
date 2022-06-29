import { useState, useEffect } from "react"

import Showcase from "./Showcase";

const date_ob = new Date()
const currentDate = date_ob.toISOString().slice(0, 10)

let day = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear() - 1;

const NewReleases = () => {
  const [showcase, setShowcase] = useState([]);

  useEffect(() => {
    fetchShowcase();
  }, []);

  const fetchShowcase = async () => {
    const data = await fetch(
      `https://api.rawg.io/api/games?key=6f59240c598f49feaf7fd46a9990b4ff&dates=${year}-${month}-${day},${currentDate}`
    );
    const response = await data.json();
    setShowcase(response.results);
  };

  return (
    <Showcase title="New Releases" showcase={showcase} />
  )
}

export default NewReleases