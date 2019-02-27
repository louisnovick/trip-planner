import React from "react";

const Day = ({ details, updateDay }) => {
  return (
    <div>
      <div>
        <input
          type="text"
          value={details.location}
          name="location"
          onChange={e => updateDay(e, details.id)}
        />
      </div>
      <div>
        <input
          type="number"
          value={details.budget}
          name="budget"
          onChange={e => updateDay(e, details.id)}
        />
      </div>
      <div>
        <textarea
          type="text"
          value={details.notes}
          name="notes"
          onChange={e => updateDay(e, details.id)}
        />
      </div>
    </div>
  );
};

export default Day;
