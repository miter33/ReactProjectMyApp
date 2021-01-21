let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: "12" },
            { id: 1, message: "It`s my first post", likesCount: "11" },
        ],
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Alex" },
            { id: 2, name: "John" },
            { id: 3, name: "Peter" },
            { id: 4, name: "Margarita" },
            { id: 5, name: "Luis" },
            { id: 6, name: "Victoria" },
        ],
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "What`s your name?" },
        ]
    }
}

export default state;