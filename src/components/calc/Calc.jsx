import React, {useEffect} from "react";
import css from "./calc.module.css"
import Find from "./Find";
import {productsAPI} from "../../api/api";


const Calc = (props) => {

    //console.log(productsAPI.updateProductItem(100,22));


    useEffect(() => {

        props.getProducts();

    }, []);


    console.log(props)
    let calculation = () => {
        props.stateCalculation();
    };

    let addInMyListProducts = (e) => {
        let itemId = e.target.id;
        props.setItemMyProduct(itemId);

    };

    let removeInMyListProducts = (e) => {
        let itemId = e.target.id;
        props.removeItemMyProduct(itemId);

    };
    let enterDataColt = (e) => {
        let itemId = e.target.id;
        let colt = e.target.value;
        let floatValues = "^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$";
        if (colt.length === 0) {
            props.setColtItemMyProduct(itemId, "")
        } else {
            if (colt.match(floatValues) && !isNaN(colt)) {
                props.setColtItemMyProduct(itemId, colt)
            }
        }


    };
    let enterDataCount = (e) => {
        let itemId = e.target.id;
        let count = e.target.value;
        let floatValues = "^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$";
        if (count.length === 0) {
            props.setCountItemMyProduct(itemId, "")
        } else {
            if (count.match(floatValues) && !isNaN(count)) {
                props.setCountItemMyProduct(itemId, count)
            }
        }
    };


    let chekProductItem = (obj, arealSearch) => {

        if (arealSearch == "general") {
            if (obj.general) {
                if (props.products.selectedProducts.find(item => item.id == obj.id) && true) {
                    return <div className={css.rowitemproduct}>
                        <span>
                            <span onDoubleClick={removeInMyListProducts} id={obj.id}>{obj.name} </span>
                            <span>
                                <img src="assetc/g.png" alt="sdfd"/>
                                 <span className={css.edizmproduct}>({obj.volume}{obj.edizm})</span>
                            </span>
                        </span>
                    </div>

                } else {
                    return <div className={css.rowitemproduct}>
                        <span onDoubleClick={addInMyListProducts} id={obj.id}>{obj.name} </span>
                        <span className={css.edizmproduct}>({obj.volume}{obj.edizm})</span>
                    </div>
                }
            }
        }

        if (arealSearch == "all") {
            if (obj) {
                if (props.products.selectedProducts.find(item => item.id == obj.id) && true) {
                    return <div className={css.rowitemproduct}>
                        <span>
                            <span onDoubleClick={removeInMyListProducts} id={obj.id}>{obj.name} </span>
                            <span>
                                <img src="assetc/g.png" alt="sdfd"/>
                                 <span className={css.edizmproduct}>({obj.volume}{obj.edizm})</span>
                            </span>
                        </span>
                    </div>

                } else {
                    return <div className={css.rowitemproduct}>
                        <span onDoubleClick={addInMyListProducts} id={obj.id}>{obj.name} </span>
                        <span className={css.edizmproduct}>({obj.volume}{obj.edizm})</span>
                    </div>
                }
            }
        }


    };
    let enterWeightCake = (e) => {
        let weight = e.target.value;
        props.setWeightCake(weight);
    };

    let list = props.products.products.map(
        (item) => (<div>
            {chekProductItem(item, "general")}
        </div>));

    let myList = <div className={css.emptylist}>Вы еще ничего не выбрали</div>;
    if (props.products.selectedProducts.length > 0) {

        myList = props.products.selectedProducts.map((item) => (
            <tr>
                <td><span>{item.name}</span></td>

                <td>
                    <input id={item.id} onChange={enterDataColt} className={css.inputmylistproducts}
                           placeholder="0.00" value={item.colt} autocomplete="off"/>р./{item.edizm}</td>
                <td><input id={item.id} onChange={enterDataCount} className={css.inputmylistproducts} type="text"
                           placeholder="0.00" value={item.count} autocomplete="off"/>{item.edizm}</td>
            </tr>
        ))
    }

    return (
        <div className={css.content}>
            <div className={css.listproducts} style={{backgroundImage: "url(/assetc/strelkafon.png)"}}>
                <Find search={props.products.findItems}
                      addInMyListProducts={addInMyListProducts}
                      value={props.products.strSearch}
                      setSearch={props.setSearch}
                      setNullFind={props.setNullFind}
                      chekProductItem={chekProductItem}
                      showSearch={props.products.showSearch}
                      products={props.products}/>

                <h2>Основные продукты</h2>

                {props.products.onload ? <img src="/assetc/preloader.png" alt=""/>:null}
                {list}
            </div>
            <div className={css.listselectedproducts} style={{backgroundImage: "url(/assetc/strelkafon.png)"}}>
                <h2>Вы выбрали</h2>
                <div>
                    <table className={css.table}>
                        <thead>
                        <tr>
                            <th>Продукт</th>
                            <th>Цена</th>
                            <th>Количество</th>
                        </tr>
                        </thead>
                        <tbody>
                        {myList}
                        <tr>
                            <th colSpan="3">ИТОГО ЗАТРАТЫ: 0 руб.</th>


                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={css.weightcake}>

                    <h2>Введите вес торта</h2>
                    <input type="text" onChange={enterWeightCake} className={css.inputweightcake}
                           placeholder="0.00 (кг)"/>
                </div>
            </div>
            <div className={css.result}>
                <div className={css.divheaderresult}><h2>Результат</h2></div>


                {/* <img src="assetc/preloader.gif" alt=""/>*/}
                <div className={css.enddivresult}>
                    {props.products.selectedProducts.length > 0 ?
                        props.products.selectedProducts.filter(item => (item.colt == "" || item.count == "")) == 0 ?
                            props.products.weightCake > 0 ?
                                props.products.costPrice > 0 ? <div>
                                        <span>Себестоимость за 1 кг - </span>
                                        <br/>
                                        {Math.ceil(props.products.costPrice)} рублей
                                        <br/>
                                        <span>Затраты - </span>
                                        <br/>
                                        {Math.ceil(props.products.expenses)} рублей
                                        <br/>
                                        <div onClick={calculation} className={css.divresult}>ПЕРЕСЧИТАТЬ</div>
                                    </div> :
                                    <div onClick={calculation} className={css.divresult}>РАСЧИТАТЬ</div>
                                : "Укажите вес торта"
                            : "Заполнены не все поля цена/количество"
                        : "Выберете продукты для расчета"}
                    <br/>


                </div>


            </div>
        </div>
    )
};
export default Calc;