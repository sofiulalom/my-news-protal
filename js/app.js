const loawdNewscatagory = async() =>{
  const url=` https://openapi.programming-hero.com/api/news/categories`;
   const res= await fetch(url);
   const data= await res.json();
   displaylowadManu(data.data)
}

const displaylowadManu= (categories) =>{
   
   const newsContainer=document.getElementById('news-container')
  
  for(const newscatagoris   in categories){
    
   const newsdiv=document.createElement('li')
   newsdiv.classList.add('liststyle')     
   newsdiv.innerHTML= `
    <li><a href='#'>${categories.news_category[0].category_name}</a></li>
    <li><a href='#'>${categories.news_category[1].category_name}</a></li>
    <li><a href='#'>${categories.news_category[2].category_name}</a></li>
    <li><a href='#'>${categories.news_category[3].category_name}</a></li>
    <li><a href='#'>${categories.news_category[4].category_name}</a></li>
    <li><a href='#'>${categories.news_category[5].category_name}</a></li>
    <li><a href='#'>${categories.news_category[6].category_name}</a></li>
    <li><a href='#'>${categories.news_category[7].category_name}</a></li>
    
   `
   newsContainer.appendChild(newsdiv)
 }
}

 
loawdNewscatagory()

