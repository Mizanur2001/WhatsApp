const wbm = require('wbm');

const msg = 'hello This is for testing Purpose'

wbm.start().then(async () => {
    const phones = ['Your Number'];
    const message = msg;
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));