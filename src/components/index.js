import React from "react";
import './products.scss';
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
          let price = `$ ${item.price / 100}`;
          let colors = Object.values(item.colors).length;
          let colorText = colors > 0 ? `${colors} Colors Available` : 'No Colors';

          return (
            <div className="flex-row" key={i}>
              <div className="img">
                <img src={item.featured_image} />
              </div>
              <div>{item.title}</div>
              <div>{price}</div>
              <div className="img">{colorText}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Index;
