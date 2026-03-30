// Lógica TIPP simplificada
function showTipp(type) {
    if (type === 'water') {
        alert("PASO 1: Ve al lavabo.\nPASO 2: Lánzate agua muy fría en la cara 30 segundos.\nPASO 3: Siente cómo bajan tus pulsaciones.");
    } else if (type === 'muscle') {
        alert("PASO 1: Aprieta puños y hombros 5 segundos.\nPASO 2: Suelta de golpe.\nPASO 3: Repite hasta notar el relax.");
    }
}

// Guardar datos localmente (Privacidad)
function saveLog() {
    const level = document.getElementById('craving-slider').value;
    const entry = {
        timestamp: new Date().toISOString(),
        craving: level
    };
    let history = JSON.parse(localStorage.getItem('senda_logs') || '[]');
    history.push(entry);
    localStorage.setItem('senda_logs', JSON.stringify(history));
    alert("Nivel " + level + " guardado. ¡Bien hecho!");
}

// Generar archivo para el investigador
function exportData() {
    const data = localStorage.getItem('senda_logs');
    if(!data) return alert("No hay datos para exportar aún.");
    const blob = new Blob([data], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'datos_sendadigital.json';
    a.click();
}

// Registro para ser App de Android (PWA)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}