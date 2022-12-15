#!/usr/bin/bash

CURRENTDATE=`date +"%Y-%m-%d %T"`

while :
do
    echo "${CURRENTDATE} | Starting node app..."
    PORT=9996 HOST=127.0.0.1 node .output/server/index.mjs
    echo "${CURRENTDATE} | App crash :/"
    echo "Restarting node app in 5 seconds !"
    sleep 5
done
