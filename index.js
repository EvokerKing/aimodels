function model() {
    const threshold = 0.5

    toxicity.load(threshold).then((model) => {
        const sentence = document.getElementById('classify-new-text-input').value

        model.classify(sentence).then((predictions) => {
            console.log(JSON.stringify(predictions, null, 2))
        })
    })
}

document.getElementById('classify-new-text').addEventListener('click', model())