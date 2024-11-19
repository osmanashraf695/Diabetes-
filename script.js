async function predictDiabetes(event) {
    event.preventDefault();  // Prevent form submission

    const feature_list = [
        parseFloat(document.getElementById('pregnancies').value),
        parseFloat(document.getElementById('glucose').value),
        parseFloat(document.getElementById('bloodPressure').value),
        parseFloat(document.getElementById('skinThickness').value),
        parseFloat(document.getElementById('insulin').value),
        parseFloat(document.getElementById('bmi').value),
        parseFloat(document.getElementById('diabetesPedigreeFunction').value),
        parseFloat(document.getElementById('age').value)
    ];

    try {
        const response = await fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feature_list: feature_list }),
        });

        const result = await response.json();

        // Display the prediction result
        if (result.prediction) {
            document.getElementById('result').textContent = `Prediction: ${result.prediction}`;
        } else if (result.error) {
            document.getElementById('result').textContent = `Error: ${result.error}`;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'An error occurred during prediction';
    }
}
