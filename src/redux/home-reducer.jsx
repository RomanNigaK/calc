import {postsApi} from "../api/api";
const SETPOSTS = "SETPOSTS";
const CLICKLIKE = "CLICKLIKE";
export const SETCOUNTLIKE = "SETCOUNTLIKE";
const SETPOSTNEW = "SETPOSTNEW";



let initialStore = {
/*    posts:[
        {id:1,img:"/assetc/cake/1.jpg",post:"sdfsdfdsfsdfs sfsdf sdf sd fsd fsdfsdf",like:10},
        {id:2,img:"/assetc/cake/2.jpg",post:"sdfsdfdsfsdfs sfsdf sdf sd fsd fsdfsdf",like:2},
        {id:3,img:"/assetc/cake/3.jpg",post:"sdfsdfdsfsdfs sfsdf sdf sd fsd fsdfsdf",like:450},
        {id:4,img:"/assetc/cake/4.jpg",post:"sdfsdfdsfsdfs sfsdf sdf sd fsd fsdfsdf",like:2},
        {id:5,img:"/assetc/cake/5.jpg",post:"sdfsdfdsfsdfs sfsdf sdf sd fsd fsdfsdf",like:101},
        {id:6,img:"/assetc/cake/6.jpg",post:"sdfsdfdsfsdfs sfsdf sdf sd fsd fsdfsdf",like:10001},
        {id:7,img:"/assetc/cake/7.jpg",post:"sdfsdfdsfsdfs sfsdf sdf sd fsd fsdfsdf",like:100}
        ]*/
        posts:[]
    };

    const homeReducer = (state = initialStore, action) => {

     switch (action.type) {
        case SETPOSTS: {

            return {
                ...state,
                posts: action.posts
            }
        }
        case SETPOSTNEW: {
            console.log(action.post)
            return {
                ...state,
                posts: [action.post,...state.posts ]
            }
        }
        case SETCOUNTLIKE:{

            return{
                ...state,
                posts:state.posts.map(p=>{
                    if(p.id===action.id){

                        return  {...p, countLike: action.count}
                    }
                    return p
                })
            }
        }

        default:
        return state;
    }

};

const setStatePosts=(posts)=>{


    return{
       type: SETPOSTS,
       posts:posts
   }
}

export const setStateNewPost=(post)=>{


    return{
       type: SETPOSTNEW,
       post:post
   }
}







export const getPosts = () => {


    return (dispatch) => {

        return postsApi.getPosts().then(data => {
            console.log(data)
            dispatch(setStatePosts(data));

        });


    }
};




export default homeReducer;

