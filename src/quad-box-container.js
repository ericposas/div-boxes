import $ from 'jquery';


var quad_box_containers_count = 0;
var quad_box_containers = [];


$(document).ready(()=>{
  
  for(let i = 0; i < 4; i++)
    create_quadbox();
  
  $(window).trigger('resize');
  
  
});

var create_quadbox = ()=>{
  let qbc = 
    `<div id='quad-box-container-${quad_box_containers_count}' class="quad-box-container quad-box-container-${quad_box_containers_count}" data-count='${quad_box_containers_count}'>
      <div class="box quad-1"><p></p></div>
      <div class="box quad-2"><p></p></div>
      <div class="box quad-3"><p></p></div>
      <div class="box quad-4"><p></p></div>
    </div>`;
  quad_box_containers.push(
    '#quad-box-container-'+quad_box_containers_count
  );
  quad_box_containers_count+=1;
  $('body').append(qbc);
};


$(window).resize(()=>{
  
  $('.box').css('height', $('.box').css('width'));
  $('.quad-3').css('top', $('.quad-1').css('width'));
  $('.quad-4').css('top', $('.quad-2').css('width'));
  
  $('.quad-box-container').css('height', $('.quad-box-container').width()+'px');
  
  // item references the css selector 
  quad_box_containers.forEach((item,i)=>{
    $(item).css(
      'top',
      $('.quad-box-container').width()*$(item).attr('data-count'));
  });
  
});
