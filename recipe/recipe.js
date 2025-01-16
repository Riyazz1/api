let button=document.querySelector("button")

button.addEventListener("click",()=>{
    let user=document.querySelector("#uip").value;
    let new_user=user.split(" ");
    let image=document.querySelector("#im")
    let image1=document.querySelector("#im1")
    let head=document.querySelector("#head")
    let head1=document.querySelector("#head1")
    let url=`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${api_key}&ingredients=${new_user[0]},+${new_user[1]},+${new_user[2]},+${new_user[3]}&number=2`
    const recapi= async ()=>{
        let respo=await fetch(url)
        let new_respo= await respo.json()

        head.innerText="";
        head1.innerText="";
        image.src = "";
        image1.src = "";
        
        new_respo.forEach((element,index) => {
        
            
            // head.innerText+=`${element.title} \n`

            if(index==0){
                image.src=element.image
                head.innerText=element.title
            }
            else if(index==1) {
                image1.src=element.image
                head1.innerText=element.title

            }
            
            

            
            
        });
        
    
    }
    console.log(recapi())

})

