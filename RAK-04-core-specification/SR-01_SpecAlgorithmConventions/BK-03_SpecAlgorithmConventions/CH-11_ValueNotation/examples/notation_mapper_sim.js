/**
 * SIMULASI: Value Notation (Clause 5.2.7)
 * 
 * Spec menggunakan konvensi penulisan yang berbeda untuk tiap jenis nilai.
 */

const SpecNotationMapper = {
  // Spec: ~name~ (Constants/Enum)
  constants: {
    UNDEFINED: "~undefined~",
    NULL: "~null~",
    EMPTY: "~empty~"
  },

  // Spec: [[name]] (Internal Fields)
  internalSlots: {
    VALUE: "[[Value]]",
    PROTOTYPE: "[[Prototype]]"
  },

  // Spec: *name* (Keywords)
  keywords: {
    TRUE: "*true*",
    FALSE: "*false*"
  }
};

function displaySpecLogic(action, valueType) {
  console.log(`Action: ${action}`);
  
  if (valueType === "empty") {
    console.log(`-> Spec says: "Return ${SpecNotationMapper.constants.EMPTY}."`);
  } else if (valueType === "proto") {
    console.log(`-> Spec says: "Set O.${SpecNotationMapper.internalSlots.PROTOTYPE} to V."`);
  }
}

// Demo
displaySpecLogic("Inisialisasi", "empty");
displaySpecLogic("Inheritance", "proto");
