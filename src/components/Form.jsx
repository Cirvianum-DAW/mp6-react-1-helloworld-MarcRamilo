import React, { useState } from "react";

function Form(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [welcomeMessage, setWelcomeMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setWelcomeMessage(`Hola ${firstName} ${lastName}!`);
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-1/2" onSubmit={handleSubmit}>
                <label className="block w-full text-4xl mb-4 p-2" id="studentMsg">
                    {welcomeMessage}
                </label>
                <h1 className="text-3xl font-bold text-center mb-8">
                    Informació Estudiant
                </h1>
                <label className="block text-gray-700 text-sm font-bold mb-2">Nom:</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"
                    name="fname"
                    onBlur={(e) => setFirstName(e.target.value)}
                />
                <br />
                <label className="block text-gray-700 text-sm font-bold mb-2">Cognom:</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text"
          name="lname"
          onBlur={(event) => setLastName(event.target.value)}/>
                <br />
                <br />
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default Form;