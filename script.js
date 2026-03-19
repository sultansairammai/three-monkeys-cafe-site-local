// Minimal interactions for the pure desktop layout landing page
// Dark canvas/GSAP sequence has been cleanly fully removed as requested

console.log('The 3 Monkeys Café - Core interactions running');

// Menu Filters selection state
document.querySelectorAll('.menu-filters span').forEach(item => {
    item.addEventListener('click', (e) => {
        // Exclude buttons which contain different mechanics
        if (e.target.tagName !== 'BUTTON') {
            e.target.parentElement.querySelectorAll('span').forEach(sib => sib.classList.remove('active'));
            e.target.classList.add('active');
        }
    });
});

// Hamburger Mobile Menu Logic
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });
}

// Pagination state
document.querySelectorAll('.pagination span').forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.innerText !== '...') {
            e.target.parentElement.querySelectorAll('span').forEach(sib => sib.classList.remove('active'));
            e.target.classList.add('active');
        }
    });
});

// Smooth scroll for nav
document.querySelectorAll('.nav-links a, .mobile-cta-bar a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (hamburger && hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinksContainer.classList.remove('active');
                }
            }
        }
    });
});

// Update active state on scroll
const sections = Array.from(document.querySelectorAll('section[id], .find-us-block[id]'));
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.pageYOffset - navbarHeight - 50;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    // Force highlight the last section if scrolled to the absolute bottom of the page
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 10) {
        current = sections[sections.length - 1].getAttribute('id');
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

/* ========================================= */
/* AI CHAT BOT LOGIC                         */
/* ========================================= */

const chatBubble = document.getElementById('chatBubble');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const sendBtn = document.getElementById('sendBtn');
const chatInput = document.getElementById('chatInput');
const messagesArea = document.getElementById('messagesArea');
const typingIndicator = document.getElementById('typingIndicator');

if (chatBubble && chatWindow && closeChat) {
    chatBubble.addEventListener('click', () => {
        chatWindow.classList.add('active');
    });

    closeChat.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    chatInput.value = '';
    
    // Simulate AI response
    showTyping();
    setTimeout(() => {
        const response = getBotResponse(text);
        hideTyping();
        addMessage(response, 'bot');
    }, 1200);
}

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);
    msgDiv.innerHTML = text; // Using innerHTML to allow links or formatting
    messagesArea.appendChild(msgDiv);
    messagesArea.scrollTop = messagesArea.scrollHeight;

    if (sender === 'bot') {
        speakResponse(text, speechLanguage);
    }
}

function showTyping() {
    if (typingIndicator) typingIndicator.style.display = 'flex';
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

function hideTyping() {
    if (typingIndicator) typingIndicator.style.display = 'none';
}

function getBotResponse(input) {
    const query = input.toLowerCase();

    if (query.includes('menu') || query.includes('food') || query.includes('eat')) {
        return "We have a legendary menu! Our top highlights are the <b>Portuguese Chicken & Rice</b>, <b>Sizzler Wraps</b>, and <b>Signature Burgers</b>. We also have sub rolls, salad boxes, and breakfast options!";
    }
    if (query.includes('price') || query.includes('cost') || query.includes('how much')) {
        return "Most of our meals are between <b>£1 and £10</b>. Our legendary Spicy Rice Chicken Box is £9.00, and Subs start from £1.50!";
    }
    if (query.includes('location') || query.includes('address') || query.includes('where')) {
        return "You can find us at <b>16a Adelphi St, Preston PR1 7BE</b>, right next to the UCLan campus!";
    }
    if (query.includes('hour') || query.includes('open') || query.includes('time')) {
        return "We are open <b>Mon-Fri: 9 am – 9 pm</b> and <b>Sat-Sun: 10 am – 9 pm</b>. Hope to see you soon!";
    }
    if (query.includes('sauce')) {
        return "Ah, the <b>Special Sauce</b>! It's a secret house recipe that's been a Preston legend for over a decade. You have to try it to believe it!";
    }
    if (query.includes('order') || query.includes('delivery')) {
        return "You can order for pick-up or delivery via <b>OrderYOYO, UberEats, or Just Eat</b>. Just click the 'Order Now' button on our homepage!";
    }
    if (query.includes('vegan') || query.includes('vegetarian')) {
        return "Yes! We have great options like our <b>Falafel Sub Sandwich</b>, <b>Grilled Halloumi</b>, and fresh Salad Boxes.";
    }
    if (query.includes('hello') || query.includes('hi ') || query.includes('hey')) {
        return "Hello! How can I help you today? Ask me about our menu, hours, or location!";
    }
    if (query.includes('thanks') || query.includes('thank you')) {
        return "You're very welcome! Enjoy your meal at The 3 Monkeys! 🐒";
    }

    return "I'm not sure about that, but I can tell you about our menu, opening hours, or where we are located! Or just ask about our legendary Special Sauce! 😊";
}

/* ========================================= */
/* AUDIO (STT & TTS) LOGIC                   */
/* ========================================= */

const voiceBtn = document.getElementById('voiceBtn');
let recognition;
let speechLanguage = 'en-GB'; // Default

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
        voiceBtn.classList.add('recording');
    };

    recognition.onend = () => {
        voiceBtn.classList.remove('recording');
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        // In most browsers, lang is not returned in result, so we use the session lang
        chatInput.value = transcript;
        sendMessage();
    };

    voiceBtn.addEventListener('click', () => {
        if (voiceBtn.classList.contains('recording')) {
            recognition.stop();
        } else {
            recognition.lang = window.navigator.language || 'en-GB';
            speechLanguage = recognition.lang;
            recognition.start();
        }
    });
} else {
    if (voiceBtn) voiceBtn.style.display = 'none';
}

function speakResponse(text, lang) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text.replace(/<[^>]*>/g, ''));
        utterance.lang = lang || 'en-GB';
        
        const voices = window.speechSynthesis.getVoices();
        const matchingVoice = voices.find(v => v.lang.startsWith(utterance.lang.split('-')[0]));
        if (matchingVoice) utterance.voice = matchingVoice;

        window.speechSynthesis.speak(utterance);
    }
}
