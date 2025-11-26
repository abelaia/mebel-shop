import React from "react";
import Header from './components/Header/Header'; 
import Items from './components/Items/Items';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import ShowFullItem from './components/ShowFullItem/ShowFullItem';
import { isItemInArray } from './utils/helpers';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул деревянный',
          img: 'стул.jpg', 
          desc: '',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2, 
          title: 'Люстра кристалльная',
          img: 'люстра.webp',
          desc: '',
          category: 'chandeliers',
          price: '59.99'
        },
        {
          id: 3,
          title: 'Диван бежевый',
          img: 'диван.jpg',
          desc: '',
          category: 'sofas',
          price: '69.99'
        },
        {
          id: 4,
          title: 'Зеркало с подсветкой',
          img: 'зеркало.jpg',
          desc: '',
          category: 'mirrors',
          price: '69.99'
        },
        {
          id: 5,
          title: 'Стол мраморный',
          img: 'стол.webp',
          desc: '',
          category: 'tables',
          price: '69.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    this.setState({
      currentItems: category === 'all' 
        ? this.state.items 
        : this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    if(!isItemInArray(this.state.orders, item)) {
      this.setState({orders: [...this.state.orders, item] })
    }
  }
}

export default App;