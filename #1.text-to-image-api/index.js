let image=document.querySelector("#im")

const mn= async ()=>{
    let uip=document.getElementById("user").value
    console.log(uip)

    const url=`https://image.pollinations.ai/prompt/ ${uip}`

    let responce= await fetch(url)

    let blob= await responce.blob()

    let imageUrl = URL.createObjectURL(blob);
        
   
    image.src = imageUrl;

    

}
mn()
