import React from 'react'
import PropTypes from 'prop-types'

import Guest from './Guest';

const GuestList = props => 
<ul>
    {props.guests.map((guest, index) =>
        <Guest 
        key={index} 
        name={guest.name} 
        isConfirmed={guest.isConfirmed}
        isEditing={guest.isEditing}
        /*want this to be called when the checkbox is changed.  Passes
        this down through the guests components props. The change occurs in the guest 
        component. The handler requires an index.
        This a closure.  
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures*/
        handleConfirmation={() => props.toggleConfirmationAt(index)}
        handleToggleEditing={() => props.toggleEditingAt(index)}
        /*Accepts the new name and sets that guests state  Index indicates
        the right name to change.  In the body we call the function on props that
        takes an index and the text.  Call the function "setNameAt" */
        setName={text => props.setNameAt(text, index)} />
    )}
</ul>

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    //adds the new prop the prop type
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired
}

export default GuestList;