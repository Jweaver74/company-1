import React from "react";
import "./Bees.css";

function openImageWindow(imageUrl) {
  window.open(imageUrl, "ImageWindow", "width=600,height=600");
}

const Bees = () => {
  return (
    <div className="bees">
      <h2>A Bee's Life</h2>
      <div className="content">
        <a href="https://www.buzzaboutbees.net/images/honeybeelifecycle.jpg" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.buzzaboutbees.net/images/honeybeelifecycle.jpg"
            alt="life cycle"
            className="bee-image"
            onClick={() => openImageWindow("https://www.buzzaboutbees.net/images/honeybeelifecycle.jpg")}
            style={{ cursor: "pointer" }}
          />
        </a>

        <p>
          Bees are flying insects closely related to wasps and ants, known for
          their role in pollination and, in the case of the best-known bee
          species, the western honey bee, for producing honey. Bees are a
          monophyletic lineage within the superfamily Apoidea. They are
          presently considered a clade, called Anthophila. There are over 16,000
          known species of bees in seven recognized biological families. They
          are found on every continent except Antarctica, in every habitat on
          the planet that contains insect-pollinated flowering plants.
        </p>
        <p>
        A honey bee is a social insect known for its vital role in pollination and honey production. Their life cycle consists of several stages:

1. Egg: A honey bee's life begins as an egg laid by the queen bee.

2. Larva: The egg hatches into a larva, which is cared for by worker bees. They feed the larva royal jelly for the first few days and then switch to a mixture of pollen and honey.

3. Pupa: The larva undergoes metamorphosis inside a cell and transforms into a pupa.

4. Adult Worker Bee: After about three weeks, the pupa emerges as an adult worker bee. Worker bees are predominantly female and perform tasks like foraging, nursing the young, and maintaining the hive.

5. Drone Bee: Male bees, called drones, develop from unfertilized eggs. They exist solely for mating with a queen bee.

6. Queen Bee: Queen bees develop from larvae that are selectively fed royal jelly throughout their development. They are larger and have unique reproductive roles in the hive, laying eggs to sustain the colony.

Honey bees live in complex, highly organized colonies. Their activities are 
crucial for pollinating plants, which in turn helps in the production 
of fruits and vegetables. The colony's ultimate goal is to store honey 
for the winter months. Honey bees communicate through dance-like movements 
and chemical signals to coordinate their work and locate nectar sources. 
They are an essential part of ecosystems and agriculture, 
contributing to both biodiversity and human food production.
        </p>
      </div>
    </div>
  );
};

export default Bees;
