box=document.querySelectorAll(".box")
body=document.querySelector("body")
// console.log(box);
box.forEach((element) => {
    element.addEventListener( "click", function(e){
        if(e.target.id=='grey'){
            body.style.backgroundColor="grey"
        }
        else if (e.target.id=='red'){
            body.style.backgroundColor="red"
        } else if (e.target.id=='blue'){
            body.style.backgroundColor="blue"
        }  else{
            body.style.backgroundColor="green"

        }

    })
});