import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'

export class ProductList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products:[]
        }
    }
    
    render() {
        return (
            
<React.Fragment>

                
                <div className="py-5">
                    <div className="container">
                    <Title name="Our" title="Products"/>
                        <div className="row">
                            
                        </div>
                    
                    </div>
                </div>
</React.Fragment>
               
            
        )
    }
}

export default ProductList
