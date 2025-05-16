import http.server
import socketserver
import socket
import os

# إنشاء مجلد الصور إذا لم يكن موجودًا
if not os.path.exists('images'):
    os.makedirs('images')
    print("Created 'images' directory. Please place your images there.")

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

# الحصول على عنوان IP المحلي للجهاز
hostname = socket.gethostname()
local_ip = socket.gethostbyname(hostname)

print("\nIMPORTANT: Please make sure to place your images in the 'images' folder:")
print("- logo.png: Company logo")
print("- 3.png: Showcase image 1")
print("- 4.png: Showcase image 2\n")

with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
    print(f"Serving at:")
    print(f"- Local: http://localhost:{PORT}")
    print(f"- Network: http://{local_ip}:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")







