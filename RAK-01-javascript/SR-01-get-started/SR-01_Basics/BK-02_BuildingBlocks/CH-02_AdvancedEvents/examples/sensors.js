/**
 * sensors.js
 * 
 * Logika untuk memproses berbagai sinyal dari Sensor Array.
 */

// 1. Keyboard Sensor
const keyInput = document.querySelector("#keyboard-input");
const keyLog = document.querySelector("#key-log");

keyInput.addEventListener("keydown", (e) => {
    const timestamp = new Date().toLocaleTimeString();
    const entry = document.createElement("div");
    entry.textContent = `[${timestamp}] Sinyal: '${e.key}' | Code: ${e.code}`;
    keyLog.prepend(entry);
});

// 2. Motion Sensor
const trackArea = document.querySelector("#track-area");
const posDisplay = document.querySelector("#pos-display");

trackArea.addEventListener("mousemove", (e) => {
    posDisplay.textContent = `Koordinat: X: ${e.offsetX}, Y: ${e.offsetY}`;
    trackArea.style.backgroundColor = `rgba(0, 255, 0, ${e.offsetX / 300})`;
});

// 3. Form Sensor (Batch Data)
const powerForm = document.querySelector("#power-form");
const loadVal = document.querySelector("#load-val");
const formLog = document.querySelector("#form-log");

powerForm.addEventListener("submit", (e) => {
    // PENTING: Mencegah sirkuit refresh
    e.preventDefault();
    
    const val = loadVal.value;
    const entry = document.createElement("div");
    entry.style.color = "#ffff00";
    entry.textContent = `>>> DATA DITERIMA: Beban ${val}kW berhasil dikirim ke Grid Utama.`;
    formLog.prepend(entry);
    
    // Reset input
    loadVal.value = "";
});
