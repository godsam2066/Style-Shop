// Sample product data
const products = [
    {
        id: 1,
        title: "Classic Cotton Shirt",
        description: "Premium cotton shirt perfect for any occasion",
        price: "GHS 100",
        category: "shirts",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 2,
        title: "Elegant Summer Dress",
        description: "Flowing dress that's perfect for warm weather",
        price: "GHS 300",
        category: "dresses",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 3,
        title: "Leather Handbag",
        description: "Handcrafted leather bag with modern design",
        price: "GHC 50",
        category: "accessories",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 4,
        title: "Casual Button-Up",
        description: "Comfortable and stylish for everyday wear",
        price: "$GHC 550",
        category: "shirts",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 5,
        title: "Evening Gown",
        description: "Sophisticated dress for special occasions",
        price: "GHC 299",
        category: "dresses",
        image: "https://images.unsplash.com/photo-1566479179817-c4e12a44e481?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 6,
        title: "Designer Watch",
        description: "Timepiece that combines function and style",
        price: "GHC376",
        category: "accessories",
        image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 7,
        title: "Polo Shirt",
        description: "Classic polo in premium organic cotton",
        price: "GHC 60",
        category: "shirts",
        image: "https://images.unsplash.com/photo-1503341338985-b80d0a6638b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 8,
        title: "Silk Scarf",
        description: "Luxurious silk scarf with unique pattern",
        price: "GHC125",
        category: "accessories",
        image: "https://images.unsplash.com/photo-1601924187484-3ca2b45c45a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
];

// DOM Elements
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const productGrid = document.getElementById('product-grid');

// Mobile Navigation Toggle
mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const sectionTop = section.offsetTop - navHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Add smooth scrolling to all nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            const sectionId = href.substring(1);
            scrollToSection(sectionId);
        }
    });
});

// Product filtering functionality
let currentFilter = 'all';

function filterProducts(category) {
    currentFilter = category;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter and display products
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    displayProducts(filteredProducts);
}

// Display products in the grid
function displayProducts(productsToShow) {
    productGrid.innerHTML = '';
    
    productsToShow.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.1}s`;
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
            </div>
        `;
        
        // Add click event to product card
        productCard.addEventListener('click', function() {
            showProductModal(product);
        });
        
        productGrid.appendChild(productCard);
    });
    
    // Add fade-in animation
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach(card => {
            card.classList.add('fade-in-up');
        });
    }, 100);
}

// Show product modal (simple alert for this demo)
function showProductModal(product) {
    alert(`Product: ${product.title}\nPrice: ${product.price}\n\nThis would normally open a detailed product view or add to cart functionality.`);
}

// Handle contact form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const message = event.target.querySelector('textarea').value;
    
    // Simulate form submission
    if (name && email && message) {
        alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
        event.target.reset();
    } else {
        alert('Please fill in all fields.');
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Initial product display
    displayProducts(products);
    
    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add animation classes to various elements
    const animatedElements = document.querySelectorAll('.section-header, .about-text, .contact-info, .footer-section');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Add active navigation highlighting based on scroll position
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavigation);

// Product search functionality (bonus feature)
function searchProducts(searchTerm) {
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayProducts(filteredProducts);
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Preload images for better performance
function preloadImages() {
    products.forEach(product => {
        const img = new Image();
        img.src = product.image;
    });
}

// Initialize preloading
preloadImages();

// Add loading states for better UX
function showLoading() {
    productGrid.innerHTML = '<div class="loading">Loading products...</div>';
}

function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

// Enhanced product card interactions
function addProductInteractions() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.product-card')) {
            const card = e.target.closest('.product-card');
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        }
    });
}

// Initialize enhanced interactions
addProductInteractions();
