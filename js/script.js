/* 
    Batu Adventure - Main Javascript Logic
    Interactive features for a premium UX
*/

document.addEventListener('DOMContentLoaded', () => {

    // 1. Back to Top Button Logic
    const floatUp = document.querySelector('.float-up');
    if (floatUp) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) {
                floatUp.style.display = 'flex';
            } else {
                floatUp.style.display = 'none';
            }
        });

        floatUp.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 2. Table of Contents (TOC) Generator
    const tocList = document.querySelector('.toc-list');
    const articleBody = document.querySelector('.article-body');

    if (tocList && articleBody) {
        const headers = articleBody.querySelectorAll('h2, h3');
        let tocContent = '<ul class="list-unstyled mb-0">';

        headers.forEach((h, i) => {
            const id = `heading-${i}`;
            h.setAttribute('id', id);

            const indent = h.tagName === 'H3' ? 'ms-4' : 'ms-0 fw-bold';
            tocContent += `<li class="mb-2 ${indent}"><a href="#${id}" class="text-decoration-none text-dark">${h.innerText}</a></li>`;
        });

        tocContent += '</ul>';
        tocList.innerHTML = tocContent;
    }

    // 3. TOC Toggle Mechanism
    const tocToggle = document.querySelector('.toc-toggle');
    if (tocToggle) {
        const tocTarget = document.querySelector('.toc-content');
        tocToggle.addEventListener('click', () => {
            tocTarget.classList.toggle('d-none');
            const icon = tocToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            }
        });
    }

    // 4. Social Sharing Logic
    const shareBtns = document.querySelectorAll('.share-btn');
    shareBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = btn.dataset.platform;
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);

            let shareUrl = '';
            switch (platform) {
                case 'whatsapp': shareUrl = `https://wa.me/?text=${title}%20${url}`; break;
                case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`; break;
                case 'twitter': shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`; break;
            }

            if (shareUrl) window.open(shareUrl, '_blank');
        });
    });

});
