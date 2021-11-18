import { Component } from 'react';
import Button from './Button';

const styles = {
  product: {
    border: '1px solid #eee',
    boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
    width: '30%',
    padding: '10px 15px',
    borderRadius: '5px',
  },
  img: {
    width: '100%',
  }
}

class Product extends Component {
  render() {
    const {product, addToCar} = this.props;

    return (
      <div style={styles.product}>
        <img style={styles.img} src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <Button onClick={() => addToCar(product)}>
          Add to car
        </Button>
      </div>
    )
  }
}

export default Product;
