console.log("=== Function vs Arrow Comparison ===");

const panel = {
  voltage: 220,
  ordinary() {
    console.log("ordinary this.voltage:", this.voltage);
  },
  arrowContainer() {
    const probe = () => console.log("arrow lexical this.voltage:", this.voltage);
    probe();
  },
};

panel.ordinary();
panel.arrowContainer();
