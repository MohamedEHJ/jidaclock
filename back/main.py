"""
Author: Mohamed EL HAJOUI
Copyright 2023
"""
from urllib.request import urlopen, Request
from bs4 import BeautifulSoup
import json
from types import SimpleNamespace
from datetime import date

# Get today's date in the required format
today = date.today()
date_fr = today.strftime("%d/%m/%Y")

# Query mawaqit page
req = Request(
    url='https://mawaqit.net/en/mosqueeorange', 
    headers={'User-Agent': 'Mozilla/5.0'}
)
page = urlopen(req).read()

# Load html code
bs = BeautifulSoup(page,"html.parser")

# Find the script tag containing the required data
script_tag = bs.find(lambda tag:tag.name=="script" and "longitude" in tag.text)

# Extract prayers
script_var = [x for x in script_tag.text.split("\n") if "confData" in x][0].split("=")[1][:-1]

# load var as json
x = json.loads(script_var, object_hook=lambda d: SimpleNamespace(**d))

# create string from list
csv_string = ','.join(x.times)

# Open the file in append mode
file = open("./horraires.csv", "a")
line_to_write = date_fr + "," + csv_string + "\n"

# write to file
file.write(line_to_write)
file.close()