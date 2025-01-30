let inventory = ["Focal Radiance", "HD800", "HD600"];
const outputDiv = document.getElementById('output');

function displayMenu() {
    return prompt(`Inventory Manager\n1. View all items\n2. Add a new item\n3. Remove an item\n4. Exit\nChoose an option:`);
}

function viewNewItems() {
    if (inventory.length === 0) {
        outputDiv.innerHTML = "No items in inventory.";
    } else {
        let itemsList = "<h2>Inventory Items:</h2><ol>";
        for (let i = 0; i < inventory.length; i++) {
            itemsList += `<li>${inventory[i]}</li>`;
        }
        itemsList += "</ol>";
        outputDiv.innerHTML = itemsList;
    }
}

function addItem() {
    let newItem = prompt("Enter the name of the new item:");
    if (newItem) {
        inventory.push(newItem);
        alert(`Added "${newItem}" to inventory.`);
        viewNewItems(); // Update the displayed list after adding an item
    } else {
        alert("Invalid input. Item not added.");
    }
}

function removeItem() {
    if (inventory.length === 0) {
        alert("No items to remove.");
        return;
    }

    let itemNumber = prompt("Enter the number of the item to remove:");
    let index = parseInt(itemNumber) - 1;

    if (index >= 0 && index < inventory.length) {
        let removedItem = inventory.splice(index, 1);
        alert(`Removed "${removedItem}" from inventory.`);
        viewNewItems(); // Update the displayed list after removing an item
    } else {
        alert("Invalid item number.");
    }
}

function main() {
    let running = true;
    while (running) {
        let choice = displayMenu();
        switch (choice) {
            case "1":
                viewNewItems();
                break;
            case "2":
                addItem();
                break;
            case "3":
                removeItem();
                break;
            case "4":
                running = false;
                alert("Exiting the program.");
                break;
            default:
                alert("Invalid option. Please try again.");
        }
    }
}

document.getElementById('openMenu').addEventListener('click', main);

// Initial display of items
viewNewItems();