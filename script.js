let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');
let first = 0;
let last = names.length-1;

 let chooseName = function(first, last){
  return Math.floor(Math.random() * (last - first) + first);
}
para.textContent = names[chooseName(last, first)];


const section = document.querySelector('section');

section.appendChild(para);
