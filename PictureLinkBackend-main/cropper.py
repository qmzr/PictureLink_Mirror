import cv2

import os
import random
path = './images/'  # replace with the path to your folder
folders = []

# iterate over the list of files and directories in the folder
for name in os.listdir(path):
    # check if the item is a directory
    if os.path.isdir(os.path.join(path, name)):
        # add the directory name to the list of folders
        folders.append(name)

location = "cropped/"
for folder_name in folders:
    # join the location and folder name to create the full path
    path = os.path.join(location, folder_name)
    # create the directory if it doesn't exist
    if not os.path.exists(path):
        os.makedirs(path)


print (folders)

# Read the coordinates file
with open('bounding_boxes.txt') as f:
    coordinates = [line.strip().split() for line in f]

# Read the image paths file
with open('images.txt') as f:
    image_paths = [line.strip().split()[1] for line in f]

coordinates = coordinates[:]
image_paths = image_paths[:]
# Loop through the coordinates and image paths
for i, (coord, img_path) in enumerate(zip(coordinates, image_paths)):
    # Load the image
    img = cv2.imread("images/" + img_path)
    print(img_path)
    # Convert the coordinates to integers
    coord = [int(float(c)) for c in coord[1:]]

    # Crop the image using the coordinates
    x1, y1, x2, y2 = coord
    # print(x1)
    # print(y1)
    # print(x2)
    # print(y2)
    if y1 == y2:
        y2 += 1
    if x1 == x2:
        x1 += 1
    yMin = min(y1, y2)
    yMax = max(y1, y2)
    xMin = min(x1, x2)
    xMax = max(x2, x2)

    cropped_img = img[yMin:max(y1, y2), min(x1,x2):max(x1,x2)]

    # Save the cropped image with a new filename
    # print ('cropped/{img_path}')
    if random.uniform(0,1) < 0.2:
        filename = 'cropped/' + img_path;
        cv2.imwrite(filename, cropped_img)
