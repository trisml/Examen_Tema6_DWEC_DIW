document.addEventListener('DOMContentLoaded',function(){
    createGallery();
})

function createGallery(){
    const galeria = document.querySelector('.galeria-imgs');

    for(let i = 1; i<=8;i++){
        const img = document.createElement('picture');
        img.innerHTML= 
        `
        <source srcset="build/assets/imgs/pequeñas/${i}.jpg" type="image/jpg">
        <source srcset="build/assets/imgs/pequeñas/${i}.webp" type="image/webp">
        <img loading="lazy" src="build/assets/imgs/pequeñas/${i}.jpg" height="300" width="300">
        `
        img.onclick = function(){
            createModal(i);
        }
        galeria.appendChild(img);
    }
}
function createModal(id){
    const imgGrande = document.createElement('picture');
    imgGrande.innerHTML= 
    `
        <source srcset="build/assets/imgs/grande/${id}.jpg" type="image/jpg">
        <source srcset="build/assets/imgs/grande/${id}.webp" type="image/webp">
        <img loading="lazy" src="build/assets/imgs/grande/${id}.jpg">
        
    `
    imgGrande.classList.add('imgGrande');
    const containerImg = document.createElement('div');
    containerImg.classList.add('containerImg');
    containerImg.appendChild(imgGrande);


    const imgOverlay = document.createElement('div')
    imgOverlay.classList.add('imgOverlay')
    imgOverlay.appendChild(containerImg);
    
    const closeOverlay = document.createElement('p');
    closeOverlay.textContent = 'X'
    closeOverlay.classList.add('closeOverlay');
    imgOverlay.appendChild(closeOverlay);

    const body = document.querySelector('body')
    body.classList.add('fixed-body')
    body.appendChild(imgOverlay);

    imgOverlay.onclick = function(){
        const body = document.querySelector('body')
        body.classList.remove('fixed-body')
        imgOverlay.remove()
    }
    closeOverlay.onclick = function(){
        const body = document.querySelector('body')
        body.classList.remove('fixed-body')
        imgOverlay.remove()
    }

}