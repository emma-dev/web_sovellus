const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [

        { id: 1, name: 'Jenifer' },
        { id: 2, name: 'James' },
        { id: 3, name: 'Leo' },
        { id: 4, name: 'Amili' }

    ],
    messages: [

        { id: 1, message: 'Hi' },
        { id: 2, message: 'Could you recommend a good doctor?' },
        { id: 3, message: 'How are you?' },
        { id: 4, message: 'Hello!' }

    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: body } ]
            
            };
        default:
            return state;
    }


}


export const sendMessageCreator = (newMessageBody) => ({ type: 'SEND-MESSAGE', newMessageBody })

export default dialogsReducer;