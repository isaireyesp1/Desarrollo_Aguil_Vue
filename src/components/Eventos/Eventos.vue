<template>
    <div class="container p-5 border rounded shadow-lg bg-white">
        <h2 class=" text-black text-center text-primary mb-4">Eventos en Vue.js</h2>
        
        <!-- Sección de botones -->
        <div class="card mb-4 p-3 shadow-sm">
            <h4 class="text-secondary">Eventos de Clic</h4>
            <p class="text-muted">Interacción con botones para generar alertas.</p>
            <div class="d-flex justify-content-center gap-2">
                <button @click="clic" class="btn btn-danger">Clic</button>
                <button @click="xboton" class="btn btn-warning">Otro Clic</button>
                <button @dblclick="dobleClic" class="btn btn-success">Doble Clic</button>
            </div>
        </div>
        
        <!-- Sección de entrada de texto -->
        <div class="card mb-4 p-3 shadow-sm">
            <h4 class="text-secondary">Eventos de Entrada</h4>
            <p class="text-muted">Ingresa tu nombre y presiona cualquier tecla.</p>
            <div class="form-group text-center">
                <label class="form-label" for="nombre">Nombre:</label>
                <input class="form-control text-center" type="text" id="nombre" @change="nombreE" @keydown="teclaPresionada">
                <p class="mt-2">Nombre ingresado: <strong class="text-primary">{{ nombre }}</strong></p> 
                <p class="text-info">Última tecla presionada: <strong>{{ tecla }}</strong></p>
            </div>
        </div>
        
        <!-- Sección de evento Mouse -->
        <div class="card p-3 shadow-sm text-center">
            <h4 class="text-secondary">Eventos de Mouse</h4>
            <p class="text-muted">Pasa el mouse sobre el cuadro para ver el mensaje.</p>
            <div class="evento-mouse mx-auto d-flex align-items-center justify-content-center"
                 @mouseenter="mostrarMensaje" @mouseleave="ocultarMensaje">
                <p>{{ mensaje || 'Pasa el mouse aquí' }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nombre: '',
            mensaje: '',
            tecla: ''
        }
    },
    methods: {
        clic(){
            alert("No le hubieras dado clic, chaval");
        },
        xboton(){
            alert("Dale clic al otro");
        },
        dobleClic(){
            alert("Doble clic detectado");
        },
        nombreE(event){
            this.nombre = event.target.value;
        },
        teclaPresionada(event){
            this.tecla = event.key;
        },
        mostrarMensaje(){
            this.mensaje = "Hola, bienvenido al evento mouseenter";
        },
        ocultarMensaje(){
            this.mensaje = "Adiós, bienvenido al evento mouseleave";
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 700px;
    background-color: #f8f9fa;
    border-radius: 10px;
}
.card {
    background-color: #ffffff;
    border-radius: 10px;
}
.evento-mouse {
    width: 300px;
    height: 150px;
    background-color: #007bff;
    color: white;
    border-radius: 10px;
    font-weight: bold;
}
</style>
