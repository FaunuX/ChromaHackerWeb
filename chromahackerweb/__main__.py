import os
import webbrowser

from flask import Flask, request, send_file, render_template
from chromahacker.palettize import palettize

app = Flask(__name__)

OUTPUT = "png"

@app.route('/palettize', methods=['GET'])
def palettize_endpoint():
    url = request.args.to_dict()['url']
    print(request.args.to_dict())

    args = []
    i = 0
    while True:
        if 'arg' + str(i) in request.args.to_dict():
            args.append(request.args.get('arg' + str(i)))
            i += 1
        else:
            break

    accurate = not "accuracy" in request.args.to_dict()
    palettize(url, OUTPUT, *args, accurate=accurate)

    return send_file(os.getcwd() + '/wallpaper.' + OUTPUT, mimetype='image/' + OUTPUT)

@app.route('/')
def main():
    return render_template('index.html')

def run():
    webbrowser.open('http://localhost:5000')
    app.run()
