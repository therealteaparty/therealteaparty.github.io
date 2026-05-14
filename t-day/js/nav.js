function openNav() {
    let fullHeight = document.querySelector('html').scrollHeight;
    let fullWidth = document.querySelector('html').scrollWidth;
    let allOverBKG = document.querySelector('.all-over-bkg');

    if (fullWidth <= 768) {
        document.querySelector('#side-panel').style.width = "100%";
    } else {
        document.querySelector('#side-panel').style.width = "350px";
    }

    document.querySelector('.all-over-bkg').classList.add('is-visible');
    allOverBKG.style.height = `${fullHeight}px`;
    document.querySelector('main').classList.add('is-pushed-over');
}

function closeNav() {
    document.querySelector('#side-panel').style.width = "0";
    document.querySelector('.all-over-bkg').classList.remove('is-visible');
    document.querySelector('main').classList.remove('is-pushed-over');
}

document.querySelector('.open-button').addEventListener('click', openNav);
document.querySelector('.close-button').addEventListener('click', closeNav);
window.addEventListener('resize', closeNav);