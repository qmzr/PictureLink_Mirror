import subprocess
import sys
import os
# Specify the path to the file you want to delete




# startPath = "../../"
startPath = "http://localhost:8080/"


originalImageDirectory = sys.argv[1]
originalImageName = sys.argv[2]



# file_path_to_remove = "../picture-link-fe-main/public/theImages/vgg19/005/50_19push0.1070.pth/local_analysis.log"
file_path_to_remove = originalImageDirectory + "/vgg19/005/50_19push0.1070.pth/local_analysis.log"

# Check if the file exists before deleting it
if os.path.exists(file_path_to_remove):
    os.remove(file_path_to_remove)
    print(f"File '{file_path_to_remove}' deleted successfully.")
else:
    print(f"File '{file_path_to_remove}' does not exist.")



ImgPath = ""
# LogPath = "../picture-link-fe-main/public/theImages/vgg19/005/50_19push0.1070.pth/local_analysis.log"
LogPath = originalImageDirectory + "/vgg19/005/50_19push0.1070.pth/local_analysis.log"
subprocess.call(['python3', 'local_analysis.py', '-imgdir', originalImageDirectory, '-img', originalImageName])

lines = []

# Read the log file to extract the information
with open(LogPath, 'r') as f:
    lines = [line.rstrip() for line in f]

# print(lines)
classDict = {}
classNumber = ""
logitsList = []
sortedClassNumbers = []
# Class Name :

firstHalf = True
ls1 = []
ls2 = []
for i in range(len(lines)):
	theLine = lines[i]

	if firstHalf:
		if "prototype class identity:" in theLine:
			classIdentity = theLine[25:].strip()
			ls1.append(int(classIdentity))

		elif "activation value (similarity score):" in theLine:
			simScore = theLine[36:].strip()
			ls2.append(round(float(simScore), 2))

	if len(theLine) > 8:
		if ("top" in theLine) and ("predicted class:" in theLine):
			firstHalf = False
			# Extract class number
			# print (theLine)

			classNumber = (theLine[-3:]).strip()
			# print (classNumber)

			# if len(classNumber) == 0:
				# print ("test")
			# print (len(classNumber))

			if classNumber[0] == ":":
				classNumber = classNumber[1:].strip()
			sortedClassNumbers.append(classNumber)
				# print (classNumber)
			# First element of the value is the number of images compared for the class
			# Second element of the value is the total score for the class
			classDict[classNumber] = [[], [], 0, 0, 0, 0]
	# print (classNumber)
	if classNumber != "":
		# print ("HERE")
		if ("activation value (similarity score):" in theLine):
			# print ("HERE")
			# Similarity score
			# print(theLine)
			theScore = float(theLine[37:])
			classDict[classNumber][0].append(theScore)
			# classDict[classNumber][0] += 1
			# classDict[classNumber][1] += theScore
		elif ("last layer connection:" in theLine):
			theWeight = float(theLine[22:].strip())
			classDict[classNumber][1].append(theWeight)
		elif ("logit of the class:" in theLine):
			theLogit = float(theLine[19:].strip())
			classDict[classNumber][2] = theLogit
			logitsList.append(theLogit)

print (ls1)
print (ls2)
# print (len(classDict))
# print (logitsList)

from scipy.special import softmax

# data = [-1540.520752, -1541.105225, -1542.316650, -1542.744629, -1543.237305, -1543.359985, -1544.219727, -1544.485352, -1544.745117, -1544.934082, -1545.008789, -1545.536377]

result = softmax(logitsList)
# report the probabilities
# print(len(logitsList))
# report the sum of the probabilities

# print (len(result))
# print (len(sortedClassNumbers))
for i in range(len(sortedClassNumbers)):
	classDict[sortedClassNumbers[i]][3] = result[i] 



import os


#'top-20_class_prototypes'

folderPath = './theImages/vgg19/005/'
directories = [name for name in os.listdir(folderPath) if os.path.isdir(os.path.join(folderPath, name))]

for i in range(1, 11):
	folderName = startPath + folderPath + directories[0] + "/top-" + str(i) + "_class_prototypes/";
	imgNames = []
	testPatches = []
	for j in range(1, 11):
		imgName = "top-" + str(j) + "_activated_prototype_in_original_pimg.png"
		imgNames.append(folderName + imgName)
		imgName = "most_highly_activated_patch_in_original_img_by_top-"+ str(j) + "_prototype.png"
		testPatches.append(folderName + imgName)

	classDict[sortedClassNumbers[i - 1]][4] = imgNames
	classDict[sortedClassNumbers[i - 1]][5] = testPatches



# for i in classDict:
# 	print (i)
# 	print (classDict[i])
# 	print ("\n")

nameDict = {}
with open("classes.txt", "r") as f:
    for line in f:
        s = line.strip().split()
        k = s[0]
        v = s[1].split('.')[1]
        nameDict[k] = v
f.close()




for i in sortedClassNumbers:
	for j in range(len(classDict[i][0])):
		classDict[i][0][j] *= classDict[i][1][j]
		classDict[i][0][j] = round(classDict[i][0][j], 2)

jsonDict = {}
classListDict = []
# print (sortedClassNumbers)
# print (classDict)
for j in range(len(sortedClassNumbers)):
	i = sortedClassNumbers[j]
	theDict = {}
	interiorDict = {}
	interiorDict["scores"] = classDict[i][0]
	# interiorDict["weights"] = classDict[i][1]
	interiorDict["logit"] = round(classDict[i][2], 2)
	interiorDict["top_class_index"] = j
	interiorDict["probability"] = round(classDict[i][3] * 100, 0)
	interiorDict["prototypes"] = classDict[i][4]
	interiorDict["testImagePatches"] = classDict[i][5]
	
	# interiorDict["logit"] = round(classDict[i][2],2)
	# interiorDict["probability"] = round(classDict[i][3] * 100, 2)
	# interiorDict["images"] = classDict[i][4]
	# print (i)
	interiorDict["class_name"] = (nameDict[str(int(i) + 1)]).replace("_", " ")
	interiorDict["class_number"] = str(int(i) + 1)
	# interiorDict["score"] = sum(classDict[i][0])

	theDict[i] = interiorDict


	classListDict.append(interiorDict)

originalImageDict = {}

coordianteOriginal = []
coordianteTop10 = []
with open("coordinates.txt", "r") as f:
    for line in f:
        nums = [int(x) for x in line.strip().split()]
        coordianteOriginal.append(nums)
f.close()

with open("coordinates2.txt", "r") as f:
    for line in f:
        nums = [int(x) for x in line.strip().split()]
        coordianteTop10.append(nums)

# print(theLines)

top10PrototypeAddress = []
for i in range(10):
	path = "/most_activated_prototypes/top-" + str(i+1) + "_activated_prototype_in_original_pimg.png"
	top10PrototypeAddress.append(startPath + folderPath + directories[0] + path)

jsonDict["top_10_classes"] = classListDict
# jsonDict["original_image"] = {"original_image_path": folderPath + directories[0] + "/original_img.png"}
# <<<<<<< HEAD
# jsonDict["top_10_prototypes"] = {"coordinates":coordianteOriginal[:10]}
# jsonDict["path"] = {"url": "picture-link-be/PictureLinkBackend-main/theImages/vgg19/005/50_19push0.1070.pth/",
# 					"top-prototypes": {"folder": "most_activated_prototypes/",
# 									   "name_of_file": "top-X_activated_prototype_in_original_pimg.png"},
# 			        "reasoning":{
# 			            "folder": "top-X_class_prototypes",
# 			            "original_image": "most_highly_activated_patch_in_original_img_by_top-X_prototype.png",
# 			            "protorype_image": "top-X_activated_prototype_in_original_pimg.png"
# 			        },
# 			        "resized_original_image":"original_img.png"}
# =======

tempDictList = []
for i in range(len(coordianteOriginal)):
	tempDictList.append({"coordinates": coordianteOriginal[i], "prototype_image": top10PrototypeAddress[i], "classNumber": ls1[i], "score": ls2[i], 
		"className": (nameDict[str(int(ls1[i]) + 1)]).replace("_", " ")})

jsonDict["top_10_prototypes"] = tempDictList
# jsonDict["top_10_prototypes"] = {"coordinates":coordianteOriginal[:10], "top_10_prototype_images":top10PrototypeAddress}
# jsonDict["path"] = {"url": "picture-link-be/PictureLinkBackend-main/theImages/vgg19/005/50_19push0.1070.pth/",
# 					"top-prototypes": {"folder": "most_activated_prototypes/",
# 									   "name_of_file": "top-X_activated_prototype_in_original_pimg.png"},
# 			        "reasoning":{
# 			            "folder": "top-X_class_prototypes",
# 			            "original_image": "most_highly_activated_patch_in_original_img_by_top-X_prototype.png",
# 			            "protorype_image": "top-X_activated_prototype_in_original_pimg.png"
# 			        },
# 			        "resized_original_image":"original_img.png"}
jsonDict["resized_original_image"] = startPath + "theImages/vgg19/005/50_19push0.1070.pth/original_img.png"
jsonDict["number_of_classes"] = "200"
jsonDict["number_of_training_images"] = "5792"
jsonDict["number_of_patches"] = "10"

# >>>>>>> db6060895a11314bf91874e12ba1994c901714af
import json
jsonStr = json.dumps(jsonDict)

f = open("backendJSON.json", "w")
f.write(jsonStr)
f.close()

# print (jsonStr)


# folder_path += directories[0]
# directories = [name for name in os.listdir(folder_path) if os.path.isdir(os.path.join(folder_path, name))]
# print(directories)
# print (len(classDict))

# sortedClassList = []
# for i in classDict:
# 	sortedClassList.append((i, classDict[i][0]))

# sortedClassList.sort(key = lambda x: x[1])
# print(len(sortedClassList))
