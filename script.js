






const form = document.querySelector('#add-meme')
const addImage = document.querySelector('#add-image')
const topText = document.querySelector('#add-top-text')
const bottomText = document.querySelector('#add-bottom-text')
const memeSpread = document.querySelector('#meme-spread')
//var newImage = document.createElement('img')//creates image

//const removeButtons = document.querySelectorAll('#remove')

for(let btn of removeButtons){
  btn.addEventListener('click', function(){
    console.log("you clicked remove")
  })
}







form.addEventListener('submit',function(event){
  event.preventDefault();

  console.log(addImage)

  const newDiv = document.createElement('div')//creates div to wrap
  const imageDiv = document.createElement('div'); //creates image div
  const newTop = document.createElement('div') //creates top div
  const newBottom = document.createElement('div') //creates bottom div
  let newImage = document.createElement('img')//creates image
  const removeButton = document.createElement('button');

  const topPara = document.createElement('p')
  const botPara = document.createElement('p')

  topPara.innerText = topText.value + ' '; //adds toptext to div
  botPara.innerText = bottomText.value + ' '; //adds bottomtext to div

  memeSpread.append(newDiv) //appends div to list
  newDiv.append(imageDiv)
  imageDiv.append(newImage)
  //newDiv.append(newImage) //appends image to div
  newDiv.append(newTop) //appends toptext to div
  newTop.append(topPara)
  newDiv.append(newBottom) //appends bottom text to div
  newBottom.append(botPara)
  newDiv.append(removeButton)

  removeButton.innerText = 'REMOVE'

  newImage.setAttribute('src', `${addImage.value}`) //sets image source attribute
  newImage.setAttribute('alt', `${addImage.value}` )
  
  removeButton.value="remove"
 // removeButton.id='remove'
  newDiv.id="div-wrapper"
  newTop.id = "top-div"
  newBottom.id = "bottom-div"
  imageDiv.id = "image-div"

  document.forms['add-meme'].reset() //resets the forms after submission

  console.log(memeSpread);
})
