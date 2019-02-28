import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import Day from "./../components/Day";

const Item = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ i }) => i * 50
  },
  exit: {
    opacity: 0,
    y: -10
  }
});

const Amount = posed.h3({
  over: {
    color: "#ed254e",
    y: 0,
    transition: () => ({
      color: {
        type: "tween",
        duration: 100
      },
      y: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 100,
        from: 5,
        to: 0
      }
    })
  },
  under: {
    color: "#2ba84a"
  }
});

class Workspace extends Component {
  constructor() {
    super();

    this.state = {
      days: [],
      savedDays: []
    };
  }

  componentDidMount() {
    this.generateDays();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tripDuration !== this.props.tripDuration) {
      this.generateDays();
    }
  }

  generateDays = () => {
    let i = 0;
    let days = [];

    while (i < this.props.tripDuration) {
      i++;

      const newDay = {
        budget: 0,
        location: "Moab, UT",
        notes: "What are you doing today?",
        id: i
      };

      days.push(newDay);
    }

    this.setState({
      days
    });
  };

  updateDay = (e, dayToUpdate) => {
    let value = e.target.value;

    if (e.target.name === "budget") {
      // value = value && value >= 0 ? parseInt(value) : 0;
      value = parseInt(value);
    }

    const updated = {
      [e.target.name]: value
    };

    this.setState(prevState => ({
      days: prevState.days.map(day =>
        day.id === dayToUpdate ? { ...day, ...updated } : day
      )
    }));
  };

  saveDay = dayId => {
    this.setState(prevState => ({
      days: prevState.days.filter(day => {
        return day.id !== dayId;
      }),
      savedDays: [
        ...prevState.savedDays,
        prevState.days.filter(day => {
          return day.id === dayId;
        })
      ]
    }));
  };

  render() {
    const { tripBudget, tripName } = this.props;
    const { days } = this.state;
    let daysBudgetSpent;

    if (days.length) {
      daysBudgetSpent = days.reduce((acc, day) => {
        return acc + day.budget;
      }, 0);
    } else {
      daysBudgetSpent = 0;
    }

    const moneyLeft = tripBudget - daysBudgetSpent;

    return (
      <div className="workspace">
        <div className="heading">
          <h1>{tripName}</h1>
          <Amount poseKey={moneyLeft} pose={moneyLeft < 0 ? "over" : "under"}>
            Left to spend: ${moneyLeft}
          </Amount>
        </div>

        <div className="days">
          <PoseGroup>
            {days.map((day, i) => {
              return (
                <Item key={day.id} i={i}>
                  <Day
                    details={day}
                    updateDay={this.updateDay}
                    saveDay={() => this.saveDay(day.id)}
                  />
                </Item>
              );
            })}
          </PoseGroup>
        </div>
      </div>
    );
  }
}

export default Workspace;
