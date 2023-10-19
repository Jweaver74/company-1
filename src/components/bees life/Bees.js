import React from 'react';
import "./Bees.css";

function openImageWindow(imageUrl) {
    window.open(imageUrl, 'ImageWindow', 'width=600,height=600');
  }

const Bees = () => {
    return (
        <div className="bees">
        <h2>A Bee's Life</h2>
        <div className="content">
           <a
            href="/images/life.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img src="/images/life.jpeg" alt="life cycle" className="bee-image"
            onClick={() => openImageWindow('/images/life-large.jpeg')}
            style={{ cursor: 'pointer' }}
            />
            </a>
           
        <p>Bees are flying insects closely related to wasps and ants, 
            known for their role in pollination and, in the case of 
            the best-known bee species, the western honey bee, for 
            producing honey. Bees are a monophyletic lineage within 
            the superfamily Apoidea. They are presently considered 
            a clade, called Anthophila. There are over 16,000 known 
            species of bees in seven recognized biological families.
             They are found on every continent except Antarctica, 
             in every habitat on the planet that contains 
             insect-pollinated flowering plants.</p>
        </div>
        </div>
    );
    }

export default Bees;