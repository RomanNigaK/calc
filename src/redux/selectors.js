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

export let getPosts=(state)=>{
    return state.home.posts;
}