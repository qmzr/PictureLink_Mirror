# import torch
# import torch.nn as nn
# m = nn.Softmax(dim=1)

# ls = [-1540.520752, -1541.105225, -1542.316650]

# # output = m(ls)

from scipy.special import softmax
# define data
data = [-1540.520752, -1541.105225, -1542.316650, -1542.744629, -1543.237305, -1543.359985, -1544.219727, -1544.485352, -1544.745117, -1544.934082, -1545.008789, -1545.536377]
# calculate softmax
result = softmax(data)
# report the probabilities
print(result)
# report the sum of the probabilities
print(sum(result))

import numpy as np

theData = np.load("./saved_models_2/vgg19/004/img/epoch-50/bb50.npy")
f = open("softMaxTest.txt", "w")
for i in theData:
	f.write(str(i) + "\n")
f.close()
# print(len(theData))