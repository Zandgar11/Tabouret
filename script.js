let donationAmount = 0;

function increaseDonation() {
    donationAmount += 1000;
    document.getElementById("amount").textContent = `$${donationAmount}`;
    
    // Mise à jour de la barre de progression
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = (donationAmount / 10000) * 100;
    progressFill.style.width = `${progressPercentage}%`;
}

function submitGuestbook(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const guestbookMessages = document.getElementById('guestbook-messages');

    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<p><strong>${name}:</strong> ${message}</p>`;
    guestbookMessages.appendChild(newMessage);

    document.getElementById('guestbook-form').reset();
}
