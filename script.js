const wrapper = document.querySelector('.wrapper');
const video = wrapper.querySelector('.flex');
const speed = document.querySelector('.speed');
const speedbar = document.querySelector('.speed-bar');

function run(){
    let rect = this.getBoundingClientRect();
    let bar ={
        position:event.clientY - rect.y,
        height:rect.height
    }
    speedbar.style.height = `${(bar.position/rect.height)*100}%`
    speedbar.innerHTML = `${Math.round((bar.position / rect.height)*100) }`
}

speed.addEventListener('click', run)
speed.addEventListener('mousemove', run)