const products = [
    {
        "ID": "PET0001",
        "Name": "Thức ăn cho chó Pedigree 1.5kg",
        "Images": ["../Images/pedigree_1.jpg", "../Images/pedigree_2.jpg"],
        "Description": "Thức ăn dinh dưỡng cao cấp cho chó trưởng thành, được nghiên cứu và phát triển bởi các chuyên gia dinh dưỡng hàng đầu. Sản phẩm chứa hàm lượng protein cao từ thịt gà và thịt bò, kết hợp với các vitamin và khoáng chất thiết yếu giúp tăng cường hệ miễn dịch. Hàm lượng chất xơ tự nhiên hỗ trợ tiêu hóa, giúp chó hấp thụ dinh dưỡng tốt hơn. Đặc biệt, công thức đặc biệt giúp làm sạch răng và hơi thở thơm tho. Phù hợp cho chó từ 1-7 tuổi, giúp duy trì sức khỏe và năng lượng tối ưu.",
        "Quantity": 50,
        "Price": 150000,
        "Brand": "Pedigree",
        "Origin": "Thái Lan",
        "Category": "Thức ăn cho chó"
    },
    {
        "ID": "PET0002",
        "Name": "Cát vệ sinh cho mèo KitCat 10L",
        "Images": ["../Images/kitcat_1.jpg", "../Images/kitcat_2.jpg"],
        "Description": "Cát vệ sinh cao cấp cho mèo với công nghệ khử mùi đột phá, giúp loại bỏ mùi hôi hiệu quả trong 7 ngày. Được làm từ đất sét tự nhiên, có khả năng vón cục nhanh chóng, dễ dàng vệ sinh. Hạt cát mịn, không bụi, an toàn cho sức khỏe của mèo và người dùng. Công thức đặc biệt giúp kiểm soát độ ẩm, ngăn chặn vi khuẩn phát triển. Phù hợp cho mọi lứa tuổi mèo, đặc biệt tốt cho mèo có làn da nhạy cảm. Bao bì 10L tiết kiệm, phù hợp cho gia đình có nhiều mèo.",
        "Quantity": 40,
        "Price": 200000,
        "Brand": "KitCat",
        "Origin": "Singapore",
        "Category": "Vệ sinh cho mèo"
    },
    {
        "ID": "PET0003",
        "Name": "Dây dắt chó có thể thu gọn 5m",
        "Images": ["../Images/leash_1.jpg", "../Images/leash_2.jpg"],
        "Description": "Dây dắt thông minh với khả năng điều chỉnh độ dài từ 1-5m, phù hợp cho mọi hoạt động ngoài trời. Được làm từ dây nylon cao cấp, bền chắc, chống nước và chống mài mòn. Tay cầm ergonomic với lớp đệm cao su mềm mại, giúp chủ nuôi thoải mái khi dắt chó đi dạo. Có nút khóa an toàn, tránh tình trạng tuột dây. Phù hợp cho chó dưới 30kg, đặc biệt lý tưởng cho việc huấn luyện và đi dạo. Thiết kế nhẹ nhàng, dễ dàng cuộn gọn khi không sử dụng.",
        "Quantity": 30,
        "Price": 250000,
        "Brand": "Flexi",
        "Origin": "Đức",
        "Category": "Phụ kiện cho chó"
    },
    {
        "ID": "PET0004",
        "Name": "Pate cho mèo Whiskas 85g",
        "Images": ["../Images/whiskas_pate_1.jpg", "../Images/whiskas_pate_2.jpg"],
        "Description": "Pate thịt bò cao cấp cho mèo với công thức dinh dưỡng đặc biệt, được chế biến từ thịt bò tươi ngon kết hợp với các vitamin và khoáng chất thiết yếu. Sản phẩm có kết cấu mềm mịn, dễ tiêu hóa, phù hợp với mọi lứa tuổi mèo. Hàm lượng protein cao giúp mèo phát triển cơ bắp khỏe mạnh, trong khi các dưỡng chất đặc biệt giúp lông mượt mà và bóng đẹp. Đặc biệt, công thức không chứa chất bảo quản nhân tạo, an toàn cho sức khỏe của mèo. Bao bì 85g tiện lợi, dễ bảo quản và sử dụng.",
        "Quantity": 100,
        "Price": 25000,
        "Brand": "Whiskas",
        "Origin": "Mỹ",
        "Category": "Thức ăn cho mèo"
    },
    {
        "ID": "PET0005",
        "Name": "Lồng vận chuyển thú cưng size M",
        "Images": ["../Images/carrier_1.jpg", "../Images/carrier_2.jpg"],
        "Description": "Lồng vận chuyển thông minh với thiết kế hiện đại, được làm từ nhựa cao cấp chống va đập và thời tiết. Có tay cầm chắc chắn với lớp đệm cao su mềm mại, giúp chủ nuôi thoải mái khi di chuyển. Cửa trước và cửa trên dễ dàng mở đóng, thuận tiện cho việc đặt thú cưng vào và lấy ra. Các lỗ thông gió được thiết kế tối ưu, đảm bảo không khí lưu thông tốt. Đáy lồng có thể tháo rời, dễ dàng vệ sinh. Phù hợp cho chó và mèo có kích thước trung bình, đặc biệt lý tưởng cho việc đi du lịch hoặc khám thú y.",
        "Quantity": 20,
        "Price": 450000,
        "Brand": "PetCargo",
        "Origin": "Việt Nam",
        "Category": "Phụ kiện vận chuyển"
    },
    {
        "ID": "PET0006",
        "Name": "Thức ăn cho mèo Royal Canin 2kg",
        "Images": ["../Images/royalcanin_1.jpg", "../Images/royalcanin_2.jpg"],
        "Description": "Thức ăn khô cao cấp cho mèo với công thức dinh dưỡng toàn diện, được nghiên cứu và phát triển bởi các chuyên gia dinh dưỡng hàng đầu. Sản phẩm chứa hàm lượng protein cao từ thịt gà và cá hồi, kết hợp với các axit béo omega-3 và omega-6 giúp lông mèo mềm mượt và bóng đẹp. Các thành phần prebiotic và probiotic hỗ trợ hệ tiêu hóa, giúp mèo hấp thụ dinh dưỡng tốt hơn. Hạt thức ăn được thiết kế đặc biệt giúp làm sạch răng và hơi thở thơm tho. Phù hợp cho mèo từ 1-7 tuổi, giúp duy trì sức khỏe và năng lượng tối ưu.",
        "Quantity": 35,
        "Price": 320000,
        "Brand": "Royal Canin",
        "Origin": "Pháp",
        "Category": "Thức ăn cho mèo"
    },
    {
        "ID": "PET0007",
        "Name": "Bánh thưởng cho chó vị gà 500g",
        "Images": ["../Images/dog_treats_1.jpg", "../Images/dog_treats_2.jpg"],
        "Description": "Bánh thưởng cao cấp cho chó với hương vị gà thơm ngon, được làm từ thịt gà thật và các thành phần tự nhiên. Sản phẩm có kết cấu mềm, dễ nhai và tiêu hóa, phù hợp cho mọi lứa tuổi chó. Hàm lượng protein cao giúp chó phát triển cơ bắp, trong khi các vitamin và khoáng chất hỗ trợ sức khỏe tổng thể. Đặc biệt, công thức không chứa chất bảo quản nhân tạo và màu sắc hóa học, an toàn cho sức khỏe của chó. Bao bì 500g tiết kiệm, phù hợp cho việc huấn luyện và thưởng cho chó thường xuyên.",
        "Quantity": 60,
        "Price": 180000,
        "Brand": "DoggyMan",
        "Origin": "Nhật Bản",
        "Category": "Thức ăn cho chó"
    },
    {
        "ID": "PET0008",
        "Name": "Chuồng chó size L",
        "Images": ["../Images/dog_cage_1.jpg", "../Images/dog_cage_2.jpg"],
        "Description": "Chuồng chó cao cấp với thiết kế chắc chắn, được làm từ thép không gỉ và sơn tĩnh điện chống gỉ. Kích thước rộng rãi, phù hợp cho chó trung bình và lớn. Cửa trước và cửa bên dễ dàng mở đóng, thuận tiện cho việc đặt chó vào và lấy ra. Đáy chuồng có thể tháo rời, dễ dàng vệ sinh. Các thanh sắt được thiết kế với khoảng cách phù hợp, đảm bảo thông thoáng nhưng vẫn an toàn. Kèm theo tấm lót sàn bằng nhựa chống trượt, giúp chó thoải mái khi nằm. Phù hợp cho việc huấn luyện chó con hoặc tạo không gian riêng cho chó trong nhà.",
        "Quantity": 15,
        "Price": 600000,
        "Brand": "PetCage",
        "Origin": "Việt Nam",
        "Category": "Phụ kiện cho chó"
    },
    {
        "ID": "PET0009",
        "Name": "Cát vệ sinh hữu cơ cho mèo 5L",
        "Images": ["../Images/organic_litter_1.jpg", "../Images/organic_litter_2.jpg"],
        "Description": "Cát vệ sinh hữu cơ thân thiện với môi trường, được làm từ các nguyên liệu tự nhiên như gỗ thông và bột ngô. Sản phẩm có khả năng vón cục nhanh chóng, dễ dàng vệ sinh và không gây bụi. Công thức đặc biệt giúp khử mùi hiệu quả trong 7 ngày, tạo không gian trong lành cho mèo và người dùng. Hạt cát mịn, không gây kích ứng cho da mèo, đặc biệt phù hợp với mèo có làn da nhạy cảm. Có thể phân hủy sinh học, thân thiện với môi trường. Bao bì 5L tiết kiệm, phù hợp cho gia đình có 1-2 mèo.",
        "Quantity": 25,
        "Price": 190000,
        "Brand": "EcoPet",
        "Origin": "Hàn Quốc",
        "Category": "Vệ sinh cho mèo"
    },
    {
        "ID": "PET0010",
        "Name": "Balo vận chuyển mèo có kính",
        "Images": ["../Images/cat_backpack_1.jpg", "../Images/cat_backpack_2.jpg"],
        "Description": "Balo vận chuyển mèo thông minh với thiết kế trong suốt, cho phép mèo quan sát môi trường xung quanh một cách thoải mái. Được làm từ nhựa PC cao cấp, chống va đập và tia UV. Có các lỗ thông gió được thiết kế tối ưu, đảm bảo không khí lưu thông tốt. Dây đeo có thể điều chỉnh độ dài, phù hợp với chiều cao của người dùng. Có túi phụ để đựng đồ dùng cần thiết. Đáy balo có thể tháo rời, dễ dàng vệ sinh. Phù hợp cho mèo có kích thước trung bình, đặc biệt lý tưởng cho việc đi dạo hoặc du lịch cùng mèo.",
        "Quantity": 20,
        "Price": 420000,
        "Brand": "PetTravel",
        "Origin": "Trung Quốc",
        "Category": "Phụ kiện vận chuyển"
    },
    {
        "ID": "PET0011",
        "Name": "Thức ăn cho chó SmartHeart 3kg",
        "Images": ["../Images/smartheart_1.jpg", "../Images/smartheart_2.jpg"],
        "Description": "Thức ăn dinh dưỡng cao cấp cho chó với công thức đặc biệt hỗ trợ hệ miễn dịch và tiêu hóa. Sản phẩm chứa hàm lượng protein cao từ thịt gà và thịt bò, kết hợp với các vitamin và khoáng chất thiết yếu. Các thành phần prebiotic và probiotic giúp tăng cường sức khỏe đường ruột, hỗ trợ hấp thụ dinh dưỡng tốt hơn. Hàm lượng chất xơ tự nhiên giúp kiểm soát cân nặng và duy trì sức khỏe tổng thể. Đặc biệt, công thức không chứa chất bảo quản nhân tạo, an toàn cho sức khỏe của chó. Bao bì 3kg tiết kiệm, phù hợp cho gia đình có chó trung bình.",
        "Quantity": 40,
        "Price": 180000,
        "Brand": "SmartHeart",
        "Origin": "Thái Lan",
        "Category": "Thức ăn cho chó"
    },
    {
        "ID": "PET0012",
        "Name": "Cát vệ sinh cho mèo Me-O 5L",
        "Images": ["../Images/meo_litter_1.jpg", "../Images/meo_litter_2.jpg"],
        "Description": "Cát vệ sinh cao cấp cho mèo với công nghệ khử mùi đột phá, không gây bụi và vón cục nhanh chóng. Được làm từ đất sét tự nhiên, có khả năng hấp thụ độ ẩm tốt, giúp kiểm soát mùi hiệu quả trong 7 ngày. Hạt cát mịn, không gây kích ứng cho da mèo, đặc biệt phù hợp với mèo có làn da nhạy cảm. Công thức đặc biệt giúp ngăn chặn vi khuẩn phát triển, tạo không gian trong lành cho mèo và người dùng. Bao bì 5L tiết kiệm, phù hợp cho gia đình có 1-2 mèo.",
        "Quantity": 35,
        "Price": 170000,
        "Brand": "Me-O",
        "Origin": "Thái Lan",
        "Category": "Vệ sinh cho mèo"
    },
    {
        "ID": "PET0013",
        "Name": "Dây dắt chó da cao cấp",
        "Images": ["../Images/leash_leather_1.jpg", "../Images/leash_leather_2.jpg"],
        "Description": "Dây dắt chó cao cấp được làm từ da thật 100%, bền chắc và sang trọng. Được xử lý đặc biệt để chống nước và chống mài mòn, phù hợp cho mọi điều kiện thời tiết. Tay cầm được bọc da mềm mại với lớp đệm cao su, giúp chủ nuôi thoải mái khi dắt chó đi dạo. Có nút khóa an toàn, tránh tình trạng tuột dây. Phù hợp cho chó lớn và chó trung bình, đặc biệt lý tưởng cho việc huấn luyện và đi dạo. Thiết kế tinh tế, phù hợp với mọi phong cách.",
        "Quantity": 25,
        "Price": 300000,
        "Brand": "DogLux",
        "Origin": "Italy",
        "Category": "Phụ kiện cho chó"
    },
    {
        "ID": "PET0014",
        "Name": "Pate cho mèo Me-O 80g",
        "Images": ["../Images/meo_pate_1.jpg", "../Images/meo_pate_2.jpg"],
        "Description": "Pate cá hồi cao cấp cho mèo với công thức dinh dưỡng đặc biệt, được chế biến từ cá hồi tươi ngon kết hợp với các vitamin và khoáng chất thiết yếu. Sản phẩm có kết cấu mềm mịn, dễ tiêu hóa, phù hợp với mọi lứa tuổi mèo. Hàm lượng protein cao và omega-3 giúp mèo phát triển cơ bắp khỏe mạnh, lông mượt mà và bóng đẹp. Đặc biệt, công thức không chứa chất bảo quản nhân tạo, an toàn cho sức khỏe của mèo. Bao bì 80g tiện lợi, dễ bảo quản và sử dụng.",
        "Quantity": 90,
        "Price": 27000,
        "Brand": "Me-O",
        "Origin": "Thái Lan",
        "Category": "Thức ăn cho mèo"
    },
    {
        "ID": "PET0015",
        "Name": "Lồng vận chuyển thú cưng size L",
        "Images": ["../Images/carrier_large_1.jpg", "../Images/carrier_large_2.jpg"],
        "Description": "Lồng vận chuyển thú cưng cỡ lớn với thiết kế hiện đại, được làm từ nhựa cao cấp chống va đập và thời tiết. Kích thước rộng rãi, phù hợp cho chó lớn và mèo béo. Có tay cầm chắc chắn với lớp đệm cao su mềm mại, giúp chủ nuôi thoải mái khi di chuyển. Cửa trước và cửa trên dễ dàng mở đóng, thuận tiện cho việc đặt thú cưng vào và lấy ra. Các lỗ thông gió được thiết kế tối ưu, đảm bảo không khí lưu thông tốt. Đáy lồng có thể tháo rời, dễ dàng vệ sinh. Phù hợp cho việc đi du lịch hoặc khám thú y.",
        "Quantity": 15,
        "Price": 550000,
        "Brand": "PetGo",
        "Origin": "Việt Nam",
        "Category": "Phụ kiện vận chuyển"
    },
    {
        "ID": "PET0016",
        "Name": "Thức ăn cho mèo Me-O 1.5kg",
        "Images": ["../Images/meo_dry_1.jpg", "../Images/meo_dry_2.jpg"],
        "Description": "Thức ăn dinh dưỡng toàn diện cho mèo với công thức đặc biệt, phù hợp cho cả mèo con và mèo trưởng thành. Sản phẩm chứa hàm lượng protein cao từ thịt gà và cá hồi, kết hợp với các vitamin và khoáng chất thiết yếu. Các thành phần prebiotic và probiotic hỗ trợ hệ tiêu hóa, giúp mèo hấp thụ dinh dưỡng tốt hơn. Hạt thức ăn được thiết kế đặc biệt giúp làm sạch răng và hơi thở thơm tho. Đặc biệt, công thức không chứa chất bảo quản nhân tạo, an toàn cho sức khỏe của mèo. Bao bì 1.5kg tiết kiệm, phù hợp cho gia đình có 1-2 mèo.",
        "Quantity": 40,
        "Price": 220000,
        "Brand": "Me-O",
        "Origin": "Thái Lan",
        "Category": "Thức ăn cho mèo"
    },
    {
        "ID": "PET0017",
        "Name": "Bánh thưởng cho mèo vị cá 200g",
        "Images": ["../Images/cat_treats_1.jpg", "../Images/cat_treats_2.jpg"],
        "Description": "Bánh thưởng cao cấp cho mèo với hương vị cá hồi thơm ngon, được làm từ cá hồi thật và các thành phần tự nhiên. Sản phẩm có kết cấu mềm, dễ nhai và tiêu hóa, phù hợp cho mọi lứa tuổi mèo. Hàm lượng protein cao và omega-3 giúp mèo phát triển cơ bắp khỏe mạnh, lông mượt mà và bóng đẹp. Đặc biệt, công thức không chứa chất bảo quản nhân tạo và màu sắc hóa học, an toàn cho sức khỏe của mèo. Bao bì 200g tiết kiệm, phù hợp cho việc huấn luyện và thưởng cho mèo thường xuyên.",
        "Quantity": 50,
        "Price": 90000,
        "Brand": "CattyMan",
        "Origin": "Nhật Bản",
        "Category": "Thức ăn cho mèo"
    },
    {
        "ID": "PET0018",
        "Name": "Chuồng mèo hai tầng",
        "Images": ["../Images/cat_cage_1.jpg", "../Images/cat_cage_2.jpg"],
        "Description": "Chuồng mèo hai tầng cao cấp với thiết kế hiện đại, được làm từ thép không gỉ và sơn tĩnh điện chống gỉ. Kích thước rộng rãi, có hai tầng riêng biệt cho mèo vui chơi và nghỉ ngơi. Cửa trước và cửa bên dễ dàng mở đóng, thuận tiện cho việc đặt mèo vào và lấy ra. Đáy chuồng có thể tháo rời, dễ dàng vệ sinh. Các thanh sắt được thiết kế với khoảng cách phù hợp, đảm bảo thông thoáng nhưng vẫn an toàn. Kèm theo tấm lót sàn bằng nhựa chống trượt, giúp mèo thoải mái khi nằm. Phù hợp cho việc huấn luyện mèo con hoặc tạo không gian riêng cho mèo trong nhà.",
        "Quantity": 10,
        "Price": 700000,
        "Brand": "PetCage",
        "Origin": "Việt Nam",
        "Category": "Phụ kiện cho mèo"
    },
    {
        "ID": "PET0019",
        "Name": "Cát vệ sinh hữu cơ cho mèo 10L",
        "Images": ["../Images/organic_litter_large_1.jpg", "../Images/organic_litter_large_2.jpg"],
        "Description": "Cát vệ sinh hữu cơ thân thiện với môi trường, được làm từ các nguyên liệu tự nhiên như gỗ thông và bột ngô. Sản phẩm có khả năng vón cục nhanh chóng, dễ dàng vệ sinh và không gây bụi. Công thức đặc biệt giúp khử mùi hiệu quả trong 7 ngày, tạo không gian trong lành cho mèo và người dùng. Hạt cát mịn, không gây kích ứng cho da mèo, đặc biệt phù hợp với mèo có làn da nhạy cảm. Có thể phân hủy sinh học, thân thiện với môi trường. Bao bì 10L tiết kiệm, phù hợp cho gia đình có nhiều mèo.",
        "Quantity": 20,
        "Price": 260000,
        "Brand": "EcoPet",
        "Origin": "Hàn Quốc",
        "Category": "Vệ sinh cho mèo"
    },
    {
        "ID": "PET0020",
        "Name": "Balo vận chuyển chó nhỏ có lưới thoáng khí",
        "Images": ["../Images/dog_backpack_1.jpg", "../Images/dog_backpack_2.jpg"],
        "Description": "Balo vận chuyển thông minh với thiết kế lưới thoáng khí, phù hợp cho chó nhỏ dưới 5kg. Được làm từ vải nylon cao cấp, chống nước và chống mài mòn. Có các lỗ thông gió được thiết kế tối ưu, đảm bảo không khí lưu thông tốt. Dây đeo có thể điều chỉnh độ dài, phù hợp với chiều cao của người dùng. Có túi phụ để đựng đồ dùng cần thiết. Đáy balo có thể tháo rời, dễ dàng vệ sinh. Phù hợp cho việc đi dạo hoặc du lịch cùng chó nhỏ.",
        "Quantity": 15,
        "Price": 390000,
        "Brand": "PetTravel",
        "Origin": "Trung Quốc",
        "Category": "Phụ kiện vận chuyển"
    },
    {
        "ID": "PET0021",
        "Name": "Giường nệm cho chó size M",
        "Images": ["../Images/dog_bed_1.jpg", "../Images/dog_bed_2.jpg"],
        "Description": "Giường nệm cao cấp cho chó với thiết kế hiện đại, được làm từ vải bông mềm mại và lớp đệm cao su non. Sản phẩm có kích thước phù hợp cho chó trung bình, giúp chó thoải mái khi nằm và ngủ. Vải bọc có thể tháo rời, dễ dàng giặt giũ và vệ sinh. Đáy giường có lớp chống trượt, giúp giường không bị di chuyển khi chó nằm. Thiết kế thành cao giúp giữ ấm cho chó trong mùa lạnh. Phù hợp cho việc tạo không gian riêng cho chó trong nhà.",
        "Quantity": 30,
        "Price": 350000,
        "Brand": "ComfyPet",
        "Origin": "Việt Nam",
        "Category": "Phụ kiện cho chó"
    },
    {
        "ID": "PET0022",
        "Name": "Cây cào móng cho mèo",
        "Images": ["../Images/cat_scratcher_1.jpg", "../Images/cat_scratcher_2.jpg"],
        "Description": "Cây cào móng thông minh cho mèo với thiết kế đa năng, được làm từ gỗ tự nhiên và vải sisal bền chắc. Sản phẩm có nhiều tầng và bề mặt cào khác nhau, giúp mèo vui chơi và giải trí. Các tầng được thiết kế với độ cao phù hợp, khuyến khích mèo leo trèo và vận động. Bề mặt cào được làm từ vải sisal chống mài mòn, giúp mèo mài móng hiệu quả. Đế cây có lớp chống trượt, đảm bảo an toàn khi mèo vui chơi. Phù hợp cho việc bảo vệ nội thất và tạo không gian vui chơi cho mèo.",
        "Quantity": 20,
        "Price": 280000,
        "Brand": "CatFun",
        "Origin": "Trung Quốc",
        "Category": "Phụ kiện cho mèo"
    },
    {
        "ID": "PET0023",
        "Name": "Dụng cụ cắt móng cho chó mèo",
        "Images": ["../Images/nail_clipper_1.jpg", "../Images/nail_clipper_2.jpg"],
        "Description": "Dụng cụ cắt móng chuyên nghiệp cho chó mèo với thiết kế an toàn và dễ sử dụng. Lưỡi cắt được làm từ thép không gỉ, sắc bén và bền chắc. Có lỗ quan sát để xác định vị trí cắt chính xác, tránh cắt phạm vào mạch máu. Tay cầm được bọc cao su mềm mại, giúp người dùng thoải mái khi sử dụng. Kèm theo đèn LED để chiếu sáng khi cắt móng trong điều kiện thiếu ánh sáng. Phù hợp cho việc chăm sóc móng cho chó mèo tại nhà.",
        "Quantity": 50,
        "Price": 120000,
        "Brand": "PetCare",
        "Origin": "Mỹ",
        "Category": "Chăm sóc thú cưng"
    },
    {
        "ID": "PET0024",
        "Name": "Sữa tắm cho chó lông trắng",
        "Images": ["../Images/dog_shampoo_1.jpg", "../Images/dog_shampoo_2.jpg"],
        "Description": "Sữa tắm chuyên biệt cho chó lông trắng với công thức làm sạch và giữ màu đặc biệt. Sản phẩm chứa các thành phần tẩy trắng tự nhiên, giúp lông chó trắng sáng và mềm mượt. Công thức pH cân bằng, không gây kích ứng cho da chó. Các thành phần dưỡng ẩm giúp lông chó mềm mượt và bóng đẹp. Đặc biệt, sản phẩm không chứa các chất hóa học độc hại, an toàn cho sức khỏe của chó. Phù hợp cho việc chăm sóc lông trắng cho chó thường xuyên.",
        "Quantity": 40,
        "Price": 180000,
        "Brand": "FurCare",
        "Origin": "Thái Lan",
        "Category": "Chăm sóc thú cưng"
    },
    {
        "ID": "PET0025",
        "Name": "Sữa tắm cho mèo khử mùi",
        "Images": ["../Images/cat_shampoo_1.jpg", "../Images/cat_shampoo_2.jpg"],
        "Description": "Sữa tắm chuyên biệt cho mèo với công thức khử mùi đặc biệt. Sản phẩm chứa các thành phần khử mùi tự nhiên, giúp loại bỏ mùi hôi hiệu quả. Công thức pH cân bằng, không gây kích ứng cho da mèo. Các thành phần dưỡng ẩm giúp lông mèo mềm mượt và bóng đẹp. Đặc biệt, sản phẩm không chứa các chất hóa học độc hại, an toàn cho sức khỏe của mèo. Phù hợp cho việc chăm sóc lông và khử mùi cho mèo thường xuyên.",
        "Quantity": 40,
        "Price": 190000,
        "Brand": "FurCare",
        "Origin": "Hàn Quốc",
        "Category": "Chăm sóc thú cưng"
    },
    {
        "ID": "PET0026",
        "Name": "Xương gặm giúp sạch răng cho chó",
        "Images": ["../Images/dog_bone_1.jpg", "../Images/dog_bone_2.jpg"],
        "Description": "Xương gặm cao cấp cho chó với công thức làm sạch răng đặc biệt. Sản phẩm được làm từ các thành phần tự nhiên, có kết cấu cứng giúp chó gặm nhấm hiệu quả. Công thức đặc biệt giúp loại bỏ mảng bám và cao răng, giúp răng chó sạch sẽ và khỏe mạnh. Có hương vị thơm ngon, kích thích chó gặm nhấm. Đặc biệt, sản phẩm không chứa các chất hóa học độc hại, an toàn cho sức khỏe của chó. Phù hợp cho việc chăm sóc răng miệng cho chó thường xuyên.",
        "Quantity": 60,
        "Price": 130000,
        "Brand": "DogChew",
        "Origin": "Nhật Bản",
        "Category": "Thức ăn cho chó"
    },
    {
        "ID": "PET0027",
        "Name": "Đồ chơi bóng chuông cho mèo",
        "Images": ["../Images/cat_toy_1.jpg", "../Images/cat_toy_2.jpg"],
        "Description": "Đồ chơi bóng chuông thông minh cho mèo với thiết kế hấp dẫn. Sản phẩm được làm từ nhựa cao cấp, có chuông bên trong tạo âm thanh vui nhộn khi mèo chơi. Kích thước vừa phải, phù hợp cho mèo cầm nắm và ném. Có bề mặt gồ ghề giúp mèo cào và chơi đùa. Đặc biệt, sản phẩm không chứa các chất độc hại, an toàn cho sức khỏe của mèo. Phù hợp cho việc kích thích sự vui chơi và vận động của mèo.",
        "Quantity": 50,
        "Price": 50000,
        "Brand": "KittyPlay",
        "Origin": "Trung Quốc",
        "Category": "Đồ chơi cho mèo"
    },
    {
        "ID": "PET0028",
        "Name": "Máy lọc nước tự động cho chó mèo",
        "Images": ["../Images/water_fountain_1.jpg", "../Images/water_fountain_2.jpg"],
        "Description": "Máy lọc nước thông minh cho thú cưng với thiết kế hiện đại. Sản phẩm có bộ lọc than hoạt tính giúp loại bỏ tạp chất và mùi hôi trong nước. Có chế độ phun nước tự động, kích thích thú cưng uống nước thường xuyên. Bình chứa nước có dung tích lớn, giúp thú cưng có nước sạch liên tục. Có đèn LED chiếu sáng, giúp thú cưng dễ dàng tìm thấy nước trong bóng tối. Đặc biệt, sản phẩm không chứa các chất độc hại, an toàn cho sức khỏe của thú cưng. Phù hợp cho việc cung cấp nước sạch cho chó mèo thường xuyên.",
        "Quantity": 25,
        "Price": 550000,
        "Brand": "PetWater",
        "Origin": "Mỹ",
        "Category": "Phụ kiện chăm sóc"
    },
    {
        "ID": "PET0029",
        "Name": "Đệm nằm cho mèo size S",
        "Images": ["../Images/cat_bed_1.jpg", "../Images/cat_bed_2.jpg"],
        "Description": "Đệm nằm cao cấp cho mèo với thiết kế hiện đại, được làm từ vải bông mềm mại và lớp đệm cao su non. Sản phẩm có kích thước phù hợp cho mèo nhỏ và mèo con, giúp mèo thoải mái khi nằm và ngủ. Vải bọc có thể tháo rời, dễ dàng giặt giũ và vệ sinh. Đáy đệm có lớp chống trượt, giúp đệm không bị di chuyển khi mèo nằm. Thiết kế thành cao giúp giữ ấm cho mèo trong mùa lạnh. Phù hợp cho việc tạo không gian riêng cho mèo trong nhà.",
        "Quantity": 30,
        "Price": 270000,
        "Brand": "ComfyPet",
        "Origin": "Việt Nam",
        "Category": "Phụ kiện cho mèo"
    },
    {
        "ID": "PET0030",
        "Name": "Bát ăn chống trượt cho chó mèo",
        "Images": ["../Images/pet_bowl_1.jpg", "../Images/pet_bowl_2.jpg"],
        "Description": "Bát ăn thông minh cho thú cưng với thiết kế chống trượt. Sản phẩm được làm từ nhựa cao cấp, không chứa BPA, an toàn cho sức khỏe của thú cưng. Đáy bát có lớp chống trượt, giúp bát không bị di chuyển khi thú cưng ăn. Có kích thước phù hợp cho cả chó và mèo. Dễ dàng vệ sinh và bảo quản. Đặc biệt, sản phẩm không chứa các chất độc hại, an toàn cho sức khỏe của thú cưng. Phù hợp cho việc cung cấp thức ăn và nước uống cho chó mèo thường xuyên.",
        "Quantity": 50,
        "Price": 90000,
        "Brand": "PetBowl",
        "Origin": "Thái Lan",
        "Category": "Phụ kiện ăn uống"
    }
];

module.exports = { products };