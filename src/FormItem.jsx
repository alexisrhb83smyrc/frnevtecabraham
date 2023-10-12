import { useState } from "react";

export function FormItem() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState("");
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="fecha">Fecha de nacimiento</label>
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            name="fecha"
            id="fecha"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="edad">Edad</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            name="edad"
            id="edad"
            required
          />
        </div>
        <button className="btn">Borrar</button>
        <label className="title" htmlFor="name">
          Nombre:
          <p className="data" id="name">{name}</p>
        </label>
        <label className="title" htmlFor="name">
          Fecha de nacimiento:
          <p className="data" id="name">{birthday}</p>
        </label>
        <label className="title" htmlFor="name">
          Edad:
          <p className="data" id="name">{age}</p>
        </label>
      </form>
    </>
  );
}
