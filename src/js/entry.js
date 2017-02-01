import { Greet } from './greet.js';
require('../../dist/index.html');
require('../styles/main.sass');

let heading = document.querySelector('.greet');
heading.innerHTML = Greet("Dennis");
