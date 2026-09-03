creat week2_report.md
touch week2_report.md
Part A:
1.
git checkout master
git add week2.md
git commit -m "Add week2.md"
git checkout -b week 2
2.
echo "working 1" >> week2.md
git commit -a -m "working 1"
echo "working 2" >> week2.md
git commit -a -m "working 2"
3.
echo "text" >>week2.md
git commit -a -m "working 3"
git checkout master
cat week2.md
4.
git checkout -b week2b
git merge week2
git branch -d week2
Part B:
1.
git checkout master
git checkout -b wip
echo "Work in progress" >wip.txt
git add wip.txt
git commit -m "Add wip.txt"
git checkout master
git merge week2b
2.
git branch --merged
git brand --no-merged
3.
git branch -d week2b
git branch -m wip work-in-progress
git remote add origin (https://github.com/macvinh2007-sketch/git-homework-1-macphucvinh1)
git push -u origin work-in-progress
Part C
1.
git checkout work-in-progress
echo "Updating wip content" >>wip.txt
git commit -a -m "Update wip.txt"
2.
git branch -v
3.
git checkout master
git push -u origin master
Part D
1.
git checkout master
git checkout -b experiment
echo "File 1 content" > exp1.txt
git add exp1.txt
git commit -m "Add exp1.txt"

echo "File 2 content" > exp2.txt
git add exp2.txt
git commit -m "Add exp2.txt"
2.
git checkout master
echo "Main content" > main_file.txt
git add main_file.txt
git commit -m "Add main_file.txt"
3.
git checkout experiment
git rebase master
4.
5.
git checkout master
git merge experiment
6+7.
git add week2.md
git commit -m "Add rebase explanation in week2.md"
git push origin master
git add week2.md
git commit -m "Add rebase explanation in week2.md"
git push origin master.
