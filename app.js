// Protocolo de Recaída (Muro de Sinceridad)
function triggerRelapse() {
    if(confirm("¿Confirmas que se ha producido un consumo? Esto activará el protocolo de seguridad.")) {
        document.getElementById('lock-screen').classList.remove('hidden');
        localStorage.setItem('aracapp_lock', 'true');
        // Aquí se dispararía la alerta a Qualtrics/Terapeuta
        console.log("Alerta enviada al equipo clínico.");
    }
}

// Comprobación de estado al cargar
window.onload = function() {
    if(localStorage.getItem('aracapp_lock') === 'true') {
        document.getElementById('lock-screen').classList.remove('hidden');
    }
}

// Lógica de Vulnerabilidad (Simulación EMA)
function checkVulnerability() {
    const stress = document.getElementById('stress-range').value;
    const resilience = document.getElementById('resilience-level');
    
    if(stress > 7) {
        resilience.innerText = "RIESGO ALTO";
        resilience.style.color = "red";
        alert("Detectada vulnerabilidad alta. Se recomienda realizar técnica TIPP de respiración.");
    } else {
        resilience.innerText = "Estable";
        resilience.style.color = "green";
        alert("Reporte guardado. Continúa con tu planificación.");
    }
}

function activateTIPP(tipo) {
    alert("Iniciando protocolo TIPP: " + tipo.toUpperCase() + ". Concéntrate en la sensación física.");
}