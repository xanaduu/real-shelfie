import React, {Component} from 'react';
import axios from 'axios';
import ShelfHeader from './Headers/ShelfHeader';
import FullBin from './FullBin';
import EmptyBin from './EmptyBin';

class ShelfView extends Component {
    constructor(){
        super();
        this.state = {
            bins: []
        }
    }

    componentDidMount(){
        //Get bins for this shelf
        const shelfId = this.props.match.params.label;
        axios.get( `http://localhost:3001/api/shelf/${shelfId}` ).then( response => {
            this.setState({ bins: response.data });
            console.log(response.data);
        }).catch(err => console.log(err));
    }

    render(){
        let bins = this.state.bins.map((bin, i) => {
            if(bin && bin.product_name){
                return <FullBin
                    key={i}
                    bin={bin.bin}
                    product={bin.product_name}
                    price={bin.price}
                    image={bin.image} />
            } else {
                return <EmptyBin
                    key={i}
                    bin={i + 1}/>
            }
        })
        return (
            <div>
                <ShelfHeader label={this.props.match.params.label} />
                {bins}
            </div>
        )
    }
}

export default ShelfView;
