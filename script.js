
// Load products from JSON
let products = [];
let cart = [];

// Fetch products
fetch('attached_assets/products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts(products);
    })
    .catch(error => console.error('Error loading products:', error));

// Display products
function displayProducts(productsToShow) {
    const productSlider = document.getElementById('productSlider');
    if (!productSlider) return;
    
    productSlider.innerHTML = '';
    const featuredProducts = productsToShow.slice(0, 5);

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="https://via.placeholder.com/200" alt="${product.Name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.Name}</h3>
                <p class="product-price">${formatPrice(product.Price)}đ</p>
                <div class="product-actions">
                    <button onclick="showProductDetails(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                        Xem chi tiết
                    </button>
                    <button class="add-to-cart" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Format price with commas
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Filter products
const filterButtons = document.querySelectorAll('.product-filters button');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const category = button.textContent;
        if (category === 'Tất cả') {
            displayProducts(products);
        } else {
            const filtered = products.filter(product => 
                product.Category.includes(category === 'Thức ăn' ? 'Thức ăn' : 
                    category === 'Phụ kiện' ? 'Phụ kiện' : 'Vệ sinh')
            );
            displayProducts(filtered);
        }
    });
});

// Search functionality
const searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter(product => 
        product.Name.toLowerCase().includes(searchTerm) ||
        product.Description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filtered);
});

// Cart functionality
function addToCart(product) {
    const existingItem = cart.find(item => item.ID === product.ID);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }
    
    updateCartCount();
    updateCartDisplay();
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total span');
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="https://via.placeholder.com/50" alt="${item.Name}">
            <div class="cart-item-details">
                <h4>${item.Name}</h4>
                <p>${formatPrice(item.Price)}đ x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart('${item.ID}')">&times;</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.Price * item.quantity), 0);
    cartTotal.textContent = `${formatPrice(total)}đ`;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.ID !== productId);
    updateCartCount();
    updateCartDisplay();
}

// Slider controls
const prevButton = document.querySelector('.slider-button.prev');
const nextButton = document.querySelector('.slider-button.next');
const slider = document.getElementById('productSlider');

if (prevButton && nextButton) {
    nextButton.addEventListener('click', () => {
        slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
    });

    prevButton.addEventListener('click', () => {
        slider.scrollBy({ left: -slider.offsetWidth, behavior: 'smooth' });
    });
}

// Cart modal
const cartIcon = document.querySelector('.cart');
const cartModal = document.getElementById('cartModal');
const closeCart = document.querySelector('.close-cart');

cartIcon.addEventListener('click', () => {
    cartModal.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

// Checkout
document.querySelector('.checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Giỏ hàng trống!');
        return;
    }
    alert('Cảm ơn bạn đã mua hàng!');
    cart = [];
    updateCartCount();
    updateCartDisplay();
    cartModal.classList.remove('active');

function showProductDetails(product) {
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="product-modal-content">
            <span class="close-modal">&times;</span>
            <div class="product-detail">
                <img src="https://via.placeholder.com/400" alt="${product.Name}">
                <div class="product-detail-info">
                    <h2>${product.Name}</h2>
                    <p class="price">${formatPrice(product.Price)}đ</p>
                    <p class="description">${product.Description}</p>
                    <p><strong>Thương hiệu:</strong> ${product.Brand}</p>
                    <p><strong>Xuất xứ:</strong> ${product.Origin}</p>
                    <button class="add-to-cart" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.querySelector('.close-modal').onclick = () => {
        document.body.removeChild(modal);
    };
}

// Show notification
function showNotification(message, isSuccess = true) {
    const notification = document.createElement('div');
    notification.className = `notification ${isSuccess ? 'success' : 'error'}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}

});
