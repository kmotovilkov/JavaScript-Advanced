function notify(message) {

    let notify = document.getElementById('notification');

    notify.textContent = message;
    notify.style.display = 'block';

    setTimeout(() => {
        notify.style.display = 'none';
    }, 2000);
}