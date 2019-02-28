import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import posed from "react-pose";

const Controls = posed.aside({
  side: {
    width: "400px",
    afterChildren: true,
    transition: {
      type: "spring",
      duration: 700,
      stiffness: 200,
      damping: 20
    }
  },
  full: {
    width: "100%"
  }
});

const ControlsInner = posed.div({
  side: {
    top: 0,
    y: 0
  },
  full: {
    top: "-50%",
    y: "50%"
  }
});

const Button = posed.button({
  ready: {
    width: "100%"
  },
  loading: {
    width: 50,
    flip: true
  },
  side: {
    width: 50,
    applyAtEnd: { opacity: 0 }
  }
});

class SetupTrip extends Component {
  constructor() {
    super();

    this.state = {
      initialized: false,
      loading: false
    };
  }

  initializeTrip = e => {
    e.preventDefault();

    this.setState({
      loading: true
    });

    setTimeout(() => {
      this.setState({
        loading: false,
        initialized: true
      });
    }, 1500);
  };

  render() {
    return (
      <Controls
        className="controls"
        pose={this.state.initialized ? "side" : "full"}
      >
        <ControlsInner>
          <form className="form" onSubmit={this.initializeTrip}>
            <div>
              <label htmlFor="">Start by naming your trip</label>
              <input
                type="text"
                name="tripName"
                value={this.props.tripName}
                onChange={this.props.handleChange}
                placeholder="Going West"
              />
            </div>

            <div>
              <label htmlFor="">How long will you be gone? (In days)</label>
              <input
                type="number"
                name="tripDuration"
                value={this.props.tripDuration}
                min="1"
                max="14"
                onChange={this.props.handleChange}
              />
            </div>

            <div>
              <label htmlFor="">What's your budget?</label>
              <input
                type="number"
                name="tripBudget"
                placeholder="$0"
                value={this.props.tripBudget}
                min="0"
                onChange={this.props.handleChange}
              />
            </div>

            <Button
              className="btn"
              type="submit"
              // withParent={false}
              pose={this.state.loading ? "loading" : "ready"}
            >
              {this.state.loading && (
                <div className="btn-loader">
                  <div className="loader" />
                </div>
              )}
              <div
                className={`btn-text${
                  this.state.loading || this.state.initialized ? " hidden" : ""
                }`}
              >
                Let's Go! <FontAwesomeIcon icon="compass" />
              </div>
            </Button>
          </form>
        </ControlsInner>
      </Controls>
    );
  }
}

export default SetupTrip;
