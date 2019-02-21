import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [
        { name: "Eric", points: 32 },
        { name: "Jordan", points: 29 },
        { name: "Darien", points: 20 },
        { name: "Ryan", points: 17 },
        { name: "Courtney", points: 5 },
        { name: "David", points: 2 },
        { name: "Madeline", points: 1 },
        { name: "Meg", points: 1 },
        { name: "Nick", points: 1 },
        { name: "Eric W.", points: 1 },
        { name: "Evan", points: 1 }
      ]
    };
  }

  render() {
    const people = this.state.points
      .sort((a, b) => {
        return a.points < b.points;
      })
      .map(p => {
        return <li>{`${p.name}: ${p.points}`}</li>;
      });
    return (
      <div className="App">
        <h1>Point Leaderboard</h1>
        <ul>{people}</ul>
      </div>
    );
  }
}

export default App;
