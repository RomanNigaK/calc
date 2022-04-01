const SETMUITEMPRODUCT = "SETMUITEMPRODUCT";
const SETCOLTITEMMYPRODUCT = "SETCOLTITEMMYPRODUCT";
const SETCOUNTITEMMYPRODUCT = "SETCOUNTITEMMYPRODUCT";
const SETWEIGHTCAKE = "SETWEIGHTCAKE";
const STATECALCULATION = "STATECALCULATION";
const REMOVEMUITEMPRODUCT = "REMOVEMUITEMPRODUCT";
const SETNULLFIND = "SETNULLFIND";
const SETSEACRCH = "SETSEACRCH";

let initialStore = {
    products: [
        {id: 1, name: "Сахар", volume: 1, edizm: "кг", colt: "", count: "", general:true},
        {id: 2, name: "Мука", volume: 1, edizm: "кг", colt: "", count: "", general:true},
        {id: 3, name: "Яица", volume: 10, edizm: "шт", colt: "", count: "", general:true},
        {id: 4, name: "Сливочное масло", volume: 1, edizm: "кг", colt: "", count: "", general:true},
        {id: 5, name: "Сыр", volume: 1, edizm: "кг", colt: "", count: "", general:true},
        {id: 6, name: "Ванилин", volume: 1, edizm: "уп", colt: "", count: "", general:true},
        {id: 7, name: "Какао", volume: 1, edizm: "кг", colt: "", count: "", general:true},
        {id: 8, name: "Растительное масло", volume: 1, edizm: "л", colt: "", count: "", general:false},
        {id: 9, name: "Рахрыхлитель", volume: 1, edizm: "кг", colt: "", count: "", general:false},
        {id: 10, name: "Сода", volume: 1, edizm: "кг", colt: "", count: "", general:false},
        {id: 11, name: "Корица", volume: 1, edizm: "кг", colt: "", count: "", general:false},
        {id: 12, name: "Мускатный орех", volume: 1, edizm: "кг", colt: "", count: "", general:false},
        {id: 13, name: "Апельсины", volume: 1, edizm: "кг", colt: "", count: "", general:false},
        {id: 14, name: "Морковь", volume: 1, edizm: "кг", colt: "", count: "", general:false},
        {id: 15, name: "Грецкий орех", volume: 1, edizm: "кг", colt: "", count: "", general:false}
    ],
    selectedProducts: [],
    weightCake: 0,
    costPrice: 0,
    expenses: 0,
    strSearch: "",
    findItems:[],
    showSearch:false


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
                    showSearch:true,
                    findItems: state.products.filter(item=>item.name.toUpperCase().indexOf(action.text.toUpperCase())!==-1)
                 }
            } else {
                return{

                    ...state,
                    findItems:[],
                    strSearch: action.text

                }

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


export default productsReduce;