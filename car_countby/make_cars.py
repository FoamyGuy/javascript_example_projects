from random import randint
import json

makes = {
    "Honda":["Civic", "Accord", "CRV", "Ridgeline", "CRX"],
    "Acura":["RSX", "TSX", "Integra"],
    "Mazda":["3", "5", "CX-5"],
    "Ford":["F150", "Escort", "Fairlane", "Mustang"],
    "Chevy":["Volt", "Impala", "Camaro"],
    "Audi":["Quattro", "TT"],
    "Mercedes":["328I", "300SEL"],
    "Jeep":["Wrangler", "Comanche", "Cherokee"],
    "Kia":["Soul", "Sephia"]
}

CARS = []

for i in range(250):
    length = len(makes.keys())
    #print("length: {}".format(length))
    index = randint(0, length) - 1
    #print("Index: {}".format(index))
    make = list(makes)[index]
    #print(make)
    CARS.append({
        "price":randint(5000, 15000),
        "make": make,
        "model": makes[make][randint(0, len(makes[make]) - 1)],
        "year": randint(2003, 2017),
        "miles": randint(30000, 180000)
    })

print(json.dumps(CARS, indent=4))
f = open("car_data.json", "w")
f.write(json.dumps(CARS, indent=4))
f.close()
