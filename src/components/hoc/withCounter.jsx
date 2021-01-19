import { Component } from 'react';

const WithCounter = (OriginalComponent) => {
    class UpdatedComponent extends Component{
        constructor(){
            super();
            this.state = {
                count: 0
            }
        }
        incrementCounter = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        render(){
            return(
                <OriginalComponent count={this.state.count}
                                   incrementCounter={this.incrementCounter}></OriginalComponent>
            );
        }
    }
    return UpdatedComponent;
}
export default WithCounter;
