import { User } from "./types/user"
import { Product } from "./types/Product"

// const user: {firstName: string, lastName: string, age: number} = {
//     firstName: "Anton",
//     lastName: "Ushakov",
//     age: 36
// };

// type User = { // создаем тип данных 
//     firstName: string, 
//     lastName: string, 
//     role: string, 
//     age?: number}; // знак вопроса означает что это не обязательный элемент

// const user:User = {
//     firstName: "Anton",
//     lastName: "Ushakov",
//     role: "admin",
//     age: 36
// };
// console.log(user);


// const phone: Product = {
//     title: "Pixel",
//     price: 800,
//     count: 100,
// }
// console.log(phone);


const products:Product[] = [
    {title: "велосипед", price: 2300, count: 12, discount: 15},
    {title: "ролики", price: 700, count: 5},
    {title: "самокат", price: 850, count: 0, discount: 5},
    {title: "лыжи", price: 1200, count: 0, discount: 10},
    {title: "коньки", price: 550, count: 2}
];

// products.push({title: "Pixel", price: 800, count: 100,})
// products.push({title: "Pixel", price: 800, count: 100,})
// products.push({title: "Pixel", price: 800, count: 100,})
// products.push({title: "Pixel", price: 800, count: 100,})
// products.push({title: "Pixel", price: 800, count: 100,})
// products.push({title: "Pixel", price: 800, count: 100,})

// console.log(products);


// function getProdict(title: string): void{
//     const findProduct = products.find(n => n.title === title);
//     console.log(findProduct);
    
// }

function getProdict(title: string): Product | undefined{ //undefind если не найдет выведет это
    return products.find(n => n.title === title);
    
}
console.log(getProdict("лыжи"));
console.log(getProdict("Байк"));

// function getProdictWithZeroCount(): void{
//     const listProd:Product | undefined = products.find(n => n.count === 0)
//     console.log(listProd);
// }
// getProdictWithZeroCount()

function getProdictWithZeroCount(): Product[]{
   const prdFind:Product[] = products.filter((product: Product):boolean => product.count === 0)
    return prdFind;
    
}
console.log(getProdictWithZeroCount());

type ShortProduct = {title: string, price: number};

function getProductsWithRealPrice():ShortProduct[]{
    const result:ShortProduct[] = products.map((product:Product):ShortProduct => {
        const discount:number = product.discount === undefined ? 0 : product.discount;
        return {
            title: product.title,
            price:  product.price - discount / 100 * product.price
        }
    })
    return result
}