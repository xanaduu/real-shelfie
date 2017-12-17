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
            button: 'Edit'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        axios.get(`http://localhost:3001/api/bin/${this.props.match.params.id}`)
        .then(response => {
            console.log(response.data);
            let {id, product_name, price} = response.data[0]
            this.setState({
                id: id,
                product_name: product_name,
                price: '$'+price
            })
        }).catch(err => console.log(err));
    }

    updateName(val){
        this.setState({product_name: val})
    }

    updatePrice(val){
        this.setState({ price: val[0] === '$' ? val : '$' + val })
    }

    handleClick(){
        if(this.state.button === 'Edit'){
            this.allowEdit();
        } else {
            this.editProduct();
        }
    }

    allowEdit(){
        let inputs = document.getElementsByTagName('input');
        inputs[0].removeAttribute('readOnly');
        inputs[1].removeAttribute('readOnly');
        this.setState({button: 'Save'})
    }

    editProduct(){
        axios.put(`http://localhost:3001/api/bin/${this.props.match.params.id}`, {
            product_name: this.state.product_name,
            price: this.state.price.replace('$', '')
        })
        .then(response => {
            console.log(response);
            this.setState({button: 'Edit'})
            let inputs = document.getElementsByTagName('input');
            inputs[0].setAttribute('readOnly', true);
            inputs[1].setAttribute('readOnly', true);
        }).catch(err => console.log(err));
    }

    deleteProduct(){
        axios.delete(`http://localhost:3001/api/bin/${this.props.match.params.id}`)
        .then(response => {
            console.log(response.data);
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
                        <input readOnly value={this.state.product_name} onChange={e => this.updateName(e.target.value)}/>
                        <span className="clear">Price</span>
                        <input readOnly value={`${this.state.price}`} onChange={e => this.updatePrice(e.target.value)}/>
                        <div className="ViewProductBtns clear">
                            <button onClick={this.handleClick} className={this.state.button}>{this.state.button}</button>
                            <button onClick={() => this.deleteProduct()}>Delete</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default ViewProduct;
