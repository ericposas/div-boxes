import './quad-box-container.js';
import $ from 'jquery';



$(document).ready(()=>{
  
  alert('document is ready for finagling!');
  
});

$(window).resize(()=>{
  
  console.log('I think jquery pushes the resize events into a call stack array-like object; this way, there are no conflicts when defining new $(window).resize() functions.');
  
});

