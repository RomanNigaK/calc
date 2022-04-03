import * as axios from "axios";

const instance = axios.create({
    baseURL:"http://fortestreactnode-js.ru/"
});

export const productsAPI={
    setProducts(){
        return instance.get("products").then(
            response => response.data
        )},
    setProductItem(item){
        return instance.get(`products/${item}`).then(
            response => response.data
        )}
}

