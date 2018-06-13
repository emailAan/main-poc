cd modules/agenda
npm install
npm run build:portal
cd ../..

cd modules/facturatie
npm install
npm run build:portal
cd ../..

cd modules/zorgplan
npm install
npm run build:portal
cd ../..

cd main
npm install
npm run build
cd ..
