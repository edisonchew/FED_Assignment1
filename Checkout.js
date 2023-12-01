var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++){
  var button = removeCartItemButtons[i]
  button.addEventListener('Click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
  })
}