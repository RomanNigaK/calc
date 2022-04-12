 export const reqfild=value=>{
 console.log(value);
    if(!value) return "Поле обязательно";
    return undefined;

};

export const  maxlenghtall=(count)=>(value)=>{

   if(value && value.length>count) return `Нельзя вводить больше ${count} символов`;
    return undefined
 }

 export const float=value=>{
     let floatValues = "^[+]?([0-9]+([.][0-9]*)?|[.][0-9]+)$";
   if (value.match(floatValues) && !isNaN(value)) return undefined;
   return "Поле должно быть положительныи числом";
 }
 export const trueFalse=value=>{
     let floatValues = "[0-1]";
     if (value.match(floatValues) && !isNaN(value)) return undefined;
     return "Значение должно быть  1 или 0";
 }

 export const email = value =>
     value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
         ? 'Invalid email address'
         : undefined

