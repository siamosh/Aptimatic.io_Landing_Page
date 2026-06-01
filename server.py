import http.server
import socketserver

PORT = 5000

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Strip conditional headers so server always returns 200, never 304
        self.headers._headers = [
            h for h in self.headers._headers
            if h[0].lower() not in ('if-modified-since', 'if-none-match')
        ]
        super().do_GET()

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def log_message(self, format, *args):
        print(f"{self.address_string()} - {format % args}")

with socketserver.TCPServer(('0.0.0.0', PORT), NoCacheHandler) as httpd:
    httpd.allow_reuse_address = True
    print(f'Serving on http://0.0.0.0:{PORT} — no-cache, no 304')
    httpd.serve_forever()
