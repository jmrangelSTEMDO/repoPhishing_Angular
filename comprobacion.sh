#!/bin/bash

if grep -q "Already up to date" actualizado.txt; then
    echo "La frase 'Already up to date' está presente en el archivo."
else
    echo "La frase 'Already up to date' NO está presente en el archivo."
fi
