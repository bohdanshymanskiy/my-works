import React from "react";
import CalculationsCSS from "./Calculations.module.css"

class Calculations extends React.Component {
  render() {
    const allData = this.props.allReview;
    const allReviews = allData.length;
    const badReviews = allData.filter(item => item < 3).length
    const normReviews = allData.filter(item => item === 3).length
    const niceReviews = allData.filter(item => item > 3).length
    const Average = ((niceReviews / allReviews) * 100).toFixed(2);
    return (
      <div className={CalculationsCSS.calc}>
        <p>Total number of reviews {allReviews}.</p>
        <p>Total number of  good reviews:{niceReviews}, which is {(Average === 'NaN') ? '0' : Average}% from general.</p>
        <p>Number of bad reviews {badReviews}.</p>
        <p>Number of neutral reviews{normReviews}.</p>
      </div>
    )
  }
}

export default Calculations;