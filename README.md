# Set up 🚀 

0. run setup.sh or follow with further steps
```
chmod ###
./setup.sh
```

1. add domain message-box.local to the hosts config
sudo nano /etc/hosts (Linux/Mac)

add lines:
```
127.0.0.1       message-box.local
0.0.0.0         message-box.local
```

flush DNS cache:
```
sudo killall -HUP mDNSResponder (Mac)
```
2. compose Docker 

```
docker compose -f ".docker-compose.yml" up -d --build
```