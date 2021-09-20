const UntappdClient = require('./client.js');

main();

async function main() {
	const userList = ['eurniee', 'DriesWets', 'BassieWouters', 'Den_Henry', 'LarsVer', 'zico_van_acker_3579'];
	let client = new UntappdClient();
	let information = await client.retrieveInformation(userList);
	console.log(generateJSON(information));
}

function generateJSON(information) {
	let newJSON = '{\n';
	for (let i = 0; i < information.length; i++) {
		newJSON += `"${information[i][0]}" : {
            "ranking" : {
                "position_1" : "${information[i][1][1]}",
                "position_2" : "${information[i][2][1]}",
                "position_3" : "${information[i][3][1]}",
                "position_4" : "${information[i][4][1]}",
                "position_5" : "${information[i][5][1]}",
                "position_6" : "${information[i][6][1]}"
            },
            "points" : {
                "points_1" : "${information[i][1][i+2]}",
                "points_2" : "${information[i][2][i+2]}",
                "points_3" : "${information[i][3][i+2]}",
                "points_4" : "${information[i][4][i+2]}",
                "points_5" : "${information[i][5][i+2]}",
                "points_6" : "${information[i][6][i+2]}"
            }
        }`;
		if (i+1 < information.length) {
			newJSON += ',';
		}
	}
	newJSON += '\n}';
	return newJSON;
}