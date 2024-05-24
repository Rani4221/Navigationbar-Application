import order from "./utility.js";



function displayData(category) {
    const data = document.querySelector('#data');
   data.innerHTML = ''
   const item = order[category]

   if(item){
    const ul =document.createElement('ul')
    item.forEach(items => {
       const li = document.createElement('li')
        li.textContent = items
        ul.appendChild(li)
        data.appendChild(ul)
        
    });
   }
}

document.getElementById('shopping'). addEventListener('click', () => displayData('shopping'))
document.getElementById('service'). addEventListener('click', () => displayData('service'))
document.getElementById('contact'). addEventListener('click', () => displayData('contact'))