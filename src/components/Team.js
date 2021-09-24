import React from "react";

function Team() {
  return (
    <div>
      <div className="team"> Team </div>
      <div className="teamSub">
        {" "}
        Our people are our greatest asset and biggest differentiator.
      </div>
      <div className="teamSub">
        {" "}
        They also believe in having a lot of fun along the way.{" "}
      </div>

      <div className="teamPics">
        <div className="circlePic">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="userName"> Evan Trump </div>
          <div className="userText"> The CEO and bla bla, Before </div>
          <div className="userText"> Owner and ... </div>
        </div>

        <div className="circlePic">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="userName"> Brad Pitt </div>
          <div className="userText"> The CEO and bla bla, Before </div>
          <div className="userText"> Owner and ... </div>
        </div>

        <div className="circlePic">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="userName"> Paul Rudd </div>
          <div className="userText"> The CEO and bla bla, Before </div>
          <div className="userText"> Owner and ... </div>
        </div>
      </div>
    </div>
  );
}

export default Team;