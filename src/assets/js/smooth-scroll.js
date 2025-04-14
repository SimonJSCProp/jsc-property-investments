export default function smoothScroll() {
    let anchorHrefs = document.querySelectorAll('a[href*="#"]:not([href="#"])');

    anchorHrefs.forEach(function(el, index){
        //valid urls should only contain a single #, other # are treated as if they are escaped
        let target = el.getAttribute('href')
        const hrefArray = target.split('#')
        const targetId = hrefArray[hrefArray.length - 1]

        //check if section with the id exist internally
        const targetExists = document.getElementById(targetId)

        //add smooth scroll handling
        if (targetExists) {
            el.addEventListener('click', function(e){
                e.preventDefault();
                
                let targetEl = document.querySelector(target);
                let headerEl = document.querySelector('.site-header');
    
                if(targetEl){
                    window.scrollTo({
                        top: window.scrollY + targetEl.getBoundingClientRect().top - (headerEl ? headerEl.getBoundingClientRect().height : 0),
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
}
