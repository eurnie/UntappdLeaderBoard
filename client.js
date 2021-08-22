import * as https from 'https';
import fs from 'fs';

class UntappdClient {
    clientID;
    clientSecret;
    accessToken;

    constructor() {
        let keys = JSON.parse(fs.readFileSync('keys.json'));
        this.clientID = keys.client_id;
        this.clientSecret = keys.client_secret;
        this.accessToken = keys.access_token;
    }

    get(givenPath) {
        const options = {
            hostname: 'api.untappd.com',
            port: 443,
            path: givenPath,
            method: 'GET'
        }
    
        let promise = new Promise((resolve, reject) => {
            https.get(options, (res) => {
                // console.log('statusCode:', res.statusCode);
                console.log('headers:', res.headers);
              
                let result = "";

                res.on('data', (d) => {
                  //process.stdout.write(d);
                  result += d;
                }).on('end', () => {
                    resolve(JSON.parse(result));
                });
              
            }).on('error', (e) => {
                //console.error(e);
                reject(e);
            });
        })

        return promise;
    }

    async retrieveInformation(listOfUsers) {
        let result = [];
        for (let i = 0; i < listOfUsers.length; i++) {
            let user = listOfUsers[i];
            let data = await this.get(`/v4/user/info/${listOfUsers[i]}?access_token=${this.accessToken}`);
            result.push([user, this.findRealName(user), data.response.user.stats.total_beers, data.response.user.stats.total_checkins, data.response.user.stats.total_badges]);
        }

        return this.sortInformation(result);
    }

    sortInformation(listOfInformation) {
        // number of unique beers
        let numberOfUniqueBeersList = [...listOfInformation].sort((a, b) => {
            return b[2] - a[2];
        });
        numberOfUniqueBeersList.unshift('Number of unique beers');

        // number of total beers
        let numberOfTotalBeersList = [...listOfInformation].sort((a, b) => {
            return b[3] - a[3];
        });
        numberOfTotalBeersList.unshift('Number of total beers');
          
        // number of badges
        let numberOfBadgesList = [...listOfInformation].sort((a, b) => {
            return b[4] - a[4];
        });
        numberOfBadgesList.unshift('Number of badges');

        let combination = [numberOfUniqueBeersList, numberOfTotalBeersList, numberOfBadgesList];
        return combination;
    }

    findRealName(nickname) {
        switch(nickname) {
            case 'eurniee':
              return 'Arne Vermeulen';
            case 'DriesWets':
                return "Dries Wets";
            case 'BassieWouters':
                return "Sebastiaan Wouters";
            case 'Den_Henry':
                return "Hendrik Van Beersel";
            case 'LarsVer':
                return "Lars Vermeulen";
            case 'Filip_vermeul':
                return "Filip Vermeulen";
            default:
                return nickname;
          } 
    }

}

export default UntappdClient;