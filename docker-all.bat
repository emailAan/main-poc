
docker build --rm -f modules/agenda/Dockerfile -t main-poc-agenda:latest modules/agenda 
docker build --rm -f modules/facturatie/Dockerfile -t main-poc-facturatie:latest modules/facturatie 
docker build --rm -f modules/url-loader/Dockerfile -t main-poc-url-loader:latest modules/url-loader 
docker build --rm -f modules/zorgplan/Dockerfile -t main-poc-zorgplan:latest modules/zorgplan 
docker build --rm -f main/Dockerfile -t main-poc-main:latest main 
docker build --rm -f proxy/Dockerfile -t main-poc-proxy:latest proxy

docker-compose -f docker-compose.yml up -d --build


