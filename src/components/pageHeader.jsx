import React from "react";

const PageHeader = () => {
  return (
    <React.Fragment>
      <div className="center">
        <div className="col-12 col-md-8">
          <h1 className="text-center display-4">המתוקים של מתילדה</h1>
          <h2 className="text-center">
            בית מאפה משפחתי המייצר הכל בעבודה יד והרבה אהבה
          </h2>
          <hr />
        </div>
      </div>
      <div className="paragraph">
        <div className="img">
          <p>
            קונדטוריית מתילדה נולדה כדי לגרום לקהל הרחב להנות ולחוות את העוגות,
            עוגיות, מאפים ועוד.. אותם מכינה <strong>מתילדה</strong> אימי היקרה
            באהבה רבה כבר שנים רבות
          </p>
          <br />
          <img src="https://cdn.pixabay.com/photo/2017/08/07/01/19/blueberry-2598341_960_720.jpg" className="rounded mx-auto d-block" alt="chocolate cake"/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageHeader;
