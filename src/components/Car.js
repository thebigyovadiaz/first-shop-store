import { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import CarDetails from './CarDetails';

const styles = {
  car: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '700',
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20,
  }
}


class Car extends Component {

  render() {
    const { car, showHideCar, isCarVisible } = this.props;
    const quantity = car.reduce((acc, value) => acc + value.quantity, 0);

    return (
      <div>
        <span style={styles.bubble}>
          {quantity > 0
            ? <BubbleAlert value={quantity} />
            : null
          }
        </span>
        <button style={styles.car} onClick={showHideCar}>
          Car
        </button>

        { isCarVisible
          ? <CarDetails car={car} />
          : null
        }
      </div>
    )
  }
}

export default Car;
