const footballersData = [
  // Players from Premier League
  { name: 'Kevin De Bruyne', nationality: 'Belgium', position: 'Midfielder', league: 'Premier League', club: 'Manchester City' },
  { name: 'Harry Kane', nationality: 'England', position: 'Forward', league: 'Premier League', club: 'Tottenham Hotspur' },
  { name: 'Mohamed Salah', nationality: 'Egypt', position: 'Forward', league: 'Premier League', club: 'Liverpool' },
  { name: 'Bruno Fernandes', nationality: 'Portugal', position: 'Midfielder', league: 'Premier League', club: 'Manchester United' },
  { name: 'Jack Grealish', nationality: 'England', position: 'Midfielder', league: 'Premier League', club: 'Manchester City' },
  { name: 'Sadio Mané', nationality: 'Senegal', position: 'Forward', league: 'Premier League', club: 'Liverpool' },
  { name: 'Virgil van Dijk', nationality: 'Netherlands', position: 'Defender', league: 'Premier League', club: 'Liverpool' },
  { name: 'Son Heung-min', nationality: 'South Korea', position: 'Forward', league: 'Premier League', club: 'Tottenham Hotspur' },
  { name: 'Jamie Vardy', nationality: 'England', position: 'Forward', league: 'Premier League', club: 'Leicester City' },
  { name: 'Ederson', nationality: 'Brazil', position: 'Goalkeeper', league: 'Premier League', club: 'Manchester City' },
  { name: 'Ben Chilwell', nationality: 'England', position: 'Defender', league: 'Premier League', club: 'Chelsea' },
  { name: 'Wilfried Zaha', nationality: 'Ivory Coast', position: 'Forward', league: 'Premier League', club: 'Crystal Palace' },
  { name: 'Riyad Mahrez', nationality: 'Algeria', position: 'Forward', league: 'Premier League', club: 'Manchester City' },
  { name: 'Thiago Silva', nationality: 'Brazil', position: 'Defender', league: 'Premier League', club: 'Chelsea' },
  { name: 'James Maddison', nationality: 'England', position: 'Midfielder', league: 'Premier League', club: 'Leicester City' },
  { name: 'Rúben Dias', nationality: 'Portugal', position: 'Defender', league: 'Premier League', club: 'Manchester City' },
  { name: 'Bukayo Saka', nationality: 'England', position: 'Midfielder', league: 'Premier League', club: 'Arsenal' },
  { name: 'Allan Saint-Maximin', nationality: 'France', position: 'Forward', league: 'Premier League', club: 'Newcastle United' },
  { name: 'Trent Alexander-Arnold', nationality: 'England', position: 'Defender', league: 'Premier League', club: 'Liverpool' },
  { name: 'Kalvin Phillips', nationality: 'England', position: 'Midfielder', league: 'Premier League', club: 'Leeds United' },

  // Players from English Championship
  
  { name: 'Max Aarons', team: 'Norwich City', birthDate: '04/01/2000', height: '178 cm', position: 'Defender', league: 'Championship' },
  { name: 'Ché Adams', team: 'Southampton FC', birthDate: '13/07/1996', height: '179 cm', position: 'Forward', league: 'Championship' },
  { name: 'Ebou Adams', team: 'Cardiff City', birthDate: '15/01/1996', height: '178 cm', position: 'Midfielder', league: 'Championship' },
  { name: 'Tyler Adams', team: 'Leeds United', birthDate: '14/02/1999', height: '175 cm', position: 'Midfielder', league: 'Championship' },
  { name: 'Albert Adomah', team: 'Queens Park Rangers', birthDate: '13/12/1987', height: '185 cm', position: 'Midfielder', league: 'Championship' },
  { name: 'Edwin Agbaje', team: 'Ipswich Town', birthDate: '25/01/2004', height: '???', position: 'Forward', league: 'Championship' },
  { name: 'Tyrell Agyemang', team: 'Middlesbrough FC', birthDate: '13/11/2002', height: '183 cm', position: 'Midfielder', league: 'Championship' },
  { name: 'Semi Ajayi', team: 'West Bromwich Albion', birthDate: '09/11/1993', height: '193 cm', position: 'Defender', league: 'Championship' },
  { name: 'Marc Albrighton', team: 'Leicester City', birthDate: '18/11/1989', height: '175 cm', position: 'Midfielder', league: 'Championship' },
  { name: 'Carlos Alcaraz', team: 'Southampton FC', birthDate: '30/11/2002', height: '183 cm', position: 'Midfielder', league: 'Championship' },
  { name: 'Aji Alese', team: 'Sunderland AFC', birthDate: '17/01/2001', height: '192 cm', position: 'Defender', league: 'Championship' },
  { name: 'Charlie Allen', team: 'Leeds United', birthDate: '22/11/2003', height: '185 cm', position: 'Midfielder', league: 'Championship' },
  { name: 'Jamie Allen', team: 'Coventry City', birthDate: '29/01/1995', height: '180 cm', position: 'Midfielder', league: 'Championship' },
  { name: 'Joe Allen', team: 'Swansea City', birthDate: '14/03/1990', height: '170 cm', position: 'Midfielder', league: 'Championship' },
  { name: 'Ryan Allsop', team: 'Cardiff City', birthDate: '17/06/1992', height: '189 cm', position: 'GK', league: 'Championship' },
  { name: 'Jak Alnwick', team: 'Cardiff City', birthDate: '17/06/1993', height: '187 cm', position: 'GK', league: 'Championship' },
  { name: 'Sone Aluko', team: 'Ipswich Town', birthDate: '19/02/1989', height: '173 cm', position: 'Forward', league: 'Championship' },
  { name: 'Joe Anderson', team: 'Sunderland AFC', birthDate: '06/02/2001', height: '186 cm', position: 'Defender', league: 'Championship' },
  { name: 'Joe Aribo', team: 'Southampton FC', birthDate: '21/07/1996', height: '183 cm', position: 'Midfielder', league: 'Championship' },
  { name: 'Adam Armstrong', team: 'Southampton FC', birthDate: '10/02/1997', height: '174 cm', position: 'Forward', league: 'Championship' },
  { name: 'Sinclair Armstrong', team: 'Queens Park Rangers', birthDate: '22/06/2003', height: '182 cm', position: 'Forward', league: 'Championship' },
  { name: 'Stuart Armstrong', team: 'Southampton FC', birthDate: '30/03/1992', height: '183 cm', position: 'Midfielder', league: 'Championship' },
  { name: 'Yaser Asprilla', team: 'Watford FC', birthDate: '19/11/2003', height: '185 cm', position: 'Midfielder', league: 'Championship' },
  { name: 'Rob Atkinson', team: 'Bristol City', birthDate: '13/07/1998', height: '193 cm', position: 'Defender', league: 'Championship' },
  { name: 'Loick Ayina', team: 'Huddersfield Town', birthDate: '20/04/2003', height: '183 cm', position: 'Defender', league: 'Championship' },
  { name: 'Luke Ayling', team: 'Leeds United', birthDate: '25/08/1991', height: '183 cm', position: 'Defender', league: 'Championship' }
    // Add more Championship players...
  ];
  
  export default footballersData;