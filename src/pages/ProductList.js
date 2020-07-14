import React, { Component } from 'react';
import Categories from '../components/product_list/Categories';
import Product from '../components/product_list/Product';
import Search from '../components/product_list/Search';
import Dropdown from '../components/product_list/Dropdown';
import * as api from '../services/api';
import '../style/style.css';
import { Container, Main, Aside, Section, Header, NavBar } from '../style/style';
import Brand from '../components/_general/Brand';
import Footer from '../components/_general/Footer';
import goToChart from '../components/_general/goToCart';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: '', searchValue: '' };
    this.OnChangeSearchBar = this.OnChangeSearchBar.bind(this);
    this.Requisition = this.Requisition.bind(this);
    this.handleChangeSort = this.handleChangeSort.bind(this);
  }

  OnChangeSearchBar(event) {
    this.setState({ searchValue: event.target.value });
  }

  Requisition(event) {
    const query = this.state.searchValue;
    const categoryId = event.target.id;
    if (query && categoryId) {
      api
        .getProductsFromCategoryAndQuery({ categoryId, query })
        .then((results) => this.setState({ products: results.results }));
    } else if (categoryId) {
      api
        .getProductsFromCategoryAndQuery({ categoryId })
        .then((results) => this.setState({ products: results.results }));
    } else {
      api
        .getProductsFromCategoryAndQuery({ query })
        .then((results) => this.setState({ products: results.results }));
    }
    this.setState({ products: '', searchValue: '' });
  }

  headerSearch() {
    return (
      <div>
        <Search
          value={this.state.searchValue}
          onChange={this.OnChangeSearchBar}
          onClick={this.Requisition}
        />
      </div>
    );
  }

  Categories() {
    return (
      <div>
        <h3>Categorias:</h3>
        <Categories onChange={this.Requisition} />
      </div>
    );
  }

  handleChangeSort(event) {
    const { value } = event.target;
    const { products } = this.state;

    if (value === 'maior') {
      const sortedProductsAsc = products.sort((a, b) => (b.price - a.price));
      this.setState({ products: sortedProductsAsc });
    }
    if (value === 'menor') {
      const sortedProductsDsc = products.sort((a, b) => (a.price - b.price));
      this.setState({ products: sortedProductsDsc });
    }
  }

  renderWithoutProduct() {
    return (
      <div>
        <Container>
          <Header>
            <Brand />
            <NavBar>
              {this.headerSearch()}
            </NavBar>
            <NavBar ordem />
            <NavBar cart>
              {goToChart()}
            </NavBar>
          </Header>
        </Container>
        <Section>
          <Main>
            {this.Categories()}
          </Main>
          <Aside data-testid="home-initial-message">
            <h4>Digite algum termo de pesquisa ou escolha uma categoria.</h4>
          </Aside>
        </Section>
        <Footer />
      </div>
    );
  }

  renderWithProduct() {
    const { products } = this.state;
    return (
      <div>
        <Container>
          <Header>
            <Brand />
            <NavBar>
              {this.headerSearch()}
            </NavBar>
            <NavBar>
              <Dropdown sort={this.handleChangeSort} />
            </NavBar>
            <NavBar cart>
              {goToChart()}
            </NavBar>
          </Header>
        </Container>
        <Section>
          <Main>
            {this.Categories()}
          </Main>
          <Aside card>
            {products.map((elem) => (
              <Product key={elem.id} product={elem} />
            ))}
          </Aside>
        </Section>
        <Footer />
      </div>
    );
  }

  render() {
    const { products } = this.state;
    if (products === '') {
      return this.renderWithoutProduct();
    }
    return this.renderWithProduct();
  }
}

export default ProductList;
