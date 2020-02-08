import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  };
  componentDidMount() {
    this.setProducts();
  }

  setProducts = () =>{
    let temProducts = [];
    storeProducts.forEach(item =>{
      const singleItem ={...item};
      temProducts = [...temProducts,singleItem];
    });
    this.setState(() => {
      return {products:temProducts};

    });
  };

getItem = id =>{
  const product = this.state.products.find(item => item.id === id);
  return product;
}



  
  handeDetail = (id) => {
    const product = this.getItem(id);
    this.setState(()=>{
      return {detailProduct:product};
    });
  };

  addToCart = id => {
    console.log(`hello from add to cart.id is ${id}`);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handeDetail: this.handeDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
