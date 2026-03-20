/**
 * CH-01: Event Loop (Execution Order Lab)
 * 
 * Lab ini membuktikan urutan eksekusi antara Timers, 
 * microTasks (nextTick & Promise), dan I/O callbacks.
 */

console.log('1. Script Start (Synchronous)');

setTimeout(() => {
    console.log('2. setTimeout (Timers Phase)');
}, 0);

setImmediate(() => {
    console.log('3. setImmediate (Check Phase)');
});

process.nextTick(() => {
    console.log('4. nextTick (High Priority microTask)');
});

Promise.resolve().then(() => {
    console.log('5. Promise (microTask Queue)');
});

console.log('6. Script End (Synchronous)');

/**
 * HASIL EKSEKUSI (Normalnya):
 * 1. Script Start
 * 6. Script End
 * 4. nextTick (Dieksekusi segera setelah sync code selesai)
 * 5. Promise (Sama seperti nextTick but after it)
 * 2. setTimeout (Tergantung scheduler, tapi biasanya Timer > Check)
 * 3. setImmediate
 * 
 * MENTAL MODEL:
 * Synchronous > microTasks (nextTick > Promise) > MacroTasks (Timers > Poll > Check)
 */
