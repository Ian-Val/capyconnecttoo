const EventEmmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmmitter {
    log(message) {
        //Send an HTTP Request
        console.log(message);

        //Register an event
        this.emit(
            'messageLogged',
            {
                id: 1,
                name: 'Ian'
            }
        )
    }
}



module.exports = Logger;