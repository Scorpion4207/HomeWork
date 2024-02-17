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

  // ==============================Слайдер header__hero
  const headerSlider = new Splide('#header__hero-splide',{
    arrows: false,
    direction: 'ttb',
    height   : '40rem',
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