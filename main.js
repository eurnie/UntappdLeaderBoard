import UntappdClient from "./client.js";

const userList = ['eurniee', 'DriesWets', 'BassieWouters', 'Den_Henry', 'LarsVer', 'Filip_vermeul'];
let client = new UntappdClient();
let information = await client.retrieveInformation(userList);
console.log(generateJSON(information));
// console.log(information);

function generateJSON(information) {
    let newJSON = '{';
    for (let i = 0; i < information.length; i++) {
        newJSON += `"${information[i][0]}" : { "ranking" : { "position_1"}}`;
    }

    newJSON += '}'
    return newJSON;
}