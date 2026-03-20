/**
 * CH-01: HTTP/HTTPS (Server Lab)
 * 
 * Lab ini menunjukkan cara membuat web server murni 
 * menggunakan modul bawaan Node.js.
 */

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`--- Incoming: ${req.method} ${req.url} ---`);
    
    // Set Header
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Powered-By', 'Architect-Node');

    if (req.url === '/api/energy') {
        res.statusCode = 200;
        res.end(JSON.stringify({ status: 'Energy Flowing', value: 100 }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Source Not Found' }));
    }
});

server.listen(4000, () => {
    console.log('HTTP Server is active on port 4000');
});

/**
 * OBSERVASI:
 * Perhatikan bagaimana kita berinteraksi langsung dengan stream req dan res.
 * Framework seperti Express hanyalah lapisan (wrapper) di atas modul http ini.
 */
