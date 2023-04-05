#!/bin/bash
cd ../PictureLinkBackend-main/
echo "The file is this: ${1}"
python3 backend.py ../theImages ${1}
# rm ../server/testImage/*
