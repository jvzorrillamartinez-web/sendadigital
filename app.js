// Lógica de Regulación Emocional
function suggestAction() {
    const emotion = document.getElementById('emotion-tag').value;
    const box = document.getElementById('action-suggestion');
    
    const actions = {
        rabia: "🔥 TÉCNICA: Hielo. Mójate la cara o sujeta un hielo. La rabia requiere bajar la temperatura biológica.",
        tristeza: "🚶 ACCIÓN OPUESTA: Actívate. Sal a caminar 10 min aunque no quieras. No te encierres.",
        ansiedad: "🌊 SURF DE URGENCIA: No luches contra el craving. Imagina que es una ola; sube y bajará en 15 min. Solo respira."
    };
    
    box.innerText = actions[emotion] || "Selecciona una emoción para ver la técnica específica.";
}

// Contador Evolutivo (Lógica biológica para el doctorado)
function updateEvolution(days) {
    const bio = document.getElementById('bio-progress');
    if (days < 3) bio.innerText = "Fase de Desintoxicación: Tu cuerpo está eliminando toxinas.";
    else if (days < 7) bio.innerText = "Mejora del Sueño: Tus ciclos REM se están estabilizando.";
    else bio.innerText = "Neuroplasticidad: Tu cerebro está creando nuevas vías sin alcohol.";
}

// Guardar Mente Sabia
function saveWiseMind() {
    const emo = document.getElementById('emotion-input').value;
    const log = document.getElementById('logic-input').value;
    const entry = { date: new Date().toISOString(), emotion: emo, logic: log, type: 'WiseMind' };
    
    let history = JSON.parse(localStorage.getItem('senda_history') || '[]');
    history.push(entry);
    localStorage.setItem('senda_history', JSON.stringify(history));
    alert("Equilibrio guardado en tu Mente Sabia.");
}

// Inicialización
updateEvolution(0); // Aquí podrías cargar los días reales