const HOME = '/';

// Logged Out Router
const JOIN ='/join';


// Logged In Router
const CHAT_LIST = '/chatList';
const CHAT = '/chat/:id';
const MORE = '/more';

export const LOGGED_OUT_ROUTER = {
    home : HOME,
    join : JOIN
};

export const LOGGED_IN_ROUTER = {
    home : HOME,
    chatList : CHAT_LIST,
    chat : CHAT,
    more : MORE
};