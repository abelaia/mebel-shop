import React, { Component } from 'react'
import styles from './Item.module.scss'

class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <img src={"./img/" + this.props.item.img} alt={this.props.item.title} width="200" onClick={() => this.props.onShowItem(this.props.item)} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <div className={styles.addToCart} onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    );
  }
}

export default Item;