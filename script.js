const container_box = document.querySelector('.container-box')
const colors = ['#7700ff', '#ff00ff', '#00e1ff', '#e100ff', '#ca397d']

const SQUARES = 100

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('box')


    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseout', () => {
        removeColor(square)
    })

    container_box.appendChild(square)

}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
