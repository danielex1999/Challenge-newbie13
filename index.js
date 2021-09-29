const answer= document.querySelectorAll('.answers');
const barra= document.querySelectorAll('.questions li span img');
const titulo= document.querySelectorAll('.questions li h2')

for (let index = 0; index < barra.length; index++) {
    const element = barra[index];

    element.addEventListener('click',function(){
        for (let index = 0; index < answer.length; index++) {
            answer[index].style.display='none'
            titulo[index].style.fontWeight='400'
            barra[index].style.transform='none'
        }
        answer[index].style.display='block'
        titulo[index].style.fontWeight='700'
        barra[index].style.transform='rotate(180deg)'
    })
    
}
//

//for click array[i] p display block