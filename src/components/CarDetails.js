import { Component } from 'react';

const styles = {
  carDetails: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: 30,
    boxShadow: '1px 5px 5px rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
    width: '300px',
    right: 50,
  },
  ul: {
    marging: 0,
    padding: 0,
  },
  product: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: '1px solid #aaa',
  },
}

class CarDetails extends Component {
  render() {
    const { car } = this.props;

    return (
      <div style={styles.carDetails}>
        <ul style={styles.ul}>
          {car.map(product =>
            <li style={styles.product} key={product.name}>
              <img src={product.img} alt={product.name} width='50' height='32' />
              {product.name} <span>{product.quantity}</span>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default CarDetails;
