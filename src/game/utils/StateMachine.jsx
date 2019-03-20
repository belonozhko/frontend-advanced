const StateMachine = require('javascript-state-machine');

/** Simple init of state machine singleton. */
export const stateMachine = new StateMachine(
    {
        init: 'begin',
        transitions: [
            { name: 'start', from: 'begin',  to: 'progress' },
            { name: 'playWin',  from: 'progress', to: 'win'  },
            { name: 'playLose',  from: 'progress', to: 'lose'  },
            { name: 'resetWin', from: 'win', to: 'begin'    },
            { name: 'resetLose', from: 'lose', to: 'begin'    }
        ]
    }
);

