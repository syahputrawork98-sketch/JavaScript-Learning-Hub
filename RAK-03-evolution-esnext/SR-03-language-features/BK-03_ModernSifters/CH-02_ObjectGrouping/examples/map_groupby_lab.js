/**
 * LAB: Map Grouping (Categorization with Complex Keys)
 * ES2024: Map.groupBy()
 */

const tickets = [
    { id: 1, priority: "high", effort: 10 },
    { id: 2, priority: "low",  effort: 2 },
    { id: 3, priority: "high", effort: 5 }
];

// Mengelompokkan menggunakan Map (Kunci bisa bertipe apapun)
const categoryMap = Map.groupBy(tickets, (t) => t.priority);

console.log("--- Analisis Tiket via Map (ES2024) ---");
console.log(`Total Kategori: ${categoryMap.size}`);

// Akses langsung menggunakan kunci string
console.log("Tiket Prioritas Tinggi:");
categoryMap.get("high").forEach(t => console.log(` - ID: ${t.id}, Effort: ${t.effort}`));
