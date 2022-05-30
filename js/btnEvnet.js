(function(){
    const boxEl = document.querySelector('.con')
    const on_buttonEl = document.querySelector('.add_color')
    const remove_buttonEl = document.querySelector('.remove_color')


    const handleOn = () => boxEl.classList.add('on')
    const handleRemove = () => boxEl.classList.remove('on')


    on_buttonEl.addEventListener('click', handleOn)
    remove_buttonEl.addEventListener('click', handleRemove) 
})()