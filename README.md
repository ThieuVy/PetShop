git

//Kiểm tra trạng thái dự án trên máy tính
git status

//Thêm các thay đổi vào staging area
git add .

//Tạo commit cho các thay đổi
git commit -m "Cập nhật website với các thay đổi mới"

//Kiểm tra repository trên GitHub
git remote -v
  //Nếu chưa có remote, thì:
  git remote add origin https://github.com/ThieuVy/PetShop.git

//Đẩy (push) code lên GitHub
git push origin main

////Lưu ý 
- Nếu chưa có .git trong thư mục dự án:
git init
  //Sau đó thêm remote và thực hiện các bước từ 2 đến 5.
  
- Xung đột (conflict): 
git pull origin main
