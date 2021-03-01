import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';

export const Selection = ({ register, errors}) => {
  const links = useTracker(() => {
    return LinksCollection.find().fetch();
  });

  return (
    <div className="input-field col l5 s10 offset-s1">
      <select 
      className="browser-default"
       defaultValue="" 
       name="especialidadDoctor" 
       ref={register({required: true})}>

      <option value="" selected >Especialidades</option>
        {links.map((link) => (
          <option key={link._id} value={link.nombre}>{link.nombre}</option>
        ))}

      </select>
      {errors.especialidad && <p className="card-panel red darken-4 white-text card-content valign center">favor elegir un valor valido</p>}
    </div>
  );
};
