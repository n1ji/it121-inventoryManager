let inventory = [
    {
        brand: "Focal",
        model: "Radiance",
        dateAdded: "04/09/2024",
        desire: "high",
        isOpenBack: false
    },
    {
        brand: "Meze",
        model: "109 Pro",
        dateAdded: "05/05/2025",
        desire: "high",
        isOpenBack: true
    },
    {
        brand: "Sennheiser",
        model: "HD600",
        dateAdded: "12/20/2023",
        desire: "low",
        isOpenBack: true
    }
];

const outputDiv = document.getElementById('output');

function displayMenu() {
    return prompt(`Inventory Manager\n1. View all headphones\n2. Add a new headphone\n3. Remove a headphone\n4. Exit\nChoose an option:`);
}

// Update the displayed list after adding a headphone
function viewInventory() {
    if (inventory.length === 0) {
        outputDiv.innerHTML = "<h2>No headphones in inventory.</h2>";
    } else {
        let itemsList = "<h2>Inventory Headphones:</h2><ol>";
        for (let i = 0; i < inventory.length; i++) {
            itemsList += `<li>${inventory[i].brand} ${inventory[i].model} - Date Obtained: ${inventory[i].dateAdded} - Desire: ${inventory[i].desire} - Open-Back: ${inventory[i].isOpenBack ? "Yes" : "No"}</li>`;
        }
        itemsList += "</ol>";
        outputDiv.innerHTML = itemsList;
    }
}

function addHeadphone() {
    let brand = prompt("Enter the brand of the new headphone:");
    if (!brand) {
        alert("You must enter a brand.");
        return;
    }

    let model = prompt("Enter the model of the new headphone:");
    if (!model) {
        alert("You must enter a model.");
        return;
    }

    let desire = prompt("Enter your desire level for these headhpones (high, medium, low):")
    if (!["high", "medium", "low"].includes(desire)) {
        alert("Invalid priority. Please enter high, medium, or low.");
        return;
    }
    
    let dateAdded = prompt("Enter the date obtained \n(MM/DD/YYYY):")
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateAdded)) {
        alert("Invalid date format. Please use MM/DD/YYYY.");
        return;
    }

    let isOpenBack = confirm("Is the headphone open-back? (OK for Yes, Cancel for No)");

    inventory.push({brand, model, desire, dateAdded, isOpenBack});
    alert(`Added "${brand}, ${model}" to your inventory.`)
}

function removeHeadphone() {
    if (inventory.length === 0) {
        alert("No headphones to remove.");
        return;
    }

    let headphoneNumber = prompt("Enter the number of the headphone to remove:");
    let index = parseInt(headphoneNumber) - 1;

    if (index >= 0 && index < inventory.length) {
        let removedHeadphone = inventory.splice(index, 1);
        alert(`Removed "${removedHeadphone[0].brand} ${removedHeadphone[0].model}" from inventory.`);
        viewInventory();
    } else {
        alert("Invalid headphone number.");
    }
}

function main() {
    let running = true;
    while (running) {
        let choice = displayMenu();
        switch (choice) {
            case "1":
                viewInventory();
                running = false;
                break;
            case "2":
                addHeadphone();
                break;
            case "3":
                removeHeadphone();
                break;
            case "4":
                running = false;
                break;
            default:
                alert("Invalid option. Please try again.");
        }
    }
}

document.getElementById('openMenu').addEventListener('click', main);

// Initial display of inventory
viewInventory();