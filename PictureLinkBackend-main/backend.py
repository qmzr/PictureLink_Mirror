import subprocess


ImgPath = ""
LogPath = "./theImages/vgg19/004/50_19push0.0986.pth/local_analysis.log"
# subprocess.call(['bash', 'python3 local_anlysis.py'])

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
for i in range(len(lines)):
	theLine = lines[i]
	if len(theLine) > 8:
		if ("top" in theLine) and ("predicted class:" in theLine):
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
			classDict[classNumber] = [[], [], 0, 0, 0]
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

# print (len(classDict))
# print (logitsList)


from scipy.special import softmax
# define data
# data = [-1540.520752, -1541.105225, -1542.316650, -1542.744629, -1543.237305, -1543.359985, -1544.219727, -1544.485352, -1544.745117, -1544.934082, -1545.008789, -1545.536377]
# calculate softmax
result = softmax(logitsList)
# report the probabilities
# print(len(logitsList))
# report the sum of the probabilities

print (len(result))
print (len(sortedClassNumbers))
for i in range(len(sortedClassNumbers)):
	classDict[sortedClassNumbers[i]][3] = result[i] 



import os


#'top-20_class_prototypes'

folderPath = './theImages/vgg19/004/'
directories = [name for name in os.listdir(folderPath) if os.path.isdir(os.path.join(folderPath, name))]

for i in range(1, 51):
	folderName = folderPath + directories[0] + "/top-" + str(i) + "_class_prototypes/";
	imgNames = []
	for j in range(1, 11):
		imgName = "top-" + str(i) + "_activated_prototype_in_original_pimg.png"
		imgNames.append(folderName + imgName)
	classDict[sortedClassNumbers[i - 1]][4] = imgNames



for i in classDict:
	print (i)
	print (classDict[i])
	print ("\n")

jsonDict = {}
classListDict = []
for i in sortedClassNumbers:
	theDict = {}
	interiorDict = {}
	interiorDict["scores"] = classDict[i][0]
	interiorDict["weights"] = classDict[i][1]
	interiorDict["logit"] = classDict[i][2]
	interiorDict["probability"] = classDict[i][3]
	interiorDict["images"] = classDict[i][4]

	theDict[i] = interiorDict


	classListDict.append(theDict)

originalImageDict = {}

theLines = []

with open("coordinates.txt", "r") as f:
    for line in f:
        nums = [int(x) for x in line.strip().split()]
        theLines.append(nums)
f.close()

# print(theLines)

jsonDict["classes"] = classListDict
jsonDict["image"] = {"url": folderPath + directories[0] + "/original_img.png", "boxes": theLines[:10]} 
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
