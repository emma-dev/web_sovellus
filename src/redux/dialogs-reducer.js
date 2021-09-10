const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [

        { id: 1, name: 'Jenifer' },
        { id: 2, name: 'James' },
        { id: 3, name: 'Leo' },
        { id: 4, name: 'Amili' }

    ],
    messages: [

        { id: 2, message: 'Hi, Jenifer!' },
        { id: 2, message: 'How are you?' },
        { id: 2, message: 'Would you like to meet today?' }

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