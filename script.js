// let a = [1,2,3,4]
// let b = a[0]
// a[0]=a[a.length - 1]
// a[a.length-1]=b
// let out = ''
// for(let i=0; i<a.length; i ++){
//     out += a[i] + '--'
// }

// document.querySelector('.out').innerHTML = out
// let mas = [1,2,5,9,4,13,4,10]
// for(let i = 0; i< mas.length; i ++){
//     if(mas[i] == 4){
//     alert('Есть')
//     break
// }
// }


// console.log(mas)

// let min = mas[0]

// for(let i = 0; i < mas.length; i ++){
//     if(mas[i]<min){
//         min = mas[i]
//     }
// }
// alert(min)

// let sum = 0

// for(let i = 0; i < mas.length; i ++){
//     sum+= mas[i]
// }
// alert(su
// let elem = document.querySelectorAll('li')
// for(let i = 0;i < elem.length; i++){
//     console.log(elem[i].innerHTML)
// }
// let h = document.getElementById('main-heading')
// console.log(h.innerHTML)
// let newTitle = prompt('enter new titleplease')
// h.innerHTML = newTitle
let block = document.querySelector('.block')
let distTop = 0
let distLeft = 0
let distRight = 0
let disDown = 0
let btnDown = document.querySelector('.btnDown')
let btnUp = document.querySelector('.btnUp')
let btnLeft = document.querySelector('.btnLeft')
let btnRight = document.querySelector('.btnRight')

btnDown.onclick = () =>{
    if(distTop <=480){
          distTop += 50
    block.style.top = distTop + 'px'  
    }else{alert('ty lox ebaniy')}

}

btnRight.onclick = function (){
    distLeft += 50
    block.style.left = distLeft + 'px'
}

