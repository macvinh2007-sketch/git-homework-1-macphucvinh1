# Git status log

## First status
On branch main
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   part1/notes.txt
	new file:   part1/todo.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	part1/draft.md
	status_log.md


## Second status (after staging notes.txt and todo.txt)
On branch main
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   part1/notes.txt
	new file:   part1/todo.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	part1/draft.md
	status_log.md


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
The option -a (or --all) tells Git to automatically stage changes (modifications and deletions)
for files that are already tracked by Git before committing.
It does NOT add new, untracked files. That's why it works here for notes.txt (already committed before),
but would not work for a brand-new file that has never been added to the repository.

## Difference between 'git fetch' and 'git pull'
- git fetch:
  + Downloads new commits from the remote repository and updates remote-tracking branches (e.g., origin/main).
  + Does NOT change the current local branch or working directory.
  + Safe to run anytime to see what others have pushed without affecting your code.

- git pull:
  + Runs 'git fetch' followed by 'git merge' (by default) in one step.
  + Brings the current local branch up-to-date with the remote branch by merging changes into your working directory.
  + Can cause merge conflicts if remote and local changes touch the same lines.

In this exercise:
- 'git fetch origin' let me inspect the new commit on origin/main without changing my local main branch.
- 'git pull origin main' then merged that remote commit into my local main branch, updating README.md.
