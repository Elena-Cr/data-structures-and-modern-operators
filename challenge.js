const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    }

    //Challenge 1//
   //1.
   const[players1,players2]=game.players;
   console.log(players1,players2);

   //2.
   const[gk,...fieldPlayers]=players1;
   console.log(gk,fieldPlayers);

   //3.
   const allPlayers=[...players1,...players2];
   console.log(allPlayers);

   //4.
   const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic'];
   console.log(players1Final);

   //5.
   const[team1,draw,team2]=[game.odds.team1,game.odds.x,game.odds.team2];
   console.log(team1,draw,team2);

   //6.
   const printGoals=function(...playerName){
    let goals = 0;
    for(let i = 0; i<playerName.length;i++){
        console.log(playerName[i]);
        goals+=1;
    }
    console.log(`There have been ${goals} goals in this game!`);
   }

   console.log(printGoals(...game.scored));

    //Challenge 2 //
    //1.
    let goal = 0;
    for (player of game.scored ){
        goal++;
        console.log(`Goal ${goal}: ${player}`);
    };

    //2.
    let avgOdd = 0;
    for(const odd of Object.values(game.odds))
        avgOdd+=odd;
    avgOdd/=Object.values(game.odds).length;
    console.log(avgOdd);

    //3. 
    for (const [team,odds] of Object.entries(game.odds)){
        let teamStr = team ==='x'?'draw': `victory ${game[team]}`;
        console.log(`Odd of ${teamStr} ${odds}`);
    }