import { useState } from "react";

export function FormItem({}) {
  return (
    <>
    <form className="new-item-form">
    <div className="form-row">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" />
        <button className="btn">Guardar</button>
      </div>
      <div className="form-row">
        <label htmlFor="fecha">Fecha de nacimiento</label>
        <input type="text" name="fecha" id="fecha" />
        <button className="btn">Guardar</button>
      </div>
      <div className="form-row">
        <label htmlFor="edad">Edad</label>
        <input type="text" name="edad" id="edad" />
        <button className="btn">Guardar</button>
      </div>
      <div className="form-row">
        <label htmlFor="foto">Foto</label>
        <input placeholder="Default" type="text" name="foto" id="foto" />
        <button className="btn">Guardar</button>
      </div>
    </form>
      
    </>
  );
}
