// Form.js
import React, { useState } from "react";
function Form(props) {
  const [firstName, setFirstName] = useState(""); // Estat del nom de l'estudiant
  const [lastName, setLastName] = useState(""); // Estat del cognom de l'estudiant
  const [welcomeMessage, setWelcomeMessage] = useState(""); // Estat del missatge de benvinguda

  const handleSubmit = (e) => { // Funció per a gestionar l'enviament del formulari
    e.preventDefault(); // Evita l'enviament per defecte del formulari
    setWelcomeMessage(`Benvingut ${firstName} ${lastName}!`); // Actualitza el missatge de benvinguda
    props.setPlacesDisponibles(props.placesActuals - 1); // Actualitza les places disponibles
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/2" onSubmit={handleSubmit}> 
        <h1 className="text-3xl font-bold text-center mb-8">
          Detalls d'estudiant: {props.tipusEstudiantSelect} {/* Crida al promp del tipus d'estudiant */}
          <script>
     
          </script>
        </h1>
        <div className="flex justify-between mb-4">
          <label className="text-gray-700 text-sm font-bold mr-2">
            Places Disponibles No Graduats:
          </label>
          <span>{props.ngPlaces}</span> {/* Crida al promp del tipus del número de Places no graduats */}
        </div>
        <div className="flex justify-between mb-4">
          <label className="text-gray-700 text-sm font-bold mr-2">
            Places Disponibles Graduats:
          </label>
          <span>{props.gPlaces}</span> {/* Crida al promp del tipus del número de Places graduats */}
        </div>
        <label className="block w-full text-4xl mb-4 p-2" id="studentMsg">
          {welcomeMessage}
        </label>
        <h1 className="text-3xl font-bold text-center mb-8">
          Informació Estudiant
        </h1>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nom:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="fname"
          onBlur={(e) => setFirstName(e.target.value)} // Quan es perd el focus de l'input, actualitza el nom de l'estudiant
        />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Cognom:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="lname"
          onBlur={(e) => setLastName(e.target.value)} // Quan es perd el focus de l'input, actualitza el cognom de l'estudiant
        />
        <br />
        <br />
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default Form;
