#!/usr/bin/env bash

set -ex

yarn install --dev

echo "seeding db"
yarn seed
echo "seed done"

yarn dev -L
