let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');
let first = 0;
let last = names.length-1;

 let chooseName = function(first, last){
  return Math.floor(Math.random() * (last - first + 1) + first);
}
para.textContent = names[chooseName(first, last)];


const section = document.querySelector('section');

section.appendChild(para);
