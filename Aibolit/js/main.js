(() => {
  // =============================Модальное окно с городами===============================
  document.addEventListener('click', modalInit)
  function modalInit(e) {
    const modalOpen = e.target.closest('.header__geolocation')
    const modalClose = e.target.closest('.modal__cancel')
    const modal = e.target.classList.contains('modal')
    const buttonClose = e.target.closest('.modal__link')
    if (!modalClose && !modalOpen && !modal && !buttonClose) return
    if (!document.body.classList.contains('body--modal-opened') && e.target.closest('.header__geolocation')) {
      document.body.classList.add('body--modal-opened')
    } else if (e.target && e.target.closest('.modal__cancel') || e.target.closest('.modal__link') || e.target.classList.contains('modal') && document.body.classList.contains('body--modal-opened')) {
      document.body.classList.remove('body--modal-opened')
    }
  }
  document.addEventListener('keydown', modalClose)
  function modalClose(e) {
    if (e.code === 'Escape' && document.body.classList.contains('body--modal-opened')) {
      document.body.classList.remove('body--modal-opened')
    }
  }
  const modalList = document.querySelector('.modal__list')
  modalList.addEventListener('click', citySwith)
  function citySwith(e) {

    const modalLink = e.target.closest('.modal__link')
    if (!modalLink) return
    e.preventDefault();
    if (modalLink.classList.contains('modal__link--active')) return

    const modalLinkID = modalLink.getAttribute('href')
    const cityContent = document.querySelector(modalLinkID)
    const activeCityControl = document.querySelector('.modal__link--active')
    const activeContent = document.querySelector('.header__geolocation-city--show')

    if (activeCityControl) {
      activeCityControl.classList.remove('modal__link--active')
    }
    if (activeContent) {
      activeContent.classList.remove('header__geolocation-city--show')
    }

    modalLink.classList.add('modal__link--active')
    cityContent.classList.add('header__geolocation-city--show')
  }

// =============================Бургер===============================
  document.addEventListener('click', burgerInit)
  function burgerInit(e) {
      const burgerIcon = e.target.closest('.burger-icon')
      if (!burgerIcon && !burgerNavLink) return
      if (document.documentElement.clientWidth > 1200) return
      if (!document.body.classList.contains('body--opened-menu')) {
          document.body.classList.add('body--opened-menu')
      } else {
          document.body.classList.remove('body--opened-menu')
      }
  }

  const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control')
            if (!accordionControl) return
            e.preventDefault();
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null
            }
        });
    });

  // ==============================Слайдер header__hero===========================
  const headerSlider = new Splide('#header__hero-splide',{
    arrows: false,
    direction: 'ttb',
    height   : '49rem',
    wheel: true,
    type: 'fraction',
  })

  headerSlider.on( 'pagination:mounted', function ( data ) {
    // You can add your class to the UL element
    data.list.classList.add( 'splide__pagination--custom' );
  
    // `items` contains all dot items
    data.items.forEach( function ( item ) {
      item.button.textContent = String( item.page + 1 );
    } );
  } );
    
  headerSlider.mount();


})()