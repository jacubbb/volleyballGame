const vball = document.getElementById('volleyball'), hitRight = document.getElementById('hitRight'),
    hitDown = document.getElementById('hitDown');
let posY = vball.offsetTop;
let posX = vball.offsetLeft;

hitRight.style.display = 'none'


//     *****UP*****
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 38){
        posX = vball.offsetLeft;
        posY = vball.offsetTop;
        vball.style.transform = `translate(0px, -500px)`
        vball.style.transition = 'all .5s'
        hitRight.style.transform = 'translate(0px, -500px)'
        hitRight.style.transition = 'all .5s'
        hitDown.style.display = 'none'
    }
})
//     *****RIGHT*****
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 39){
        posX = vball.offsetLeft;
        posY = vball.offsetTop;
        vball.style.transform = `translate(300px, 0px)`
        vball.style.transition = 'all .5s'
        hitRight.style.display = 'block'
        hitRight.style.transform = 'translate(300px, 0px'
        hitRight.style.transition = 'all .5s'

    }
})

//     *****LEFT*****
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 37){
        posX = vball.offsetLeft;
        posY = vball.offsetTop;
        vball.style.transform = `translate(0px, 0px)`
        vball.style.transition = 'all .5s'
        //hitRight style
        hitRight.style.transform = 'translate(0px, 0px)'
        hitRight.style.display = 'block'
        //hitDown style
        hitDown.style.display = 'block'
        hitDown.style.transform = 'translate(0px, 0px)'
        hitDown.style.transition = 'all .5s'
    }
})

//     *****DOWN*****
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 40){
        posX = vball.offsetLeft;
        posY = vball.offsetTop;
        //vball style
        vball.style.transform = `translate(0px, 0px)`
        vball.style.transition = 'all .5s'
        //hitRight style
        hitRight.style.transform = 'translate(0px, 0px)'
        hitRight.style.transition = 'all .5s'
        hitRight.style.display = 'none'
        //hitDown style
        hitDown.style.display = 'block'
        hitDown.style.transform = 'translate(0px, 0px)'
        hitDown.style.transition = 'all .5s'
    }
})


document.addEventListener('keydown', (event) => {
    if (event.keyCode === 80){
        posY = vball.offsetTop;
        posX = vball.offsetLeft;
        alert(posX + ', ' + posY)
    }
})