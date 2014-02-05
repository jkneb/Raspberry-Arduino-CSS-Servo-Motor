## Arduino code
*Coming soon...*


## Raspberry Pi
You need a [Raspbian](http://www.raspberrypi.org/downloads) distro, Git and [Node.js for Rapsberry](http://joshondesign.com/2013/10/23/noderpi) installed.


## Launch the project
0. make the circuit (servo + potentiometer) see [this link](http://arduino.cc/en/Tutorial/Knob).
0. upload the code into your Arduino.
1. connect Arduino to Raspberry via USB (Arduino is now supplied in 5V by the Raspberry).
1. ssh into your Raspberry (hope you know how to do this otherwise you're doomed)
0. clone this repo anywhere you want.
2. run `npm install`.
3. run `nodemon server.js`.
4. browse to `localhost:5000` or, more likely `http://ur.raspberry.ip:5000`.
5. play with the potentiometer to move the servo's arm.
6. Node should catch Arduino's `println` via `serialport` and socket.io should emit `angle` updates into the browser's console.


## Node modules in package.json

* [`nodemon`](https://npmjs.org/package/nodemon) because having to kill and restart Node every time you make a change is such a pain in the *...biiip...*
* [`express`](http://expressjs.com) because it gives you a Node web server environment in no time.
* [`serialport`](https://npmjs.org/package/serialport) so we can retrieve what Arduino's `println` is outputing.
* [`socket.io`](http://socket.io/) so Node can send / emit events to the browser.