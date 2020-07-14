import React from 'react';
import FormInput from '../_general/FormInput';
import { Section, Form } from '../../style/style';
import '../../style/style.css';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.nativeEvent.target.name]: event.nativeEvent.target.value });
  }

  renderSection1() {
    const { fullName, email } = this.state;
    return (
      <Section>
        <FormInput
          label="Nome Completo:"
          name="fullName"
          value={fullName}
          test="checkout-fullname"
          onChange={this.handleChange}
          className="name-input inputCheckout"
        />
        <FormInput
          label="Email:"
          type="email"
          name="email"
          value={email}
          test="checkout-email"
          onChange={this.handleChange}
          className="email-input inputCheckout"
        />
      </Section>
    );
  }

  renderSection2() {
    const { cpf, phone, cep } = this.state;
    return (
      <Section form>
        <FormInput
          label="CPF:"
          caracters={11}
          name="cpf"
          value={cpf}
          test="checkout-cpf"
          onChange={this.handleChange}
          className="cpf-input inputCheckout"
        />
        <FormInput
          label="Telefone:"
          name="phone"
          value={phone}
          test="checkout-phone"
          onChange={this.handleChange}
          className="telefone-input inputCheckout"
        />
        <FormInput
          label="CEP:"
          name="cep"
          value={cep}
          test="checkout-cep"
          onChange={this.handleChange}
          className="cep-input inputCheckout"
        />
      </Section>
    );
  }

  renderSection3() {
    const { address } = this.state;
    return (
      <Section form>
        <FormInput
          label="Endereço:"
          name="address"
          value={address}
          test="checkout-address"
          onChange={this.handleChange}
          className="address-input inputCheckout"
        />
      </Section>
    );
  }

  render() {
    return (
      <Form>
        {this.renderSection1()}
        {this.renderSection2()}
        {this.renderSection3()}
      </Form>
    );
  }
}

export default UserInfo;
