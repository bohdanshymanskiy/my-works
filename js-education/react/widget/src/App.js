import React from 'react';
import YourReview from './components/GiveYourReview/YourReview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }
  allReview = (star) => {
    this.setState(this.state.push(star))
  }


  render() {
    return (
      <div>
        <YourReview allReview={allReview} />
      </div>
    )
  }
}

export default App;
