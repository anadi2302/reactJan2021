import "./contact.css";
import { Component } from 'react';
class Contact extends Component {
    constructor(props){
        super(props);
        this.classes = props.gender === 'M' ? 'box male' : 'box female';
        this.title = props.gender === 'M' ? 'Mr.' : 'Ms.';
        this.state = {
            contacted: props.contacted
        }
    }
    handleChange = () => {
        this.setState({
            contacted: !this.state.contacted
        })
    }
    render(){
        return(
            <div className={this.classes}>
                <div className={ this.state.contacted && 'contacted' }>
                    <h3>{ this.title } { this.props.name }</h3>
                    <hr />
                    {
                        this.props.email && <h4>Email: { this.props.email }</h4>
                    }
                    <h4>Mobile: { this.props.mobile ? this.props.mobile : 'N/A' }</h4>
                </div>
                <hr />
                <input type='checkbox' checked={this.state.contacted} onChange={this.handleChange} />Contacted
            </div>
        );
    }
}

export default Contact;