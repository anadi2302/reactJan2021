import { Fragment, PureComponent } from 'react';
class Child extends PureComponent {
    constructor(){
        super();
        this.state = {
            num: 0,
            message: '',
            obj1: {

            },
            obj2: {

            }
        }
    }
    btnClick = () => {
        this.setState({
            num: this.state.num + 0
        });
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.num !== nextState.num || this.state.message !== nextState.message
    // }
    render() { 
        console.log("Sender Child Render");
        return (  
            <Fragment>
                <h2>Sender Child</h2>
                <button onClick={this.btnClick}>Send Value To Parent</button>
            </Fragment>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.num !== this.state.num)
            this.props.onSend(this.state.num);
    }
}
export default Child;
