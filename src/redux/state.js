import { rendererEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: "12" },
            { id: 2, message: "It`s my first post", likesCount: "11" },
        ],
        newPostText: 'IT'
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

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 10
    }
    state.profilePage.posts.push(newPost);
    rendererEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rendererEntireTree(state);
}

export default state;