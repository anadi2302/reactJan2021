import { Fragment, Component } from 'react';
import Child from '../child/child';
import RChild from '../rchild/rchild';
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            num: 0,
            message: ''
        }
    }
    getValue = (event) => {
        this.setState({
            num: event
        });
    }
    render() { 
        console.log("Parent Render");
        return (  
            <Fragment>
                <Child onSend={this.getValue}></Child>
                <hr />
                <RChild val={this.state.num}></RChild>
            </Fragment>
        );
    }
}
 
export default Parent;
