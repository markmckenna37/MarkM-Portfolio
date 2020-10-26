import React, { Component } from "react";
import PortfolioCard from "../components/Card";
import "../index.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="portContainer">
        <PortfolioCard
          image={"https://i.imgur.com/f86TDdF.jpg"}
          title={"Zelda: OOT Randomizer Tracker"}
          description={"An MERN stack app that assists players by helping to track items and progression"}
          // ghLink={"https://github.com/markmckenna37/Zelda-Item-Tracker"}
          // liveLink={"https://polar-springs-38669.herokuapp.com/"}
        ></PortfolioCard>
        <PortfolioCard
          image={"https://i.imgur.com/n83mB1C.png"}
          title={"Campfound"}
          description={"An app to help users track, rate, and search for campgrounds in their area"}
          ghLink={"https://github.com/markmckenna37/CampTracker"}
          liveLink={"https://camp-tracker.herokuapp.com/"}
        ></PortfolioCard>
        <PortfolioCard
          image={"https://i.imgur.com/JaLE2y0.png"}
          title={"Mood Music"}
          description={"An app that allows the user to search for and build music playlists"}
          ghLink={"https://github.com/mi544/mood-music"}
          liveLink={"https://moodmusic.today/"}
        ></PortfolioCard>
        <PortfolioCard
          image={"https://i.imgur.com/qhZiiBy.png"}
          title={"React Employee Dictionary"}
          description={"An application for companies to search for and organize their employees"}
          ghLink={"https://github.com/markmckenna37/React-EmployeeDictionary"}
          liveLink={"https://markmckenna37.github.io/React-Employee-Dictionary/"}
        ></PortfolioCard>
        <PortfolioCard
          image={"https://i.imgur.com/QJrQGnQ.png"}
          title={"Budget Tracker"}
          description={"An app that allows the user to track their expenses and earnings with data visualization"}
          ghLink={"https://github.com/markmckenna37/Budget-Tracker"}
          liveLink={"https://cryptic-citadel-66180.herokuapp.com/"}
        ></PortfolioCard>
        <PortfolioCard
          image={"https://i.imgur.com/IpgF6pg.png"}
          title={"Fitness Tracker"}
          description={"An app that allows the user to track their fitness exercises with data visualization"}
          ghLink={"https://github.com/markmckenna37/Fitness-Tracker"}
          liveLink={"https://github.com/markmckenna37/Fitness-Tracker"}
        ></PortfolioCard>
        <PortfolioCard
          image={"https://i.imgur.com/uugP5pG.png"}
          title={"CRUD Burger Builder"}
          description={"A simple app to demonstrate 'CRUD' functionality with a burger builder"}
          ghLink={"https://github.com/markmckenna37/Express-Handlebars-Burgers"}
          liveLink={"https://protected-waters-91627.herokuapp.com/"}
        ></PortfolioCard>
        <PortfolioCard
          image={"https://i.imgur.com/C7DuWqt.png"}
          title={"MySQL Employee Database"}
          description={"An app that allows the user to organize and track an employee database using MySQL"}
          ghLink={"https://github.com/markmckenna37/MySQL-Employee-Tracker"}
        ></PortfolioCard>
      </div>
    );
  }
}

export default Portfolio;
