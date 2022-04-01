import React from "react";
import css from "./calc.module.css"


const Calc = (props) => {



    let calculation = () => {

        props.stateCalculation();
    };

    console.log(props.products);
    let addInMyListProducts = (e) => {
        let itemId = e.target.id;
        props.setItemMyProduct(itemId);

    };
    let enterDataColt = (e) => {
        let colt = e.target.value;
        let itemId = e.target.id;
        colt.length===0?props.setColtItemMyProduct(itemId, null):props.setColtItemMyProduct(itemId, colt)
        }

    let enterDataCount = (e) => {

        let itemId = e.target.id;
        let count = e.target.value;
        count.length===0?props.setCountItemMyProduct(itemId,null):props.setCountItemMyProduct(itemId,count)
        //props.setCountItemMyProduct(itemId, count);

    }
    let chekProductItem = (obj) => {
        console.log("0")
        if (props.products.selectedProducts.find(item => item.id == obj.id) && true) {
            return <div className={css.rowitemproduct}>
                        <span>
                            <span id={obj.id}>{obj.name} </span>
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
    };
    let enterWeightCake = (e) => {
        let weight = e.target.value;
        props.setWeightCake(weight);
    }
    let list = props.products.products.map(
        (item) => (<div>
            {chekProductItem(item)}
        </div>));

    let myList = <div className={css.emptylist}>Вы еще ничего не выбрали</div>;
    if (props.products.selectedProducts.length > 0) {
        myList = props.products.selectedProducts.map((item) => (
            <tr>
                <td><span>{item.name}</span></td>
                <td><input id={item.id} onChange={enterDataColt} className={css.inputmylistproducts} type="text"
                           placeholder="0.00" value={props.products.selectedProducts[item.id-1].colt}/>р./{item.edizm}</td>
                <td><input id={item.id} onChange={enterDataCount} className={css.inputmylistproducts} type="text"
                           placeholder="0.00" value={props.products.selectedProducts[item.id-1].count}/>{item.edizm}</td>
            </tr>
        ))
    }

    return (
        <div className={css.content}>
            <div className={css.listproducts} style={{backgroundImage: "url(/assetc/strelkafon.png)"}}>
                <h2>Список продуктов</h2>
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
                            <th>Потрачено</th>
                        </tr>
                        </thead>
                        <tbody>
                        {myList}
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
                        props.products.selectedProducts.filter(item => (item.colt == null || item.count == null)) == 0 ?
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