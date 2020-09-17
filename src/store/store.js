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
            {name:"GTA 5", price: 300, stock: 60, platforms:['PS4', 'Xbox One', 'PC']},
            {name:"Smash Bros Ultimate", price: 400, stock: 20, platforms:['Nintendo switch']},
            {name:"The Last of Us Part 2", price: 600, stock: 20, platforms:['PS4']},
        ],
        managers:[
            {name:"Jack Riley", age: 41, position:"Manager", email: "jack.riley@thatGameShop.com", password:"Jack12345"},
            {name:"Sack Riley", age: 38, position:"Assistant manager", email: "Sack.riley@thatGameShop.com", password:"Sack12345"},
        ],
        employees:[
            {name:"Sarah Anderson", age: 26, position:"Co-worker", email: "sarah.anderson@thatGameShop.com", password:""},
            {name:"Kelly Rogers", age: 30, position:"Team leader", email: "kelly.rogers@thatGameShop.com", password:""},
            {name:"Jim Sanders", age: 20, position:"Co-worker", email: "jimSanders@thatGameShop.com", password:""},
        ],
        users:[
            {name:"Oliver Henseforth", email:"oliver.henseforth@gmail.com", password:"OlvierRules123", phone:"444 55 789", address:{}, orderlist:[]},
            {name:"Sandra Eddinson", email:"sandra.eddinson@gmail.com", password:"sandra", phone:"890 67 345", address:{}, orderlist:[]},
            {name:"Graham Mactavish", email:"graham.mactavish@gmail.com", password:"", phone:"345 58 932", address:{}, orderlist:[]},
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