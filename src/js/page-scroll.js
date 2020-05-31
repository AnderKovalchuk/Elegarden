class PageScroll{
    pageScrollMenu = null;
    menuBurger = null;
    scrollNavItems = [];
    pageSections = []
    activeSection = 0;

    currentClientTopScroll = 0;
    clientBrowserHeight = 0;

    isActiveScroll = false;

    constructor(){
        this.pageScrollMenu = 
            document.querySelector('.page-scroll');
        this.menuBurger = 
            document.querySelector('.header__menu-button');
        
        let numEl = this.pageScrollMenu.querySelector('.page-scroll__screen-number');
        numEl.addEventListener('click', () => this.moveToNextSection());

        this.initPageSections();
        this.initStaticScroll();

        this.currentClientTopScroll = window.pageYOffset;
        this.clientBrowserHeight = document.documentElement.clientHeight;

        this.changeActiveSection(this.getCurrentSection());
        console.log(this.getCurrentSection());
    }

    activePageScrollMenu(){
        this.pageScrollMenu.classList.toggle('page-scroll__iner--active');
        this.menuBurger.classList.toggle('header__menu-button--active-page-scroll');

        this.pageSections.forEach(sec => {
            let navIner = sec.html.querySelector('.section__nav-iner');
            navIner.classList.toggle('section__nav-iner--hidden');
        })
    }

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

    scrollFollower(){
        if(this.isActiveScroll)
            return;
        this.blockScroll();
        let newActiveSection = this.getCurrentSection();
        if(this.activeSection != newActiveSection)
            this.changeActiveSection(newActiveSection);
        
        console.log(newActiveSection);

        // console.log(this.isAvailableScrollJump());

        // if(this.isTopScroll() && this.isAvailableScrollJump(true))
        //     this.moveToPreviousSection();
        // else if (this.isAvailableScrollJump())
        //     this.moveToNextSection(false);
    }
    moveToActiveSection(){
        let sec = this.pageSections[this.activeSection];
        let pozition = 0;
        if(sec.height <= this.clientBrowserHeight ){
            pozition = sec.topPosition - ((this.clientBrowserHeight - sec.height) / 2);
            console.log(sec.topPosition + ' ::: ' + pozition);
        } else {
            pozition = sec.topPosition;
        }
        window.scrollTo(0, pozition);
    }
    moveToNextSection(isJumpingToTop = true){
        if(this.activeSection < this.pageSections.length - 1){
            this.changeActiveSection(this.activeSection + 1);
            window.scrollTo(0, 
                this.pageSections[this.activeSection].topPosition);
                this.blockScroll();
        } else if(isJumpingToTop) {
            this.changeActiveSection(0);
            window.scrollTo(0, 0);
            this.blockScroll();
        }
    }
    moveToPreviousSection(){
        if(this.activeSection <= 0)
            return;
            
        this.changeActiveSection(this.activeSection - 1);
        window.scrollTo(0, 
            this.pageSections[this.activeSection].topPosition);
        this.blockScroll();
    }

    changeActiveSection(secIndex){
        this.changeNavStyle( this.pageSections[secIndex].type == 'image' );
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
        if(window.pageYOffset == 0)
            return 0;
        if(window.pageYOffset + this.clientBrowserHeight == document.documentElement.offsetHeight)
            return this.pageSections.length - 1;
        let scrinCenter = (this.clientBrowserHeight / 2) + window.pageYOffset;
        let secPosTop = scrinCenter - this.clientBrowserHeight / 3;
        let secPosBut = scrinCenter + this.clientBrowserHeight / 3;
        for(let i = 0; i < this.pageSections.length; i++ ){
            const sec = this.pageSections[i];
            if( secPosTop < (sec.height / 2) + sec.topPosition  && 
                (sec.height / 2) + sec.topPosition < secPosBut )
                    return i
        }

        // const coe = this.clientBrowserWidth > 2000 ? 3 : 2; 
        // if(this.isTopScroll()){
        //     for(let i = 0; i < this.pageSections.length; i++ ){
        //         const sec = this.pageSections[i];
        //         if( this.currentClientTopScroll > (sec.topPosition - this.clientBrowserHeight / coe) &&
        //             this.currentClientTopScroll < 
        //                 (sec.topPosition + sec.height - this.clientBrowserHeight / coe))
        //                     return(i);
        //     }
        // } else {
        //     for(let i = this.pageSections.length - 1 ; i >= 0; i-- ){
        //         const sec = this.pageSections[i];
        //         if( this.currentClientTopScroll > (sec.topPosition - this.clientBrowserHeight / coe) &&
        //             this.currentClientTopScroll < 
        //                 (sec.topPosition + sec.height - this.clientBrowserHeight / coe))
        //                     return(i);
        //     }
        // }
        
    }

    isAvailableScrollJump(isTopScroll){
        console.log('done');
        if(this.pageSections[this.activeSection].height <= this.clientBrowserHeight)
            return true;

        if(isTopScroll){
            if(this.pageSections[this.activeSection].topPosition > window.pageYOffset) 
                return true;
            return false;
        } else {
            const nextSec = this.pageSections[this.activeSection + 1];
            if(window.pageYOffset + (this.clientBrowserHeight / 1.5) > nextSec.topPosition)
                return true;
            return false;
        }
        return false;
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
        //console.log('block');
        setTimeout(() => {
            this.isActiveScroll = false;
            this.currentClientTopScroll = window.pageYOffset;
            //console.log('actine')
        }, 100);
    }
}