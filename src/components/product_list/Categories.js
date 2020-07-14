import React, { Component } from 'react';
import Loading from '../_general/Loading';
import * as api from '../../services/api';

function CheckInput(elem, ChangeFunction) {
  return (
    <h4>
      <label htmlFor={elem.id} data-testid="category">
        <input
          type="radio"
          id={elem.id}
          name="categorie"
          value={elem.name}
          onChange={ChangeFunction}
        />
        {elem.name}
      </label>
    </h4>
  );
}

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: '' };
  }

  componentDidMount() {
    api.getCategories().then((results) => this.setState({ categories: results }));
  }

  render() {
    const { onChange } = this.props;
    const { categories } = this.state;
    if (!categories) return <Loading />;
    return (
      <div>
        {categories.map((elem) => CheckInput(elem, onChange))}
      </div>
    );
  }
}

export default Categories;
