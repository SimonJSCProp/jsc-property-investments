
export default {
    title: 'Components/Marquee',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Scrolling marquee input example.'
            }
        }
    }
};

export const Marquee = () => {
    return `
        <section class="py-4 overflow-hidden select-none">    
            <div class="flex lg:text-xl">
                <ul class="p-0 my-1 flex items-center justify-around min-w-full animate-marqueereverse shrink-0">
                    <li class="bg-black px-7 py-2 text-white">
                        Sed venenatis
                    </li>
                    <li class="bg-black px-7 py-2 text-white">
                        Mauris vulputate metus et
                    </li>
                    <li class="bg-black px-7 py-2 text-white">
                        Ut volutpat diam
                    </li>
                </ul>
                <ul class="p-0 my-1 flex items-center justify-around min-w-full animate-marqueereverse shrink-0">
                    <li class="bg-black px-7 py-2 text-white">
                        Sed venenatis
                    </li>
                    <li class="bg-black px-7 py-2 text-white">
                        Mauris vulputate metus et
                    </li>
                    <li class="bg-black px-7 py-2 text-white">
                        Ut volutpat diam
                    </li>
                </ul>
            </div>
    
            <div class="flex lg:text-xl">
                <ul class="p-0 my-1 flex items-center justify-around min-w-full animate-marquee shrink-0">
                    <li class="bg-black px-7 py-2 text-white">
                        Sed venenatis
                    </li>
                    <li class="bg-black px-7 py-2 text-white">
                        Ut volutpat diam
                    </li>
                    <li class="bg-black px-7 py-2 text-white">
                        Mauris vulputate metus et
                    </li>
                    <li class="bg-black px-7 py-2 text-white">
                        Ut volutpat diam
                    </li>
                </ul>
                <ul class="p-0 my-1 flex items-center justify-around min-w-full animate-marquee shrink-0">
                    <li class="bg-black px-7 py-2 text-white">
                        Sed venenatis
                    </li>
                    <li class="bg-black px-7 py-2 text-white">
                        Ut volutpat diam
                    </li>
                    <li class="bg-black px-7 py-2 text-white">
                        Mauris vulputate metus et
                    </li>
                    <li class="bg-black px-7 py-2 text-white">
                        Ut volutpat diam
                    </li>
                </ul>
            </div>
        </section>
    `;
}

export const IconMarquee = () => {
    return `
        <section class="py-2 overflow-hidden select-none bg-primary">
            <div class="container">
                <div class="flex text-0">
                    <ul class="p-0 my-1 flex items-center justify-around min-w-full animate-marqueereverse shrink-0 text-[0px] tracking-[0px] text-white" style="animation-duration: 80s;">
                        <li class="flex items-center bg-black h-[60px] px-2 -mr-[1px]">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[1.7rem] h-auto mr-3">
                            <path d="M21.7306 6.00049L12.7384 14.9926L8.99172 11.2459L2.24763 17.99" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.7309 11.9952V6.00049H15.7362" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="text-lg">Increases Energy and Vitality</span>
                        </li> 
                        <li class="flex items-center bg-black h-[60px] px-2 -mr-[1px]">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[1.7rem] h-auto mr-3">
                            <path d="M21.7306 6.00049L12.7384 14.9926L8.99172 11.2459L2.24763 17.99" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.7309 11.9952V6.00049H15.7362" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="text-lg">Improved Sleep And Reduced Stress</span>
                        </li> 
                        <li class="flex items-center bg-black h-[60px] px-2 -mr-[1px]">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[1.7rem] h-auto mr-3">
                            <path d="M21.7306 6.00049L12.7384 14.9926L8.99172 11.2459L2.24763 17.99" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.7309 11.9952V6.00049H15.7362" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="text-lg">5 Stimulation Neo-Coils</span>
                        </li> 
                        <li class="flex items-center bg-black h-[60px] px-2 -mr-[1px]">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[1.7rem] h-auto mr-3">
                            <path d="M21.7306 6.00049L12.7384 14.9926L8.99172 11.2459L2.24763 17.99" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.7309 11.9952V6.00049H15.7362" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="text-lg">Stronger Than Binaural Beats</span>
                        </li> 
                        <li class="flex items-center bg-black h-[60px] px-2 -mr-[1px]">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[1.7rem] h-auto mr-3">
                            <path d="M21.7306 6.00049L12.7384 14.9926L8.99172 11.2459L2.24763 17.99" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.7309 11.9952V6.00049H15.7362" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="text-lg">Better Than EEG</span>
                        </li> 
                    </ul>
                    <ul class="p-0 my-1 flex items-center justify-around min-w-full animate-marqueereverse shrink-0 text-[0px] tracking-[0px] text-white" style="animation-duration: 80s;">
                        <li class="flex items-center bg-black h-[60px] px-2 -mr-[1px]">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[1.7rem] h-auto mr-3">
                            <path d="M21.7306 6.00049L12.7384 14.9926L8.99172 11.2459L2.24763 17.99" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.7309 11.9952V6.00049H15.7362" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="text-lg">Increases Energy and Vitality</span>
                        </li> 
                        <li class="flex items-center bg-black h-[60px] px-2 -mr-[1px]">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[1.7rem] h-auto mr-3">
                            <path d="M21.7306 6.00049L12.7384 14.9926L8.99172 11.2459L2.24763 17.99" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.7309 11.9952V6.00049H15.7362" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="text-lg">Improved Sleep And Reduced Stress</span>
                        </li> 
                        <li class="flex items-center bg-black h-[60px] px-2 -mr-[1px]">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[1.7rem] h-auto mr-3">
                            <path d="M21.7306 6.00049L12.7384 14.9926L8.99172 11.2459L2.24763 17.99" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.7309 11.9952V6.00049H15.7362" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="text-lg">5 Stimulation Neo-Coils</span>
                        </li> 
                        <li class="flex items-center bg-black h-[60px] px-2 -mr-[1px]">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[1.7rem] h-auto mr-3">
                            <path d="M21.7306 6.00049L12.7384 14.9926L8.99172 11.2459L2.24763 17.99" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.7309 11.9952V6.00049H15.7362" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="text-lg">Stronger Than Binaural Beats</span>
                        </li> 
                        <li class="flex items-center bg-black h-[60px] px-2 -mr-[1px]">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[1.7rem] h-auto mr-3">
                            <path d="M21.7306 6.00049L12.7384 14.9926L8.99172 11.2459L2.24763 17.99" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.7309 11.9952V6.00049H15.7362" stroke="white" stroke-width="1.49869" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="text-lg">Better Than EEG</span>
                        </li> 
                    </ul>
                </div>
            </div>
        </section>
    `
}

export const TeamMarquee = () => {
    return `
        <section class="overflow-hidden relative">
            <div class="container p-0 select-none">
                <div class="flex lg:text-xl">
                    <ul class="p-0 my-1 lg flex items-start justify-around min-w-full animate-marqueereverse shrink-0 ">
                        <li class="shadow-md mr-[20px] w-[49vw] md:w-[22vw] xl:w-[18vw]">
                            <div class="person-card-image w-full h-[52vw] md:h-[28vw] xl:h-[20vw] bg-black">
                                <img src="" alt="" class="w-full h-full object-cover" />
                            </div>
                            <div class="person-card-text p-4 h-[4.5rem] md:h-[5.2rem] lg:h-[8.6rem] xl:h-[8.rem]">
                                <h3 class="font-bold text-[11px] lg:text-[1.2rem] mb-[2px]">Dr. Nolan Everhart</h3>
                                <span class="block text-[10px] lg:text-[1rem] leading-tight">Doctor of Philosophy</span>
                            </div>
                        </li>
                        <li class="shadow-md mr-[20px] w-[49vw] md:w-[22vw] xl:w-[18vw]">
                            <div class="person-card-image w-full h-[52vw] md:h-[28vw] xl:h-[20vw] bg-black">
                                <img src="" alt="" class="w-full h-full object-cover" />
                            </div>
                            <div class="person-card-text p-4 h-[4.5rem] md:h-[5.2rem] lg:h-[8.6rem] xl:h-[8.rem]">
                                <h3 class="font-bold text-[11px] lg:text-[1.2rem] mb-[2px]">Dr. Lydia Castor</h3>
                                <span class="block text-[10px] lg:text-[1rem] leading-tight">Ph.D., BCN</span>
                            </div>
                        </li>
                        <li class="shadow-md mr-[20px] w-[49vw] md:w-[22vw] xl:w-[18vw]">
                            <div class="person-card-image w-full h-[52vw] md:h-[28vw] xl:h-[20vw] bg-black">
                                <img src="" alt="" class="w-full h-full object-cover" />  
                            </div>
                            <div class="person-card-text p-4 h-[4.5rem] md:h-[5.2rem] lg:h-[8.6rem] xl:h-[8.rem]">
                                <h3 class="font-bold text-[11px] lg:text-[1.2rem] mb-[2px]">Dr. Riley Thorn</h3>
                                <span class="block text-[10px] lg:text-[1rem] leading-tight">President of Holistic-Centered Treatment</span>
                            </div>
                        </li>
                        <li class="shadow-md mr-[20px] w-[49vw] md:w-[22vw] xl:w-[18vw]">
                            <div class="person-card-image w-full h-[52vw] md:h-[28vw] xl:h-[20vw] bg-black">
                                <img src="" alt="" class="w-full h-full object-cover" /> 
                            </div>
                            <div class="person-card-text p-4 h-[4.5rem] md:h-[5.2rem] lg:h-[8.6rem] xl:h-[8.rem]">
                                <h3 class="font-bold text-[11px] lg:text-[1.2rem] mb-[2px]">Dr. Ezra Kline</h3>
                                <span class="block text-[10px] lg:text-[1rem] leading-tight">Ph.D. in Biology</span>
                            </div>
                        </li> 
                        <li class="shadow-md mr-[20px] w-[49vw] md:w-[22vw] xl:w-[18vw]">
                            <div class="person-card-image w-full h-[52vw] md:h-[28vw] xl:h-[20vw] bg-black">
                                <img src="" alt="" class="w-full h-full object-cover" /> 
                            </div>
                            <div class="person-card-text p-4 h-[4.5rem] md:h-[5.2rem] lg:h-[8.6rem] xl:h-[8.rem]">
                                <h3 class="font-bold text-[11px] lg:text-[1.2rem] mb-[2px]">Dr. Mira Voss</h3>
                                <span class="block text-[10px] lg:text-[1rem] leading-tight">Ph.D. in Biomedicine, Microbiology</span>
                            </div>
                        </li> 
                    </ul>
                    <!-- Duplicate UL with updated names -->
                    <ul class="p-0 my-1 flex items-start justify-around min-w-full animate-marqueereverse shrink-0 ">
                        <li class="shadow-md mr-[20px] w-[49vw] md:w-[22vw] xl:w-[18vw]">
                            <div class="person-card-image w-full h-[52vw] md:h-[28vw] xl:h-[20vw] bg-black">
                                <img src="" alt="" class="w-full h-full object-cover" />
                            </div>
                            <div class="person-card-text p-4 h-[4.5rem] md:h-[5.2rem] lg:h-[8.6rem] xl:h-[8.rem]">
                                <h3 class="font-bold text-[11px] lg:text-[1.2rem] mb-[2px]">Dr. Nolan Everhart</h3>
                                <span class="block text-[10px] lg:text-[1rem] leading-tight">Doctor of Philosophy</span>
                            </div>
                        </li>
                        <li class="shadow-md mr-[20px] w-[49vw] md:w-[22vw] xl:w-[18vw]">
                            <div class="person-card-image w-full h-[52vw] md:h-[28vw] xl:h-[20vw] bg-black">
                                <img src="" alt="" class="w-full h-full object-cover" />
                            </div>
                            <div class="person-card-text p-4 h-[4.5rem] md:h-[5.2rem] lg:h-[8.6rem] xl:h-[8.rem]">
                                <h3 class="font-bold text-[11px] lg:text-[1.2rem] mb-[2px]">Dr. Lydia Castor</h3>
                                <span class="block text-[10px] lg:text-[1rem] leading-tight">Ph.D., BCN</span>
                            </div>
                        </li>
                        <li class="shadow-md mr-[20px] w-[49vw] md:w-[22vw] xl:w-[18vw]">
                            <div class="person-card-image w-full h-[52vw] md:h-[28vw] xl:h-[20vw] bg-black">
                                <img src="" alt="" class="w-full h-full object-cover" />  
                            </div>
                            <div class="person-card-text p-4 h-[4.5rem] md:h-[5.2rem] lg:h-[8.6rem] xl:h-[8.rem]">
                                <h3 class="font-bold text-[11px] lg:text-[1.2rem] mb-[2px]">Dr. Riley Thorn</h3>
                                <span class="block text-[10px] lg:text-[1rem] leading-tight">President of Holistic-Centered Treatment</span>
                            </div>
                        </li>
                        <li class="shadow-md mr-[20px] w-[49vw] md:w-[22vw] xl:w-[18vw]">
                            <div class="person-card-image w-full h-[52vw] md:h-[28vw] xl:h-[20vw] bg-black">
                                <img src="" alt="" class="w-full h-full object-cover" /> 
                            </div>
                            <div class="person-card-text p-4 h-[4.5rem] md:h-[5.2rem] lg:h-[8.6rem] xl:h-[8.rem]">
                                <h3 class="font-bold text-[11px] lg:text-[1.2rem] mb-[2px]">Dr. Ezra Kline</h3>
                                <span class="block text-[10px] lg:text-[1rem] leading-tight">Ph.D. in Biology</span>
                            </div>
                        </li> 
                        <li class="shadow-md mr-[20px] w-[49vw] md:w-[22vw] xl:w-[18vw]">
                            <div class="person-card-image w-full h-[52vw] md:h-[28vw] xl:h-[20vw] bg-black">
                                <img src="" alt="" class="w-full h-full object-cover" /> 
                            </div>
                            <div class="person-card-text p-4 h-[4.5rem] md:h-[5.2rem] lg:h-[8.6rem] xl:h-[8.rem]">
                                <h3 class="font-bold text-[11px] lg:text-[1.2rem] mb-[2px]">Dr. Mira Voss</h3>
                                <span class="block text-[10px] lg:text-[1rem] leading-tight">Ph.D. in Biomedicine, Microbiology</span>
                            </div>
                        </li> 
                    </ul>
                </div>
            </div>
        </section>
    `;
};

export const TestimonialMarquee = () => {
    return `
        <section class="py-14 lg:py-20 overflow-hidden relative">
            <div class="flex testimonials-marquee relative z-[4] [&_li]:max-w-[30vw] 2xl:[&_li]:max-w-[20vw] [&_li]:h-full mb-4"> 
                <ul class="p-0 my-1 flex items-center justify-around min-w-full animate-marqueereverse shrink-0" style="animation-duration: 50s;">
                    <li class="flex mr-4">
                        <div class="bg-white p-6 shadow-lg rounded-md">
                            <div class="flex items-center">
                                <div class="flex-grow">
                                    <strong class="font-bold text-[12px] inline-block mr-2">
                                        Dr. Melissa Davis
                                    </strong>
                                    <div class="inline">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block" alt="checkmark icon">
                                        <span class="text-[10px] capitalize">
                                            Verified Review
                                        </span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="text-[#9F9F9F] text-[10px]"></span>
                                </div>
                            </div>
                            <div class="mb-2">
                                <img src="icon-five-stars.png" alt="five stars" class="w-auto h-[1rem]">
                            </div>
                            <p class="text-sm">
                                I use these daily because they help me push through my “To Do” list when I would otherwise give into distraction or exhaustion.
                            </p>
                        </div>
                    </li> 
                    <li class="flex mr-4">
                        <div class="bg-white p-6 shadow-lg rounded-md">
                            <div class="flex items-center">
                                <div class="flex-grow">
                                    <strong class="font-bold text-[12px] inline-block mr-2">
                                        Dr. Sara Parra
                                    </strong>
                                    <div class="inline">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block" alt="checkmark icon">
                                        <span class="text-[10px] capitalize">
                                            Verified Review
                                        </span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="text-[#9F9F9F] text-[10px]"></span>
                                </div>
                            </div>
                            <div class="mb-2">
                                <img src="icon-five-stars.png" alt="five stars" class="w-auto h-[1rem]">
                            </div>
                            <p class="text-sm">
                                I love this device. I have a full body Pemf Mat with a visual and auditory stimulation system at home! Now Nopemf is my personal travel portable device that I can take with me everywhere!!!
                            </p>
                        </div>
                    </li> 
                    <li class="flex mr-4">
                        <div class="bg-white p-5 shadow-lg rounded-md">
                            <div class="flex items-center">
                                <div class="flex-grow">
                                    <strong class="font-bold text-[12px] inline-block mr-2">
                                        Manuel Alvarez
                                    </strong>
                                    <div class="inline">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block" alt="checkmark icon">
                                        <span class="text-[10px] capitalize">
                                            Verified Review
                                        </span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="text-[#9F9F9F] text-[10px]"></span>
                                </div>
                            </div>
                            <div class="mb-2">
                                <img src="icon-five-stars.png" alt="five stars" class="w-auto h-[1rem]">
                            </div>
                            <p class="text-sm">
                                It works well and I felt effects with use on my knees in the first week. 
                                <br>
                                <br>
                                The knees are much better!
                            </p>
                        </div>
                    </li> 
                </ul>
                <ul class="p-0 my-1 flex items-center justify-around min-w-full animate-marqueereverse shrink-0" style="animation-duration: 50s;">
                    <li class="flex mr-4">
                        <div class="bg-white p-5 shadow-lg rounded-md">
                            <div class="flex items-center">
                                <div class="flex-grow">
                                    <strong class="font-bold text-[12px] inline-block mr-2">
                                        Dr. Melissa Davis
                                    </strong>
                                    <div class="inline">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block" alt="checkmark icon">
                                        <span class="text-[10px] capitalize">
                                            Verified Review
                                        </span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="text-[#9F9F9F] text-[10px]"></span>
                                </div>
                            </div>
                            <div class="mb-2">
                                <img src="icon-five-stars.png" alt="five stars" class="w-auto h-[1rem]">
                            </div>
                            <p class="text-sm">
                                I use these daily because they help me push through my “To Do” list when I would otherwise give into distraction or exhaustion.
                            </p>
                        </div>
                    </li> 
                    <li class="flex mr-4">
                        <div class="bg-white p-5 shadow-lg rounded-md">
                            <div class="flex items-center">
                                <div class="flex-grow">
                                    <strong class="font-bold text-[12px] inline-block mr-2">
                                        Dr. Sara Parra
                                    </strong>
                                    <div class="inline">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block" alt="checkmark icon">
                                        <span class="text-[10px] capitalize">
                                            Verified Review
                                        </span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="text-[#9F9F9F] text-[10px]"></span>
                                </div>
                            </div>
                            <div class="mb-2">
                                <img src="icon-five-stars.png" alt="five stars" class="w-auto h-[1rem]">
                            </div>
                            <p class="text-sm">
                                I love this device. I have a full body Pemf Mat with a visual and auditory stimulation system at home! Now Nopemf is my personal travel portable device that I can take with me everywhere!!!
                            </p>
                        </div>
                    </li> 
                    <li class="flex mr-4">
                        <div class="bg-white p-5 shadow-lg rounded-md">
                            <div class="flex items-center">
                                <div class="flex-grow">
                                    <strong class="font-bold text-[12px] inline-block mr-2">
                                        Manuel Alvarez
                                    </strong>
                                    <div class="inline">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block" alt="checkmark icon">
                                        <span class="text-[10px] capitalize">
                                            Verified Review
                                        </span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="text-[#9F9F9F] text-[10px]">November 22, 2023</span>
                                </div>
                            </div>
                            <div class="mb-2">
                                <img src="icon-five-stars.png" alt="five stars" class="w-auto h-[1rem]">
                            </div>
                            <p class="text-sm">
                                It works well and I felt effects with use on my knees in the first week. 
                                <br>
                                <br>
                                The knees are much better!
                            </p>
                        </div>
                    </li> 
                </ul>
            </div>
            <div class="testimonials-marquee relative z-[4] flex [&_li]:max-w-[30vw] 2xl:[&_li]:max-w-[20vw] [&_li]:h-full mb-[8rem]"> 
                <!-- Reverse -->
                <ul class="p-0 my-1 flex items-center justify-around min-w-full animate-marquee shrink-0" style="animation-duration: 50s;">
                    <li class="flex mr-4">
                        <div class="bg-white p-5 shadow-lg rounded-md">
                            <div class="flex items-center">
                                <div class="flex-grow">
                                    <strong class="font-bold text-[12px] inline-block mr-2">
                                        Dr. Melissa Davis
                                    </strong>
                                    <div class="inline">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block" alt="checkmark icon">
                                        <span class="text-[10px] capitalize">
                                            Verified Review
                                        </span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="text-[#9F9F9F] text-[10px]"></span>
                                </div>
                            </div>
                            <div class="mb-2">
                                <img src="icon-five-stars.png" alt="five stars" class="w-auto h-[1rem]">
                            </div>
                            <p class="text-sm">
                                I use these daily because they help me push through my “To Do” list when I would otherwise give into distraction or exhaustion.
                            </p>
                        </div>
                    </li> 
                    <li class="flex mr-4">
                        <div class="bg-white p-5 shadow-lg rounded-md">
                            <div class="flex items-center">
                                <div class="flex-grow">
                                    <strong class="font-bold text-[12px] inline-block mr-2">
                                        Dr. Sara Parra
                                    </strong>
                                    <div class="inline">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block" alt="checkmark icon">
                                        <span class="text-[10px] capitalize">
                                            Verified Review
                                        </span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="text-[#9F9F9F] text-[10px]"></span>
                                </div>
                            </div>
                            <div class="mb-2">
                                <img src="icon-five-stars.png" alt="five stars" class="w-auto h-[1rem]">
                            </div>
                            <p class="text-sm">
                                I love this device. I have a full body Pemf Mat with a visual and auditory stimulation system at home! Now Nopemf is my personal travel portable device that I can take with me everywhere!!!
                            </p>
                        </div>
                    </li> 
                    <li class="flex mr-4">
                        <div class="bg-white p-5 shadow-lg rounded-md">
                            <div class="flex items-center">
                                <div class="flex-grow">
                                    <strong class="font-bold text-[12px] inline-block mr-2">
                                        Manuel Alvarez
                                    </strong>
                                    <div class="inline">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block" alt="checkmark icon">
                                        <span class="text-[10px] capitalize">
                                            Verified Review
                                        </span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="text-[#9F9F9F] text-[10px]"></span>
                                </div>
                            </div>
                            <div class="mb-2">
                                <img src="icon-five-stars.png" alt="five stars" class="w-auto h-[1rem]">
                            </div>
                            <p class="text-sm">
                                It works well and I felt effects with use on my knees in the first week. 
                                <br>
                                <br>
                                The knees are much better!
                            </p>
                        </div>
                    </li> 
                </ul>
                <ul class="p-0 my-1 flex items-center justify-around min-w-full animate-marquee shrink-0" style="animation-duration: 50s;">
                    <li class="flex mr-4">
                        <div class="bg-white p-5 shadow-lg rounded-md">
                            <div class="flex items-center">
                                <div class="flex-grow">
                                    <strong class="font-bold text-[12px] inline-block mr-2">
                                        Dr. Melissa Davis
                                    </strong>
                                    <div class="inline">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block" alt="checkmark icon">
                                        <span class="text-[10px] capitalize">
                                            Verified Review
                                        </span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="text-[#9F9F9F] text-[10px]"></span>
                                </div>
                            </div>
                            <div class="mb-2">
                                <img src="icon-five-stars.png" alt="five stars" class="w-auto h-[1rem]">
                            </div>
                            <p class="text-sm">
                                I use these daily because they help me push through my “To Do” list when I would otherwise give into distraction or exhaustion.
                            </p>
                        </div>
                    </li> 
                    <li class="flex mr-4">
                        <div class="bg-white p-5 shadow-lg rounded-md">
                            <div class="flex items-center">
                                <div class="flex-grow">
                                    <strong class="font-bold text-[12px] inline-block mr-2">
                                        Dr. Sara Parra
                                    </strong>
                                    <div class="inline">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block" alt="checkmark icon">
                                        <span class="text-[10px] capitalize">
                                            Verified Review
                                        </span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="text-[#9F9F9F] text-[10px]"></span>
                                </div>
                            </div>
                            <div class="mb-2">
                                <img src="icon-five-stars.png" alt="five stars" class="w-auto h-[1rem]">
                            </div>
                            <p class="text-sm">
                                I love this device. I have a full body Pemf Mat with a visual and auditory stimulation system at home! Now Nopemf is my personal travel portable device that I can take with me everywhere!!!
                            </p>
                        </div>
                    </li> 
                    <li class="flex mr-4">
                        <div class="bg-white p-5 shadow-lg rounded-md">
                            <div class="flex items-center">
                                <div class="flex-grow">
                                    <strong class="font-bold text-[12px] inline-block mr-2">
                                        Manuel Alvarez
                                    </strong>
                                    <div class="inline">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block" alt="checkmark icon">
                                        <span class="text-[10px] capitalize">
                                            Verified Review
                                        </span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="text-[#9F9F9F] text-[10px]">November 22, 2023</span>
                                </div>
                            </div>
                            <div class="mb-2">
                                <img src="icon-five-stars.png" alt="five stars" class="w-auto h-[1rem]">
                            </div>
                            <p class="text-sm">
                                It works well and I felt effects with use on my knees in the first week. 
                                <br>
                                <br>
                                The knees are much better!
                            </p>
                        </div>
                    </li> 
                </ul>
            </div>
        </section>
    `;
};