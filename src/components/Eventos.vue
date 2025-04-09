<template>
    <div class="container">
        <div class="row mt-4">
            <div>
                <h4>Evento Click</h4>
                <button @click="Clic" class="btn btn-danger" >Dale clic</button>
                <button @click="SoyBoton" class="btn btn-warning mx-2" >Dale clic 2</button>
            </div>
            <div>
                <h4>Evento Change</h4>
                <label class="input-group-text" for="">Ingresa tu nombre</label>
                <input class="form-control mt-2" type="text" id="nombre" @change="nombreE">
                <strong>El nombre ingresado es: {{ nombre }}</strong>
            </div>
            
            <div>
                <h4>Evento de mause</h4>
                <div style="width: 200px; height: 200px; background-color: darkseagreen;text-align: center; padding: 15px; border-radius: 15px;" 
                 @mouseenter="MostrarMensaje" @mouseleave="OcultarMensaje">
                  <p class="text-center">Desliza el mause</p>
                   <p>{{ mensaje }}</p>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nombre: "",
            mensaje: ""
        }
    },
    methods: {
        Clic() {
            alert("Gracias por darle clic")
        },
        SoyBoton() {
            alert("Soy un boton")
        },
        nombreE(event){
            this.nombre = event.target.value
        },
        MostrarMensaje() {
            this.mensaje = "El mause entro del cuadrado"
        },
        OcultarMensaje() {
            this.mensaje = "El mause esta afuera del cuadrado"
        }
    },
    
}
</script>
<style>
    
</style>