import { useState } from "react";

function Input(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName , setFullName] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstName && lastName) {
          setFullName(`${firstName} ${lastName}`);
        }
      };
   
    return (
        <div>
            <form onSubmit={handleSubmit} >
            <h2>Full Name Display</h2>
            <label htmlFor="firstname">
                First Name :<input type="text" name="firstname" id="firstname"  
                onChange={(e) => setFirstName(e.target.value)} required />
            </label>
            <br />
            <label htmlFor="lastname">
                Last Name :<input type="text" name="lastname" id="lastname"
                onChange={(e) => setLastName(e.target.value)} required  />
            </label>
            <br />
            <button type="submit"> Submit </button>
            </form>

            {fullName && <p id="fullName"> Full Name: {fullName} </p> }

        </div>
    );
}





export default Input