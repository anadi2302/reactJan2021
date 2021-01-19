import { Fragment } from 'react';
import "./header.css";
const Header = () => {
    let appName = "Demo App";
    let h3Style = {
        color: "green",
        textDecoration: "underline"
    };
    return (
        <Fragment>
            <h2 className='heading'>Welcome To { appName }</h2>
            <h3 style={h3Style}>This is my first react application</h3>
            <hr />
        </Fragment>
    );
}
export default Header;