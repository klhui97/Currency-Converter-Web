import requests
import json

r = requests.get('http://data.fixer.io/api/latest?access_key=b56e8eafefe3cf628e9296122260a739&format=1')
parsed = json.loads(r.text)

data = []
for item in parsed["rates"]:
    data.append({
        'type': item,
        'value': parsed["rates"][item]
    })

print(data)