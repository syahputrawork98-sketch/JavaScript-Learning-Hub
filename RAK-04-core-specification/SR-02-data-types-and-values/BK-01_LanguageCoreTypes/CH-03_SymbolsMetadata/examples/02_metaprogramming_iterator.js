/**
 * PILLAR 2: Well-Known Symbols (Meta-Programming)
 * Mengontrol perilaku internal Hub via Symbol.iterator.
 */

const sequence = {
    start: 1,
    end: 5,
    [Symbol.iterator]() {
        let current = this.start;
        return {
            next: () => {
                if (current <= this.end) {
                    return { value: current++, done: false };
                }
                return { done: true };
            }
        };
    }
};

console.log("--- Custom Iteration ---");
for (const num of sequence) {
    console.log(`Step: ${num}`);
}
