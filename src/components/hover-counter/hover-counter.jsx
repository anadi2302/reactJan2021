import { Fragment, Component } from 'react';
import WithCounter from '../hoc/withCounter';
class HoverCounter extends Component{

    render(){
        console.log('RENDERING');
        return (
            <Fragment>
                <h2 onMouseOver={ this.props.incrementCounter }>Hover Here To Increment: { this.props.count }</h2>
                
            </Fragment>
        );
    }
}
export default WithCounter(HoverCounter);