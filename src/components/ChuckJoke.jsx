import React, { useState, useEffect } from "react";

const ChuckJoke = () => {
  const CHUCK_URL = "https://api.chucknorris.io/jokes/random";

  const [joke, setJoke] = useState(null);
  const [icon, setIcon] = useState(
    "https://cdn.dribbble.com/users/125906/screenshots/2527272/chuck-norris_flaticon-2x.png"
  );

  useEffect(() => {
    fetch(CHUCK_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJoke(() => data.value);
        // setIcon(() => data.icon_url);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>ChuckJoke</h2>
      <img src={icon} alt="chuck norris icon" width="100" />
      <blockquote>{joke ?? "Loading..."}</blockquote>
    </div>
  );
};

export default ChuckJoke;
