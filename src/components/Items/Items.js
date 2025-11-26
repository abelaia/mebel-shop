import React, { Component } from 'react'
import Item from '../Item/Item';
import styles from './Items.module.scss'

class Items extends Component {
    render() {
        return (
            <main className={styles.main}>
                {this.props.items.map(el => (
                    <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd}/> 
                ))}
            </main>
        )
    }
}

export default Items;