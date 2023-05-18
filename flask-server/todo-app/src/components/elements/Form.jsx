import React from 'react'

export const Form = () => {
    return (
        <>
            <form action="post" id="form1">
                <label htmlfor="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" value="John" /><br />
                <label htmlfor="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
                <input type="submit" value="Submit" />
            </form> 
        </>
        
    )
}

