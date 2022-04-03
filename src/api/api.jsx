import * as axios from "axios";

const instance = axios.create({
    //baseURL:"http://localhost:7000/"
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
        )},
    updateProductItem(colt,id){
        return instance.post(`products`,{colt:colt,id:id}).then(
                response =>response.data.affectedRows
        )}
}

