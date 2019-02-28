import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Day = ({ details, updateDay }) => {
  return (
    <div className="day">
      <div>
        <label htmlFor="">Where will you be?</label>
        <input
          type="text"
          value={details.location}
          name="location"
          onChange={e => updateDay(e, details.id)}
        />
      </div>
      <div>
        <label htmlFor="">How much will you spend?</label>
        <input
          type="number"
          value={details.budget}
          name="budget"
          onChange={e => updateDay(e, details.id)}
        />
      </div>
      <div>
        <label htmlFor="">Notes</label>
        <textarea
          type="text"
          value={details.notes}
          name="notes"
          onChange={e => updateDay(e, details.id)}
        />
      </div>
      <button className="btn">
        Save Day <FontAwesomeIcon icon="calendar-plus" />
      </button>
    </div>
  );
};

export default Day;
