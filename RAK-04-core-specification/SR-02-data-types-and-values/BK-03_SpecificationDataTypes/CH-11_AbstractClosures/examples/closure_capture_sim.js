/**
 * CH-11: Abstract Closures (Spec Lab)
 * 
 * Lab ini mensimulasikan "Abstract Closure" yang menangani 
 * penangkapan variabel (capturing) secara internal.
 */

function createClosure(capturedValue) {
    // Simulasi Abstract Closure [[CapturedValues]]
    const internalClosure = {
        "[[CapturedValues]]": { x: capturedValue },
        "[[Call]]": function() {
            console.log(`Executing closure with captured x: ${this["[[CapturedValues]]"].x}`);
        }
    };
    
    return internalClosure;
}

const myClosure = createClosure("PLATFORM_KEY_01");
myClosure["[[Call]]"]();

/**
 * MENTAL MODEL:
 * Abstract Closure adalah "Kamera" yang memotret variabel 
 * di sekitarnya dan menyimpannya di dalam album foto 
 * pribadi untuk dilihat nanti saat dipanggil.
 */
