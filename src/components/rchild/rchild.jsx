import { Fragment, Component } from 'react';
class RChild extends Component {
    constructor(props){
        super(props);
        this.state = {
            num: props.val
        }
    }
    render() { 
        console.log("Rec Child Render");
        return (  
            <Fragment>
                <h2>Receiver Child</h2>
                <h4>Value: { this.state.num }</h4>
            </Fragment>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.val !== this.props.val){
            this.setState({
                num: this.props.val
            });
        }
    }
}
export default RChild;
