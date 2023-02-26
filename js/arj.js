const userTempletnews=document.getElementById('user-templetnews');
    
const templetnewsDiv=document.createElement('div');
templetnewsDiv.classList.add('col')
templetnewsDiv.innerHTML=`
      <div class="card  p-3">
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

 