import React, {Component} from 'react';
import BinHeader from './Headers/BinHeader';
import axios from 'axios';

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

    saveProduct(){
        let {product_name, price} = this.state;
        let {id} = this.props.match.params;
        let body = {
            shelf: id[0],
            bin: id[1],
            product_name: product_name,
            price: price.replace('$', '')
        }

        axios.post(`/api/bin/${id}`, body)
        .then(response => {
            console.log(response.data)
            this.props.history.goBack();
        }).catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <BinHeader id={this.props.match.params.id} addTo={true} />
                <div className="NewProduct">
                    <span>Name</span>
                    <input  onChange={e => this.updateName(e.target.value)}/>
                    <span>Price</span>
                    <input value={this.state.price} onChange={e => this.updatePrice(e.target.value)}/>
                    <button onClick={() => this.saveProduct()}>+ Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default NewProduct;
