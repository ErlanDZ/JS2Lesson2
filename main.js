const ROOT = document.getElementById('root');
 const container = document.querySelector('container')

ROOT.style.cssText = `
box-sizing: border-box;
display: flex;
justify-content: space-around;
`

const btnModal = document.createElement('button');
ROOT.append(btnModal);
btnModal.textContent = 'Show modal 1';
btnModal.style.cssText = `
background-color: white;
color: black;
margin-top: 50px;
font-size: 1 rem;
display: block;
padding: 25px 50px;
border-radius: 50px;
border: none;
cursor: pointer;
font-size: 28px;
display: inline-block;

`

const btnModal2 = document.createElement('button');
ROOT.append(btnModal2);
btnModal2.textContent = 'Show modal 2';
btnModal2.style.cssText = `
background-color: white;
color: black;
margin-top: 50px;
font-size: 1 rem;
display: block;
padding: 25px 50px;
border-radius: 50px;
border: none;
cursor: pointer;
font-size: 28px;
`
const btnModal3 = document.createElement('button');
ROOT.append(btnModal3);
btnModal3.textContent = 'Show modal 3';
btnModal3.style.cssText = `
background-color: white;
color: black;
margin-top: 50px;
font-size: 1 rem;
display: block;
padding: 25px 50px;
border-radius: 50px;
border: none;
cursor: pointer;
font-size: 28px;
`

 btnModal.addEventListener('mouseover', () =>{
    btnModal.style.backgroundColor = 'green'; 
 })

 btnModal.addEventListener('mouseout', () =>{
    btnModal.style.backgroundColor = 'white'; 
 })

 btnModal2.addEventListener('mouseover', () =>{
   btnModal2.style.backgroundColor = 'green'; 
})

btnModal2.addEventListener('mouseout', () =>{
   btnModal2.style.backgroundColor = 'white'; 
})

btnModal3.addEventListener('mouseover', () =>{
   btnModal3.style.backgroundColor = 'green'; 
})

btnModal3.addEventListener('mouseout', () =>{
   btnModal3.style.backgroundColor = 'white'; 
})

 

//pop_up
 const moalWindow = document.createElement('div');
moalWindow.style.cssText = `


width: 100%;
height: 100%;
position: fixed;
left: 0;
top: 0;
background-color: rgba(0, 0, 0, .8);
z-index: 2;  
`


//pop_up_container
const moalWindowContainer = document.createElement('div');
moalWindow.append(moalWindowContainer);
moalWindowContainer.style.cssText = `
display: flex;
backdrop-filter: blur(5px);
width: 100%;
height: 100%;
`

//pop_up_body
const moalWindowBody = document.createElement('div');
moalWindowBody.style.cssText = `
margin: auto 50px;
width: 100%;
background-color: white;
border-radius: 10px;
padding: 25px 50px;
position: relative;
`
moalWindowContainer.append(moalWindowBody);

//pop_up_bodyIn
const moalWindowBodyIn = document.createElement('div');
moalWindowBodyIn.style.cssText = `

position: relative;
`


const titileModalWindom = document.createElement('h1');
titileModalWindom.textContent = "I'm a modal windom"
titileModalWindom.style.cssText = `
font-family: Arial;
text-line:  20px;
line-height: 2.5;
`

const pModalWindom = document.createElement('p');
pModalWindom.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium architecto repellendus nesciunt omnis aut deserunt molestias! Ad, sit. Nisi esse voluptatem dolores rem architecto aperiam earum nobis voluptates debitis molestias."
pModalWindom.style.cssText = `
font-size: 28px;
font-family: Arial;
line-height: 1.5;
`

const closeModalWindom = document.createElement('button');
closeModalWindom.textContent = "x";
closeModalWindom.style.cssText = `
width: 32px;
height: 30px;
font-size: 28px;
position: absolute;
top: 0;
right: 0;
font-weight: bold;
border: none;
background-color: transparent;
`


moalWindowBody.append(moalWindowBodyIn)
moalWindowBodyIn.append(titileModalWindom);
moalWindowBodyIn.append(pModalWindom);
moalWindowBody.append(closeModalWindom);


btnModal.addEventListener('click', () =>{
    ROOT.append(moalWindow); 
    
 })

 btnModal2.addEventListener('click', () =>{
   ROOT.append(moalWindow); 
   
})

btnModal3.addEventListener('click', () =>{
   ROOT.append(moalWindow); 
   
})


closeModalWindom.addEventListener('click', () =>{
   moalWindow.remove(moalWindowContainer); 
   
})

 const modal = doc.createElement('div');
 modal.style.cssText = `
 position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #00000050;
display: flex;
justify-content: center;
align-items: center;
 ` 

 
 


 


  