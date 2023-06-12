from flask import Flask, request, send_file, render_template
from chromahacker.palettize import palettize

app = Flask(__name__)

@app.route('/palettize', methods=['GET'])
def palettize_endpoint():
    url, arg0, arg1, arg2 = request.args.get('url'), request.args.get('arg0'), request.args.get('arg1'), request.args.get('arg2')

    palettize(url, arg0, arg1, arg2)

    return send_file('../wallpaper.jpg', mimetype='image/jpg')

@app.route('/')
def main():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
