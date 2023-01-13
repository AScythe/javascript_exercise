FROM nginx
#container in nginx

COPY ./website /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d
# COPY alvin-pc:/Users/alvinhernandez/Documents/GitHub/javascript_exercise nginx:/usr/share/nginx/html

# 1. install nginx 
# 2. configue nginx
# 3. run nginx start