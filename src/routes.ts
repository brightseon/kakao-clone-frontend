const HOME = '/';

// Logged Out Router
const JOIN ='/join';


// Logged In Router
const CHATS = '/chats';
const CHAT = '/chat/:id';
const MORE = '/more';

export const LOGGED_OUT_ROUTER = {
    home : HOME,
    join : JOIN
};

export const LOGGED_IN_ROUTER = {
    home : HOME,
    chats : CHATS,
    chat : CHAT,
    more : MORE
};