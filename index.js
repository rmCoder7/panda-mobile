const loadPhone = async (searchText)=>{
const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
const res = await fetch(url);
const data = await res.json();
displayPhone(data.data);
}



const displayPhone =(phones)=>{

const phoneContainer = document.getElementById('phone-container')
phoneContainer.textContent = '';
 for(const phone of phones){

  const phoneDiv = document.createElement('div');
  phoneDiv.classList.add('col');
  phoneDiv.innerHTML= `  
  
  <div class="card h-100 w-50 m-3">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
  
          
  `

 phoneContainer.appendChild(phoneDiv);
 

}



}



document.getElementById('btn-search').addEventListener('click', function(){

  const searchField = document.getElementById('search-field')
  const searchText = searchField.value;
  loadPhone(searchText);






})





loadPhone();




/*


amr shonar bangla ami tomaye valobashi ,, i love you my dear bou tmi kmn ascho



*/



