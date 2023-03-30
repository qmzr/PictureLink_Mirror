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

location1 = "./datasets/cub200_cropped/train_cropped_augmented/"
for folder_name in folders:
    # join the location and folder name to create the full path
    path = os.path.join(location1, folder_name)
    # create the directory if it doesn't exist
    if not os.path.exists(path):
        os.makedirs(path)