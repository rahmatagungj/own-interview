#!/bin/bash
PUBLISH_DIRECTORY="published"

if [ ! "$1" ]; then
  echo "Usage: $0 <directory> <solution (true for include the solution)>"
  exit 1
fi

echo "Publishing $1 to Standalone Questions Test"
if [ ! -d "$PUBLISH_DIRECTORY" ]; then
    echo "Creating $PUBLISH_DIRECTORY directory"
    mkdir $PUBLISH_DIRECTORY
fi

if [ -d "$PUBLISH_DIRECTORY/$1" ]; then
    echo "Removing $PUBLISH_DIRECTORY/$1 directory (already exists)"
    rm -rf $PUBLISH_DIRECTORY/$1
fi

echo "Creating $PUBLISH_DIRECTORY/$1 structure"
if [ ! -d $PUBLISH_DIRECTORY/$(dirname "$1") ]; then
  mkdir $PUBLISH_DIRECTORY/$(dirname "$1")
fi

mkdir -p $PUBLISH_DIRECTORY/$1

echo "Creating Test setup for $1"
find $PUBLISH_DIRECTORY/$1/. -maxdepth 1 -type f -delete
mkdir -p $PUBLISH_DIRECTORY/$1/run/__tests__ && cp -r $1/run/__tests__ $PUBLISH_DIRECTORY/$1/run
cp -r $1/*.js $PUBLISH_DIRECTORY/$1/
cp -r $1/*.md $PUBLISH_DIRECTORY/$1/
sed -e "s/${1/\//"\/"}/../g" -i $PUBLISH_DIRECTORY/$1/run/__tests__/*.js
cp -r package $PUBLISH_DIRECTORY/$1/run
cp -r $1/run/index.js $PUBLISH_DIRECTORY/$1/run/index.js
sed -e "s/..\/..\/..\//.\//g" -i $PUBLISH_DIRECTORY/$1/run/index.js

if [ "$2" ]; then
  echo "Adding solution for $1"
  mkdir -p $PUBLISH_DIRECTORY/$1/solution
  cp -r $1/solution/*.js $PUBLISH_DIRECTORY/$1/solution
fi

cd $PUBLISH_DIRECTORY/$1
if [ "$2" ]; then
  echo "Bundling $1 to ${1/\//"-"}-with-solution.zip"
  zip -r ../../${1/\//"-"}-with-solution.zip ./* && cd ../../..
else 
  echo "Bundling $1 to ${1/\//"-"}.zip"
  zip -r ../../${1/\//"-"}.zip ./* && cd ../../..
fi

echo "Cleaning up $PUBLISH_DIRECTORY/$1"
rm -rf $PUBLISH_DIRECTORY/$(dirname "$1")

echo "$1 successfully published to Standalone Questions Test"