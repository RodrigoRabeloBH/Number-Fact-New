class Number{
    async getFact(){
        const number = document.querySelector('#numberText').value
        const request = await fetch(`http://numbersapi.com/${number}`)
        const response = await request.text()
        return response
    }
}