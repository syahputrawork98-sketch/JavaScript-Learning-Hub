/**
 * PILLAR 1: Reference Resolution (GetBase)
 * Simulasi komponen [[Base]] dan [[ReferencedName]] dalam Reference Record.
 */

const Environment = {
    records: { "x": 100 },
    hasBinding(name) { return name in this.records; }
};

const createReference = (base, name) => ({
    "[[Base]]": base,
    "[[ReferencedName]]": name,
    "[[Strict]]": true
});

const refX = createReference(Environment, "x");
const refY = createReference(Environment, "y");

function getValue(ref) {
    if (ref["[[Base]]"] === undefined) throw new ReferenceError(`${ref["[[ReferencedName]]"]} is not defined`);
    if (!ref["[[Base]]"].hasBinding(ref["[[ReferencedName]]"])) {
        return undefined; // In real engine, this might walk the parent environment
    }
    return ref["[[Base]]"].records[ref["[[ReferencedName]]"]];
}

console.log(`Resolve X: ${getValue(refX)}`);
console.log(`Resolve Y: ${getValue(refY)}`);
