import React from 'react';
import { Button } from '../../style/style';

class AddAndDecrease extends React.Component {
  render() {
    const { callback, value } = this.props;
    return (
      <div>
        <Button details type="button" className="add-button" onClick={() => callback('dec')}>-</Button>
        <span className="show-value">{value}</span>
        <Button details type="button" className="add-button" onClick={() => callback('add')}>+</Button>
      </div>
    );
  }
}

export default AddAndDecrease;
