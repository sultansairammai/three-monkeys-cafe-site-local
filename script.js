// =========================================
// PREMIUM LIL' MONKEY AI ASSISTANT & BIZ LOGIC
// =========================================

console.log('Lil\' MonKey Premium System Initializing...');

// --- KNOWLEDGE BASE & STRUCTURED DATA ---
const MENU_DATA = {
    items: [
        // Burgers
        { id: 1, name: "3 Monkeys Classic", price: 4.50, category: "Burgers", tags: ["best-seller", "halal"], icon: "🍔", desc: "Beef smash burger, American cheese, salad, caramelised onions & special sauce." },
        { id: 6, name: "Jerk Chicken Burger", price: 5.50, category: "Burgers", tags: ["spicy", "halal"], icon: "🍗", desc: "Original jerk chicken, brioche bun, salad, cheese & secret sauce." },
        { id: 7, name: "Louisiana Burger", price: 5.50, category: "Burgers", tags: ["spicy", "halal"], icon: "🍔", desc: "Louisiana spice blend, toasted bun, salad, cheese & special sauce." },
        { id: 8, name: "Classic Beef Dog", price: 5.00, category: "Burgers", tags: ["halal"], icon: "🌭", desc: "American beef dog, cheese, salsa, onions & special sauce on brioche." },
        // Breakfast
        { id: 9, name: "Full Monkey Breakfast", price: 8.00, category: "Breakfast", tags: ["best-seller", "halal", "breakfast"], icon: "🍳", desc: "2 Lamb sausages, 2 eggs, Beans, Hashbrowns, Turkey Bacon, polony, Toast." },
        { id: 3, name: "The Muffin Man", price: 6.50, category: "Breakfast", tags: ["halal", "breakfast"], icon: "🧁", desc: "Toasted muffin, hashbrowns, fried eggs with Turkey bacon or sausage & hollandaise." },
        { id: 2, name: "Bombay Spiced Eggs", price: 6.00, category: "Breakfast", tags: ["spicy", "halal", "breakfast"], icon: "🌶️", desc: "Asian style omelette, green chillies, cheese & fresh coriander." },
        { id: 5, name: "Menemen (V)", price: 6.00, category: "Breakfast", tags: ["veg", "halal", "breakfast"], icon: "🍅", desc: "Scrambled eggs with onions, tomatoes, peppers & Turkish spices." },
        // Wraps & Mains
        { id: 11, name: "Sizzler Wrap", price: 6.50, category: "Wraps", tags: ["spicy", "popular", "halal"], icon: "🌯", desc: "Fiery Mexican-style sizzler chicken." },
        { id: 12, name: "Portuguese Chicken & Rice", price: 9.00, category: "Mains", tags: ["best-seller", "spicy", "popular", "halal"], icon: "🔥", desc: "Our legendary spicy chicken served with aromatic rice." },
        { id: 4, name: "Falafel Sub Sandwich", price: 5.00, category: "Veg", tags: ["veg", "vegan", "halal"], icon: "🌿", desc: "Fresh house-made falafels with hummus." },
        // Sides
        { id: 20, name: "Chips", price: 2.00, category: "Sides", tags: ["veg", "vegan", "side", "halal"], icon: "🍟", desc: "Classic golden chips." },
        { id: 21, name: "Salt & Pepper Chips", price: 3.00, category: "Sides", tags: ["veg", "vegan", "spicy", "side", "halal"], icon: "🍟", desc: "Crispy chips with salt & pepper seasoning." },
        { id: 22, name: "Halloumi Fries", price: 3.50, category: "Sides", tags: ["veg", "side", "halal"], icon: "🧀", desc: "Golden fried halloumi sticks." },
        { id: 23, name: "Sweet Potato Fries", price: 3.00, category: "Sides", tags: ["veg", "vegan", "side", "halal"], icon: "🍠", desc: "Crispy sweet potato fries." },
        { id: 24, name: "Chicken Nuggets (6)", price: 4.00, category: "Sides", tags: ["side", "halal"], icon: "🐔", desc: "6 crispy chicken nuggets." },
        { id: 25, name: "Chilli Cheese Nugs", price: 3.50, category: "Sides", tags: ["spicy", "side", "halal"], icon: "🌶️", desc: "Spicy nuggets with melted cheese." },
        { id: 26, name: "Bag of Hash", price: 2.00, category: "Sides", tags: ["veg", "side", "halal"], icon: "🥔", desc: "Crispy hash brown bites." },
        // Drinks
        { id: 10, name: "Tea & Coffee", price: 1.50, category: "Drinks", tags: ["drink", "veg", "vegan", "halal"], icon: "☕", desc: "Freshly brewed tea or coffee." },
        { id: 27, name: "Latte / Cappuccino", price: 2.50, category: "Drinks", tags: ["drink", "veg", "halal"], icon: "☕", desc: "Premium roasted barista coffee." },
        { id: 28, name: "Fresh Juice", price: 3.00, category: "Drinks", tags: ["drink", "veg", "vegan", "halal"], icon: "🧃", desc: "Freshly squeezed seasonal juice." },
        { id: 29, name: "Soft Drink", price: 1.50, category: "Drinks", tags: ["drink", "veg", "vegan", "halal"], icon: "🥤", desc: "Coca-Cola, Fanta, Sprite or Pepsi." }
    ],
    combos: [
        { id: "combo-1", name: "Student Sizzler Combo", price: 8.00, items: ["Sizzler Wrap", "Chips", "Drink"], desc: "Perfect value for UCLan students!", tags: ["popular", "halal"] },
        { id: "combo-2", name: "Legendary Duo", price: 11.00, items: ["Chicken & Rice Box", "Drink"], desc: "Our #1 best seller paired with a drink.", tags: ["best-seller", "halal"] }
    ]
};

const LANGUAGES = {
    en: {
        welcome: "Hey! I'm **Lil' MonKey** 🐵 Your premium café guide. I can help you browse our menu, find spicy or veg options, manage your cart, and even book a table!",
        status: "Online & Ready",
        placeholder: "Ask me anything...",
        no_understand: "Ooh, I'm not quite sure! 🐒 Try asking about our **Menu**, **Bestsellers**, **Spicy items**, or say **\"suggest me\"** for a recommendation.",
        spicy_search: "Looking for some heat? 🔥 Here are our spicy favorites:",
        veg_search: "Keeping it green? 🌿 Here are our vegetarian delights:",
        bestsellers: "Our community favorites are:",
        combos: "Check out these value combos: 🍱",
        recommendation: "Since you're here, try the **Portuguese Chicken & Rice**. It's legendary! 🐒",
        order_sim: "Great choice! I've added that to your cart. 🛒",
        hours: "We're open daily! 🕒\nMon-Fri: 9am-9pm\nSat-Sun: 10am-9pm",
        checkout_msg: "Opening the secure checkout for you! 💳",
        booking_msg: "I've scrolled you to our booking section! 📅",
        cart_empty: "Your cart is empty! 🐒 Browse the **Menu** or ask me to **suggest** something!",
        added_to_cart: "Added **{item}** to your cart! 🛒",
        removed_from_cart: "Removed **{item}** from your cart. 🗑️",
        order_again: "Here's what you ordered last time:",
        no_last_order: "I don't have a previous order on file. Let's start fresh! 🐵 What are you in the mood for?",
        halal_search: "All our meats are **100% Halal certified** 🥩. Here's our full Halal menu:",
        breakfast_search: "Rise and shine! 🍳 Our breakfast is served till 11am:",
        drinks_search: "Here are our refreshing drinks: ☕",
        upsell_side: "Great pick! 🐵 Want to add some **Chips** (£2) or **Halloumi Fries** (£3.50) on the side?",
        upsell_drink: "Don't forget a drink! ☕ A **Latte** (£2.50) or **Fresh Juice** (£3) pairs perfectly!",
        budget_intro: "Smart choice! 💰 Here are items under **£{budget}**:",
        nothing_found: "Hmm, I couldn't find anything matching that. 🐒 Try asking about **burgers**, **breakfast**, or **spicy** items!",
        cart_summary: "Here's what's in your cart:",
        checkout_prompt: "Ready to order? Just say **checkout** or hit the cart icon! 🛒"
    },
    hi: {
        welcome: "नमस्ते! मैं **Lil' MonKey** हूँ 🐵 आपका कैफे गाइड। मैं आपको मेनू दिखाने, कार्ट मैनेज करने और टेबल बुक करने में मदद कर सकता हूँ!",
        status: "ऑनलाइन",
        placeholder: "कुछ पूछें...",
        no_understand: "ओह, मुझे समझ नहीं आया! 🐒 **मेनू**, **बेस्टसेलर**, या **सुझाव** माँगें।",
        spicy_search: "मसालेदार खाना? 🔥 ये रहे हमारे खास स्पाइसी आइटम:",
        veg_search: "शाकाहारी? 🌿 ये रहे हमारे वेजिटेरियन आइटम:",
        bestsellers: "हमारे सबसे लोकप्रिय आइटम हैं:",
        combos: "हमारे कॉम्बो ऑफर देखें: 🍱",
        recommendation: "मैं आपको **पुर्तगाली चिकन और राइस** ट्राई करने की सलाह दूंगा! 🐒",
        order_sim: "बहुत बढ़िया! मैंने इसे आपके कार्ट में जोड़ दिया है। 🛒",
        hours: "हम हर दिन खुले हैं! 🕒",
        cart_empty: "आपका कार्ट खाली है! 🐒",
        added_to_cart: "**{item}** कार्ट में जोड़ दिया! 🛒",
        removed_from_cart: "**{item}** कार्ट से हटा दिया। 🗑️",
        checkout_msg: "चेकआउट खोल रहे हैं! 💳",
        booking_msg: "बुकिंग सेक्शन पर ले जा रहे हैं! 📅",
        order_again: "आपने पिछली बार ये ऑर्डर किया था:",
        no_last_order: "पिछला ऑर्डर नहीं मिला। कुछ नया ट्राई करें! 🐵",
        halal_search: "हमारा सभी मीट **100% हलाल प्रमाणित** है 🥩:",
        breakfast_search: "नाश्ता 11 बजे तक! 🍳:",
        drinks_search: "हमारे ड्रिंक्स: ☕",
        upsell_side: "साइड में **चिप्स** (£2) चाहिए? 🐵",
        upsell_drink: "ड्रिंक भी लें? ☕ **लट्टे** (£2.50) बढ़िया रहेगी!",
        budget_intro: "**£{budget}** से कम के आइटम:",
        nothing_found: "कुछ नहीं मिला 🐒 **बर्गर**, **ब्रेकफास्ट**, या **स्पाइसी** पूछें!",
        cart_summary: "आपके कार्ट में:",
        checkout_prompt: "ऑर्डर करने के लिए **checkout** कहें! 🛒"
    },
    te: {
        welcome: "నమస్తే! నేను **Lil' MonKey** 🐵 మీ కాఫీ గైడ్. నేను మీకు మెనూ బ్రౌజ్ చేయడానికి మరియు టేబుల్ బుక్ చేయడానికి సహాయం చేస్తాను!",
        status: "ఆన్‌లైన్",
        placeholder: "ఏదైనా అడగండి...",
        no_understand: "క్షమించండి, నాకు అర్థం కాలేదు! 🐒 **మెనూ**, **బెస్ట్‌సెల్లర్స్** అడగండి.",
        spicy_search: "స్పైసీ ఐటమ్స్ ఇక్కడ ఉన్నాయి: 🔥",
        veg_search: "వెజ్ ఆప్షన్స్ ఇక్కడ ఉన్నాయి: 🌿",
        bestsellers: "మా అత్యంత ప్రజాదరణ పొందిన ఐటమ్స్:",
        combos: "మా కాంబో ఆఫర్లు: 🍱",
        recommendation: "మా **పోర్చుగీస్ చికెన్ & రైస్** ని సిఫార్సు చేస్తున్నాను! 🐒",
        order_sim: "చాలా మంచి ఎంపిక! నేను దీన్ని కార్ట్‌లో చేర్చాను. 🛒",
        hours: "మేము ప్రతిరోజూ తెరిచి ఉంటాము! 🕒",
        cart_empty: "మీ కార్ట్ ఖాళీగా ఉంది! 🐒",
        added_to_cart: "**{item}** కార్ట్‌లో చేర్చాను! 🛒",
        removed_from_cart: "**{item}** తీసేసాను. 🗑️",
        checkout_msg: "చెకౌట్ ఓపెన్ చేస్తున్నాను! 💳",
        booking_msg: "బుకింగ్ సెక్షన్‌కి! 📅",
        order_again: "మీ గత ఆర్డర్:",
        no_last_order: "మునుపటి ఆర్డర్ లేదు. కొత్తది ట్రై చేయండి! 🐵",
        halal_search: "మా అన్ని మాంసాలు **100% హలాల్** 🥩:",
        breakfast_search: "అల్పాహారం 11 వరకు! 🍳:",
        drinks_search: "మా డ్రింక్స్: ☕",
        upsell_side: "**చిప్స్** (£2) కావాలా? 🐵",
        upsell_drink: "డ్రింక్ కూడా? ☕ **లాటే** (£2.50) బాగుంటుంది!",
        budget_intro: "**£{budget}** లోపు ఐటమ్స్:",
        nothing_found: "ఏమీ కనపడలేదు 🐒 **బర్గర్**, **బ్రేక్‌ఫాస్ట్** అడగండి!",
        cart_summary: "మీ కార్ట్‌లో:",
        checkout_prompt: "ఆర్డర్ చేయడానికి **checkout** చెప్పండి! 🛒"
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

// Session context for smarter responses
let sessionContext = {
    lastCategory: null,
    lastSearchResults: [],
    conversationTurn: 0,
    hasBeenGreeted: false,
    lastAddedItem: null
};

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
        chatCartBtn: document.getElementById('chatCartBtn'),
        chatCartBadge: document.getElementById('chatCartBadge'),
        headerCartBtn: document.getElementById('headerCartBtn'),
        headerCartBadge: document.getElementById('headerCartBadge'),
        orderHeroBtn: document.getElementById('orderHeroBtn'),
        orderModal: document.getElementById('orderModal'),
        quickActions: document.getElementById('quickActions'),
        headerLoginBtn: document.getElementById('headerLoginBtn'),
        userProfile: document.getElementById('userProfile'),
        displayUserName: document.getElementById('displayUserName'),
        loginModal: document.getElementById('loginModal'),
        toastContainer: document.getElementById('toastContainer'),
        hamburger: document.querySelector('.hamburger'),
        navLinks: document.querySelector('.nav-links')
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
    setupQuickActionListeners();
    setupBottomNav();

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

    // 6. Initialize Auto-Improvement Growth Engine
    window.growthEngine = new GrowthEngine();
    window.growthEngine.init();
}

// --- UI SYSTEMS ---

function setupNavListeners() {
    elements.chatBubble?.addEventListener('click', () => toggleChat(true));
    elements.closeAssistant?.addEventListener('click', () => toggleChat(false));
    elements.mobileChatBtn?.addEventListener('click', (e) => { e.preventDefault(); toggleChat(true); });
    elements.mobileCartBtn?.addEventListener('click', (e) => { e.preventDefault(); toggleCart(true); });
    elements.closeCart?.addEventListener('click', () => toggleCart(false));

    // Mobile Menu Toggle
    elements.hamburger?.addEventListener('click', () => {
        elements.hamburger.classList.toggle('active');
        elements.navLinks.classList.toggle('active');
    });

    // Auto-close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            elements.hamburger?.classList.remove('active');
            elements.navLinks?.classList.remove('active');
        });
    });

    // Chat cart button opens the main cart drawer
    elements.chatCartBtn?.addEventListener('click', () => {
        toggleCart(true);
    });

    // Header cart button opens the main cart drawer
    elements.headerCartBtn?.addEventListener('click', () => {
        toggleCart(true);
    });

    elements.orderHeroBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        const menuSection = document.getElementById('menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
            // Highlight the menu icon in bottom nav as well
            const menuNavItem = document.querySelector('.bottom-nav .nav-item[data-section="menu"]');
            if (menuNavItem) setActiveNavItem(menuNavItem);
        }
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
            if (!elements.chatPanel.contains(e.target) && 
                !e.target.closest('#chatBubble') && 
                !e.target.closest('.desktop-chat-launcher') && 
                !e.target.closest('#mobileChatBtn')) {
                toggleChat(false);
            }
        }

        // Close cart drawer when clicking outside of it on desktop
        if (elements.cartDrawer?.classList.contains('active') && window.innerWidth > 480) {
            if (!elements.cartDrawer.contains(e.target) &&
                !e.target.closest('#mobileCartBtn') &&
                !e.target.closest('#chatCartBtn') &&
                !e.target.closest('#headerCartBtn') &&
                !e.target.closest('.add-to-cart-btn')) {
                toggleCart(false);
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

    // Time slot selection logic
    const timeSlots = document.querySelectorAll('.slot-btn');
    timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            timeSlots.forEach(s => s.classList.remove('active'));
            slot.classList.add('active');
        });
    });
    
    document.getElementById('confirmReserveBtn')?.addEventListener('click', () => {
        const day = document.querySelector('.day.active');
        if (!day) return showToast("Please pick a date! 📅");
        
        const btn = document.getElementById('confirmReserveBtn');
        const originalText = btn.innerText;
        btn.classList.add('btn-loading');
        btn.innerText = "CONFIRMING...";
        
        setTimeout(() => {
            btn.classList.remove('btn-loading');
            btn.classList.add('btn-booked');
            btn.innerText = "BOOKED! 🎉";
            
            // Show the persistent confirmation alert (Now below calendar)
            const alert = document.getElementById('bookingSuccessAlert');
            if (alert) {
                alert.style.display = 'flex';
                // Scroll to its container smoothly
                setTimeout(() => {
                    alert.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }

            const guests = document.getElementById('guestCount').innerText;
            const time = document.querySelector('.slot-btn.active').innerText;
            addMessage(`Excellent! Your table for **${guests} guests** is booked for March ${day.innerText} at **${time}**.`, 'bot');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('btn-booked');
            }, 3000);
        }, 1200);
    });

    let guests = 2;
    document.getElementById('guestInc')?.addEventListener('click', () => { 
        if(guests < 12) guests++; 
        document.getElementById('guestCount').innerText = guests; 
    });
    document.getElementById('guestDec')?.addEventListener('click', () => { 
        if(guests > 1) guests--; 
        document.getElementById('guestCount').innerText = guests; 
    });
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

// --- QUICK ACTION CHIP HANDLER ---
function setupQuickActionListeners() {
    elements.quickActions?.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;
        const action = chip.getAttribute('data-action');
        // Simulate user typing the action
        addMessage(action, 'user');
        elements.typingIndicator.style.display = 'flex';
        elements.messagesArea.scrollTop = elements.messagesArea.scrollHeight;

        setTimeout(() => {
            elements.typingIndicator.style.display = 'none';
            const response = generateResponse(action.toLowerCase());
            addMessage(response, 'bot');
        }, 600 + Math.random() * 400);
    });
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
    sessionContext.lastAddedItem = item;
    showToast(`Added ${item.name} to Cart 🛒`);
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

    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

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
        
        elements.cartBadge.innerText = totalItems;
        elements.cartBadge.style.display = 'block';

        // --- GROWTH ENGINE: Dynamic Upsell Intelligence ---
        const hasDrinks = cart.some(item => item.name.toLowerCase().includes('coke') || item.name.toLowerCase().includes('water') || item.name.toLowerCase().includes('drink'));
        const hasSides = cart.some(item => item.name.toLowerCase().includes('chips') || item.name.toLowerCase().includes('fries') || item.name.toLowerCase().includes('samosa'));
        
        if (!hasDrinks && subtotal > 0) {
            elements.cartItemsContainer.innerHTML += `
                <div class="cart-upsell-container">
                    <div>
                        <div class="cart-upsell-text">Thirsty? 🥤</div>
                        <div class="cart-upsell-desc">Add a cold drink to your order</div>
                    </div>
                    <button class="cart-upsell-btn" onclick="addToCart({id: 'drink_coke', name: 'Diet Coke', price: 1.50})">Add £1.50</button>
                </div>
            `;
        } else if (!hasSides && subtotal > 0) {
            elements.cartItemsContainer.innerHTML += `
                <div class="cart-upsell-container">
                    <div>
                        <div class="cart-upsell-text">Craving a side? 🍟</div>
                        <div class="cart-upsell-desc">Add our famous Crispy Chips</div>
                    </div>
                    <button class="cart-upsell-btn" onclick="addToCart({id: 'side_chips', name: 'Crispy Chips', price: 2.50})">Add £2.50</button>
                </div>
            `;
        }
    }

    // Sync chatbot header cart badge
    if (elements.chatCartBadge) {
        elements.chatCartBadge.innerText = totalItems;
        elements.chatCartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    // Sync website header cart badge
    if (elements.headerCartBadge) {
        elements.headerCartBadge.innerText = totalItems;
        elements.headerCartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
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
        } else if (profile) {
            profile.setAttribute('style', 'display: flex !important');
            const nameEl = profile.querySelector('.user-name');
            if (nameEl) nameEl.innerText = userName || "User";
        }
        
        document.getElementById('logoutSection').style.display = 'block';
        document.getElementById('loginForm').style.display = 'none';
    } else {
        if (elements.headerLoginBtn) elements.headerLoginBtn.setAttribute('style', 'display: inline-block !important');
        if (profile) profile.remove();
        
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
        // Slight delay to ensure element is painted before focusing for mobile keyboards
        setTimeout(() => {
            if (elements.chatInput) elements.chatInput.focus();
        }, 100);
    } else {
        elements.chatPanel.classList.remove('active');
        if (elements.chatBubble) elements.chatBubble.style.display = 'flex';
        document.body.style.overflow = 'auto';
    }
}

function toggleCart(force) {
    const drawer = elements.cartDrawer;
    if (!drawer) return;
    const isActive = typeof force === 'boolean' ? force : !drawer.classList.contains('active');

    if (isActive) {
        drawer.classList.add('active');
        // Hide chatbot on desktop to prevent overlap
        if (window.innerWidth > 480 && elements.aiAssistant) {
            elements.aiAssistant.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            elements.aiAssistant.style.opacity = '0';
            elements.aiAssistant.style.pointerEvents = 'none';
            elements.aiAssistant.style.transform = 'translateY(20px)';
        }
    } else {
        drawer.classList.remove('active');
        // Restore chatbot on desktop
        if (window.innerWidth > 480 && elements.aiAssistant) {
            elements.aiAssistant.style.opacity = '1';
            elements.aiAssistant.style.pointerEvents = 'auto';
            elements.aiAssistant.style.transform = 'translateY(0)';
        }
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

// Render a menu card with Add button inside the chat
function addMenuCard(item) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', 'bot');
    msgDiv.innerHTML = `
        <div class="msg-content chat-menu-card">
            <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:4px;">
                <strong>${item.icon} ${item.name}</strong>
                <span style="font-weight:800; color:var(--accent-brand);">£${item.price.toFixed(2)}</span>
            </div>
            <p style="font-size:0.88rem; color:var(--text-muted); margin:0 0 8px 0; line-height:1.4;">${item.desc}</p>
            <button class="btn btn-outline add-to-cart-btn" data-id="${item.id}" style="padding:6px 16px; font-size:0.8rem;">Add to Cart</button>
        </div>
    `;
    elements.messagesArea.appendChild(msgDiv);
    elements.messagesArea.scrollTop = elements.messagesArea.scrollHeight;
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
    sessionContext.conversationTurn++;

    setTimeout(() => {
        elements.typingIndicator.style.display = 'none';
        const response = generateResponse(query.toLowerCase());
        addMessage(response, 'bot');
    }, 600 + Math.random() * 600);
}

// --- SMART AI RESPONSE ENGINE ---

function generateResponse(query) {
    const db = LANGUAGES[currentLang];

    // --- CART MANAGEMENT VIA CHAT ---

    // Add item by name
    if (query.match(/add|buy|want|get me|i('|')ll have|order/)) {
        const matched = findItemByName(query);
        if (matched) {
            // Check for quantity
            const qtyMatch = query.match(/(\d+)\s/);
            const qty = qtyMatch ? parseInt(qtyMatch[1]) : 1;
            for (let i = 0; i < qty; i++) addToCart(matched);
            showToast(`**${matched.name}** x${qty} added! 🐵`);
            
            // Smart upsell after adding
            const upsell = getUpsellSuggestion(matched);
            return db.added_to_cart.replace('{item}', `${matched.name} x${qty}`) + (upsell ? `\n\n${upsell}` : '');
        }
    }

    // Remove item
    if (query.match(/remove|delete|take off|drop/)) {
        const matched = findItemByName(query);
        if (matched) {
            const inCart = cart.find(i => i.id === matched.id);
            if (inCart) {
                removeFromCart(matched.id);
                showToast(`${matched.name} removed 🗑️`);
                return db.removed_from_cart.replace('{item}', matched.name);
            }
            return `**${matched.name}** isn't in your cart right now. 🐒`;
        }
    }

    // View cart
    if (query.match(/cart|basket|what('|')s in my|my order|what have i/)) {
        if (cart.length === 0) return db.cart_empty;
        const subtotal = cart.reduce((a, i) => a + (i.price * i.qty), 0);
        const list = cart.map(i => `• ${i.icon || '🍽️'} **${i.name}** x${i.qty} — £${(i.price * i.qty).toFixed(2)}`).join('<br>');
        return `${db.cart_summary}<br>${list}<br><br>**Subtotal: £${subtotal.toFixed(2)}**<br><br>${db.checkout_prompt}`;
    }

    // Checkout
    if (query.match(/checkout|pay|proceed|finish/)) {
        if (cart.length === 0) return db.cart_empty;
        setTimeout(() => {
            toggleCart(false);
            document.getElementById('checkoutModal')?.classList.add('active');
            updateCheckoutSummary();
        }, 800);
        return db.checkout_msg;
    }

    // --- MENU BROWSING ---

    // Order again
    if (query.match(/order again|reorder|last order|previous order|same again/)) {
        if (!lastOrder || lastOrder.length === 0) return db.no_last_order;
        lastOrder.forEach(item => addToCart(item));
        showToast("Previous order re-added! 🔄");
        const list = lastOrder.map(i => `• **${i.name}** x${i.qty}`).join('<br>');
        return `${db.order_again}<br>${list}<br><br>All added back to your cart! ${db.checkout_prompt}`;
    }

    // Budget search
    const budgetMatch = query.match(/under\s*£?(\d+)|less than\s*£?(\d+)|below\s*£?(\d+)|budget\s*£?(\d+)/);
    if (budgetMatch) {
        const budget = parseInt(budgetMatch[1] || budgetMatch[2] || budgetMatch[3] || budgetMatch[4]);
        const results = MENU_DATA.items.filter(i => i.price <= budget);
        if (results.length === 0) return db.nothing_found;
        sessionContext.lastSearchResults = results;
        results.forEach(item => addMenuCard(item));
        return db.budget_intro.replace('{budget}', budget);
    }

    // Halal
    if (query.match(/halal/)) {
        const items = MENU_DATA.items.filter(i => i.tags.includes('halal') && !i.tags.includes('side') && !i.tags.includes('drink'));
        sessionContext.lastCategory = 'halal';
        items.slice(0, 5).forEach(item => addMenuCard(item));
        return db.halal_search;
    }

    // Spicy
    if (query.match(/spicy|hot|heat|chilli|chili/)) {
        const items = MENU_DATA.items.filter(i => i.tags.includes('spicy'));
        sessionContext.lastCategory = 'spicy';
        items.forEach(item => addMenuCard(item));
        return db.spicy_search;
    }

    // Veg / Vegan
    if (query.match(/veg|vegetarian|vegan|plant|green/)) {
        const items = MENU_DATA.items.filter(i => i.tags.includes('veg') || i.tags.includes('vegan'));
        sessionContext.lastCategory = 'veg';
        items.forEach(item => addMenuCard(item));
        return db.veg_search;
    }

    // Breakfast
    if (query.match(/breakfast|morning|brunch/)) {
        const items = MENU_DATA.items.filter(i => i.tags.includes('breakfast'));
        sessionContext.lastCategory = 'breakfast';
        items.forEach(item => addMenuCard(item));
        return db.breakfast_search;
    }

    // Drinks
    if (query.match(/drink|coffee|tea|juice|beverage|latte|cappuccino/)) {
        const items = MENU_DATA.items.filter(i => i.tags.includes('drink'));
        sessionContext.lastCategory = 'drinks';
        items.forEach(item => addMenuCard(item));
        return db.drinks_search;
    }

    // Burgers
    if (query.match(/burger|dog/)) {
        const items = MENU_DATA.items.filter(i => i.category === 'Burgers');
        sessionContext.lastCategory = 'burgers';
        items.forEach(item => addMenuCard(item));
        return "Here are our signature burgers! 🍔";
    }

    // Sides
    if (query.match(/side|fries|chips|nugget|hash/)) {
        const items = MENU_DATA.items.filter(i => i.tags.includes('side'));
        sessionContext.lastCategory = 'sides';
        items.forEach(item => addMenuCard(item));
        return "Here are our sides & extras! 🍟";
    }

    // Bestsellers
    if (query.match(/best|popular|top|recommend|suggest|favourite|favorite/)) {
        const items = MENU_DATA.items.filter(i => i.tags.includes('best-seller') || i.tags.includes('popular'));
        sessionContext.lastCategory = 'bestsellers';
        items.forEach(item => addMenuCard(item));
        return db.bestsellers;
    }

    // Combos
    if (query.match(/combo|deal|value|meal deal|bundle/)) {
        sessionContext.lastCategory = 'combos';
        MENU_DATA.combos.forEach(combo => {
            const msgDiv = document.createElement('div');
            msgDiv.classList.add('message', 'bot');
            msgDiv.innerHTML = `
                <div class="msg-content chat-menu-card">
                    <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:4px;">
                        <strong>🍱 ${combo.name}</strong>
                        <span style="font-weight:800; color:var(--accent-brand);">£${combo.price.toFixed(2)}</span>
                    </div>
                    <p style="font-size:0.88rem; color:var(--text-muted); margin:0 0 4px 0;">${combo.desc}</p>
                    <p style="font-size:0.82rem; color:var(--text-dark); margin:0 0 8px 0;">Includes: ${combo.items.join(', ')}</p>
                    <button class="btn btn-outline add-to-cart-btn" data-id="${combo.id}" style="padding:6px 16px; font-size:0.8rem;">Add Combo</button>
                </div>
            `;
            elements.messagesArea.appendChild(msgDiv);
        });
        elements.messagesArea.scrollTop = elements.messagesArea.scrollHeight;
        return db.combos;
    }

    // Full menu
    if (query.match(/menu|all items|everything|show me/)) {
        sessionContext.lastCategory = 'menu';
        const mains = MENU_DATA.items.filter(i => !i.tags.includes('side') && !i.tags.includes('drink'));
        mains.forEach(item => addMenuCard(item));
        return db.welcome;
    }

    // Hours
    if (query.match(/hour|time|open|close|when/)) {
        return db.hours;
    }

    // Book / Reserve
    if (query.match(/book|reserve|table/)) {
        window.location.hash = "#reserve";
        return db.booking_msg;
    }

    // Greeting
    if (query.match(/^(hi|hello|hey|yo|sup|hiya|good morning|good afternoon|good evening)/)) {
        sessionContext.hasBeenGreeted = true;
        if (userName) return `Hey **${userName}**! 🐵 What can I get you today? Try asking for our **Bestsellers** or say **"suggest me"**!`;
        return db.welcome;
    }

    // Thanks
    if (query.match(/thank|thanks|cheers|ta/)) {
        return "You're welcome! 🐵 Anything else I can help with?";
    }

    // Help
    if (query.match(/help|what can you do|options/)) {
        return "I can help you with:\n• 🍽️ Browse the **Menu**\n• 🔥 Find **Spicy** or 🌿 **Veg** items\n• 🍳 **Breakfast** menu\n• ☕ **Drinks**\n• 🥩 **Halal** options\n• 🍱 **Combos** & deals\n• 💡 **Suggest** a meal\n• 🛒 Manage your **Cart**\n• 💳 **Checkout**\n• 📅 **Book** a table\n\nJust ask naturally! 🐒";
    }

    // Fallback
    return db.no_understand;
}

// --- SMART HELPERS ---

function findItemByName(query) {
    // Try exact match first, then partial
    let match = MENU_DATA.items.find(i => query.includes(i.name.toLowerCase()));
    if (match) return match;

    // Partial matching by keywords
    const keywords = {
        'classic': 1, 'monkeys': 1, '3 monkeys': 1,
        'jerk': 6, 'louisiana': 7, 'beef dog': 8,
        'full monkey': 9, 'full breakfast': 9, 'muffin': 3,
        'bombay': 2, 'menemen': 5,
        'sizzler': 11, 'portuguese': 12, 'chicken rice': 12, 'chicken and rice': 12,
        'falafel': 4,
        'chips': 20, 'salt pepper': 21, 'halloumi': 22, 'sweet potato': 23,
        'nuggets': 24, 'chilli cheese': 25, 'hash': 26,
        'tea': 10, 'coffee': 10, 'latte': 27, 'cappuccino': 27,
        'juice': 28, 'soft drink': 29, 'coke': 29, 'pepsi': 29, 'fanta': 29, 'sprite': 29
    };

    for (const [keyword, id] of Object.entries(keywords)) {
        if (query.includes(keyword)) {
            return MENU_DATA.items.find(i => i.id === id);
        }
    }
    return null;
}

function getUpsellSuggestion(item) {
    const db = LANGUAGES[currentLang];
    // If they added a main, suggest a side
    if (['Burgers', 'Wraps', 'Mains', 'Breakfast'].includes(item.category)) {
        const hasSide = cart.some(i => i.tags?.includes('side'));
        const hasDrink = cart.some(i => i.tags?.includes('drink'));
        if (!hasSide) return db.upsell_side;
        if (!hasDrink) return db.upsell_drink;
    }
    return null;
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

    // March 2026 starts on Sunday (0 empty slots if Sun-Sat)
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

// --- MOBILE BOTTOM NAV FUNCTIONALITY ---
function setupBottomNav() {
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    if (!navItems.length) return;

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Special handlers for Chat and Cart
            if (item.id === 'mobileChatBtn') {
                toggleChat(true);
                setActiveNavItem(item);
                return;
            }
            if (item.id === 'mobileCartBtn') {
                toggleChat(false); // Close chat when opening cart
                toggleCart(true);
                setActiveNavItem(item);
                return;
            }

            // Standard section navigation
            const href = item.getAttribute('href');
            if (href && href.startsWith('#')) {
                toggleChat(false); // Close chat when navigating to other sections
                const section = document.querySelector(href);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                    setActiveNavItem(item);
                }
            }
        });
    });

    // Scroll-based active section detection
    const sections = ['home', 'menu', 'reserve'].map(id => document.getElementById(id)).filter(Boolean);
    if (sections.length) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const matching = document.querySelector(`.bottom-nav .nav-item[data-section="${id}"], .bottom-nav .nav-item[href="#${id}"]`);
                    if (matching) setActiveNavItem(matching);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-10% 0px -60% 0px'
        });
        sections.forEach(s => navObserver.observe(s));
    }
}

function setActiveNavItem(activeItem) {
    document.querySelectorAll('.bottom-nav .nav-item').forEach(n => n.classList.remove('active'));
    activeItem.classList.add('active');
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


// --- AUTO-IMPROVEMENT AI GROWTH ENGINE ---
class GrowthEngine {
    constructor() {
        this.preferences = JSON.parse(localStorage.getItem('monkeyGrowthPrefs')) || {
            viewedCategories: {},
            lastSection: 'home',
            conversionTriggers: 0
        };
        this.idleTimers = {};
        this.currentSection = null;
    }

    init() {
        this.setupIntersectionObservers();
        this.setupFrictionListeners();
        console.log("GrowthEngine: Active and tracking user behavior.");
    }

    setupIntersectionObservers() {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.handleSectionEnter(entry.target.id);
                } else {
                    this.handleSectionLeave(entry.target.id);
                }
            });
        }, { threshold: 0.6 });

        sections.forEach(sec => observer.observe(sec));
    }

    handleSectionEnter(sectionId) {
        if (!sectionId) return;
        this.currentSection = sectionId;
        this.preferences.lastSection = sectionId;
        this.savePreferences();

        // Friction / Hesitation Detection
        if (sectionId === 'reserve') {
            this.idleTimers['reserve'] = setTimeout(() => {
                this.triggerContextualBot(
                    "Need a table? 📅 I can check availability for your group!",
                    "reserve_help"
                );
            }, 10000); // 10s idle on reserve -> offer help
        }
    }

    handleSectionLeave(sectionId) {
        if (this.idleTimers[sectionId]) {
            clearTimeout(this.idleTimers[sectionId]);
        }
    }

    setupFrictionListeners() {
        // Track Hero CTA Hesitation
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mousemove', this.debounce(() => {
                if (this.currentSection === 'home' || !this.currentSection) {
                    if (!this.heroPulseTriggered) {
                        this.heroPulseTriggered = true;
                        setTimeout(() => {
                            if (this.currentSection === 'home' || !this.currentSection) {
                                const btn = document.getElementById('orderHeroBtn');
                                if (btn && !cart.length) {
                                    btn.classList.add('ai-suggest-pulse');
                                    // Remove pulse after 4s
                                    setTimeout(() => btn.classList.remove('ai-suggest-pulse'), 4000);
                                }
                            }
                        }, 8000);
                    }
                }
            }, 1000));
        }
    }

    triggerContextualBot(message, intent) {
        if (!chatActive) {
            toggleChat(true);
            setTimeout(() => {
                addMessage(message, 'bot');
            }, 500);
        }
    }

    savePreferences() {
        localStorage.setItem('monkeyGrowthPrefs', JSON.stringify(this.preferences));
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => { clearTimeout(timeout); func(...args); };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}


// RUN INIT (single entry point — no duplicate)
if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } 
else { init(); }
