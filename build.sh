react-scripts build
ssh mesija@mesija.ftp.tools 'rm -Rf ./mesija.net/barber/build/*'
scp -r ./build/ mesija@mesija.ftp.tools:./mesija.net/barber/build/
