'use strict';

const fs = require('fs');

fs.readFile('test.txt', 'utf-8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
});

const content = 'something to write';

fs.writeFile('fast.txt', content, err => {
    if(err) {
        console.error(err);
        return;
    }
    console.log('success');
})