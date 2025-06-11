let days = Number(prompt("Enter the day number from June 1, 2025 (e.g., 1 = June 1):"));

if (!isNaN(days) && days >= 1) {
    // June 1, 2025 is Sunday
    let startDate = new Date("2025-06-01T00:00:00");

    // Subtract 1 to make 1 = June 1, 2 = June 2, ...
    startDate.setDate(startDate.getDate() + (days - 1));

    // Day names
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let result = dayNames[startDate.getDay()];

    document.getElementById("show").innerHTML = `
        <h1>On day ${days}, it will be <span style="color:yellow">${result}</span></h1>
        <h4>Day ${days} means ${days === 1 ? "June 1, 2025" : `${days - 1} day(s) after June 1, 2025`}</h4>
        <p>Based on accurate calendar dates.</p>
    `;
} else {
    document.getElementById("show").innerHTML = `<h2>Please enter a valid number (1 or more).</h2>`;
}
