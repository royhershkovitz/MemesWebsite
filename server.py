import socketserver
import sys
from handler import HCIRequestHandler

port = 8080
Handler = HCIRequestHandler

print('server connecting on port: ', port, '\n')
server = socketserver.TCPServer(('0.0.0.0', port), Handler)
try:
    server.serve_forever()
except KeyboardInterrupt:
    print('\nCLOSING SERVER\n')
finally:
    server.shutdown()
    server.server_close()
    print('\nSERVER_CLOSED\n')