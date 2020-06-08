class Slaier{
    isActive = false;
    slideItemsIner = null;
    slideItems = []; 
    slideTitle = [];
    slideDescription= [];
    itemWidth = 0;
    step = 0;
    currentTransform = 0;
    currentItem = 0;
    controls = {
        progress: null,
        nav: null,

        updateData(startNum, currentNum, endNum){
            let progresWidth = currentNum / endNum * 100;
            startNum = startNum < 10 ? ` 0${startNum}` : startNum;
            endNum = endNum < 10 ? ` 0${endNum}` : endNum;
            currentNum = currentNum < 10 ? ` 0${currentNum}` : currentNum;

            this.progress.firstElementChild.innerHTML = startNum;
            this.progress.lastElementChild.innerHTML = endNum;
            this.progress.children[1].firstElementChild.style.width = `${progresWidth}%`;

            this.nav.innerHTML = `${currentNum} / ${endNum}`;
        }
    };

    constructor(){
        let sliderMain = document.querySelector('.slider');
        if(!sliderMain)
            return;
        this.isActive = true;
        this.slideTitle = sliderMain.querySelectorAll('.slider__title');
        this.slideDescription = sliderMain.querySelectorAll('.slider__description');
        this.initSize(sliderMain);
        this.initControl(sliderMain);

        this.initEvent(sliderMain);
        this.controls.updateData(1, this.currentItem + 1 , this.slideItems.length);
    }
    initSize(sliderIner){
        this.slideItemsIner = sliderIner.querySelector('.slider__items');
        this.slideItems = sliderIner.querySelectorAll('.slider__items figure');
        this.itemWidth = parseFloat(getComputedStyle(this.slideItems[0]).width);
        let slideItemsInerWidth = parseFloat(window.getComputedStyle(this.slideItemsIner).width);
        this.step = this.itemWidth / slideItemsInerWidth * 100
    }
    initControl(sliderIner){
        this.controls.progress = sliderIner.querySelector('.slider__progress');
        this.controls.nav = sliderIner.querySelector('.slider__nav span');
    }
    initEvent(sliderIner){
        if(!this.isActive)
            return;
        let nav = sliderIner.querySelector('.slider__nav');
        nav.firstElementChild.addEventListener('click', (e) => {
            e.preventDefault();
            this.previousSlide();
        } )
        nav.lastElementChild.addEventListener('click', (e) => {
            e.preventDefault();
            this.nextSlide();
        } )
    }

    nextSlide(){
        if(this.currentItem >= this.slideItems.length - 1)
            return;

        this.currentTransform -= this.step;
        this.currentItem++;     

        this.updateSliderElement()
    }
    previousSlide(){
        if(this.currentItem <= 0)
            return;
        this.currentTransform += this.step;
        this.currentItem--;

        this.updateSliderElement()
    }

    updateSliderElement(){
        this.slideItemsIner.style.transform = 'translateX(' + this.currentTransform + '%)';
        this.controls.updateData(1, this.currentItem + 1 , this.slideItems.length);

        this.slideTitle.forEach(el => {
            el.classList.remove('active')
        })
        this.slideTitle[this.currentItem].classList.add('active');
        this.slideDescription.forEach(el => {
            el.classList.remove('active')
        })
        this.slideDescription[this.currentItem].classList.add('active');
    }
}