import fs from 'fs';

const total_unique_beers_button = document.getElementById('total_unique_beers_button');
const total_beers_button = document.getElementById('total_beers_button');
const total_badges_button = document.getElementById('total_badges_button');

total_unique_beers_button.onclick = async() => { showTab(total_unique_beers_button, 'total_unique_beers_tab') };
total_beers_button.onclick = async() => { showTab(total_beers_button, 'total_beers_tab') };
total_badges_button.onclick = async() => { showTab(total_badges_button, 'total_badges_tab') };

const home_tab = document.getElementById('total_unique_beers_tab');
home_tab.style.display = 'block';

let leaderboard = JSON.parse(fs.readFileSync('leaderboard.json'));
document.getElementById('total_unique_beers_position_1_name').innerHTML = leaderboard.number_unique_beers.ranking.position_1;
document.getElementById('total_unique_beers_position_2_name').innerHTML = leaderboard.number_unique_beers.ranking.position_2;
document.getElementById('total_unique_beers_position_3_name').innerHTML = leaderboard.number_unique_beers.ranking.position_3;
document.getElementById('total_unique_beers_position_4_name').innerHTML = leaderboard.number_unique_beers.ranking.position_4;
document.getElementById('total_unique_beers_position_5_name').innerHTML = leaderboard.number_unique_beers.ranking.position_5;

document.getElementById('total_unique_beers_position_1_points').innerHTML = leaderboard.number_unique_beers.points.position_1;
document.getElementById('total_unique_beers_position_2_points').innerHTML = leaderboard.number_unique_beers.points.position_2;
document.getElementById('total_unique_beers_position_3_points').innerHTML = leaderboard.number_unique_beers.points.position_3;
document.getElementById('total_unique_beers_position_4_points').innerHTML = leaderboard.number_unique_beers.points.position_4;
document.getElementById('total_unique_beers_position_5_points').innerHTML = leaderboard.number_unique_beers.points.position_5;

function showTab(button, tab) {
    let i;
    let tablinks;

    // Get all elements with class="tabcontent" and hide them
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    const currentTab = document.getElementById(tab);
    currentTab.style.display = 'block';

    button.className += ' active';
}
