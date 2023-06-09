from flask import Flask, request, send_file
from chromahacker.palettize import palettize

app = Flask(__name__)

@app.route('/palettize', methods=['GET'])
def palettize_endpoint():
    data = request.get_json()
    url = data.get('url')
    args = data.get('args', [])

    print(url)
    print(args)
    palettize(url, *args)

    return send_file('../wallpaper.jpg', mimetype='image/jpg')

if __name__ == '__main__':
    app.run()
