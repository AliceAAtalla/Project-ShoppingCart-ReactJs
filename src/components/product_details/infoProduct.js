import React from 'react';
import freeShipping from '../../media/shipp.png';
import AddAndDecrease from './AddAndDecrease';
import AddToCart from '../_general/addToCartButton';
import Loading from '../_general/Loading';
import { Article, Container, Main } from '../../style/style';

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

class infoProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 0 };
    this.HandleAddDecrease = this.HandleAddDecrease.bind(this);
  }

  HandleAddDecrease(value) {
    const quant = this.state.quantity;
    const total = this.props.product.available_quantity;
    if (value === 'dec' && quant > 0) this.setState({ quantity: (quant - 1) });
    if (value === 'add' && quant < total) this.setState({ quantity: (quant + 1) });
  }

  render() {
    const { price, thumbnail, title, attributes, shipping } = this.props.product;
    const availableQuantity = this.props.product.available_quantity;
    const quantity = this.state.quantity;
    if (!this.props.product) return <Loading />;
    return (
      <Container>
        <Article product>
          <h3 data-testid="product-detail-name">{title}</h3>
          <img className="imagemProduct" src={thumbnail} alt={title} />
          {(shipping.free_shipping) && FreeShipping() }
          <p>{`Preço: $${price}`}</p>
          <p>Quantidade Disponível: {availableQuantity}</p>
          <AddAndDecrease callback={this.HandleAddDecrease} value={quantity} />
          <div>
            <AddToCart item={this.props.product} testid="product-detail-add-to-cart" />
          </div>
        </Article>
        <Main>
          <h3>Informações Adicionais: </h3>
          <ul>
            {attributes.map((attribute) => (<li key={attribute.id}>
              {attribute.name}: {attribute.value_name}</li>))}
          </ul>
        </Main>
      </Container>
    );
  }
}

export default infoProduct;
