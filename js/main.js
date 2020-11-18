const firebaseConfig = {
    apiKey: "AIzaSyAmh1FyHBhL8VUwf_IAQIp4lifv-pFYHKo",
    authDomain: "picachy-5ff88.firebaseapp.com",
    databaseURL: "https://picachy-5ff88.firebaseio.com",
    projectId: "picachy-5ff88",
    storageBucket: "picachy-5ff88.appspot.com",
    messagingSenderId: "395343116086",
    appId: "1:395343116086:web:6e91a9cdecdffe0ac86597"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

const regExpValidEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const loginElem = document.querySelector('.login'),
    loginForm = document.querySelector('.login-form'),
    emailInput = document.querySelector('.login-email'),
    passwordInput = document.querySelector('.login-password'),
    loginSignUp = document.querySelector('.login-signup'),
    exitElem = document.querySelector('.exit'),
    editElem = document.querySelector('.edit'),
    editContainer = document.querySelector('.edit-container'),
    editUsername = document.querySelector('.edit-username'),
    editPhotoURL = document.querySelector('.edit-photo'),
    userAvatarElem = document.querySelector('.user-avatar'),
    loginForget = document.querySelector('.login-forget');

const userElem = document.querySelector('.user'),
    userNameElem = document.querySelector('.user-name');

const postsWrapper = document.querySelector('.posts'),
    buttonNewPost = document.querySelector('.button-new-post');

const addPostElem = document.querySelector('.add-post');


// const listUsers = [{
//         id: '01',
//         email: 'maks@email.com',
//         pasword: '1234rddeA5',
//         displayName: 'MaksJs',
//         photo: 'https://i.ytimg.com/vi/LS9ZryKseO0/maxresdefault.jpg',
//     },
//     {
//         id: '02',
//         email: 'kate@email.com',
//         pasword: '1234567',
//         displayName: 'Kate ',
//     }
// ];

const setPosts = {
    allPost: [
        // {
        //     postTitle: 'заголовок поста2',
        //     postText: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит! Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит! Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
        //     tags: ['свежее', 'горячее', 'мое', 'случайность'],
        //     author: { displayName: 'maks', photo: 'https://psihter.ru/wp-content/uploads/2017/12/starik-portret-trubka-shlyapa.jpg' },
        //     like: 15,
        //     date: '15.11.2020, 20:54:00',
        // },
        // {
        //     postTitle: 'заголовок поста',
        //     postText: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит! Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит! Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
        //     tags: ['свежее', 'горячее', 'случайность'],
        //     author: { displayName: 'Kate', photo: 'https://fb.ru/misc/i/gallery/39549/2385883.jpg' },
        //     like: 78,
        //     date: '13.10.2020, 20:54:00',
        // },
    ],
    addPost(postTitle, postText, tags, handler) {
        const user = firebase.auth().currentUser;
        this.allPost.unshift({
            id: `postID${+new Date().toString(16)}-${user.uid}`,
            postTitle,
            postText,
            tags: tags.split(',').map(tag => tag.trim()),
            author: {
                displayName: setUsers.user.displayName,
                photo: setUsers.user.photoURL,
            },
            like: 0,
            date: new Date().toLocaleString(),
        });
        firebase.database().ref('post').set(this.allPost)
            .then(() => this.getPosts)
    },
    getPosts(handler) {
        firebase.database().ref('post').on('value', snapshot => {
            this.allPost = snapshot.val() || [];
            handler();
        })
    }

}


const setUsers = {
    user: null,
    initUser(handler) {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user;
                console.log(user)
            } else {
                this.user = null
            }
            if (handler) {
                handler()
            }
        });
    },
    logIn(email, password) {
        if (!regExpValidEmail.test(email)) {
            alert('email не валиден');
            return
        }
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(err => {
                const errCode = err.code;
                const errMessage = err.message;
                if (errCode === 'auth/wrong-password') {
                    alert('неверный пароль')
                } else if (errCode === 'auth/user-not-found') {
                    alert('пользователя с таким именеим не существует, зарегестрируйтесь')
                } else {
                    alert(errMessage)
                }
            });
        // const user = this.getUser(email);
        // if (!user) {
        //     alert('пользователя с таким именеим не существует, зарегестрируйтесь')
        // } else {
        //     if (user.pasword === pasword) {
        //         this.authorizedUser(user);
        //         if (hendler) {
        //             hendler()
        //         }
        //     } else {
        //         alert('проверьте правильность пароля')
        //     }
        // }

    },
    logOut() {
        firebase.auth().signOut();
    },
    signUp(email, password, hendler) {
        if (!regExpValidEmail.test(email)) {
            alert('email не валиден');
            return
        }
        if (!email.trim() || !password.trim()) {
            alert('заполните данные формы');
            return
        }
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                alert('регистрация успешна');
                this.editUser(email.split('@')[0], null, hendler);
                console.log(email.split('@')[0]);
            })
            .catch((err) => {
                const errCode = err.code;
                const errMessage = err.message;
                if (errCode === 'auth/weak-password') {
                    alert('Слабый пароль')
                } else if (errCode === 'auth/email-alredy-in-use') {
                    alert('Этот Email уже используется')
                } else {
                    alert(errMessage)
                }
            });
        // if (!this.getUser(email)) {
        //     listUsers.push({ email, pasword, displayName: email.split('@')[0] });
        //     alert('регистрация успешна')
        // } else {
        //     alert('Пользователь с таким именем уже был зарегистрирован')
        // }
    },
    // getUser(email) {
    //     return listUsers.find(user => user.email === email)
    // },
    // authorizedUser(user) {
    //     this.user = user;
    // },
    editUser(displayName, photoURL, handler) {
        const user = firebase.auth().currentUser;
        if (displayName) {
            if (photoURL) {
                user.updateProfile({
                    displayName,
                    photoURL,
                }).then(handler)
            } else {
                user.updateProfile({
                    displayName,
                }).then(handler)
            }
        }
    },
    sendForget(email) {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => alert('письмо отправленно'))
            .catch((err) => console.log(err))
    }

};

const toogleAuthDom = () => {
    const user = setUsers.user;
    if (user) {
        loginElem.style.display = 'none';
        userElem.style.display = '';
        userNameElem.textContent = user.displayName;
        userAvatarElem.src = user.photoURL || userAvatarElem.src;
        editUsername.value = setUsers.user.displayName;
        buttonNewPost.classList.add('visible');

    } else {
        loginElem.style.display = '';
        userElem.style.display = 'none';
        editUsername.value = '';
        buttonNewPost.classList.remove('visible');
        addPostElem.classList.remove('visible');
        postsWrapper.classList.add('visible');

    }
};
const showAllPosts = () => {
        postsWrapper.innerHTML = '';
        setPosts.allPost.forEach(({ postTitle, postText, tags, author, like, date }) => {
                    postsWrapper.innerHTML +=
                        `
        <section class="post">
        <div class="post-body">
            <h2 class="post-title">${postTitle}</h2>
            <p class="post-text">${postText}
            <div class="tags">
                ${tags.map(tag =>`<a href="#" class="tag">#${tag}</a>`)}  
            </div>
        </div>
        <div class="post-footer">
            <div class="post-buttons">
                <button class="post-button likes">
      <svg width="19" height="20" class="icon icon-like">
        <use xlink:href="img/icons.svg#like"></use>
      </svg>
      <span class="likes-counter">${like}</span>
    </button>
                <button class="post-button comments">
      <svg width="21" height="21" class="icon icon-comment">
        <use xlink:href="img/icons.svg#comment"></use>
      </svg>
      <span class="comments-counter">157</span>
    </button>
                <button class="post-button save">
      <svg width="19" height="19" class="icon icon-save">
        <use xlink:href="img/icons.svg#save"></use>
      </svg>
    </button>
                <button class="post-button share">
      <svg width="17" height="19" class="icon icon-share">
        <use xlink:href="img/icons.svg#share"></use>
      </svg>
    </button>
            </div>
            <div class="post-author">
                <div class="author-about">
                    <a href="#" class="author-username">${author.displayName}</a>
                    <span class="post-time">${date}</span>
                </div>
                <a href="#" class="author-link"><img src="${author.photo || 'img/avatar.jpg'}" alt="avatar" class="author-avatar"></a>
            </div>
        </div>
    </section>
        `
    });
    addPostElem.classList.remove('visible');
    postsWrapper.classList.add('visible');
    addPostElem.reset();
};

const showAddPost = () => {
    addPostElem.classList.add('visible');
    postsWrapper.classList.remove('visible')
}
const init = () => {
    menuToggle.addEventListener('click', function(event) {
        event.preventDefault();
        menu.classList.toggle('visible');
    })

    loginForm.addEventListener('submit', event => {
        event.preventDefault();
        setUsers.logIn(emailInput.value, passwordInput.value, toogleAuthDom);
        loginForm.reset();
    });

    loginSignUp.addEventListener('click', event => {
        event.preventDefault();
        setUsers.signUp(emailInput.value, passwordInput.value, toogleAuthDom);
        loginForm.reset();
    })

    loginForget.addEventListener('click', event => {
        event.preventDefault();
        setUsers.sendForget(emailInput.value);
        emailInput.value = '';
    })

    exitElem.addEventListener('click', event => {
        event.preventDefault();
        setUsers.logOut()
    })

    editElem.addEventListener('click', event => {
        event.preventDefault();
        editContainer.classList.toggle('visible');
    })
    editContainer.addEventListener('submit', event => {
        event.preventDefault();
        setUsers.editUser(editUsername.value, editPhotoURL.value, toogleAuthDom)
    })
    buttonNewPost.addEventListener('click', event => {
        event.preventDefault();
        showAddPost();
    });
    addPostElem.addEventListener('submit', event => {
        event.preventDefault();
        const {title, text, tags} = addPostElem.elements;
        console.log(addPostElem.elements)
        if (title.value.length < 6) {
            return alert('слишком короткий заголовок');
        }
        if (text.value.length < 40) {
            return alert('слишком короткий пост');
        }
        setPosts.addPost(title.value, text.value, tags.value, showAllPosts);
        addPostElem.classList.remove('visible');
        console.log();
    });
    setUsers.initUser(toogleAuthDom);
    setPosts.getPosts(showAllPosts);
    
};

document.addEventListener('DOMContentLoaded', init)