import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

class products extends Component {
  state = {
    productsInfo: [],
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`products/${id}`);
    this.setState({
      productsInfo: response.data,
    });
    console.log(response);
  }
  render() {
    const { productsInfo } = this.state;
    return (
      <div className="product-info">
        <h1>nos bruxão</h1>
        <p>{productsInfo.description}</p>
        <p>
          LINK: <a href={productsInfo.url}>{productsInfo.url}</a>
        </p>
      </div>
    );
  }
}

export default products;
