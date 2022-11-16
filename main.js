

const btnModal = document.querySelector('.btn1');


const btnModal2 = document.querySelector('.btn2');

const btnModal3 = document.querySelector('.btn3');


const btnModal4 = document.querySelector('.btn4');

let timeout;
 btnModal.addEventListener('click', () =>{
   console.log('Red')
     timeout = setTimeout(()=>{
      btnModal.style.cssText = `
   background-color: white;
   `
      console.log('Paint it white')
    },2000)
 })



 btnModal2.addEventListener('click', () =>{
   console.log('yellow')
    setTimeout(()=>{
      btnModal2.style.cssText = `
   background-color: white;
   `
      console.log('Paint it white')
    },2000)
})


btnModal3.addEventListener('click', () =>{
   console.log('Green')
    setTimeout(()=>{
      btnModal3.style.cssText = `
   background-color: white;
   `
      console.log('Paint it white')
    },2000)
})

btnModal4.addEventListener('click', () =>{
  btnModal.style.cssText = `
   background-color: red;
   `
   btnModal2.style.cssText = `
   background-color: yellow;
   `
   btnModal3.style.cssText = `
   background-color: green;
   `
})
