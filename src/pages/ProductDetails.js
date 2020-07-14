/* eslint-disable no-useless-constructor */
import React from 'react';
import InfoProduct from '../components/product_details/infoProduct';
import Comment from '../components/product_details/Comment';
import getItemForId from '../services/apiId';
import Brand from '../components/_general/Brand';
import Footer from '../components/_general/Footer';
import { Container, Header, NavBar } from '../style/style';
import goToChart from '../components/_general/goToCart';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: '' };
  }

  componentDidMount() {
    const searchId = this.props.match.params.id;
    getItemForId(searchId).then((resolve) => this.setState({ product: resolve }));
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <Container>
          <Header>
            <Brand />
            <NavBar space2 />
            <NavBar cart>
              {goToChart()}
            </NavBar>
          </Header>
        </Container>
        <InfoProduct product={product} />
        <Comment />
        <Footer />
      </div>
    );
  }
}

export default ProductDetails;
