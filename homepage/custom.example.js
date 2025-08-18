// Edgerunners Anime Style JavaScript
// Adds dynamic visual effects inspired by Cyberpunk: Edgerunners

// Edgerunners color palette
const edgerunnersColors = {
    yellow: '#FFFF00',
    pink: '#FF0080', 
    cyan: '#00FFFF',
    orange: '#FF6600',
    purple: '#8A2BE2'
};

// Enhanced cyberpunk glow effects with color cycling
function addEdgerunnersGlow() {
    // Add animated glow to all titles
    const titles = document.querySelectorAll('h1, h2, h3, .group-title, .section-header');
    titles.forEach((title, index) => {
        const colors = Object.values(edgerunnersColors);
        const primaryColor = colors[index % colors.length];
        const secondaryColor = colors[(index + 1) % colors.length];
        
        title.style.color = primaryColor;
        title.style.textShadow = `
            0 0 5px ${primaryColor},
            0 0 10px ${primaryColor},
            0 0 15px ${primaryColor},
            2px 0 0 ${secondaryColor},
            -2px 0 0 ${colors[(index + 2) % colors.length]}
        `;
        title.style.fontWeight = 'bold';
        title.style.textTransform = 'uppercase';
        title.style.letterSpacing = '2px';
    });
    
    // Add cursor effect to greeting
    const greeting = document.querySelector('.greeting, [class*="greeting"], [data-testid="greeting"]');
    if (greeting && !greeting.querySelector('.edgerunners-cursor')) {
        const cursor = document.createElement('span');
        cursor.className = 'edgerunners-cursor';
        cursor.innerHTML = ' <span style="color: #FFFF00; animation: edgerunnersBlink 0.5s infinite; text-shadow: 0 0 10px #FFFF00;">█</span>';
        greeting.appendChild(cursor);
    }
    
    // Add network activity indicators
    addNetworkIndicators();
    
    // Add floating particles
    if (!document.querySelector('.edgerunners-particles')) {
        createFloatingParticles();
    }
}

// Add network activity indicators to service cards
function addNetworkIndicators() {
    const serviceCards = document.querySelectorAll('.service-card, [class*="service"]');
    serviceCards.forEach((card, index) => {
        if (!card.querySelector('.network-indicator')) {
            const indicator = document.createElement('div');
            indicator.className = 'network-indicator';
            indicator.innerHTML = '◉';
            indicator.style.cssText = `
                position: absolute;
                top: 8px;
                right: 8px;
                color: ${Object.values(edgerunnersColors)[index % 5]};
                font-size: 12px;
                animation: edgerunnersNetworkPulse 1s infinite;
                text-shadow: 0 0 10px currentColor;
                z-index: 10;
            `;
            
            // Make parent relative if not already
            if (getComputedStyle(card).position === 'static') {
                card.style.position = 'relative';
            }
            
            card.appendChild(indicator);
        }
    });
}

// Create floating particles for atmosphere
function createFloatingParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'edgerunners-particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    
    // Create particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const color = Object.values(edgerunnersColors)[Math.floor(Math.random() * 5)];
        const size = Math.random() * 3 + 1;
        const animationDuration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            box-shadow: 0 0 10px ${color};
            left: ${Math.random() * 100}vw;
            animation: float ${animationDuration}s infinite linear ${delay}s;
        `;
        
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// Add glitch effect to random elements
function addGlitchEffects() {
    const elements = document.querySelectorAll('.service-card, .widget');
    elements.forEach((element, index) => {
        if (Math.random() < 0.3) { // 30% chance of glitch
            element.addEventListener('mouseenter', () => {
                element.style.animation = 'edgerunnersGlitch 0.3s ease-in-out';
                setTimeout(() => {
                    element.style.animation = '';
                }, 300);
            });
        }
    });
}

// Create data stream effect
function createDataStream() {
    if (document.querySelector('.data-stream')) return;
    
    const stream = document.createElement('div');
    stream.className = 'data-stream';
    stream.style.cssText = `
        position: fixed;
        top: 0;
        right: 20px;
        width: 2px;
        height: 100vh;
        background: linear-gradient(to bottom, transparent, ${edgerunnersColors.cyan}, transparent);
        animation: dataFlow 2s infinite linear;
        z-index: 1;
        pointer-events: none;
    `;
    
    document.body.appendChild(stream);
}

// Enhanced blinking and animation styles
const edgerunnersStyles = document.createElement('style');
edgerunnersStyles.innerHTML = `
    @keyframes edgerunnersBlink {
        0%, 50% { opacity: 1; transform: scale(1); }
        51%, 100% { opacity: 0.3; transform: scale(1.1); }
    }
    
    @keyframes edgerunnersNetworkPulse {
        0% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.5; transform: scale(1.3); }
        100% { opacity: 1; transform: scale(1); }
    }
    
    @keyframes float {
        0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-10vh) translateX(50px); opacity: 0; }
    }
    
    @keyframes dataFlow {
        0% { transform: translateY(-100vh); }
        100% { transform: translateY(100vh); }
    }
    
    @keyframes edgerunnersGlitch {
        0%, 100% { transform: translate(0) scale(1); filter: hue-rotate(0deg); }
        20% { transform: translate(-2px, 2px) scale(1.01); filter: hue-rotate(90deg); }
        40% { transform: translate(-2px, -2px) scale(0.99); filter: hue-rotate(180deg); }
        60% { transform: translate(2px, 2px) scale(1.01); filter: hue-rotate(270deg); }
        80% { transform: translate(2px, -2px) scale(0.99); filter: hue-rotate(360deg); }
    }
    
    .service-card, .bookmark-card {
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .widget {
        backdrop-filter: blur(15px) saturate(2);
    }
`;
document.head.appendChild(edgerunnersStyles);

// Initialize all effects
function initializeEdgerunners() {
    addEdgerunnersGlow();
    addGlitchEffects();
    createDataStream();
    
    // Add hover effects to service cards
    const cards = document.querySelectorAll('.service-card, .bookmark-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = `
                0 0 20px ${edgerunnersColors.pink},
                0 0 40px ${edgerunnersColors.yellow},
                0 0 60px ${edgerunnersColors.cyan}
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
        });
    });
}

// Run initialization when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEdgerunners);
} else {
    initializeEdgerunners();
}

// Re-run effects periodically for dynamic content
setInterval(() => {
    addEdgerunnersGlow();
}, 3000);

// Add some random glitch effects
setInterval(() => {
    const elements = document.querySelectorAll('.service-card, .widget, .greeting');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    if (randomElement && Math.random() < 0.1) { // 10% chance every 5 seconds
        randomElement.style.animation = 'edgerunnersGlitch 0.5s ease-in-out';
        setTimeout(() => {
            randomElement.style.animation = '';
        }, 500);
    }
}, 5000);

console.log('🌃 Edgerunners cyberpunk theme loaded! Welcome to Night City, choom!');
