import pickle
import pandas as pd
import random
from flask import Flask, request, render_template, jsonify
from flask_cors import CORS

# Load trained models and label encoders
with open("rf_hs.pkl", "rb") as f:
    rf_hs = pickle.load(f)
with open("rf_sb.pkl", "rb") as f:
    rf_sb = pickle.load(f)
with open("rf_hyd.pkl", "rb") as f:
    rf_hyd = pickle.load(f)
with open("label_encoders.pkl", "rb") as f:
    label_encoders = pickle.load(f)

app = Flask(__name__)
CORS(app)

# Home Page Route
@app.route('/')
def index():
    return render_template('index.html', prediction=None)

# Prediction Route
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        # Get input values
        temp = float(data['temperature'])
        humidity = float(data['humidity'])
        uv_index = data['uv_index']
        sweating = data['sweating_level']
        spf = data['spf_level']
        skin_type = data['skin_type']
        water = data['water_intake']
        activity = data['activity_level']
        
        # Create DataFrame for input
        user_data = pd.DataFrame([[temp, humidity, uv_index, sweating, spf, skin_type, water, activity]],
                                 columns=["temperature", "humidity", "uv_index", "sweating_level", "spf_level", "skin_type", "water_intake", "activity_level"])
        
        # Encode categorical variables
        for col in label_encoders:
            if user_data[col][0] in label_encoders[col].classes_:
                user_data[col] = label_encoders[col].transform(user_data[col])
            else:
                user_data[col] = label_encoders[col].transform([random.choice(label_encoders[col].classes_)])[0]
        
        # Predictions
        hs_risk = rf_hs.predict(user_data)[0]
        sb_severity = rf_sb.predict(user_data)[0]
        hyd_status = rf_hyd.predict(user_data)[0]
        
        prediction = {
            "heatstroke_risk": ["Low", "Moderate", "High"][hs_risk],
            "sunburn_severity": round(sb_severity, 2),
            "hydration_status": ["Well Hydrated", "Mildly Dehydrated", "Severely Dehydrated"][hyd_status]
        }
        return jsonify(prediction)

    except Exception as e:
        return f"Error: {e}", 400

if __name__ == '__main__':
    app.run(debug=True)
