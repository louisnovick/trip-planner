import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Workspace from "./pages/Workspace";
import SetupTrip from "./components/SetupTrip";

const RouteContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  updateField = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/workspace">Workspace</Link>
                </li>
              </ul>
            </nav>
          </header>

          <SetupTrip handleChange={this.updateField} />

          <Workspace
            tripName={this.state.tripName}
            tripBudget={this.state.tripBudget}
            tripDuration={this.state.tripDuration}
          />

          {/* <Route
            render={({ location }) => (
              <PoseGroup>
                <RouteContainer key={location.key}>
                  <Switch location={location}>
                    <Route exact path="/" component={Home} key="home" />
                    <Route
                      path="/workspace"
                      component={Workspace}
                      key="workspace"
                    />
                  </Switch>
                </RouteContainer>
              </PoseGroup>
            )}
          /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
