// Sample links data
const links = [
    {
        title: "RESUME",
        url: "https://drive.google.com/file/d/133fpeTVczQ95v4tltleM8C9C6lk8G9-M/view",
        description: "View my resume"
    },
    {
        title: "RTU Notes for B.Tech (CSE/IT/AI&DS/CyS/IoT)",
        url: "https://rtunotes.in",
        description: "Get all your notes in the form of PDFs"
    },
    {
        title: "GitHub",
        url: "https://github.com/techieyuvraj",
        description: "My projects and code repositories"
    },
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/yuvraj-pratap-singh-802773256",
        description: "Connect with me professionally"
    },
    {
        title: "Instagram Personal",
        url: "https://instagram.com/tech_soul_boy",
        description: "Follow me for personal updates"
    },
    {
        title: "Instagram Tech",
        url: "https://www.instagram.com/_techie_solutions_",
        description: "Follow me for Tech Updates"
    },
    {
        title: "Instagram (Cyber Guardians)",
        url: "https://www.instagram.com/_cyber.guardians_",
        description: "Follow me for Cyber Security Updates"
    },
    {
        title: "Youtube Tech",
        url: "https://www.youtube.com/@techie_solutions_",
        description: "Follow me for tech updates"
    },
    {
        title: "Facebook Page Tech",
        url: "https://www.facebook.com/white.hat.hacker.2003?mibextid=ZbWKwL",
        description: "Follow me for tech updates"
    },
    {
        title: "Whatsapp Group Tech",
        url: "https://chat.whatsapp.com/Ec8IeIgPjHE6j16WDjF61W",
        description: "Follow me for tech updates"
    },
    {
        title: "My Portfolio",
        url: "https://dev.rtunotes.in",
        description: "Follow me for tech updates"
    },
    {
        title: "WhatsApp Tech Channel",
        url: "https://whatsapp.com/channel/0029VaFYKBj3gvWUvjMuxY2p",
        description: "Follow me for tech updates"
    },
    {
        title: "Telegram Channel Tech",
        url: "https://t.me/techie_yuvraj",
        description: "Follow me for tech updates"
    },
    {
        title: "Chat Bot",
        url: "https://share.chatling.ai/s/7l79b811lkVyR6b",
        description: "Ask your queries here"
    }
];

const linksList = document.getElementById('links-list');

links.forEach(link => {
  const anchor = document.createElement("a");
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.className = "link-item";
  
  anchor.innerHTML = `
    <div class="link-title">${link.title}</div>
    <div class="link-description">${link.description}</div>
  `;

  linksList.appendChild(anchor);
});

// function createLinkItem(link) {
//     const a = document.createElement('a');
//     a.href = link.url;
//     a.target = '_blank';
//     a.rel = 'noopener noreferrer';
//     a.className = 'link-item';

//     const title = document.createElement('div');
//     title.textContent = link.title;
//     title.style.fontWeight = 'bold';
//     title.style.fontSize = '18px';

//     const desc = document.createElement('p');
//     desc.className = 'link-description';
//     desc.textContent = link.description;

//     a.appendChild(title);
//     a.appendChild(desc);

//     return a;
// }

// function renderLinks() {
//     links.forEach(link => {
//         const linkItem = createLinkItem(link);
//         linksList.appendChild(linkItem);
//     });
// }

// if (linksList) {
//     renderLinks();
// } else {
//     console.error("Element with id 'links-list' not found.");
// }
// // Add event listener to handle clicks on links
// document.addEventListener('DOMContentLoaded', () => {
//     renderLinks();
// });