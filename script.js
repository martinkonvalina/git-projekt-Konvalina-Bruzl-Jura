// Zpracování odeslání kontaktního formuláře
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Zamezí obnovení stránky

    const name = document.getElementById('name').value;
    
    // Zobrazení jednoduchého potvrzení
    alert('Děkujeme za zprávu, ' + name + '! Formulář byl úspěšně odeslán.');

    // Vyčištění formuláře
    this.reset();
});