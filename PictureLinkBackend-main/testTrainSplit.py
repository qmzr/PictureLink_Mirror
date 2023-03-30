import shutil
import os

path = './images/'  # replace with the path to your folder
folders = []

# iterate over the list of files and directories in the folder
for name in os.listdir(path):
    # check if the item is a directory
    if os.path.isdir(os.path.join(path, name)):
        # add the directory name to the list of folders
        folders.append(name)

location1 = "train_cropped/"
location2 = "test_cropped/"
for folder_name in folders:
    # join the location and folder name to create the full path
    path = os.path.join(location1, folder_name)
    # create the directory if it doesn't exist
    if not os.path.exists(path):
        os.makedirs(path)

    # join the location and folder name to create the full path
    path = os.path.join(location2, folder_name)
    # create the directory if it doesn't exist
    if not os.path.exists(path):
        os.makedirs(path)

# Read the coordinates file
with open('train_test_split.txt') as f:
    booleanMap = [line.strip().split() for line in f]

with open('images.txt') as f:
    image_paths = [line.strip().split()[1] for line in f]

train_folder = "train_cropped/"
test_folder = "test_cropped/"
for i, (theVal, imgPath) in enumerate(zip(booleanMap, image_paths)):
    src = "cropped/" + imgPath
    thePath = ""
    if theVal[1] == "0":
        thePath = test_folder
    else:
        thePath = train_folder

    thePath += imgPath
    if os.path.exists(src):
        shutil.copyfile(src, thePath)
    # print (i)
    # print (theVal)
    # print(imgPath)