//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ReactDOM from "react-dom";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const homeInitial = 0;
  const awayInitial = 0;
  const [lionsScore, lionsCount] = useState(homeInitial);
  const [tigersScore, tigerCount] = useState(awayInitial);


  function handler(teamName, amt) {
    if (teamName === "lions") {
        lionsCount(lionsScore + amt);
    }
    else if (teamName === "tigers") {
      tigerCount(tigersScore + amt);
    }
  }


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => handler("lions", 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => handler("lions", 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => handler("tigers", 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => handler("tigers", 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// Write a "handler" function in the component that takes in a team name and an amount. This function will then be passed to each button's click handler. It will increment the correct team's score by the passed in amount.

