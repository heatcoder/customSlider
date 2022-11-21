let slider = document.querySelector("#slider")
let slides = document.querySelector(".slides")
let slide = document.querySelectorAll(".slide")
let activeSlideIndex = 0
let slideLength = slide.length
let nextButton = document.querySelector('.nextButton')
let prevButton = document.querySelector('.prevButton')
let navigation = document.querySelector('.navigation')

slide[activeSlideIndex].classList.add('active')


for(i=0; i<slideLength; i++){
    let bullet =`<input type="radio" class ="bullets" name="bullet" data-id= ${i} />`
    navigation.innerHTML += bullet
    }

function resetSlide(){
    slide[activeSlideIndex].classList.remove('active')
   
    // slide.forEach((slideImage)=>{
    //     slideImage.classList.remove('active')
    // })
}
let bullets = document.querySelectorAll(".bullets")
nextButton.addEventListener('click', ()=>{
    resetSlide()
    activeSlideIndex++
       
    if (activeSlideIndex > slideLength -1) {
       
    activeSlideIndex=0 
    }
    bullets[activeSlideIndex].checked = true
    slide[activeSlideIndex].classList.add('active')
    console.log(activeSlideIndex)
})


prevButton.addEventListener('click', ()=>{
    resetSlide()
    activeSlideIndex--
    if (activeSlideIndex < 0) {
       
        activeSlideIndex=slideLength -1
     
    }
    bullets[activeSlideIndex].checked = true
    slide[activeSlideIndex].classList.add('active')

    console.log(activeSlideIndex)
})



bullets.forEach(item =>{
item.addEventListener('change', (e)=>{
    resetSlide()
activeSlideIndex = e.target.dataset.id
slide[activeSlideIndex].classList.add('active')
})
})

