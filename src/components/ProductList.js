import React, { Component } from 'react'
import Product from './Product'

export class ProductList extends Component {
    render() {
        return (
            <div>
                <Product/>
                <h3>ProductList</h3>
            </div>
        )
    }
}

export default ProductList
