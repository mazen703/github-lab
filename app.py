from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to your first Flask Application!"

@app.route('/about')
def about():
    return "This is a simple Flask application for GitHub practice and devops."

if __name__ == '__main__':
    app.run(debug=True)
