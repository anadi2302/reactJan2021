import { Fragment } from 'react';
// import ClickCounter from './components/click-counter/click-counter';
// import Contact from './components/contact/contact';
// import Contacts from './components/contacts/contacts';
import Header from './components/header/header';
import Parent from './components/parent/parent';
// import HoverCounter from './components/hover-counter/hover-counter';

function App(){
  return (
    <Fragment>
      <Header></Header>
      <Parent></Parent>
    </Fragment>
  );
}

export default App;