import React from 'react';
import YourReview from './components/GiveYourReview/YourReview';
import Calculations from './components/Calculations/Calculations';
import AppCSS from "./App.module.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] };
  }

  addReview = (review) => {
    const reviews = this.state.reviews.concat(review);
    this.setState({ reviews });
  }

  render() {
    const { reviews } = this.state;
    return (
      <div className={AppCSS.container}>
        <h4 className={AppCSS.h4}>Leave your review:</h4>
        <YourReview addReview={this.addReview} />
        <Calculations allReview={reviews} />
      </div>
    )
  }
}

export default App;
