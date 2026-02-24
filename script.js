// Starter JS
// Steps for students to implement:
function calculateEmissions() { //
// 1. Get user inputs 
    const name = document.getElementById('userName').value;
    const distance = document.getElementById('distance').value;
    const transport = document.getElementById('transport').value;
    const outputDiv = document.getElementById('output');

    // Проверка: если поля пустые, выводим предупреждение
    if (name === "" || distance === "") {
        outputDiv.innerHTML = "Please fill in all fields!";
        outputDiv.style.color = "red"; // Красный для ошибки
        return;
    }

    // 2. Perform calculations (Выполняем расчеты)
    let factor = 0;
    if (transport === "petrol") {
        factor = 192; // грамм на км
    } else if (transport === "electric") {
        factor = 53;
    } else {
        factor = 105; // автобус
    }

    let totalKg = (distance * factor) / 1000;

    // 3. Use if/else to classify results (Классифицируем результат)
    let message = "";
    if (totalKg < 2) {
        message = "Low impact! You are an Eco-Hero! 🌱";
    } else if (totalKg >= 2 && totalKg <= 10) {
        message = "Average impact. Good job! 👍";
    } else {
        message = "You are a mistake of nature ⚠️";
    }

    // 4. Display results in #output (Выводим результат в наш div)
    outputDiv.style.color = "green"; // Возвращаем зеленый цвет, как ты просил
    outputDiv.innerHTML = `
        <h3>Results for ${name}:</h3>
        <p>Your trip produced <strong>${totalKg.toFixed(2)} kg</strong> of CO2.</p>
        <p>${message}</p>
    `;
}
