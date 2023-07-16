const order1Root = document.querySelector('[data-key="order1"]');
const order1Biscuits = order1Root.querySelector('.biscuits .count');
const order1Donuts = order1Root.querySelector('.donuts .count');
const order1Pancakes = order1Root.querySelector('.pancakes .count');
const order1Status = order1Root.querySelector('.status');

const order2Root = document.querySelector('[data-key="order2"]');
const order2Biscuits = order2Root.querySelector('.biscuits .count');
const order2Donuts = order2Root.querySelector('.donuts .count');
const order2Pancakes = order2Root.querySelector('.pancakes .count');
const order2Status = order2Root.querySelector('.status');

const order3Root = document.querySelector('[data-key="order3"]');
const order3Biscuits = order3Root.querySelector('.biscuits .count');
const order3Donuts = order3Root.querySelector('.donuts .count');
const order3Pancakes = order3Root.querySelector('.pancakes .count');
const order3Status = order3Root.querySelector('.status ');

order1Biscuits.innerHTML = order1Root.dataset.biscuits;
order1Donuts.innerHTML = order1Root.dataset.donuts;
order1Pancakes.innerHTML = order1Root.dataset.pancakes;
order1Status.innerHTML = order1Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending';

order2Biscuits.innerHTML = order2Root.dataset.biscuits;
order2Donuts.innerHTML = order2Root.dataset.donuts;
order2Pancakes.innerHTML = order2Root.dataset.pancakes;
order2Status.innerHTML = order2Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending';

order3Biscuits.innerHTML = order3Root.dataset.biscuits;
order3Donuts.innerHTML = order3Root.dataset.donuts;
order3Pancakes.innerHTML = order3Root.dataset.pancakes;
order3Status.innerHTML = order3Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending';