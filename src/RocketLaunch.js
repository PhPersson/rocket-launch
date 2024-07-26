import { useEffect, useState } from "react";
import './RocketLaunch.css';

const RocketLaunch = () => {

  const [launch, setLaunch] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://ll.thespacedevs.com/2.2.0/launch/upcoming/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const nextLaunch = data.results[0]
      console.log(nextLaunch);
      setLaunch(nextLaunch)
    })
    .catch(error => {
      setError(error);
    });
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  return (


    
    <div className="centered-container">
      {launch && (
        <>
          <div className="rocket-animation">
            <div className="rocket"></div>
          </div>
          <h1>{launch.name}</h1>
          <p>Status: {launch.status.name}</p>
          <p>Rocket: {launch.rocket.configuration.name}</p>
          <p>Mission: {launch.mission.name}</p>
          <p>{launch.mission.description}</p>
          <p>
            Location: <a href={`https://www.google.com/maps?q=${launch.pad.latitude},${launch.pad.longitude}`} target="_blank" rel="noopener noreferrer">
              {launch.pad.location.name}
            </a>
          </p>
          <p>Launch Time: {new Date(launch.net).toLocaleString()}</p>

          <div className="more-info">         
            {launch.image && (
            <img src={launch.image} alt={launch.name} className="launch-image" />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default RocketLaunch;