let dialogsData = [
    { id: 0, name: 'Valeriy' },
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Sem' },
    { id: 3, name: 'Vitaly' },
    { id: 4, name: 'Den' },
]

let postData = [
    { id: 0, message: 'Hi! How are you?', likesCount: 9999 },
    { id: 1, message: 'It\'s my second post)', likesCount: 104241 },
]

let postInfo = {
    id: 0,
    name: 'Usman',
    birthDate: '31.05.1095',
    town: 'Moscow',
    education: 'StroiBat',
    address: 'Walk streets'
}
let dialogData = [
    { id: 0, message: 'Hi!!!' },
    { id: 1, message: 'How are you?' },
    { id: 2, message: 'Cray men' },
]

let state = {
    messagesPage: {
        dialogsData,
        dialogData,
    },
    profilePage: {
        postInfo,
        postData,
    },
}

const addMessage = (message) => {
    const newMessage = {
        id: 3,
        message: message,
        likesCount: 0
    }

    state.messagesPage.dialogData.push(newMessage);
}

export { addMessage, state }
// export default state;