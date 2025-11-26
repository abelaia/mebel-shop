import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'
import styles from './Order.module.scss'

export class Order extends Component {
  render() {
    return (
      <div className={styles.item}>
        <img src={"./img/" + this.props.item.img} alt={this.props.item.title} />
        <div className={styles.itemContent}>
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.price}$</p>
        </div>
        <FaTrash className={styles.deleteIcon} onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order