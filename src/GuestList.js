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
        handleToggleEditing={() => props.toggleEditingAt(index)} />
    )}
</ul>

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    //adds the new prop the prop type
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired
}

export default GuestList;