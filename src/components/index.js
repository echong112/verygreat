import React from "react";
import Product from './product';
const productLibrary = require( "../util/product-library.js" );
let products = productLibrary.getProducts();

class Index extends React.Component{
  constructor(){
    super();
    this.state = {
      products: products
    }
  }

  render(){
    let values = Object.values(this.state.products);
    return(
      <div className="product-table">
        <div className="table-header flex-row">
          <div className="img">Image</div>
          <div>Title</div>
          <div>Price</div>
          <div className="img">Number of Colors</div>
        </div>

        {values && values.map((item, i) => {
          return <Product currentItem={item} key={i}/>
        })}
      </div>
    )
  }
}

export default Index;
