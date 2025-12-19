// Product Data Simulation
const products = [
    {
        id: 1,
        name: "iPhone 14 Pro",
        category: "smartphones",
        price: 999,
        oldPrice: 1099,
        rating: 4.7,
        reviews: 125,
        description: "Latest iPhone with Dynamic Island, A16 Bionic chip, and professional camera system.",
        image: "https://images.unsplash.com/photo-1663499482523-1c0c1eae708d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1663499482523-1c0c1eae708d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        stock: 15,
        featured: true
    },
    {
        id: 2,
        name: "MacBook Pro 16\"",
        category: "laptops",
        price: 2399,
        oldPrice: 2599,
        rating: 4.8,
        reviews: 89,
        description: "Powerful laptop with M2 Pro chip, Liquid Retina XDR display, and up to 22 hours battery life.",
        image: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        stock: 8,
        featured: true
    },
    {
        id: 3,
        name: "Sony WH-1000XM5",
        category: "audio",
        price: 399,
        oldPrice: 449,
        rating: 4.6,
        reviews: 210,
        description: "Industry-leading noise cancellation headphones with 30-hour battery life.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        stock: 25,
        featured: true
    },
    {
        id: 4,
        name: "Samsung Galaxy S23 Ultra",
        category: "smartphones",
        price: 1199,
        oldPrice: 1299,
        rating: 4.5,
        reviews: 95,
        description: "Ultimate smartphone with 200MP camera, S Pen, and powerful Snapdragon processor.",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        stock: 12,
        featured: false
    },
    {
        id: 5,
        name: "Dell XPS 13",
        category: "laptops",
        price: 1299,
        oldPrice: 1499,
        rating: 4.4,
        reviews: 76,
        description: "Compact laptop with InfinityEdge display, 12th Gen Intel processors, and premium design.",
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        stock: 18,
        featured: false
    },
    {
        id: 6,
        name: "Apple Watch Series 8",
        category: "wearables",
        price: 399,
        oldPrice: 429,
        rating: 4.3,
        reviews: 142,
        description: "Advanced health monitoring, crash detection, and always-on Retina display.",
        image: "https://images.unsplash.com/photo-1434493650001-7d3d8af8e4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1434493650001-7d3d8af8e4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        stock: 30,
        featured: true
    },
    {
        id: 7,
        name: "Bose QuietComfort 45",
        category: "audio",
        price: 329,
        oldPrice: 379,
        rating: 4.5,
        reviews: 87,
        description: "Premium noise-cancelling headphones with balanced audio and comfortable fit.",
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        stock: 22,
        featured: false
    },
    {
        id: 8,
        name: "Google Nest Hub",
        category: "smart-home",
        price: 89,
        oldPrice: 99,
        rating: 4.2,
        reviews: 56,
        description: "Smart display with Google Assistant, sleep sensing, and home automation control.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        stock: 45,
        featured: true
    },
    {
        id: 9,
        name: "iPad Pro 12.9\"",
        category: "tablets",
        price: 1099,
        oldPrice: 1199,
        rating: 4.7,
        reviews: 103,
        description: "Powerful tablet with M2 chip, Liquid Retina XDR display, and ProMotion technology.",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1548932990-17f4e62b9b4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        stock: 14,
        featured: false
    },
    {
        id: 10,
        name: "PlayStation 5",
        category: "gaming",
        price: 499,
        oldPrice: 549,
        rating: 4.8,
        reviews: 210,
        description: "Next-gen gaming console with ultra-high speed SSD and immersive 3D audio.",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        stock: 5,
        featured: true
    },
    {
        id: 11,
        name: "DJI Mini 3 Pro",
        category: "drones",
        price: 759,
        oldPrice: 899,
        rating: 4.6,
        reviews: 67,
        description: "Compact drone with 4K/60fps video, tri-directional obstacle sensing, and 34-min flight time.",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1520699311916-4e2b0f9b4e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        stock: 9,
        featured: false
    },
    {
        id: 12,
        name: "Logitech MX Master 3S",
        category: "accessories",
        price: 99,
        oldPrice: 129,
        rating: 4.5,
        reviews: 124,
        description: "Advanced wireless mouse with ultra-fast scrolling, silent clicks, and multi-device flow.",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        stock: 35,
        featured: false
    }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Categories
const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'smartphones', name: 'Smartphones', count: products.filter(p => p.category === 'smartphones').length },
    { id: 'laptops', name: 'Laptops', count: products.filter(p => p.category === 'laptops').length },
    { id: 'audio', name: 'Audio', count: products.filter(p => p.category === 'audio').length },
    { id: 'smart-home', name: 'Smart Home', count: products.filter(p => p.category === 'smart-home').length },
    { id: 'wearables', name: 'Wearables', count: products.filter(p => p.category === 'wearables').length },
    { id: 'tablets', name: 'Tablets', count: products.filter(p => p.category === 'tablets').length },
    { id: 'gaming', name: 'Gaming', count: products.filter(p => p.category === 'gaming').length },
    { id: 'drones', name: 'Drones', count: products.filter(p => p.category === 'drones').length },
    { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length }
];

// Utility Functions
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && halfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

// Update Cart Count
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    
    cartCountElements.forEach(element => {
        element.textContent = cartCount;
    });
}

// Save Cart to Local Storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add to Cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        alert('Product not found!');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartCount();
    
    // Show success message
    alert(`${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    
    // If we're on the cart page, refresh it
    if (window.location.pathname.includes('cart.html')) {
        renderCartPage();
    }
}

// Update Cart Quantity
function updateCartQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        
        // If we're on the cart page, refresh it
        if (window.location.pathname.includes('cart.html')) {
            renderCartPage();
        }
    }
}

// Calculate Cart Total
function calculateCartTotal() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax
    const shipping = subtotal > 0 ? (subtotal > 500 ? 0 : 15) : 0;
    const total = subtotal + tax + shipping;
    
    return {
        subtotal: formatPrice(subtotal),
        tax: formatPrice(tax),
        shipping: formatPrice(shipping),
        total: formatPrice(total)
    };
}

// Render Product Card
function renderProductCard(product) {
    const isOnSale = product.oldPrice && product.oldPrice > product.price;
    
    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${isOnSale ? '<span class="product-badge">Sale</span>' : ''}
                ${product.stock < 10 ? '<span class="product-badge" style="background-color: #f59e0b;">Low Stock</span>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">
                    <a href="product-detail.html?id=${product.id}">${product.name}</a>
                </h3>
                <div class="product-price">
                    ${formatPrice(product.price)}
                    ${isOnSale ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                </div>
                <div class="product-rating">
                    <span class="stars">${renderStars(product.rating)}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-actions">
                    <button class="btn-add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="btn-wishlist">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Render Featured Products
function renderFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    
    const featuredProducts = products.filter(product => product.featured);
    container.innerHTML = featuredProducts.map(renderProductCard).join('');
}

// Render Products Grid
function renderProductsGrid(filteredProducts = products, containerId = 'products-grid') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #d1d5db; margin-bottom: 1rem;"></i>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredProducts.map(renderProductCard).join('');
    
    // Update results count
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
        resultsCount.textContent = filteredProducts.length;
    }
}

// Render Category Filters
function renderCategoryFilters() {
    const container = document.getElementById('category-filter');
    if (!container) return;
    
    container.innerHTML = categories.map(category => `
        <li>
            <label class="filter-checkbox">
                <input type="checkbox" value="${category.id}">
                <span class="checkmark"></span>
                ${category.name}
                <span class="category-count">(${category.count})</span>
            </label>
        </li>
    `).join('');
}

// Filter Products
function filterProducts() {
    const selectedCategories = Array.from(document.querySelectorAll('#category-filter input:checked'))
        .map(checkbox => checkbox.value);
    
    const minPrice = parseInt(document.getElementById('min-price').value) || 0;
    const maxPrice = parseInt(document.getElementById('max-price').value) || 2000;
    
    const selectedRatings = Array.from(document.querySelectorAll('#rating-filter input:checked'))
        .map(checkbox => parseInt(checkbox.value));
    
    let filtered = products;
    
    // Filter by category
    if (selectedCategories.length > 0 && !selectedCategories.includes('all')) {
        filtered = filtered.filter(product => selectedCategories.includes(product.category));
    }
    
    // Filter by price
    filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);
    
    // Filter by rating
    if (selectedRatings.length > 0) {
        filtered = filtered.filter(product => {
            return selectedRatings.some(rating => product.rating >= rating);
        });
    }
    
    // Sort products
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        const sortValue = sortSelect.value;
        
        switch (sortValue) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                // Assuming newer products have higher IDs
                filtered.sort((a, b) => b.id - a.id);
                break;
        }
    }
    
    renderProductsGrid(filtered);
}

// Initialize Price Range Slider
function initPriceRangeSlider() {
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const priceMinRange = document.getElementById('price-min');
    const priceMaxRange = document.getElementById('price-max');
    const progress = document.querySelector('.progress');
    
    if (!minPriceInput || !maxPriceInput || !priceMinRange || !priceMaxRange || !progress) return;
    
    function updateProgress() {
        const min = parseInt(priceMinRange.value);
        const max = parseInt(priceMaxRange.value);
        
        minPriceInput.value = min;
        maxPriceInput.value = max;
        
        const minPercent = (min / priceMinRange.max) * 100;
        const maxPercent = 100 - (max / priceMaxRange.max) * 100;
        
        progress.style.left = `${minPercent}%`;
        progress.style.right = `${maxPercent}%`;
    }
    
    priceMinRange.addEventListener('input', updateProgress);
    priceMaxRange.addEventListener('input', updateProgress);
    
    minPriceInput.addEventListener('change', function() {
        const value = parseInt(this.value);
        if (value < 0) this.value = 0;
        if (value > priceMaxRange.value) this.value = priceMaxRange.value;
        priceMinRange.value = this.value;
        updateProgress();
    });
    
    maxPriceInput.addEventListener('change', function() {
        const value = parseInt(this.value);
        if (value > 2000) this.value = 2000;
        if (value < priceMinRange.value) this.value = priceMinRange.value;
        priceMaxRange.value = this.value;
        updateProgress();
    });
    
    updateProgress();
}

// Render Cart Page
function renderCartPage() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartSummaryContainer = document.querySelector('.cart-summary');
    
    if (!cartItemsContainer || !cartSummaryContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <h2>Your cart is empty</h2>
                <p>Add some products to your cart to continue shopping</p>
                <a href="products.html" class="btn btn-primary" style="margin-top: 1rem;">Continue Shopping</a>
            </div>
        `;
        
        cartSummaryContainer.innerHTML = `
            <h3>Order Summary</h3>
            <div class="summary-row">
                <span>Subtotal</span>
                <span>$0.00</span>
            </div>
            <div class="summary-row">
                <span>Tax</span>
                <span>$0.00</span>
            </div>
            <div class="summary-row">
                <span>Shipping</span>
                <span>$0.00</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span>$0.00</span>
            </div>
            <div class="cart-actions">
                <button class="btn btn-primary" disabled>Proceed to Checkout</button>
                <a href="products.html" class="btn btn-secondary">Continue Shopping</a>
            </div>
        `;
        
        return;
    }
    
    // Render cart items
    cartItemsContainer.innerHTML = `
        <div class="cart-header">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
            <div></div>
        </div>
        ${cart.map(item => `
            <div class="cart-item">
                <div class="cart-product">
                    <div class="cart-product-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-product-info">
                        <h4>${item.name}</h4>
                        <p>${formatPrice(item.price)}</p>
                    </div>
                </div>
                <div class="cart-price">${formatPrice(item.price)}</div>
                <div class="cart-quantity">
                    <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="text" value="${item.quantity}" onchange="updateCartQuantity(${item.id}, this.value)">
                    <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <div class="cart-price">${formatPrice(item.price * item.quantity)}</div>
                <div>
                    <button class="cart-remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('')}
    `;
    
    // Calculate and render summary
    const totals = calculateCartTotal();
    
    cartSummaryContainer.innerHTML = `
        <h3>Order Summary</h3>
        <div class="summary-row">
            <span>Subtotal</span>
            <span>${totals.subtotal}</span>
        </div>
        <div class="summary-row">
            <span>Tax</span>
            <span>${totals.tax}</span>
        </div>
        <div class="summary-row">
            <span>Shipping</span>
            <span>${totals.shipping}</span>
        </div>
        <div class="summary-row total">
            <span>Total</span>
            <span>${totals.total}</span>
        </div>
        <div class="cart-actions">
            <a href="checkout.html" class="btn btn-primary">Proceed to Checkout</a>
            <a href="products.html" class="btn btn-secondary">Continue Shopping</a>
        </div>
    `;
}

// Render Product Detail Page
function renderProductDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) return;
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Update page title
    document.title = `${product.name} | TechStore`;
    
    // Render product detail
    const container = document.querySelector('.product-detail-container');
    if (!container) return;
    
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
    
    container.innerHTML = `
        <div class="product-images">
            <div class="main-image">
                <img src="${product.images[0]}" alt="${product.name}" id="main-product-image">
            </div>
            <div class="image-thumbnails">
                ${product.images.map((img, index) => `
                    <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeProductImage('${img}', this)">
                        <img src="${img}" alt="${product.name}">
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="product-details">
            <h1>${product.name}</h1>
            <div class="product-price">${formatPrice(product.price)}</div>
            <div class="product-rating-detail">
                <div class="product-rating">
                    <span class="stars">${renderStars(product.rating)}</span>
                    <span class="rating-count">${product.rating} (${product.reviews} reviews)</span>
                </div>
                <div class="product-stock ${product.stock < 10 ? 'low' : ''} ${product.stock === 0 ? 'out' : ''}">
                    ${product.stock > 10 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock'}
                </div>
            </div>
            <p class="product-description-full">${product.description}</p>
            
            <div class="product-options">
                <div class="option-group">
                    <label>Color:</label>
                    <div class="option-buttons">
                        <button class="option-btn active">Space Gray</button>
                        <button class="option-btn">Silver</button>
                        <button class="option-btn">Midnight</button>
                    </div>
                </div>
                <div class="option-group">
                    <label>Storage:</label>
                    <div class="option-buttons">
                        <button class="option-btn">128GB</button>
                        <button class="option-btn active">256GB</button>
                        <button class="option-btn">512GB</button>
                        <button class="option-btn">1TB</button>
                    </div>
                </div>
            </div>
            
            <div class="quantity-selector">
                <label>Quantity:</label>
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="updateQuantity(-1)">-</button>
                    <input type="text" class="quantity-input" value="1" id="product-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(1)">+</button>
                </div>
            </div>
            
            <div class="product-actions-detail">
                <button class="btn btn-primary btn-add-to-cart-large" onclick="addToCartDetail(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button class="btn btn-primary btn-buy-now" onclick="buyNow(${product.id})">
                    Buy Now
                </button>
            </div>
            
            <div class="product-meta">
                <div class="meta-item">
                    <i class="fas fa-shipping-fast"></i>
                    <span>Free shipping on orders over $500</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-undo"></i>
                    <span>30-day return policy</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-shield-alt"></i>
                    <span>2-year warranty</span>
                </div>
            </div>
        </div>
    `;
    
    // Render related products
    const relatedContainer = document.getElementById('related-products-grid');
    if (relatedContainer && relatedProducts.length > 0) {
        relatedContainer.innerHTML = relatedProducts.map(renderProductCard).join('');
    }
}

// Product Detail Page Functions
function changeProductImage(src, element) {
    document.getElementById('main-product-image').src = src;
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    
    element.classList.add('active');
}

function updateQuantity(change) {
    const input = document.getElementById('product-quantity');
    let value = parseInt(input.value) || 1;
    value += change;
    
    if (value < 1) value = 1;
    
    input.value = value;
}

function addToCartDetail(productId) {
    const quantity = parseInt(document.getElementById('product-quantity').value) || 1;
    addToCart(productId, quantity);
}

function buyNow(productId) {
    const quantity = parseInt(document.getElementById('product-quantity').value) || 1;
    addToCart(productId, quantity);
    window.location.href = 'checkout.html';
}

// Checkout Page Functions
function renderCheckoutPage() {
    const orderSummaryContainer = document.getElementById('order-summary-items');
    const orderTotalsContainer = document.getElementById('order-totals');
    
    if (!orderSummaryContainer || !orderTotalsContainer) return;
    
    if (cart.length === 0) {
        orderSummaryContainer.innerHTML = `
            <div class="cart-empty">
                <p>Your cart is empty</p>
                <a href="products.html" class="btn btn-primary">Shop Now</a>
            </div>
        `;
        return;
    }
    
    // Render order items
    orderSummaryContainer.innerHTML = cart.map(item => `
        <div class="order-summary-item">
            <div class="product-info">
                <div class="product-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div>
                    <h4>${item.name}</h4>
                    <p>Quantity: ${item.quantity}</p>
                </div>
            </div>
            <div class="product-total">
                ${formatPrice(item.price * item.quantity)}
            </div>
        </div>
    `).join('');
    
    // Render totals
    const totals = calculateCartTotal();
    
    orderTotalsContainer.innerHTML = `
        <div class="summary-row">
            <span>Subtotal</span>
            <span>${totals.subtotal}</span>
        </div>
        <div class="summary-row">
            <span>Shipping</span>
            <span>${totals.shipping}</span>
        </div>
        <div class="summary-row">
            <span>Tax</span>
            <span>${totals.tax}</span>
        </div>
        <div class="summary-row total">
            <span>Total</span>
            <span>${totals.total}</span>
        </div>
    `;
}

function processCheckout(event) {
    event.preventDefault();
    
    // Validate form
    const form = document.getElementById('checkout-form');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // In a real application, you would process payment here
    alert('Thank you for your order! Your order has been placed successfully.');
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartCount();
    
    // Redirect to confirmation page
    window.location.href = 'index.html';
}

// Initialize the Website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart count
    updateCartCount();
    
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Initialize based on current page
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('index.html') || currentPage === '/') {
        renderFeaturedProducts();
    } else if (currentPage.includes('products.html')) {
        renderCategoryFilters();
        initPriceRangeSlider();
        renderProductsGrid();
        
        // Set up filter events
        document.querySelectorAll('#category-filter input, #rating-filter input').forEach(input => {
            input.addEventListener('change', filterProducts);
        });
        
        const applyFiltersBtn = document.querySelector('.apply-filters');
        const clearFiltersBtn = document.querySelector('.clear-filters');
        const sortSelect = document.getElementById('sort-select');
        
        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', filterProducts);
        }
        
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', () => {
                document.querySelectorAll('#category-filter input, #rating-filter input').forEach(input => {
                    input.checked = false;
                });
                
                document.getElementById('min-price').value = 0;
                document.getElementById('max-price').value = 2000;
                initPriceRangeSlider();
                filterProducts();
            });
        }
        
        if (sortSelect) {
            sortSelect.addEventListener('change', filterProducts);
        }
        
        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                
                if (searchTerm.length === 0) {
                    filterProducts();
                    return;
                }
                
                const filtered = products.filter(product => 
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm) ||
                    product.category.toLowerCase().includes(searchTerm)
                );
                
                renderProductsGrid(filtered);
            });
        }
    } else if (currentPage.includes('product-detail.html')) {
        renderProductDetailPage();
    } else if (currentPage.includes('cart.html')) {
        renderCartPage();
    } else if (currentPage.includes('checkout.html')) {
        renderCheckoutPage();
        
        // Set up form submission
        const checkoutForm = document.getElementById('checkout-form');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', processCheckout);
        }
        
        // Payment method selection
        document.querySelectorAll('.payment-method input').forEach(radio => {
            radio.addEventListener('change', function() {
                document.querySelectorAll('.payment-method').forEach(method => {
                    method.classList.remove('selected');
                });
                
                if (this.checked) {
                    this.closest('.payment-method').classList.add('selected');
                }
            });
        });
    }
    
    // Newsletter form submission
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}!`);
            this.reset();
        });
    });
    
    // Add to cart buttons (for dynamically added products)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.btn-add-to-cart')) {
            const productCard = e.target.closest('.product-card');
            if (productCard) {
                const productId = parseInt(productCard.dataset.id);
                if (productId) {
                    addToCart(productId);
                }
            }
        }
    });
    
    // Wishlist buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.btn-wishlist')) {
            const btn = e.target.closest('.btn-wishlist');
            const icon = btn.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#ef4444';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
            }
        }
    });
});