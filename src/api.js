import http from 'axios';

export async function getMatches(fifaCode) {
  const matches = await http.get(`http://worldcup.sfg.io/matches/country?fifa_code=${fifaCode}`);
  return matches.data;
}