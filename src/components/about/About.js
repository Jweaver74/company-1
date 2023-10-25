// Desc: About page
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <div className="video-container">
        <a href={process.env.PUBLIC_URL + '/images/beevideo.mp4'} target="_blank" rel="noreferrer">
        <div className="video-wrapper">
            <video className="video" controls>
              <source src={process.env.PUBLIC_URL + '/images/beevideo.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          <img src={process.env.PUBLIC_URL + '/images/beeframe.jpg'} alt="video Thumbnail" width="400" />
          </div>
          <p>Click here to watch the bees in action</p>
        </a>
      </div>
      <p>Hetherington honey started when we picked up our first hive. We intended on it to just bee
        a fun thing to do while supporting the pollinator population. 
      </p>
     
     
    </div>
  );
}

export default About;
