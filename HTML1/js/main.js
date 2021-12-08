let uploadBtn = document.getElementById('uploadBtn');
let fileInput = document.getElementById('fileInput');
let imgBox = document.querySelector('.images-box')

uploadBtn.onclick = function(){
    fileInput.click()
}

fileInput.onchange = function(ev){

    imgBox.innerHTML='';

   uploadFiles(ev.target.files)
}

imgBox.ondragover = (ev)=>ev.preventDefault();

imgBox.ondrop = function(ev){
    ev.preventDefault();    
    imgBox.innerHTML='';
   uploadFiles(ev.dataTransfer.files)
}

function uploadFiles(files){
    [...files].forEach(x=>{
        // if(!x.type.startsWith('image/')){
        //     alert(`${x.type}  formati duzgun deyil!`)
        // }

       

        let reader = new FileReader();

        reader.onloadend = function(ev){
            let img = document.createElement('img');
            img.setAttribute('src',reader.result);
            img.className='img-item'

            imgBox.appendChild(img)
        }

        reader.readAsDataURL(x)
    })
}
