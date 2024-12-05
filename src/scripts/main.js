const btns = document.querySelectorAll('.content__btn'),
    firstBlock = document.querySelector('.main__content-right-first'),
    secondBlock = document.querySelector('.main__content-right-second')

    btns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const target = e.target;
            const btnText = document.querySelectorAll('.content__btn-text')

            btns.forEach(item => {
                item.classList.remove('active__btn')

                btnText.forEach(text => {
                    text.style.backgroundColor = 'inherit'
                })
            })

            if(target.tagName == 'P'){
                target.closest('.content__btn').classList.add('active__btn')
            }

            target.classList.add('active__btn')

            const id = btn.getAttribute('data-btn');
            
            if(id == 1){
                firstBlock.style.display = "block";
                secondBlock.style.display = "none";
            }
            if(id == 2){
                firstBlock.style.display = "none";
                secondBlock.style.display = "block"
            }
        })
    })