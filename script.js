// =========================================
// PREMIUM LIL' MONKEY AI ASSISTANT & BIZ LOGIC
// =========================================

console.log('Lil\' MonKey Premium System Initializing...');

// --- KNOWLEDGE BASE & STRUCTURED DATA ---
const MENU_DATA = {
    items: [
        { id: 1, name: "Portuguese Chicken & Rice", price: 9.00, category: "Mains", tags: ["best-seller", "spicy", "popular"], icon: "🔥", desc: "Our legendary spicy chicken served with aromatic rice." },
        { id: 2, name: "Sizzler Wrap", price: 6.50, category: "Wraps", tags: ["spicy", "popular"], icon: "🌯", desc: "Fiery Mexican-style sizzler chicken." },
        { id: 3, name: "Breakfast Chicken Wrap", price: 6.50, category: "Wraps", tags: ["breakfast"], icon: "🌯", desc: "Start your day with grilled chicken." },
        { id: 4, name: "Classic Burger", price: 4.50, category: "Burgers", tags: ["best-seller"], icon: "🍔", desc: "Beef smash burger with American cheese." },
        { id: 5, name: "Falafel Sub Sandwich", price: 5.00, category: "Veg", tags: ["veg", "vegan"], icon: "🌿", desc: "Fresh house-made falafels with hummus." },
        { id: 6, name: "Jerk Chicken Burger", price: 5.50, category: "Burgers", tags: ["spicy"], icon: "🍗", desc: "Authentic Caribbean jerk spices." },
        { id: 10, name: "Latte / Cappuccino", price: 2.50, category: "Drinks", tags: ["drink"], icon: "☕", desc: "Premium roasted coffee." }
    ],
    combos: [
        { id: "combo-1", name: "Student Sizzler Combo", price: 8.00, items: ["Sizzler Wrap", "Chips", "Drink"], desc: "Perfect value for UCLan students!" },
        { id: "combo-2", name: "Legendary Duo", price: 11.00, items: ["Chicken & Rice Box", "Drink"], desc: "Our #1 best seller paired with a drink." }
    ]
};

const LANGUAGES = {
    en: {
        welcome: "Hey! I’m **Lil' MonKey** 🐵 Your premium café guide. I can help you browse our menu, find spicy or veg options, manage your cart, and even book a table!",
        status: "Online & Ready",
        placeholder: "Ask me anything...",
        no_understand: "Ooh, I'm not quite sure! 🐒 But I can show the **Menu**, **Bestsellers**, or help you **Book a table**.",
        spicy_search: "Looking for some heat? 🔥 Here are our spicy favorites:",
        veg_search: "Keeping it green? 🌿 Here are our vegetarian delights:",
        bestsellers: "Our community favorites are:",
        combos: "Check out these combos: 🍱",
        recommendation: "Since you're here, try the **Portuguese Chicken & Rice**. It's legendary! 🐒",
        order_sim: "Great choice! I've added that to your cart. 🛒",
        hours: "We're open daily! 🕒\nMon-Fri: 9am-9pm\nSat-Sun: 10am-9pm",
        checkout_msg: "Opening the secure checkout for you! 💳",
        booking_msg: "I've scrolled you to our booking section! 📅"
    },
    hi: {
        welcome: "नमस्ते! मैं **Lil' MonKey** हूँ 🐵 आपका कैफे गाइड। मैं आपको मेनू दिखाने, कार्ट मैनेज करने और टेबल बुक करने में मदद कर सकता हूँ!",
        status: "ऑनलाइन",
        placeholder: "कुछ पूछें...",
        no_understand: "ओह, मुझे समझ नहीं आया! 🐒 लेकिन मैं आपको **मेनू** दिखा सकता हूँ या **टेबल बुक** करने में मदद कर सकता हूँ।",
        spicy_search: "मसालेदार खाना? 🔥 ये रहे हमारे खास स्पाइसी आइटम:",
        veg_search: "शाकाहारी? 🌿 ये रहे हमारे वेजिटेरियन आइटम:",
        bestsellers: "हमारे सबसे लोकप्रिय आइटम हैं:",
        combos: "हमारे कॉम्బో ఆఫర్లను చూడండి: 🍱",
        recommendation: "मैं आपको **पुर्तगाली चिकन और राइस** ट्राई करने की सलाह दूंगा! 🐒",
        order_sim: "बहुत बढ़िया! मैंने इसे आपके कार्ट में जोड़ दिया है। 🛒",
        hours: "हम हर दिन खुले हैं! 🕒"
    },
    te: {
        welcome: "నమస్తే! నేను **Lil' MonKey** 🐵 మీ కాఫీ గైడ్. నేను మీకు మెనూ బ్రౌజ్ చేయడానికి మరియు టేబుల్ బుక్ చేయడానికి సహాయం చేస్తాను!",
        status: "ఆన్‌లైన్",
        placeholder: "ఏదైనా అడగండి...",
        no_understand: "క్షమించండి, నాకు అర్థం కాలేదు! 🐒 కానీ నేను మీకు మా **మెనూ** చూపించగలను.",
        spicy_search: "స్పైసీ ఐటమ్స్ ఇక్కడ ఉన్నాయి: 🔥",
        veg_search: "వెజ్ ఆప్షన్స్ ఇక్కడ ఉన్నాయి: 🌿",
        bestsellers: "మా అత్యంత ప్రజాదరణ పొందిన ఐటమ్స్:",
        combos: "మా కాంబో ఆఫర్లను చూడండి: 🍱",
        recommendation: "మా **పోర్చుగీస్ చికెన్ & రైస్** ని సిఫార్సు చేస్తున్నాను! 🐒",
        order_sim: "చాలా మంచి ఎంపిక! నేను దీన్ని కార్ట్‌లో చేర్చాను. 🛒",
        hours: "మేము ప్రతిరోజూ తెరిచి ఉంటాము! 🕒"
    }
};

// --- STATE MANAGEMENT ---
let currentLang = localStorage.getItem('monkeyLang') || 'en';
let userName = localStorage.getItem('monkeyUser') || '';
let chatActive = false;
let voiceEnabled = localStorage.getItem('voiceEnabled') === 'true';

// Business States
let cart = JSON.parse(localStorage.getItem('monkeyCart')) || [];
let isLoggedIn = localStorage.getItem('monkeyLoggedIn') === 'true';
let lastOrder = JSON.parse(localStorage.getItem('monkeyLastOrder')) || null;

// --- ELEMENTS CACHING ---
let elements = {};

const queryElements = () => {
    elements = {
        aiAssistant: document.getElementById('aiAssistant'),
        chatPanel: document.querySelector('.chat-panel'),
        chatBubble: document.getElementById('chatBubble'),
        closeAssistant: document.getElementById('closeAssistant'),
        chatInput: document.getElementById('chatInput'),
        sendBtn: document.getElementById('sendBtn'),
        micBtn: document.getElementById('micBtn'),
        messagesArea: document.getElementById('messagesArea'),
        typingIndicator: document.getElementById('typingIndicator'),
        langSelect: document.getElementById('langSelect'),
        voiceToggle: document.getElementById('voiceToggle'),
        botStatus: document.getElementById('botStatus'),
        mobileChatBtn: document.getElementById('mobileChatBtn'),
        mobileCartBtn: document.getElementById('mobileCartBtn'),
        cartDrawer: document.getElementById('cartDrawer'),
        closeCart: document.getElementById('closeCart'),
        cartItemsContainer: document.getElementById('cartItems'),
        cartSubtotalValue: document.getElementById('cartSubtotalValue'),
        cartBadge: document.getElementById('cartBadge'),
        orderHeroBtn: document.getElementById('orderHeroBtn'),
        orderModal: document.getElementById('orderModal'),
        quickActions: document.getElementById('quickActions'),
        headerLoginBtn: document.getElementById('headerLoginBtn'),
        userProfile: document.getElementById('userProfile'),
        displayUserName: document.getElementById('displayUserName'),
        loginModal: document.getElementById('loginModal'),
        toastContainer: document.getElementById('toastContainer')
    };
};

// --- INITIALIZATION ---
function init() {
    console.log('Lil\' MonKey: Running realism init...');
    queryElements();

    // 1. Sync UI States
    if (elements.langSelect) elements.langSelect.value = currentLang;
    if (elements.voiceToggle) elements.voiceToggle.checked = voiceEnabled;
    updateBotLabels();
    updateCartUI();
    updateAuthUI();

    // 2. Global Event Listeners
    setupNavListeners();
    setupCartListeners();
    setupAuthListeners();
    setupReservationListeners();
    setupAssistantListeners();

    // 3. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 4. Smooth Entrance Animations (Pop-Art style)
    setupPopArtAnimations();

    // 5. Initialization Feedback
    if (userName) {
        setTimeout(() => {
            addMessage(`Welcome back, **${userName}**! 🐵 Ready for your usual?`, 'bot');
        }, 1500);
    }
}

// --- UI SYSTEMS ---

function setupNavListeners() {
    elements.chatBubble?.addEventListener('click', () => toggleChat(true));
    elements.closeAssistant?.addEventListener('click', () => toggleChat(false));
    elements.mobileChatBtn?.addEventListener('click', (e) => { e.preventDefault(); toggleChat(true); });
    elements.mobileCartBtn?.addEventListener('click', (e) => { e.preventDefault(); toggleCart(true); });
    elements.closeCart?.addEventListener('click', () => toggleCart(false));

    elements.orderHeroBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        elements.orderModal?.classList.add('active');
    });

    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
        });
    });

    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    });

    // Close chatbot when clicking outside of it on desktop
    document.addEventListener('click', (e) => {
        if (chatActive && window.innerWidth > 480 && elements.chatPanel) {
            // Check if click was outside the chat panel and its triggers
            if (!elements.chatPanel.contains(e.target) && 
                !e.target.closest('#chatBubble') && 
                !e.target.closest('.desktop-chat-launcher') && 
                !e.target.closest('#mobileChatBtn')) {
                toggleChat(false);
            }
        }
    });
}

function setupCartListeners() {
    // Global delegation for "Add to Cart" buttons
    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-to-cart-btn');
        if (btn) {
            const id = btn.getAttribute('data-id');
            const isCombo = id.includes('combo-');
            const item = isCombo 
                ? MENU_DATA.combos.find(c => c.id === id)
                : MENU_DATA.items.find(i => i.id == id);
            
            if (item) {
                addToCart(item);
                showToast(`**${item.name}** added! 🍌`);
                
                // Button feedback
                const originalText = btn.innerHTML;
                btn.innerHTML = "Added! ✓";
                btn.classList.add('active');
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.remove('active');
                }, 1000);
            }
        }
    });

    document.getElementById('toCheckoutBtn')?.addEventListener('click', () => {
        if (cart.length === 0) return showToast("Your cart is empty! 🐒");
        toggleCart(false);
        document.getElementById('checkoutModal').classList.add('active');
        updateCheckoutSummary();
    });

    document.getElementById('payNowBtn')?.addEventListener('click', function() {
        const btn = this;
        btn.classList.add('btn-loading');
        
        setTimeout(() => {
            btn.classList.remove('btn-loading');
            lastOrder = [...cart];
            localStorage.setItem('monkeyLastOrder', JSON.stringify(lastOrder));
            cart = [];
            saveCart();
            updateCartUI();
            document.getElementById('checkoutModal').classList.remove('active');
            addMessage("Payment Successful! 🐵 Your food is being prepared. View your order receipt in your email.", 'bot');
            showToast("Order Confirmed! 🎉");
        }, 2000);
    });
}

function setupAuthListeners() {
    elements.headerLoginBtn?.addEventListener('click', () => {
        elements.loginModal?.classList.add('active');
    });

    document.getElementById('sendMagicLink')?.addEventListener('click', () => {
        const email = document.getElementById('loginEmail').value;
        if (!email.includes('@')) return showToast("Enter a valid email! 🐒");
        
        const btn = document.getElementById('sendMagicLink');
        btn.classList.add('btn-loading');
        
        setTimeout(() => {
            btn.classList.remove('btn-loading');
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('loginSuccess').style.display = 'block';
        }, 1500);
    });

    document.getElementById('simulateLogin')?.addEventListener('click', () => {
        isLoggedIn = true;
        localStorage.setItem('monkeyLoggedIn', 'true');
        if (!userName) userName = "Vicky"; // Default if not set
        localStorage.setItem('monkeyUser', userName);
        elements.loginModal?.classList.remove('active');
        updateAuthUI();
        showToast(`Welcome back, ${userName}! ✨`);
        addMessage(`Good to see you again, **${userName}**! 🐵`, 'bot');
    });

    document.getElementById('logoutBtn')?.addEventListener('click', () => {
        isLoggedIn = false;
        localStorage.removeItem('monkeyLoggedIn');
        updateAuthUI();
        showToast("Logged out safely. 🐒");
    });
}

function setupReservationListeners() {
    initCalendar();
    
    document.getElementById('confirmReserveBtn')?.addEventListener('click', () => {
        const day = document.querySelector('.day.active');
        if (!day) return showToast("Please pick a date! 📅");
        
        const btn = document.getElementById('confirmReserveBtn');
        btn.classList.add('btn-loading');
        
        setTimeout(() => {
            btn.classList.remove('btn-loading');
            const guests = document.getElementById('guestCount').innerText;
            const time = document.querySelector('.slot-btn.active').innerText;
            addMessage(`Excellent! Your table for **${guests} guests** is booked for March ${day.innerText} at **${time}**.`, 'bot');
            showToast("Booking Confirmed! 📅");
            // Highlight section success
            document.getElementById('reserve').scrollIntoView({ behavior: 'smooth' });
        }, 1200);
    });

    let guests = 2;
    document.getElementById('guestInc')?.addEventListener('click', () => { guests++; document.getElementById('guestCount').innerText = guests; });
    document.getElementById('guestDec')?.addEventListener('click', () => { if(guests > 1) guests--; document.getElementById('guestCount').innerText = guests; });
}

function setupAssistantListeners() {
    elements.sendBtn?.addEventListener('click', handleInput);
    elements.chatInput?.addEventListener('keypress', (e) => e.key === 'Enter' && handleInput());
    
    elements.voiceToggle?.addEventListener('change', (e) => {
        voiceEnabled = e.target.checked;
        localStorage.setItem('voiceEnabled', voiceEnabled);
    });

    elements.micBtn?.addEventListener('click', () => {
        if (recognition) recognition.start();
        else alert("Voice recognition not supported.");
    });

    elements.langSelect?.addEventListener('change', (e) => switchLang(e.target.value));
}

// --- CART & PERSISTENCE ---

function addToCart(item) {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    saveCart();
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartUI();
}

window.updateQty = (id, delta) => {
    const item = cart.find(i => i.id == id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) removeFromCart(id);
        else { saveCart(); updateCartUI(); }
    }
};

window.removeFromCart = (id) => {
    cart = cart.filter(i => i.id != id);
    saveCart();
    updateCartUI();
};

function saveCart() {
    localStorage.setItem('monkeyCart', JSON.stringify(cart));
}

function updateCartUI() {
    if (!elements.cartItemsContainer) return;

    if (cart.length === 0) {
        elements.cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your belly is empty! 🍌 Add some food?</div>';
        elements.cartSubtotalValue.innerText = '£0.00';
        elements.cartBadge.innerText = '0';
        elements.cartBadge.style.display = 'none';
    } else {
        elements.cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <span class="item-price">£${(item.price * item.qty).toFixed(2)}</span>
                    <div class="item-qty">
                        <button class="qty-btn" onclick="updateQty('${item.id}', -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart('${item.id}')" style="background:none; border:none; color:red; cursor:pointer; font-size:1.2rem;">✕</button>
            </div>
        `).join('');

        const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
        elements.cartSubtotalValue.innerText = `£${subtotal.toFixed(2)}`;
        
        const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
        elements.cartBadge.innerText = totalItems;
        elements.cartBadge.style.display = 'block';
    }
}

function updateCheckoutSummary() {
    const summary = document.getElementById('checkoutSummary');
    if (!summary) return;
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    summary.innerHTML = cart.map(item => `
        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <span>${item.name} (x${item.qty})</span>
            <span>£${(item.price * item.qty).toFixed(2)}</span>
        </div>
    `).join('') + `
        <div style="border-top:1px solid #ddd; margin-top:10px; padding-top:10px; font-weight:700; display:flex; justify-content:space-between;">
            <span>Total</span>
            <span>£${subtotal.toFixed(2)}</span>
        </div>
    `;
    document.getElementById('payNowBtn').innerText = `Pay Now (£${subtotal.toFixed(2)})`;
}

// --- AUTH UI ---

function updateAuthUI() {
    let profile = document.getElementById('userProfile');
    const authContainer = document.getElementById('headerAuth');
    
    if (isLoggedIn) {
        if (elements.headerLoginBtn) elements.headerLoginBtn.setAttribute('style', 'display: none !important');
        
        if (!profile && authContainer) {
            profile = document.createElement('div');
            profile.id = 'userProfile';
            profile.className = 'user-profile';
            profile.innerHTML = `
                <span class="user-avatar">👤</span>
                <span class="user-name" id="displayUserName">${userName || "User"}</span>
            `;
            authContainer.appendChild(profile);
            // Re-query to keep elements cache relevant if needed, but we'll use local 'profile'
        } else if (profile) {
            profile.setAttribute('style', 'display: flex !important');
            const nameEl = profile.querySelector('.user-name');
            if (nameEl) nameEl.innerText = userName || "User";
        }
        
        document.getElementById('logoutSection').style.display = 'block';
        document.getElementById('loginForm').style.display = 'none';
    } else {
        if (elements.headerLoginBtn) elements.headerLoginBtn.setAttribute('style', 'display: inline-block !important');
        if (profile) profile.remove(); // Remove guest chip entirely as requested
        
        document.getElementById('logoutSection').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('loginSuccess').style.display = 'none';
    }
}

// --- CHATBOT CORE ---

function toggleChat(force) {
    chatActive = typeof force === 'boolean' ? force : !chatActive;
    if (chatActive) {
        elements.chatPanel.classList.add('active');
        if (elements.chatBubble) elements.chatBubble.style.display = 'none';
        if (window.innerWidth <= 480) {
            document.body.style.overflow = 'hidden';
            window.location.hash = "#chat"; // Virtual navigation
        }
        elements.chatInput.focus();
    } else {
        elements.chatPanel.classList.remove('active');
        if (elements.chatBubble) elements.chatBubble.style.display = 'flex';
        document.body.style.overflow = 'auto';
    }
}

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);
    msgDiv.innerHTML = `<div class="msg-content">${formatMarkdown(text)}</div>`;
    elements.messagesArea.appendChild(msgDiv);
    elements.messagesArea.scrollTop = elements.messagesArea.scrollHeight;
    if (sender === 'bot' && voiceEnabled) speak(text);
}

function formatMarkdown(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function handleInput() {
    const query = elements.chatInput.value.trim();
    if (!query) return;
    addMessage(query, 'user');
    elements.chatInput.value = '';
    elements.typingIndicator.style.display = 'flex';
    elements.messagesArea.scrollTop = elements.messagesArea.scrollHeight;

    setTimeout(() => {
        elements.typingIndicator.style.display = 'none';
        const response = generateResponse(query.toLowerCase());
        addMessage(response, 'bot');
    }, 800 + Math.random() * 800);
}

function generateResponse(query) {
    const db = LANGUAGES[currentLang];

    // Context-sensitive responses
    if (query.match(/add|buy|want/)) {
        const item = MENU_DATA.items.find(i => query.includes(i.name.toLowerCase()));
        if (item) {
            addToCart(item);
            showToast(`**${item.name}** added via chat! 🐵`);
            return db.order_sim.replace('🛒', `**${item.name}** to your cart! 🛒`);
        }
    }

    if (query.includes('cart') || query.includes('what have i')) {
        if (cart.length === 0) return "Your cart is empty! 🐒";
        const list = cart.map(i => `• ${i.name} (x${i.qty})`).join('<br>');
        return `You have:<br>${list}<br><br>Shall I **checkout**?`;
    }

    if (query.includes('checkout') || query.includes('pay')) {
        setTimeout(() => document.getElementById('checkoutModal').classList.add('active'), 1000);
        return db.checkout_msg || "Opening checkout for you! 💳";
    }

    if (query.includes('book') || query.includes('reserve')) {
        window.location.hash = "#reserve";
        return db.booking_msg || "Scroll down to book! 📅";
    }

    if (query.includes('spicy')) return `${db.spicy_search}<br><br>${formatMenuList(MENU_DATA.items.filter(i => i.tags.includes('spicy')))}`;
    if (query.includes('veg')) return `${db.veg_search}<br><br>${formatMenuList(MENU_DATA.items.filter(i => i.tags.includes('veg')))}`;
    if (query.includes('best') || query.includes('recommend')) return db.recommendation;
    if (query.includes('menu')) return db.welcome;

    if (query.match(/hi|hello|hey/)) return db.welcome;

    return db.no_understand;
}

function formatMenuList(list) {
    return list.map(i => `${i.icon} **${i.name}** - £${i.price.toFixed(2)}`).join('<br>');
}

// --- UTILS ---

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>🐒</span> <span>${formatMarkdown(message)}</span>`;
    elements.toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

function initCalendar() {
    const grid = document.getElementById('calendarDays');
    if (!grid) return;
    grid.innerHTML = '';
    for(let i=1; i<=31; i++) {
        const d = document.createElement('div');
        d.className = 'day';
        if (i===20) d.classList.add('active');
        d.innerText = i;
        d.onclick = () => {
            grid.querySelectorAll('.day').forEach(el => el.classList.remove('active'));
            d.classList.add('active');
        };
        grid.appendChild(d);
    }
}

function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('monkeyLang', lang);
    updateBotLabels();
}

function updateBotLabels() {
    const db = LANGUAGES[currentLang];
    if (elements.botStatus) elements.botStatus.innerText = db.status;
    if (elements.chatInput) elements.chatInput.placeholder = db.placeholder;
}

// Voice Logic
let recognition;
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.onstart = () => { elements.micBtn.classList.add('active'); elements.chatInput.placeholder = "Listening..."; };
    recognition.onresult = (e) => { elements.chatInput.value = e.results[0][0].transcript; handleInput(); };
    recognition.onend = () => { elements.micBtn.classList.remove('active'); updateBotLabels(); };
}

function speak(text) {
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text.replace(/\*\*/g, '').replace(/<br>/g, '. '));
    utterance.lang = currentLang === 'hi' ? 'hi-IN' : (currentLang === 'te' ? 'te-IN' : 'en-GB');
    window.speechSynthesis.speak(utterance);
}

// --- POP-ART SCROLL REVEAL ANIMATIONS ---
function setupPopArtAnimations() {
    const animatedSelectors = [
        '.service-item', '.step-box', '.menu-card', 
        '.menu-category', '.info-card', '.find-grid', '.review-card'
    ];
    
    const elementsToAnimate = document.querySelectorAll(animatedSelectors.join(', '));
    elementsToAnimate.forEach(el => el.classList.add('pop-reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    elementsToAnimate.forEach(el => observer.observe(el));
}

// RUN INIT
if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } 
else { init(); }
window.onload = init;
