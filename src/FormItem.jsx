import { useState } from "react";

export function FormItem() {
  const [formValues, setFormValues] = useState({});
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={formValues.name || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="fecha">Fecha de nacimiento</label>
          <input
            type="text"
            name="fecha"
            id="fecha"
            value={formValues.name || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="edad">Edad</label>
          <input
            type="text"
            name="edad"
            id="edad"
            value={formValues.name || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="foto">Foto</label>
          <input
            placeholder="Default"
            type="text"
            name="foto"
            id="foto"
            value={formValues.name || ""}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn">Guardar</button>
      </form>
    </>
  );
}
