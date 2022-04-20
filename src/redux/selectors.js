export let  getFormLogin=(state)=>{
    return (state.auth.isForm)
};
export let  getIsRegistration=(state)=>{
    return (state.auth.isRegistration)
};
export let  getSex=(state)=>{
    return (state.auth.sex)
};
export let  getLoginError=(state)=>{
    return (state.auth.loginError)
};
export let  getIsAuth=(state)=>{
    return (state.auth.isAuth)
};
export let  getUserData=(state)=>{
    return (state.auth.user)
};

export let getPostsState=(state)=>{
    return state.home.posts;
}

export let getMyLikePosts=(state)=>{
    return JSON.parse(state.auth.user[0].mylike);
}
