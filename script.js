// script.js - JavaScript for dynamic elements in The Rest of Zanity website

document.addEventListener('DOMContentLoaded', function() {
    // Mock data for main page stats (replace with real API calls if needed)
    const mainStats = {
        subscribers: 12345,
        views: 678901,
        engagement: 85,
        growth: 12,
        discordMembers: 10234,
        discordOnline: 1456,
        recentVideos: [
            { title: 'Video 1: Epic Win', link: '#' },
            { title: 'Video 2: Fail Compilation', link: '#' },
            { title: 'Video 3: Stream Highlights', link: '#' }
        ]
    };

    // Data for YouTube Hub channels
    const channels = [
        {
            name: 'Gauge Gaming',
            subs: '187 subscribers',
            pfp: 'https://via.placeholder.com/100',
            link: 'https://youtube.com/@gauge_gaming'
        },
        {
            name: 'Xiriuz',
            subs: 'N/A subscribers',
            pfp: 'https://via.placeholder.com/100',
            link: 'https://youtube.com/@xiriuz750'
        },
        {
            name: 'DinoThugg',
            subs: '1.33K subscribers',
            pfp: 'https://via.placeholder.com/100',
            link: 'https://youtube.com/@dinothugg'
        },
        {
            name: 'BLUEEY',
            subs: 'N/A subscribers',
            pfp: 'https://via.placeholder.com/100',
            link: 'https://youtube.com/@blueey36'
        },
        {
            name: 'Mallyalien',
            subs: '339 subscribers',
            pfp: 'https://via.placeholder.com/100',
            link: 'https://youtube.com/@mallyalien_offical'
        },
        {
            name: 'LORD MATHIAS',
            subs: '652 subscribers',
            pfp: 'https://via.placeholder.com/100',
            link: 'https://youtube.com/@1lordmathias'
        }
    ];

    // Update main page stats if elements exist
    const subHeader = document.getElementById('sub-header');
    if (subHeader) subHeader.innerText = mainStats.subscribers.toLocaleString();

    const viewCount = document.getElementById('view-count');
    if (viewCount) viewCount.innerText = mainStats.views.toLocaleString();

    const subCount = document.getElementById('sub-count');
    if (subCount) subCount.innerText = mainStats.subscribers.toLocaleString();

    const engageCount = document.getElementById('engage-count');
    if (engageCount) engageCount.innerText = `${mainStats.engagement}%`;

    const growthCount = document.getElementById('growth-count');
    if (growthCount) growthCount.innerText = `+${mainStats.growth}%`;

    // Animate progress bars if elements exist
    const subBar = document.getElementById('sub-bar');
    if (subBar) subBar.style.width = `${Math.min(mainStats.subscribers / 100000 * 100, 100)}%`;

    const engageBar = document.getElementById('engage-bar');
    if (engageBar) engageBar.style.width = `${mainStats.engagement}%`;

    const growthBar = document.getElementById('growth-bar');
    if (growthBar) growthBar.style.width = `${mainStats.growth * 5}%`; // Scaled for visibility

    // Update Discord stats if elements exist
    const discordMembers = document.getElementById('discord-members');
    if (discordMembers) discordMembers.innerText = mainStats.discordMembers.toLocaleString();

    const discordOnline = document.getElementById('discord-online');
    if (discordOnline) discordOnline.innerText = mainStats.discordOnline.toLocaleString();

    // Populate recent uploads if element exists
    const videoList = document.getElementById('video-list');
    if (videoList) {
        videoList.innerHTML = ''; // Clear loading text
        mainStats.recentVideos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');
            videoItem.innerHTML = `
                <a href="\( {video.link}" target="_blank"> \){video.title}</a>
            `;
            videoList.appendChild(videoItem);
        });
    }

    // If on YouTube Hub page, update channel cards dynamically
    const featureGrid = document.querySelector('.feature-grid');
    if (featureGrid && document.title.includes('YouTube Hub')) {
        featureGrid.innerHTML = ''; // Clear existing cards
        channels.forEach(channel => {
            const card = document.createElement('div');
            card.classList.add('feature-card');
            card.innerHTML = `
                <img src="\( {channel.pfp}" alt=" \){channel.name} PFP" class="feature-icon">
                <h3>${channel.name}</h3>
                <p>${channel.subs}</p>
                <a href="${channel.link}" target="_blank" class="feature-btn">Visit Channel</a>
            `;
            featureGrid.appendChild(card);
        });
    }

    // Navigation functionality (mock, as sections aren't implemented)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            // Add logic to switch sections if needed
        });
    });
});
                <button class="admin-delete-btn" onclick="deleteLink(${link.id})">
                    <i class="fas fa-trash"></i> DELETE
                </button>
            </div>
        </div>
    `).join('');

    // Load Announcements
    const announcementsList = document.getElementById('announcements-list');
    announcementsList.innerHTML = adminData.announcements.map(ann => `
        <div class="admin-item">
            <div class="admin-item-info">
                <div class="admin-item-title">
                    <span style="background: var(--purple-glow); color: #000; padding: 3px 8px; border-radius: 3px; font-size: 0.8rem; margin-right: 10px;">
                        ${ann.badge}
                    </span>
                    ${ann.text}
                </div>
            </div>
            <div class="admin-item-actions">
                <button class="admin-delete-btn" onclick="deleteAnnouncement(${ann.id})">
                    <i class="fas fa-trash"></i> DELETE
                </button>
            </div>
        </div>
    `).join('');

    // Load Events
    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = adminData.events.map(event => `
        <div class="admin-item">
            <div class="admin-item-info">
                <div class="admin-item-title">
                    <span style="color: var(--purple-glow); font-weight: bold; margin-right: 10px;">${event.day}</span>
                    ${event.name}
                </div>
            </div>
            <div class="admin-item-actions">
                <button class="admin-delete-btn" onclick="deleteEvent(${event.id})">
                    <i class="fas fa-trash"></i> DELETE
                </button>
            </div>
        </div>
    `).join('');
}

// Delete Functions
function deleteLink(id) {
    if (confirm('Delete this link?')) {
        adminData.links = adminData.links.filter(link => link.id !== id);
        loadAdminData();
        updateQuickLinks();
    }
}

function deleteAnnouncement(id) {
    if (confirm('Delete this announcement?')) {
        adminData.announcements = adminData.announcements.filter(ann => ann.id !== id);
        loadAdminData();
        updateAnnouncements();
    }
}

function deleteEvent(id) {
    if (confirm('Delete this event?')) {
        adminData.events = adminData.events.filter(event => event.id !== id);
        loadAdminData();
        updateSchedule();
    }
}

// Update Live Content
function updateQuickLinks() {
    const quickLinksBody = document.querySelector('.left-panel .panel-body');
    quickLinksBody.innerHTML = adminData.links.map(link => `
        <a href="${link.url}" class="ui-button" target="_blank">
            <i class="${link.icon}"></i> ${link.title}
        </a>
    `).join('');
}

function updateAnnouncements() {
    const announcementsCard = document.querySelector('.info-panels .info-card');
    const announcementsHTML = adminData.announcements.slice(0, 3).map(ann => `
        <div class="announcement-item">
            <span class="announcement-badge">${ann.badge}</span>
            <p>${ann.text}</p>
        </div>
    `).join('');
    
    announcementsCard.innerHTML = `
        <h3><i class="fas fa-bullhorn"></i> ANNOUNCEMENTS</h3>
        ${announcementsHTML}
    `;
}

function updateSchedule() {
    const scheduleCard = document.querySelectorAll('.info-panels .info-card')[1];
    const scheduleHTML = adminData.events.map(event => `
        <div class="schedule-item">
            <span class="day">${event.day}</span>
            <span class="time">${event.name}</span>
        </div>
    `).join('');
    
    scheduleCard.innerHTML = `
        <h3><i class="fas fa-clock"></i> WEEKLY SCHEDULE</h3>
        ${scheduleHTML}
    `;
}

function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message active';
    successDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    
    const form = event.target.closest('form');
    form.parentNode.insertBefore(successDiv, form);
    
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// ========================================
// EXISTING CODE
// ========================================

// Create floating particles
for(let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (Math.random() * 5 + 8) + 's';
    document.body.appendChild(particle);
}

// Navigation functionality
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
});

// Simulate loading community stats
setTimeout(() => {
    const memberCount = Math.floor(Math.random() * 5000) + 10000;
    const messageCount = Math.floor(Math.random() * 500000) + 1000000;
    const activeCount = Math.floor(Math.random() * 1000) + 2000;
    
    animateValue('member-count', 0, memberCount, 2000);
    animateValue('message-count', 0, messageCount, 2000);
    animateValue('active-count', 0, activeCount, 2000);
    
    // Animate progress bars
    document.getElementById('growth-bar').style.width = '88%';
    document.getElementById('activity-bar').style.width = '94%';
    document.getElementById('event-bar').style.width = '76%';
    
    // Update percentage values
    setTimeout(() => {
        document.getElementById('growth-stat').textContent = '+88%';
        document.getElementById('activity-stat').textContent = '94%';
        document.getElementById('event-stat').textContent = '76%';
    }, 1000);
}, 1000);

// Number animation function
function animateValue(id, start, end, duration) {
    const element = document.getElementById(id);
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// Simulate loading active members
setTimeout(() => {
    const memberList = document.getElementById('member-list');
    
    const members = [
        { name: 'ZanityKing', status: 'online', activity: 'Playing Fortnite' },
        { name: 'ChaosQueen', status: 'online', activity: 'In #general-chat' },
        { name: 'NeonRebel', status: 'online', activity: 'Streaming on Twitch' },
        { name: 'PixelWarrior', status: 'idle', activity: 'Away' },
        { name: 'CyberNinja', status: 'online', activity: 'In Voice Chat' },
        { name: 'GlitchMaster', status: 'online', activity: 'Playing Valorant' },
        { name: 'VoidWalker', status: 'dnd', activity: 'Do Not Disturb' },
        { name: 'ShadowReaper', status: 'online', activity: 'In #gaming' },
        { name: 'PhantomAce', status: 'online', activity: 'Watching Stream' },
        { name: 'StormBringer', status: 'idle', activity: 'Idle' }
    ];
    
    let memberHTML = '';
    members.forEach(member => {
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