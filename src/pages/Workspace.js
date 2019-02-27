import React, { Component } from "react";
import Day from "./../components/Day";
// import Modal from "../components/Modal";

class Workspace extends Component {
  constructor() {
    super();

    this.state = {
      // modalIsVisible: false
      days: []
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tripDuration !== this.props.tripDuration) {
      let i = 0;
      let days = [];

      while (i < this.props.tripDuration) {
        i++;

        const newDay = {
          budget: 100,
          location: "Orlando",
          notes: "This will be a great day",
          id: i
        };

        days.push(newDay);
      }

      this.setState({
        days
      });
    }
  }

  updateDay = (e, dayToUpdate) => {
    const updated = {
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value
    };

    this.setState(prevState => ({
      days: prevState.days.map(day =>
        day.id === dayToUpdate ? { ...day, ...updated } : day
      )
    }));
  };

  // toggleModal = () => {
  //   this.setState({
  //     modalIsVisible: !this.state.modalIsVisible
  //   });
  // };

  render() {
    const { tripBudget, tripName, tripDuration } = this.props;
    const { days } = this.state;
    let daysBudgetSpent;

    if (days.length) {
      daysBudgetSpent = days.reduce((acc, day) => {
        return acc + day.budget;
      }, 0);
    } else {
      daysBudgetSpent = 0;
    }

    return (
      <div>
        <h1>{tripName}</h1>
        <div>You'll be gone for {tripDuration} days</div>
        <div>You have ${tripBudget} to spend</div>

        <div>Total budget left - {tripBudget - daysBudgetSpent}</div>

        {days.map(day => {
          return <Day key={day.id} details={day} updateDay={this.updateDay} />;
        })}

        {/* <Modal active={this.state.modalIsVisible}>
          <h1>I'm a modal</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            non facere molestiae quod saepe esse in odit obcaecati. Similique
            dolorem vitae quis perspiciatis enim accusamus quas ipsum non id
            expedita aperiam sunt sint eos commodi, rem tenetur eligendi eveniet
            placeat recusandae nam.
          </p>
        </Modal> */}

        {/* <button onClick={this.toggleModal}>Open Modal</button> */}
      </div>
    );
  }
}

export default Workspace;
