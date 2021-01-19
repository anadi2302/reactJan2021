import { Fragment } from 'react';
import { contactList } from '../../data/contactList';
import Contact from '../contact/contact';

const Contacts = () => {
    let contacts = contactList.map(c => <Contact key={ c.id }
                                                 name={ c.name }
                                                 email={ c.email }
                                                 mobile={ c.mobile }
                                                 gender={ c.gender }
                                                 contacted={ c.contacted }></Contact>);
                                                 
    return (  
        <Fragment>
            {
                 contacts 
            }
        </Fragment>
    );
}
export default Contacts;