const { products } = require('../../products');
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products.slice(0, 5));
});

function displayProducts(productsToShow) {
    const productSlider = document.getElementById('productSlider');
    
    if (productSlider) {
        productSlider.innerHTML = '';
        
        productsToShow.forEach(product => {
            const productCard = createProductCard(product);
            productSlider.appendChild(productCard);
        });
    }
}

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.Images[0]}" alt="${product.Name}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.Name}</h3>
            <p class="product-price">${formatPrice(product.Price)}đ</p>
            <p class="product-description">${product.Description.substring(0, 100)}...</p>
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
    return productCard;
}

// Format price with commas
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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
            <img src="${item.Images[0]}" alt="${item.Name}">
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

function showProductDetails(product) {
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="product-modal-content">
            <span class="close-modal">&times;</span>
            <div class="product-detail">
                <img src="${product.Images[0]}" alt="${product.Name}">
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