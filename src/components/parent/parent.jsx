import { Fragment, Component } from 'react';
import Child from '../child/child';
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            num: 0
        }
    }
    getValue = (event) => {
        this.setState({
            num: event
        })
    }
    render() { 
        return (  
            <Fragment>
                <h2>Number from child: { this.state.num }</h2>
                <Child onSend={this.getValue}></Child>
            </Fragment>
        );
    }
}
 
export default Parent;
