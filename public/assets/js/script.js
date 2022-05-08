let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('hovered'));
    this.classList.add('hovered')
}
list.forEach((item)=>item.addEventListener('mouseover',activeLink))

let toggle= document.getElementsByClassName('toggle');
let navigation = document.getElementsByClassName('navigation');
let main = document.getElementsByClassName('main');

toggle.onclick = function(){
  alert('test');
    navigation.classList.toggle('active');
    main.classList.toggle('active');

}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
