import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.min.css'

Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
});
