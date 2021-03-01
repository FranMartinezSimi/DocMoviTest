import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { validate  } from 'rut.js'
import { Selection } from './Select'
import { LinksCollection } from '../api/links'

export const Formulario = ({}) => {
  const { register, handleSubmit, errors } = useForm();
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  //funcion para crear nuevo doctor
  const submit = data => {
    LinksCollection.insert({
      nombreDoctor: data.nombreDoctor,
      apellidoPDoctor: data.apellidoPDoctor,
      apellidoMDoctor: data.apellidoMDoctor,
      rutDoctor: data.rutDoctor,
      especialidadDoctor: data.especialidadDoctor,
      db: "medicos",
      createdAt: Date.now()
    })
  }
  const rutValidate = async( value ) => {
    await sleep(1000)
    if(validate(value)) return true
    return false
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s10 offset-s1">
              <input 
                type="text" 
                className="validate" 
                name="nombreDoctor"
                ref={register({required: true })}
              />
              {errors.nombre && <p className="card-panel red darken-4 white-text card-content valign center">En este campo el nombre es requerido</p>}
              <label htmlFor="nombre">Nombre</label>     
            </div>
          </div>

          <div className="row">
            <div className="input-field col s10 offset-s1">
              <input
                type="text"
                className="validate"
                name="apellidoPDoctor"
                ref={register({required: true})} 
              />
              <label htmlFor="apellidoP">Apellido Paterno</label>
              {errors.apellidoP && <p className="card-panel red darken-4 white-text card-content valign center">En este campo el apellido Paterno es requerido</p>}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10 offset-s1">
              <input
                type="text"
                className="validate"
                name="apellidoMDoctor"
                ref={register({required: true})} 
              />
              <label htmlFor="apellidoM">Apellido Materno</label>
              {errors.apellidoM && <p className="card-panel red darken-4 white-text card-content valign center">En este campo el apellido Materno es requerido</p>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s10 offset-s1 l5 offset-l1">
            <input 
                type="text" 
                className="validate" 
                name="rutDoctor"
                ref={register({required: true, validate: rutValidate })} 
                 />
            <label htmlFor="rut">Rut</label>
            {errors.rut && <p className="card-panel red darken-4 white-text card-content valign center">Por favor ingrese un rut valido </p>}
          </div>
          <Selection register={register} errors={errors}/>
          </div>
        <div className="row">
          <div className="input-field col s10 offset-s1 l5 offset-l1">
            <button type="submit" className="waves-effect blue darken-4 btn-large col s12">
              <i className="material-icons left" >assignment_ind</i>nuevo
              doctor
            </button>
          </div>
          <div className="input-field col s10 offset-s1 l5">
            <button type="reset" className="waves-effect red darken-4 btn-large col  s12">
              <i className="material-icons left">delete</i>
              clear
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
