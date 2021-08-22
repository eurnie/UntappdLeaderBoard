import UntappdClient from "./client.js";

const userList = ['eurniee', 'DriesWets', 'BassieWouters', 'Den_Henry', 'LarsVer', 'Filip_vermeul'];
let client = new UntappdClient();
// let information = await client.retrieveInformation(userList);
let information = "";
console.log(generateHTMLPage(information));

function generateHTMLPage(information) {
    console.log('\n');
    console.log('<html>\n');
    console.log('\n');
    console.log('<head>\n');
    console.log('    <meta charset="utf-8" />\n');
    console.log('    <title>Untappd Leaderboard</title>\n');
    console.log('    <link rel="stylesheet" href="http://arne.ulyssis.be/Untappd/style.css">\n');
    console.log('</head>\n');
    console.log('\n');
    console.log('<body class="background">\n');
    console.log('    <!-- Menu tab-->\n');
    console.log('    <div class="tab">\n');
    console.log('        <button id="total_unique_beers_button" class="tablinks">Total Unique Beers</button>\n');
    console.log('        <button id="total_beers_button" class="tablinks">Total Beers</button>\n');
    console.log('        <button id="total_badges_button" class="tablinks">Total Badges</button>\n');
    console.log('    </div>\n');

// def print_leaderboard(title, user_data_list):
//     if (title == 'Total Unique Beers'):
//         array_index = 2
//         id_name = '"total_unique_beers_tab"'
//     elif (title == 'Total Beers'):
//         array_index = 1
//         id_name = '"total_beers_tab"'
//     elif (title == 'Total Badges'):
//         array_index = 3
//         id_name = '"total_badges_tab"'

//     print("""   <!-- Tab content -->
//     <div id={} class="tabcontent">
//         <br>
//         <br>
//         <div class="container">""".format(id_name))

//     print("            <h4>" + title + "</h4>")
//     print("""            <table class='center'>
//                 <tr>
//                     <th>Ranking</th>
//                     <th>Name</th>
//                     <th>Number</th>
//                 </tr>""")
//     counter = 1
//     rows = []
//     for user_data in user_data_list:
//         print("                <tr>")
//         print("                    <td>" + str(counter) + '</td>')
//         print("                    <td>" + find_real_name(user_data[0]) + "</td>")
//         print("                    <td>" + str(user_data[array_index]) + "</td>")
//         print("                </tr>")
        
//         counter += 1
        
//     print("            </table>")

//     print("""        </div>
//     </div>
//     """)

// def main(): 
    
//     # Create leaderboard 'Total Unique Beers'
//     leaderboard_total_unique = sorted(user_data_list, key = lambda x: x[2], reverse = True)
//     print_leaderboard('Total Unique Beers', leaderboard_total_unique)
   
//     # Create leaderboard 'Total Beers'
//     leaderboard_total_beers = sorted(user_data_list, key = lambda x: x[1], reverse = True)
//     print_leaderboard('Total Beers', leaderboard_total_beers)
    
//     # Create leaderboard 'Total Badges'
//     leaderboard_total_badges = sorted(user_data_list, key = lambda x: x[3], reverse = True)
//     print_leaderboard('Total Badges', leaderboard_total_badges)

// main()

    console.log('    <div class="voet">\n');
    console.log('        <a href="https://github.com/eurnie/UntappdLeaderboard" target="_blank">https://github.com/eurnie/UntappdLeaderboard</a>\n');
    console.log('    </div>\n');
    console.log('\n');
    console.log('    <script src="http://arne.ulyssis.be/Untappd/browser_main.js"></script>\n');
    console.log('</body>\n');
    console.log('\n');
    console.log('</html>\n');
    console.log('\n');
}