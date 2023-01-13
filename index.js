const loadPhone = async (searchText)=>{
const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
const res = await fetch(url);
const data = await res.json();
displayPhone(data.data);
}



const displayPhone =(phones)=>{

const phoneContainer = document.getElementById('phone-container')
phoneContainer.textContent = '';
/*
dispaly phones
*/

phones = phones.slice(0,10);

//  warning sections start

const noPhones = document.getElementById('no-found-message');

if (phones.length === 0){

 noPhones.classList.remove("d-none");


}

else {

  noPhones.classList.add("d-none");

}

// start






for(const phone of phones){

  const phoneDiv = document.createElement('div');
  phoneDiv.classList.add('col');
  phoneDiv.innerHTML= `  
  
  <div class="card h-100 w-50 m-2">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button onclick = "loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
              </div>
          </div>
  
          
  `

 phoneContainer.appendChild(phoneDiv);
 

}



}

// handle search button click

document.getElementById('btn-search').addEventListener('click', function(){
// loading coder started here basically,

togglespiner(true);
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value;
  loadPhone(searchText);






})


// pressing Enter in Search field

document.getElementById('search-field').addEventListener('keypress' , function(e){
 
  

 if (e.key === 'Enter'){

  const searchField = document.getElementById('search-field')
  const searchText = searchField.value;
  loadPhone(searchText);




 }


})


// loader coding

const togglespiner =isloading=>{

const loaderSection = document.getElementById("loader");
if(isloading){

  loaderSection.classList.remove("d-none")


}

 else{

  loaderSection.classList.add('d-none')

 }

}

const loadPhoneDetails = async id=>{

const url = ` https://openapi.programming-hero.com/api/phone/${id}`;
const res = await fetch(url);
const data = await res.json();
displayphoneDetails(data.data);

}


const displayphoneDetails = phone =>{

 console.log(phone);

 const modalTitle = document.getElementById("phoneDetailModalLabel");
 modalTitle.innerText=phone.name
 const phoneDetails = document.getElementById('phone-details');
 phoneDetails.innerHTML = `
 <p> Release Date : ${phone.releaseDate ? phone.releaseDate : 'No realse Date found'}</p>
 <p> Storage : ${phone.mainFeatures ? phone.mainFeatures.storage : 'No storage found'} </P>  
 
 
 `

}



// loadPhone();









