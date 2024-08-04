#!/usr/bin/env bash

set -ex

# yarn docker:dev

docker compose -f docker-compose.yml -f docker-compose.dev.yml build --no-cache
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d

docker compose -f docker-compose.yml -f docker-compose.dev.yml exec -it node-app bash
