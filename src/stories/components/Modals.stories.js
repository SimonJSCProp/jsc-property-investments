import { initModals } from '../../assets/js/modal.js';

export default {
    title: 'Components/Modals',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'The `Modals` component displays a list of modals that can be triggered by clicking on a button. Use this component to create a modal that appears when a user interacts with a button or link. The modal can contain any content, such as text, images, or videos. The variants of this component are best viewed by using the preview for the individual module from the left side menu. The best way to preview these is to go to the individual modal page and click on the "Launch Modal" button.',
            },
        },
    },
};


export const TextModal = () => {
    setTimeout(initModals, 0);

    return `

        <div class="container p-10">
            <div class="w-full text-center">
                <button type="button" class="max-w-xs w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" data-mm-target="textModal">
                    Launch Text Modal
                </button>
            </div>
        </div>


        <div class="fixed z-[999] h-screen w-full left-0 top-0 opacity-0 pointer-events-none overflow-auto bg-black/80 hidden transition-opacity duration-300 group/modal group-[.ready]/body:block [&.is-open]:opacity-100 [&.is-open]:pointer-events-auto" id="textModal" role="dialog" aria-labelledby="textModal" aria-hidden="true">
            <div tabindex="-1" data-mm-dismiss class="w-full h-full">
                <div role="dialog" aria-modal="true" aria-labelledby="modal-textModal-title" class="h-full px-4 py-8 lg:py-10 flex justify-center items-center">
    
                    <div id="modal-textModal-content" class="m-auto w-full text-center max-w-xl bg-white translate-y-8 transition-transform duration-300 px-5 pt-10 pb-6 md:px-10 md:py-10 motion-reduce:transition-none group-[.is-open]/modal:translate-y-0">
    
                        <span data-mm-dismiss class="block text-black absolute top-4 right-4 md:top-5 md:right-5 cursor-pointer w-4">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto pointer-events-none">
                                <path d="M16.7071 1.70711C17.0976 1.31658 17.0976 0.683417 16.7071 0.292893C16.3166 -0.0976311 15.6834 -0.0976311 15.2929 0.292893L16.7071 1.70711ZM0.292893 15.2929C-0.0976311 15.6834 -0.0976311 16.3166 0.292893 16.7071C0.683417 17.0976 1.31658 17.0976 1.70711 16.7071L0.292893 15.2929ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.2929 16.7071ZM15.2929 0.292893L0.292893 15.2929L1.70711 16.7071L16.7071 1.70711L15.2929 0.292893ZM0.292893 1.70711L15.2929 16.7071L16.7071 15.2929L1.70711 0.292893L0.292893 1.70711Z" fill="black" />
                            </svg>
                        </span>
    
                        <div class="lg:text-xl">
    
                            <h3 id="modal-textModal-title" class="text-2xl lg:text-3xl mb-4 font-bold capitalize text-center">Modal 1</h3>
    
                            <p>Join lorem providers who are saving countless hours of tedious ipsum and lorem with powerful
                                ipsums.</p>
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}


export const FormModal = () => {
    setTimeout(initModals, 0);

    return `
        <div class="container p-10">
            <div class="w-full text-center">
                <button type="button" class="max-w-xs w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" data-mm-target="formPopup">
                    Open Form Modal
                </button>
            </div>
        </div>
    
        <div class="fixed z-[999] h-screen w-full left-0 top-0 opacity-0 pointer-events-none overflow-auto bg-black/80 hidden transition-opacity duration-300 group/modal group-[.ready]/body:block [&.is-open]:opacity-100 [&.is-open]:pointer-events-auto" id="formPopup" role="dialog" aria-labelledby="formPopup" aria-hidden="true">
            <div tabindex="-1" data-mm-dismiss class="w-full h-full">
                <div role="dialog" aria-modal="true" aria-labelledby="modal-1-title" class="h-full px-4 py-8 lg:py-10 flex justify-center items-center">
    
                    <div id="modal-1-content" class="m-auto w-full text-center max-w-xl bg-white translate-y-8 transition-transform duration-300 px-5 pt-10 pb-6 md:px-10 md:py-10 motion-reduce:transition-none group-[.is-open]/modal:translate-y-0">
    
                        <span data-mm-dismiss class="block text-black absolute top-4 right-4 md:top-5 md:right-5 cursor-pointer w-4">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto pointer-events-none">
                                <path d="M16.7071 1.70711C17.0976 1.31658 17.0976 0.683417 16.7071 0.292893C16.3166 -0.0976311 15.6834 -0.0976311 15.2929 0.292893L16.7071 1.70711ZM0.292893 15.2929C-0.0976311 15.6834 -0.0976311 16.3166 0.292893 16.7071C0.683417 17.0976 1.31658 17.0976 1.70711 16.7071L0.292893 15.2929ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.2929 16.7071ZM15.2929 0.292893L0.292893 15.2929L1.70711 16.7071L16.7071 1.70711L15.2929 0.292893ZM0.292893 1.70711L15.2929 16.7071L16.7071 15.2929L1.70711 0.292893L0.292893 1.70711Z" fill="black" />
                            </svg>
                        </span>
    
                        <div class="lg:text-xl">
                            <h3 id="modal-1-title" class="text-2xl lg:text-3xl font-bold leading-tight mb-5">
                                Form Popup
                            </h3>
    
                            <p class="mb-5">Join lorem providers who are saving countless hours of tedious ipsum and lorem with powerful ipsums.</p>
    
                            <form accept-charset="UTF-8" action="" class="kk-validation kk-showthankyou" id="ebook-form" method="POST">
    
                                <div class="mb-4">
                                    <label class="sr-only" for="name-m">Name*</label>
                                    <input type="text" id="name-m" class="text-lg appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " name="name" placeholder="Name*" required="">
                                </div>
                                <div class="mb-4">
                                    <label class="sr-only" for="email-m">Email*</label>
                                    <input type="email" id="email-m" class="text-lg appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " name="email" placeholder="Email*" required="">
                                </div>
    
                                <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Download My Free Copy Now</button>
    
                                <div class="form-messages mt-5  [&.error]:text-red-500 [&.success]:text-green-600">
                                </div>
                            </form>
    
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    `;
}

export const VideoModal = () => {
    setTimeout(initModals, 0);

    return `
        <div class="container p-10">
            <div class="w-full text-center">
                <button type="button" class="max-w-xs w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" data-mm-target="videoModal">
                    Open Video Modal
                </button>
            </div>
        </div>

    
        <!-- Popup Section Modal -->
        <div class="modal fixed z-[999] h-screen w-full left-0 top-0 opacity-0 pointer-events-none overflow-auto bg-black/80 hidden transition-opacity duration-300 group/modal group-[.ready]/body:block [&.is-open]:opacity-100 [&.is-open]:pointer-events-auto" id="videoModal" role="dialog" aria-labelledby="videoModal" aria-hidden="true">
            <div tabindex="-1" data-mm-dismiss class="w-full h-full">
                <div role="dialog" aria-modal="true" aria-labelledby="modal-1-title" class="h-full px-4 py-8 lg:py-10 flex justify-center items-center">
    
                    <div id="modal-videoModal-content" class="m-auto w-full text-center max-w-xl bg-white translate-y-8 transition-transform duration-300 px-5 pt-10 pb-6 md:px-10 md:py-10 motion-reduce:transition-none group-[.is-open]/modal:translate-y-0">
    
                        <span data-mm-dismiss class="block text-black absolute top-4 right-4 md:top-5 md:right-5 cursor-pointer w-4">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto pointer-events-none">
                                <path d="M16.7071 1.70711C17.0976 1.31658 17.0976 0.683417 16.7071 0.292893C16.3166 -0.0976311 15.6834 -0.0976311 15.2929 0.292893L16.7071 1.70711ZM0.292893 15.2929C-0.0976311 15.6834 -0.0976311 16.3166 0.292893 16.7071C0.683417 17.0976 1.31658 17.0976 1.70711 16.7071L0.292893 15.2929ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.2929 16.7071ZM15.2929 0.292893L0.292893 15.2929L1.70711 16.7071L16.7071 1.70711L15.2929 0.292893ZM0.292893 1.70711L15.2929 16.7071L16.7071 15.2929L1.70711 0.292893L0.292893 1.70711Z" fill="black" />
                            </svg>
                        </span>
    
                        <div class="lg:text-xl">
    
                            <h3 id="video-modal-title"  class="text-2xl lg:text-3xl font-bold leading-tight mb-5">
                                Video Modal
                            </h3>
    
                            <p>This video autoplays when the modal opens, and stops playing when the modal closes.</p>
    
                            <div class="video-preview-container relative bg-black overflow-hidden group/video mt-8">
                                <iframe class="aspect-video w-full " src="about:blank" frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
    
                                <div class="absolute top-0 left-0 w-full h-full group-[.playing]/video:hidden">
                                    <img src="placeholder-2.jpg" class="w-full h-full object-cover " />
                                </div>
    
                                <button class="w-24 p-0 m-0 border-0 appearance-none bg-none z-10 transition duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-video-trigger hover:scale-110 group-[.playing]/video:hidden" data-video-id="gvSGTP2D_Lo">
                                    <img src="icon-play.svg" class="img-fluid view-animation">
                                </button>
                            </div>
                        </div>
    
                    </div>
    
                </div>
            </div>
        </div>
    `;
}

export const LightboxModal = () => {
    setTimeout(initModals, 0);

    return `
        <div class="container p-10">
            <div class="w-full text-center">
                <button type="button" class="max-w-xs w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" data-mm-target="lightboxModal">
                    Open Video Modal
                </button>
            </div>
        </div>

    
        <!-- Work Lightbox Modal -->
        <div class="modal fixed z-[999] h-screen w-full left-0 top-0 opacity-0 pointer-events-none overflow-auto bg-black/80 hidden transition-opacity duration-300 group/modal group-[.ready]/body:block [&.is-open]:opacity-100 [&.is-open]:pointer-events-auto" id="lightboxModal" role="dialog" aria-labelledby="lightboxModal" aria-hidden="true"> 
            <div tabindex="-1" data-mm-dismiss class="w-full h-full">
                <div role="dialog" aria-modal="true" aria-labelledby="modal-1-title" class="h-full px-4 py-8 lg:py-10 flex justify-center items-center">

                    <div id="modal-videoModal-content" class="m-auto w-full text-center lg:max-w-[80%] translate-y-8 transition-transform duration-300 px-5 pt-10 pb-6 md:px-10 md:py-10 motion-reduce:transition-none group-[.is-open]/modal:translate-y-0">

                        <span data-mm-dismiss class="block text-black fixed top-1 right-1 md:top-2 md:right-2 cursor-pointer w-8">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto pointer-events-none">
                                <path d="M16.7071 1.70711C17.0976 1.31658 17.0976 0.683417 16.7071 0.292893C16.3166 -0.0976311 15.6834 -0.0976311 15.2929 0.292893L16.7071 1.70711ZM0.292893 15.2929C-0.0976311 15.6834 -0.0976311 16.3166 0.292893 16.7071C0.683417 17.0976 1.31658 17.0976 1.70711 16.7071L0.292893 15.2929ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.2929 16.7071ZM15.2929 0.292893L0.292893 15.2929L1.70711 16.7071L16.7071 1.70711L15.2929 0.292893ZM0.292893 1.70711L15.2929 16.7071L16.7071 15.2929L1.70711 0.292893L0.292893 1.70711Z" fill="white" />
                            </svg>
                        </span>

                        <div class="lg:text-xl">
                            <div class="lightbox-swiper-container max-w-[1100px] mx-auto relative px-[1.4rem]
                                [&_img]:block [&_img]:mx-auto [&_img]:select-none
                                [&_.main-swiper_.swiper-wrapper]:items-stretch
                                [&_.main-swiper_.swiper-slide]:h-auto
                                [&_.main-swiper_.swiper-slide_img]:w-[100%] [&_.main-swiper_.swiper-slide_img]:h-[100%] [&_.main-swiper_.swiper-slide_img]:object-contain
                                [&_.thumb-swiper]:mt-[2rem]
                                [&_.thumb-swiper_.swiper-wrapper]:grid [&_.thumb-swiper_.swiper-wrapper]:grid-cols-5 [&_.thumb-swiper_.swiper-wrapper]:gap-x-[0.5rem] [&_.thumb-swiper_.swiper-wrapper]:gap-y-[0.5rem]
                                [&_.thumb-swiper_.swiper-slide]:max-w-[100%] [&_.thumb-swiper_.swiper-slide]:w-[100%]
                                [&_.thumb-swiper_img]:h-[100%] [&_.thumb-swiper_img]:object-cover">
                                <div class="swiper main-swiper overflow-hidden swiper-initialized swiper-horizontal swiper-backface-hidden">
                                    <div class="swiper-wrapper"
                                        style="transition-duration: 0ms; transform: translate3d(-2110px, 0px, 0px); transition-delay: 0ms;">
                                        <div class="swiper-slide" data-swiper-slide-index="9" style="width: 1055px;">
                                            <img src="placeholder.png">
                                        </div>
                                        <div class="swiper-slide" data-swiper-slide-index="9" style="width: 1055px;">
                                            <img src="placeholder.png">
                                        </div>
                                        <div class="swiper-slide" data-swiper-slide-index="9" style="width: 1055px;">
                                            <img src="placeholder.png">
                                        </div>
                                        <div class="swiper-slide" data-swiper-slide-index="9" style="width: 1055px;">
                                            <img src="placeholder.png">
                                        </div>
                                        <div class="swiper-slide" data-swiper-slide-index="9" style="width: 1055px;">
                                            <img src="placeholder.png">
                                        </div>
                                        <div class="swiper-slide" data-swiper-slide-index="9" style="width: 1055px;">
                                            <img src="placeholder.png">
                                        </div>
                                        <div class="swiper-slide" data-swiper-slide-index="9" style="width: 1055px;">
                                            <img src="placeholder.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper thumb-swiper swiper-initialized swiper-horizontal swiper-grid swiper-backface-hidden swiper-thumbs">
                                    <div class="swiper-wrapper"
                                        style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms; transition-delay: 0ms;">
                                        <div class="swiper-slide swiper-slide-visible swiper-slide-fully-visible" style="width: 211px;">
                                            <img src="placeholder.png">
                                        </div>
                                        <div class="swiper-slide swiper-slide-visible swiper-slide-fully-visible" style="width: 211px;">
                                            <img src="placeholder.png">
                                        </div>
                                        <div class="swiper-slide swiper-slide-visible swiper-slide-fully-visible" style="width: 211px;">
                                            <img src="placeholder.png">
                                        </div>
                                        <div class="swiper-slide swiper-slide-visible swiper-slide-fully-visible" style="width: 211px;">
                                            <img src="placeholder.png">
                                        </div>
                                        <div class="swiper-slide swiper-slide-visible swiper-slide-fully-visible" style="width: 211px;">
                                            <img src="placeholder.png">
                                        </div>
                                        <div class="swiper-slide swiper-slide-visible swiper-slide-fully-visible" style="width: 211px;">
                                            <img src="placeholder.png">
                                        </div>
                                        <div class="swiper-slide swiper-slide-visible swiper-slide-fully-visible" style="width: 211px;">
                                            <img src="placeholder.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-button-prev w-[2.2rem] lg:w-[3rem] h-auto cursor-pointer absolute left-[-1.6rem] lg:left-[-4rem] bottom-[12%] lg:bottom-[10.5%]">
                                    <svg viewBox="0 0 32 33" fill="none"><circle cx="15.6682" cy="15.6682" r="14.8213" transform="matrix(-1 0 0 1 31.3359 0.811035)" stroke="white" stroke-width="1.69386"></circle><path d="M9.56609 16.6753C9.23534 16.3445 9.23534 15.8083 9.56609 15.4775L14.9559 10.0877C15.2867 9.75697 15.8229 9.75697 16.1537 10.0877C16.4844 10.4185 16.4844 10.9547 16.1537 11.2855L11.3627 16.0764L16.1537 20.8674C16.4844 21.1981 16.4844 21.7344 16.1537 22.0651C15.8229 22.3959 15.2867 22.3959 14.9559 22.0651L9.56609 16.6753ZM20.3281 16.9233H10.165V15.2295H20.3281V16.9233Z" fill="white"></path></svg>
                                </div>
                                <div class="swiper-button-next w-[2.2rem] lg:w-[3rem] h-auto cursor-pointer absolute right-[-1.6rem] lg:right-[-4rem] bottom-[12%] lg:bottom-[10.5%] scale-x-[-1]">
                                    <svg viewBox="0 0 32 33" fill="none"><circle cx="15.6682" cy="15.6682" r="14.8213" transform="matrix(-1 0 0 1 31.3359 0.811035)" stroke="white" stroke-width="1.69386"></circle><path d="M9.56609 16.6753C9.23534 16.3445 9.23534 15.8083 9.56609 15.4775L14.9559 10.0877C15.2867 9.75697 15.8229 9.75697 16.1537 10.0877C16.4844 10.4185 16.4844 10.9547 16.1537 11.2855L11.3627 16.0764L16.1537 20.8674C16.4844 21.1981 16.4844 21.7344 16.1537 22.0651C15.8229 22.3959 15.2867 22.3959 14.9559 22.0651L9.56609 16.6753ZM20.3281 16.9233H10.165V15.2295H20.3281V16.9233Z" fill="white"></path></svg>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}