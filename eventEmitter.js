const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('start', () => {
    console.log('Starting...');
});
myEmitter.on('end', () => {
    console.log('Ending...');
});

myEmitter.emit('start');
myEmitter.emit('end');
