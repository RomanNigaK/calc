### Products

#### get
-   users - все данные
        http://fortestreactnode-js.ru/products
-   users/:id - конкретный продукт
http://fortestreactnode-js.ru/products/2

Получаемые значения:

- id - уникальный номер еденици товара
- name - наименованеи товара
- volume - единица расчета
- edizm - еденица измерения
- colt - цена за еденицу volume
- count - количество используемого продукта
- general - (1-находиться в основном списке/0-не находиться)
 
 #### post:  http://fortestreactnode-js.ru/products 
 ##### Request
 id - номер элемента 
 colt - новая стоимость
 
 
 ##### Response
 updateRows: количество измененных строк
 update: 1/0 (успешно/нет)
