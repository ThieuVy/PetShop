let products = [
    {
        "ID": "PET0001",
        "Name": "Thức ăn cho chó Pedigree 1.5kg",
        "Images": ["pedigree_1.jpg", "pedigree_2.jpg"],
        "Description": "Thức ăn dinh dưỡng cho chó trưởng thành, hỗ trợ tiêu hóa và tăng cường miễn dịch.",
        "Quantity": 50,
        "Price": 150000,
        "Brand": "Pedigree",
        "Origin": "Thái Lan",
        "Category": "Thức ăn cho chó"
      },
      {
        "ID": "PET0002",
        "Name": "Cát vệ sinh cho mèo KitCat 10L",
        "Images": ["kitcat_1.jpg", "kitcat_2.jpg"],
        "Description": "Cát vệ sinh khử mùi, vón cục tốt, giúp giữ vệ sinh hiệu quả cho mèo.",
        "Quantity": 40,
        "Price": 200000,
        "Brand": "KitCat",
        "Origin": "Singapore",
        "Category": "Vệ sinh cho mèo"
      },
      {
        "ID": "PET0003",
        "Name": "Dây dắt chó có thể thu gọn 5m",
        "Images": ["leash_1.jpg", "leash_2.jpg"],
        "Description": "Dây dắt bằng nylon bền chắc, có thể điều chỉnh độ dài, phù hợp với chó dưới 30kg.",
        "Quantity": 30,
        "Price": 250000,
        "Brand": "Flexi",
        "Origin": "Đức",
        "Category": "Phụ kiện cho chó"
      },
      {
        "ID": "PET0004",
        "Name": "Pate cho mèo Whiskas 85g",
        "Images": ["whiskas_pate_1.jpg", "whiskas_pate_2.jpg"],
        "Description": "Pate thịt bò bổ sung dưỡng chất cho mèo, hỗ trợ hệ tiêu hóa và lông mượt.",
        "Quantity": 100,
        "Price": 25000,
        "Brand": "Whiskas",
        "Origin": "Mỹ",
        "Category": "Thức ăn cho mèo"
      },
      {
        "ID": "PET0005",
        "Name": "Lồng vận chuyển thú cưng size M",
        "Images": ["carrier_1.jpg", "carrier_2.jpg"],
        "Description": "Lồng vận chuyển có tay cầm chắc chắn, thông thoáng, phù hợp với chó và mèo.",
        "Quantity": 20,
        "Price": 450000,
        "Brand": "PetCargo",
        "Origin": "Việt Nam",
        "Category": "Phụ kiện vận chuyển"
      },
      {
        "ID": "PET0006",
        "Name": "Thức ăn cho mèo Royal Canin 2kg",
        "Images": ["royalcanin_1.jpg", "royalcanin_2.jpg"],
        "Description": "Thức ăn khô giàu dinh dưỡng, giúp lông mèo mềm mượt và hỗ trợ tiêu hóa.",
        "Quantity": 35,
        "Price": 320000,
        "Brand": "Royal Canin",
        "Origin": "Pháp",
        "Category": "Thức ăn cho mèo"
      },
      {
        "ID": "PET0007",
        "Name": "Bánh thưởng cho chó vị gà 500g",
        "Images": ["dog_treats_1.jpg", "dog_treats_2.jpg"],
        "Description": "Bánh thưởng giúp huấn luyện chó, hương vị thơm ngon, dễ tiêu hóa.",
        "Quantity": 60,
        "Price": 180000,
        "Brand": "DoggyMan",
        "Origin": "Nhật Bản",
        "Category": "Thức ăn cho chó"
      },
      {
        "ID": "PET0008",
        "Name": "Chuồng chó size L",
        "Images": ["dog_cage_1.jpg", "dog_cage_2.jpg"],
        "Description": "Chuồng chó bằng sắt chắc chắn, dễ vệ sinh, phù hợp với chó trung bình.",
        "Quantity": 15,
        "Price": 600000,
        "Brand": "PetCage",
        "Origin": "Việt Nam",
        "Category": "Phụ kiện cho chó"
      },
      {
        "ID": "PET0009",
        "Name": "Cát vệ sinh hữu cơ cho mèo 5L",
        "Images": ["organic_litter_1.jpg", "organic_litter_2.jpg"],
        "Description": "Cát vệ sinh hữu cơ thân thiện với môi trường, khử mùi tốt.",
        "Quantity": 25,
        "Price": 190000,
        "Brand": "EcoPet",
        "Origin": "Hàn Quốc",
        "Category": "Vệ sinh cho mèo"
      },
      {
        "ID": "PET0010",
        "Name": "Balo vận chuyển mèo có kính",
        "Images": ["cat_backpack_1.jpg", "cat_backpack_2.jpg"],
        "Description": "Balo trong suốt giúp thú cưng dễ dàng quan sát bên ngoài, thoáng khí.",
        "Quantity": 20,
        "Price": 420000,
        "Brand": "PetTravel",
        "Origin": "Trung Quốc",
        "Category": "Phụ kiện vận chuyển"
      }
];

function output(products){
    console.log("\nDanh sách sản phẩm:");
    products.forEach(product => {
        console.log('ID:', product.ID);
        console.log('Name:', product.Name);
        console.log('Images:', product.Images.join(', '));
        console.log('Description:', product.Description);
        console.log('Quantity:', product.Quantity);
        console.log('Price:', product.Price);
        console.log('Brand:', product.Brand);
        console.log('Origin:', product.Origin);
        console.log('Category:', product.Category);
        console.log('----------------------------------');    
    });
}

function addProduct(products, newProduct){
    products.push(newProduct);
    console.log(`Đã thêm sản phẩm mới (ID: ${newProduct.ID}) vào mảng thành công!`);
    return products;
}

module.exports = {
    output,
    addProduct,
    products
};