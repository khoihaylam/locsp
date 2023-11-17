let button=document.querySelectorAll("button")[0]
let button1=document.querySelectorAll("button")[1]
button.addEventListener('click',()=>{
    let img=document.querySelectorAll('.container img ')
        for(let i=0;i<img.length;i++){
            if(img[i]==img[0]){
                img[i].src='./img/xemay1.png'
            }
            else if(img[i]==img[1]){
                img[i].src='./img/xemay2.png'
            }
            else if(img[i]==img[2]){
                img[i].src='./img/xemay3.png'
            }
            else{
                img[i].src='./img/xemay4.png'
            }
        }
    })
button1.addEventListener('click',()=>{
    let img=document.querySelectorAll('.container img ')
    for(let i=0;i<img.length;i++){
        if(img[i]==img[0]){
            img[i].src='./img/oto1.png'
        }
        else if(img[i]==img[1]){
            img[i].src='./img/oto2.png'
        }
        else if(img[i]==img[2]){
            img[i].src='./img/oto3.png'
        }
        else{
            img[i].src='./img/oto4.png'
        }
    }

})
