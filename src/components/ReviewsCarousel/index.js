import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {contentItem: 0}

  onRightIncrement = () => {
    const {contentItem} = this.state
    if (contentItem < 3) {
      this.setState(item => ({contentItem: item.contentItem + 1}))
    }
  }

  onLeftIncrement = () => {
    const {contentItem} = this.state
    if (contentItem > 0) {
      this.setState(item => ({contentItem: item.contentItem - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {contentItem} = this.state

    const item = reviewsList[contentItem]

    const {imgUrl, username, companyName, description} = item

    return (
      <div className="main-bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="card-container">
          <button
            type="button"
            className="button-style"
            onClick={this.onLeftIncrement}
            testId="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-content">
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button
            type="button"
            className="button-style"
            onClick={this.onRightIncrement}
            testId="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
