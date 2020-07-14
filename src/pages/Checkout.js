import React from 'react';
import UserInfo from '../components/checkout/UserInfo';
import FormInput from '../components/_general/FormInput';
import Brand from '../components/_general/Brand';
import Footer from '../components/_general/Footer';
import { Container, Header, Article, Section, NavBar, Button } from '../style/style';

class Checkout extends React.Component {
  static pay() {
    return (
      <Article>
        <h3>Formas de pagamento:</h3>
        <FormInput
          label={<i style={{ color: '#240046' }} className="fab fa-cc-visa fa-4x" />}
          value="Cartão Visa"
          type="radio"
          name="pagamento"
        />
        <FormInput
          label={<i style={{ color: '#240046' }} className="fab fa-cc-mastercard fa-4x" />}
          value="Cartão MasterCard"
          type="radio"
          name="pagamento"
        />
        <FormInput
          label={<i style={{ color: '#240046' }} className="fas fa-barcode fa-4x" />}
          value="Boleto"
          type="radio"
          name="pagamento"
        />
        <FormInput
          label={<i style={{ color: '#240046' }} className="fab fa-cc-paypal fa-4x" />}
          value="Paypal"
          type="radio"
          name="pagamento"
        />
      </Article>
    );
  }

  render() {
    return (
      <div>
        <Container>
          <Header>
            <Brand />
            <NavBar space />
          </Header>
        </Container>
        <Section center>
          <Section form>
            <UserInfo />
          </Section>
          {Checkout.pay()}
          <Button checkout type="button">
            Finalizar Compra
          </Button>
        </Section>
        <Footer />
      </div>
    );
  }
}

export default Checkout;
