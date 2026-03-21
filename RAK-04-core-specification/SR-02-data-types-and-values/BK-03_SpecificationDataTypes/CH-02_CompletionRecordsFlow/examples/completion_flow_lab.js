/**
 * LAB: Completion Record Flow
 */
const Completion = (type, value) => ({ type, value });
function logic(e) { return e <= 0 ? Completion("throw", "Error") : Completion("normal", e); }
let res = logic(0);
if (res.type === "throw") { console.log("Catching abrupt completion..."); }
