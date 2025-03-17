let product = [
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
    },
    {
        "ID": "PET0011",
        "Name": "Thức ăn cho chó SmartHeart 3kg",
        "Images": ["smartheart_1.jpg", "smartheart_2.jpg"],
        "Description": "Thức ăn hỗ trợ hệ miễn dịch và tiêu hóa cho chó trưởng thành.",
        "Quantity": 40,
        "Price": 180000,
        "Brand": "SmartHeart",
        "Origin": "Thái Lan",
        "Category": "Thức ăn cho chó"
    },
    {
        "ID": "PET0012",
        "Name": "Cát vệ sinh cho mèo Me-O 5L",
        "Images": ["meo_litter_1.jpg", "meo_litter_2.jpg"],
        "Description": "Cát vệ sinh không bụi, vón cục nhanh, giúp kiểm soát mùi hiệu quả.",
        "Quantity": 35,
        "Price": 170000,
        "Brand": "Me-O",
        "Origin": "Thái Lan",
        "Category": "Vệ sinh cho mèo"
    },
    {
        "ID": "PET0013",
        "Name": "Dây dắt chó da cao cấp",
        "Images": ["leash_leather_1.jpg", "leash_leather_2.jpg"],
        "Description": "Dây dắt bằng da thật bền chắc, phù hợp với chó lớn.",
        "Quantity": 25,
        "Price": 300000,
        "Brand": "DogLux",
        "Origin": "Italy",
        "Category": "Phụ kiện cho chó"
    },
    {
        "ID": "PET0014",
        "Name": "Pate cho mèo Me-O 80g",
        "Images": ["meo_pate_1.jpg", "meo_pate_2.jpg"],
        "Description": "Pate cá hồi bổ sung dinh dưỡng, giúp lông mèo khỏe mạnh.",
        "Quantity": 90,
        "Price": 27000,
        "Brand": "Me-O",
        "Origin": "Thái Lan",
        "Category": "Thức ăn cho mèo"
    },
    {
        "ID": "PET0015",
        "Name": "Lồng vận chuyển thú cưng size L",
        "Images": ["carrier_large_1.jpg", "carrier_large_2.jpg"],
        "Description": "Lồng vận chuyển cỡ lớn, thoáng khí, phù hợp với chó lớn và mèo béo.",
        "Quantity": 15,
        "Price": 550000,
        "Brand": "PetGo",
        "Origin": "Việt Nam",
        "Category": "Phụ kiện vận chuyển"
    },
    {
        "ID": "PET0016",
        "Name": "Thức ăn cho mèo Me-O 1.5kg",
        "Images": ["meo_dry_1.jpg", "meo_dry_2.jpg"],
        "Description": "Thức ăn dinh dưỡng dành cho mèo con và mèo trưởng thành.",
        "Quantity": 40,
        "Price": 220000,
        "Brand": "Me-O",
        "Origin": "Thái Lan",
        "Category": "Thức ăn cho mèo"
    },
    {
        "ID": "PET0017",
        "Name": "Bánh thưởng cho mèo vị cá 200g",
        "Images": ["cat_treats_1.jpg", "cat_treats_2.jpg"],
        "Description": "Bánh thưởng giúp huấn luyện mèo, hương vị cá hồi thơm ngon.",
        "Quantity": 50,
        "Price": 90000,
        "Brand": "CattyMan",
        "Origin": "Nhật Bản",
        "Category": "Thức ăn cho mèo"
    },
    {
        "ID": "PET0018",
        "Name": "Chuồng mèo hai tầng",
        "Images": ["cat_cage_1.jpg", "cat_cage_2.jpg"],
        "Description": "Chuồng mèo bằng sắt, có hai tầng rộng rãi, dễ vệ sinh.",
        "Quantity": 10,
        "Price": 700000,
        "Brand": "PetCage",
        "Origin": "Việt Nam",
        "Category": "Phụ kiện cho mèo"
    },
    {
        "ID": "PET0019",
        "Name": "Cát vệ sinh hữu cơ cho mèo 10L",
        "Images": ["organic_litter_large_1.jpg", "organic_litter_large_2.jpg"],
        "Description": "Cát hữu cơ khử mùi tốt, dễ phân hủy, an toàn cho thú cưng.",
        "Quantity": 20,
        "Price": 260000,
        "Brand": "EcoPet",
        "Origin": "Hàn Quốc",
        "Category": "Vệ sinh cho mèo"
    },
    {
        "ID": "PET0020",
        "Name": "Balo vận chuyển chó nhỏ có lưới thoáng khí",
        "Images": ["dog_backpack_1.jpg", "dog_backpack_2.jpg"],
        "Description": "Balo có lưới thoáng khí, phù hợp cho chó nhỏ dưới 5kg.",
        "Quantity": 15,
        "Price": 390000,
        "Brand": "PetTravel",
        "Origin": "Trung Quốc",
        "Category": "Phụ kiện vận chuyển"
    },
    {
        "ID": "PET0021",
        "Name": "Giường nệm cho chó size M",
        "Images": ["dog_bed_1.jpg", "dog_bed_2.jpg"],
        "Description": "Giường nệm êm ái, giữ ấm cho chó, dễ vệ sinh.",
        "Quantity": 30,
        "Price": 350000,
        "Brand": "ComfyPet",
        "Origin": "Việt Nam",
        "Category": "Phụ kiện cho chó"
    },
    {
        "ID": "PET0022",
        "Name": "Cây cào móng cho mèo",
        "Images": ["cat_scratcher_1.jpg", "cat_scratcher_2.jpg"],
        "Description": "Cây cào móng giúp mèo giải trí và bảo vệ nội thất.",
        "Quantity": 20,
        "Price": 280000,
        "Brand": "CatFun",
        "Origin": "Trung Quốc",
        "Category": "Phụ kiện cho mèo"
    },
    {
        "ID": "PET0023",
        "Name": "Dụng cụ cắt móng cho chó mèo",
        "Images": ["nail_clipper_1.jpg", "nail_clipper_2.jpg"],
        "Description": "Dụng cụ cắt móng sắc bén, an toàn cho chó mèo.",
        "Quantity": 50,
        "Price": 120000,
        "Brand": "PetCare",
        "Origin": "Mỹ",
        "Category": "Chăm sóc thú cưng"
    },
    {
        "ID": "PET0024",
        "Name": "Sữa tắm cho chó lông trắng",
        "Images": ["dog_shampoo_1.jpg", "dog_shampoo_2.jpg"],
        "Description": "Sữa tắm làm sạch và giữ màu lông trắng sáng.",
        "Quantity": 40,
        "Price": 180000,
        "Brand": "FurCare",
        "Origin": "Thái Lan",
        "Category": "Chăm sóc thú cưng"
    },
    {
        "ID": "PET0025",
        "Name": "Sữa tắm cho mèo khử mùi",
        "Images": ["cat_shampoo_1.jpg", "cat_shampoo_2.jpg"],
        "Description": "Sữa tắm giúp khử mùi, làm mềm lông mèo.",
        "Quantity": 40,
        "Price": 190000,
        "Brand": "FurCare",
        "Origin": "Hàn Quốc",
        "Category": "Chăm sóc thú cưng"
    },
    {
        "ID": "PET0026",
        "Name": "Xương gặm giúp sạch răng cho chó",
        "Images": ["dog_bone_1.jpg", "dog_bone_2.jpg"],
        "Description": "Xương gặm giúp làm sạch răng, giảm mảng bám cho chó.",
        "Quantity": 60,
        "Price": 130000,
        "Brand": "DogChew",
        "Origin": "Nhật Bản",
        "Category": "Thức ăn cho chó"
    },
    {
        "ID": "PET0027",
        "Name": "Đồ chơi bóng chuông cho mèo",
        "Images": ["cat_toy_1.jpg", "cat_toy_2.jpg"],
        "Description": "Bóng chuông kích thích sự vui chơi của mèo.",
        "Quantity": 50,
        "Price": 50000,
        "Brand": "KittyPlay",
        "Origin": "Trung Quốc",
        "Category": "Đồ chơi cho mèo"
    },
    {
        "ID": "PET0028",
        "Name": "Máy lọc nước tự động cho chó mèo",
        "Images": ["water_fountain_1.jpg", "water_fountain_2.jpg"],
        "Description": "Máy lọc nước giúp thú cưng có nước sạch liên tục.",
        "Quantity": 25,
        "Price": 550000,
        "Brand": "PetWater",
        "Origin": "Mỹ",
        "Category": "Phụ kiện chăm sóc"
    },
    {
        "ID": "PET0029",
        "Name": "Đệm nằm cho mèo size S",
        "Images": ["cat_bed_1.jpg", "cat_bed_2.jpg"],
        "Description": "Đệm nằm êm ái, phù hợp với mèo nhỏ và mèo con.",
        "Quantity": 30,
        "Price": 270000,
        "Brand": "ComfyPet",
        "Origin": "Việt Nam",
        "Category": "Phụ kiện cho mèo"
    },
    {
        "ID": "PET0030",
        "Name": "Bát ăn chống trượt cho chó mèo",
        "Images": ["pet_bowl_1.jpg", "pet_bowl_2.jpg"],
        "Description": "Bát ăn chống trượt, dễ vệ sinh, phù hợp cho chó mèo.",
        "Quantity": 50,
        "Price": 90000,
        "Brand": "PetBowl",
        "Origin": "Thái Lan",
        "Category": "Phụ kiện ăn uống"
    }
]

module.exports = {
    products
};