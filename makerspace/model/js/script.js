// ==================== CHATBOT FUNCTIONALITY ====================

class MakerBot {
  constructor() {
    this.window = document.getElementById('chatbot-window');
    this.trigger = document.getElementById('chatbot-trigger');
    this.close = document.getElementById('chatbot-close');
    this.messagesContainer = document.getElementById('chatbot-messages');
    this.input = document.getElementById('chatbot-input');
    this.sendBtn = document.getElementById('chatbot-send');

    this.init();
  }

  init() {
    if (this.trigger) this.trigger.addEventListener('click', () => this.toggleChat());
    if (this.close) this.close.addEventListener('click', () => this.toggleChat());
    if (this.sendBtn) this.sendBtn.addEventListener('click', () => this.sendMessage());
    if (this.input) this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
  }

  toggleChat() {
    this.window.classList.toggle('hidden');
    if (!this.window.classList.contains('hidden')) {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
      this.input.focus();
    }
  }

  sendMessage() {
    const message = this.input.value.trim();
    if (!message) return;

    // Add user message
    this.addMessage(message, 'user');
    this.input.value = '';

    // Generate bot response
    setTimeout(() => {
      const response = this.generateResponse(message);
      this.addMessage(response, 'bot');
    }, 500);
  }

  addMessage(text, sender) {
    const messageEl = document.createElement('div');

    // Added break-words and whitespace-pre-wrap to force text to stay inside the bubbles
    messageEl.className = sender === 'user'
      ? 'ml-auto bg-primary text-white rounded-lg p-3 max-w-[85%] text-sm shadow-sm break-words whitespace-pre-wrap'
      : 'bg-primary/20 text-gray-200 border border-primary/20 rounded-lg p-3 max-w-[85%] text-sm shadow-sm break-words whitespace-pre-wrap';

    messageEl.textContent = text;

    this.messagesContainer.appendChild(messageEl);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  generateResponse(userInput) {
    const input = userInput.toLowerCase().trim();
    if (!input) return "Please type a question and I'll do my best to help!";

    // Loop through the CHATBOT_RESPONSES defined in data.js
    if (typeof CHATBOT_RESPONSES !== 'undefined') {
      for (const key in CHATBOT_RESPONSES) {
        const entry = CHATBOT_RESPONSES[key];
        // Check if any of the keywords for this entry exist in the user's input
        if (entry.keywords.some(kw => input.includes(kw))) {
          return entry.response;
        }
      }
    }

    // Default fallback if no keywords match
    return "I'm not sure about that. Try asking about STEAM, FDE, LearnOBots, Maker Space, schools, or training programs!";
  }
}

// ==================== PAGE INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Chatbot
  new MakerBot();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Intersection Observer for fade animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-target').forEach(el => {
    observer.observe(el);
  });
});

// ==================== UTILITY FUNCTIONS ====================

// Format date
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}