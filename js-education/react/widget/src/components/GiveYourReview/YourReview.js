import React from "react";
import YourReviewCSS from "./YourReview.module.css"
import { FaStar } from "react-icons/fa"

class YourReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
    }
  }
  newReview() {
    const { rating } = this.state;
    this.props.addNewReview(rating);
    this.setState({
      rating: null,
    })
  }

  render() {
    const { rating } = this.state;
    return (
      <div>
        <div className={YourReviewCSS.allStars}>
          {[5, 4, 3, 2, 1].map((star, i) => {
            return (
              <label key={i} className={YourReviewCSS.label}>
                <input type="radio" name="rating"
                  value={star}
                  onClick={() => this.setState({ rating: star })}
                  className={YourReviewCSS.radio} />
                <FaStar className={YourReviewCSS.star}
                  color={star <= rating ? 'ffc107' : undefined} />
              </label>
            )
          })
          }
        </div >
        < button className={YourReviewCSS.button} onClick={() => this.newReview()}> Сохранить</button>
      </div>
    )
  }
}

export default YourReview;