// CONFIGURATION - Add your links here
const SOCIAL_DATA = {
    youtube: [
        { name: "GAUGE GAMING", link: "#", icon: "fa-youtube" },
        { name: "XIRIUZ750", link: "#", icon: "fa-youtube" }
    ],
    tiktok: [
        { name: "ZANITY CLIPS", link: "#", icon: "fa-tiktok" }
    ],
    twitch: [
        { name: "LIVE STREAM", link: "#", icon: "fa-twitch" },
        { name: "X NEWS", link: "#", icon: "fa-x-twitter" }
    ],
    insta: [
        { name: "GALLERY", link: "#", icon: "fa-instagram" }
    ]
};

function showHub(hubId) {
    // Hide all views
    document.querySelectorAll('.hub-view').forEach(v => v.classList.remove('active'));
    
    // Show target view
    const target = document.getElementById('view-' + hubId);
    target.classList.add('active');
    
    // Update header status
    document.getElementById('current-view-name').textContent = hubId.toUpperCase();

    // Populate the grid if it's a social hub
    if (SOCIAL_DATA[hubId]) {
        renderGrid(hubId);
    }
}

function renderGrid(hubId) {
    const grid = document.getElementById(hubId.substring(0,2) + '-grid');
    if (!grid) return;

    grid.innerHTML = SOCIAL_DATA[hubId].map(item => `
        <div class="hub-card">
            <i class="fab ${item.icon}" style="font-size: 2rem; color: var(--cyan-trim)"></i>
            <h3>${item.name}</h3>
            <a href="${item.link}" target="_blank" class="nav-btn" style="display:block; text-align:center; margin-top:10px">ACCESS LINK</a>
        </div>
    `).join('');
}

// Set default view on load
document.addEventListener('DOMContentLoaded', () => showHub('main'));
           <h3>${ch.name}</h3>
                    <p>${parseInt(stats.subscriberCount).toLocaleString()} SUBS</p>
                    <a href="https://youtube.com/channel/${ch.id}" target="_blank" class="visit-btn">VIEW DATASTREAM</a>
                </div>
            `;
        } catch (err) { console.error("API Error", err); }
    }
    grid.innerHTML = html;
}

// 4. AUTO-LOAD LATEST VIDEO ON DASHBOARD
async function loadLatestVideo() {
    const container = document.getElementById('latest-video-container');
    try {
        const resp = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNELS[0].id}&part=snippet,id&order=date&maxResults=1`);
        const data = await resp.json();
        const video = data.items[0];

        container.innerHTML = `
            <div class="video-card">
                <span class="tag">LATEST_TRANSMISSION</span>
                <img src="${video.snippet.thumbnails.high.url}" style="width:100%">
                <h4>${video.snippet.title}</h4>
                <a href="https://youtu.be/${video.id.videoId}" target="_blank" class="toggle-link">WATCH_NOW</a>
            </div>
        `;
    } catch (e) { container.innerHTML = "OFFLINE"; }
}

// Initial Load
document.addEventListener('DOMContentLoaded', loadLatestVideo);
('engage-count');
    const engageBar = document.getElementById('engage-bar');
    
    if (engageCount) engageCount.textContent = rate.toFixed(1) + '%';
    if (engageBar) engageBar.style.width = (rate * 10) + '%';
}

function updateGrowthRate(rate) {
    const growthCount = document.getElementById('growth-count');
    const growthBar = document.getElementById('growth-bar');
    
    if (growthCount) growthCount.textContent = '+' + rate.toFixed(1) + '%';
    if (growthBar) growthBar.style.width = (rate * 5) + '%';
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = formatNumber(Math.floor(current));
    }, 30);
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function animateProgressBars() {
    // Trigger animations after a short delay
    setTimeout(() => {
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }, 500);
}

// ======================
// Video List Loading
// ======================
function loadVideoList() {
    const videoList = document.getElementById('video-list');
    if (!videoList) return;
    
    // Simulate loading videos
    videoList.innerHTML = '<div class="loading-text">Fetching latest videos...</div>';
    
    setTimeout(() => {
        const videos = [
            { title: 'Epic Gaming Montage #47', date: '2 days ago', url: '#' },
            { title: 'Live Stream Highlights', date: '5 days ago', url: '#' },
            { title: 'Community Tournament Finals', date: '1 week ago', url: '#' },
            { title: 'Behind the Scenes Setup Tour', date: '1 week ago', url: '#' },
            { title: 'Top 10 Moments of the Month', date: '2 weeks ago', url: '#' }
        ];
        
        videoList.innerHTML = videos.map(video => `
            <div class="video-item" onclick="window.open('${video.url}', '_blank')">
                <div class="video-title">${video.title}</div>
                <div class="video-date">${video.date}</div>
            </div>
        `).join('');
    }, 1000);
}

// ======================
// Discord Stats
// ======================
function loadDiscordStats() {
    setTimeout(() => {
        updateDiscordMembers(10234);
        updateDiscordOnline(1456);
    }, 800);
}

function updateDiscordMembers(count) {
    const membersElement = document.getElementById('discord-members');
    if (membersElement) {
        animateCounter(membersElement, count);
    }
}

function updateDiscordOnline(count) {
    const onlineElement = document.getElementById('discord-online');
    if (onlineElement) {
        animateCounter(onlineElement, count);
    }
}

// ======================
// Feature Buttons
// ======================
function initializeFeatureButtons() {
    const featureButtons = document.querySelectorAll('.feature-btn');
    
    featureButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.feature-card');
            const title = card.querySelector('h3').textContent;
            
            // Add pulse animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
            
            console.log(`Feature clicked: ${title}`);
            showNotification(`${title} feature activated!`);
        });
    });
}

// ======================
// Modal System
// ======================
function initializeModals() {
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modal) {
    if (typeof modal === 'string') {
        modal = document.getElementById(modal);
    }
    if (modal) {
        modal.classList.remove('active');
    }
}

// ======================
// Notifications
// ======================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: rgba(112, 0, 255, 0.9);
        border: 2px solid #00fff2;
        border-radius: 8px;
        color: #fff;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 0 25px rgba(0, 255, 242, 0.5);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ======================
// Glitch Effect
// ======================
function triggerGlitch(element) {
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = 'glitch 0.3s ease';
    }, 10);
}

// ======================
// Member List (for Community section)
// ======================
function loadMemberList() {
    const memberList = document.getElementById('member-list');
    if (!memberList) return;
    
    memberList.innerHTML = '<div class="loading-text">Loading members...</div>';
    
    setTimeout(() => {
        const members = [
            { name: 'ZanityKing', status: 'online', level: 50 },
            { name: 'ChaosQueen', status: 'online', level: 48 },
            { name: 'NeonRebel', status: 'idle', level: 45 },
            { name: 'PixelWarrior', status: 'online', level: 42 },
            { name: 'CyberDragon', status: 'offline', level: 40 }
        ];
        
        memberList.innerHTML = members.map(member => `
            <div class="member-item">
                <div class="member-status ${member.status}"></div>
                <div class="member-info">
                    <div class="member-name">${member.name}</div>
                    <div class="member-level">Level ${member.level}</div>
                </div>
            </div>
        `).join('');
    }, 1000);
}

// ======================
// Admin Panel Functions
// ======================
function openAdminLogin() {
    openModal('admin-login-modal');
}

function handleAdminLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    
    // Simple authentication (replace with actual authentication)
    if (username === 'admin' && password === 'zanity2026') {
        isAdminLoggedIn = true;
        closeModal('admin-login-modal');
        openModal('admin-panel-modal');
        loadAdminData();
        showNotification('Admin access granted!', 'success');
    } else {
        showError('Invalid credentials!');
    }
}

function loadAdminData() {
    // Load admin panel data
    console.log('Loading admin panel data...');
}

function showError(message) {
    const errorElement = document.querySelector('.error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('active');
        
        setTimeout(() => {
            errorElement.classList.remove('active');
        }, 3000);
    }
}

// ======================
// Utility Functions
// ======================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!');
    });
}

// ======================
// Auto-refresh Stats
// ======================
setInterval(() => {
    if (currentSection === 'home' || currentSection === 'community') {
        loadDiscordStats();
    }
}, 60000); // Refresh every minute

// ======================
// Keyboard Shortcuts
// ======================
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for quick search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        showNotification('Search feature coming soon!');
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            closeModal(activeModal);
        }
    }
});

// ======================
// Console Easter Egg
// ======================
console.log('%c⚡ THE REST OF ZANITY ⚡', 'color: #00fff2; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #00fff2;');
console.log('%cNEURAL INTERFACE v2.0 ACTIVE', 'color: #7000ff; font-size: 14px; font-weight: bold;');
console.log('%cWelcome to the matrix...', 'color: #00fff2; font-style: italic;');

// ======================
// Export functions for global use
// ======================
window.openModal = openModal;
window.closeModal = closeModal;
window.showNotification = showNotification;
window.openAdminLogin = openAdminLogin;
window.handleAdminLogin = handleAdminLogin;{
        const statusClass = member.status === 'online' ? 'status-online' : 
                          member.status === 'idle' ? 'status-idle' : 'status-dnd';
        const statusIcon = member.status === 'online' ? 'circle' : 
                         member.status === 'idle' ? 'moon' : 'minus-circle';
        
        memberHTML += `
            <div class="video-item member-item">
                <div class="member-header">
                    <span class="member-name">${member.name}</span>
                    <span class="${statusClass}"><i class="fas fa-${statusIcon}"></i></span>
                </div>
                <div class="member-activity">${member.activity}</div>
            </div>
        `;
    });
    
    memberList.innerHTML = memberHTML;
    
    // Add click handlers
    document.querySelectorAll('.member-item').forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'translateX(15px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
}, 1500);

// Animate Discord stats
setTimeout(() => {
    const discordMembers = Math.floor(Math.random() * 5000) + 10000;
    const discordOnline = Math.floor(Math.random() * 1000) + 2000;
    
    animateValue('discord-members', 0, discordMembers, 1500);
    animateValue('discord-online', 0, discordOnline, 1500);
}, 2000);

// Feature card interactions
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', function() {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(0, 255, 242, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(20);
            opacity: 0;
        }
    }
    
    .member-item {
        cursor: pointer;
    }
    
    .member-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
    }
    
    .member-name {
        font-weight: bold;
        color: #fff;
    }
    
    .member-activity {
        font-size: 0.8rem;
        color: var(--cyan-trim);
        opacity: 0.8;
    }
    
    .status-idle {
        color: #ffa500;
    }
    
    .status-dnd {
        color: #f00;
    }
    
    .feed-platform.discord {
        background: #5865F2;
    }
    
    .feed-platform.event {
        background: var(--purple-glow);
    }
    
    .feed-platform.achievement {
        background: #ffa500;
    }
`;
document.head.appendChild(style);

// Simulate real-time active member updates
setInterval(() => {
    const activeCount = Math.floor(Math.random() * 200) + 1800;
    const activeElement = document.getElementById('active-count');
    if (activeElement) {
        activeElement.textContent = activeCount.toLocaleString();
    }
}, 10000);

// Add hover effects
document.querySelectorAll('.ui-button, .feature-btn, .cta-btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.2s ease';
    });
});

// Parallax effect for community logo
document.addEventListener('mousemove', (e) => {
    const hex = document.querySelector('.profile-hex');
    if (hex) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        hex.style.transform = `translate(-50%, -50%) rotate(${moveX}deg) translateY(${moveY}px)`;
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header glow on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('.ui-header');
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.boxShadow = '0 5px 40px rgba(112, 0, 255, 0.5)';
    } else {
        header.style.boxShadow = '0 0 30px rgba(112, 0, 255, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Console Easter Egg
console.log('%cTHE REST OF ZANITY', 'color: #00fff2; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #00fff2;');
console.log('%cCommunity Status: THRIVING', 'color: #0f0; font-size: 14px;');
console.log('%cWelcome to TROZ...', 'color: #7000ff; font-size: 12px;');
console.log('%cJoin the chaos at discord.gg/troz', 'color: #fff; font-size: 12px;');

// Dynamic greeting based on time
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = 'THRIVING';
    
    if (hour >= 5 && hour < 12) {
        greeting = 'GOOD MORNING';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'GOOD AFTERNOON';
    } else if (hour >= 18 && hour < 22) {
        greeting = 'GOOD EVENING';
    } else {
        greeting = 'NIGHT OWL MODE';
    }
    
    const statusElement = document.querySelector('.status-value');
    if (statusElement) {
        statusElement.textContent = greeting;
    }
}

updateGreeting();

// Simulate member joins (notification effect)
setInterval(() => {
    if (Math.random() > 0.7) {
        const memberCount = document.getElementById('member-count');
        if (memberCount) {
            const currentCount = parseInt(memberCount.textContent.replace(/,/g, ''));
            const newCount = currentCount + Math.floor(Math.random() * 3) + 1;
            memberCount.textContent = newCount.toLocaleString();
            
            // Flash effect
            memberCount.style.color = var.cyan-trim;
            memberCount.style.textShadow = '0 0 20px var(--cyan-trim)';
            setTimeout(() => {
                memberCount.style.color = '#fff';
                memberCount.style.textShadow = 'none';
            }, 500);
        }
    }
}, 15000);

// Performance monitor for status
setInterval(() => {
    const systemStatus = document.querySelector('.status-value');
    if (systemStatus && Math.random() > 0.95) {
        const originalText = systemStatus.textContent;
        systemStatus.style.color = '#ff0';
        systemStatus.textContent = 'UPDATING...';
        setTimeout(() => {
            systemStatus.style.color = '#0f0';
            systemStatus.textContent = originalText;
        }, 800);
    }
}, 20000);