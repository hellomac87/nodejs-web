'use strict';

const fs = require('fs');
const { promisify } = require('util');

const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);

const writeAndRead = async (data = '') => {
    try {
        await write('test.txt', data);
        return (await read('test.txt'));
    } catch (e) {
        console.error(e);
    }
}; 

writeAndRead('something to write');