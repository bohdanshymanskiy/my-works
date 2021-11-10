import React from "react";
import YourReviewCSS from "./YourReview.module.css"
import { FaStar } from "react-icons/fa"

class YourReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      hover: null
    }
    this.newReview = this.newReview.bind(this);
  }

  newReview() {
    this.props.addNewReview(this.state.rating);
    this.setState({
      rating: null,
      hover: null
    })
  }

  render() {
    const rating = this.state.rating;
    const hover = this.state.hover;
    return (
      <div>
        <div className={YourReviewCSS.allStars}>
          {[1, 2, 3, 4, 5].map((star, i) => {
            return (
              <label htmlFor={"review-" + i} key={i}>
                <input type="radio" name="rating"
                  id={"review-" + i}
                  value={star}
                  onClick={() => this.setState({ rating: star })}
                  className={YourReviewCSS.radio} />
                <FaStar className={YourReviewCSS.star}
                  color={star <= (hover || rating) ? 'ffc107' : 'e4e5e9'}
                  onMouseEnter={() => this.setState({ hover: star })}
                  onMouseLeave={() => this.setState({ hover: null })} />
              </label>
            )
          })
          }
        </div >
        < button className={YourReviewCSS.button} onClick={this.newReview}> Сохранить</button>
      </div>
    )
  }
}

export default YourReview;