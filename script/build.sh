ns=BaseSimple
echo "Deleting last build..."
cd ..
sencha app clean

echo "Building application..."
sencha app build

echo "Copying extra files..."
cd build/production/$ns

echo "Copyind files php..."
cp -R ../../../controller .
cp -R ../../../model .
cp -R ../../../helper .

echo "Build is finished!"