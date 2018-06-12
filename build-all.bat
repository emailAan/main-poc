
cd modules\agenda
call npm install
call npm run build:portal
cd ..\..

cd modules\facturatie
call npm install
call npm run build:portal
cd ..\..

cd modules\zorgplan
call npm install
call npm run build:portal
cd ..\..

cd main
call npm install
call npm run build
cd ..
