// Project.jsx
import React from 'react';

function Project(props) {
  const { name, description, image } = props;

  return (
    <div className="project">
      <img src={image} alt={name} />
      <div className="project-info">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <a href="#">Learn More</a>
      </div>
    </div>
  );
}

export default Project;
