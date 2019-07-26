const English = document.querySelector('.english'),
      French = document.querySelector('.french'),
      Italian = document.querySelector('.italian'),
      Polish = document.querySelector('.polish'),
      language = document.querySelectorAll('.language');

    for(let i = 0; i < language.length; i++) {
        language[i].addEventListener('click', langFunc);
    }
    function langFunc() {
        for(let i = 0; i < language.length; i++) {
            language[i].classList.remove('active');
        }
        this.classList.add('active');
    }

const sliderCount = document.querySelectorAll('.slider-count__circle'),
        sliderBlockWrap = document.querySelector('.slider-block__wrap');

        sliderCount[0].style.opacity = '1';

for (let i = 0; i < sliderCount.length; i++) {
    sliderCount[i].addEventListener('click', function(e) {
            for (let i = 0; i < sliderCount.length; i++) {
                sliderCount[i].style.opacity = '0.3';
            }
            sliderCount[i].style.opacity = '1';
            if (e.target == sliderCount[0] && sliderBlockWrap.style.transform == 'translateY(-38rem)') {
                sliderBlockWrap.style.transform = 'translateY(0)';
                sliderBlockWrap.style.transition = 'all ease 0.5s';
            }
            else if (e.target == sliderCount[0] ) {
                sliderBlockWrap.style.transform = 'translateY(0)';
                sliderBlockWrap.style.transition =  'all ease 1s';
            }
            else if (e.target == sliderCount[1]) {
                sliderBlockWrap.style.transform = 'translateY(-19rem)';
                sliderBlockWrap.style.transition =  'all ease 1s';
            }
            else if (e.target == sliderCount[2]) {
                sliderBlockWrap.style.transform = 'translateY(-38rem)';
                sliderBlockWrap.style.transition =  'all ease 1s';
            }
            
    })
}