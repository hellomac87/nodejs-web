'use strict';

const dns = require('dns');

dns.lookup('google.com', (err, address, family) => {
    console.log(`address: ${address}, ${family}`);
    // IPv4
});

dns.resolve4('archive.org', (err, addresses) => {
    if(err) throw err;

    const res = JSON.stringify(addresses);

    console.log(res);

    addresses.forEach(a => {
        dns.reverse(a, (err, hostnames) => {
            if(err) throw err;
            console.log(`reverse for ${a}; ${JSON.stringify(hostnames)}`)
        });
    })
})