from flask import Flask, send_from_directory
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

users = {}  # Dictionary to store user information
next_player_id = 0  # Keeps track of next player ID assignment

@socketio.on('connect')
def handle_connect():
    print('A player connected')

@socketio.on('playerinput')
def handle_player_input(data):
    print(data)

@app.route("/game")
def game():
    return send_from_directory(".", "game.html")


@app.route("/<path:path>")
def patha(path):
    path = str(path)
    return send_from_directory(".",path)


app.run(host="::", port=80, debug=True)