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
    'Postre',
    'Ensalada',
    'Bebidas',
    'Guisos',
    'Carnes',
    'Libre de Gluten',
    'Vegetariano',
    'Vegano',
    'Plato Caliente',
    'Plato Frío'
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
        'img' : 'assets/img/burger.jpg'
    },

    {
        'id' : 2,
        'name' : 'Sopa de Vegetales',
        'category' : [
            'Plato Calientes'
        ],
        'procedure' : 'Hervir el agua con zanahoria, lenteja y tomate por 1 hora.',
        'ingredients' : [
            'Tomate',
            'Zanahoria',
            'Lenteja'
        ],

        'difficulty' : 2,
        'ranking' : 4,
        'img' : 'assets/img/sopa-vegetales.jpg'
        
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
        'img' : 'assets/img/tacos-pollo.jpg'
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
        'img' : 'assets/img/torta-chocolate.jpg'
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
        'img' : 'assets/img/flan.jpg'
    },
];

export function isValidAccount(email, password){

    let isValid = false;

    users_info.forEach(itr => {

        if (isValid)
            return;

        isValid = (itr.email === email && itr.password === password);
    });

    return isValid;
}

