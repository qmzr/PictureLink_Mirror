#!/bin/bash
cd ../PictureLinkBackend-main/
echo "The file is this: ${1}"
python3 backend.py ../picture-link-fe-main/public/theImages ${1}
# rm ../server/testImage/*
