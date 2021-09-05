import dialogsReducer from "./dialogs-reducer";
import navReducer from "./nav-reducer";
import profileReducer from "./profile-reducer";

let store = {

    _state: {



        profilePage: {
            posts: [

                { id: 1, message: 'Hi, how are you?', like: 12 },
                { id: 2, message: 'It\'s my first post', like: 15 }



            ],

            newPostText: [
                'It-ala'
            ]



        },


        dialogsPage: {
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
                { id: 4, message: 'How is your cat?' }

            ],

            newMessageBody: [
                ""
            ]
        },

        sidebar: {

        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },

    subsctibe(observer) {
        this._callSubscriber = observer;

    },


    dispatch(action) { // {type: ' ADD-POST'}


        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state_dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = navReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }

}

window.store = store;
export default store;

//store -OOP