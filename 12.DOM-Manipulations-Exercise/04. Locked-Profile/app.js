function lockedProfile() {

    document.querySelector('main').addEventListener('click', onClick);


    function onClick(e) {
        if (e.target.nodeName === 'BUTTON') {
            const parent = e.target.parentNode;

            let lock = parent.querySelector('input[type="radio"][value="lock"]');

            if (lock.checked) {
                return;
            }
            const hiddenFields = Array.from(parent.querySelectorAll('div')).filter(div => div.id.includes('HiddenFields'))[0];

            if (hiddenFields.style.display !== 'block') {
                hiddenFields.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                hiddenFields.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}