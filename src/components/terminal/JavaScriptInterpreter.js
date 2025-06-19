class JavaScriptInterpreter {
  constructor() {
    this.context = {
      console: {
        log: (...args) => {
          this.output.push(args.map(arg => this.toString(arg)).join(' '));
        },
        error: (...args) => {
          this.output.push(`Error: ${args.map(arg => this.toString(arg)).join(' ')}`);
        },
        warn: (...args) => {
          this.output.push(`Warning: ${args.map(arg => this.toString(arg)).join(' ')}`);
        }
      },
      setTimeout: (fn, delay) => {
        this.output.push(`Timer set for ${delay}ms`);
        return Math.random();
      },
      setInterval: (fn, delay) => {
        this.output.push(`Interval set for ${delay}ms`);
        return Math.random();
      },
      fetch: async (url) => {
        this.output.push(`Fetching: ${url}`);
        return {
          json: () => Promise.resolve({ data: 'simulated response' }),
          text: () => Promise.resolve('simulated text response'),
          ok: true,
          status: 200
        };
      },
      document: {
        createElement: (tag) => {
          this.output.push(`Created element: <${tag}>`);
          return {
            tagName: tag.toUpperCase(),
            innerHTML: '',
            textContent: '',
            appendChild: (child) => {
              this.output.push(`Appended child to ${tag}`);
            },
            addEventListener: (event, handler) => {
              this.output.push(`Added ${event} listener to ${tag}`);
            }
          };
        },
        getElementById: (id) => {
          this.output.push(`Getting element by ID: ${id}`);
          return null;
        },
        querySelector: (selector) => {
          this.output.push(`Querying selector: ${selector}`);
          return null;
        }
      },
      window: {
        alert: (message) => {
          this.output.push(`Alert: ${message}`);
        },
        confirm: (message) => {
          this.output.push(`Confirm: ${message}`);
          return true;
        },
        prompt: (message) => {
          this.output.push(`Prompt: ${message}`);
          return 'user input';
        }
      },
      localStorage: {
        setItem: (key, value) => {
          this.output.push(`localStorage.setItem(${key}, ${value})`);
        },
        getItem: (key) => {
          this.output.push(`localStorage.getItem(${key})`);
          return null;
        }
      },
      JSON: JSON,
      Math: Math,
      Date: Date,
      Array: Array,
      Object: Object,
      String: String,
      Number: Number,
      Boolean: Boolean,
      RegExp: RegExp,
      Promise: Promise,
      Error: Error
    };
    this.output = [];
  }

  execute(code) {
    this.output = [];
    try {
      // Create a function with the context as parameters
      const contextKeys = Object.keys(this.context);
      const contextValues = Object.values(this.context);
      
      // Wrap code to handle different scenarios
      const wrappedCode = `
        "use strict";
        ${code}
      `;
      
      const func = new Function(...contextKeys, wrappedCode);
      const result = func(...contextValues);
      
      // Handle promises
      if (result && typeof result.then === 'function') {
        result.then(value => {
          if (value !== undefined) {
            this.output.push(this.toString(value));
          }
        }).catch(error => {
          this.output.push(`Promise rejected: ${error.message}`);
        });
      } else if (result !== undefined) {
        // Only show result if it's not undefined and no console.log was called
        if (this.output.length === 0) {
          this.output.push(this.toString(result));
        }
      }
      
      return { output: this.output, error: null };
    } catch (error) {
      return { output: this.output, error: error.message };
    }
  }

  toString(obj) {
    if (obj === null) return 'null';
    if (obj === undefined) return 'undefined';
    if (typeof obj === 'string') return obj;
    if (typeof obj === 'function') return '[Function]';
    if (obj instanceof Date) return obj.toISOString();
    if (obj instanceof Error) return obj.message;
    if (Array.isArray(obj)) {
      return `[${obj.map(item => this.toString(item)).join(', ')}]`;
    }
    if (typeof obj === 'object') {
      try {
        return JSON.stringify(obj, null, 2);
      } catch {
        return '[Object]';
      }
    }
    return String(obj);
  }
}

export default JavaScriptInterpreter;