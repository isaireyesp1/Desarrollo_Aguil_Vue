<template>
    <div class="container-fluid calculator-wrapper d-flex justify-content-center align-items-center">
      <div class="calculator bg-white rounded shadow p-4 w-100 d-flex flex-column justify-content-between" style="max-width: 400px; height: 100%;">
        <input
          type="text"
          class="form-control text-end mb-4 display"
          v-model="display"
          disabled
        />
        <div class="grid">
          <button @click="borrar" class="btn btn-danger">C</button>
          <button @click="borrarUno" class="btn btn-secondary">←</button>
          <button @click="agregarParentesis" class="btn btn-secondary">( )</button>
          <button @click="agregarOperacion('/')" class="btn btn-warning">÷</button>
  
          <button v-for="n in [7,8,9]" :key="n" @click="agregarNumero(n)" class="btn btn-light">{{ n }}</button>
          <button @click="agregarOperacion('*')" class="btn btn-warning">×</button>
  
          <button v-for="n in [4,5,6]" :key="n" @click="agregarNumero(n)" class="btn btn-light">{{ n }}</button>
          <button @click="agregarOperacion('-')" class="btn btn-warning">−</button>
  
          <button v-for="n in [1,2,3]" :key="n" @click="agregarNumero(n)" class="btn btn-light">{{ n }}</button>
          <button @click="agregarOperacion('+')" class="btn btn-warning">+</button>
  
          <button @click="agregarNumero(0)" class="btn btn-light col-span-2">0</button>
          <button @click="agregarNumero('.')" class="btn btn-light">.</button>
          <button @click="calcular" class="btn btn-success">=</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        display: '',
        parenOpen: true,
      };
    },
    methods: {
      agregarNumero(n) {
        this.display += n;
      },
      agregarOperacion(op) {
        if (this.display.length && !/[+\-*/.]$/.test(this.display)) {
          this.display += op;
        }
      },
      agregarParentesis() {
        this.display += this.parenOpen ? '(' : ')';
        this.parenOpen = !this.parenOpen;
      },
      calcular() {
        try {
          this.display = eval(this.display).toString();
        } catch {
          this.display = 'Error';
        }
      },
      borrar() {
        this.display = '';
      },
      borrarUno() {
        this.display = this.display.slice(0, -1);
      }
    }
  };
  </script>
  
  <style scoped>
  html, body, .calculator-wrapper {
    height: 100vh;
    margin: 0;
    background-color: #f2f2f2;
  }
  
  .calculator {
    height: 100%;
    max-height: 700px;
  }
  
  .display {
    font-size: 2.5rem;
    height: 70px;
    border-radius: 8px;
    background-color: #f8f9fa;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    flex-grow: 1;
  }
  
  button {
    height: 60px;
    font-size: 1.5rem;
    border-radius: 10px;
    width: 100%;
  }
  
  .col-span-2 {
    grid-column: span 2;
  }
  </style>