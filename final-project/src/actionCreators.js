const loadPvpRank = () => {
  return async dispatch => {
      let res = await fetch('https://us.api.battle.net/wow/leaderboard/2v2?locale=en_US&apikey=g672kvhg92gqaz7bukvfrxu5yvxuvg2g')
      let rank = await res.json();
      let players = rank.rows.filter(player => player.ranking <= 20);
      for (let i = 0; i < players.length; i++) {
        if (players[i].factionId === 0) {
          players[i].factionId = 'Alliance';
        } else {
          players[i].factionId = 'Horde';
        }
      }
      return dispatch({
        type: "LOAD_RANK",
        players
      })
  }
}

const loadRealmStatus = () => {
  return async dispatch => {
      let res = await fetch('https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=g672kvhg92gqaz7bukvfrxu5yvxuvg2g')
      let realmStatus = await res.json();
      return dispatch({
        type: "LOAD_REALM_STATUS",
        realmStatus
      })
  }
}

const handleInput = (value) => {
  // let value = "hola";
  return {
    type: 'HANDLE_INPUT_CHANGE',
    payload: { value },
  }
}

export { loadPvpRank, loadRealmStatus, handleInput };
