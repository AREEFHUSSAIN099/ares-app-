# backend/app.py
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/names', methods=['GET'])
def get_names():
    try:
        with open("names.txt", "r") as f:
            names = [line.strip() for line in f if line.strip()]  # remove empty lines
        return jsonify(names)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)

