// Khai báo các biến toàn cục
let cart = []; // Mảng chứa các sản phẩm trong giỏ hàng
let currentImageIndex = 0; // Chỉ số ảnh hiện tại trong gallery
let currentProduct = null; // Sản phẩm đang được xem chi tiết

// Hàm lấy danh sách sản phẩm nổi bật
async function getFeaturedProducts() {
    try {
        const response = await fetch('/products/featured');
        const data = await response.json();
        console.log('Featured products:', data);
        return data;
    } catch (error) {
        console.error('Error fetching featured products:', error);
        return [];
    }
}

// Hàm lấy tất cả sản phẩm hoặc lọc theo danh mục
async function fetchProducts(category = 'Tất cả', query = '') {
    try {
        const response = await fetch(`/products/list?category=${encodeURIComponent(category)}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        console.log('Fetched products:', data);
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Hàm tìm kiếm sản phẩm theo từ khóa
async function searchProducts(query) {
    try {
        const response = await fetch(`/products/list?query=${query}`);
        const data = await response.json();
        displayProducts(data);
    } catch (error) {
        console.error('Error searching products:', error);
    }
}

// Hàm xem chi tiết sản phẩm
function viewProductDetails(productId) {
    window.location.href = `product-details.html?id=${productId}`;
}

// Gán các hàm vào đối tượng window để có thể gọi từ HTML
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.viewProductDetails = viewProductDetails;
window.updateQuantity = updateQuantity;
window.addToCartWithQuantity = addToCartWithQuantity;
window.showCart = showCart;
window.hideCart = hideCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.checkout = checkout;

// Chạy khi DOM được tải hoàn toàn
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM loaded'); 

    // Thêm sự kiện click cho biểu tượng giỏ hàng
    const cartIcon = document.querySelector('.cart');
    if (cartIcon) {
        cartIcon.addEventListener('click', showCart);
    }

    // Khôi phục giỏ hàng từ localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }

    // Nếu đang ở trang chủ
    const productSlider = document.getElementById('productSlider');
    if (productSlider) {
        console.log('Found productSlider, initializing featured products');
        const featuredProducts = await getFeaturedProducts();
        if (featuredProducts && featuredProducts.length > 0) {
            displayProducts(featuredProducts);
        }
    }

    // Nếu đang ở trang products.html
    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
        console.log('Found productGrid, initializing all products');
        const products = await fetchProducts();
        displayProducts(products);
        setupFilterButtons();
        setupSearch();
    }

    // Khởi tạo số lượng giỏ hàng
    updateCartCount();

    // Khởi tạo trang chi tiết sản phẩm nếu đang ở trang đó
    if (window.location.pathname.includes('product-details.html')) {
        initProductDetails();
    }
});

// Display products in the grid
async function displayProducts(products) {
    const productGrid = document.getElementById('productGrid');
    const productSlider = document.getElementById('productSlider');
    
    if (!products || products.length === 0) {
        console.error('No products to display');
        return;
    }
    
    console.log('Displaying products:', products);
    
    // Nếu đang ở trang products.html
    if (productGrid) {
        productGrid.innerHTML = products.map(product => createProductGridCard(product)).join('');
    }
    // Nếu đang ở trang index.html (featured products)
    else if (productSlider) {
        const gridWrapper = document.createElement('div');
        gridWrapper.className = 'featured-grid';
        gridWrapper.innerHTML = products.slice(0, 6).map(product => createFeaturedCard(product)).join('');
        productSlider.innerHTML = '';
    productSlider.appendChild(gridWrapper);
    }
}

// Create product card for products.html grid
function createProductGridCard(product) {
    const imagePath = product.Images && product.Images.length > 0 
        ? product.Images[0] 
        : '../Images/placeholder.jpg';
    
    const truncatedDesc = product.Description.length > 150
        ? product.Description.slice(0, 147) + '...'
        : product.Description;
    
    return `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${imagePath}" alt="${product.Name}" onerror="this.src='../Images/placeholder.jpg'" class="product-image">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.Name}</h3>
                <p class="product-description">${truncatedDesc}</p>
                <div class="price-stock-container">
                    <p class="product-price">${formatPrice(product.Price)}đ</p>
                    <p class="product-stock">Còn lại: ${product.Quantity}</p>
                </div>
                <div class="controls-container">
                    <div class="quantity-controls">
                        <button onclick="updateQuantity('${product.ID}', -1)" class="minus-btn">-</button>
                        <span id="quantity-${product.ID}">1</span>
                        <button onclick="updateQuantity('${product.ID}', 1)" class="plus-btn">+</button>
                    </div>
                    <div class="card-actions">
                        <button onclick="viewProductDetails('${product.ID}')" class="view-details">
                            Xem chi tiết
                        </button>
                        <button onclick="addToCartWithQuantity('${product.ID}')" class="cart-button">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Create product card for featured products on index.html
function createFeaturedCard(product) {
    const imagePath = product.Images && product.Images.length > 0 
        ? product.Images[0] 
        : '../Images/placeholder.jpg';
    
    const truncatedDesc = product.Description.length > 100 
        ? product.Description.slice(0, 97) + '...' 
        : product.Description;
    
    return `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${imagePath}" alt="${product.Name}" onerror="this.src='../Images/placeholder.jpg'" class="product-image">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.Name}</h3>
                <p class="product-description">${truncatedDesc}</p>
                <div class="price-stock-container">
                    <p class="product-price">${formatPrice(product.Price)}đ</p>
                    <p class="product-stock">Còn lại: ${product.Quantity}</p>
                </div>
                <div class="controls-container">
                    <div class="quantity-controls">
                        <button onclick="updateQuantity('${product.ID}', -1)" class="minus-btn">-</button>
                        <span id="quantity-${product.ID}">1</span>
                        <button onclick="updateQuantity('${product.ID}', 1)" class="plus-btn">+</button>
                    </div>
                    <div class="card-actions">
                        <button onclick="viewProductDetails('${product.ID}')" class="view-details">
                            Xem chi tiết
                        </button>
                        <button onclick="addToCart('${product.ID}')" class="cart-button">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Hàm định dạng giá tiền
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Hàm hiển thị thông báo
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        document.body.removeChild(toast);
    }, 3000);
}

// Kiểm tra xem người dùng đã đăng nhập chưa (giả lập)
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true'; // Kiểm tra trạng thái đăng nhập từ localStorage
}

// Hiển thị modal yêu cầu đăng nhập
function showLoginModal() {
    // Tạo modal yêu cầu đăng nhập
    const modal = document.createElement('div');
    modal.className = 'login-required-modal';
    modal.innerHTML = `
        <div class="login-modal-content">
            <h2>Đăng nhập để tiếp tục</h2>
            <p>Vui lòng đăng nhập hoặc đăng ký để thêm sản phẩm vào giỏ hàng</p>
            <div class="login-modal-buttons">
                <a href="/login" class="login-btn">Đăng nhập</a>
                <a href="/register" class="register-btn">Đăng ký</a>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Đóng modal khi click ra ngoài
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Hàm thêm vào giỏ hàng với số lượng cụ thể
async function addToCartWithQuantity(productId) {
    try {
        // Lấy products từ window object
        const products = window.products;
        const product = products.find(p => p.ID === productId);
        
        if (!product) {
            showToast('Không tìm thấy sản phẩm');
            return;
        }

        const quantityElement = document.getElementById(`quantity-${productId}`);
        const quantity = parseInt(quantityElement.textContent);

        if (product.Quantity <= 0) {
            showToast(`Không thể thêm ${product.Name} - Sản phẩm đã hết hàng`);
            return;
        }

        const existingItem = cart.find(item => item.ID === product.ID);
        if (existingItem) {
            if (existingItem.quantity + quantity > product.Quantity) {
                showToast(`Không thể thêm ${product.Name} - Vượt quá số lượng tồn kho`);
                return;
            }
            existingItem.quantity += quantity;
        } else {
            cart.push({...product, quantity: quantity});
        }
        
        // Lưu giỏ hàng vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        showToast(`Đã thêm ${quantity} ${product.Name} vào giỏ hàng`);
        updateCartCount();
        
        // Reset số lượng về 1 sau khi thêm vào giỏ hàng
        quantityElement.textContent = '1';
    } catch (error) {
        console.error('Error adding to cart:', error);
        showToast('Có lỗi xảy ra khi thêm vào giỏ hàng');
    }
}

// Hàm thêm sản phẩm vào giỏ hàng
async function addToCart(productId) {
    try {
        // Lấy products từ window object
        const products = window.products;
        const product = products.find(p => p.ID === productId);
        
        if (!product) {
            showToast('Không tìm thấy sản phẩm');
        return;
    }

    if (product.Quantity <= 0) {
        showToast(`Không thể thêm ${product.Name} - Sản phẩm đã hết hàng`);
        return;
    }

    const existingItem = cart.find(item => item.ID === product.ID);
    if (existingItem) {
        if (existingItem.quantity >= product.Quantity) {
            showToast(`Không thể thêm ${product.Name} - Đã đạt số lượng tối đa`);
            return;
        }
        existingItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }
        
        // Lưu giỏ hàng vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    
    showToast(`Đã thêm ${product.Name} vào giỏ hàng thành công`);
        updateCartCount();
    } catch (error) {
        console.error('Error adding to cart:', error);
        showToast('Có lỗi xảy ra khi thêm vào giỏ hàng');
    }
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.ID === productId);
    if (index > -1) {
        const removedItem = cart[index];
        cart.splice(index, 1);
        // Lưu giỏ hàng vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        showToast(`Đã xóa ${removedItem.Name} khỏi giỏ hàng`);
        updateCartDisplay();
        updateCartCount();
    }
}

// Hàm cập nhật số lượng trong giỏ hàng
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

// Xử lý sự kiện click cho các nút lọc
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.product-filters button');
    filterButtons.forEach(button => {
        button.addEventListener('click', async () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Get products for selected category
            const products = await fetchProducts(button.textContent);
            displayProducts(products);
        });
    });
}

// Xử lý chức năng tìm kiếm
function setupSearch() {
    const searchInput = document.querySelector('.search-box input');
    if (!searchInput) return;
    
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(async () => {
            const query = e.target.value;
            const activeCategory = document.querySelector('.product-filters button.active')?.textContent || 'Tất cả';
            const products = await fetchProducts(activeCategory, query);
        displayProducts(products);
        }, 300);
    });
}

// Hàm cập nhật số lượng sản phẩm
function updateQuantity(productId, change) {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    let currentQuantity = parseInt(quantityElement.textContent);
    
    // Đảm bảo số lượng không nhỏ hơn 1
    currentQuantity = Math.max(1, currentQuantity + change);
    quantityElement.textContent = currentQuantity;
}

// Hàm hiển thị giỏ hàng
function showCart() {
    const cartModal = document.querySelector('.cart-modal');
    cartModal.classList.add('active');
    updateCartDisplay();
}

// Hàm ẩn giỏ hàng
function hideCart() {
    const cartModal = document.querySelector('.cart-modal');
    cartModal.classList.remove('active');
}

// Hàm cập nhật hiển thị giỏ hàng
function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    
    if (!cartItems || !cartTotal) return;
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.Price * item.quantity;
        total += itemTotal;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.Images[0]}" alt="${item.Name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.Name}</h3>
                <p>Giá: ${item.Price.toLocaleString('vi-VN')}đ</p>
                <div class="cart-item-quantity">
                    <button onclick="updateCartItemQuantity('${item.ID}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartItemQuantity('${item.ID}', 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart('${item.ID}')">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(itemElement);
    });
    
    cartTotal.innerHTML = `
        <div class="total">Tổng cộng: ${total.toLocaleString('vi-VN')}đ</div>
        <button class="checkout-btn" onclick="checkout()">Thanh toán</button>
    `;
}

// Hàm cập nhật số lượng trong giỏ hàng
function updateCartItemQuantity(productId, change) {
    const item = cart.find(item => item.ID === productId);
    if (!item) return;
    
    const newQuantity = item.quantity + change;
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }

    item.quantity = newQuantity;
    // Lưu giỏ hàng vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    updateCartCount();
}

// Hàm thanh toán
function checkout() {
    if (cart.length === 0) {
        showToast('Giỏ hàng trống');
        return;
    }
    
    showToast('Thanh toán thành công!');
    cart = [];
    // Xóa giỏ hàng khỏi localStorage sau khi thanh toán
    localStorage.removeItem('cart');
    updateCartDisplay();
    updateCartCount();
    setTimeout(hideCart, 1500);
}

// Hàm khởi tạo trang chi tiết sản phẩm
function initProductDetails() {
    // Lấy ID sản phẩm từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
        window.location.href = 'products.html';
        return;
    }
    
    // Lấy thông tin sản phẩm từ window.products
    currentProduct = window.products.find(p => p.ID === productId);
    
    if (!currentProduct) {
        window.location.href = 'products.html';
        return;
    }
    
    // Cập nhật thông tin sản phẩm
    document.getElementById('productName').textContent = currentProduct.Name;
    document.getElementById('productPrice').textContent = `${formatPrice(currentProduct.Price)}đ`;
    document.getElementById('productDescription').textContent = currentProduct.Description;
    document.getElementById('productBrand').textContent = currentProduct.Brand;
    document.getElementById('productOrigin').textContent = currentProduct.Origin;
    document.getElementById('productCategory').textContent = currentProduct.Category;
    document.getElementById('productId').textContent = currentProduct.ID;
    document.getElementById('productStock').textContent = currentProduct.Quantity;
    
    // Hiển thị hình ảnh chính
    const mainImage = document.querySelector('.main-image img');
    mainImage.src = currentProduct.Images[0];
    mainImage.alt = currentProduct.Name;
    
    // Hiển thị thumbnails
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    thumbnailContainer.innerHTML = '';
    currentProduct.Images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `${currentProduct.Name} - Ảnh ${index + 1}`;
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        thumbnail.onclick = () => {
            mainImage.src = image;
            document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
        };
        thumbnailContainer.appendChild(thumbnail);
    });
}
