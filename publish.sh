#!/bin/bash
PUBLISH_DIRECTORY="published"

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
cp -r _template/publish-template $PUBLISH_DIRECTORY
if [ ! -d $PUBLISH_DIRECTORY/$(dirname "$1") ]; then
  mkdir $PUBLISH_DIRECTORY/$(dirname "$1")
fi
mv $PUBLISH_DIRECTORY/publish-template $PUBLISH_DIRECTORY/$1

echo "Creating Test setup for $1"
find $PUBLISH_DIRECTORY/$1/. -maxdepth 1 -type f -delete
rm -rf $PUBLISH_DIRECTORY/$1/run/__tests__
cp -r $1/run/__tests__ $PUBLISH_DIRECTORY/$1/run/
cp -r $1/*.js $PUBLISH_DIRECTORY/$1/
cp -r $1/*.md $PUBLISH_DIRECTORY/$1/
sed -e "s/${1/\//"\/"}/../g" -i $PUBLISH_DIRECTORY/$1/run/__tests__/*.js
cd $PUBLISH_DIRECTORY/$1

echo "Bundling $1 to ${1/\//"-"}.zip"
zip -r ../../${1/\//"-"}.zip ./* && cd ../../..

echo "Cleaning up $PUBLISH_DIRECTORY/$1"
rm -rf $PUBLISH_DIRECTORY/$(dirname "$1")

echo "$1 successfully published to Standalone Questions Test"