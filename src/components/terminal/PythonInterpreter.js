class PythonInterpreter {
  constructor() {
    this.variables = {};
    this.functions = {};
    this.classes = {};
    this.imports = {};
    this.output = [];
    this.setupBuiltins();
  }

  setupBuiltins() {
    // Built-in functions
    this.builtins = {
      print: (...args) => {
        const output = args.map(arg => this.toString(arg)).join(' ');
        this.output.push(output);
      },
      len: (obj) => {
        if (Array.isArray(obj) || typeof obj === 'string') return obj.length;
        if (typeof obj === 'object' && obj !== null) return Object.keys(obj).length;
        throw new Error('object has no len()');
      },
      range: (start, stop, step = 1) => {
        if (stop === undefined) { stop = start; start = 0; }
        const result = [];
        for (let i = start; i < stop; i += step) {
          result.push(i);
        }
        return result;
      },
      type: (obj) => {
        if (Array.isArray(obj)) return 'list';
        if (obj === null) return 'NoneType';
        return typeof obj;
      },
      str: (obj) => this.toString(obj),
      int: (obj) => parseInt(obj),
      float: (obj) => parseFloat(obj),
      bool: (obj) => Boolean(obj),
      list: (obj) => Array.isArray(obj) ? obj : Array.from(obj || []),
      dict: (obj) => obj || {},
      sum: (arr) => arr.reduce((a, b) => a + b, 0),
      max: (arr) => Math.max(...arr),
      min: (arr) => Math.min(...arr),
      abs: (x) => Math.abs(x),
      round: (x, digits = 0) => Math.round(x * Math.pow(10, digits)) / Math.pow(10, digits)
    };

    // Built-in modules
    this.modules = {
      math: {
        pi: Math.PI,
        e: Math.E,
        sqrt: Math.sqrt,
        pow: Math.pow,
        sin: Math.sin,
        cos: Math.cos,
        tan: Math.tan,
        floor: Math.floor,
        ceil: Math.ceil,
        log: Math.log,
        exp: Math.exp
      },
      random: {
        random: Math.random,
        randint: (a, b) => Math.floor(Math.random() * (b - a + 1)) + a,
        choice: (arr) => arr[Math.floor(Math.random() * arr.length)],
        shuffle: (arr) => {
          for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
          return arr;
        }
      },
      datetime: {
        datetime: {
          now: () => new Date(),
          today: () => new Date().toDateString()
        }
      }
    };
  }

  execute(code) {
    this.output = [];
    try {
      const lines = code.split('\n').filter(line => line.trim());
      for (const line of lines) {
        this.executeLine(line.trim());
      }
      return { output: this.output, error: null };
    } catch (error) {
      return { output: this.output, error: error.message };
    }
  }

  executeLine(line) {
    if (!line || line.startsWith('#')) return;

    // Import statements
    if (line.startsWith('import ')) {
      this.handleImport(line);
      return;
    }

    // Function definitions
    if (line.startsWith('def ')) {
      this.handleFunctionDef(line);
      return;
    }

    // Class definitions
    if (line.startsWith('class ')) {
      this.handleClassDef(line);
      return;
    }

    // Variable assignments
    if (line.includes('=') && !line.includes('==') && !line.includes('!=') && !line.includes('<=') && !line.includes('>=')) {
      this.handleAssignment(line);
      return;
    }

    // Control structures
    if (line.startsWith('if ') || line.startsWith('for ') || line.startsWith('while ')) {
      this.handleControlStructure(line);
      return;
    }

    // Expression evaluation
    this.evaluateExpression(line);
  }

  handleImport(line) {
    const match = line.match(/import\s+(\w+)/);
    if (match) {
      const moduleName = match[1];
      if (this.modules[moduleName]) {
        this.imports[moduleName] = this.modules[moduleName];
      }
    }
  }

  handleFunctionDef(line) {
    // Simplified function definition
    const match = line.match(/def\s+(\w+)\s*\((.*?)\):\s*(.*)/);
    if (match) {
      const [, name, params, body] = match;
      this.functions[name] = {
        params: params.split(',').map(p => p.trim()).filter(p => p),
        body: body
      };
    }
  }

  handleClassDef(line) {
    // Simplified class definition
    const match = line.match(/class\s+(\w+)(?:\((.*?)\))?:/);
    if (match) {
      const [, name, parent] = match;
      this.classes[name] = { parent, methods: {}, attributes: {} };
    }
  }

  handleAssignment(line) {
    const [left, right] = line.split('=').map(s => s.trim());
    const value = this.evaluateExpression(right);
    
    // Handle multiple assignment
    if (left.includes(',')) {
      const vars = left.split(',').map(v => v.trim());
      if (Array.isArray(value)) {
        vars.forEach((varName, index) => {
          this.variables[varName] = value[index];
        });
      }
    } else {
      this.variables[left] = value;
    }
  }

  handleControlStructure(line) {
    // Simplified control structure handling
    if (line.startsWith('for ')) {
      const match = line.match(/for\s+(\w+)\s+in\s+(.+?):\s*(.*)/);
      if (match) {
        const [, varName, iterable, body] = match;
        const items = this.evaluateExpression(iterable);
        if (Array.isArray(items)) {
          items.forEach(item => {
            this.variables[varName] = item;
            this.evaluateExpression(body);
          });
        }
      }
    } else if (line.startsWith('if ')) {
      const match = line.match(/if\s+(.+?):\s*(.*)/);
      if (match) {
        const [, condition, body] = match;
        if (this.evaluateExpression(condition)) {
          this.evaluateExpression(body);
        }
      }
    }
  }

  evaluateExpression(expr) {
    if (!expr) return;

    // Handle string literals
    if ((expr.startsWith('"') && expr.endsWith('"')) || 
        (expr.startsWith("'") && expr.endsWith("'"))) {
      return expr.slice(1, -1);
    }

    // Handle numbers
    if (/^-?\d+(\.\d+)?$/.test(expr)) {
      return expr.includes('.') ? parseFloat(expr) : parseInt(expr);
    }

    // Handle booleans
    if (expr === 'True') return true;
    if (expr === 'False') return false;
    if (expr === 'None') return null;

    // Handle lists
    if (expr.startsWith('[') && expr.endsWith(']')) {
      const content = expr.slice(1, -1);
      if (!content.trim()) return [];
      return content.split(',').map(item => this.evaluateExpression(item.trim()));
    }

    // Handle dictionaries
    if (expr.startsWith('{') && expr.endsWith('}')) {
      const content = expr.slice(1, -1);
      if (!content.trim()) return {};
      const obj = {};
      content.split(',').forEach(pair => {
        const [key, value] = pair.split(':').map(s => s.trim());
        obj[this.evaluateExpression(key)] = this.evaluateExpression(value);
      });
      return obj;
    }

    // Handle function calls
    if (expr.includes('(') && expr.includes(')')) {
      const match = expr.match(/(\w+(?:\.\w+)*)\s*\((.*?)\)/);
      if (match) {
        const [, funcName, argsStr] = match;
        const args = argsStr ? argsStr.split(',').map(arg => this.evaluateExpression(arg.trim())) : [];
        
        // Built-in functions
        if (this.builtins[funcName]) {
          return this.builtins[funcName](...args);
        }
        
        // Module functions
        if (funcName.includes('.')) {
          const [moduleName, methodName] = funcName.split('.');
          if (this.imports[moduleName] && this.imports[moduleName][methodName]) {
            return this.imports[moduleName][methodName](...args);
          }
        }
        
        // User-defined functions
        if (this.functions[funcName]) {
          const func = this.functions[funcName];
          const oldVars = { ...this.variables };
          func.params.forEach((param, index) => {
            this.variables[param] = args[index];
          });
          const result = this.evaluateExpression(func.body);
          this.variables = oldVars;
          return result;
        }
      }
    }

    // Handle list comprehensions (simplified)
    if (expr.includes(' for ') && expr.includes(' in ')) {
      const match = expr.match(/\[(.*?)\s+for\s+(\w+)\s+in\s+(.*?)\]/);
      if (match) {
        const [, expression, varName, iterable] = match;
        const items = this.evaluateExpression(iterable);
        if (Array.isArray(items)) {
          return items.map(item => {
            const oldVar = this.variables[varName];
            this.variables[varName] = item;
            const result = this.evaluateExpression(expression);
            if (oldVar !== undefined) {
              this.variables[varName] = oldVar;
            } else {
              delete this.variables[varName];
            }
            return result;
          });
        }
      }
    }

    // Handle variables
    if (/^\w+$/.test(expr) && this.variables.hasOwnProperty(expr)) {
      return this.variables[expr];
    }

    // Handle arithmetic operations
    try {
      // Replace Python operators with JavaScript equivalents
      let jsExpr = expr
        .replace(/\*\*/g, '**')  // Power operator
        .replace(/\/\//g, 'Math.floor(')  // Integer division
        .replace(/\band\b/g, '&&')
        .replace(/\bor\b/g, '||')
        .replace(/\bnot\b/g, '!');

      // Replace variables in expression
      Object.keys(this.variables).forEach(varName => {
        const regex = new RegExp(`\\b${varName}\\b`, 'g');
        jsExpr = jsExpr.replace(regex, JSON.stringify(this.variables[varName]));
      });

      // Handle integer division
      if (jsExpr.includes('Math.floor(')) {
        jsExpr = jsExpr.replace(/Math\.floor\((.*?)\)/g, (match, content) => {
          return `Math.floor(${content})`;
        });
      }

      return eval(jsExpr);
    } catch (error) {
      throw new Error(`Invalid expression: ${expr}`);
    }
  }

  toString(obj) {
    if (obj === null) return 'None';
    if (obj === true) return 'True';
    if (obj === false) return 'False';
    if (Array.isArray(obj)) return `[${obj.map(item => this.toString(item)).join(', ')}]`;
    if (typeof obj === 'object') {
      const pairs = Object.entries(obj).map(([k, v]) => `${this.toString(k)}: ${this.toString(v)}`);
      return `{${pairs.join(', ')}}`;
    }
    if (typeof obj === 'string') return obj;
    return String(obj);
  }
}

export default PythonInterpreter;