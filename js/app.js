'use strict';

function customerRandomNum(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let restoruntWorkingTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let Seattle = {
    Place: 'Seattle',
    randomNumber: [],
    avarage: 6.3,
    minimum: 23,
    maximum: 65,
    custemerperhour: 0,
    daylySalesPerHour: function () {
        for (let i = 0; i < restoruntWorkingTime.length; i++) {
            this.randomNumber.push(Math.floor(customerRandomNum(this.maximum, this.minimum) * this.avarage));
            console.log(this.randomNumber);
        }
    },

    render: function () {
        let parent = document.getElementById('parent');

        let locationName= document.createElement('h2');
        parent.appendChild(locationName);
        locationName.textContent=this.Place;

        let unelemnt = document.createElement('ul');
        parent.appendChild(unelemnt);
        console.log(parent);
        let sum = 0;
        
        for (let j = 0; j < restoruntWorkingTime.length; j++) {
            let lielemnt = document.createElement('li');
            unelemnt.appendChild(lielemnt);
            lielemnt.textContent = restoruntWorkingTime[j] + ' : ' + this.randomNumber[j] + ' cookies';
            console.log(lielemnt.textContent);
            sum += this.randomNumber[j];
        }
        let lielemnt = document.createElement('li');
        lielemnt.textContent = 'total ' + sum + ' cookeis';
        unelemnt.appendChild(lielemnt);
    }
};
Seattle.daylySalesPerHour();
console.log(Seattle.randomNumber);
Seattle.render();


let tokyo = {
    Place: 'tokyo',
    randomNumber: [],
    avarage: 1.2,
    minimum: 3,
    maximum: 24,
    custemerperhour: 0,
    daylySalesPerHour: function () {
        for (let i = 0; i < restoruntWorkingTime.length; i++) {
            this.randomNumber.push(Math.floor(customerRandomNum(this.maximum, this.minimum) * this.avarage));
            console.log(this.randomNumber);
        }
    },

    render: function () {
        let parent = document.getElementById('parent');

        let locationName= document.createElement('h2');
        parent.appendChild(locationName);
        locationName.textContent=this.Place;

        let unelemnt = document.createElement('ul');
        parent.appendChild(unelemnt);
        console.log(parent);
        let sum = 0;
        
        for (let j = 0; j < restoruntWorkingTime.length; j++) {
            let lielemnt = document.createElement('li');
            unelemnt.appendChild(lielemnt);
            lielemnt.textContent = restoruntWorkingTime[j] + ' : ' + this.randomNumber[j] + ' cookies';
            console.log(lielemnt.textContent);
            sum += this.randomNumber[j];
        }
        let lielemnt = document.createElement('li');
        lielemnt.textContent = 'total ' + sum + ' cookeis';
        unelemnt.appendChild(lielemnt);
    }
};
tokyo.daylySalesPerHour();
console.log(tokyo.randomNumber);
tokyo.render();


let Dubai = {
    Place: 'Dubai',
    randomNumber: [],
    avarage: 3.7,
    minimum: 11,
    maximum: 38,
    custemerperhour: 0,
    daylySalesPerHour: function () {
        for (let i = 0; i < restoruntWorkingTime.length; i++) {
            this.randomNumber.push(Math.floor(customerRandomNum(this.maximum, this.minimum) * this.avarage));
            console.log(this.randomNumber);
        }
    },

    render: function () {
        let parent = document.getElementById('parent');

        let locationName= document.createElement('h2');
        parent.appendChild(locationName);
        locationName.textContent=this.Place;

        let unelemnt = document.createElement('ul');
        parent.appendChild(unelemnt);
        console.log(parent);
        let sum = 0;
        

        for (let j = 0; j < restoruntWorkingTime.length; j++) {
            let lielemnt = document.createElement('li');
            unelemnt.appendChild(lielemnt);
            lielemnt.textContent = restoruntWorkingTime[j] + ' : ' + this.randomNumber[j] + ' cookies';
            console.log(lielemnt.textContent);
            sum += this.randomNumber[j];
        }
        let lielemnt = document.createElement('li');
        lielemnt.textContent = 'total ' + sum + ' cookeis';
        unelemnt.appendChild(lielemnt);
    }
};
Dubai.daylySalesPerHour();
console.log(Dubai.randomNumber);
Dubai.render();


let Paris = {
    Place: 'Paris',
    randomNumber: [],
    avarage: 2.3,
    minimum: 20,
    maximum: 38,
    custemerperhour: 0,
    daylySalesPerHour: function () {
        for (let i = 0; i < restoruntWorkingTime.length; i++) {
            this.randomNumber.push(Math.floor(customerRandomNum(this.maximum, this.minimum) * this.avarage));
            console.log(this.randomNumber);
        }
    },

    render: function () {
        let parent = document.getElementById('parent');

        let locationName= document.createElement('h2');
        parent.appendChild(locationName);
        locationName.textContent=this.Place;

        let unelemnt = document.createElement('ul');
        parent.appendChild(unelemnt);
        console.log(parent);
        let sum = 0;
        
        for (let j = 0; j < restoruntWorkingTime.length; j++) {
            let lielemnt = document.createElement('li');
            unelemnt.appendChild(lielemnt);
            lielemnt.textContent = restoruntWorkingTime[j] + ' : ' + this.randomNumber[j] + ' cookies';
            console.log(lielemnt.textContent);
            sum += this.randomNumber[j];
        }
        let lielemnt = document.createElement('li');
        lielemnt.textContent = 'total ' + sum + ' cookeis';
        unelemnt.appendChild(lielemnt);
    }
};
Paris.daylySalesPerHour();
console.log(Paris.randomNumber);
Paris.render();


let Lima = {
    Place: 'Lima',
    randomNumber: [],
    avarage: 2.3,
    minimum: 20,
    maximum: 38,
    custemerperhour: 0,
    daylySalesPerHour: function () {
        for (let i = 0; i < restoruntWorkingTime.length; i++) {
            this.randomNumber.push(Math.floor(customerRandomNum(this.maximum, this.minimum) * this.avarage));
            console.log(this.randomNumber);
        }
    },

    render: function () {
        let parent = document.getElementById('parent');

        let locationName= document.createElement('h2');
        parent.appendChild(locationName);
        locationName.textContent=this.Place;

        let unelemnt = document.createElement('ul');
        parent.appendChild(unelemnt);
        console.log(parent);
        let sum = 0;
        

        for (let j = 0; j < restoruntWorkingTime.length; j++) {
            let lielemnt = document.createElement('li');
            unelemnt.appendChild(lielemnt);
            lielemnt.textContent = restoruntWorkingTime[j] + ' : ' + this.randomNumber[j] + ' cookies';
            console.log(lielemnt.textContent);
            sum += this.randomNumber[j];
        }
        let lielemnt = document.createElement('li');
        lielemnt.textContent = 'total ' + sum + ' cookeis';
        unelemnt.appendChild(lielemnt);
    }
};
Lima.daylySalesPerHour();
console.log(Lima.randomNumber);
Lima.render();