let toggleBtn = document.querySelector('#menu');
let bigSidebar = document.querySelector('aside');
let smallSidebar = document.querySelector('.aside');
let filter = document.querySelector('.filter');
let mainContent = document.querySelector('.main-content');
let main = document.querySelector('main');
let filterBtn = document.querySelectorAll('.filter-btn');
let videoContainer = document.querySelector('.list_content');
const slider = document.querySelector('.filter');
let mouseDown = false;
let startX, scrollLeft;
let myBtns=document.querySelectorAll('.filter-btn');

    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('active-btn'));
          btn.classList.add('active-btn');
        });
 
    });


let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};


toggleBtn.addEventListener('click', () => {
  bigSidebar.classList.toggle('active');
  console.log('he');

  if(mainContent.classList.contains('small-sidebar-margin')){
    mainContent.classList.remove('small-sidebar-margin');
    mainContent.classList.add('big-sidebar-margin');
  } else {
    mainContent.classList.remove('big-sidebar-margin');
    mainContent.classList.add('small-sidebar-margin');
  }

});

toggleBtn.addEventListener('click', () => {
  smallSidebar.classList.toggle('active');
})

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);









