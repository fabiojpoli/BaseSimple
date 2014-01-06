@echo off 
set ns=BaseSimple
echo "Deleting last build..."
cd ..
sencha ant clean

echo "Building application..."
sencha app build

echo "Copying extra files..."
cd build\production\%ns%

echo "Copyind files php..."
xcopy ..\..\..\controller controller /e /i /y /q
xcopy ..\..\..\model model /e /i /y /q
xcopy ..\..\..\helper helper /e /i /y /q

echo "Build is finished!"