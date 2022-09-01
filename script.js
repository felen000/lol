'use strict'
let block = document.querySelector('.block')
let outer = document.querySelector('.outer')
let lol = document.querySelector('.lol')

let size = outer.getBoundingClientRect()
let	maxTop = size.height - 50
let	maxLeft = size.width - 50

setInterval(lolTransform, 500)

move(block)

block.addEventListener('click', handleBlockClick)
block.addEventListener('mouseenter', () => {
	setTimeout(
		handleBlockEnter
	, 150);
} )


function handleBlockClick () {
	outer.style.background = '#000'
	outer.innerHTML = ''
	outer.insertAdjacentHTML("afterbegin", '<div class="death"> <h1>YOU DIED!</h1> <span>:)</span></div>')
}

function handleBlockEnter() {
	move(block)
	resize(block, 3)
}

function lolTransform() {
	resize(lol, 5)
	move(lol)
}

function move(obj) {
	obj.style.top = getRandom(0, maxTop) + 'px';
	obj.style.left = getRandom(0, maxLeft) + 'px';
}

function resize(obj, max) {
	obj.style.transform = `scale(${getRandom(1, max)})`
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}