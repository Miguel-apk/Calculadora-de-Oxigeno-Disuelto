function calculateDO() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const volume = parseFloat(document.getElementById("volume").value);
    const salinity = parseFloat(document.getElementById("salinity").value);
    
    if (isNaN(temperature) || isNaN(volume) || isNaN(salinity)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }
    
    // Valores aproximados de saturación de oxígeno disuelto en mg/L para agua dulce a 0°C
    let baseDO = 14.6; // Saturación en mg/L para agua dulce a 0°C
    
    // Ajustar la saturación según la temperatura (asumiendo una caída lineal)
    const temperatureDrop = (temperature / 30) * 6.0; // Ajuste lineal para simplificar
    let saturationDO = baseDO - temperatureDrop;
    
    // Ajustar por salinidad (aproximación simple)
    saturationDO -= salinity * 0.2; // Ajuste simple para salinidad
    
    // Calcular porcentaje de saturación
    const percentageDO = (saturationDO / baseDO) * 100;
    
    // Mostrar resultados
    document.getElementById("doResult").textContent = `Oxígeno Disuelto: ${saturationDO.toFixed(2)} mg/L`;
    document.getElementById("percentageResult").textContent = `Porcentaje de Saturación: ${percentageDO.toFixed(2)}%`;
}

function showRanges() {
    const rangeResult = document.getElementById("rangeResult");
    
    rangeResult.innerHTML = `
        <strong>Rangos de Niveles de Oxígeno Disuelto:</strong><br>
        <ul>
            <li><strong>Muy alto oxígeno disuelto (superior a 8 mg/L):</strong> Indica agua de muy buena calidad. Favorable para la vida acuática, incluyendo peces, invertebrados y otros organismos. Generalmente se encuentra en agua fría y bien mezclada.</li>
            <li><strong>Alto oxígeno disuelto (6-8 mg/L):</strong> También representa agua de buena calidad. Adecuado para la mayoría de los peces y vida acuática. Puede encontrarse en ríos y lagos con buena circulación de agua.</li>
            <li><strong>Moderado oxígeno disuelto (4-6 mg/L):</strong> Aceptable para muchos organismos acuáticos, aunque algunos pueden estar estresados. Puede indicar cierta contaminación o eutrofización.</li>
            <li><strong>Bajo oxígeno disuelto (2-4 mg/L):</strong> Potencialmente estresante para muchos organismos acuáticos, especialmente para los peces más sensibles. Indica posibles problemas de contaminación o excesiva materia orgánica en descomposición.</li>
            <li><strong>Muy bajo oxígeno disuelto (menos de 2 mg/L):</strong> Muy estresante y potencialmente letal para muchos organismos acuáticos. Indicativo de condiciones severas de contaminación, como aguas estancadas o altamente contaminadas.</li>
        </ul>
    `;
}
function resetFields() {
    document.getElementById("temperature").value = "";
    document.getElementById("volume").value = "";
    document.getElementById("salinity").value = "";
    document.getElementById("doResult").textContent = "Oxígeno Disuelto: ";
    document.getElementById("percentageResult").textContent = "Porcentaje de Saturación: ";
    document.getElementById("rangeResult").textContent = "";
}
