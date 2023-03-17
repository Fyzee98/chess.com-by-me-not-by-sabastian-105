# This restarts the index.js file.
import os
import time
from urllib2 import urlopen

while True:
    time.sleep(2)
    try:
        urlopen("https://tw-mirror.9fps.repl.co/ping")
    except URLError:
        print("Dead")
 
'''
os.system("echo 'Restarting node server . . .'")
os.system("node index.js")
os.system("echo 'Node is down!\n'")
# os.system("python auto-restart.py")
'''
