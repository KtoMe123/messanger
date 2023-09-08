
let frameInfo = document.getElementsByClassName('right-side__info')[0];
let docs = document.getElementById('main-chat-list');
let elements = docs.getElementsByClassName('chat-list__item');

for(let i = 0; i < elements.length; i++) {    
    let button = document.getElementById(elements[i].id);
    button.addEventListener('click',funcUnvisible);
    button.addEventListener('click',funcVisible);
    
    let button2 = document.getElementsByClassName('user__img')[i];
    
    button2.addEventListener('click',funcInfo);


    function funcVisible() {
        let frameId = document.getElementById ("frame-chat-" + (+elements[i].id + 1));
            if (frameId.style.display == 'none'){
                frameId.style.display="block";
                frameInfo.style.display="none";
            }else{
                frameId.style.display="block";
            }


}
    function funcUnvisible() {
        let frameClass = document.getElementsByClassName("right-side__item");

        for (let i = 0; i < frameClass.length; i++) {
            frameClass[i].style.display = 'none';
        }
    }

    function funcInfo() {
            let name = elements[i].getElementsByClassName('chat-list__name')[0].innerHTML;
            document.getElementsByClassName('info__username')[0].innerHTML = name;
    
            if (frameInfo.style.display == 'none'){
                frameInfo.style.display="block";
            } else {
                frameInfo.style.display="block";
            }
    
            let buttonClose = document.getElementById('info__icon-close');
            buttonClose.addEventListener('click', funcClose);
            
            function funcClose() {
                frameInfo.style.display="none"
            }
        }

}


