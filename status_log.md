# Git status log

## First status
Trên nhánh main
Nhánh của bạn đang ahead (nhiều hơn) origin/main 2 commit.
(sử dụng "git push" để đẩy commit local lên remote)

Files sẽ được commit (Changes to be committed):
(sử dụng "git restore --staged ..." để unstage)
- new file: part1/notes.txt
- new file: part1/todo.txt

Files chưa được theo dõi (Untracked files):
(sử dụng "git add ..." để đưa vào lần commit tới)
- part1/draft.md
- status_log.md

## Second status (after staging notes.txt and todo.txt)
Trên nhánh main
Nhánh của bạn đang ahead origin/main 2 commit.
(sử dụng "git push" để đẩy commit local lên remote)

Files sẽ được commit (Changes to be committed):
(sử dụng "git restore --staged ..." để unstage)
- new file: part1/notes.txt
- new file: part1/todo.txt

Files chưa được theo dõi (Untracked files):
(sử dụng "git add ..." để đưa vào lần commit tới)
- part1/draft.md
- status_log.md

## Diff after staging (notes.txt)
diff --git a/part1/notes.txt b/part1/notes.txt
index e69de29..7ac63cb 100644
--- a/part1/notes.txt
+++ b/part1/notes.txt
@@ -0,0 +1,3 @@
+Line 1: This is a new note.
+Line 2: Git is powerful.
+Line 3: I am learning version control.
\ No newline at end of file

## Why 'git commit -a' works only for already-tracked files
Tùy chọn -a (hay --all) bảo Git tự động stage các thay đổi (sửa đổi và xóa) đối với những file đã được Git theo dõi trước khi commit.
Nó KHÔNG thêm các file mới, chưa được theo dõi (untracked).
Đó là lý do ở đây nó hoạt động với notes.txt (đã từng được commit trước đó), nhưng sẽ không hoạt động với một file hoàn toàn mới chưa bao giờ được thêm vào repository.

## Difference between 'git fetch' and 'git pull'
git fetch:
- Tải các commit mới từ remote repository và cập nhật các nhánh theo dõi remote (ví dụ: origin/main).
- KHÔNG thay đổi nhánh local hiện tại hay thư mục làm việc.
- An toàn để chạy bất cứ lúc nào để xem người khác đã push gì mà không ảnh hưởng đến code của bạn.

git pull:
- Chạy git fetch rồi tự động git merge (theo mặc định) trong một bước.
- Đưa nhánh local hiện tại cập nhật theo nhánh remote bằng cách merge các thay đổi vào thư mục làm việc của bạn.
- Có thể gây ra xung đột merge nếu thay đổi ở remote và local đụng đến cùng những dòng code.

Trong bài tập này:
- git fetch origin cho phép mình inspect commit mới trên origin/main mà không làm thay đổi nhánh main local.
- git pull origin main sau đó đã merge commit remote đó vào nhánh main local, cập nhật README.md.
