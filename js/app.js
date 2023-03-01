  
  const loawdNewscatagory = async() =>{
   const res= await fetch(`https://openapi.programming-hero.com/api/news/categories`);
   
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

const loawdNewsdetailes= async()=>{
const res = await fetch(`https://openapi.programming-hero.com/api/news/category/08`)
   const data =await res.json();
   displayNewsLoawd(data.data);

}
const displayNewsLoawd=(newsDetails)=>{
   console.log(newsDetails);
  const userTempletnews=document.getElementById('user-templetnews');
  newsDetails.forEach(news => {
    const templetnewsDiv=document.createElement('div');
templetnewsDiv.classList.add('col')
templetnewsDiv.innerHTML=`
      <div class="card  p-3 h-100">
        <img src="${news.thumbnail_url}" class="card-img-top img-fluid " style="width:100%" alt="...">
        <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
         <p class="card-text"> ${news.details} </p>
         <div class="d-flex"> 
         <div class="w-50 d-flex">
         <img src="${news.author.img}" class="card-img-end img-fluid rounded-circle" style="width:20%;">
         <p class="ms-2"> ${news.author.name} </P>
         </div>
         <div class="text-center"> 
         
         <p> view ${news.total_view} </p>
         </div>
          </div>
        </div>
      </div>
`;
   userTempletnews.appendChild(templetnewsDiv)
  });
}

loawdNewsdetailes()

 
loawdNewscatagory()

