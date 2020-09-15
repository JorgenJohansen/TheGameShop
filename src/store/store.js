import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    //TODO: oppdateres ved hjelp av firestore
    state: {
        games:[
            {name:"Uncharted 4", price: 200, stock: 20, platforms:['PS4']},
            {name:"Ghost of Tsushima", price: 600, stock: 0, platforms:['PS4']},
            {name:"GTA 5", price: 300, stock: 60, platforms:['PS4']},
            {name:"Smash Bros Ultimate", price: 400, stock: 20, platforms:['Nintendo switch']},
            {name:"The Last of Us Part 2", price: 600, stock: 20, platforms:['PS4']},
        ],
        managers:[
            {}
        ],
        employees:[
            {}
        ],
        users:[
            {}
        ]
    },
    //TODO: legg til funksjoner som skal være med
    getters:{
        reduceStock: state => {

        },
        productsForSale: state => {
            
        }

    }
})