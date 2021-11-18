import { Component } from 'react';
import Products from './components/Products';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Title from './components/Title';

class App extends Component {
  state = {
    products: [
      {name: 'Tomate', price: 1500, img: '/products/tomate.jpg'},
      {name: 'Arbejas', price: 2500, img: '/products/arbejas.jpg'},
      {name: 'Lechuga', price: 500, img: '/products/lechuga.jpg'},
    ],
    car: [],
    isCarVisible: false
  };

  addToCar = (product) => {
    const { car } = this.state;
    const searchProduct = car.find(item => item.name === product.name);

    if (searchProduct) {
      const newCar = car.map(itm => itm.name === searchProduct.name
        ? ({ ...itm, quantity: itm.quantity + 1 })
        : itm
      );

      return this.setState({ car: newCar });
    }

    return this.setState({
      car: [
        ...this.state.car,
        {
          ...product,
          quantity: 1
        }
      ]
    });
  }

  showHideCar = () => {
    if (!this.state.car.length) return;
    this.setState({isCarVisible: !this.state.isCarVisible});
  }

  render() {
    const { car, isCarVisible, products } = this.state;

    return (
      <div>
        <Navbar
          car={car}
          showHideCar={this.showHideCar}
          isCarVisible={isCarVisible}
        />
        <Layout>
          <Title />
          <Products
            addToCar={this.addToCar}
            products={products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
