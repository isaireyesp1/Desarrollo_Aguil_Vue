<script>
export default{
    data(){
        return {
        display: '',
        currentValue:0,
        }
    },
    methods:{
        agregarNumero(numero){
            this.display += numero;
        },
        suma(){
            try{
            this.currentValue = eval(this.display);
            this.display = this.currentValue.toString();
            }catch(error){
                this.display = 'Error';
            }
        },
        Borrar(){
            this.display = '';
        },
        Borraruno(){
            this.display = this.display.slice(0, -1);
        }

    }
}
</script>
<template>
<div class="container d-flex justify-content-center mt-4" style="height: 100vh;">
<div class="card p-3" style="width: 300px;">
<div class="card-body">
    <h6 class="text-center">Calculadora V2</h6>
    <div class="mb-3">
        <input type="text" class="form-control" v-model="display" disabled>
    </div>

    <div class="d-flex justify-content-between">
        <button class="btn btn-secondary" @click="suma">=</button>
        <button class="btn btn-secondary" @click="agregarNumero('%')">%</button>
        <button class="btn btn-secondary" @click="parentesis">()</button>
        <button class="btn btn-danger" @click="Borraruno"><=</button>
    </div>
<br>
    <div class="d-flex justify-content-between">
        <button class="btn btn-secondary" @click="agregarNumero(1)">1</button>
        <button class="btn btn-secondary" @click="agregarNumero(2)">2</button>
        <button class="btn btn-secondary" @click="agregarNumero(3)">3</button>
        <button class="btn btn-danger" @click="agregarNumero('+')">+</button>
    </div>
<br>
    <div class="d-flex justify-content-between">
        <button class="btn btn-secondary" @click="agregarNumero(4)">4</button>
        <button class="btn btn-secondary" @click="agregarNumero(5)">5</button>
        <button class="btn btn-secondary" @click="agregarNumero(6)">6</button>
        <button class="btn btn-danger" @click="agregarNumero('-')">-</button>
    </div>
    <br>
    <div class="d-flex justify-content-between">
        <button class="btn btn-secondary" @click="agregarNumero(7)">7</button>
        <button class="btn btn-secondary" @click="agregarNumero(8)">8</button>
        <button class="btn btn-secondary" @click="agregarNumero(9)">9</button>
        <button class="btn btn-danger" @click="agregarNumero('x')">x</button>
    </div>
    <br>
    <div class="d-flex justify-content-between">
        <button class="btn btn-secondary" @click="agregarNumero('.')">.</button>
        <button class="btn btn-secondary" @click="agregarNumero(0)">0</button>
        <button class="btn btn-secondary" @click="Borrar">C</button>
        <button class="btn btn-danger" @click="agregarNumero('/')">/</button>
    </div>
    

</div>
</div>
</div>
</template>

<style>
</style>