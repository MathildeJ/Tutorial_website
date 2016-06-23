from flask import Flask, request, make_response, render_template
app = Flask(__name__)

@app.route('/')
def index():
   return render_template('index.html')

@app.route('/agents')
def agents():
   return render_template('agents.html')

@app.route('/chat')
def chat():
   return render_template('chat.html')
