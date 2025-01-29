#!/bin/bash

branch=$(git rev-parse --abbrev-ref HEAD)
git fetch origin $branch

local_commit=$(git rev-parse HEAD)
remote_commit=$(git rev-parse origin/$branch)

if [ "$local_commit" = "$remote_commit" ]; then
    echo "La rama '$branch' está actualizada con el remoto."
else
    echo "La rama '$branch' NO está actualizada con el remoto."
fi
