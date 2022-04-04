import React, {useEffect} from "react";
import css from "./products.module.css"

const Products = (props) => {

    useEffect(() => {
        props.getProducts();
    }, []);

    let list = props.products.map((d) => (
        <tr>
            <td>{d.name}</td>
            <td>{d.volume}</td>
            <td>{d.edizm}</td>
            <td>{d.colt}</td>
            <td>{d.count}</td>
            <td>{d.general}</td>
        </tr>
    ))
    return (
        <div>
            <table className={css.table}>
                <tr>
                    <th>Наименование</th>
                    <th colspan="2">Стоимость за ед</th>

                    <th>Цена</th>
                    <th>Количество</th>
                    <th>Основные</th>
                </tr>
                {list}</table>
        </div>
    )
};
export default Products;