import React from 'react';

class Dropdown extends React.Component {
  render() {
    const { sort } = this.props;
    return (
      <div className="sort">
        <select onChange={(event) => sort(event)} defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disable="true">Ordenação por preço</option>
          <option value="maior" name="maior" onClick={() => sort()}>Maior Preço</option>
          <option value="menor" name="menor" onClick={() => sort()}>Menor Preço</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
