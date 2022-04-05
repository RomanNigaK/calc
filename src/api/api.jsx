import * as axios from "axios";

const instance = axios.create({
    //baseURL: "http://localhost:7000/"
    baseURL:"http://fortestreactnode-js.ru/"

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
    updateProductItem(colt, id) {
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
    newitemProduct(values) {

        return instance.post(`products/newproduct`, values).then(
            response => {
                console.log(response)

            }
        )
    }
}

