// App State
let currentUser = null;
let currentPage = 'auth';
let resources = [];
let isAdmin = false;

// Data from JSON
const tamilNaduColleges = [
    "Anna University, Chennai",
    "Bharathiar University, Coimbatore", 
    "Indian Institute of Technology Madras, Chennai",
    "Madras University, Chennai",
    "National Institute of Technology Tiruchirappalli",
    "PSG College of Technology, Coimbatore",
    "SSN College of Engineering, Chennai",
    "St. Joseph's College of Engineering, Chennai",
    "Thiagarajar College of Engineering, Madurai",
    "VIT University, Vellore"
];

const sampleStudents = [
    {
        id: 1,
        registerNumber: "20CS001",
        fullName: "Arun Kumar S",
        college: "Anna University, Chennai",
        year: 3,
        semester: 5,
        testMarks: {
            "Data Structures": 92,
            "Database Systems": 87,
            "Computer Networks": 84,
            "Software Engineering": 90
        },
        attendance: 94,
        lastLogin: "2025-09-21T09:30:00",
        email: "arun.kumar@annauniv.edu"
    },
    {
        id: 2,
        registerNumber: "20CS002", 
        fullName: "Priya Sharma",
        college: "SSN College of Engineering, Chennai",
        year: 2,
        semester: 4,
        testMarks: {
            "Mathematics": 88,
            "Physics": 91,
            "Chemistry": 85,
            "Programming": 96
        },
        attendance: 97,
        lastLogin: "2025-09-21T08:15:00",
        email: "priya.sharma@ssn.edu.in"
    },
    {
        id: 3,
        registerNumber: "20CS003",
        fullName: "Rajesh Krishnan",
        college: "PSG College of Technology, Coimbatore",
        year: 4,
        semester: 7,
        testMarks: {
            "Machine Learning": 94,
            "Cloud Computing": 89,
            "Mobile App Dev": 92,
            "Project Management": 86
        },
        attendance: 91,
        lastLogin: "2025-09-21T07:45:00",
        email: "rajesh.k@psgtech.ac.in"
    }
];

const adminUsers = [
    {
        id: 1,
        adminId: "admin001",
        password: "admin123",
        fullName: "Dr. Ramesh Gupta",
        designation: "Head of Department",
        department: "Computer Science",
        college: "All Colleges"
    }
];

const studentUsers = [
    {
        id: 1,
        username: "arun_kumar", 
        password: "student123",
        studentId: 1,
        registerNumber: "20CS001"
    }
];

const subjects = [
    "Computer Science",
    "Mathematics", 
    "Physics",
    "Chemistry",
    "Biology",
    "English Literature"
];

const aboutCards = [
    {
        title: "Our Mission",
        icon: "🎯",
        content: "Empowering students with seamless access to academic resources and fostering collaborative learning environments."
    },
    {
        title: "Key Features", 
        icon: "⚡",
        content: "Real-time notifications, personalized dashboards, collaborative tools, and comprehensive resource management."
    },
    {
        title: "Success Stories",
        icon: "🏆", 
        content: "Over 10,000 students have improved their academic performance using our integrated learning platform."
    },
    {
        title: "Advanced Technology",
        icon: "💻",
        content: "Built with modern web technologies ensuring fast, secure, and reliable access to all academic resources."
    },
    {
        title: "24/7 Support",
        icon: "🛟",
        content: "Round-the-clock technical support and academic assistance to help students achieve their goals."
    }
];

const sampleResources = [
    {
        id: 1,
        title: "Data Structures and Algorithms",
        description: "Comprehensive notes covering arrays, linked lists, trees, and graphs with practical examples.",
        college: "Anna University, Chennai",
        year: 3,
        semester: 5,
        type: "notes",
        dueDate: null,
        uploadDate: "2025-09-15",
        subject: "Computer Science"
    },
    {
        id: 2,
        title: "Machine Learning Assignment",
        description: "Implementation of linear regression and decision trees using Python and scikit-learn.",
        college: "Anna University, Chennai",
        year: 3,
        semester: 5,
        type: "assignment",
        dueDate: "2025-09-28",
        uploadDate: "2025-09-20",
        subject: "Computer Science"
    },
    {
        id: 3,
        title: "Database Systems Test",
        description: "Mid-semester examination covering SQL, normalization, and transaction management.",
        college: "Anna University, Chennai",
        year: 3,
        semester: 5,
        type: "test",
        dueDate: "2025-09-25",
        uploadDate: "2025-09-18",
        subject: "Computer Science"
    },
    {
        id: 4,
        title: "Web Development Project",
        description: "Create a full-stack web application using React.js frontend and Node.js backend.",
        college: "Anna University, Chennai",
        year: 3,
        semester: 5,
        type: "assignment",
        dueDate: "2025-10-15",
        uploadDate: "2025-09-21",
        subject: "Computer Science"
    }
];

const dashboardCardDetails = {
    assignments: {
        title: "My Assignments",
        items: [
            {
                title: "Machine Learning Assignment",
                subject: "Computer Science",
                dueDate: "2025-09-28",
                progress: 60,
                status: "In Progress",
                description: "Implementation of linear regression and decision trees"
            },
            {
                title: "Web Development Project", 
                subject: "Computer Science",
                dueDate: "2025-10-15",
                progress: 30,
                status: "Started",
                description: "Create a full-stack web application"
            }
        ]
    },
    tests: {
        title: "Upcoming Tests",
        items: [
            {
                subject: "Database Systems",
                date: "2025-09-25",
                time: "10:00 AM", 
                duration: "2 hours",
                topics: ["SQL", "Normalization", "Transactions"],
                location: "Room 101"
            },
            {
                subject: "Computer Networks",
                date: "2025-09-30",
                time: "2:00 PM",
                duration: "1.5 hours", 
                topics: ["TCP/IP", "Routing", "Security"],
                location: "Room 205"
            }
        ]
    },
    notes: {
        title: "Notes Library",
        subjects: [
            {
                subject: "Computer Science",
                noteCount: 8,
                topics: ["Data Structures", "Algorithms", "Operating Systems", "Database Systems"]
            },
            {
                subject: "Mathematics",
                noteCount: 6,
                topics: ["Calculus", "Linear Algebra", "Statistics"]
            }
        ]
    },
    progress: {
        title: "Academic Progress",
        overallGrade: 88,
        subjects: [
            {"name": "Data Structures", "grade": 92},
            {"name": "Database Systems", "grade": 87},
            {"name": "Computer Networks", "grade": 84},
            {"name": "Software Engineering", "grade": 90}
        ],
        attendance: 94,
        assignmentsCompleted: 12,
        testsCompleted: 8,
        totalAssignments: 15,
        totalTests: 10
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    resources = [...sampleResources];
    setupEventListeners();
    initializeTheme();
    populateCollegeSelects();
    populateSubjectSelects();
}

function setupEventListeners() {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Auth Forms
    setupAuthEventListeners();
    
    // Navigation
    setupNavigationEventListeners();

    // Resources
    setupResourcesEventListeners();

    // Admin
    setupAdminEventListeners();
}

function setupAuthEventListeners() {
    // Login type selection
    const studentLoginBtn = document.getElementById('studentLoginBtn');
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    
    if (studentLoginBtn) {
        studentLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showStudentLogin();
        });
    }
    
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showAdminLogin();
        });
    }
    
    // Back buttons
    const backToSelectionBtn = document.getElementById('backToSelectionBtn');
    const backToSelectionBtn2 = document.getElementById('backToSelectionBtn2');
    
    if (backToSelectionBtn) {
        backToSelectionBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showLoginTypeSelection();
        });
    }
    
    if (backToSelectionBtn2) {
        backToSelectionBtn2.addEventListener('click', function(e) {
            e.preventDefault();
            showLoginTypeSelection();
        });
    }
    
    // Student auth
    const studentLoginForm = document.getElementById('studentLoginForm');
    if (studentLoginForm) {
        studentLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleStudentLogin(e);
        });
    }
    
    const showStudentRegisterBtn = document.getElementById('showStudentRegisterBtn');
    if (showStudentRegisterBtn) {
        showStudentRegisterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showStudentRegister();
        });
    }
    
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleStudentRegistration(e);
        });
    }
    
    const backToStudentSignInBtn = document.getElementById('backToStudentSignInBtn');
    if (backToStudentSignInBtn) {
        backToStudentSignInBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showStudentLogin();
        });
    }
    
    // Admin auth
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleAdminLogin(e);
        });
    }
    
    // Sign out buttons
    const signOutBtn = document.getElementById('signOutBtn');
    const adminSignOutBtn = document.getElementById('adminSignOutBtn');
    
    if (signOutBtn) {
        signOutBtn.addEventListener('click', handleSignOut);
    }
    
    if (adminSignOutBtn) {
        adminSignOutBtn.addEventListener('click', handleSignOut);
    }
}

function setupNavigationEventListeners() {
    // Student navigation - only Home, About, Resources
    const studentNavLinks = document.querySelectorAll('#studentNav .nav-link[data-page]');
    studentNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (!isAdmin) { // Only allow navigation if user is student
                navigateToPage(link.dataset.page);
            }
        });
    });
    
    // Admin navigation - only Student Management, Content Management, Analytics
    const adminNavLinks = document.querySelectorAll('#adminNav .nav-link[data-page]');
    adminNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (isAdmin) { // Only allow navigation if user is admin
                navigateToPage(link.dataset.page);
            }
        });
    });
}

function setupResourcesEventListeners() {
    const resourceSearch = document.getElementById('resourceSearch');
    const subjectFilter = document.getElementById('subjectFilter');
    const typeFilter = document.getElementById('typeFilter');

    if (resourceSearch) resourceSearch.addEventListener('input', filterResources);
    if (subjectFilter) subjectFilter.addEventListener('change', filterResources);
    if (typeFilter) typeFilter.addEventListener('change', filterResources);
}

function setupAdminEventListeners() {
    // Tab navigation for content management
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (isAdmin) {
                switchTab(this.dataset.tab);
            }
        });
    });
    
    // Add Notes Form
    const addNotesForm = document.getElementById('addNotesForm');
    if (addNotesForm) {
        addNotesForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (isAdmin) {
                handleAddNotes(e);
            }
        });
    }
    
    // Add Assignments Form
    const addAssignmentsForm = document.getElementById('addAssignmentsForm');
    if (addAssignmentsForm) {
        addAssignmentsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (isAdmin) {
                handleAddAssignments(e);
            }
        });
    }
    
    const studentSearch = document.getElementById('studentSearch');
    const collegeFilter = document.getElementById('collegeFilter');
    const yearFilter = document.getElementById('yearFilter');
    
    if (studentSearch) studentSearch.addEventListener('input', filterStudents);
    if (collegeFilter) collegeFilter.addEventListener('change', filterStudents);
    if (yearFilter) yearFilter.addEventListener('change', filterStudents);
}

// Theme Management
function initializeTheme() {
    const savedTheme = 'light';
    document.documentElement.setAttribute('data-color-scheme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-color-scheme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-color-scheme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Authentication Functions
function showLoginTypeSelection() {
    hideAllAuthForms();
    const selection = document.getElementById('loginTypeSelection');
    if (selection) {
        selection.classList.remove('hidden');
    }
}

function showStudentLogin() {
    hideAllAuthForms();
    const form = document.getElementById('studentSignInForm');
    if (form) {
        form.classList.remove('hidden');
    }
}

function showAdminLogin() {
    hideAllAuthForms();
    const form = document.getElementById('adminSignInForm');
    if (form) {
        form.classList.remove('hidden');
    }
}

function showStudentRegister() {
    hideAllAuthForms();
    const form = document.getElementById('studentRegisterForm');
    if (form) {
        form.classList.remove('hidden');
    }
}

function hideAllAuthForms() {
    const forms = [
        'loginTypeSelection',
        'studentSignInForm', 
        'adminSignInForm',
        'studentRegisterForm'
    ];
    
    forms.forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            form.classList.add('hidden');
        }
    });
}

function handleStudentLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('studentUsername')?.value;
    const password = document.getElementById('studentPassword')?.value;
    
    if (!username || !password) {
        showNotification('Please enter both username and password', 'error');
        return;
    }
    
    const user = studentUsers.find(u => u.username === username && u.password === password);
    
    if (user) {
        const studentData = sampleStudents.find(s => s.id === user.studentId);
        if (studentData) {
            currentUser = { ...user, ...studentData };
            isAdmin = false;
            showNotification('Welcome back, ' + currentUser.fullName + '!', 'success');
            showStudentApp();
        } else {
            showNotification('Student data not found', 'error');
        }
    } else {
        showNotification('Invalid username or password', 'error');
    }
}

function handleAdminLogin(e) {
    e.preventDefault();
    
    const adminId = document.getElementById('adminId')?.value;
    const password = document.getElementById('adminPassword')?.value;
    
    if (!adminId || !password) {
        showNotification('Please enter both Admin ID and password', 'error');
        return;
    }
    
    const admin = adminUsers.find(a => a.adminId === adminId && a.password === password);
    
    if (admin) {
        currentUser = admin;
        isAdmin = true;
        showNotification('Welcome, ' + currentUser.fullName + '!', 'success');
        showAdminApp();
    } else {
        showNotification('Invalid admin credentials', 'error');
    }
}

function handleStudentRegistration(e) {
    e.preventDefault();
    
    const newPassword = document.getElementById('newPassword')?.value;
    const confirmPassword = document.getElementById('confirmPassword')?.value;
    
    if (newPassword !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    
    const newStudent = {
        id: sampleStudents.length + 1,
        registerNumber: `20CS${String(sampleStudents.length + 1).padStart(3, '0')}`,
        fullName: document.getElementById('fullName')?.value || '',
        college: document.getElementById('college')?.value || '',
        year: parseInt(document.getElementById('year')?.value || '1'),
        semester: parseInt(document.getElementById('semester')?.value || '1'),
        testMarks: {},
        attendance: 100,
        lastLogin: new Date().toISOString(),
        email: `${(document.getElementById('fullName')?.value || 'student').toLowerCase().replace(' ', '.')}@student.edu`
    };
    
    const newUser = {
        id: studentUsers.length + 1,
        username: newStudent.fullName.toLowerCase().replace(' ', '_'),
        password: newPassword,
        studentId: newStudent.id,
        registerNumber: newStudent.registerNumber
    };
    
    sampleStudents.push(newStudent);
    studentUsers.push(newUser);
    currentUser = { ...newUser, ...newStudent };
    isAdmin = false;
    
    showNotification('Account created successfully! Welcome to Cygnus Academy!', 'success');
    showStudentApp();
}

function handleSignOut() {
    currentUser = null;
    isAdmin = false;
    showNotification('You have been signed out', 'info');
    showAuthPage();
}

// FIXED: Proper role-based interface switching
function showStudentApp() {
    const authPage = document.getElementById('authPage');
    const navbar = document.getElementById('navbar');
    const studentNav = document.getElementById('studentNav');
    const adminNav = document.getElementById('adminNav');
    
    if (authPage) authPage.classList.remove('active');
    if (navbar) navbar.classList.remove('hidden');
    
    // CRITICAL FIX: Show only student navigation, hide admin navigation
    if (studentNav) {
        studentNav.classList.remove('hidden');
        studentNav.style.display = 'flex'; // Force display
    }
    if (adminNav) {
        adminNav.classList.add('hidden');
        adminNav.style.display = 'none'; // Force hide
    }
    
    navigateToPage('home');
    loadHomePage();
}

function showAdminApp() {
    const authPage = document.getElementById('authPage');
    const navbar = document.getElementById('navbar');
    const adminNav = document.getElementById('adminNav');
    const studentNav = document.getElementById('studentNav');
    
    if (authPage) authPage.classList.remove('active');
    if (navbar) navbar.classList.remove('hidden');
    
    // CRITICAL FIX: Show only admin navigation, hide student navigation
    if (adminNav) {
        adminNav.classList.remove('hidden');
        adminNav.style.display = 'flex'; // Force display
    }
    if (studentNav) {
        studentNav.classList.add('hidden');
        studentNav.style.display = 'none'; // Force hide
    }
    
    navigateToPage('admin-students'); // Start with Student Management for admin
    loadStudentManagement();
}

function showAuthPage() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    
    const authPage = document.getElementById('authPage');
    const navbar = document.getElementById('navbar');
    
    if (authPage) authPage.classList.add('active');
    if (navbar) navbar.classList.add('hidden');
    
    // Hide both navigation bars when showing auth page
    const studentNav = document.getElementById('studentNav');
    const adminNav = document.getElementById('adminNav');
    if (studentNav) {
        studentNav.classList.add('hidden');
        studentNav.style.display = 'none';
    }
    if (adminNav) {
        adminNav.classList.add('hidden');
        adminNav.style.display = 'none';
    }
    
    // Reset forms
    const forms = ['studentLoginForm', 'adminLoginForm', 'registrationForm'];
    forms.forEach(formId => {
        const form = document.getElementById(formId);
        if (form) form.reset();
    });
    
    showLoginTypeSelection();
}

// Navigation - Strict role separation
function navigateToPage(pageName) {
    // Enforce role-based navigation
    const studentPages = ['home', 'about', 'resources'];
    const adminPages = ['admin-students', 'admin-content', 'admin-analytics'];
    
    if (!isAdmin && !studentPages.includes(pageName)) {
        showNotification('Access denied. Students cannot access admin pages.', 'error');
        return;
    }
    
    if (isAdmin && !adminPages.includes(pageName)) {
        showNotification('Access denied. Admins cannot access student pages.', 'error');
        return;
    }
    
    // Update active nav link
    const currentNavLinks = isAdmin ? '#adminNav' : '#studentNav';
    document.querySelectorAll(`${currentNavLinks} .nav-link[data-page]`).forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`${currentNavLinks} [data-page="${pageName}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Show page with transition
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    setTimeout(() => {
        const targetPage = document.getElementById(pageName + 'Page');
        if (targetPage) {
            targetPage.classList.add('active');
            
            // Load page-specific content
            switch (pageName) {
                case 'home':
                    if (!isAdmin) loadHomePage();
                    break;
                case 'about':
                    if (!isAdmin) loadAboutPage();
                    break;
                case 'resources':
                    if (!isAdmin) loadResourcesPage();
                    break;
                case 'admin-students':
                    if (isAdmin) loadStudentManagement();
                    break;
                case 'admin-content':
                    if (isAdmin) loadContentManagement();
                    break;
                case 'admin-analytics':
                    if (isAdmin) loadAnalytics();
                    break;
            }
        }
    }, 100);
    
    currentPage = pageName;
}

// Home Page Functions (Student Only)
function loadHomePage() {
    if (isAdmin) return; // Admin cannot access home page
    
    // Update user name
    const userName = document.getElementById('userName');
    if (userName) {
        userName.textContent = currentUser.fullName;
    }
    
    updateHomeStats();
    loadCalendarHighlights();
    loadActivityFeed();
    loadProgressOverview();
}

function updateHomeStats() {
    if (isAdmin) return;
    
    const userResources = resources.filter(r => 
        r.college === currentUser.college && 
        r.year === currentUser.year && 
        r.semester === currentUser.semester
    );
    
    const assignmentCount = document.getElementById('assignmentCount');
    const testCount = document.getElementById('testCount');
    const notesCount = document.getElementById('notesCount');
    const avgScore = document.getElementById('avgScore');
    
    if (assignmentCount) {
        assignmentCount.textContent = userResources.filter(r => r.type === 'assignment').length;
    }
    
    if (testCount) {
        testCount.textContent = userResources.filter(r => r.type === 'test').length;
    }
    
    if (notesCount) {
        notesCount.textContent = userResources.filter(r => r.type === 'notes').length;
    }
    
    // Calculate average score
    if (currentUser.testMarks && Object.keys(currentUser.testMarks).length > 0) {
        const scores = Object.values(currentUser.testMarks);
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        if (avgScore) {
            avgScore.textContent = Math.round(average) + '%';
        }
    }
}

function loadCalendarHighlights() {
    if (isAdmin) return;
    
    const container = document.getElementById('calendarHighlights');
    if (!container) return;
    
    const upcomingEvents = [
        { date: 'Sep 25', title: 'Database Systems Test', time: '10:00 AM' },
        { date: 'Sep 28', title: 'ML Assignment Due', time: '11:59 PM' },
        { date: 'Oct 02', title: 'Mid-term Results', time: '9:00 AM' },
        { date: 'Oct 15', title: 'Web Dev Project Due', time: '11:59 PM' }
    ];
    
    container.innerHTML = upcomingEvents.map(event => `
        <div class="calendar-item">
            <div class="calendar-date">${event.date}</div>
            <div class="calendar-event">
                <div class="calendar-title">${event.title}</div>
                <div class="calendar-time">${event.time}</div>
            </div>
        </div>
    `).join('');
}

function loadActivityFeed() {
    if (isAdmin) return;
    
    const container = document.getElementById('activityFeed');
    if (!container) return;
    
    const activities = [
        { icon: '📚', title: 'New study material added for Data Structures', time: '2 hours ago' },
        { icon: '🎯', title: 'Assignment submitted: Machine Learning', time: '1 day ago' },
        { icon: '📊', title: 'Test score updated: Database Systems (87%)', time: '2 days ago' },
        { icon: '💡', title: 'Joined study group: Computer Networks', time: '3 days ago' }
    ];
    
    container.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon">${activity.icon}</div>
            <div class="activity-content">
                <div class="activity-title">${activity.title}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        </div>
    `).join('');
}

function loadProgressOverview() {
    if (isAdmin) return;
    
    const container = document.getElementById('progressOverview');
    if (!container) return;
    
    const progressItems = [
        { label: 'Course Completion', value: 75 },
        { label: 'Assignment Progress', value: 80 },
        { label: 'Attendance Rate', value: currentUser.attendance || 95 },
        { label: 'Study Goals', value: 65 }
    ];
    
    container.innerHTML = progressItems.map(item => `
        <div class="progress-item">
            <div class="progress-header">
                <span class="progress-label">${item.label}</span>
                <span class="progress-value">${item.value}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${item.value}%"></div>
            </div>
        </div>
    `).join('');
}

// About Page Functions (Student Only)
function loadAboutPage() {
    if (isAdmin) return; // Admin cannot access about page
    
    const container = document.getElementById('aboutCardsGrid');
    if (!container) return;
    
    container.innerHTML = aboutCards.map(card => `
        <div class="card about-card">
            <div class="about-card-icon">${card.icon}</div>
            <h3>${card.title}</h3>
            <p>${card.content}</p>
        </div>
    `).join('');
}

// Resources Page Functions (Student Only)
function loadResourcesPage() {
    if (isAdmin) return; // Admin cannot access resources page
    
    populateSubjectFilter();
    displayResources();
}

function populateSubjectFilter() {
    if (isAdmin) return;
    
    const subjectFilter = document.getElementById('subjectFilter');
    if (!subjectFilter) return;
    
    const availableSubjects = [...new Set(resources
        .filter(r => r.college === currentUser.college && r.year === currentUser.year)
        .map(r => r.subject))];
    
    subjectFilter.innerHTML = '<option value="">All Subjects</option>';
    availableSubjects.forEach(subject => {
        subjectFilter.innerHTML += `<option value="${subject}">${subject}</option>`;
    });
}

function filterResources() {
    if (isAdmin) return;
    displayResources();
}

function displayResources() {
    if (isAdmin) return;
    
    const container = document.getElementById('resourcesGrid');
    if (!container) return;
    
    let filteredResources = resources.filter(resource => 
        resource.college === currentUser.college && 
        resource.year === currentUser.year &&
        resource.semester === currentUser.semester
    );
    
    // Apply search and filters
    const searchTerm = document.getElementById('resourceSearch')?.value.toLowerCase() || '';
    const subjectFilter = document.getElementById('subjectFilter')?.value || '';
    const typeFilter = document.getElementById('typeFilter')?.value || '';
    
    if (searchTerm) {
        filteredResources = filteredResources.filter(r => 
            r.title.toLowerCase().includes(searchTerm) || 
            r.description.toLowerCase().includes(searchTerm)
        );
    }
    
    if (subjectFilter) {
        filteredResources = filteredResources.filter(r => r.subject === subjectFilter);
    }
    
    if (typeFilter) {
        filteredResources = filteredResources.filter(r => r.type === typeFilter);
    }
    
    container.innerHTML = filteredResources.length > 0 
        ? filteredResources.map(resource => createResourceCard(resource)).join('')
        : '<div class="card"><div class="card__body"><p>No resources found matching your criteria.</p></div></div>';
}

function createResourceCard(resource) {
    const dueDateClass = resource.dueDate ? getDueDateClass(resource.dueDate) : '';
    const dueDateText = resource.dueDate ? formatDate(resource.dueDate) : 'No due date';
    
    return `
        <div class="card resource-card">
            <div class="resource-header">
                <h4 class="resource-title">${resource.title}</h4>
                <div class="resource-meta">
                    <span class="resource-tag">${resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</span>
                    <span class="resource-tag">${resource.subject}</span>
                    <span class="resource-tag">Year ${resource.year}</span>
                </div>
            </div>
            <div class="resource-body">
                <p class="resource-description">${resource.description}</p>
                <div class="resource-footer">
                    <span class="due-date ${dueDateClass}">
                        ${resource.dueDate ? 'Due: ' + dueDateText : 'Study Material'}
                    </span>
                </div>
            </div>
        </div>
    `;
}

function getDueDateClass(dueDate) {
    const now = new Date();
    const due = new Date(dueDate);
    const daysDiff = (due - now) / (1000 * 60 * 60 * 24);
    
    if (daysDiff < 0) return 'overdue';
    if (daysDiff <= 3) return 'upcoming';
    return 'normal';
}

// Admin Functions (Admin Only)
function loadStudentManagement() {
    if (!isAdmin) return;
    
    populateStudentFilters();
    displayStudents();
}

function populateStudentFilters() {
    if (!isAdmin) return;
    
    const collegeFilter = document.getElementById('collegeFilter');
    if (!collegeFilter) return;
    
    collegeFilter.innerHTML = '<option value="">All Colleges</option>';
    tamilNaduColleges.forEach(college => {
        collegeFilter.innerHTML += `<option value="${college}">${college}</option>`;
    });
}

function filterStudents() {
    if (!isAdmin) return;
    displayStudents();
}

function displayStudents() {
    if (!isAdmin) return;
    
    const container = document.getElementById('studentTableBody');
    if (!container) return;
    
    let filteredStudents = [...sampleStudents];
    
    // Apply filters
    const searchTerm = document.getElementById('studentSearch')?.value.toLowerCase() || '';
    const collegeFilter = document.getElementById('collegeFilter')?.value || '';
    const yearFilter = document.getElementById('yearFilter')?.value || '';
    
    if (searchTerm) {
        filteredStudents = filteredStudents.filter(s => 
            s.fullName.toLowerCase().includes(searchTerm) || 
            s.registerNumber.toLowerCase().includes(searchTerm) ||
            s.email.toLowerCase().includes(searchTerm)
        );
    }
    
    if (collegeFilter) {
        filteredStudents = filteredStudents.filter(s => s.college === collegeFilter);
    }
    
    if (yearFilter) {
        filteredStudents = filteredStudents.filter(s => s.year === parseInt(yearFilter));
    }
    
    container.innerHTML = filteredStudents.map(student => createStudentRow(student)).join('');
}

function createStudentRow(student) {
    const testMarksDisplay = Object.entries(student.testMarks)
        .map(([subject, mark]) => `<span class="test-mark">${subject}: ${mark}</span>`)
        .join('');
    
    const attendanceClass = student.attendance >= 90 ? 'excellent' : 
                          student.attendance >= 75 ? 'good' : 'poor';
    
    return `
        <tr>
            <td>
                <div class="student-name">${student.fullName}</div>
                <div class="last-login">${student.email}</div>
            </td>
            <td><span class="register-number">${student.registerNumber}</span></td>
            <td>${student.college}</td>
            <td>${student.year}</td>
            <td>${student.semester}</td>
            <td><div class="test-marks">${testMarksDisplay}</div></td>
            <td><span class="attendance-badge attendance-${attendanceClass}">${student.attendance}%</span></td>
            <td><div class="last-login">${formatDateTime(student.lastLogin)}</div></td>
            <td>
                <div class="student-actions">
                    <button class="action-btn view" onclick="viewStudent(${student.id})">View</button>
                    <button class="action-btn edit" onclick="editStudent(${student.id})">Edit</button>
                </div>
            </td>
        </tr>
    `;
}

function viewStudent(studentId) {
    if (!isAdmin) return;
    
    const student = sampleStudents.find(s => s.id === studentId);
    if (student) {
        showNotification(`Viewing details for ${student.fullName}`, 'info');
    }
}

function editStudent(studentId) {
    if (!isAdmin) return;
    
    const student = sampleStudents.find(s => s.id === studentId);
    if (student) {
        showNotification(`Edit mode for ${student.fullName}`, 'info');
    }
}

// Content Management Functions (Admin Only)
function loadContentManagement() {
    if (!isAdmin) return;
    
    // Populate form selects
    populateContentManagementSelects();
}

function populateContentManagementSelects() {
    if (!isAdmin) return;
    
    // Notes form
    const notesCollege = document.getElementById('notesCollege');
    const notesSubject = document.getElementById('notesSubject');
    
    if (notesCollege) {
        notesCollege.innerHTML = '<option value="">Select College</option>';
        tamilNaduColleges.forEach(college => {
            notesCollege.innerHTML += `<option value="${college}">${college}</option>`;
        });
    }
    
    if (notesSubject) {
        notesSubject.innerHTML = '<option value="">Select Subject</option>';
        subjects.forEach(subject => {
            notesSubject.innerHTML += `<option value="${subject}">${subject}</option>`;
        });
    }
    
    // Assignment form
    const assignmentCollege = document.getElementById('assignmentCollege');
    const assignmentSubject = document.getElementById('assignmentSubject');
    
    if (assignmentCollege) {
        assignmentCollege.innerHTML = '<option value="">Select College</option>';
        tamilNaduColleges.forEach(college => {
            assignmentCollege.innerHTML += `<option value="${college}">${college}</option>`;
        });
    }
    
    if (assignmentSubject) {
        assignmentSubject.innerHTML = '<option value="">Select Subject</option>';
        subjects.forEach(subject => {
            assignmentSubject.innerHTML += `<option value="${subject}">${subject}</option>`;
        });
    }
}

function switchTab(tabName) {
    if (!isAdmin) return;
    
    // Update tab buttons
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(tabName + 'Tab').classList.add('active');
}

function handleAddNotes(e) {
    e.preventDefault();
    if (!isAdmin) return;
    
    const newNote = {
        id: resources.length + 1,
        title: document.getElementById('notesTitle')?.value || '',
        description: document.getElementById('notesDescription')?.value || '',
        college: document.getElementById('notesCollege')?.value || '',
        year: parseInt(document.getElementById('notesYear')?.value || '1'),
        semester: parseInt(document.getElementById('notesSemester')?.value || '1'),
        type: 'notes',
        subject: document.getElementById('notesSubject')?.value || '',
        dueDate: null,
        uploadDate: new Date().toISOString().split('T')[0]
    };
    
    resources.push(newNote);
    
    showNotification('Notes added successfully!', 'success');
    const form = document.getElementById('addNotesForm');
    if (form) form.reset();
}

function handleAddAssignments(e) {
    e.preventDefault();
    if (!isAdmin) return;
    
    const newAssignment = {
        id: resources.length + 1,
        title: document.getElementById('assignmentTitle')?.value || '',
        description: document.getElementById('assignmentDescription')?.value || '',
        college: document.getElementById('assignmentCollege')?.value || '',
        year: parseInt(document.getElementById('assignmentYear')?.value || '1'),
        semester: parseInt(document.getElementById('assignmentSemester')?.value || '1'),
        type: 'assignment',
        subject: document.getElementById('assignmentSubject')?.value || '',
        dueDate: document.getElementById('assignmentDueDate')?.value || null,
        uploadDate: new Date().toISOString().split('T')[0]
    };
    
    resources.push(newAssignment);
    
    showNotification('Assignment added successfully!', 'success');
    const form = document.getElementById('addAssignmentsForm');
    if (form) form.reset();
}

function loadAnalytics() {
    if (!isAdmin) return;
    
    setTimeout(() => {
        createCollegePerformanceChart();
        createSubjectPerformanceChart();
    }, 100);
}

function createCollegePerformanceChart() {
    if (!isAdmin) return;
    
    const ctx = document.getElementById('collegePerformanceChart');
    if (!ctx) return;
    
    // Calculate performance by college
    const collegeData = {};
    sampleStudents.forEach(student => {
        if (!collegeData[student.college]) {
            collegeData[student.college] = { total: 0, count: 0 };
        }
        
        const marks = Object.values(student.testMarks);
        if (marks.length > 0) {
            const studentAvg = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
            collegeData[student.college].total += studentAvg;
            collegeData[student.college].count += 1;
        }
    });
    
    const colleges = Object.keys(collegeData);
    const averages = colleges.map(college => 
        collegeData[college].count > 0 ? 
        Math.round(collegeData[college].total / collegeData[college].count) : 0
    );
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: colleges.map(c => c.split(',')[0]),
            datasets: [{
                label: 'Average Performance',
                data: averages,
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F', '#DB4545'],
                borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F', '#DB4545'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function createSubjectPerformanceChart() {
    if (!isAdmin) return;
    
    const ctx = document.getElementById('subjectPerformanceChart');
    if (!ctx) return;
    
    // Calculate performance by subject
    const subjectData = {};
    sampleStudents.forEach(student => {
        Object.entries(student.testMarks).forEach(([subject, mark]) => {
            if (!subjectData[subject]) {
                subjectData[subject] = { total: 0, count: 0 };
            }
            subjectData[subject].total += mark;
            subjectData[subject].count += 1;
        });
    });
    
    const subjectNames = Object.keys(subjectData);
    const subjectAverages = subjectNames.map(subject => Math.round(subjectData[subject].total / subjectData[subject].count));
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: subjectNames,
            datasets: [{
                label: 'Average Score',
                data: subjectAverages,
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Modal Functions (Student Only)
function showModal(modalId) {
    if (isAdmin) return; // Admin cannot access student modals
    
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    // Populate modal content based on type
    switch (modalId) {
        case 'assignmentsModal':
            populateAssignmentsModal();
            break;
        case 'testsModal':
            populateTestsModal();
            break;
        case 'notesModal':
            populateNotesModal();
            break;
        case 'progressModal':
            populateProgressModal();
            break;
    }
    
    modal.classList.remove('hidden');
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

function populateAssignmentsModal() {
    if (isAdmin) return;
    
    const container = document.getElementById('assignmentsModalContent');
    if (!container) return;
    
    container.innerHTML = dashboardCardDetails.assignments.items.map(item => `
        <div class="assignment-item">
            <div class="assignment-title">${item.title}</div>
            <p><strong>Subject:</strong> ${item.subject}</p>
            <p><strong>Due Date:</strong> ${item.dueDate}</p>
            <p><strong>Status:</strong> ${item.status}</p>
            <p>${item.description}</p>
            <div class="assignment-progress">
                <div class="progress-header">
                    <span class="progress-label">Progress</span>
                    <span class="progress-value">${item.progress}%</span>
                </div>
                <div class="assignment-progress-bar">
                    <div class="assignment-progress-fill" style="width: ${item.progress}%"></div>
                </div>
            </div>
        </div>
    `).join('');
}

function populateTestsModal() {
    if (isAdmin) return;
    
    const container = document.getElementById('testsModalContent');
    if (!container) return;
    
    container.innerHTML = dashboardCardDetails.tests.items.map(item => `
        <div class="test-item">
            <div class="test-subject">${item.subject}</div>
            <div class="test-details">
                <div class="test-detail"><strong>Date:</strong> ${item.date}</div>
                <div class="test-detail"><strong>Time:</strong> ${item.time}</div>
                <div class="test-detail"><strong>Duration:</strong> ${item.duration}</div>
                <div class="test-detail"><strong>Location:</strong> ${item.location}</div>
            </div>
            <p><strong>Topics:</strong> ${item.topics.join(', ')}</p>
        </div>
    `).join('');
}

function populateNotesModal() {
    if (isAdmin) return;
    
    const container = document.getElementById('notesModalContent');
    if (!container) return;
    
    container.innerHTML = dashboardCardDetails.notes.subjects.map(subject => `
        <div class="subject-item">
            <div class="subject-stats">
                <div class="subject-name">${subject.subject}</div>
                <div class="note-count">${subject.noteCount} notes</div>
            </div>
            <div class="topics-list">${subject.topics.join(', ')}</div>
        </div>
    `).join('');
}

function populateProgressModal() {
    if (isAdmin) return;
    
    const container = document.getElementById('progressModalContent');
    if (!container) return;
    
    const progress = dashboardCardDetails.progress;
    
    container.innerHTML = `
        <div class="overall-stats">
            <div class="stat-box">
                <div class="stat-box-value">${progress.overallGrade}%</div>
                <div class="stat-box-label">Overall Grade</div>
            </div>
            <div class="stat-box">
                <div class="stat-box-value">${progress.attendance}%</div>
                <div class="stat-box-label">Attendance</div>
            </div>
            <div class="stat-box">
                <div class="stat-box-value">${progress.assignmentsCompleted}/${progress.totalAssignments}</div>
                <div class="stat-box-label">Assignments</div>
            </div>
            <div class="stat-box">
                <div class="stat-box-value">${progress.testsCompleted}/${progress.totalTests}</div>
                <div class="stat-box-label">Tests</div>
            </div>
        </div>
        
        <h4>Subject-wise Performance</h4>
        <div class="grades-list">
            ${progress.subjects.map(subject => `
                <div class="grade-item">
                    <span class="grade-subject">${subject.name}</span>
                    <span class="grade-score">${subject.grade}%</span>
                </div>
            `).join('')}
        </div>
    `;
}

// Utility Functions
function populateCollegeSelects() {
    const collegeSelects = document.querySelectorAll('#college, #notesCollege, #assignmentCollege');
    collegeSelects.forEach(select => {
        if (!select) return;
        
        // Clear existing options except the first one
        const firstOption = select.firstElementChild;
        select.innerHTML = '';
        if (firstOption) {
            select.appendChild(firstOption);
        }
        
        tamilNaduColleges.forEach(college => {
            const option = document.createElement('option');
            option.value = college;
            option.textContent = college;
            select.appendChild(option);
        });
    });
}

function populateSubjectSelects() {
    const subjectSelects = document.querySelectorAll('#notesSubject, #assignmentSubject');
    subjectSelects.forEach(select => {
        if (!select) return;
        
        subjects.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject;
            option.textContent = subject;
            select.appendChild(option);
        });
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    if (!container) return;
    
    const notification = document.createElement('div');
    
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <p>${message}</p>
        </div>
    `;
    
    container.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Demo credentials helper
window.addEventListener('load', function() {
    // Add demo credentials hint
    setTimeout(() => {
        if (!currentUser) {
            showNotification('Demo: Student - "arun_kumar" / "student123" | Admin - "admin001" / "admin123"', 'info');
        }
    }, 2000);
});