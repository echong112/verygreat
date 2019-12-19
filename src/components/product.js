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
      featured_image: '',
      item: {},
      price: '',
      colors: [],
      colorKeys: [],
      colorText: 'No Colors'
    }
  }

  componentWillMount() {
    this.setState({featured_image: this.props.currentItem.featured_image});
    this.setState({item: this.props.currentItem});
    this.setState({price: `$ ${this.props.currentItem.price / 100}`});
    this.setState({colorsKeys: Object.keys(this.props.currentItem.colors)});

    let colors = Object.values(this.props.currentItem.colors);
    this.setState({colors: colors});
    if (colors.length > 0) {
      this.setState({colorText: `${colors.length} Colors Available`})
    }
  }

  handleHover = (item) => {
    this.setState({featured_image: item.hover ? item.featured : item})
  }

  handleClickedColor = (item) => {
    this.setState({featured_image: item.featured ? item.featured : item})
  }

  render(){
    return (
      <div className="flex-row">
        <div className="img">
          <img src={this.state.featured_image} />
        </div>
        <div>{this.state.item.title}</div>
        <div>{this.state.price}</div>
        <div className="img">
        <p>{this.state.colorText}</p>
        {this.state.colors.length > 0 && (
          <div className="colors">
            {this.state.colors && this.state.colors.map((color, i) => {
              return (
                <div key={i}
                  onClick={this.handleClickedColor.bind(this, color)}
                  onMouseEnter={this.handleHover.bind(this, color)}
                  className="color-box"
                  style={{
                    background: colorMap.get(this.state.colorsKeys[i]),
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
