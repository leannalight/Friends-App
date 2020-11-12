import './styles/style.css';

import {
    FriendList
} from './scripts/Friend.js';

const buttonAuthorisation = document.querySelector('.button_type_authorisation');
const buttonExit = document.querySelector('.button_type_exit');
const friendContainer = document.querySelector('.friendlist');
const vkRequest = 'https://oauth.vk.com/authorize?client_id=7653662&display=popup&redirect_uri=https://leannalight.github.io/friends-app/&scope=friends,status&response_type=token&v=5.52&state=123456';
let token;
let userID;

const friendList = new FriendList({
    container: friendContainer,
    blockName: 'friendlist'
});

function checkUrl() {
    let regexpToken = /(#access_token=)([a-z0-9]+)\&/g;

    if (window.location.hash.match(regexpToken)) {
        getToken();
       
        sendRequest(`https://api.vk.com/method/users.get?fields=photo_200&user_id=${userID}&access_token=${token}&v=5.52`, function(data) {
            let container = document.querySelector('.profile__name');
            let userPhoto = document.querySelector('.profile__image');
            let buttonElem = document.querySelector('.button_type_exit');
            container.textContent = `${data.response[0].first_name} ${data.response[0].last_name}`;
            userPhoto.style.backgroundImage = `url('${data.response[0].photo_200}')`;
            buttonElem.classList.remove('button_hidden');  
        });
        
     showFriends(token);
    }
}


checkUrl();
vkLoggedIn();

function sendRequest(url, foo) {
    return $.ajax({
        url: url,
        method: 'GET',
        dataType: 'JSONP',
        success: foo
        
    });
 
}

function getToken() {
    let regexpToken = /(#access_token=)([a-z0-9]+)\&/g;
    let regexpUserID = /(user_id=)([0-9]+)\&/g;
    let hashToken = window.location.hash.match(regexpToken);
    let hashUserID = window.location.hash.match(regexpUserID);
    token = hashToken.join('').slice(14, -1);
    userID = hashUserID.join('').slice(8, -1);

    const { token } = res.json();
    console.log('got token', token);
    localStorage.setItem('token', token);
    return token, userID;
 
}

function vkLoggedIn() {
    VK.Auth.getLoginStatus(function(response) {
        if (response.status == 'connected') {
            VK.Auth.login(function() {
                window.location = vkRequest;
                let buttonElem = document.querySelector('.button_type_authorisation');
                buttonElem.classList.add('button_hidden');  
            });

        }
    });
}

function vkLogout() {
    VK.Auth.getLoginStatus(function(response) {
        if (response.status == 'connected') {
            VK.Auth.logout(function() {
                window.location.replace('https://leannalight.github.io/friends-app/');
            });
        }
    });
}

function showFriends(token) {
    sendRequest(`https://api.vk.com/method/friends.search?count=5&fields=photo_100&access_token=${token}&v=5.52`, function(data) {
        console.log(data);
        friendList.render(data.response.items);
        let container = document.querySelector('.friends__title');
            container.textContent = 'Мои друзья';
    });
};

buttonAuthorisation.addEventListener('click', (event) => {
    event.preventDefault();
    window.location = vkRequest;
});

buttonExit.addEventListener('click', () => {
    vkLogout();
});
