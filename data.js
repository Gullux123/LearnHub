/* ===========================================================
   LearnHub — Data
   Central arrays of content rendered dynamically by main.js
=========================================================== */

const COURSES = [
  { id: 1,  title: "HTML & CSS Fundamentals",            category: "Development", level: "Beginner",     rating: 4.7, students: 31200, duration: "12 hrs", lessons: 64,  price: 0,    premium: false, bestseller: false, instructor: "Meera Nair" },
  { id: 2,  title: "Advanced CSS & Responsive Design",    category: "Development", level: "Intermediate", rating: 4.8, students: 18900, duration: "18 hrs", lessons: 82,  price: 999,  premium: true,  bestseller: false, instructor: "Meera Nair" },
  { id: 3,  title: "JavaScript from Beginner to Advanced",category: "Development", level: "Beginner",     rating: 4.9, students: 42750, duration: "36 hrs", lessons: 168, price: 1299, premium: true,  bestseller: true,  instructor: "Rohan Iyer" },
  { id: 4,  title: "Python Programming Masterclass",      category: "Development", level: "Intermediate", rating: 4.9, students: 24500, duration: "42 hrs", lessons: 185, price: 1499, premium: true,  bestseller: true,  instructor: "Ananya Rao" },
  { id: 5,  title: "SQL for Data Analysis",                category: "Data & AI",   level: "Beginner",     rating: 4.6, students: 15300, duration: "14 hrs", lessons: 58,  price: 799,  premium: true,  bestseller: false, instructor: "Karthik Subramanian" },
  { id: 6,  title: "Excel for Business & Data Analysis",   category: "Data & AI",   level: "Beginner",     rating: 4.5, students: 21100, duration: "16 hrs", lessons: 71,  price: 699,  premium: false, bestseller: false, instructor: "Divya Menon" },
  { id: 7,  title: "Power BI Complete Course",             category: "Data & AI",   level: "Intermediate", rating: 4.7, students: 12800, duration: "20 hrs", lessons: 90,  price: 1199, premium: true,  bestseller: false, instructor: "Karthik Subramanian" },
  { id: 8,  title: "Data Analytics with Python",           category: "Data & AI",   level: "Intermediate", rating: 4.8, students: 17600, duration: "28 hrs", lessons: 112, price: 1399, premium: true,  bestseller: true,  instructor: "Ananya Rao" },
  { id: 9,  title: "Machine Learning A-Z",                 category: "Data & AI",   level: "Advanced",     rating: 4.9, students: 22400, duration: "48 hrs", lessons: 201, price: 1999, premium: true,  bestseller: true,  instructor: "Dr. Sameer Khan" },
  { id: 10, title: "Deep Learning Fundamentals",           category: "Data & AI",   level: "Advanced",     rating: 4.7, students: 9800,  duration: "32 hrs", lessons: 140, price: 1799, premium: true,  bestseller: false, instructor: "Dr. Sameer Khan" },
  { id: 11, title: "Natural Language Processing",          category: "Data & AI",   level: "Advanced",     rating: 4.6, students: 7200,  duration: "26 hrs", lessons: 98,  price: 1699, premium: true,  bestseller: false, instructor: "Dr. Sameer Khan" },
  { id: 12, title: "Generative AI & LLM Fundamentals",     category: "Data & AI",   level: "Intermediate", rating: 4.9, students: 26900, duration: "22 hrs", lessons: 87,  price: 1599, premium: true,  bestseller: true,  instructor: "Dr. Sameer Khan" },
  { id: 13, title: "Full Stack Web Development",           category: "Development", level: "Advanced",     rating: 4.8, students: 19700, duration: "58 hrs", lessons: 240, price: 2499, premium: true,  bestseller: true,  instructor: "Rohan Iyer" },
  { id: 14, title: "Git & GitHub Mastery",                 category: "Development", level: "Beginner",     rating: 4.6, students: 28300, duration: "8 hrs",  lessons: 38,  price: 0,    premium: false, bestseller: false, instructor: "Rohan Iyer" },
  { id: 15, title: "Data Structures & Algorithms",         category: "Development", level: "Advanced",     rating: 4.8, students: 20100, duration: "44 hrs", lessons: 176, price: 1899, premium: true,  bestseller: true,  instructor: "Priya Desai" },
  { id: 16, title: "React.js Complete Course",             category: "Development", level: "Intermediate", rating: 4.8, students: 23500, duration: "30 hrs", lessons: 128, price: 1499, premium: true,  bestseller: false, instructor: "Rohan Iyer" },
  { id: 17, title: "Node.js & Backend Development",        category: "Development", level: "Intermediate", rating: 4.7, students: 14200, duration: "26 hrs", lessons: 104, price: 1399, premium: true,  bestseller: false, instructor: "Priya Desai" },
  { id: 18, title: "Business Analytics",                   category: "Business",    level: "Beginner",     rating: 4.5, students: 8900,  duration: "16 hrs", lessons: 62,  price: 899,  premium: false, bestseller: false, instructor: "Nikhil Bhat" },
  { id: 19, title: "Digital Marketing",                    category: "Business",    level: "Beginner",     rating: 4.6, students: 16700, duration: "18 hrs", lessons: 74,  price: 999,  premium: true,  bestseller: false, instructor: "Nikhil Bhat" },
  { id: 20, title: "Product Management Fundamentals",      category: "Business",    level: "Intermediate", rating: 4.7, students: 11400, duration: "20 hrs", lessons: 80,  price: 1299, premium: true,  bestseller: false, instructor: "Nikhil Bhat" },
];

const CATEGORIES = ["Development", "Data & AI", "Business", "Career"];

const RESOURCES = [
  { id: 1,  title: "HTML Cheat Sheet",                      type: "Cheat Sheet",     premium: false },
  { id: 2,  title: "CSS Flexbox Guide",                     type: "Cheat Sheet",     premium: false },
  { id: 3,  title: "JavaScript Basics PDF",                 type: "Ebook",           premium: false },
  { id: 4,  title: "Python Syntax Cheat Sheet",              type: "Cheat Sheet",     premium: false },
  { id: 5,  title: "SQL Commands Cheat Sheet",               type: "Cheat Sheet",     premium: false },
  { id: 6,  title: "Data Analyst Interview Guide",           type: "Interview Guide", premium: true },
  { id: 7,  title: "100 Python Interview Questions",         type: "Interview Guide", premium: true },
  { id: 8,  title: "Machine Learning Cheat Sheet",           type: "Cheat Sheet",     premium: true },
  { id: 9,  title: "Complete SQL Interview Handbook",        type: "Interview Guide", premium: true },
  { id: 10, title: "Resume Template Pack",                   type: "Template",        premium: true },
  { id: 11, title: "Power BI Dashboard Templates",            type: "Template",        premium: true },
];

const PRICING_PLANS = [
  {
    id: "free", name: "Free", tagline: "Start learning today",
    monthly: 0, yearly: 0,
    features: ["5 beginner courses", "Basic lessons", "20 practice questions / month", "Community access", "Basic resources", "Limited interview questions"],
    cta: "Start Free", highlight: false
  },
  {
    id: "student", name: "Student", tagline: "For serious self-learners",
    monthly: 299, yearly: 2499,
    features: ["50+ courses", "Complete course curriculum", "100+ projects", "Downloadable resources", "Certificates", "Practice quizzes", "Interview preparation", "Coding challenges", "Progress tracking", "Community access"],
    cta: "Choose Student", highlight: false
  },
  {
    id: "pro", name: "Pro", tagline: "Most popular with job seekers",
    monthly: 599, yearly: 4999,
    features: ["Everything in Student", "120+ courses", "Advanced courses", "500+ projects", "Unlimited practice questions", "Full interview preparation", "Mock interviews", "Advanced coding challenges", "Career roadmap", "Resume & LinkedIn resources", "Priority support"],
    cta: "Go Pro", highlight: true
  },
  {
    id: "lifetime", name: "Lifetime", tagline: "Pay once, learn forever",
    monthly: 7999, yearly: 7999, oneTime: true,
    features: ["Lifetime access", "All current courses", "All future courses", "All premium resources", "All projects", "Interview preparation", "Mock tests", "Certificates", "Career resources", "No recurring payment"],
    cta: "Get Lifetime Access", highlight: false
  }
];

const FAQS = [
  { q: "What is LearnHub?", a: "LearnHub is an online learning platform for technology, data, business, and career skills — built around structured courses, projects, resources, and interview preparation." },
  { q: "Is LearnHub free?", a: "Yes. The Free plan gives you permanent access to a set of beginner courses, basic resources, and limited interview questions — no card required." },
  { q: "What content is included in the free plan?", a: "5 beginner courses, basic lessons, 20 practice questions a month, community access, and a handful of free cheat sheets." },
  { q: "What is included in the Student plan?", a: "Full access to 50+ courses, complete curriculums, 100+ projects, downloadable resources, certificates, and interview preparation." },
  { q: "What is included in Pro?", a: "Everything in Student plus the full 120+ course library, unlimited practice questions, mock interviews, and a personalised career roadmap." },
  { q: "What is included in Lifetime access?", a: "A single one-time payment for permanent access to every current and future course, resource, and interview prep tool — no renewal, ever." },
  { q: "Can I cancel my subscription?", a: "Yes, subscriptions can be cancelled at any time from your dashboard settings and remain active until the end of the billing period." },
  { q: "Can I switch from monthly to yearly?", a: "Yes — switch billing cycles at any time and we'll prorate the difference automatically." },
  { q: "Do courses include certificates?", a: "All Student, Pro, and Lifetime courses include a certificate of completion once you finish every module." },
  { q: "Are courses beginner friendly?", a: "Every learning path starts from fundamentals, with difficulty tags (Beginner / Intermediate / Advanced) so you can choose the right starting point." },
  { q: "Can I access LearnHub on mobile?", a: "This build is a desktop-focused demo, but the underlying course and progress data works the same across devices." },
  { q: "Do I get downloadable resources?", a: "Student, Pro, and Lifetime members can download cheat sheets, templates, and guides for offline use." },
  { q: "Is interview preparation included?", a: "A limited set of interview questions is free for everyone. Full technical, HR, and behavioural prep unlocks with Student and above." },
  { q: "Can I access courses after cancellation?", a: "You'll keep access until the end of your current billing period, after which your account reverts to the Free plan." },
  { q: "How does premium content work?", a: "Premium lessons, resources, and interview questions show a lock icon. Upgrading instantly unlocks them across the whole site." },
  { q: "Is payment required to create an account?", a: "No — signing up is free and gives you the Free plan automatically. You can upgrade whenever you're ready." },
  { q: "Can I change my plan later?", a: "Yes, you can upgrade, downgrade, or move to Lifetime at any point from the pricing page." },
  { q: "Are new courses added regularly?", a: "Yes, new courses and resources are added every month across Development, Data & AI, Business, and Career tracks." }
];
