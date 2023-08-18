

interface Services {
    title: string;
    categories: string[];
    background: string;
}

const services: Services[] = [
    {title: 'Go', categories: ['taxi', 'suv'], background: 'blue'},
    {title: 'Eat', categories: ['Livraison', 'Find'], background: 'purple'},
    {title: 'Livraison', categories: ['Livraison'], background: 'indigo'},
    {title: 'Medicament', categories: ['Medicament'], background: 'green'},
]

export default services;