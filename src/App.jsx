// App.js
import React, { useState } from "react";
import Form from "./components/Form";

function App() { // Modul de l'APP
  const [tipusEstudiant, setTipusEstudiant] = useState("no-graduat"); // Estat de l'APP
  const [ngPlaces, setNGPlaces] = useState(60); // Número de places disponibles per a no graduats
  const [gPlaces, setGPlaces] = useState(40); // Número de places disponibles per a graduats

  const handleChange = (e) => { // Funció per a canviar el tipus d'estudiant
    setTipusEstudiant(e.target.value);
  };

  const setPlacesDisponibles = (updatedPlaces) => { // Funció per a actualitzar les places disponibles
    tipusEstudiant === "no-graduat"
      ? setNGPlaces(updatedPlaces)
      : setGPlaces(updatedPlaces);
    console.log("Places Disponibles No Graduats: ", ngPlaces);
    console.log("Places Disponibles Graduats: ", gPlaces);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <label className="m-4">Selecciona Tipus d'Estudiant:</label>
      <select
        className="appDropDown border rounded-md py-1 px-2"
        onChange={handleChange} // Quan canvia el tipus d'estudiant crida a la funció handleChange
        value={tipusEstudiant} // Valor actual del tipus d'estudiant
      >
        <option value="no-graduat">No Graduat</option>
        <option value="graduat">Graduat</option>
      </select>
      <Form
        tipusEstudiantSelect={tipusEstudiant} // Propietat tipusEstudiantSelect amb el valor del tipus d'estudiant
        setPlacesDisponibles={setPlacesDisponibles} // Propietat setPlacesDisponibles amb la funció setPlacesDisponibles
        ngPlaces={ngPlaces}  // Propietat ngPlaces amb el valor de places disponibles per a no graduats
        gPlaces={gPlaces}  // Propietat gPlaces amb el valor de places disponibles per a graduats
        placesActuals={tipusEstudiant === "no-graduat" ? ngPlaces : gPlaces} // Propietat placesActuals amb el valor de places disponibles
      />
    </div>
  );
}

export default App;
