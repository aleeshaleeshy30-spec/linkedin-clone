let currentUser = null;
let posts = [
    { id: 1, user: "Sarah Chen", content: "Excited to share that I just completed my AWS certification! 🚀", time: "2h" },
    { id: 2, user: "Rahul Sharma", content: "Looking for frontend developers for our new project. DM me!", time: "5h" }
];

function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    document.getElementById(section + '-section').classList.remove('hidden');
}

function showPostModal() {
    if (!currentUser) {
        alert("Please sign in first");
        showLoginModal();
        return;
    }
    document.getElementById('post-modal').classList.remove('hidden');
    document.getElementById('post-modal').classList.add('flex');
}

function closePostModal() {
    const modal = document.getElementById('post-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function createPost() {
    const content = document.getElementById('post-content').value.trim();
    if (!content) return;
    
    posts.unshift({
        id: Date.now(),
        user: currentUser || "You",
        content: content,
        time: "Just now"
    });
    
    renderFeed();
    closePostModal();
    document.getElementById('post-content').value = '';
}

function renderFeed() {
    const container = document.getElementById('feed-posts');
    container.innerHTML = posts.map(post => `
        <div class="bg-white rounded-xl p-6 shadow">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-semibold">${post.user[0]}</div>
                <div>
                    <p class="font-semibold">${post.user}</p>
                    <p class="text-xs text-gray-500">${post.time}</p>
                </div>
            </div>
            <p class="mt-5 text-gray-700">${post.content}</p>
            <div class="flex gap-6 mt-6 text-gray-500 text-sm">
                <div>👍 Like</div>
                <div>💬 Comment</div>
                <div>🔄 Repost</div>
            </div>
        </div>
    `).join('');
}

function showLoginModal() {
    document.getElementById('login-modal').classList.remove('hidden');
    document.getElementById('login-modal').classList.add('flex');
}

function closeLoginModal() {
    const modal = document.getElementById('login-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function login() {
    currentUser = "Alex Rivera";
    alert("✅ Signed in as " + currentUser);
    closeLoginModal();
    renderFeed();
}

function showProfile() {
    if (!currentUser) {
        showLoginModal();
    } else {
        alert("Profile: " + currentUser + "\n\nExperience: Software Engineer at TechCorp\nEducation: B.Tech Computer Science");
    }
}

function searchContent() {
    alert("🔍 Search results would appear here (Demo)");
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderFeed();
    showSection('feed');
});