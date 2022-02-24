#!/bin/bash

if [ ! "$2" ]; then
  echo "Usage: $0 <directory> <fileName>"
  exit 1
fi

if [ -d "$1" ]; then
  echo "$1 directory already exists"
  exit 1
fi

echo "Making $2 Questions Test on $1"
if [ ! -d "$1" ]; then
    echo "Creating $1 directory"
    mkdir $1
fi

echo "Creating $2 structure"
cp -r _template/question-template/* $1

echo "Creating Test setup for $2"
mv $1/answer.js $1/$2.js
mv $1/solution/answer_one.js $1/solution/$2_one.js
mv $1/run/__tests__/nameTest.test.js $1/run/__tests__/$2.test.js

echo "Setup test for $2"
sed -e "s/answer/$2/g" -i $1/run/__tests__/*.js
sed -e "s/{question_file}/$2/g" -i $1/run/__tests__/*.js
sed -e "s/{level}\/{question_name}/${1/\//"\/"}/g" -i $1/run/__tests__/*.js

echo "Setup pre-solution for $2"
sed -e "s/answer/$2/g" -i $1/solution/$2_one.js

echo "Setup solution for $2"
sed -e "s/answer/$2/g" -i $1/*.js


echo "Successfully created $2 Questions Test on $1"
