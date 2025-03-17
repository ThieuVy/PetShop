const productsModule = require('./productsPet');
const productList = productsModule.products; // Lấy danh sách sản phẩm từ module products

console.log('Câu 1');
// Câu 1: Làm quen với array
console.log(productList);
console.log();

// Lấy 3 sản phẩm đầu tiên
const productsTop = productList.slice(0, 3);
console.log(productsTop);

console.log();

// Hiển thị thông tin của 3 sản phẩm đầu tiên
productsTop.forEach(item => {
    console.log(`ID: ${item.ID}`);
    console.log(`   Name: ${item.Name}`);
    console.log(`   Quantity: ${item.Quantity}`);
    console.log(`   Price: ${item.Price}`);
    console.log(`   Brand: ${item.Brand}`);
    console.log(`   Origin: ${item.Origin}`);
    console.log('-------------------');
});

console.log();

// Câu 2: Thêm một phần tử vào đầu hoặc cuối mảng
console.log('Câu 2');
let newProduct = {
    "ID": "PET0010",
    "Name": "Balo vận chuyển mèo có kính",
    "Images": ["cat_backpack_1.jpg", "cat_backpack_2.jpg"],
    "Description": "Balo trong suốt giúp thú cưng dễ dàng quan sát bên ngoài, thoáng khí.",
    "Quantity": 20,
    "Price": 420000,
    "Brand": "PetTravel",
    "Origin": "Trung Quốc",
    "Category": "Phụ kiện vận chuyển"
};

// Thêm sản phẩm vào cuối mảng
productList.push(newProduct);
//Hiển thị thông báo add thành công
console.log(`Đã thêm ID ${newProduct.ID} phần tử thành công`);

// Lấy 3 sản phẩm cuối cùng sau khi thêm sản phẩm mới
const productsLastThree = productList.slice(-3);
console.log(productsLastThree);

console.log();

//Câu 3: Xóa một phần tử khỏi mảng
console.log('Câu 3');
let deletedID = 'PET0011';
const deletedProduct = productList.findIndex (item => item.ID === deletedID); //Tìm vị trí của sản phẩm cần xóa
if (deletedProduct !== -1) { //Kiểm tra sản phẩm có tồn tại trong danh sách không
    productList.splice(deletedProduct, 1); //Xóa sản phẩm khỏi mảng
    console.log(`Đã xóa ID ${deletedID} thành công`);
    console.log(productList);
} else {
    console.log(`ID ${deletedID} không tồn tại trong danh sách!!`);
};

console.log();

//Câu 4: Xóa nhiều phần tử
//Xác định điều kiện xóa
//Xóa các sản phẩm có giá trên 100.000
//Sử dụng filter để lọc ra các sản phẩm có giá trên 100.000
console.log('Câu 4');
product = productList.filter(item => item.Price < 100000);
console.log('Danh sách sản phẩm có giá dưới 100.000:');
console.log(product);
