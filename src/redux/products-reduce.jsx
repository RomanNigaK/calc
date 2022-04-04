import {productsAPI} from "../api/api";

const SETMUITEMPRODUCT = "SETMUITEMPRODUCT";
const SETCOLTITEMMYPRODUCT = "SETCOLTITEMMYPRODUCT";
const SETCOUNTITEMMYPRODUCT = "SETCOUNTITEMMYPRODUCT";
const SETWEIGHTCAKE = "SETWEIGHTCAKE";
const STATECALCULATION = "STATECALCULATION";
const REMOVEMUITEMPRODUCT = "REMOVEMUITEMPRODUCT";
const SETNULLFIND = "SETNULLFIND";
const SETSEACRCH = "SETSEACRCH";
const SETSTATEPRODUCTS = "SETSTATEPRODUCTS";
const SHOWHELP = "SHOWHELP";
const ONLOAD = "ONLOAD";
const CLOSEHELP = "CLOSEHELP";

let initialStore = {
    products: [],
    selectedProducts: [],
    weightCake: 0,
    costPrice: 0,
    expenses: 0,
    strSearch: "",
    findItems: [],
    showSearch: false,
    onload: false,
    helpMessage:[
        {name:"search",text:"Вводите искомое слово, при появлении совпадений список отобразиться автоматически"}
    ],
    currentHelp:""

};

const productsReduce = (state = initialStore, action) => {
    console.log(action);
    switch (action.type) {

        case SETMUITEMPRODUCT: {

            return {
                ...state,
                selectedProducts: [...state.selectedProducts,
                    ...state.products.filter((product) => (product.id == action.obj))]
            }
        }
        case SETCOLTITEMMYPRODUCT: {


            return {
                ...state,

                selectedProducts: state.selectedProducts.map((product) => {
                    if (product.id == action.id) {

                        return {...product, colt: action.colt}
                    }
                    return product
                })
            }
        }
        case SETCOUNTITEMMYPRODUCT: {
            return {
                ...state,

                selectedProducts: state.selectedProducts.map((product) => {
                    if (product.id == action.id) {
                        return {...product, count: action.count}
                    }
                    return product
                })
            }
        }
        case SETWEIGHTCAKE: {
            return {
                ...state,
                weightCake: action.weight

            }
        }
        case REMOVEMUITEMPRODUCT: {

            return {

                ...state,
                selectedProducts: state.selectedProducts.filter(f => f.id != action.id)

            }
        }
        case STATECALCULATION: {
            let x;
            return {
                ...state,
                costPrice: state.selectedProducts.map(item => item.colt * item.count).map(i => x += i, x = 0).reverse()[0] / state.weightCake,
                expenses: state.selectedProducts.map(item => item.colt * item.count).map(i => x += i, x = 0).reverse()[0]


            }
        }
        case SETNULLFIND: {
            return {
                ...state,
                strSearch: ""
            }
        }
        case SETSEACRCH: {

            if (action.lenghtStr > 1) {
                return {
                    ...state,
                    strSearch: action.text,
                    showSearch: true,
                    findItems: state.products.filter(item => item.name.toUpperCase().indexOf(action.text.toUpperCase()) !== -1),
                    currentHelp:state.products.filter(item => item.name.toUpperCase().indexOf(action.text.toUpperCase()) !== -1).length>0?"":state.currentHelp
                }
            } else {
                return {

                    ...state,
                    findItems: [],
                    strSearch: action.text

                }

            }
        }
        case SETSTATEPRODUCTS: {

            return {
                ...state,
                products: action.data

            }
        }
        case ONLOAD: {
            return {
                ...state,
                onload: action.onload
            }
        }
        case SHOWHELP: {

            return {
                ...state,
                currentHelp:state.findItems.length===0?state.helpMessage.filter((i)=>(i.name==action.name))[0].text:""
            }
        }
        case CLOSEHELP: {

            return {
                ...state,
                currentHelp:""
            }
        }

        default:
            return state;


    }
};


export const setItemMyProduct = (id) => {
    return {
        type: SETMUITEMPRODUCT,
        obj: id
    }
};
export const removeItemMyProduct = (id) => {
    return {
        type: REMOVEMUITEMPRODUCT,
        id: id
    }
};
export const setColtItemMyProduct = (id, colt) => {
    return {
        type: SETCOLTITEMMYPRODUCT,
        id: id,
        colt: colt
    }
};
export const setCountItemMyProduct = (id, count) => {
    return {
        type: SETCOUNTITEMMYPRODUCT,
        id: id,
        count: count
    }
};
export const setWeightCake = (weight) => {
    return {
        type: SETWEIGHTCAKE,
        weight: weight
    }
};
export const stateCalculation = () => {
    return {
        type: STATECALCULATION

    }
};
export const setNullFind = () => {
    return {
        type: SETNULLFIND
    }
};
export const setSearch = (text, lenghtStr) => {
    return {
        type: SETSEACRCH,
        text: text,
        lenghtStr: lenghtStr
    }
};
export const showHelp = (itemHelp) => {

    return {
        type: SHOWHELP,
        name: itemHelp
    }
};
export const closeHelp = () => {

    return {
        type: CLOSEHELP

    }
};

export const setStateProducts = (data) => {
    return {
        type: SETSTATEPRODUCTS,
        data: data
    }
}
const onLoad = (onload) => {
    return {
        type: ONLOAD,
        onload:onload
    }
}


export const getProducts = () => {
    return (dispatch) => {
        dispatch(onLoad(true));
        productsAPI.setProducts().then(data => {
            dispatch(setStateProducts(data));
            dispatch(onLoad(false))
        });


    }
};

export const newProductAdd=(value)=>{
      return(dispatch)=>{
        productsAPI.newitemProduct(value).then(data=>{

                alert(data);
            })


    }
}

export default productsReduce;