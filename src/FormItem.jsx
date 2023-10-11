import { useState } from "react";

export function FormItem({}) {
  return (
    <>
    <form className="new-item-form">
    <div className="form-row">
        <label htmlFor="">Nombre</label>
        <input type="text" name="nombre" id="nombre" />
        <button className="btn">Guardar</button>
      </div>
      <div className="form-row">
        <label htmlFor="">Fecha de nacimiento</label>
        <input type="text" name="nombre" id="nombre" />
        <button className="btn">Guardar</button>
      </div>
      <div className="form-row">
        <label htmlFor="">Edad</label>
        <input type="text" name="nombre" id="nombre" />
        <button className="btn">Guardar</button>
      </div>
      <div className="form-row">
        <label htmlFor="">Foto</label>
        <input placeholder="Default" type="text" name="nombre" id="nombre" />
        <button className="btn">Guardar</button>
      </div>
    </form>
      
    </>
  );
}
