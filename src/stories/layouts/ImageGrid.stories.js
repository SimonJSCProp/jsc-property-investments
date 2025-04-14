export default {
    title: 'Layouts/Image Grid',
    render: (args) => {

    }
}

export const ImageGrid = () => {
    return `
        <section class="bg-gray-100 py-16">
            <div class="container px-4">
                <div class="flex flex-wrap justify-center mb-4">
                    <div class="col-sm-12">
                        <h2 class="text-3xl lg:text-4xl mb-4 leading-tight font-bold capitalize text-center">
                            Image Grid
                        </h2>
                    </div>
                </div>
    
                <div class="flex flex-wrap justify-center items-center -mx-2">
                    <div class="w-full xl:w-10/12">
                        <div class="flex flex-wrap mb-4 md:mb-0">
                            <div class="w-1/2 lg:w-1/4 mb-4 px-2">
                                <img class="w-full" src="placeholder.png">
                            </div>
                            <div class="w-1/2 lg:w-1/4 mb-4 px-2">
                                <img class="w-full" src="placeholder.png">
                            </div>
                            <div class="w-1/2 lg:w-1/4 mb-4 px-2">
                                <img class="w-full" src="placeholder.png">
                            </div>
                            <div class="w-1/2 lg:w-1/4 mb-4 px-2">
                                <img class="w-full" src="placeholder.png">
                            </div>
                            <div class="w-1/2 lg:w-1/4 mb-4 px-2">
                                <img class="w-full" src="placeholder.png">
                            </div>
                            <div class="w-1/2 lg:w-1/4 mb-4 px-2">
                                <img class="w-full" src="placeholder.png">
                            </div>
                            <div class="w-1/2 lg:w-1/4 mb-4 px-2">
                                <img class="w-full" src="placeholder.png">
                            </div>
                            <div class="w-1/2 lg:w-1/4 mb-4 px-2">
                                <img class="w-full" src="placeholder.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

export const ImageGridWithOverlay = () => {
    return `
    <section class="bg-dark text-light py-16 pb-8 lg:py-20 lg:pt-[8rem]" id="image-grid">
        <div class="container px-[20px]">
            <div class="relative">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-y-3 lg:gap-2 [&>div]:overflow-hidden [&>div]:h-[16rem] [&>div]:relative [&>div]:text-center text-white
                    [&_.brand-overlay]:opacity-0 [&_.brand-overlay]:absolute [&_.brand-overlay]:top-0 [&_.brand-overlay]:left-0 [&_.brand-overlay]:right-0 [&_.brand-overlay]:bottom-0 [&_.brand-overlay]:transition [&_.brand-overlay]:p-[0.4rem]
                    [&_.brand-overlay]:bg-[#000000bf] [&_.brand-overlay]:flex [&_.brand-overlay]:items-center [&_.brand-overlay]:justify-center [&_.brand-overlay]:flex-col [&_.brand-overlay]:cursor-pointer
                    [&_.brand-overlay_span]:text-[2.2rem] [&_.brand-overlay_span]:font-bold [&_.brand-overlay_span]:mb-[1rem] [&_.brand-overlay_span]:leading-[2.4rem]
                    [&_.brand-overlay_ul]:flex [&_.brand-overlay_ul]:flex-wrap [&_.brand-overlay_ul]:justify-center
                    [&_.brand-overlay_li]:border [&_.brand-overlay_li]:border-white [&_.brand-overlay_li]:py-[.4rem] [&_.brand-overlay_li]:px-[0.8rem] [&_.brand-overlay_li]:text-[0.8rem] [&_.brand-overlay_li]:mx-[0.25rem] [&_.brand-overlay_li]:mb-[0.5rem]"> 
                    <div class="hover:[&_img]:scale-110 [&_img]:transition [&>.brand-overlay]:hover:opacity-100" data-mm-target="workModal">
                        <img src="placeholder.png" alt="project image" class="w-full h-full object-cover" />
                        <div class="brand-overlay">
                            <span>BRAND/PROJECT</span>
                            <ul>
                                <li>Brand Identity</li>
                                <li>Strategy</li>
                                <li>Logo Design</li>
                            </ul>
                        </div>
                    </div>
                    <div class="hover:[&_img]:scale-110 [&_img]:transition [&>.brand-overlay]:hover:opacity-100" data-mm-target="workModal">
                        <img src="placeholder.png" alt="project image" class="w-full h-full object-cover" />
                        <div class="brand-overlay">
                            <span>BRAND/PROJECT</span>
                            <ul>
                                <li>Brand Identity</li>
                                <li>Strategy</li>
                                <li>Logo Design</li>
                            </ul>
                        </div>
                    </div>
                    <div class="hover:[&_img]:scale-110 [&_img]:transition [&>.brand-overlay]:hover:opacity-100" data-mm-target="workModal">
                        <img src="placeholder.png" alt="project image" class="w-full h-full object-cover" />
                        <div class="brand-overlay">
                            <span>BRAND/PROJECT</span>
                            <ul>
                                <li>Brand Identity</li>
                                <li>Strategy</li>
                                <li>Logo Design</li>
                            </ul>
                        </div>
                    </div>
                    <div class="hover:[&_img]:scale-110 [&_img]:transition [&>.brand-overlay]:hover:opacity-100" data-mm-target="workModal">
                        <img src="placeholder.png" alt="project image" class="w-full h-full object-cover" />
                        <div class="brand-overlay">
                            <span>BRAND/PROJECT</span>
                            <ul>
                                <li>Brand Identity</li>
                                <li>Strategy</li>
                                <li>Logo Design</li>
                            </ul>
                        </div>
                    </div>
                    <div class="hover:[&_img]:scale-110 [&_img]:transition [&>.brand-overlay]:hover:opacity-100" data-mm-target="workModal">
                        <img src="placeholder.png" alt="project image" class="w-full h-full object-cover" />
                        <div class="brand-overlay">
                            <span>BRAND/PROJECT</span>
                            <ul>
                                <li>Brand Identity</li>
                                <li>Strategy</li>
                                <li>Logo Design</li>
                            </ul>
                        </div>
                    </div>
                    <div class="hover:[&_img]:scale-110 [&_img]:transition [&>.brand-overlay]:hover:opacity-100" data-mm-target="workModal">
                        <img src="placeholder.png" alt="project image" class="w-full h-full object-cover" />
                        <div class="brand-overlay">
                            <span>BRAND/PROJECT</span>
                            <ul>
                                <li>Brand Identity</li>
                                <li>Strategy</li>
                                <li>Logo Design</li>
                            </ul>
                        </div>
                    </div>
                    <div class="hover:[&_img]:scale-110 [&_img]:transition [&>.brand-overlay]:hover:opacity-100" data-mm-target="workModal">
                        <img src="placeholder.png" alt="project image" class="w-full h-full object-cover" />
                        <div class="brand-overlay">
                            <span>BRAND/PROJECT</span>
                            <ul>
                                <li>Brand Identity</li>
                                <li>Strategy</li>
                                <li>Logo Design</li>
                            </ul>
                        </div>
                    </div>
                     <div class="hover:[&_img]:scale-110 [&_img]:transition [&>.brand-overlay]:hover:opacity-100" data-mm-target="workModal">
                        <img src="placeholder.png" alt="project image" class="w-full h-full object-cover" />
                        <div class="brand-overlay">
                            <span>BRAND/PROJECT</span>
                            <ul>
                                <li>Brand Identity</li>
                                <li>Strategy</li>
                                <li>Logo Design</li>
                            </ul>
                        </div>
                    </div>
                    <div class="hover:[&_img]:scale-110 [&_img]:transition [&>.brand-overlay]:hover:opacity-100" data-mm-target="workModal">
                        <img src="placeholder.png" alt="project image" class="w-full h-full object-cover" />
                        <div class="brand-overlay">
                            <span>BRAND/PROJECT</span>
                            <ul>
                                <li>Brand Identity</li>
                                <li>Strategy</li>
                                <li>Logo Design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

export const ResponsiveLogos = () => {
    return `
        <section class="py-8">
            <h2 class="text-center text-3xl uppercase font-bold tracking-tight mb-2 text-[#292c2e]">
                Trusted by the biggest names in the business
            </h2>
            <div class="flex flex-wrap justify-center align-center gap-[1rem] max-w-[1000px] mx-auto
                [&>div]:bg-white [&>div]:shadow-xl [&>div]:rounded-lg [&>div]:px-8 [&>div]:py-5
                [&_img]:w-auto [&_img]:max-h-[2rem]">
                <div>
                    <img src="logo.png" alt="">
                </div>
                <div>
                    <img src="logo.png" alt="">
                </div>
                <div>
                    <img src="logo.png" alt="">
                </div>
                <div>
                    <img src="logo.png" alt="">
                </div>
                <div>
                    <img src="logo.png" alt="">
                </div>
            </div>
        </section>
    `;
};

export const ImageMasonry = () => {
    return `
        <section class="px-[10px] py-8">
            <div class="grid grid-cols-3 gap-[10px] max-w-[1400px] mx-auto h-[500px] md:h-[800px]">
                <div class="flex flex-col gap-y-[10px]">
                    <div class="flex flex-grow rounded-lg overflow-hidden">
                        <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                    </div>
                    <div class="flex flex-shrink-0 rounded-lg overflow-hidden h-[40%]">
                        <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                    </div>
                </div>
                <div class="flex flex-col gap-y-[10px]">
                    <div class="flex rounded-lg overflow-hidden h-[33%]">
                        <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                    </div>
                    <div class="flex flex-grow rounded-lg overflow-hidden">
                        <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                    </div>
                    <div class="flex rounded-lg overflow-hidden h-[28%]">
                        <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                    </div>
                </div>
                <div class="flex flex-col gap-y-[10px]">
                    <div class="flex rounded-lg overflow-hidden h-[40%]">
                        <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                    </div>
                    <div class="flex flex-grow rounded-lg overflow-hidden">
                        <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                    </div>
                </div>
            </div>
        </section>
    `;
};

export const MasonryWithText = () => {
    return `
        <section class="flex flex-col gap-y-[10px] max-w-[800px] mx-auto px-[10px] py-8">
            <div class="grid grid-cols-[1.25fr_3fr] gap-x-[10px]">
                <div class="relative h-[150px] md:h-[250px] h-full overflow-hidden rounded-lg">
                    <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                    <div class="w-full absolute top-0 left-0 px-5 py-4 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent via-[rgba(0,0,0,0.4)]">
                        <span class="text-white font-bold text-md md:text-xl capitalize">placeholder text</span>
                    </div>
                </div>
                <div class="h-[150px] md:h-[250px] h-full overflow-hidden rounded-lg">
                    <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                </div>
            </div>
            <div class="grid grid-cols-3 gap-x-[10px]">
                <div class="h-[150px] md:h-[250px] h-full overflow-hidden rounded-lg">
                    <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                </div>
                <div class="relative h-[150px] md:h-[250px] h-full overflow-hidden rounded-lg">
                    <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                    <div class="w-full absolute top-0 left-0 px-5 py-4 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent via-[rgba(0,0,0,0.4)]">
                        <span class="text-white font-bold text-md md:text-xl capitalize">placeholder text</span>
                    </div>
                </div>
                <div class="h-[150px] md:h-[250px] h-full overflow-hidden rounded-lg">
                    <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                </div>
            </div>
            <div class="grid grid-cols-[3fr_1.25fr] gap-x-[10px]">
                <div class="relative h-[150px] md:h-[250px] h-full overflow-hidden rounded-lg">
                    <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                    <div class="w-full absolute top-0 left-0 px-5 py-4 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent via-[rgba(0,0,0,0.4)]">
                        <span class="text-white font-bold text-md md:text-xl capitalize">placeholder text</span>
                    </div>
                </div>
                <div class="relative h-[150px] md:h-[250px] h-full overflow-hidden rounded-lg">
                    <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                    <div class="w-full absolute bottom-0 left-0 px-5 py-4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent via-[rgba(0,0,0,0.4)]">
                        <span class="text-white font-bold text-md md:text-xl capitalize">placeholder text</span>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-x-[10px]">
                <div class="h-[150px] md:h-[250px] h-full overflow-hidden rounded-lg">
                    <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                </div>
                <div class="h-[150px] md:h-[250px] h-full overflow-hidden rounded-lg">
                    <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                </div>
                <div class="h-[150px] md:h-[250px] h-full overflow-hidden rounded-lg">
                    <img src="placeholder.png" alt="" class="object-cover w-full h-full origin-center scale-1 hover:scale-[1.2] transition-all duration-500 select-none">
                </div>
            </div>
        </section>
    `;
}

export const VideoThumbnailGrid = () => {
    return `
        <section class="px-[10px] py-8">
            <div class="grid gap-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1000px] mx-auto">
                <div class="overflow-hidden rounded-lg bg-black">
                    <div class="h-[170px] relative bg-black overflow-hidden group/video">
                        <iframe class="aspect-video w-full" src="about:blank" frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
        
                        <div class="absolute top-0 left-0 w-full h-full group-[.playing]/video:hidden inline-video-trigger cursor-pointer opacity-40 transition all duration-200 group-hover/video:opacity-100" data-video-id="gvSGTP2D_Lo">
                            <video width="100%" muted="" autoplay="" playsinline="" loop="" data-js-modal-trigger="free-training">
                                <source src="https://kingkong.co/wp-content/uploads/2024/04/vsl-2024-preview.mp4" type="video/mp4">
                            </video>
                        </div>
        
                        <button class="w-[90px] p-0 m-0 border-0 appearance-none bg-none z-10 transition duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 group-hover/video:scale-110 group-[.playing]/video:hidden pointer-events-none">
                            <svg viewBox="0 0 183 183" fill="none" class=""><circle opacity=".2" cx="91.605" cy="91.267" r="91.099" fill="#4AC186"></circle><circle cx="91.605" cy="91.266" r="62.113" fill="#4AC186"></circle><path d="M112.311 92.302l-31.057 17.93v-35.86l31.057 17.93z" fill="#fff"></path></svg>
                        </button>
                    </div>
                    <div class="flex flex-col justify-between h-[130px] p-4 bg-[#202020]">
                        <span class="block text-lg font-semibold text-white">Placeholder Video Title</span>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center">
                                <img src="placeholder.png" alt="" class="w-[30px] h-[30px] rounded-full object-cover mr-2">
                                <span class="text-sm font-semibold text-white">Channel Name</span>
                            </div>
                            <div>
                                <span class="text-gray-400 text-sm">
                                    90.0k Subscribers
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overflow-hidden rounded-lg bg-black">
                <div class="h-[170px] relative bg-black overflow-hidden group/video">
                    <iframe class="aspect-video w-full" src="about:blank" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
    
                    <div class="absolute top-0 left-0 w-full h-full group-[.playing]/video:hidden inline-video-trigger cursor-pointer opacity-40 transition all duration-200 group-hover/video:opacity-100" data-video-id="gvSGTP2D_Lo">
                        <video width="100%" muted="" autoplay="" playsinline="" loop="" data-js-modal-trigger="free-training">
                            <source src="https://kingkong.co/wp-content/uploads/2024/04/vsl-2024-preview.mp4" type="video/mp4">
                        </video>
                    </div>
    
                    <button class="w-[90px] p-0 m-0 border-0 appearance-none bg-none z-10 transition duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 group-hover/video:scale-110 group-[.playing]/video:hidden pointer-events-none">
                        <svg viewBox="0 0 183 183" fill="none" class=""><circle opacity=".2" cx="91.605" cy="91.267" r="91.099" fill="#4AC186"></circle><circle cx="91.605" cy="91.266" r="62.113" fill="#4AC186"></circle><path d="M112.311 92.302l-31.057 17.93v-35.86l31.057 17.93z" fill="#fff"></path></svg>
                    </button>
                </div>
                <div class="flex flex-col justify-between h-[130px] p-4 bg-[#202020]">
                    <span class="block text-lg font-semibold text-white">Placeholder Video Title</span>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <img src="placeholder.png" alt="" class="w-[30px] h-[30px] rounded-full object-cover mr-2">
                            <span class="text-sm font-semibold text-white">Channel Name</span>
                        </div>
                        <div>
                            <span class="text-gray-400 text-sm">
                                90.0k Subscribers
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden rounded-lg bg-black">
                <div class="h-[170px] relative bg-black overflow-hidden group/video">
                    <iframe class="aspect-video w-full" src="about:blank" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
    
                    <div class="absolute top-0 left-0 w-full h-full group-[.playing]/video:hidden inline-video-trigger cursor-pointer opacity-40 transition all duration-200 group-hover/video:opacity-100" data-video-id="gvSGTP2D_Lo">
                        <video width="100%" muted="" autoplay="" playsinline="" loop="" data-js-modal-trigger="free-training">
                            <source src="https://kingkong.co/wp-content/uploads/2024/04/vsl-2024-preview.mp4" type="video/mp4">
                        </video>
                    </div>
    
                    <button class="w-[90px] p-0 m-0 border-0 appearance-none bg-none z-10 transition duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 group-hover/video:scale-110 group-[.playing]/video:hidden pointer-events-none">
                        <svg viewBox="0 0 183 183" fill="none" class=""><circle opacity=".2" cx="91.605" cy="91.267" r="91.099" fill="#4AC186"></circle><circle cx="91.605" cy="91.266" r="62.113" fill="#4AC186"></circle><path d="M112.311 92.302l-31.057 17.93v-35.86l31.057 17.93z" fill="#fff"></path></svg>
                    </button>
                </div>
                <div class="flex flex-col justify-between h-[130px] p-4 bg-[#202020]">
                    <span class="block text-lg font-semibold text-white">Placeholder Video Title</span>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <img src="placeholder.png" alt="" class="w-[30px] h-[30px] rounded-full object-cover mr-2">
                            <span class="text-sm font-semibold text-white">Channel Name</span>
                        </div>
                        <div>
                            <span class="text-gray-400 text-sm">
                                90.0k Subscribers
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden rounded-lg bg-black">
                <div class="h-[170px] relative bg-black overflow-hidden group/video">
                    <iframe class="aspect-video w-full" src="about:blank" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
    
                    <div class="absolute top-0 left-0 w-full h-full group-[.playing]/video:hidden inline-video-trigger cursor-pointer opacity-40 transition all duration-200 group-hover/video:opacity-100" data-video-id="gvSGTP2D_Lo">
                        <video width="100%" muted="" autoplay="" playsinline="" loop="" data-js-modal-trigger="free-training">
                            <source src="https://kingkong.co/wp-content/uploads/2024/04/vsl-2024-preview.mp4" type="video/mp4">
                        </video>
                    </div>
    
                    <button class="w-[90px] p-0 m-0 border-0 appearance-none bg-none z-10 transition duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 group-hover/video:scale-110 group-[.playing]/video:hidden pointer-events-none">
                        <svg viewBox="0 0 183 183" fill="none" class=""><circle opacity=".2" cx="91.605" cy="91.267" r="91.099" fill="#4AC186"></circle><circle cx="91.605" cy="91.266" r="62.113" fill="#4AC186"></circle><path d="M112.311 92.302l-31.057 17.93v-35.86l31.057 17.93z" fill="#fff"></path></svg>
                    </button>
                </div>
                <div class="flex flex-col justify-between h-[130px] p-4 bg-[#202020]">
                    <span class="block text-lg font-semibold text-white">Placeholder Video Title</span>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <img src="placeholder.png" alt="" class="w-[30px] h-[30px] rounded-full object-cover mr-2">
                            <span class="text-sm font-semibold text-white">Channel Name</span>
                        </div>
                        <div>
                            <span class="text-gray-400 text-sm">
                                90.0k Subscribers
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden rounded-lg bg-black">
                <div class="h-[170px] relative bg-black overflow-hidden group/video">
                    <iframe class="aspect-video w-full" src="about:blank" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
    
                    <div class="absolute top-0 left-0 w-full h-full group-[.playing]/video:hidden inline-video-trigger cursor-pointer opacity-40 transition all duration-200 group-hover/video:opacity-100" data-video-id="gvSGTP2D_Lo">
                        <video width="100%" muted="" autoplay="" playsinline="" loop="" data-js-modal-trigger="free-training">
                            <source src="https://kingkong.co/wp-content/uploads/2024/04/vsl-2024-preview.mp4" type="video/mp4">
                        </video>
                    </div>
    
                    <button class="w-[90px] p-0 m-0 border-0 appearance-none bg-none z-10 transition duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 group-hover/video:scale-110 group-[.playing]/video:hidden pointer-events-none">
                        <svg viewBox="0 0 183 183" fill="none" class=""><circle opacity=".2" cx="91.605" cy="91.267" r="91.099" fill="#4AC186"></circle><circle cx="91.605" cy="91.266" r="62.113" fill="#4AC186"></circle><path d="M112.311 92.302l-31.057 17.93v-35.86l31.057 17.93z" fill="#fff"></path></svg>
                    </button>
                </div>
                <div class="flex flex-col justify-between h-[130px] p-4 bg-[#202020]">
                    <span class="block text-lg font-semibold text-white">Placeholder Video Title</span>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <img src="placeholder.png" alt="" class="w-[30px] h-[30px] rounded-full object-cover mr-2">
                            <span class="text-sm font-semibold text-white">Channel Name</span>
                        </div>
                        <div>
                            <span class="text-gray-400 text-sm">
                                90.0k Subscribers
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden rounded-lg bg-black">
                <div class="h-[170px] relative bg-black overflow-hidden group/video">
                    <iframe class="aspect-video w-full" src="about:blank" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
    
                    <div class="absolute top-0 left-0 w-full h-full group-[.playing]/video:hidden inline-video-trigger cursor-pointer opacity-40 transition all duration-200 group-hover/video:opacity-100" data-video-id="gvSGTP2D_Lo">
                        <video width="100%" muted="" autoplay="" playsinline="" loop="" data-js-modal-trigger="free-training">
                            <source src="https://kingkong.co/wp-content/uploads/2024/04/vsl-2024-preview.mp4" type="video/mp4">
                        </video>
                    </div>
    
                    <button class="w-[90px] p-0 m-0 border-0 appearance-none bg-none z-10 transition duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 group-hover/video:scale-110 group-[.playing]/video:hidden pointer-events-none">
                        <svg viewBox="0 0 183 183" fill="none" class=""><circle opacity=".2" cx="91.605" cy="91.267" r="91.099" fill="#4AC186"></circle><circle cx="91.605" cy="91.266" r="62.113" fill="#4AC186"></circle><path d="M112.311 92.302l-31.057 17.93v-35.86l31.057 17.93z" fill="#fff"></path></svg>
                    </button>
                </div>
                <div class="flex flex-col justify-between h-[130px] p-4 bg-[#202020]">
                    <span class="block text-lg font-semibold text-white">Placeholder Video Title</span>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <img src="placeholder.png" alt="" class="w-[30px] h-[30px] rounded-full object-cover mr-2">
                            <span class="text-sm font-semibold text-white">Channel Name</span>
                        </div>
                        <div>
                            <span class="text-gray-400 text-sm">
                                90.0k Subscribers
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    `;
}

export const VideoThumbnailGridAlt = () => {
    return `
        <section class="px-[10px] py-8">
            <div class="grid gap-[10px] grid-cols-1 max-w-[700px] mx-auto">
                <div class="flex overflow-hidden rounded-lg bg-black">
                    <div class="w-auto h-auto relative bg-black overflow-hidden group/video">
                        <iframe class="aspect-video w-full" src="about:blank" frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
        
                        <div class="absolute top-0 left-0 w-full h-full group-[.playing]/video:hidden inline-video-trigger cursor-pointer opacity-40 transition all duration-200 group-hover/video:opacity-100" data-video-id="gvSGTP2D_Lo">
                            <video width="100%" muted="" autoplay="" playsinline="" loop="" data-js-modal-trigger="free-training">
                                <source src="https://kingkong.co/wp-content/uploads/2024/04/vsl-2024-preview.mp4" type="video/mp4">
                            </video>
                        </div>
        
                        <button class="w-[90px] p-0 m-0 border-0 appearance-none bg-none z-10 transition duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 group-hover/video:scale-110 group-[.playing]/video:hidden pointer-events-none">
                            <svg viewBox="0 0 183 183" fill="none" class=""><circle opacity=".2" cx="91.605" cy="91.267" r="91.099" fill="#4AC186"></circle><circle cx="91.605" cy="91.266" r="62.113" fill="#4AC186"></circle><path d="M112.311 92.302l-31.057 17.93v-35.86l31.057 17.93z" fill="#fff"></path></svg>
                        </button>
                    </div>
                    <div class="flex flex-grow flex-col justify-between h-full p-4 bg-[#202020]">
                        <div>
                            <span class="block text-sm font-medium text-white">Placeholder Video Title</span>
                            <span class="block text-lg font-semibold text-white">Placeholder Video Title</span>
                            <p class="text-white font-light text-lg leading-tight mt-4">
                                Check out this sweet lorem I ipsummed.
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center">
                                <img src="placeholder.png" alt="" class="w-[30px] h-[30px] rounded-full object-cover mr-2">
                                <span class="text-sm font-semibold text-white">Channel Name</span>
                            </div>
                            <div>
                                <span class="text-gray-400 text-sm">
                                    90.0k Subscribers
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex overflow-hidden rounded-lg bg-black">
                    <div class="w-auto h-auto relative bg-black overflow-hidden group/video">
                        <iframe class="aspect-video w-full" src="about:blank" frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
        
                        <div class="absolute top-0 left-0 w-full h-full group-[.playing]/video:hidden inline-video-trigger cursor-pointer opacity-40 transition all duration-200 group-hover/video:opacity-100" data-video-id="gvSGTP2D_Lo">
                            <video width="100%" muted="" autoplay="" playsinline="" loop="" data-js-modal-trigger="free-training">
                                <source src="https://kingkong.co/wp-content/uploads/2024/04/vsl-2024-preview.mp4" type="video/mp4">
                            </video>
                        </div>
        
                        <button class="w-[90px] p-0 m-0 border-0 appearance-none bg-none z-10 transition duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 group-hover/video:scale-110 group-[.playing]/video:hidden pointer-events-none">
                            <svg viewBox="0 0 183 183" fill="none" class=""><circle opacity=".2" cx="91.605" cy="91.267" r="91.099" fill="#4AC186"></circle><circle cx="91.605" cy="91.266" r="62.113" fill="#4AC186"></circle><path d="M112.311 92.302l-31.057 17.93v-35.86l31.057 17.93z" fill="#fff"></path></svg>
                        </button>
                    </div>
                    <div class="flex flex-grow flex-col justify-between h-full p-4 bg-[#202020]">
                        <div>
                            <span class="block text-sm font-medium text-white">Placeholder Video Title</span>
                            <span class="block text-lg font-semibold text-white">Placeholder Video Title</span>
                            <p class="text-white font-light text-lg leading-tight mt-4">
                                Check out this sweet lorem I ipsummed.
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center">
                                <img src="placeholder.png" alt="" class="w-[30px] h-[30px] rounded-full object-cover mr-2">
                                <span class="text-sm font-semibold text-white">Channel Name</span>
                            </div>
                            <div>
                                <span class="text-gray-400 text-sm">
                                    90.0k Subscribers
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex overflow-hidden rounded-lg bg-black">
                    <div class="w-auto h-auto relative bg-black overflow-hidden group/video">
                        <iframe class="aspect-video w-full" src="about:blank" frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
        
                        <div class="absolute top-0 left-0 w-full h-full group-[.playing]/video:hidden inline-video-trigger cursor-pointer opacity-40 transition all duration-200 group-hover/video:opacity-100" data-video-id="gvSGTP2D_Lo">
                            <video width="100%" muted="" autoplay="" playsinline="" loop="" data-js-modal-trigger="free-training">
                                <source src="https://kingkong.co/wp-content/uploads/2024/04/vsl-2024-preview.mp4" type="video/mp4">
                            </video>
                        </div>
        
                        <button class="w-[90px] p-0 m-0 border-0 appearance-none bg-none z-10 transition duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 group-hover/video:scale-110 group-[.playing]/video:hidden pointer-events-none">
                            <svg viewBox="0 0 183 183" fill="none" class=""><circle opacity=".2" cx="91.605" cy="91.267" r="91.099" fill="#4AC186"></circle><circle cx="91.605" cy="91.266" r="62.113" fill="#4AC186"></circle><path d="M112.311 92.302l-31.057 17.93v-35.86l31.057 17.93z" fill="#fff"></path></svg>
                        </button>
                    </div>
                    <div class="flex flex-grow flex-col justify-between h-full p-4 bg-[#202020]">
                        <div>
                            <span class="block text-sm font-medium text-white">Placeholder Video Title</span>
                            <span class="block text-lg font-semibold text-white">Placeholder Video Title</span>
                            <p class="text-white font-light text-lg leading-tight mt-4">
                                Check out this sweet lorem I ipsummed.
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center">
                                <img src="placeholder.png" alt="" class="w-[30px] h-[30px] rounded-full object-cover mr-2">
                                <span class="text-sm font-semibold text-white">Channel Name</span>
                            </div>
                            <div>
                                <span class="text-gray-400 text-sm">
                                    90.0k Subscribers
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export const SurroundedImage = () => {
    return `
        <section class="px-[10px] py-8">
            <div class="flex flex-col gap-y-10 [&_img]:max-w-[180px] max-w-[1000px] mx-auto">
                <div class="flex items-center justify-evenly">
                    <div class="text-center">
                        <img src="logo.png" alt="" class="mx-auto mb-4"> 
                        <h3 class="font-bold text-lg">Cool feature</h3>
                        <p>Information about said cool feature.</p>
                    </div>
                    <div class="text-center">
                        <img src="logo.png" alt="" class="mx-auto mb-4"> 
                        <h3 class="font-bold text-lg">Cool feature</h3>
                        <p>Information about said cool feature.</p>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="text-center">
                        <img src="logo.png" alt="" class="mx-auto mb-4"> 
                        <h3 class="font-bold text-lg">Cool feature</h3>
                        <p>Information about said cool feature.</p>
                    </div>
                    <div>
                        <img src="placeholder.png" alt="" class="w-full max-w-[400px] h-[300px] object-cover rounded-full">
                    </div>
                    <div class="text-center">
                        <img src="logo.png" alt="" class="mx-auto mb-4"> 
                        <h3 class="font-bold text-lg">Cool feature</h3>
                        <p>Information about said cool feature.</p>
                    </div>
                </div>
                <div class="flex items-center justify-evenly">
                    <div class="text-center">
                        <img src="logo.png" alt="" class="mx-auto mb-4"> 
                        <h3 class="font-bold text-lg">Cool feature</h3>
                        <p>Information about said cool feature.</p>
                    </div>
                    <div class="text-center">
                        <img src="logo.png" alt="" class="mx-auto mb-4"> 
                        <h3 class="font-bold text-lg">Cool feature</h3>
                        <p>Information about said cool feature.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
};