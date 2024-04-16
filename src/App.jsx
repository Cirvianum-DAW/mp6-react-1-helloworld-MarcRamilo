import React from "react";
import { useState } from "react";
import Form from "./components/form"; // Fix the file path to use the correct casing
function App() {
  const [tipusEstudiant, setTipusEstudiant] = useState("no-graduat"); // Afegim la variable d'estat tipusEstudiant
  const handleChange = (e) => {
    setTipusEstudiant(e.target.value);
  }; // Afegim la funció que actualitza el valor de la variable d'estat tipusEstudiant
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <div className="tipusEstudiant">
        <label className="m-4">Selecciona Tipus d'Estudiant:</label>

        <select
          className="appDropDown border rounded-md py-1 px-2"
          onChange={handleChange}
          value={tipusEstudiant}
        >
          <option value="no-graduat">No Graduat</option>
          <option value="graduat">Graduat</option>
        </select>
      </div>
      <Form tipusEstudiantSelect={tipusEstudiant} />
    </div>
  );
}
export default App;