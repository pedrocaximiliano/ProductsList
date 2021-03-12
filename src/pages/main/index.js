import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import api from "../../services/api";

class Main extends Component {
  state = {
    products: [],
    productinfo: [],
    page: 1,
  };

  componentDidMount() {
    this.loadProduts();
  }

  loadProduts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productinfo } = response.data;
    this.setState({
      products: docs,
      productinfo,
      page,
    });
  };

  prevNext = () => {
    const { page, productinfo } = this.state;

    if (page === productinfo.pages) return;
    const pageNumber = page + 1;
    this.loadProduts(pageNumber);
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;
    const pageNumber = page - 1;
    this.loadProduts(pageNumber);
  };

  render() {
    const { products, page, productinfo } = this.state;
    return (
      <div className="products-list">
        {products.map((product) => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.discription}</p>
            <Link to={`/products/${product._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions"></div>
      </div>
    );
  }
}
export default Main;
