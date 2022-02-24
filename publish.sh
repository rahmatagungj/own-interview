#!/bin/bash
FILE="published"

echo "Publishing $1 to Standalone Questions Testing"
if [ ! -d "$FILE" ]; then
    echo "Creating $FILE directory"
    mkdir $FILE
fi

if [ -d "$FILE/$1" ]; then
    echo "Removing $FILE/$1 directory (already exists)"
    rm -rf $FILE/$1
fi

echo "Creating $FILE/$1 structure"
cp -r _template/publish-template $FILE
if [ ! -d $FILE/$(dirname "$1") ]; then
  mkdir $FILE/$(dirname "$1")
fi
mv $FILE/publish-template $FILE/$1

echo "Creating Test setup for $1"
find $FILE/$1/. -maxdepth 1 -type f -delete
rm -rf $FILE/$1/run/__tests__
cp -r $1/run/__tests__ $FILE/$1/run/
cp -r $1/*.js $FILE/$1/
cp -r $1/*.md $FILE/$1/
sed -e "s/${1/\//"\/"}/../g" -i $FILE/$1/run/__tests__/*.js
cd $FILE/$1

echo "Bundling $1 to ${1/\//"-"}.zip"
zip -r ../../${1/\//"-"}.zip ./* && cd ../../..

echo "Cleaning up $FILE/$1"
rm -rf $FILE/$(dirname "$1")

echo "$1 successfully published to Standalone Questions Testing"