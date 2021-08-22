#!/usr/bin/python3
print("""
<html>

<head>
    <meta charset="utf-8" />
    <title>Untappd Leaderboard</title>
    <link rel="stylesheet" href="http://arne.ulyssis.be/Untappd/style.css">
</head>

<body class="background">
    <!-- Menu tab-->
    <div class="tab">
        <button id="total_unique_beers_button" class="tablinks">Total Unique Beers</button>
        <button id="total_beers_button" class="tablinks">Total Beers</button>
        <button id="total_badges_button" class="tablinks">Total Badges</button>
    </div>
""")

import re
import requests
import time

from bs4 import BeautifulSoup
from requests.packages.urllib3.exceptions import InsecureRequestWarning

###########################
# Functions
###########################

def get_data_from_untappd(url):
    # Setting up and Making the Web Call
    try:
        user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0'
        headers = {'User-Agent': user_agent}
        # Make web request for that URL and don't verify SSL/TLS certs
        response = requests.get(url, headers=headers, verify=False)
        return response.text

    except Exception as e:
        print('[!]   ERROR - Untappd issue: {}'.format(str(e)))
        exit(1)


def get_user_data(passed_user):
    # Parsing user information
    url = 'https://untappd.com/user/{}'.format(passed_user)
    resp = get_data_from_untappd(url)
    html_doc = BeautifulSoup(resp, 'html.parser')
    user1 = html_doc.find_all('span', 'stat')
    if user1:
        return user1

def print_leaderboard(title, user_data_list):
    if (title == 'Total Unique Beers'):
        array_index = 2
        id_name = '"total_unique_beers_tab"'
    elif (title == 'Total Beers'):
        array_index = 1
        id_name = '"total_beers_tab"'
    elif (title == 'Total Badges'):
        array_index = 3
        id_name = '"total_badges_tab"'

    print("""   <!-- Tab content -->
    <div id={} class="tabcontent">
        <br>
        <br>
        <div class="container">""".format(id_name))

    print("            <h4>" + title + "</h4>")
    print("""            <table class='center'>
                <tr>
                    <th>Ranking</th>
                    <th>Name</th>
                    <th>Number</th>
                </tr>""")
    counter = 1
    rows = []
    for user_data in user_data_list:
        print("                <tr>")
        print("                    <td>" + str(counter) + '</td>')
        print("                    <td>" + find_real_name(user_data[0]) + "</td>")
        print("                    <td>" + str(user_data[array_index]) + "</td>")
        print("                </tr>")
        
        counter += 1
        
    print("            </table>")

    print("""        </div>
    </div>
    """)

def find_real_name(nickname):
    if (nickname == 'eurniee'):
        return 'Arne Vermeulen'
    elif (nickname == 'BassieWouters'):
        return 'Sebastiaan Wouters'
    elif (nickname == 'Den_Henry'):
        return 'Hendrik Van Beersel'
    elif (nickname == 'LarsVer'):
        return 'Lars Vermeulen'
    elif (nickname == 'DriesWets'):
        return 'Dries Wets'

###########################
# Start
###########################
def main(): 
    # Suppress HTTPS warnings
    requests.packages.urllib3.disable_warnings(InsecureRequestWarning)

    # Get user info
    user_list = ['eurniee', 'BassieWouters', 'Den_Henry', 'LarsVer', 'DriesWets']
    user_data_list = []

    for user in user_list:   
        user_data = get_user_data(user)
        user_data_list.append([user, int(format(user_data[0].text)), int(format(user_data[1].text)), int(format(user_data[2].text))])
    
    # Create leaderboard 'Total Unique Beers'
    leaderboard_total_unique = sorted(user_data_list, key = lambda x: x[2], reverse = True)
    print_leaderboard('Total Unique Beers', leaderboard_total_unique)
   
    # Create leaderboard 'Total Beers'
    leaderboard_total_beers = sorted(user_data_list, key = lambda x: x[1], reverse = True)
    print_leaderboard('Total Beers', leaderboard_total_beers)
    
    # Create leaderboard 'Total Badges'
    leaderboard_total_badges = sorted(user_data_list, key = lambda x: x[3], reverse = True)
    print_leaderboard('Total Badges', leaderboard_total_badges)


main()
print("""    <div class="voet">
        <a href="https://github.com/eurnie/UntappdLeaderboard" target="_blank">https://github.com/eurnie/UntappdLeaderboard</a>
    </div>

    <script src="http://arne.ulyssis.be/Untappd/browser_main.js"></script>
</body>

</html>
""")
