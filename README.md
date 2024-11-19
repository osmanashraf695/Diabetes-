# Diabetes Prediction Web App

This project is a web application that predicts diabetes using a K-Nearest Neighbors (KNN) model. The application allows users to input their health metrics and receive a prediction on whether they are likely to have diabetes.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Model Training](#model-training)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**:
    ```bash
    git clone <your-repository-url>
    cd <repository-name>
    ```

2. **Create a virtual environment**:
    ```bash
    python -m venv venv
    ```

3. **Activate the virtual environment**:
    - On Windows:
        ```bash
        venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```

4. **Install the required packages**:
    ```bash
    pip install -r requirements.txt
    ```

## Usage

1. Start the Flask application:
    ```bash
    python app.py
    ```
2. Open your web browser and go to [http://127.0.0.1:5000](http://127.0.0.1:5000).

3. Input the required health metrics and click on the **Predict** button to see the prediction.

## Features
- User-friendly interface for inputting health metrics.
- KNN model for diabetes prediction.
- Displays results on a new page after prediction.

## Project Structure
project/
├── app.py
├── requirements.txt
├── data/
│   └── diabetes.csv
├── models/
│   └── Diabetes_predictingknn.joblib
├── notebooks/
│   └── Diabetes_predicting.ipynb
├── static/
│   ├── js/
│   │   └── script.js
│   └── css/
│       └── style.css
└── templates/
    └── index.html

## Model Training

The model used for diabetes prediction is trained using the K-Nearest Neighbors (KNN) algorithm.
The training process is detailed in the `Diabetes_predicting.ipynb` Jupyter notebook.
Ensure to check the notebook for data preprocessing and model evaluation steps.