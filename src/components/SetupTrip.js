import React, { Component } from "react";

class SetupTrip extends Component {
  render() {
    return (
      <section>
        <h1>Trip Planner</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          sit iusto eius! Dolor aspernatur id eveniet vero eius est amet!
        </p>

        <form>
          <div>
            <label htmlFor="">Start by naming your trip</label>
            <input
              type="text"
              name="tripName"
              onChange={this.props.handleChange}
              placeholder="Journey to Alaska"
            />
          </div>

          <div>
            <label htmlFor="">How long will you be gone? (In days)</label>
            <input
              type="number"
              name="tripDuration"
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
              onChange={this.props.handleChange}
            />
          </div>
        </form>
      </section>
    );
  }
}

export default SetupTrip;
