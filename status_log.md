# Git status log

## First status
Trên nhánh main, local đang nhiều hơn origin/main 2 commit.
Staged: part1/notes.txt, part1/todo.txt (new file).
Untracked: part1/draft.md, status_log.md.

## Second status (sau khi stage notes.txt và todo.txt)
Vẫn trên nhánh main, ahead origin/main 2 commit.
Staged: part1/notes.txt, part1/todo.txt.
Untracked: part1/draft.md, status_log.md.

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

## Vì sao git commit -a chỉ hoạt động với file đã tracked?
-a (hay --all) tự động stage sửa đổi/xóa của các file đã được Git theo dõi trước khi commit, nhưng không thêm file mới untracked.
Nên nó hoạt động với notes.txt (đã từng commit), nhưng không dùng để thêm file hoàn toàn mới.

## Sự khác nhau giữa git fetch và git pull
- git fetch:
  - Tải commit mới từ remote, cập nhật origin/main.
  - Không thay đổi nhánh local hay working directory.
  - An toàn để xem remote có gì mới mà không ảnh hưởng code local.

- git pull:
  - Chạy git fetch + git merge trong một lệnh.
  - Merge thay đổi từ remote vào nhánh local hiện tại.
  - Có thể gây conflict nếu remote và local sửa cùng chỗ.

Trong bài này:
- git fetch origin để xem commit mới trên origin/main mà không thay đổi main local.
- git pull origin main để merge commit đó về local, cập nhật README.md.
