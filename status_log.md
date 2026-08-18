# Git status log

## First status
Trên nhánh main, local ahead origin/main 2 commit.
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
-a tự động stage sửa đổi/xóa của file đã tracked, không thêm file mới untracked.
Nên dùng được với notes.txt (đã commit rồi), nhưng không dùng để thêm file mới.

## git fetch vs git pull
- git fetch: tải commit mới từ remote, cập nhật origin/main, không thay đổi local.
- git pull: fetch + merge, đưa thay đổi từ remote vào nhánh local, có thể gây conflict.

Trong bài:
- git fetch origin: xem commit mới trên origin/main mà không đổi main local.
- git pull origin main: merge commit đó về local, cập nhật README.md.
