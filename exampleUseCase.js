const EventEmitter = require('events');

class FileProcessor extends EventEmitter {
    processFile(filePath) {
        console.log(`Processing started for ${filePath}`);
        // Simulating file processing...
        setTimeout(() => {
            // Once processing is complete, emit the 'processed' event
            this.emit('processed', filePath);
        }, 2000);
    }
}

const fileProcessor = new FileProcessor();

fileProcessor.on('processed', (filePath) => {
    console.log(`Processing finished for ${filePath}`);
});

fileProcessor.processFile('example.txt');
