//INVIO DATI TRAMITE WHATSAPP
document.addEventListener("DOMContentLoaded", function () {
    const inviaButton = document.getElementById("inviaButton");

    inviaButton.addEventListener("click", async function (event) {
        event.preventDefault();

        const soggettoTattoo = document.getElementById("soggettoTattoo").value;
        const parteCorpo = document.getElementById("parteCorpo").value;
        const budget = document.getElementById("budget").value;
        const nomeCliente = document.getElementById("nomeCliente").value;
        const cognomeCliente = document.getElementById("cognomeCliente").value;
        const emailCliente = document.getElementById("emailCliente").value;
        const cellulareCliente = document.getElementById("cellulareCliente").value;


        console.log("Dati registrati:");
        console.log("Soggetto Tattoo:", soggettoTattoo);
        console.log("Parte del Corpo:", parteCorpo);
        console.log("Budget:", budget);
        console.log("Nome:", nomeCliente);
        console.log("Cognome:", cognomeCliente);
        console.log("Email:", emailCliente);
        console.log("Cellulare:", cellulareCliente);

        
        const message = `Nuova richiesta di informazioni sul tatuaggio:
        Soggetto Tattoo: ${soggettoTattoo},
        Parte del Corpo: ${parteCorpo},
        Budget: ${budget},
        Nome: ${nomeCliente},
        Cognome: ${cognomeCliente},
        Email: ${emailCliente},
        Cellulare: ${cellulareCliente}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/3349734343?text=${encodedMessage}`; //INSERIRE NUMERO DI TELEFONO ADEGUATO

        window.open(whatsappLink, '_blank');
    });
});
