import React from 'react';
import FormComment from './FormComment';
import { Card } from '../../style/style';

function post(rating, comment) {
  return (
    <Card className="comment">
      <span>{`Pontuação ${rating}`}</span>
      <p>{comment}</p>
    </Card>
  );
}

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: '', post: false, rating: '' };
    this.handleClick = this.handleClick.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
  }

  ratingChanged(newRating) {
    this.setState({ rating: newRating });
  }

  handleClick() {
    this.setState({ post: true });
  }

  handleComment(event) {
    this.setState({ comment: event.target.value });
  }

  render() {
    const { comment, rating } = this.state;
    return (
      <div>
        <FormComment
          comment={comment}
          starsChange={this.ratingChanged}
          onClick={this.handleClick}
          onChange={this.handleComment}
        />
        {this.state.post && post(rating, comment)}
      </div>
    );
  }
}

export default Comment;
