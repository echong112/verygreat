import React from "react";
import './products.scss';
const colorMap = new Map();

colorMap.set('Tan', '#D2B48C')
colorMap.set('Navy', '#000080')
colorMap.set('Blush', '#de5d83')
colorMap.set('Red', '#ff0000')
colorMap.set('Black', '#000000')
colorMap.set('Gray', '#808080')

class Product extends React.Component{
  constructor(props){
    super();
    this.state = {
      featured_image: ''
    }
  }

  componentWillMount() {
    this.setState({featured_image: this.props.currentItem.featured_image});
  }

  handleHover = (item) => {
    this.setState({featured_image: item.hover ? item.featured : item})
  }

  handleClickedColor = (item) => {
    console.log(item);
    this.setState({featured_image: item.featured ? item.featured : item})
  }

  render(){
    let item = this.props.currentItem;
    let price = `$ ${item.price / 100}`;
    let colorsKeys = Object.keys(item.colors);
    let colors = Object.values(item.colors);
    let colorText = colors.length > 0 ? `${colors.length} Colors Available` : 'No Colors';

    return (
      <div className="flex-row">
        <div className="img">
          <img src={this.state.featured_image} />
        </div>
        <div>{item.title}</div>
        <div>{price}</div>
        <div className="img">
        <p>{colorText}</p>
          {colors.length > 0 && (
            <div className="colors">
              {colors && colors.map((color, i) => {
                return (
                  <div key={i}
                    onClick={this.handleClickedColor.bind(this, color)}
                    onMouseEnter={this.handleHover.bind(this, color)}
                    className="color-box"
                    style={{
                      background: colorMap.get(colorsKeys[i]),
                    }}>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Product;
