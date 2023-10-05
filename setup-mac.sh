#!/bin/bash

echo -e "# 127.0.0.1\tmessage-box.local\n# 0.0.0.0\tmessage-box.local" | sudo tee -a /etc/hosts
sudo killall -HUP mDNSResponder
docker compose -f ".docker-compose.yml" up -d --build


