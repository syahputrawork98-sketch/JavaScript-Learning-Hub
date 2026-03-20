const fs = require('fs');
const path = require('path');

function checkStandards(basePath) {
    const standardsPath = path.join(basePath, 'docs', 'standards');
    const requiredFiles = [
        'architecture.md', 'conventions.md', 'workflow.md', 
        'status-protocol.md', 'contribution.md', 'core-contribution.md',
        'advanced-rack-standard.md'
    ];
    const errors = [];
    if (!fs.existsSync(standardsPath)) return ["Docs standards directory missing"];
    
    requiredFiles.forEach(f => {
        if (!fs.existsSync(path.join(standardsPath, f))) {
            errors.push(`Missing standard file: ${f}`);
        }
    });
    return errors;
}

function auditAdvancedREADME(filePath, errors) {
    const content = fs.readFileSync(filePath, 'utf8');
    const requirements = [
        { name: "Source/Clause Anchor", pattern: /Source:|Clause/i },
        { name: "Logic-Pure Definition", pattern: /Logic-Pure/i },
        { name: "Analogy-Model", pattern: /Analogy-Model/i },
        { name: "Internal Mechanics/Algorithm", pattern: /Mekanisme Internal|Algoritma|Steps/i },
        { name: "State/Architecture Mapping", pattern: /State & Architecture Mapping|Internal Slots|Slot/i },
        { name: "Deep-Visual (Mermaid)", pattern: /```mermaid/i },
        { name: "Experimental Lab Link", pattern: /Lab Praktis|examples\/|Experimental Lab/i },
        { name: "Cross-Rack Linking", pattern: /Hubungan Sistem|Cross-Rack|RAK-/i }
    ];

    requirements.forEach(req => {
        if (!req.pattern.test(content)) {
            errors.push(`[ADVANCED-ERROR] Missing ${req.name} in ${filePath}`);
        }
    });
}

function auditStructure(basePath) {
    const errors = [];
    function walk(dir) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                if (file.startsWith('.') || file === 'node_modules' || file === 'scripts' || file === 'assets' || file === 'examples') return;
                
                if (file.startsWith('RAK-') || file.startsWith('SR-') || file.startsWith('BK-') || file.startsWith('CH-')) {
                    const readmePath = path.join(fullPath, 'README.md');
                    if (!fs.existsSync(readmePath)) {
                        errors.push(`Missing README.md in ${fullPath}`);
                    } else {
                        /**
                         * Advanced Rack Audit (RAK-02 to RAK-05)
                         * RAK-01 is Foundation (MDN-style), RAK-02+ are Spec/Architect style.
                         */
                        const rakMatch = fullPath.match(/RAK-(\d+)/);
                        if (rakMatch) {
                            const rakNum = parseInt(rakMatch[1]);
                            if (rakNum >= 2 && rakNum <= 5 && file.startsWith('CH-')) {
                                auditAdvancedREADME(readmePath, errors);
                            }
                        }
                    }
                    
                    if (file.startsWith('CH-')) {
                        if (!fs.existsSync(path.join(fullPath, 'assets'))) {
                            errors.push(`Missing 'assets/' folder in ${fullPath}`);
                        }
                        const examplesPath = path.join(fullPath, 'examples');
                        if (!fs.existsSync(examplesPath)) {
                            errors.push(`Missing 'examples/' folder in ${fullPath}`);
                        } else {
                            const exampleFiles = fs.readdirSync(examplesPath);
                            if (exampleFiles.length === 0) {
                                errors.push(`Empty 'examples/' folder in ${fullPath}`);
                            }
                        }
                    }
                }
                walk(fullPath);
            }
        });
    }
    walk(basePath);
    return errors;
}

function main() {
    const basePath = path.dirname(__dirname);
    console.log(`--- Sentinel Audit (5-Rack Universe Edition) ---`);
    console.log(`Auditing: ${basePath}\n`);
    
    const errors = [...checkStandards(basePath), ...auditStructure(basePath)];
    
    if (errors.length === 0) {
        console.log("[PASS] Everything is perfectly standardized to 5-Rack Gold Standard! 🏆");
    } else {
        console.log(`[FAIL] Found ${errors.length} inconsistencies:`);
        errors.forEach(err => console.log(` - ${err}`));
        process.exit(1);
    }
}

main();
