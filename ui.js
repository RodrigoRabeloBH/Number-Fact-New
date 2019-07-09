// Init Object
const numberFact = new Number()
// Get DOM elements to paint
const placeholder = document.querySelector('#text')
const div = document.getElementById('fact')
const input = document.querySelector('#numberText').value
class UI{
    paint(){
        numberFact.getFact()
        .then(res =>{
            if(input ==='' || isNaN(input)){
                alert('Enter with some number')
            }
            else{
                div.style.display ='block'
                placeholder.textContent = res                              
            }
        })
        .catch(err=> console.log(err))
    }
}



