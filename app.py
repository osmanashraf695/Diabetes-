from flask import Flask, render_template, request, jsonify
import joblib
import numpy as np
import os

app = Flask(__name__)

# Load the KNN model from the models folder
model_path = os.path.join('models', 'Diabetes_predictingknn.joblib')
model = joblib.load(model_path)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from the request
        data = request.get_json()['feature_list']

        # Convert data into a numpy array
        input_features = np.array([data])

        # Predict using the loaded KNN model
        prediction = model.predict(input_features)

        # Return the prediction result as JSON
        result = 'Diabetes Detected' if prediction[0] == 1 else 'No Diabetes'
        return jsonify({'prediction': result})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == "__main__":
    app.run(debug=True)
