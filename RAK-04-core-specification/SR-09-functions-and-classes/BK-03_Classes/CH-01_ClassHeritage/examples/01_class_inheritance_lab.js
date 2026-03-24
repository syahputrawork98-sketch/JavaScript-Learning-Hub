class Generator {
  produce() {
    return "RAW_ENERGY";
  }
}

class SolarGenerator extends Generator {
  produce() {
    return `${super.produce()}_SOLAR`;
  }
}

const solar = new SolarGenerator();
console.log("=== Class Inheritance Lab ===");
console.log(solar.produce());
