const details = document.querySelector('.details-text');
const socials = document.querySelector('.share-active');
const activeShare = document.querySelector('.share1');
const share = document.querySelector('.share');

function shareClick(e) {
    e.preventDefault();
    details.style.display = 'none';
    socials.style.display = 'flex';
}

function activeClicked(e) {
    e.preventDefault();
    details.style.display = 'flex';
    socials.style.display = 'none';
}

share.addEventListener('click', shareClick);
activeShare.addEventListener('click', activeClicked);