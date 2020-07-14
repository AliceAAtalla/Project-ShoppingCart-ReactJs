import React from 'react';
import { Link } from 'react-router-dom';
import freeShipping from '../../media/shipp.png';
import AddToCart from '../_general/addToCartButton';
import '../../style/style.css';
import { Button, Section, Card } from '../../style/style';

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

class Product extends React.Component {
  render() {
    const { thumbnail, title, price, id, shipping } = this.props.product;
    return (
      <Card data-testid="product">
        <Card title>
          <h3>{title}</h3>
        </Card>
        <Section image>
          <img src={thumbnail} alt={title} />
          {(shipping.free_shipping) && FreeShipping() }
        </Section>
        <p>{`Preço: R$${price.toFixed(2)}`}</p>
        <div>
          <Section buttons>
            <Link to={`/product/${id}`} data-testid="product-detail-link">
              <Button details type="button">Ver detalhes</Button>
            </Link>
            <AddToCart testid="product-add-to-cart" item={this.props.product} />
          </Section>
        </div>
      </Card>
    );
  }
}

export default Product;
