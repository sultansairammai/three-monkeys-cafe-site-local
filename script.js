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

        // Subtle entrance animation for the Genie bubble
        setTimeout(() => {
            chatBubble.style.opacity = '0';
            chatBubble.style.transform = 'translateY(50px) skewX(-15deg)';
            chatBubble.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            requestAnimationFrame(() => {
                chatBubble.style.opacity = '1';
                chatBubble.style.transform = 'translateY(0) skewX(-15deg)';
                
                // Show a small brand tooltip
                setTimeout(() => {
                    const tooltip = document.createElement('div');
                    tooltip.className = 'genie-tooltip';
                    tooltip.innerHTML = "New: AI Genie is here! 🧞";
                    chatBubble.parentElement.appendChild(tooltip);
                    
                    setTimeout(() => tooltip.classList.add('visible'), 500);
                    setTimeout(() => tooltip.classList.remove('visible'), 5000);
                }, 1000);
            });
        }, 1500);
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
}

function showTyping() {
    if (typingIndicator) typingIndicator.style.display = 'flex';
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

function hideTyping() {
    if (typingIndicator) typingIndicator.style.display = 'none';
}

/* ========================================= */
/* AI GENIE KNOWLEDGE BASE & PERSONALITY     */
/* ========================================= */

const CAFE_KB = {
    name: "3 Monkeys Café",
    location: "16a Adelphi St, Preston PR1 7BE",
    hours: "Mon-Fri: 9 am – 9 pm, Sat-Sun: 10 am – 9 pm",
    highlights: ["Portuguese Chicken & Rice", "Sizzler Wraps", "Signature Burgers", "The Special Sauce"],
    menu: {
        protein: ["Portuguese Peri Peri", "Mexican Sizzler", "Korean BBQ", "Tikka Masala", "Caribbean BBQ"],
        popular: [
            { name: "Spicy Rice Chicken Box", price: "£9.00", desc: "Our legendary spicy rice with fresh chicken and salad." },
            { name: "Falafel Sub Sandwich", price: "£5.00", desc: "A great vegan choice with fresh falafel." },
            { name: "Signature 3 Monkeys Classic Burger", price: "£4.50", desc: "Beef smash burger with American cheese and our special sauce." }
        ],
        deals: [
            { name: "Burger Meal", price: "+£2.00", desc: "Add chips and a drink to any burger." }
        ]
    },
    greetings: {
        en: ["Hi there! Welcome to 3 Monkeys Café 😊 What can I get started for you today?", "Hello! Fancy a bite? I'm your Genie, here to help!"],
        hi: ["नमस्ते! 3 मंकीज़ कैफ़े में आपका स्वागत है 😊 मैं आपकी क्या मदद कर सकता हूँ?", "नमस्ते! क्या आप कुछ स्वादिष्ट खाना चाहेंगे?"],
        te: ["హలో! 3 మంకీస్ కేఫ్ కు స్వాగతం 😊 ఈరోజు మీకు ఏమి కావాలి?", "హలో! మీకు ఏమి సహాయం కావాలి?"]
    }
};

function getSystemLanguage(input) {
    const text = input.toLowerCase();
    // Simple detection based on scripts or keywords
    if (/[\u0900-\u097F]/.test(text) || text.includes("namaste") || text.includes("kaise")) return "hi";
    if (/[\u0C00-\u0C7F]/.test(text) || text.includes("namaskaram") || text.includes("ela unnavu")) return "te";
    return "en";
}

function getPersonalityPrompt(lang) {
    if (lang === "hi") return "मेरे दोस्त, ";
    if (lang === "te") return "మిత్రమా, ";
    return "Love, ";
}

function getBotResponse(input) {
    const query = input.toLowerCase();
    const lang = getSystemLanguage(input);
    let response = "";

    // 1. Language Specific Greetings
    if (query.match(/^(hi|hello|hey|namaste|hello|hola|hallo)/)) {
        const greets = CAFE_KB.greetings[lang];
        return greets[Math.floor(Math.random() * greets.length)];
    }

    // 2. Menu & Food Recommendations
    if (query.includes('menu') || query.includes('food') || query.includes('eat') || query.includes('recommend') || query.includes('suggest')) {
        if (lang === "hi") {
            response = "हमारे पास बहुत कुछ स्वादिष्ठ है! मैं आपको **पोर्टुगीज चिकन और राइस** या हमारा **सिग्नेचर बर्गर** आज़माने की सलाह दूँगा। इसे फ्राइज़ के साथ ज़रूर लें!";
        } else if (lang === "te") {
            response = "మా దగ్గర చాలా రుచికరమైన వంటకాలు ఉన్నాయి! నేను మీకు మా **పోర్చుగీస్ చికెన్ & రైస్** లేదా **సిగ్నేచర్ బర్గర్** ను సిఫార్సు చేస్తున్నాను.";
        } else {
            response = "Oh, you're in for a treat! Our hits are the **Portuguese Chicken & Rice** and the **Sizzler Wraps**. Most customers pair the chicken with fries and a drink — would you like to see our combo deals?";
        }
        return response;
    }

    // 3. The Special Sauce (Brand Legend)
    if (query.includes('sauce')) {
        return "Ah, the legendary **Special Sauce**! It's our secret recipe that's been a Preston staple for a decade. It goes perfectly with just about everything on the menu!";
    }

    // 4. Spice Levels
    if (query.includes('spicy') || query.includes('hot')) {
        return "If you like it spicy, you'll love our **Mexican Sizzler** or the **Portuguese Peri Peri**. They really pack a punch! 🌶️";
    }

    // 5. Pricing
    if (query.includes('price') || query.includes('cost') || query.includes('how much')) {
        return "We keep things affordable! Most meals are between **£1 and £10**. Our big Spicy Rice Chicken Box is £9.00, and you can grab a sub starting at just £1.50!";
    }

    // 6. Location & Hours
    if (query.includes('where') || query.includes('location') || query.includes('address')) {
        return `You can find us at **${CAFE_KB.location}**, right by the UCLan campus!`;
    }
    if (query.includes('hour') || query.includes('open') || query.includes('time')) {
        return `We're open every day! **${CAFE_KB.hours}**. Hope to see you soon!`;
    }

    // 7. Ordering
    if (query.includes('order') || query.includes('delivery')) {
        return "You can order right here on the site by clicking 'Order Now'! We're also on **UberEats and Just Eat** if you fancy delivery.";
    }

    // 8. Vegan/Vegetarian
    if (query.includes('vegan') || query.includes('vegetarian') || query.includes('veg')) {
        return "Of course! Our **Falafel Sub** and **Grilled Halloumi** are massive favorites for our veggie friends.";
    }

    // Default Fallback
    if (lang === "hi") return "क्षमा करें, मुझे समझ नहीं आया। क्या आप मेनू या हमारे घंटों के बारे में पूछना चाहते हैं? 😊";
    if (lang === "te") return "క్షమించండి, నాకు అర్థం కాలేదు. మీరు మెనూ లేదా సమయాల గురించి అడగాలనుకుంటున్నారా? 😊";
    
    return "I'm not quite sure I caught that, but I can definitely help you with our menu, recommendations, or tell you where we are located! Just ask about our legendary Special Sauce! 😊";
}

/* ========================================= */
/* AUDIO (STT & TTS) LOGIC                   */
/* ========================================= */

