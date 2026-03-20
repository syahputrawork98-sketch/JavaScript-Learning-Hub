/**
 * LAB: Recursion Ref (Nested Sub-Processing)
 * Mental Model: "Nested Sub-Processing"
 */

// 1. Matematika Berantai: Factorial Energy Calculation
function factorialPower(n) {
    // Base Case
    if (n <= 1) return 1;
    
    // Recursive Case
    return n * factorialPower(n - 1);
}

console.log("Factorial Power calculation chain (5!):", factorialPower(5));


// 2. Navigasi Struktur Data (Sub-Grid Scanning)
const energyGrid = {
    name: "Main Grid",
    load: 100,
    subGrids: [
        {
            name: "West Zone",
            load: 200,
            subGrids: [
                { name: "West-Alpha", load: 50, subGrids: [] }
            ]
        },
        {
            name: "East Zone",
            load: 300,
            subGrids: []
        }
    ]
};

function calculateTotalLoad(grid) {
    let total = grid.load;
    
    // Memanggil dirinya sendiri untuk setiap sub-grid
    grid.subGrids.forEach(sub => {
        total += calculateTotalLoad(sub);
    });
    
    return total;
}

console.log("\n--- Total Load Scan across all nesting levels ---");
console.log(`Total System Load: ${calculateTotalLoad(energyGrid)} MW`);
