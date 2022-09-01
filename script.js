let block = document.querySelector('.inner')
let outer = document.querySelector('.outer')
let lol = document.querySelector('.lol')

let size = outer.getBoundingClientRect()
let	maxTop = size.height - 50
let	maxLeft = size.width - 50

setInterval(lolTransform, 500)

block.addEventListener('mouseenter', blockHandler)

function blockHandler() {
	move(block)
	resize(block)
}

function lolTransform() {
	move(lol)
	resize(lol)
}

function move(obj) {
	console.log('gg');
	obj.style.top = getRandom(0, maxTop) + 'px';
	obj.style.left = getRandom(0, maxLeft) + 'px';
}

function resize(obj) {
	obj.style.transform = `scale(${getRandom(1, 5)})`
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}