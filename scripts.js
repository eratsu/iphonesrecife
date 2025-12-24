document.addEventListener('DOMContentLoaded', () => {
    // Contact data
    const contacts = [
        {
            name: "Rayssa",
            pronome: "Consultora",
            phone: "+5581998788602",
            mostrarfone: "(81) 9 9878-8602",
            onClick: "ga('send', 'event', 'Botões', 'Clique', 'Rayssa');",
        },
        {
            name: "Bruno",
            pronome: "Consultor",
            phone: "+5581993539678",
            mostrarfone: "(81) 9 9353-9678",
            onClick: "ga('send', 'event', 'Botões', 'Clique', 'Bruno');",
        },
        {
            name: "Etoo",
            pronome: "Consultor",
            phone: "+5581971201100",
            mostrarfone: "(81) 9 7120-1100",
            onClick: "ga('send', 'event', 'Botões', 'Clique', 'Etoo');",
        }
    ];

    // Fisher-Yates Shuffle
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle and Render
    shuffleArray(contacts);
    const contactContainer = document.getElementById("contacts-container");

    if (contactContainer) {
        contactContainer.innerHTML = "";
        contacts.forEach((contact) => {
            const card = document.createElement("div");
            card.className = "contact-card fade-in";

            const link = document.createElement("a");
            link.href = `https://wa.me/${contact.phone}`;
            link.target = "_blank";
            link.className = "contact-link";
            link.onclick = () => {
                // Safe eval replacement or keeping it if ga is global
                if (typeof ga === 'function') {
                    ga('send', 'event', 'Botões', 'Clique', contact.name);
                }
            };

            link.innerHTML = `
        <div class="icon-box">
             <i class="fa fa-whatsapp"></i>
        </div>
        <div class="info-box">
            <span class="name">${contact.name}</span>
            <span class="phone" style="color: #000;">${contact.mostrarfone}</span>
        </div>
        <div class="action-icon">
            <i class="fa fa-chevron-right"></i>
        </div>
      `;

            card.appendChild(link);
            contactContainer.appendChild(card);
        });
    }
});
