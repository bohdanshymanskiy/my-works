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

  setRating = (rating) => {
    this.setState({ rating })
  }

  render() {
    const { rating } = this.state;
    const { addReview } = this.props
    return (
      <div>
        <div className={YourReviewCSS.allStars}>
          {[5, 4, 3, 2, 1].map((star, i) => {
            return (
              <label key={i} className={YourReviewCSS.label}>
                <input type="radio" name="rating"
                  value={star}
                  onClick={() => this.setRating(star)}
                  className={YourReviewCSS.radio} />
                <FaStar className={YourReviewCSS.star}
                  color={star <= rating ? 'ffc107' : null} />
              </label>
            )
          })
          }
        </div >
        < button className={YourReviewCSS.button} onClick={() => { addReview(rating); this.setRating(null) }}> Submit</button>
      </div>
    )
  }
}

export default YourReview;