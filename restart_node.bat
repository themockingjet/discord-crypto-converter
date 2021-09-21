cd ../
gitpull

if [ ! -d log ]; then 
  mkdir log
fi

node src/index.js