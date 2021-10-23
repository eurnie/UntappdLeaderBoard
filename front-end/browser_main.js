const total_unique_beers_button = document.getElementById('total_unique_beers_button');
const total_beers_button = document.getElementById('total_beers_button');
const total_badges_button = document.getElementById('total_badges_button');

total_unique_beers_button.onclick = async() => { showTab(total_unique_beers_button, 'total_unique_beers_tab'); };
total_beers_button.onclick = async() => { showTab(total_beers_button, 'total_beers_tab'); };
total_badges_button.onclick = async() => { showTab(total_badges_button, 'total_badges_tab'); };

const home_tab = document.getElementById('total_unique_beers_tab');
home_tab.style.display = 'block';

start();

async function start() {
	
	let leaderboard = await get('http://arne.ulyssis.be/Untappd/leaderboard.json');

	document.getElementById('total_unique_beers_position_1_name').innerHTML = leaderboard.number_unique_beers.ranking.position_1;
	document.getElementById('total_unique_beers_position_2_name').innerHTML = leaderboard.number_unique_beers.ranking.position_2;
	document.getElementById('total_unique_beers_position_3_name').innerHTML = leaderboard.number_unique_beers.ranking.position_3;
	document.getElementById('total_unique_beers_position_4_name').innerHTML = leaderboard.number_unique_beers.ranking.position_4;
	document.getElementById('total_unique_beers_position_5_name').innerHTML = leaderboard.number_unique_beers.ranking.position_5;
	document.getElementById('total_unique_beers_position_6_name').innerHTML = leaderboard.number_unique_beers.ranking.position_6;
	document.getElementById('total_unique_beers_position_7_name').innerHTML = leaderboard.number_unique_beers.ranking.position_7;
	document.getElementById('total_unique_beers_position_8_name').innerHTML = leaderboard.number_unique_beers.ranking.position_8;
	document.getElementById('total_unique_beers_position_9_name').innerHTML = leaderboard.number_unique_beers.ranking.position_9;
    
	document.getElementById('total_unique_beers_position_1_points').innerHTML = leaderboard.number_unique_beers.points.points_1;
	document.getElementById('total_unique_beers_position_2_points').innerHTML = leaderboard.number_unique_beers.points.points_2;
	document.getElementById('total_unique_beers_position_3_points').innerHTML = leaderboard.number_unique_beers.points.points_3;
	document.getElementById('total_unique_beers_position_4_points').innerHTML = leaderboard.number_unique_beers.points.points_4;
	document.getElementById('total_unique_beers_position_5_points').innerHTML = leaderboard.number_unique_beers.points.points_5;
	document.getElementById('total_unique_beers_position_6_points').innerHTML = leaderboard.number_unique_beers.points.points_6;
	document.getElementById('total_unique_beers_position_7_points').innerHTML = leaderboard.number_unique_beers.points.points_7;
	document.getElementById('total_unique_beers_position_8_points').innerHTML = leaderboard.number_unique_beers.points.points_8;
	document.getElementById('total_unique_beers_position_9_points').innerHTML = leaderboard.number_unique_beers.points.points_9;
    
	document.getElementById('total_beers_position_1_name').innerHTML = leaderboard.number_total_beers.ranking.position_1;
	document.getElementById('total_beers_position_2_name').innerHTML = leaderboard.number_total_beers.ranking.position_2;
	document.getElementById('total_beers_position_3_name').innerHTML = leaderboard.number_total_beers.ranking.position_3;
	document.getElementById('total_beers_position_4_name').innerHTML = leaderboard.number_total_beers.ranking.position_4;
	document.getElementById('total_beers_position_5_name').innerHTML = leaderboard.number_total_beers.ranking.position_5;
	document.getElementById('total_beers_position_6_name').innerHTML = leaderboard.number_total_beers.ranking.position_6;
	document.getElementById('total_beers_position_7_name').innerHTML = leaderboard.number_total_beers.ranking.position_7;
	document.getElementById('total_beers_position_8_name').innerHTML = leaderboard.number_total_beers.ranking.position_8;
	document.getElementById('total_beers_position_9_name').innerHTML = leaderboard.number_total_beers.ranking.position_9;
    
	document.getElementById('total_beers_position_1_points').innerHTML = leaderboard.number_total_beers.points.points_1;
	document.getElementById('total_beers_position_2_points').innerHTML = leaderboard.number_total_beers.points.points_2;
	document.getElementById('total_beers_position_3_points').innerHTML = leaderboard.number_total_beers.points.points_3;
	document.getElementById('total_beers_position_4_points').innerHTML = leaderboard.number_total_beers.points.points_4;
	document.getElementById('total_beers_position_5_points').innerHTML = leaderboard.number_total_beers.points.points_5;
	document.getElementById('total_beers_position_6_points').innerHTML = leaderboard.number_total_beers.points.points_6;
	document.getElementById('total_beers_position_7_points').innerHTML = leaderboard.number_total_beers.points.points_7;
	document.getElementById('total_beers_position_8_points').innerHTML = leaderboard.number_total_beers.points.points_8;
	document.getElementById('total_beers_position_9_points').innerHTML = leaderboard.number_total_beers.points.points_9;
    
	document.getElementById('total_badges_position_1_name').innerHTML = leaderboard.number_badges.ranking.position_1;
	document.getElementById('total_badges_position_2_name').innerHTML = leaderboard.number_badges.ranking.position_2;
	document.getElementById('total_badges_position_3_name').innerHTML = leaderboard.number_badges.ranking.position_3;
	document.getElementById('total_badges_position_4_name').innerHTML = leaderboard.number_badges.ranking.position_4;
	document.getElementById('total_badges_position_5_name').innerHTML = leaderboard.number_badges.ranking.position_5;
	document.getElementById('total_badges_position_6_name').innerHTML = leaderboard.number_badges.ranking.position_6;
	document.getElementById('total_badges_position_7_name').innerHTML = leaderboard.number_badges.ranking.position_7;
	document.getElementById('total_badges_position_8_name').innerHTML = leaderboard.number_badges.ranking.position_8;
	document.getElementById('total_badges_position_9_name').innerHTML = leaderboard.number_badges.ranking.position_9;
    
	document.getElementById('total_badges_position_1_points').innerHTML = leaderboard.number_badges.points.points_1;
	document.getElementById('total_badges_position_2_points').innerHTML = leaderboard.number_badges.points.points_2;
	document.getElementById('total_badges_position_3_points').innerHTML = leaderboard.number_badges.points.points_3;
	document.getElementById('total_badges_position_4_points').innerHTML = leaderboard.number_badges.points.points_4;
	document.getElementById('total_badges_position_5_points').innerHTML = leaderboard.number_badges.points.points_5;
	document.getElementById('total_badges_position_6_points').innerHTML = leaderboard.number_badges.points.points_6;
	document.getElementById('total_badges_position_7_points').innerHTML = leaderboard.number_badges.points.points_7;
	document.getElementById('total_badges_position_8_points').innerHTML = leaderboard.number_badges.points.points_8;
	document.getElementById('total_badges_position_9_points').innerHTML = leaderboard.number_badges.points.points_9;
}

function get(url) {

	let promise = new Promise((resolve, reject) => {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {			
			if (this.readyState == 4 && this.status == 200) {
				resolve(JSON.parse(this.responseText));
			}
		};
		xhttp.open('GET', url, true);
		xhttp.send();
	});

	return promise;
}

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
