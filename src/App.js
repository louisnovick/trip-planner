import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarPlus, faCompass } from "@fortawesome/free-solid-svg-icons";
import Workspace from "./pages/Workspace";
import SetupTrip from "./components/SetupTrip";

library.add(faCalendarPlus, faCompass);

class App extends Component {
  constructor() {
    super();

    this.state = {
      tripBudget: 0,
      tripName: "Going West",
      tripDuration: 3
    };
  }

  updateField = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="app">
        <SetupTrip handleChange={this.updateField} {...this.state} />

        <Workspace
          tripName={this.state.tripName}
          tripBudget={this.state.tripBudget}
          tripDuration={this.state.tripDuration}
        />
      </div>
    );
  }
}

export default App;
