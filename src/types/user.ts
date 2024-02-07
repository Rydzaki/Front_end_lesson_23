export type User = { // создаем тип данных 
    firstName: string, 
    lastName: string, 
    role: string, 
    age?: number// знак вопроса означает что это не обязательный элемент
}; 
