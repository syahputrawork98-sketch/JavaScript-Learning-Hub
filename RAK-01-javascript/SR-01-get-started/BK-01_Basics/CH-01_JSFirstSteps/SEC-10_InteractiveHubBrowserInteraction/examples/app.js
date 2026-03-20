/**
 * app.js
 * 
 * Logika untuk mengontrol Panel Visual (DOM)
 */

// 1. Memilih Komponen (Selection)
const statusDisplay = document.querySelector("#status-display");
const activateBtn = document.querySelector("#activate-btn");

// 2. Mendengarkan Sinyal (Event Listener)
activateBtn.addEventListener("click", () => {
    console.log("Sinyal Aktivasi Diterima...");
    
    // 3. Mengubah State Visual (Manipulation)
    statusDisplay.textContent = "ONLINE & ENERGIZED";
    statusDisplay.classList.add("active-state");
    
    // Feedback tambahan
    activateBtn.textContent = "HUB IS ACTIVE";
    activateBtn.disabled = true;
    activateBtn.style.opacity = "0.5";
    activateBtn.style.cursor = "not-allowed";
});
