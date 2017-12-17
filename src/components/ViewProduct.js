import React, {Component} from 'react';
import axios from 'axios';
import BinHeader from './Headers/BinHeader';

class ViewProduct extends Component {
    constructor(){
        super();
        this.state = {
            id: '',
            product_name: '',
            price: '',
            update: false
        }
    }

    componentDidMount(){
        console.log('mounted');
        axios.get(`http://localhost:3001/api/bin/${this.props.match.params.id}`)
        .then(response => {
            console.log('here');
            console.log(response.data);
            let {id, product_name, price} = response.data[0]
            this.setState({
                id: id,
                product_name: product_name,
                price: price
            })
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <div>
                <BinHeader id={this.props.match.params.id} addTo={false}/>

                <div className="ViewProduct">
                    <div className="spacer"></div>
                    <div className="productImg">
                        <img src="http://lorempixel.com/200/200/business/" alt="product image" />
                    </div>
                    <div className="inputs">
                        <span>Name</span>
                        <input readOnly value={this.state.product_name}/>
                        <span className="clear">Price</span>
                        <input readOnly value={`$${this.state.price}`}/>
                        <div className="ViewProductBtns clear">
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default ViewProduct;
