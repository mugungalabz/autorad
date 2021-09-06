import requests
import json

hash_list = []
apistr = "https://api.artblocks.io/token/144000"
for x in range(0, 1000):
    # print(str(x).zfill(3))
    autoradtokenAPIString = apistr + str(str(x).zfill(3))
    print(autoradtokenAPIString)
    resp = requests.get(autoradtokenAPIString)
    if (resp.text == "token does not exist"):
        break
    try:
        respdict = json.loads(resp.text)
        hash_list.append(respdict["token hash"])
    except json.decoder.JSONDecodeError:
        print("caught the json decoding error")
        continue
with open('autradhashes.txt', 'w') as file:
    file.write(json.dumps(hash_list))
