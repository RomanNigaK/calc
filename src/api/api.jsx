import * as axios from "axios";

const instance = axios.create({
   //baseURL: "http://localhost:3000/",
    baseURL:"https://fortestreactnode-js.ru/",
    withCredentials: true,
    credentials: 'include'

});


export const productsAPI = {
    setProducts() {
        return instance.get("products").then(
            response => response.data
        )
    },
    setProductItem(item) {
        return instance.get(`products/${item}`).then(
            response => response
        )
    },
    updateProductItem(user,obj) {
        return instance.put(`products`,{user:user,myPrice:JSON.stringify(obj)}).then(
            response => {

                if (response.data.update) {
                    console.log("Запись обновлена");
                } else {
                    console.warn("Запись не обновлена")
                }
            }
        )
    },
 /*    updateProductItem(colt, id) {
        return instance.put(`products`, {price: colt, id: id}).then(
            response => {

                if (response.data.update) {
                    console.log("Запись обновлена");
                } else {
                    console.warn("Запись не обновлена")
                }
            }
        )
    },
 */   newitemProduct(values) {

        return instance.post(`products/newproduct`, values).then(
            response => {
                console.log(response)

            }
        )
    }
};
export const authAPI = {
    isAuthUser() {
        return instance.get("users/auth/me").then(
            response => response.data,
        )
    },
    registration(values) {
        return instance.post(`users/registration`, values).then(
            response => response.data
        )
    },
    login(values){
        return instance.post(`users/login`,values).then(
            response=>response.data
        )
    },
    exitUser(){
        return instance.get("users/exit").then(
            response => response,
        )
    }
};

