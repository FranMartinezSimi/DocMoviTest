import React from "react";
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';

export const Listado = () => {
  const links = useTracker(() => {
    return LinksCollection.find({db:"medicos"}).fetch();
  });
  return (
    <div className="row">
      <div className="col s12 ">
        <table className="centered">
          <thead>
            <th>
              <h6>Nombre</h6>
            </th>
            <th>
              <h6>Apellido Paterno</h6>
            </th>
            <th>
              <h6>Apellido Materno</h6>
            </th>
            <th>
              <h6>Rut</h6>
            </th>
            <th>
              <h6>Especialidad</h6>
            </th>
          </thead>
          <tbody>
            {
              links.map(data => (
                <tr>
                  <td>{data.nombreDoctor}</td>
                  <td>{data.apellidoPDoctor}</td>
                  <td>{data.apellidoMDoctor}</td>
                  <td>{data.rutDoctor}</td>
                  <td>{data.especialidadDoctor}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
