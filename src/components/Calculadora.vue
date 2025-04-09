<template>
    <div class="container mt-5">
      <div class="card p-4 shadow">
        <h2 class="text-center mb-3">Calculadora</h2>
  
        <div class="mb-3">
          <label for="num1" class="form-label">Número 1:</label>
          <input type="number" id="num1" v-model="num1" class="form-control">
        </div>
  
        <div class="mb-3">
          <label for="num2" class="form-label">Número 2:</label>
          <input type="number" id="num2" v-model="num2" class="form-control">
        </div>
  
        <div class="d-flex justify-content-between">
         <center> <button center class="btn btn-primary" @click="calcular('+')">+</button></center>

        </div>
  
        <h3 class="text-center mt-4">Resultado: {{ resultado }}</h3>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        num1: null,
        num2: null,
        resultado: ''
      };
    },
    methods: {
      calcular(operacion) {
        const n1 = parseFloat(this.num1);
        const n2 = parseFloat(this.num2);
  
        if (isNaN(n1) || isNaN(n2)) {
          this.resultado = 'Ingrese números válidos';
          return;
        }
  
        switch (operacion) {
          case '+':
            this.resultado = n1 + n2;
            break;
          case '-':
            this.resultado = n1 - n2;
            break;
          case '*':
            this.resultado = n1 * n2;
            break;
          case '/':
            this.resultado = n2 !== 0 ? (n1 / n2).toFixed(2) : 'No se puede dividir por 0';
            break;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    max-width: 400px;
    margin: auto;
    border-radius: 10px;
  }
  button {
    width: 80px;
  }
  </style>
  