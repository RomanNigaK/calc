
const INITIALIZED_SUCCESSFUL = "INITIALIZED_SUCCESSFUL";


let initialStore = {
    posts:[
        {img:"/assetc/cake/1.jpg",post:"sdfsdfdsfsdfs sfsdf sdf sd fsd fsdfsdf",like:10},
        {img:"/assetc/cake/2.jpg",post:"sdfsdfdsfsdfs sfsdf sdf sd fsd fsdfsdf",like:2},
        {img:"/assetc/cake/3.jpg",post:"sdfsdfdsfsdfs sfsdf sdf sd fsd fsdfsdf",like:450},
        {img:"/assetc/cake/4.jpg",post:"sdfsdfdsfsdfs sfsdf sdf sd fsd fsdfsdf",like:2},
        {img:"/assetc/cake/5.jpg",post:"sdfsdfdsfsdfs sfsdf sdf sd fsd fsdfsdf",like:101},
        {img:"/assetc/cake/6.jpg",post:"sdfsdfdsfsdfs sfsdf sdf sd fsd fsdfsdf",like:10001},
        {img:"/assetc/cake/7.jpg",post:"sdfsdfdsfsdfs sfsdf sdf sd fsd fsdfsdf",like:100}
    ]
};

const homeReducer = (state = initialStore, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESSFUL: {
            return {
                ...state,
                initialized: true
            }
        }

        default:
            return state;
    }
};



export default homeReducer;