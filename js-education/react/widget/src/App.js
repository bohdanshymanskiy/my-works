import React from 'react';
import YourReview from './components/GiveYourReview/YourReview';
import Calculations from './components/Calculations/Calculations';
import AppCSS from "./App.module.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addReview = this.addReview.bind(this);
    this.state = { reviews: [] };
  }

  addReview(review) {
    let reviews = this.state.reviews.concat(review);
    this.setState({ reviews });
  }

  render() {
    return (
      <div className={AppCSS.container}>
        <h4 className={AppCSS.h4}>Leave your review:</h4>
        <YourReview addNewReview={this.addReview} />
        <Calculations allReview={this.state.reviews} />
      </div>
    )
  }
}

export default App;
