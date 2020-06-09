class PageScroll{
    pageScrollMenu = null;
    menuBurger = null;
    scrollNavItems = [];
    pageSections = []
    activeSection = 0;

    currentClientTopScroll = 0;
    clientBrowserHeight = 0;

    isActiveScroll = false;
    
    hr = null;

    constructor(){
        this.pageScrollMenu = 
            document.querySelector('.page-scroll');
        this.menuBurger = 
            document.querySelector('.header__menu-button');
        
        let numEl = this.pageScrollMenu.querySelector('.page-scroll__screen-number');
        if(numEl)
            numEl.addEventListener('click', () => this.moveToNextSection());

        this.initPageSections();
        this.initStaticScroll();
        this.currentClientTopScroll = window.pageYOffset;
        this.clientBrowserHeight = document.documentElement.clientHeight;

        // this.hr = document.createElement('hr');
        // this.hr.style.position = 'fixed';
        // this.hr.style.width = '100%';
        // this.hr.style.height = '1px';
        // this.hr.style.top = '50%';
        // document.body.appendChild(this.hr);

        this.changeActiveSection(
            this.initCurrentSection());
    }

    activePageScrollMenu(){
        this.pageScrollMenu.classList.toggle('page-scroll__iner--active');
        this.menuBurger.classList.toggle('header__menu-button--active-page-scroll');

        this.pageSections.forEach(sec => {
            let navIner = sec.html.querySelector('.section__nav-iner');
            if(navIner)
                navIner.classList.toggle('section__nav-iner--hidden');
        })
    }

    /* Инициализация внутренего обекта для управления секциями */
    initPageSections(){
        let sections = document.querySelectorAll('.section');
        for(let i = 0; i < sections.length; i++){
            let sec = sections[i];
            this.pageSections.push({
                html: sec,
                topPosition : sec.offsetTop,
                height : sec.offsetHeight,
                type : getSectionType(sec),
            })
        }
        function getSectionType(sec){
            if(sec.classList.contains('section--bg-image'))
                return 'image';
            return 'content';
        }
    }
    /* Инициализация id секций и кнопок скролла между секциями */
    initStaticScroll(){
        for(let i = 0; i < this.pageSections.length; i++){
            let sec = this.pageSections[i].html

            sec.setAttribute('id', 'sec-' + i);
            this.scrollNavItems.push(this.generateScrollNavItem( i ))
            let sectionLink = sec.querySelector('.section__nav-iner');

            if (!sectionLink) continue;

            sectionLink.firstElementChild.innerHTML = '0' + ( i + 1)
            if( i != this.pageSections.length - 1)
                sectionLink.setAttribute('href', `#sec-${ i + 1 }`)
            else
                sectionLink.setAttribute('href', `#sec-0`)
        }

        let scrollNav = document.querySelector('.page-scroll__nav');
        this.scrollNavItems.forEach(item => scrollNav.appendChild(item));
    }
    /* Генерирование и вывод элемента навигации между секциями */
    generateScrollNavItem(secIndex){
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', `#sec-${ secIndex }`);
        a.setAttribute('data-section-index', secIndex);
        a.addEventListener('click', (e) =>{
            e.preventDefault();
            this.changeActiveSection(secIndex);
            this.moveToActiveSection();
            this.blockScroll();
        })
        li.appendChild(a)

        return li;
    }
    initCurrentSection(){
        const scrinCenter = this.currentClientTopScroll + this.clientBrowserHeight / 2;
        for(let i = 0; i < this.pageSections.length; i++ ){
            const sec = this.pageSections[i];
            if( sec.topPosition < scrinCenter && sec.topPosition + sec.height >= scrinCenter)
                return(i);
        }
        return 0;
    }


    scrollFollower(){
        if(this.isActiveScroll)
            return;
        this.blockScroll();
        let newActiveSection = this.getCurrentSection();
        if(newActiveSection != undefined && this.activeSection != newActiveSection)
            this.changeActiveSection(newActiveSection);
    }

    changeActiveSection(secIndex){
        this.changeNavStyle( this.pageSections[secIndex].type == 'image' );
        if(this.activeSection != undefined)
            this.scrollNavItems[this.activeSection].classList.remove('active');
        this.scrollNavItems[secIndex].classList.add('active');

        let numEl = this.pageScrollMenu.querySelector('.page-scroll__screen-number');
        numEl.innerHTML = '0' + (secIndex + 1);

        this.activeSection = secIndex;
    }
    changeNavStyle(isDark){
        if(isDark){
            this.menuBurger.firstElementChild.classList.add('menu-button--light')
            this.pageScrollMenu.classList.remove('page-scroll--dark')
        } else {
            this.menuBurger.firstElementChild.classList.remove('menu-button--light')
            this.pageScrollMenu.classList.add('page-scroll--dark')
        }
    }

    getCurrentSection(){
        const scrinCenter = this.currentClientTopScroll + this.clientBrowserHeight / 2;
        if(this.isTopScroll()){
            for(let i = this.pageSections.length - 1; i >= 0; i-- ){
                const sec = this.pageSections[i];
                if( sec.topPosition < scrinCenter && sec.topPosition + sec.height >= scrinCenter)
                    return(i);
            }
        } 
        else{
            for(let i = 0; i < this.pageSections.length; i++ ){
                const sec = this.pageSections[i];
                if( sec.topPosition < scrinCenter && sec.topPosition + sec.height >= scrinCenter)
                    return(i);
            }
        }
    }
    isTopScroll() {
        if(this.currentClientTopScroll >= window.pageYOffset)
            return true;
        return false;
    }

    blockScroll(){
        if(this.isActiveScroll)
            return;
        this.isActiveScroll = true;
        setTimeout(() => {
            this.isActiveScroll = false;
            this.currentClientTopScroll = window.pageYOffset;
        }, 200);
    }
}