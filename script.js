 
 
 let pai =  document.querySelector('body');
 let filhaDoBody = document.createElement('h1')
 filhaDoBody.innerText = 'Exercício 5.2 - JavaScript DOM'
 filhaDoBody.classList= 'filhaDoBody' //Aqui é opcional, mas é bom deixar para identificar a filha
  pai.appendChild(filhaDoBody)
 
  let elementMain= document.createElement('main')
  elementMain.classList = 'main-content'
  pai.appendChild(elementMain)

 let elementSection = document.createElement('section')
 elementSection.classList = 'center-content'
 elementMain.appendChild(elementSection)

 let elementP = document.createElement('p')
 elementP.innerText = 'pondo texto'
 elementSection.appendChild(elementP)

 let elementSection2 = document.createElement('section')
 elementSection2.classList = 'left-content'
 elementMain.appendChild(elementSection2) 

 let elementSection3 = document.createElement('section')
 elementSection3.classList = 'right-content'
 elementMain.appendChild(elementSection3)
 
 let elementImg = document.createElement('img')
 elementImg.className = 'small-image'
 elementImg.src= 'https://picsum.photos/200'
 elementSection2.appendChild(elementImg)

  let elementUl = createElement('ul')
  elementSection3.appendChild(elementUl)
  let arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
  'Sete', 'Oito', 'Nove', 'Dez']
  for(let j=0; j<=arrayNumbers.length; j+=1){
  let elementLi = document.createElement('li')
  elementLi.innerText = arrayNumbers[j]
  elementUl.appendChild(elementLi)
  }
 
  for(let i= 1; i <= 3; i +=1){
  let h3 = document.createElement('h3');
    h3.innerHTML = i;
    
  elementSection2.appendChild(h3);
 }
  