const start = Date.now();

console.log('starting timer...');

setTimeout(() => {
    const millis = Data.now() - start;
    console.log(`seconds elapsed = ${Math.floor(mills / 1000)}`);
}, 2000);