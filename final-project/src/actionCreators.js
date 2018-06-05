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
      return dispatch(loadRank(players))
  }
}


const loadRealmStatus = () => {
  return async dispatch => {
      let res = await fetch('https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=g672kvhg92gqaz7bukvfrxu5yvxuvg2g')
      let realmStatus = await res.json();
      return dispatch({
        type: "LOAD_REALM_STATUS",
        payload: realmStatus
      })
  }
}


const storeInputValue = (valueRealm, valueName) => {
  return async dispatch => {
      let res = await fetch(`https://us.api.battle.net/wow/character/${valueRealm}/${valueName}?fields=items%2Cstats&locale=en_US&apikey=g672kvhg92gqaz7bukvfrxu5yvxuvg2g`)
      let playerProfile = await res.json();
      return dispatch({
        type: 'STORE_INPUT_VALUE',
        payload: { playerProfile },
      });
  }
}

const loadRank = (players) => {
  return {
    type: 'LOAD_RANK',
    payload: { players },
  }
}

const storePetList = () => {
  return async dispatch => {
      let res = await fetch(`https://us.api.battle.net/wow/pet/?locale=en_US&apikey=g672kvhg92gqaz7bukvfrxu5yvxuvg2g`)
      let petList = await res.json();
      return dispatch({
        type: 'STORE_PET_LIST',
        payload: petList
      });
  }

}




export { loadPvpRank,  storeInputValue, loadRealmStatus, storePetList };
