#!/bin/bash

target=$(1:-http://loalhost:3000)

while true #loop forever, until ctrl+c pressed.
do
    for i in $(seq 100) # perform the inner command 100 times
    do
        curl $target > /dev/null & #send out a curl request, the & indicates that the command should be run in the background
    done
    
    wait #after 100 requests are sent out , wait for their processes to finish
done