import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from '../Order/Order';  
import styles from './Header.module.scss';
import { CURRENCY, EMPTY_CART_TEXT, TOTAL_SUM_TEXT } from '../../constants/app';  
import { formatPrice, calculateTotal } from '../../utils/helpers';

const showOrders = (props) => {
  let summa = calculateTotal(props.orders);
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className={styles.summa}>{TOTAL_SUM_TEXT} {formatPrice(summa)}{CURRENCY}</p>
  </div>)
}

const showNothing = () => {
  return (<div className={styles.empty}>
    <h2>{EMPTY_CART_TEXT}</h2>
  </div>)
}

export default function Header(props) {
  let[cartOpen, setCartOpen] = useState(false)
  return (
    <header className={styles.header}>
      <div>
        <span className={styles.logo}>House Staff</span>
        <ul className={styles.nav}>
            <li>Про нас</li>
            <li>Контакты</li>
            <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick= {() => setCartOpen(cartOpen = !cartOpen)} className={`${styles.shopCartButton} ${cartOpen && styles.active}`} />
      
        {cartOpen && (
          <div className={styles.shopCart}>
            {props.orders.length > 0 ?
            showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className={styles.presentation}></div>
    </header>
  )
}