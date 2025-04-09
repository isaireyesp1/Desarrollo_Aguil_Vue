<script>
export default {
  data() {
    return {
      display: '',
      currentValue: 0,
      parenOpen: true,
    };
  },
  methods: {
    agregarNumero(numero) {
      this.display += numero;
    },
    agregarOperacion(operacion) {
      if (this.display.length === 0) return;
      this.display += operacion;
    },
    agregarParentesis() {
      this.display += this.parenOpen ? '(' : ')';
      this.parenOpen = !this.parenOpen;
    },
    calcular() {
      try {
        this.display = eval(this.display.replace(/x/g, '*')).toString();
      } catch (error) {
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

<template>
  <div class="container d-flex justify-content-center mt-4" style="height: 100vh;">
    <div class="card p-3" style="width: 300px;">
      <div class="card-body">
        <h6 class="text-center">Calculadora V2</h6>
        <input type="text" class="form-control text-end mb-3" v-model="display" disabled>
        
        <div class="d-grid gap-2">
          <div class="btn-group">
            <button class="btn btn-warning" @click="borrar">C</button>
            <button class="btn btn-secondary" @click="borrarUno">←</button>
            <button class="btn btn-secondary" @click="agregarParentesis">( )</button>
            <button class="btn btn-danger" @click="agregarOperacion('/')">/</button>
          </div>
          <div class="btn-group">
            <button class="btn btn-light" @click="agregarNumero(7)">7</button>
            <button class="btn btn-light" @click="agregarNumero(8)">8</button>
            <button class="btn btn-light" @click="agregarNumero(9)">9</button>
            <button class="btn btn-danger" @click="agregarOperacion('*')">x</button>
          </div>
          <div class="btn-group">
            <button class="btn btn-light" @click="agregarNumero(4)">4</button>
            <button class="btn btn-light" @click="agregarNumero(5)">5</button>
            <button class="btn btn-light" @click="agregarNumero(6)">6</button>
            <button class="btn btn-danger" @click="agregarOperacion('-')">-</button>
          </div>
          <div class="btn-group">
            <button class="btn btn-light" @click="agregarNumero(1)">1</button>
            <button class="btn btn-light" @click="agregarNumero(2)">2</button>
            <button class="btn btn-light" @click="agregarNumero(3)">3</button>
            <button class="btn btn-danger" @click="agregarOperacion('+')">+</button>
          </div>
          <div class="btn-group">
            <button class="btn btn-light" @click="agregarNumero(0)">0</button>
            <button class="btn btn-light" @click="agregarNumero('.')">.</button>
            <button class="btn btn-success" @click="calcular">=</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.btn {
  width: 25%;
  font-size: 1.2em;
}
</style>
