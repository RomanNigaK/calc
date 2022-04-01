const SETMUITEMPRODUCT = "SETMUITEMPRODUCT";
const SETCOLTITEMMYPRODUCT = "SETCOLTITEMMYPRODUCT";
const SETCOUNTITEMMYPRODUCT = "SETCOUNTITEMMYPRODUCT";
const SETWEIGHTCAKE = "SETWEIGHTCAKE";
const STATECALCULATION = "STATECALCULATION";

let initialStore = {
    products: [
        {id: 1, name: "Сахар", volume: 1, edizm: "кг", colt: 111, count: 222},
        {id: 2, name: "Мука", volume: 1, edizm: "кг", colt: null, count: null},
        {id: 3, name: "Яица", volume: 10, edizm: "шт", colt: null, count: null},
        {id: 4, name: "Сливочное масло", volume: 1, edizm: "кг", colt: null, count: null},
        {id: 5, name: "Сыр", volume: 1, edizm: "кг", colt: null, count: null},
        {id: 6, name: "Ванилин", volume: 1, edizm: "уп", colt: null, count: null},
        {id: 7, name: "Какао", volume: 1, edizm: "кг", colt: null, count: null},
        {id: 8, name: "Растительное масло", volume: 1, edizm: "л", colt: null, count: null},
        {id: 9, name: "Рахрыхлитель", volume: 1, edizm: "кг", colt: null, count: null},
        {id: 10, name: "Сода", volume: 1, edizm: "кг", colt: null, count: null},
        {id: 11, name: "Корица", volume: 1, edizm: "кг", colt: null, count: null},
        {id: 12, name: "Мускатный орех", volume: 1, edizm: "кг", colt: null, count: null},
        {id: 13, name: "Апельсины", volume: 1, edizm: "кг", colt: null, count: null},
        {id: 14, name: "Морковь", volume: 1, edizm: "кг", colt: null, count: null},
        {id: 15, name: "Грецкий орех", volume: 1, edizm: "кг", colt: null, count: null}
    ],
    selectedProducts: [],
    weightCake: 0,
    costPrice:0,
    expenses:0,
    validSymbols:[".","0","1","2","3","4","5","6","7","8","9"]





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
        case SETWEIGHTCAKE:{
            return {
                ...state,
                weightCake:action.weight

            }
        }
        case STATECALCULATION:{
            let x;
            return {
                ...state,
                costPrice: state.selectedProducts.map(item=>item.colt*item.count).map(i=>x+=i, x=0).reverse()[0]/state.weightCake,
                expenses: state.selectedProducts.map(item=>item.colt*item.count).map(i=>x+=i, x=0).reverse()[0]


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



export default productsReduce;