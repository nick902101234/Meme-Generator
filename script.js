
const form = document.querySelector('#add-meme')
const addImage = document.querySelector('#add-image')
const topText = document.querySelector('#add-top-text')
const bottomText = document.querySelector('#add-bottom-text')
const memeSpread = document.querySelector('#meme-spread')
//var newImage = document.createElement('img')//creates image

form.addEventListener('submit',function(event){
  event.preventDefault();

  let newDiv = document.createElement('div')//creates div to wrap
  let imageDiv = document.createElement('div'); //creates image div
  let newTop = document.createElement('div') //creates top div
  let newBottom = document.createElement('div') //creates bottom div
  let newImage = document.createElement('img')//creates image
  let removeButton = document.createElement('button');
  
////////////////////
  let topPara = document.createElement('p')
  let botPara = document.createElement('p')

  //const paraTag = document.createElement('p')
////////////////////

  topPara.innerText = topText.value + ' '; 
  //adds toptext to div
  botPara.innerText = bottomText.value + ' '; 
  //adds bottomtext to div

  newDiv.append(newImage)

  memeSpread.append(newDiv) //appends div to list
  newDiv.append(imageDiv)
  imageDiv.append(newImage)
  imageDiv.append(newImage) //appends image to div
  imageDiv.append(newTop) //appends toptext to div
  newTop.append(topPara)
  imageDiv.append(newBottom) 
  //appends bottom text to div
  newBottom.append(botPara)


  
  
  newDiv.append(removeButton)
  removeButton.innerText = 'REMOVE'

  newImage.setAttribute('src', `${addImage.value}`) 
  //sets image source attribute
  newImage.setAttribute('alt', `${addImage.value}` )
  
  removeButton.value="remove"
  removeButton.className="remove"
  
  const removeButtons = document.querySelectorAll('.remove')
  //removeButton.id='remove'

  newDiv.id="div-wrapper"
  newDiv.className='wrapper-class'

  newTop.id = "top-div"
  newTop.className="top-class"

  newBottom.id = "bottom-div"
  newBottom.className = 'bottom-class'

  imageDiv.className = 'image-class'
  imageDiv.id = "image-div"

  //loop to remove the memes
  for(let btn of removeButtons){
    btn.addEventListener('click', function(event){
      event.target.parentElement.remove();
    })
  }

  //document.forms['add-meme'].reset() //resets the forms after submission

  console.log(memeSpread);
})

// for(let btn of removeButtons){
//   btn.addEventListener('click', function(event){
//     console.log(event.target);
//     newDiv.remove();
//   })
// }
