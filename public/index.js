const birdForm = document.querySelector('form')

birdForm.addEventListener('submit', async (e) => {

    const name = document.querySelector('#nameField').value
    const place = document.querySelector('#placeField').value
    const count = document.querySelector('#countField').value
    const message = document.querySelector('#message')
    const bird = {name, place, count}

    e.preventDefault()

    try {
        const response = await axios.post('/birds', bird)
        message.textContent = "Tietokantaan lisätty: " + response.data.name + ", " 
        + response.data.place + ", " + response.data.count + " kappaletta."
    } catch (error) {
        message.textContent = error
    }
})