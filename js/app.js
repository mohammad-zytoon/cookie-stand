'use strict';
let storesPlace = [];
console.log(storesPlace);

/*function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
  }*/
let restoruntWorkingTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let parent = document.getElementById('parent');
let container= document.getElementById('parent');

//


function StoresPlaceDetails(place, minimum, maximum, avarage) {
    this.place = place;
    this.minimum = minimum;
    this.maximum = maximum;
    this.avarage = avarage;
    // this.randomNumber=[];
    //
    this.standCookiesSales = [];
    this.totalSalesPerDay = 0;
    //this.getrandomNumber();



    storesPlace.push(this);
}
let tableElemntsNew=document.createElement('table');
parent.appendChild(tableElemntsNew);
//header function
function standsHours() {
    let trelemnts=document.createElement('tr');
    tableElemntsNew.appendChild(trelemnts);
    let thelemnts = document.createElement('th');
    trelemnts.appendChild(thelemnts);
    thelemnts.textContent = 'place';

    for (let i = 0; i < restoruntWorkingTime.length; i++) {
       let thelemntss = document.createElement('th');
       thelemntss.textContent = restoruntWorkingTime[i];
        trelemnts.appendChild(thelemntss);
    }

    let thelemntsss = document.createElement('th');
    thelemntsss.textContent = 'Daily place Totals';
    trelemnts.appendChild(thelemntsss);
}

//

StoresPlaceDetails.prototype.getrandomNumber = function () {
    for (var i = 0; i < restoruntWorkingTime.length; i++) {
        let averageForCookiesHourly = Math.random() * (this.maximum - this.minimum) + this.minimum;
        averageForCookiesHourly = Math.floor(averageForCookiesHourly * this.avarage);
        
        this.standCookiesSales.push(averageForCookiesHourly);
        this.totalSalesPerDay = averageForCookiesHourly += this.totalSalesPerDay
        
    }
}
let Seatle = new StoresPlaceDetails('seatle', 23, 65, 6.3);
let Tokyo = new StoresPlaceDetails('Tokyo', 3, 24, 1.2);
let Dubai = new StoresPlaceDetails('Dubai', 11, 38, 3.7);
let Paris = new StoresPlaceDetails('Paris', 20, 38, 3.7);
let Lima = new StoresPlaceDetails('Lima', 2, 16, 4.6);



StoresPlaceDetails.prototype.render = function () {
   
    this.getrandomNumber();
    
    let trelemnts = document.createElement('tr');
    let tdelemnts = document.createElement('td');
    tdelemnts.textContent = this.place;
    trelemnts.appendChild(tdelemnts);
    
    for (let i = 0; i < restoruntWorkingTime.length; i++) {
        tdelemnts = document.createElement('td');
        tdelemnts.textContent = this.standCookiesSales[i];
        trelemnts.appendChild(tdelemnts);
    }
    
    tdelemnts = document.createElement('td');
    tdelemnts.textContent = this.totalSalesPerDay
    trelemnts.appendChild(tdelemnts);
    tableElemntsNew.appendChild(trelemnts);
}

function totalHourlyCookiesSales() {
    let trelemnts = document.createElement('tr');
    let tdelemnts = document.createElement('td');
    tdelemnts.textContent = 'Sum Total';
    trelemnts.appendChild(tdelemnts);
    
    
    let totalOfSum = 0;
    
    for (let i = 0; i < restoruntWorkingTime.length; i++) {
        
        let countPerHour = 0;
        for (let j = 0; j < storesPlace.length; j++) {
            countPerHour += storesPlace[j].standCookiesSales[i];
        }
        
        
        tdelemnts = document.createElement('td');
        tdelemnts.textContent = countPerHour;
        trelemnts.appendChild(tdelemnts);
        totalOfSum = countPerHour += totalOfSum
    }
    tdelemnts = document.createElement('td');
    tdelemnts.textContent = totalOfSum;
    trelemnts.appendChild(tdelemnts);
    tableElemntsNew.appendChild(trelemnts);
}
function renderAllOfIt() {
    for (let i in storesPlace) {
        storesPlace[i].render();
        //storesPlace[i].getrandomNumber();
    }
}
let cookieStand = document.getElementById('cookieStand');

cookieStand.addEventListener('submit',addingStore);

function addingStore(event) {
   
    event.preventDefault();

    let place = event.target.placeField.value;
    let minimum = event.target.minimumField.value;
    let maximum = event.target.maximumField.value;
    let avarage = event.target.avarageField.value;
    
    
    let newStore = new StoresPlaceDetails (place, minimum, maximum, avarage)
    
    
    tableElemntsNew.textContent = '';
    standsHours();
    renderAllOfIt();
    totalHourlyCookiesSales();
    
}



standsHours();
renderAllOfIt();
totalHourlyCookiesSales();


/*sumation+=sum;
    let tail = document.createElement('td');
    trelemnts.appendChild(tail);
    tail.textContent = sum;
    sum = 0;
  }



let tableElemnts = document.createElement('table');
parent.appendChild(tableElemnts);

function creatTable() {
    let thelemnts = document.createElement('th');
    tableElemnts.appendChild(thelemnts);
    for (let b = 0; b < restoruntWorkingTime.length; b++) {
      let thelemnts = document.createElement('th');
      tableElemnts.appendChild(thelemnts);
      thelemnts.textContent = restoruntWorkingTime[b];
      console.log(thelemnts);
    }
    let lastHeading = document.createElement('th');
    tableElemnts.appendChild(lastHeading);
    lastHeading.textContent = 'Daily Location Total';
  }
  creatTable();



  StoresPlaceDetails.prototype.getrandomNumber = function () {
  for (let i = 0; i < restoruntWorkingTime.length; i++) {
    this.randomNumber.push(Math.floor((randomNumber(this.maximum, this.minimum) * this.avarage)));
  }
}




  let Seatle= new StoresPlaceDetails('seatle', 23, 65, 6.3);
  let Tokyo= new StoresPlaceDetails('Tokyo', 3, 24, 1.2);
  let Dubai= new StoresPlaceDetails('Dubai', 11, 38, 3.7);
  let Paris= new StoresPlaceDetails('Paris', 20, 38, 3.7);
  let Lima= new StoresPlaceDetails('Lima', 2, 16, 4.6);

  for (let i = 0; i < storesPlace.length; i++) {
    storesPlace[i].render();
  }

  let sumTotal=0;
let total=0;

let trelemnts=document.createElement('tr');
tableElemnts.appendChild(trelemnts);
let tdelemnts=document.createElement('td');
trelemnts.appendChild(tdelemnts);
tdelemnts.textContent='Totals';
for(let i=0;i<restoruntWorkingTime.length;i++){
      for(let j=0;j<storesPlace.length;j++){
        total+=storesPlace[j].randomNumber[i];
      }
      console.log(total);
      let tdelemnts=document.createElement('td');
      trelemnts.appendChild(tdelemnts);
      tdelemnts.textContent=total;
      sumTotal+=total;
      total=0;
}
console.log(sumation);
console.log(sumTotal);
let totalTotal=sumation+sumTotal;
console.log(totalTotal);
let final=document.createElement('td');
trelemnts.appendChild(final);
final.textContent=totalTotal;
























  /*let doublTotal=0;

  let hourlyTotalSales=[];
var totalsalesHourly = 0;
function allStoresHourly(){
  for(let i=0; i<restoruntWorkingTime.length; i++){
    for (let j=0; j<storesPlace.length; j++){
        doublTotal+=storesPlace[j].daylySalesPerHour[i];
    }
    hourlyTotalSales.push(doublTotal);
    totalsalesHourly = totalsalesHourly + doublTotal;
    doublTotal=0;
  }
  hourlyTotalSales.push(totalsalesHourly);
}






/*function customerRandomNum(max, min) {
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
Lima.render();*/


