export const users_info = [
    {
        "name" : "Candela",
        "last_name" : "Esquivel",
        "email" : "candela@hotmail.com",
        "phone" : "11 22 52 34 22", 
        "password" : "1234", 
        "question" : "¿Nombre de tu mamá?", 
        "security_answer" : "viviana" 
    },

    {
        "name" : "Antonio",
        "last_name" : "Berti",
        "email" : "antonio@hotmail.com",
        "phone" : "11 22 40 12 34", 
        "password" : "5678", 
        "question" : "¿Apellido paterno?", 
        "security_answer" : "berti" 
    },
];

export const categories = [
    'Bebidas',
    'Carnes',
    'Ensalada',
    'Guisos',
    'Libre de Gluten',
    'Plato Caliente',
    'Plato Frío',
    'Postre',
    'Vegano',
    'Vegetariano'
];

export const recipes_example = [
    {
        'id' : 1,
        'name' : 'Hamburguesa',
        'category' : [
            'Carnes'
        ],
        'procedure' : 'Cortar el tomate en rodajas, lavar la lechuga. Cocinar el pan a la plancha por 2 minutos.',
        'ingredients' : [
            'Tomate',
            'Lechuga',
            'Pan'
        ],

        'difficulty' : 4,
        'ranking' : 2,
        'img' : 'assets/img/burger.jpg',
        'isPublic' : true
    },

    {
        'id' : 2,
        'name' : 'Sopa de Vegetales',
        'category' : [
            'Plato Caliente'
        ],
        'procedure' : 'Hervir el agua con zanahoria, lenteja y tomate por 1 hora.',
        'ingredients' : [
            'Tomate',
            'Zanahoria',
            'Lenteja'
        ],

        'difficulty' : 2,
        'ranking' : 4,
        'img' : 'assets/img/sopa-vegetales.jpg',
        'isPublic' : true
    },

    {
        'id' : 3,
        'name' : 'Tacos de Pollo',
        'category' : [
            'Carnes'
        ],
        'procedure' : 'Cocinar el pollo a la plancha por 30 min. Sofreir vegetales por 5 minutos',
        'ingredients' : [
            'Pollo',
            'Morron',
            'Tortilla de Maiz'
        ],

        'difficulty' : 5,
        'ranking' : 3,
        'img' : 'assets/img/tacos-pollo.jpg',
        'isPublic' : true
    },

    {
        'id' : 4,
        'name' : 'Torta de Chocolate',
        'category' : [
            'Postre'
        ],
        'procedure' : 'Mezclar los huevos con la leche, la harina y la stevia y el cacao.',
        'ingredients' : [
            'Cacao',
            'Huevos',
            'Leche'
        ],

        'difficulty' : 4,
        'ranking' : 1,
        'img' : 'assets/img/torta-chocolate.jpg',
        'isPublic' : true
    },

    {
        'id' : 5,
        'name' : 'Flan',
        'category' : [
            'Postre'
        ],
        'procedure' : 'Mezclar los huevos con la leche y la stevia. Aplicar baño María por 40 minutos',
        'ingredients' : [
            'Stevia',
            'Huevos',
            'Leche'
        ],

        'difficulty' : 2,
        'ranking' : 4,
        'img' : 'assets/img/flan.jpg',
        'isPublic' : false
    },
];

export function isValidAccount(email, password){

    let values = { isValid : false, passError : '', emailNotFoundError : ''};
    
    users_info.forEach(itr => {

        if (itr.email === email)
        {
            if (itr.password !== password)
                values.passError = 'Contraseña Incorrecta';
            else
                values.isValid = true
        }
    });

    if (!values.isValid && values.passError.length === 0)
    {
        if (email.length > 0)
            values.emailNotFoundError = 'No se encuentra ningun mail asociado a esa cuenta'
        else
            values.emailNotFoundError = 'Se requiere un mail valido'
    }


    return values;
}

export function getSecurityQuestion(email) {

    for (let index in users_info){
        const userData = users_info[index];

        if (userData.email === email){
            return userData.question;
        }
    }

    return '';
}

export function matchAnswerWithSecurityQuestion(email, answer) {

    for (let index in users_info){
        const userData = users_info[index];

        if (userData.email === email){
            return userData.security_answer === answer;            
        }
    }

    return false;
}

