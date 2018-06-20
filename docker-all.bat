docker build --rm -f modules/AdfSso/Dockerfile -t main-poc-adf-sso:latest modules/AdfSso --build-arg JAR_FILE=target/AdfSso-0.0.1-SNAPSHOT.jar --build-arg HTTP_PROXY=http://192.168.1.90:8080 --build-arg HTTPS_PROXY=http://192.168.1.90:8080

docker build --rm -f modules/agenda/Dockerfile -t main-poc-agenda:latest modules/agenda --build-arg HTTP_PROXY=http://192.168.1.90:8080 --build-arg HTTPS_PROXY=http://192.168.1.90:8080 
docker build --rm -f modules/facturatie/Dockerfile -t main-poc-facturatie:latest modules/facturatie --build-arg HTTP_PROXY=http://192.168.1.90:8080 --build-arg HTTPS_PROXY=http://192.168.1.90:8080 
docker build --rm -f modules/url-loader/Dockerfile -t main-poc-url-loader:latest modules/url-loader --build-arg HTTP_PROXY=http://192.168.1.90:8080 --build-arg HTTPS_PROXY=http://192.168.1.90:8080 
docker build --rm -f modules/zorgplan/Dockerfile -t main-poc-zorgplan:latest modules/zorgplan --build-arg HTTP_PROXY=http://192.168.1.90:8080 --build-arg HTTPS_PROXY=http://192.168.1.90:8080 
docker build --rm -f main/Dockerfile -t main-poc-main:latest main --build-arg HTTP_PROXY=http://192.168.1.90:8080 --build-arg HTTPS_PROXY=http://192.168.1.90:8080 
docker build --rm -f proxy/Dockerfile -t main-poc-proxy:latest proxy --build-arg HTTP_PROXY=http://192.168.1.90:8080 --build-arg HTTPS_PROXY=http://192.168.1.90:8080 

docker-compose -f docker-compose.yml up -d --build
REM docker stop $(docker ps -a -q)
REM docker rm $(docker ps -a -q)

REM cd main; npm run build; cd  ..; docker build --rm -f main/Dockerfile -t main-poc-main:latest main --build-arg HTTP_PROXY=http://192.168.1.90:8080 --build-arg HTTPS_PROXY=http://192.168.1.90:8080 ; docker-compose -f docker-compose.yml up -d --build
REM cd modules/url-loader; npm run build:portal; cd  ../..; docker build --rm -f modules/url-loader/Dockerfile -t main-poc-url-loader:latest modules/url-loader --build-arg HTTP_PROXY=http://192.168.1.90:8080 --build-arg HTTPS_PROXY=http://192.168.1.90:8080  ; docker-compose -f docker-compose.yml up -d --build
