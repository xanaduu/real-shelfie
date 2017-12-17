import React, {Component} from 'react';
import BinHeader from './Headers/BinHeader';

class NewProduct extends Component {
    constructor(){
        super();
        this.state = {
            product_name: '',
            price: '$0'
        }
    }

    updateName(val){
        this.setState({ product_name: val })
    }
    updatePrice(val){
        this.setState({ price: val[0] === '$' ? val : '$' + val })
    }

    render(){
        return (
            <div>
                <BinHeader id={this.props.match.params.id} />
                <div className="NewProduct">
                    <span>Name</span>
                    <input  onChange={e => this.updateName(e.target.value)}/>
                    <span>Price</span>
                    <input value={this.state.price} onChange={e => this.updatePrice(e.target.value)}/>
                    <button>+ Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default NewProduct;
