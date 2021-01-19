import { Fragment, Component } from 'react';
import WithCounter from '../hoc/withCounter';

class ClickCounter extends Component{

    render(){
        console.log('RENDERING');
        return (
            <Fragment>
                <h2>{ this.props.count }</h2>
                <button onClick={this.props.incrementCounter}>Click Me</button>
            </Fragment>
        );
    }
}
export default WithCounter(ClickCounter);