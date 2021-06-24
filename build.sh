react-scripts build
ssh mesija@mesija.ftp.tools 'rm -Rf ./mesija.net/barber/*'
scp -rp ./build/. mesija@mesija.ftp.tools:./mesija.net/barber/
