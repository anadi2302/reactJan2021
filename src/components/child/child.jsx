import { Fragment, Component } from 'react';
import WithCounter from '../hoc/withCounter';
class Child extends Component {
    btnClick = () => {
    
    }
    render() { 
        return (  
            <Fragment>
                <button onClick={this.btnClick}>Send Value</button>
            </Fragment>
        );
    }
}
export default WithCounter(Child);