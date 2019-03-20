import * as superagent from 'superagent';

const ROOT_API = 'https://aaaa-76569.firebaseio.com/';

const Player = {
    getAll: () => superagent.get(`${ROOT_API}/players.json`)
        .then((res) => res.body),
    add: (players, index, cb) => {
        superagent.put(`${ROOT_API}/players/${index}.json`)
            .send(players)
            .end(cb)
    },
    delete: (players, cb = () => {}) => {
        superagent.put(`${ROOT_API}/players.json`)
            .send(players)
            .end(cb)

        // superagent.del(`${ROOT_API}/players/${index}.json`)
        //     .end(() => {})
    }

};

export const agent = {Player};