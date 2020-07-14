import React, { Component } from 'react';
import freeShipping from '../media/shipp.png';

function FreeShipping() {
  return (
    <img
      className="shippImage"
      data-testid="free-shipping"
      src={freeShipping}
      alt="Free Shipping"
    />
  );
}

class Image extends Component {
  render() {
    const { thumbnail, title, shipping } = this.props;
    return (
      <div className="images">
        <img src={thumbnail} alt={title} />
        {shipping && FreeShipping()}
      </div>
    );
  }
}

export default Image;
