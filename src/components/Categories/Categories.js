import React, { Component } from 'react'
import styles from './Categories.module.scss'
import { CATEGORIES_LIST } from '../../constants/categories'

export class Categories extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            categories: CATEGORIES_LIST
        }
    }

    render() {
        return (
        <div className={styles.categories}>
            {this.state.categories.map(el => (
                <div key={el.key} className={styles['category-item']} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
        )
    }
}

export default Categories
