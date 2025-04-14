export default {
	title: 'Layouts/Hero',
	tags: ['autodocs'],
}

export const Fullwidth = () => {
	return `
        <section class="text-center text-white pt-20 pb-16 md:pt-28 md:pb-24 lg:py-32 relative">
            <div class="absolute top-0 left-0 z-10 pointer-events-none h-full w-full bg-black">
                <img src="placeholder.png" class="w-full h-full object-cover select-none opacity-60" />
            </div>
            <div class="container relative z-20 px-4">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full md:w-11/12">
                        <p class="uppercase lg:text-xl mb-5">Attention Everyone Who Is Looking At This Page</p>
                        <h1 class="text-3xl lg:text-5xl mb-5 leading-tight font-bold">Centered Hero With Video
                        </h1>
                    </div>
                    <div class="w-full md:w-10/12 lg:w-8/12">
                        <p class="text-xl lg:text-[1.375rem] hidden md:block mb-5">This is the subheadline item. We've made this one so it doesnt stretch as wide as the headline. Use the column widths to make the text fit nice visually in the hero.</p>
    
                        <div class="relative bg-black overflow-hidden mb-8 group/video">
                            <iframe class="aspect-video w-full " src="about:blank" frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
    
                            <div class="absolute top-0 left-0 w-full h-full group-[.playing]/video:hidden">
                                <img src="placeholder-2.jpg" class="w-full h-full object-cover " />
                            </div>
    
                            <button class="w-24 p-0 m-0 border-0 appearance-none bg-none z-10 transition duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-video-trigger hover:scale-110 group-[.playing]/video:hidden" data-video-id="gvSGTP2D_Lo">
                                <img src="icon-play.svg" class="img-fluid view-animation"/>
                            </button>
                        </div>
                    </div>
                    <div class="w-full md:w-8/12 lg:w-1/2">
                        <div class="text-center">
                            <a href="#offer-form"
                               class="inline-block w-full border-0 rounded-md mb-5 lg:text-xl tracking-widest uppercase tracking-wide px-3 py-4 lg:py-6 whitespace-normal cursor-pointer bg-green-400 text-black transition duration-500  hover:no-underline hover:bg-green-400/80 hover:text-black">
                                CTA BUTTON TEXT
                            </a>
                            <p class="lg:text-xl w-10/12 mx-auto"> This is the descriptive CTA button which will probably be two lines long
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

export const Split = () => {
	return `
        <section class="py-16 md:py-24 lg:py-28">
            <div class="container px-4">
                <div class="flex justify-center items-center gap-x-8">
                    <div class="w-full sm:w-10/12 md:w-9/12 lg:w-1/2">
                        <p class="uppercase lg:text-xl mb-5">Attention Everyone Who Is Looking At This Page</p>
                        <h1 class="text-3xl lg:text-5xl mb-5 leading-tight font-bold">Left Aligned Hero Module</h1>
    
                        <img class="mx-auto mb-5 block lg:hidden w-full" src="placeholder-2.jpg">
    
                        <p class="lg:text-[1.375rem] mb-5">This is the subheadline item. We've made this one so it doesnt stretch as wide as the headline. Use the column widths to make the text fit nice visually in the hero. </p>
    
                        <div class="text-center">
                            <a href="#offer-form"
                               class="inline-block w-full border-0 rounded-md mb-5 lg:text-xl tracking-widest uppercase tracking-wide px-3 py-4 lg:py-6 whitespace-normal cursor-pointer bg-green-400 text-black transition duration-500  hover:no-underline hover:bg-green-400/80 hover:text-black">
                                CTA BUTTON TEXT
                            </a>
                            <p class="lg:text-xl w-10/12 mx-auto"> This is the descriptive CTA button which will probably be two lines long
                            </p>
                        </div>
                    </div>
                    <div class="w-full sm:w-10/12 md:w-9/12 lg:w-1/2 text-center hidden lg:block">
                        <img class="mb-5 lg:mb-0 w-full" src="placeholder-2.jpg" nolazy>
                    </div>
                </div>
            </div>
        </section>
    `
}

export const TwoColumn = () => {
	return `
        <!-- Hero -->
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <!-- Grid -->
            <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                <div>
                <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">Clean Layout With Clear Separation of Headline and CTA With <span class="text-blue-600">Imagery On The Left</span></h1>
                <p class="mt-3 text-lg text-gray-800">Hand-picked professionals and expertly crafted components, designed for any kind of entrepreneur.</p>

                <!-- Buttons -->
                <div class="mt-7 grid gap-3 w-full sm:inline-flex">
                    <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                    Get started
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                    <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
                    Contact sales team
                    </a>
                </div>
                <!-- End Buttons -->

                <!-- Review -->
                <div class="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
                    <!-- Review -->
                    <div class="py-5">
                    <div class="flex gap-x-1">
                        <svg class="size-4 text-gray-800" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
                        </svg>
                        <svg class="size-4 text-gray-800" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
                        </svg>
                        <svg class="size-4 text-gray-800" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
                        </svg>
                        <svg class="size-4 text-gray-800" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
                        </svg>
                        <svg class="size-4 text-gray-800" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
                        </svg>
                    </div>

                    <p class="mt-3 text-sm text-gray-800">
                        <span class="font-bold">4.6</span> /5 - from 12k reviews
                    </p>

                    <div class="mt-5">
                        <!-- Star -->
                        <svg class="h-auto w-16 text-gray-800" width="80" height="27" viewBox="0 0 80 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.558 9.74046H11.576V12.3752H17.9632C17.6438 16.0878 14.5301 17.7245 11.6159 17.7245C7.86341 17.7245 4.58995 14.7704 4.58995 10.6586C4.58995 6.62669 7.70373 3.51291 11.6159 3.51291C14.6498 3.51291 16.4063 5.42908 16.4063 5.42908L18.2426 3.51291C18.2426 3.51291 15.8474 0.878184 11.4961 0.878184C5.94724 0.838264 1.67578 5.50892 1.67578 10.5788C1.67578 15.5289 5.70772 20.3592 11.6558 20.3592C16.8854 20.3592 20.7177 16.8063 20.7177 11.4969C20.7177 10.3792 20.558 9.74046 20.558 9.74046Z" fill="currentColor"/>
                        <path d="M27.8621 7.78442C24.1894 7.78442 21.5547 10.6587 21.5547 14.012C21.5547 17.4451 24.1096 20.3593 27.9419 20.3593C31.415 20.3593 34.2094 17.7645 34.2094 14.0918C34.1695 9.94011 30.896 7.78442 27.8621 7.78442ZM27.902 10.2994C29.6984 10.2994 31.415 11.7764 31.415 14.0918C31.415 16.4072 29.7383 17.8842 27.902 17.8842C25.906 17.8842 24.3491 16.2874 24.3491 14.0519C24.3092 11.8962 25.8661 10.2994 27.902 10.2994Z" fill="currentColor"/>
                        <path d="M41.5964 7.78442C37.9238 7.78442 35.2891 10.6587 35.2891 14.012C35.2891 17.4451 37.844 20.3593 41.6763 20.3593C45.1493 20.3593 47.9438 17.7645 47.9438 14.0918C47.9038 9.94011 44.6304 7.78442 41.5964 7.78442ZM41.6364 10.2994C43.4328 10.2994 45.1493 11.7764 45.1493 14.0918C45.1493 16.4072 43.4727 17.8842 41.6364 17.8842C39.6404 17.8842 38.0835 16.2874 38.0835 14.0519C38.0436 11.8962 39.6004 10.2994 41.6364 10.2994Z" fill="currentColor"/>
                        <path d="M55.0475 7.82434C51.6543 7.82434 49.0195 10.7784 49.0195 14.0918C49.0195 17.8443 52.0934 20.3992 54.9676 20.3992C56.764 20.3992 57.6822 19.7205 58.4407 18.8822V20.1198C58.4407 22.2754 57.1233 23.5928 55.1273 23.5928C53.2111 23.5928 52.2531 22.1557 51.8938 21.3573L49.4587 22.3553C50.297 24.1517 52.0135 26.0279 55.0874 26.0279C58.4407 26.0279 60.9956 23.9122 60.9956 19.481V8.18362H58.3608V9.26147C57.6423 8.38322 56.5245 7.82434 55.0475 7.82434ZM55.287 10.2994C56.9237 10.2994 58.6403 11.7365 58.6403 14.1317C58.6403 16.6068 56.9636 17.9241 55.2471 17.9241C53.4507 17.9241 51.774 16.4471 51.774 14.1716C51.8139 11.6966 53.5305 10.2994 55.287 10.2994Z" fill="currentColor"/>
                        <path d="M72.8136 7.78442C69.62 7.78442 66.9453 10.2994 66.9453 14.0519C66.9453 18.004 69.9393 20.3593 73.093 20.3593C75.7278 20.3593 77.4044 18.8822 78.3625 17.6048L76.1669 16.1277C75.608 17.006 74.6499 17.8443 73.093 17.8443C71.3365 17.8443 70.5381 16.8862 70.0192 15.9281L78.4423 12.4152L78.0032 11.3772C77.1649 9.46107 75.2886 7.78442 72.8136 7.78442ZM72.8934 10.2196C74.0511 10.2196 74.8495 10.8184 75.2487 11.5768L69.6599 13.9321C69.3405 12.0958 71.097 10.2196 72.8934 10.2196Z" fill="currentColor"/>
                        <path d="M62.9531 19.9999H65.7076V1.47693H62.9531V19.9999Z" fill="currentColor"/>
                        </svg>
                        <!-- End Star -->
                    </div>
                    </div>
                    <!-- End Review -->

                    <!-- Review -->
                    <div class="py-5">
                    <div class="flex gap-x-1">
                        <svg class="size-4 text-gray-800" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
                        </svg>
                        <svg class="size-4 text-gray-800" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
                        </svg>
                        <svg class="size-4 text-gray-800" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
                        </svg>
                        <svg class="size-4 text-gray-800" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
                        </svg>
                        <svg class="size-4 text-gray-800" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z" fill="transparent"/>
                        <path d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z" fill="currentColor"/>
                        </svg>
                    </div>

                    <p class="mt-3 text-sm text-gray-800">
                        <span class="font-bold">4.8</span> /5 - from 5k reviews
                    </p>

                    <div class="mt-5">
                        <!-- Star -->
                        <svg class="h-auto w-16 text-gray-800" width="110" height="28" viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M66.6601 8.35107C64.8995 8.35107 63.5167 8.72875 62.1331 9.48265C62.1331 5.4582 62.1331 1.81143 62.2594 0.554199L53.8321 2.06273V2.81736L54.7124 2.94301C55.8433 3.19431 56.2224 3.82257 56.4715 5.33255C56.725 8.35107 56.5979 24.4496 56.4715 27.0912C58.7354 27.5945 61.1257 27.9722 63.5159 27.9722C70.1819 27.9722 74.2064 23.8213 74.2064 17.281C74.2064 12.1249 70.9366 8.35107 66.6601 8.35107ZM63.7672 26.5878C63.2639 26.5878 62.6342 26.5878 62.258 26.4629C62.1316 24.7023 62.0067 17.281 62.1316 10.7413C62.8862 10.4893 63.3888 10.3637 64.0185 10.3637C66.7872 10.3637 68.2965 13.6335 68.2965 17.6572C68.2957 22.6898 66.4088 26.5878 63.7672 26.5878ZM22.1363 1.0568H0V2.18838L1.25796 2.31403C2.89214 2.56533 3.52184 3.57127 3.77242 5.9608C4.15082 10.4886 4.02445 18.6646 3.77242 22.5619C3.52112 24.9522 2.89287 26.0845 1.25796 26.2087L0 26.4615V27.4674H14.2123V26.4615L12.703 26.2087C11.0681 26.0838 10.4392 24.9522 10.1879 22.5619C10.0615 20.9263 9.93583 18.2847 9.93583 15.0156L12.9543 15.1413C14.8413 15.1413 15.7208 16.6505 16.0985 18.7881H17.2308V9.86106H16.0985C15.7201 11.9993 14.8413 13.5078 12.9543 13.5078L9.93655 13.6342C9.93655 9.35773 10.0622 5.33328 10.1886 2.94374H14.59C17.9869 2.94374 19.7475 5.08125 21.0047 8.85513L22.2626 8.47745L22.1363 1.0568Z" fill="currentColor"/>
                        <path d="M29.3053 8.09998C35.5944 8.09998 38.7385 12.3764 38.7385 18.0358C38.7385 23.4439 35.2167 27.9731 28.9276 27.9731C22.6393 27.9731 19.4951 23.6959 19.4951 18.0358C19.4951 12.6277 23.0162 8.09998 29.3053 8.09998ZM28.9276 9.35793C26.1604 9.35793 25.4058 13.1311 25.4058 18.0358C25.4058 22.8149 26.6637 26.7137 29.1796 26.7137C32.0703 26.7137 32.8264 22.9405 32.8264 18.0358C32.8264 13.2567 31.5699 9.35793 28.9276 9.35793ZM75.8403 18.1622C75.8403 13.0054 79.1101 8.09998 85.5248 8.09998C90.8057 8.09998 93.3224 11.9995 93.3224 17.1555H81.6253C81.4989 21.8089 83.7628 25.2051 88.2913 25.2051C90.3038 25.2051 91.3098 24.7033 92.5685 23.8223L93.0703 24.4505C91.8124 26.2111 89.0459 27.9731 85.5248 27.9731C79.8647 27.9724 75.8403 23.9479 75.8403 18.1622ZM81.6253 15.7726L87.5366 15.6463C87.5366 13.1311 87.159 9.35793 85.0214 9.35793C82.8839 9.35793 81.7502 12.8791 81.6253 15.7726ZM108.291 9.10663C106.782 8.47693 104.77 8.09998 102.506 8.09998C97.8538 8.09998 94.9594 10.8665 94.9594 14.137C94.9594 17.4075 97.0955 18.7904 100.118 19.7971C103.261 20.9279 104.142 21.8089 104.142 23.3182C104.142 24.8275 103.01 26.2103 100.997 26.2103C98.6084 26.2103 96.8464 24.8275 95.4635 21.0536L94.5825 21.3063L94.7089 26.84C96.2181 27.4683 98.9846 27.9724 101.375 27.9724C106.28 27.9724 109.425 25.4557 109.425 21.5576C109.425 18.9161 108.041 17.4075 104.771 16.1489C101.249 14.766 99.992 13.8857 99.992 12.2501C99.992 10.6152 101.126 9.48286 102.635 9.48286C104.897 9.48286 106.407 10.8665 107.54 14.2627L108.42 14.0114L108.291 9.10663ZM55.0883 8.6033C52.9508 7.3468 49.1769 7.97433 47.1651 12.5028L47.29 8.1007L38.8642 9.73561V10.4902L39.7444 10.6159C40.8775 10.7423 41.3794 11.3705 41.5057 13.0062C41.757 16.0247 41.6314 21.3078 41.5057 23.9486C41.3794 25.4564 40.8775 26.2111 39.7444 26.3374L38.8642 26.4638V27.4697H50.5606V26.4638L49.0513 26.3374C47.7941 26.2111 47.4164 25.4564 47.29 23.9486C47.0387 21.5584 47.0387 16.7793 47.1651 13.7608C47.7933 12.8798 50.5606 12.1259 53.0757 13.7608L55.0883 8.6033Z" fill="currentColor"/>
                        </svg>
                        <!-- End Star -->
                    </div>
                    </div>
                    <!-- End Review -->
                </div>
                <!-- End Review -->
                </div>
                <!-- End Col -->

                <div class="relative ms-4">
                <img class="w-full rounded-md" src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80" alt="Hero Image">
                <div class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div>

                <!-- SVG-->
                <div class="absolute bottom-0 start-0">
                    <svg class="w-2/3 ms-auto h-auto text-white" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="531" y="352" width="99" height="99" fill="currentColor"/>
                    <rect x="140" y="352" width="106" height="99" fill="currentColor"/>
                    <rect x="482" y="402" width="64" height="49" fill="currentColor"/>
                    <rect x="433" y="402" width="63" height="49" fill="currentColor"/>
                    <rect x="384" y="352" width="49" height="50" fill="currentColor"/>
                    <rect x="531" y="328" width="50" height="50" fill="currentColor"/>
                    <rect x="99" y="303" width="49" height="58" fill="currentColor"/>
                    <rect x="99" y="352" width="49" height="50" fill="currentColor"/>
                    <rect x="99" y="392" width="49" height="59" fill="currentColor"/>
                    <rect x="44" y="402" width="66" height="49" fill="currentColor"/>
                    <rect x="234" y="402" width="62" height="49" fill="currentColor"/>
                    <rect x="334" y="303" width="50" height="49" fill="currentColor"/>
                    <rect x="581" width="49" height="49" fill="currentColor"/>
                    <rect x="581" width="49" height="64" fill="currentColor"/>
                    <rect x="482" y="123" width="49" height="49" fill="currentColor"/>
                    <rect x="507" y="124" width="49" height="24" fill="currentColor"/>
                    <rect x="531" y="49" width="99" height="99" fill="currentColor"/>
                    </svg>
                </div>
                <!-- End SVG-->
                </div>
                <!-- End Col -->
            </div>
            <!-- End Grid -->
            </div>
            <!-- End Hero -->
    `
}

export const ProductHero = () => {
	return `
        <section class="product-hero bg-[#0c112e] text-white px-8 pt-12 pb-12 md:py-12">
            <div class="container grid grid-cols-1 lg:grid-cols-2 md:gap-x-8 lg:gap-x-12">
                <div class="col relative">
                    <div class="lg:sticky lg:top-1">
                        <div class="relative">
                            <div class="swiper product-swiper mb-4">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="product-slide-image relative h-[88vw] md:h-[75vw] lg:h-[34rem] overflow-hidden rounded-lg md:rounded-3xl">
                                            <img src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJhaW4lMjB3YXZlfGVufDB8fDR8fHwy" alt="" class="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="product-slide-image relative h-[88vw] md:h-[75vw] lg:h-[34rem] overflow-hidden rounded-lg md:rounded-3xl">
                                            <img src="https://images.unsplash.com/photo-1600673736081-50451fd6e9eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJhaW4lMjB3YXZlfGVufDB8fDR8fHwy" alt="" class="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="product-slide-image relative h-[88vw] md:h-[75vw] lg:h-[34rem] overflow-hidden rounded-lg md:rounded-3xl">
                                            <img src="https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJhaW4lMjB3YXZlfGVufDB8fDR8fHwy" alt="" class="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="product-slide-image relative h-[88vw] md:h-[75vw] lg:h-[34rem] overflow-hidden rounded-lg md:rounded-3xl">
                                            <img src="https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhaW4lMjB3YXZlfGVufDB8fDR8fHwy" alt="" class="w-full h-full object-cover" data-mm-target="videoModal" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-button-prev flex items-center justify-center bg-white rounded absolute top-[50%] left-[-0.6rem] md:left-[-1.5rem] w-[1.8rem] h-[1.8rem] md:w-[3rem] md:h-[3rem] z-[2] cursor-pointer">
                                <img src="icon-chevron-left.svg" class="w-auto h-[1.2rem] md:h-[1.5rem] relative">
                            </div>
                            <div class="swiper-button-next flex items-center justify-center bg-white rounded absolute top-[50%] right-[-0.6rem] md:right-[-1.5rem] w-[1.8rem] h-[1.8rem] md:w-[3rem] md:h-[3rem] z-[2] cursor-pointer">
                                <img src="icon-chevron-right.svg" class="w-auto h-[1.2rem] md:h-[1.5rem] relative">
                            </div>
                        </div>
                        <div class="product-thumbnails grid grid-cols-3 gap-3 mb-8 select-none">
                            <div class="product-thumbnail relative h-[26vw] lg:h-[10.2rem] overflow-hidden rounded-xl cursor-pointer hidden" data-thumbnail="0">
                                <img src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJhaW4lMjB3YXZlfGVufDB8fDR8fHwy" alt="" class="w-full h-full object-cover" />
                            </div>
                            <div class="product-thumbnail relative h-[26vw] lg:h-[10.2rem] overflow-hidden rounded-xl cursor-pointer" data-thumbnail="1">
                                <img src="https://images.unsplash.com/photo-1600673736081-50451fd6e9eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJhaW4lMjB3YXZlfGVufDB8fDR8fHwy" alt="" class="w-full h-full object-cover" />
                            </div>
                            <div class="product-thumbnail relative h-[26vw] lg:h-[10.2rem] overflow-hidden rounded-xl cursor-pointer" data-thumbnail="2">
                                <img src="https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJhaW4lMjB3YXZlfGVufDB8fDR8fHwy" alt="" class="w-full h-full object-cover" />
                            </div>
                            <div class="product-thumbnail relative h-[26vw] lg:h-[10.2rem] overflow-hidden rounded-xl cursor-pointer" data-thumbnail="3">
                                <img src="https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhaW4lMjB3YXZlfGVufDB8fDR8fHwy" alt="" class="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-information">
                    <!-- main title -->
                    <h1 class="product-title text-[2.4rem] md:text-[2.6rem] font-semibold leading-[120%]">NeoRhythm 30-Day Test Drive - Peak Brainpower Guaranteed Or 100% Of Your Money Back</h1>
                    <!-- five stars image with review count -->
                    <div class="product-rating flex mt-2">
                        <img src="icon-five-stars.png" alt="five stars" class="w-auto h-5">
                        <span class="reviews inline-block ml-2">563+ Reviews</span>
                    </div>
                    <!-- description snippet -->
                    <p class="product-description mt-2">
                        Slovenian Neuroscientists Uncover Breakthrough 33.71 Hz “Limitless Frequency” 
                        That Deeply Stimulates This Strange Dormant Nerve Cell To Automatically Put 
                        Your Brain In A Hyper-Focused State And Unlock 100% Of Your Cognitive Ability.
                    </p>
                    <!-- testimonial block quote with image -->
                    <div class="product-testimonial flex mt-4 p-5 rounded-lg relative" style="border: 1px solid #252B5B; background: radial-gradient(#5271FF -150%, #0c112e 80%);">    
                        <div class="flex-shrink-0">
                            <div class="relative">
                            <div class="w-[4rem] h-[4rem] overflow-hidden rounded-full aspect-square">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8NHx8fDI%3D" alt="customer avatar" class="w-full h-full object-cover">
                                </div>
                                <div class="absolute right-0 bottom-0">
                                    <img src="icon-checkmark-green.png" alt="green checkmark" class="w-6">
                                </div>
                            </div>
                        </div>
                        <p class="flex-grow pl-4 text-sm leading-normal">
                            <span>
                                “I use these daily because they help me push through my ‘To Do’ list when 
                                I would otherwise give into distraction or exhaustion”
                            </span>
                            <strong class="block mt-2 font-semibold">
                                - Melissa Davis / MD & VA Licensed Clinical Psychologist Ph.D
                            </strong>
                        </p>
                    </div>
                    <ul class="product-features mt-4 lg:grid lg:grid-cols-2 lg:mb-2 lg:gap-x-[2rem]">
                        <li class="mb-4 flex items-center text-md">
                            <img src="https://img.icons8.com/?size=128&id=xBLiYPD7RRe7&format=png" class="invert min-w-[1.6rem] max-w-[1.6rem] h-auto mr-2">
                            <span class="flex-grow">33.71 Hz Gamma Frequency Unlocks 100% Of Your Brain’s Cognitive Ability</span>
                        </li>
                        <li class="mb-4 flex items-center text-md">
                           <img src="https://img.icons8.com/?size=100&id=119920&format=png" class="invert min-w-[1.6rem] max-w-[1.6rem] h-auto mr-2">
                            <span class="flex-grow">Stronger Than Binaural Beats</span>
                        </li>
                        <li class="mb-4 flex items-center text-md">
                          <img src="https://img.icons8.com/?size=100&id=120357&format=png" class="invert min-w-[1.6rem] max-w-[1.6rem] h-auto mr-2">
                            <span class="flex-grow">Increases Energy and Vitality</span>
                        </li>
                        <li class="mb-4 flex items-center text-md">
                           <img src="https://img.icons8.com/?size=100&id=FZVdgkJT1VjQ&format=png" class="invert min-w-[1.6rem] max-w-[1.6rem] h-auto mr-2">
                            <span class="flex-grow">PEMF Technology Backed By 242 Academic Studies</span>
                        </li>
                        <li class="mb-4 flex items-center text-md">
                           <img src="https://img.icons8.com/?size=96&id=Rd9TA4a9z68S&format=png" class="invert min-w-[1.6rem] max-w-[1.6rem] h-auto mr-2">
                            <span class="flex-grow">Enhances Mental Capacity</span>
                        </li>
                        <li class="mb-4 flex items-center text-md">
                            <img src="https://img.icons8.com/?size=128&id=VB3TWEW571Gu&format=png" class="invert min-w-[1.6rem] max-w-[1.6rem] h-auto mr-2">
                            <span class="flex-grow">Better Than EEG</span>
                        </li>
                    </ul>
                    <!-- price -->
                    <div class="product-price">
                        <span class="price-discounted text-[#F1E816] font-bold tracking-tight">
                            <span class="price-to-update amount text-[2.2rem] lg:text-[2.6rem] font-bold" data-price data-product="87" data-variant="87">$599.95</span> 
                            <span class="currency text-lg font-bold lg:text-[1.4rem]" data-currency>AUD</span>
                        </span>
                        <span class="price-full cut-price text-2xl lg:text-[1.6rem] ml-2 lg:relative lg:bottom-1">
                            (
                                <span class="ammount line-through" data-oriPrice data-product="87"
                                data-variant="87">$999.95</span>
                            )
                        </span>
                    </div>
                    <!-- trial -->
                    <div class="inline-block product-trial rounded-lg px-2 md:px-4 py-2 mt-4 text-center" style="border: 0.5px solid #ffffff;">
                        <span class="text-sm tracking-tight lg:text-[1rem]">
                            100% Risk-Free 30-Day Trial Offer Until <span class="dyn-month">[dynamic month]</span> ONLY
                        </span>
                    </div>
                    <!-- Quantity selector -->
                    <div class="product-quantity mt-5 md:flex md:items-center">
                        <div class="items-center mr-6 w-auto min-w-[245px]">
                            <span class="quantity-label text-xl font-bold uppercase mr-4">Quantity: </span> 
                            <button class="quantity-button decrement rounded-lg inline-flex items-center justify-center w-10 h-10 text-xl" style="border: 1px solid #ffffff;">
                                <span>-</span>
                            </button>
                            <span class="value inline-flex mx-2 text-2xl" id="quantity-value">1</span>
                            <button class="quantity-button increment rounded-lg inline-flex items-center justify-center w-10 h-10 text-xl" style="border: 1px solid #ffffff;">
                                <span>+</span>
                            </button>
                        </div>
                        <div class="block w-full md:inline-flex md:w-auto">
                            <span class="stock-status flex items-center my-4">
                                <span class="status-graphic rounded-full bg-[#39BD2344] w-[20px] h-[20px] flex items-center justify-center mr-3 animate-pulse relative before:absolute before:w-[14px] before:h-[14px] before:bg-[#39BD23] before:rounded-full"></span>   
                                <span class="status-text text-md">
                                    The product is in stock now! 
                                </span>
                            </span>
                        </div>
                    </div>
                    <div class="product-add-to-cart mt-6 text-center [&_img]:w-auto [&_img]:align-middle">
                        <a href="#" class="add-to-cart-button checkout-btn
                            block 
                            w-full 
                            max-w-[40rem]
                            m-auto
                            mb-[0.5rem] 
                            border-0 
                            rounded mb-5 
                            py-3
                            bg-[#5271FF]
                            uppercase 
                            text-white 
                            font-bold 
                            text-xl 
                            hover:bg-[#0c112e]
                            transition-all
                            relative
                            z-[5]
                            before:absolute before:w-full before:h-full before:border-white before:border-[1px] before:rounded before:z-2 before:opacity-0 before:left-0 before:top-0 before:transition-all
                            hover:before:opacity-100
                        "> 
                            <span class="add-to-cart-button-text text-white text-[1.05rem] font-semibold">
                                Add to Cart
                            </span>
                            <img class="w-auto h-[1rem] ml-2 inline animate-arrow relative" src="icon-arrow-right.png" alt="arrow-right">
                        </a> 
                        <div class="afterpay">
                            <span class="text-[0.9rem]">       
                                Pay over 4 interest-free payments of <span class="afterpay-installment">$149.98</span> with 
                            </span>
                            <img class="afterpay-icon h-4 inline relative top-[1px]" src="logo-afterpay.png" alt="afterpay">
                        </div>
                        <div class="payment-options mt-4 md:mt-2">
                            <span class="align-middle block md:inline text-lg mb-[0.2rem] text-[1rem] tracking-tight font-semibold">
                                Secure Checkout
                            </span>
                            <div class="spacer inline relative mx-3 hidden md:inline">
                                <div class="line bg-white h-6 w-[1px] inline-block relative top-[0.4rem]"></div>
                            </div>
                            <img class="payment-options-icon h-[14px] inline mr-[5px] align-middle" src="logo-visa.png" alt="Visa">
                            <img class="payment-options-icon h-[14px] inline mr-[5px] align-middle" src="logo-mastercard.png" alt="Mastercard">
                            <img class="payment-options-icon h-[14px] inline mr-[5px] align-middle" src="logo-shoppay.png" alt="ShopPay">
                            <img class="payment-options-icon h-[14px] inline mr-[5px] align-middle" src="logo-applepay.png" alt="ApplePay">
                            <img class="payment-options-icon h-[14px] inline mr-[5px] align-middle" src="logo-gpay.png" alt="GooglePay">
                            <img class="payment-options-icon h-[14px] inline mr-[5px] align-middle" src="logo-paypal.png" alt="Paypal">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

export const JobDoxHero = () => {
	return `
        <section class="text-center relative pt-24 pb-[5%]">
            <div class="absolute top-0 left-0 z-10 pointer-events-none h-full w-full">
              <img class="h-full  w-full object-cover lazyload grayscale opacity-20" src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdlYnNpdGV8ZW58MHx8NHx8fDI%3D">
            </div>
            <div class="container relative z-20 px-4">
                <div class="inline-block border border-[#e43531] text-[#e43531] text-[13px] lg:text-[15px] font-bold tracking-[3px] leading-tight rounded-full py-2 pt-3 px-3 lg:px-6 mb-4 lg:mb-8">
                    “FOR HOME SERVICES COMPANIES STUCK IN THE $1M GRIND”
                </div>
                <h1 class="max-w-2xl lg:max-w-5xl mx-auto text-black mb-4 text-5xl leading-tight font-black">
                    “From Stressed Out Of Your Mind, Buried In Excel To Cruising Past $100k/wk, Doing Half The Jobs And
                    <span class="text-[#e43531]">4X'ing</span>
                    Your Take Home Profits”
                </h1>
                <p class="max-w-[700px] mx-auto mb-8 hidden sm:block">
                    Job-Dox's project management platform helps home services companies move faster and 4X profits...While working less and having more free time, family time, and personal freedom than ever before.
                </p>
                <div class="w-full max-w-sm lg:max-w-xl mx-auto pb-6 lg:pb-12">
                    <div class="text-center">
        <a href="#" class="font-league w-full text-white text-shadow-sm font-bold text-base lg:text-xl inline-block w-full px-2 lg:px-[40px] py-4 lg:py-[25px] mb-2 lg:mb-5 bg-[#e43531] rounded-[10px] lg:rounded-[15px] shadow-[0_35px_60px_-15px_rgba(217,24,44,0.2)]">
        INSTALL MY CUSTOM 'FIELDLINK' FOR FREE
        </a>
        <p class="text-[1rem] w-10/12 mx-auto">
            <span class="inline-block w-8 h-8 text-center text-[22px] bg-white rounded-full relative top-1 mr-2">🚀</span>
            And fast-track your growth to <strong>$5m</strong> in revenue
        </p>
    </div>
                </div>
            </div>
        </section>
    `
}

export const RedfitHero = () => {
	return `
        <section class="text-center text-white py-14 md:py-20 relative bg-[#020202]">
            <div class="absolute  left-0 z-0 bottom-0 pointer-events-none  w-full">
                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltfGVufDB8fDR8fHwy" class="object-cover w-full h-full select-none  opacity-40  nolazy" />
                <span class="absolute bottom-0 left-0 right-0 h-[112px] md:h-[354px] bg-herograd z-[3] "></span>
                <span class="absolute top-0 left-0 right-0 h-[354px] bg-herogradtop z-[3] "></span>
            </div>
            <div class="container relative z-20 px-6">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full md:w-11/12">
                        <p class="inline-block uppercase text-[1.4rem] md:text-[1.4rem] font-fsb tracking-[.8px] md:tracking-[1.3px] rounded-[25px] px-[20px] py-[5px] md:py-[5px] font-fm border-gradient  leading-[1.44] mb-[15px] md:mb-[20px] relative bg-topgrad">GET IN THE BEST SHAPE OF YOUR LIFE…</p>
                        <h1 class="mb-[25px] text-[3.2rem] md:text-6xl leading-[1] md:leading-tighter tracking-[.5px] md:tracking-[1px] font-black">Get Your Own Fully-Equipped Home Gym That Fits In Your Garage And Costs Less Than $15 Per Week! <svg viewBox="0 0 59 59" fill="none" class="w-full max-w-[26px] md:max-w-[32px] lg:max-w-[58px] inline-block align-top mt-[2px]"><circle cx="29.1355" cy="29.1355" r="29.1355" fill="#B8FE22"></circle><g clip-path="url(#clip0_2503_1255)"><path d="M21.0236 23.7449L21.0236 17.5574L41.6181 17.5574L41.6181 38.1519L35.4307 38.1519V28.1202L19.9302 43.6207L15.555 39.2455L31.0556 23.7449L21.0236 23.7449Z" fill="#0F1308"></path></g><defs><clipPath id="clip0_2503_1255"><rect width="37.1247" height="37.1247" fill="white" transform="translate(2.88281 29.1357) rotate(-45)"></rect></clipPath></defs></svg></h1>
                    </div>
                    <div class="w-full md:w-10/12 lg:w-8/12">
                        <p class="mb-[20px] md:mb-[33px] text-xl">Be one of the first 100 enquiries to get the blueprint for a fully-equipped home gym that fits perfectly in the garage, saves you thousands in gym membership and PT fees… and FREE delivery, FREE set-up and FREE servicing!</p>
                    </div>
                    <div class="w-full md:w-8/12 lg:w-1/2">
                        <div class="max-w-[380px] m-auto">
                            <div class="text-center">
                                <a href="#offer-form" class="inline-block w-full border-0 rounded-[12px] md:rounded-[15px] mb-6  uppercase tracking-[1.4px] px-3 py-5 lg:py-6 whitespace-normal cursor-pointer bg-[#B8FE22] text-[#0F1308] text-2xl font-black transition duration-500  hover:no-underline hover:bg-white hover:text-black font-ffcb ttu">
                                    show me how
                                </a>
                                <p class="text-[1.2rem] md:text-sm leading-tight w-10/12 mx-auto">Hurry! As a family business, we can only give this 
                                offer to the first 100 enquiries in <span class="dyn-month">January</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

export const SkillsgymHero = () => {
	return `
        <section class="text-center overflow-hidden text-white bg-black pt-[94px] pb-16 md:pt-[162px] md:pb-[41px] relative">
           <div class="absolute top-[80px] left-0 hidden lg:block h-full w-full max-w-[142px] xl:max-w-[17vw] xl:w-[17vw]">
           <img src="https://images.unsplash.com/photo-1605296866985-34ba3c0b527b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8OFZkNGFfV1BrLWt8fGVufDB8fHx8fA%3D%3D" class="w-full h-full object-cover brightness-50 opacity-65 contrast-125 grayscale" />
           </div>
           <div class="absolute top-0 h-full right-0 hidden lg:block  max-w-[142px]  xl:max-w-[17vw] xl:w-[17vw]">
             <img src="https://images.unsplash.com/photo-1618355281112-e1c89201b2d7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHRyYWluaW5nJTIwZ3ltfGVufDB8fDB8fHww" class="w-full h-full object-cover brightness-50 opacity-65 contrast-125 grayscale" > 
             </div>
            <div class="container relative z-20 px-6">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full md:w-10/12 lg:w-9/12">
                        <p class="uppercase mb-5   border-[1px] border-[#EEBA2B] rounded-[100px] py-[7px] px-[17px] inline-block text-[1.2rem] md:text-[1.4rem] font-fm tracking-[.7px]">FORTUNE 500 BEHEMOTHS WERE HOPING TO KEEP THIS TO THEMSELVES…</p>
                        <h1 class="tracking-tight mb-[12px] md:mb-[22px] text-5xl leading-tight font-black">REVEALED: The Remarkable Fortune 500 ‘1-3-3 Soft Skills Hack’ For Imprinting <span class="whitespace-nowrap">Elite-Level</span> Leadership &amp; EQ Behaviors Deep Within Your Company DNA…</h1>

                    </div>
                    <div class="w-full md:w-10/12 lg:w-8/12">
                        <h3 class="tracking-tight font-black text-3xl mb-[36px]">…Creating Loyal High-Performance Teams That Manage Themselves And Smash KPIs In 90 Days!</h3>

                    </div>
                    <div class="w-full max-w-[520px] m-auto">
                            <a href="#offer-form" class="inline-block text-center leading-[1.2] font-bold w-full border-[1px] border-[#EEBA2B]  text-xl rounded-[10px] mb-5  uppercase px-3 py-4 md:py-9 whitespace-normal cursor-pointer bg-[#EEBA2B] text-[#001A3C] transition duration-500  hover:no-underline hover:bg-[#fff] hover:text-black">
    CLAIM MY FREE SOFT-SKILLS BLUEPRINT
 </a>
 <p class=" text-center text-sm leading-tight tracking-tight max-w-[95%]  mx-auto mb-0">Only 3 Tailored Training Blueprints Available For <span class="dyn-month">January</span>: Discover A Proven System To Create Top 1% Leaders, Culture &amp; High-Performance Teams!</p>

                    </div>
                </div>
            </div>
        </section>
    `
}

export const PurehonestwaterHero = () => {
	return `
        <section class="pt-[100px] md:pt-[144px] bg-gradient-to-b from-[#ebf5fc] to-white relative" id="offer-form">
            <div class="container px-6">
                <div class="flex justify-center flex-wrap lg:flex-nowrap items-center gap-x-8 mb-[28px] lg:mb-[68px]">
                    <div class="w-full md:w-10/12 lg:w-1/2 mb-[30px] lg:mb-0">
                        <p class="text-lg leading-tight mb-[6px] font-bold text-[#1BB8F7] lg:max-w-[490px]">SUFFERING FROM HARD WATER PROBLEMS?</p>
                        <h1 class="mb-[13px] tracking-tight leading-tight text-4xl font-black text-[#000241]">Get The Freshest Soft Water With Our Whole House Water Filtration Systems And Enjoy Every Shower Without Brittle Hair, Painful Rashes, Or Blotchy Skin</h1>
                        <p class="mb-[0] text-lg leading-8 tracking-tight">Have brittle hair, painful rashes or blotchy skin from showering? Smell a chemical odor when you pour yourself a glass of water? Get your FREE, no-obligation water test and finally protect your family without lifting a finger!</p>
                    </div>
                    <div class="w-full md:w-10/12 lg:w-1/2 text-center">
                        <div class="max-w-[514px] w-full m-auto lg:float-right bg-[#fff] rounded-[18px] md:rounded-[28px] px-[17px] py-[23px] shadow-lg">
                            <form method="POST" action="" id="_form_1_" class="kk-validation" novalidate="true">
                                <div class="mb-4 relative">
                                    <label class="sr-only" for="fullname">Full Name:</label>
                                    <span class="w-[10px] md:w-[12px] absolute translate-y-[-50%] top-[50%] left-[23px] md:left-[33px]">
                                        <svg viewBox="0 0 12 16" fill="none" class="w-full"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0202 4.47754C10.0202 6.67636 8.32849 8.43945 6.21712 8.43945C4.10646 8.43945 2.41406 6.67636 2.41406 4.47754C2.41406 2.27872 4.10646 0.515625 6.21712 0.515625C8.32849 0.515625 10.0202 2.27872 10.0202 4.47754ZM0.46875 12.9252C0.46875 10.8882 3.11622 10.3789 6.21571 10.3789C9.33245 10.3789 11.9627 10.9061 11.9627 12.9439C11.9627 14.9817 9.31521 15.4902 6.21571 15.4902C3.09969 15.4902 0.46875 14.963 0.46875 12.9252Z" fill="#6AD4FF"></path></svg>
                                    </span>
                                    <input type="text" class="h-[44px] md:h-[60px] w-full bg-white text-[#151629] text-[1.2rem] lg:text-[1.4rem] border-[1px] border-[#B3B4C6] shadow-none pl-[42px] md:pl-[65px] rounded-[28px] autofill:bg-white autofill:bg-none autofill:text-black placeholder-[#151629]" name="fullname" id="fullname" placeholder="Name*" required="">
                                <div data-lastpass-icon-root="" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></div>

                                <div class="mb-4 relative">
                                    <label class="sr-only" for="email">Email Address:</label>
                                    <span class="w-[10px] md:w-[12px] absolute translate-y-[-50%] top-[50%] left-[23px] md:left-[33px]">
                                        <svg viewBox="0 0 14 14" fill="none" class="w-full"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4699 0.9375C11.6833 0.9375 12.7854 1.63975 13.3455 2.73962C13.4709 2.98561 13.4114 3.29225 13.2025 3.46613L8.40022 7.46867C8.0639 7.75172 7.65643 7.89258 7.24896 7.89258H7.24249H7.23602C6.82856 7.89258 6.42109 7.75172 6.08476 7.46867L1.28245 3.46613C1.07354 3.29225 1.01404 2.98561 1.13951 2.73962C1.69962 1.63975 2.80173 0.9375 4.01508 0.9375H10.4699ZM10.4322 13.0684C12.2367 13.0616 13.6855 11.5386 13.6855 9.65845C13.6855 9.65845 13.6855 6.71757 13.679 5.22893C13.6784 4.94792 13.3667 4.79023 13.1545 4.96611C12.2519 5.71318 10.9721 6.78014 10.0471 7.55129C9.37343 8.11296 8.88795 8.51771 8.8735 8.52765C8.41429 8.91851 7.8322 9.13483 7.23716 9.13483C6.64213 9.13483 6.06003 8.91851 5.60082 8.53506C5.56654 8.50474 2.81839 6.18856 1.28165 4.91827C1.07015 4.74305 0.759702 4.90074 0.759055 5.18243C0.753881 6.68252 0.75 9.66519 0.75 9.66519V9.67193C0.75 11.5521 2.21818 13.0684 4.01622 13.0684H10.4258H10.4322Z" fill="#6AD4FF"></path></svg>
                                    </span>
                                    <input type="email" class="h-[44px] md:h-[60px] w-full bg-white text-[#151629] text-[1.2rem] lg:text-[1.4rem] border-[1px] border-[#B3B4C6] shadow-none pl-[42px] md:pl-[65px] rounded-[28px] autofill:bg-white autofill:bg-none autofill:text-black placeholder-[#151629]" name="email" id="email" placeholder="Email Address*" required="">
                                </div>

                                <div class="mb-4 relative">
                                    <label class="sr-only" for="phone">Phone Number:</label>
                                    <span class="w-[10px] md:w-[12px] absolute translate-y-[-50%] top-[50%] left-[23px] md:left-[33px]">
                                        <svg viewBox="0 0 13 14" fill="none" class="w-full"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.07573 7.32614C8.73334 10.0548 9.33624 6.89805 11.0284 8.63464C12.6597 10.3096 13.5973 10.6451 11.5304 12.7672C11.2715 12.9809 9.6266 15.5516 3.8458 9.61639C-1.93572 3.6804 0.565978 1.98934 0.774095 1.72353C2.84597 -0.404439 3.16709 0.564086 4.79842 2.239C6.49054 3.97632 3.41812 4.59753 6.07573 7.32614Z" fill="#6AD4FF"></path></svg>
                                    </span>
                                    <input type="tel" class="h-[44px] md:h-[60px] w-full bg-white text-[#151629] text-[1.2rem] lg:text-[1.4rem] border-[1px] border-[#B3B4C6] shadow-none pl-[42px] md:pl-[65px] rounded-[28px] autofill:bg-white autofill:bg-none autofill:text-black placeholder-[#151629]" name="phone" id="phone" placeholder="Phone Number*" required="">
                                </div>

                                <div class="mb-4 relative">
                                    <label class="sr-only" for="field[1]">Do you own your home?</label>
                                    <span class="w-[10px] md:w-[14px] absolute translate-y-[-50%] top-[50%] left-[23px] md:left-[33px]">
                                        <svg viewBox="0 0 15 12" fill="none" class="w-full"><path d="M13.8957 11.013H12.9414V6.71872L13.081 6.85828C13.1707 6.94782 13.2923 6.99805 13.419 6.99794C13.5457 6.99783 13.6672 6.94738 13.7568 6.85769C13.8463 6.768 13.8965 6.64642 13.8964 6.51969C13.8963 6.39296 13.8458 6.27147 13.7562 6.18194L7.89029 0.317857C7.71134 0.139029 7.46871 0.0385742 7.21573 0.0385742C6.96274 0.0385742 6.72011 0.139029 6.54117 0.317857L0.6753 6.18194C0.585848 6.27147 0.535626 6.39287 0.535682 6.51943C0.535738 6.64599 0.586067 6.76734 0.675598 6.85679C0.76513 6.94625 0.886529 6.99647 1.01309 6.99641C1.13965 6.99636 1.261 6.94603 1.35046 6.85649L1.49002 6.71872V11.013H0.535736C0.40919 11.013 0.287827 11.0633 0.198345 11.1528C0.108864 11.2422 0.0585938 11.3636 0.0585938 11.4901C0.0585938 11.6167 0.108864 11.7381 0.198345 11.8275C0.287827 11.917 0.40919 11.9673 0.535736 11.9673H13.8957C14.0223 11.9673 14.1436 11.917 14.2331 11.8275C14.3226 11.7381 14.3729 11.6167 14.3729 11.4901C14.3729 11.3636 14.3226 11.2422 14.2331 11.1528C14.1436 11.0633 14.0223 11.013 13.8957 11.013ZM8.64715 11.013H5.7843V8.15015C5.7843 8.08687 5.80944 8.02619 5.85418 7.98145C5.89892 7.93671 5.9596 7.91158 6.02287 7.91158H8.40858C8.47186 7.91158 8.53254 7.93671 8.57728 7.98145C8.62202 8.02619 8.64715 8.08687 8.64715 8.15015V11.013Z" fill="#6AD4FF"></path></svg>
                                    </span>
                                    <select class="cursor-pointer h-[44px] md:h-[60px] w-full bg-white text-[#151629] text-[1.2rem] lg:text-[1.4rem] border-[1px] border-[#B3B4C6] shadow-none pl-[42px] md:pl-[65px] pr-[46px] rounded-[28px] leading-[1.2] !bg-[length:4.2em_2em] text-ellipsis" name="field[1]" id="field[1]" required="">
                                        <option disabled="" selected="" value="">Do you own your home?*</option>
                                        <option value="Yes">
                                            Yes
                                        </option>
                                        <option value="No">
                                            No
                                        </option>
                                    </select>
                                </div>

                                <div class="mb-4 relative">
                                    <label class="sr-only" for="field[2]">Do you have any other water filtration system or softener installed already?</label>
                                    <span class="w-[10px] md:w-[14px] absolute translate-y-[-50%] top-[50%] left-[23px] md:left-[33px]">
                                        <svg viewBox="0 0 14 14" fill="none" class="w-full"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.51416 0.50293H9.9235C12.0386 0.50293 13.4549 2.04993 13.4549 4.35093V9.66143C13.4549 11.9559 12.0386 13.5029 9.9235 13.5029H4.51416C2.39909 13.5029 0.976562 11.9559 0.976562 9.66143V4.35093C0.976562 2.04993 2.39909 0.50293 4.51416 0.50293ZM4.4206 7.78049C4.00882 7.78049 3.67191 7.42939 3.67191 7.00027C3.67191 6.57115 4.00882 6.2207 4.4206 6.2207C4.83238 6.2207 5.16929 6.57115 5.16929 7.00027C5.16929 7.42939 4.83238 7.78049 4.4206 7.78049ZM6.46875 7.00179C6.46875 7.43175 6.80567 7.78354 7.21745 7.78354C7.62924 7.78354 7.96616 7.43175 7.96616 7.00179C7.96616 6.57184 7.62924 6.2207 7.21745 6.2207C6.80567 6.2207 6.46875 6.57184 6.46875 7.00179ZM9.26562 7.00179C9.26562 7.43175 9.60254 7.78354 10.0143 7.78354C10.4261 7.78354 10.7568 7.43175 10.7568 7.00179C10.7568 6.57184 10.4261 6.2207 10.0143 6.2207C9.60254 6.2207 9.26562 6.57184 9.26562 7.00179Z" fill="#6AD4FF"></path></svg>
                                    </span>
                                    <select class="cursor-pointer h-[44px] md:h-[60px] w-full bg-white text-[#151629] text-[1.2rem] lg:text-[1.4rem] border-[1px] border-[#B3B4C6] shadow-none pl-[42px] md:pl-[65px] pr-[46px] rounded-[28px] leading-[1.2] !bg-[length:4.2em_2em] text-ellipsis" name="field[2]" id="field[2]">
                                        <option disabled="" selected="" value="">Do you have any other water filtration system or softener installed already?</option>
                                        <option value="Yes">
                                            Yes
                                        </option>
                                        <option value="No">
                                            No
                                        </option>
                                    </select>
                                </div>

                                

                                <button id="_form_1_submit" class="_submit inline-block w-full border-[1px] border-[#24B6F1] rounded-[115px] uppercase  px-3 py-7 lg:py-6 whitespace-normal cursor-pointer bg-[#24B6F1] text-white text-lg transition duration-500  hover:no-underline hover:bg-white hover:text-[#24B6F1] tracking-[-.3px] md:tracking-0" type="submit">
                                    CLAIM MY FREE WATER HEALTH CHECK
                                </button>

                                <div class="form-messages mt-5  [&_.error]:text-red-500 [&_.success]:text-green-600 empty:hidden text-center text-[1.4rem]"></div>
                            <input type="text" name="planet" style="position: absolute !important; pointer-events:none !important; visibility: hidden !important; width:0 !important; left:0 !important;"></form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

export const OvationtaxgroupHero = () => {
	return `
        <section class="text-white pt-[108px] pb-8 md:pt-28 md:pb-2 md:pt-[160px] relative bg-[#f5f7ff]">
            <div class="container px-4 lg:pl-[90px]">
               <div class="flex flex-wrap justify-center lg:flex-nowrap gap-x-8">
                    
                    <div class="w-full md:w-10/12 lg:w-7/12 lg:text-3xl">
                        <p class="text-gray-800 font-bold tracking-[1.12px] text-medium md:text-base uppercase mb-2 lg:mb-3">If You’re At Risk Of Serious IRS Legal Issues Read This…</p>
                        <h2 class="text-black text-5xl lg:mb-3 leading-tight tracking-[-0.8px] font-bold capitalize mr-4 lg:-mr-5">7 Proven Methods 30,697+ Taxpayers Have Used To Crush IRS Tax Debts &amp; Stop The Ruthless Collection Process In 24 Hours!</h2>

                        <p class="mb-8 lg:mb-6 text-gray-800 text-lg leading-xl lg:w-9/12">Discover How Thousands of Hard Working Americans Have Legally Wipe Their IRS Tax Debts – Without Risking Jail Time or Hiring Expensive Criminal Lawyers!</p>
                        <div class="w-full md:w-[475px] text-center">
                          
                            <a href="#" class="inline-block w-full border-0 rounded-xl mb-5 text-base lg:text-lg font-black tracking-[0.72px] uppercase px-3 md:px-0 py-[22px] lg:py-6 whitespace-normal cursor-pointer bg-blue-900 text-white transition duration-500  hover:no-underline hover:opacity-70">
                                 Download your free copy now
                            </a>
                        </div>                    
                    </div>

                    <div class="w-full text-center md:w-10/12 lg:w-5/12">
                        <div class="hidden lg:-ml-16 lg:-mr-8 lg:-mt-20 lg:block">
                            <img class="w-full h-full object-cover lazyload mix-blend-hard-light contrast-75"  src="https://images.unsplash.com/photo-1503443062224-9f77d743cf25?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9sZCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

export const DyuausHero = () => {
	return `
        <section class="pt-28 lg:pt-32 pb-10 lg:pb-20 relative bg-[#F3F4F6]">
            <div class="container relative z-20 max-w-[1140px] px-4 xl:px-0">
                <div class="flex flex-wrap justify-center gap-x-[13px]">
                    <div class="w-full lg:w-[49%] relative">
                        <div class="flex justify-center items-center gap-x-[6px] absolute top-[15px] left-[15px] lg:top-[25px] lg:left-[25px] z-20 bg-[#FBF4F4] py-[7.8px] px-[14.2px] lg:py-[10px] lg:px-[18px] rounded-[100px]">

                   <img src="https://img.icons8.com/?size=100&id=120092&format=png" class="w-full max-w-[13.382px] lg:max-w-[16.95px]"  > 
                            <p class="text-[12px] lg:text-[14px] text-[#E90011] font-bold tracking-[0.84px] ">
                                BEST SELLER
                            </p>
                        </div>

                        <div class="flex justify-center items-center gap-x-[6px] absolute top-[15px] right-[15px] lg:top-[25px] lg:right-[25px] z-20 bg-[#FBF4F4] py-[7.8px] px-[14.2px] lg:py-[10px] lg:px-[18px] rounded-[100px]">
                            <p class="text-[10px] lg:text-[14px] font-semibold lg:font-bold tracking-[0.84px] uppercase text-[#1A2A46]">
                                You Save $460
                            </p>
                        </div>

                        <div class="swiper swiper-product-gallery p-3 lg:p-5 bg-white rounded-[14px] lg:rounded-[35px] swiper-initialized swiper-horizontal">
                            <div class="swiper-wrapper [&_.swiper-slide]:overflow-hidden [&_.swiper-slide]:rounded-2xl lg:[&_.swiper-slide]:rounded-3xl">
                                <div class="swiper-slide h-auto swiper-slide-active overflow-hidden" style="width: 519px; margin-right: 30px;">
                                    <img nolazy="" class="w-full h-full object-cover lazyload"  alt="" src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2244&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                </div>
                                <div class="swiper-slide h-auto swiper-slide-next" style="width: 519px; margin-right: 30px;">
                                   <img nolazy="" class="w-full h-full object-cover lazyload"  alt="" src="https://images.unsplash.com/photo-1496147539180-13929f8aa03a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZSUyMGJpa2V8ZW58MHx8NHx8fDI%3D">
                                </div>
                                <div class="swiper-slide h-auto" style="width: 519px; margin-right: 30px;">
                                     <img nolazy="" class="w-full h-full object-cover lazyload"  alt="" src="https://images.unsplash.com/photo-1496147433903-1e62fdb6f4be?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGUlMjBiaWtlfGVufDB8fDR8fHwy">
                                </div>
                                <div class="swiper-slide h-auto" style="width: 519px; margin-right: 30px;">
                                     <img nolazy="" class="w-full h-full object-cover lazyload"  alt="" src="https://images.unsplash.com/photo-1497515098781-e965764ab601?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGUlMjBiaWtlfGVufDB8fDR8fHwy">
                                </div>
                                 
                            </div>
                        </div>

                        <div class="relative">
                            <div class="swiper control mt-4 swiper-initialized swiper-horizontal swiper-watch-progress swiper-thumbs">
                                <div class="swiper-wrapper [&_.swiper-slide]:rounded-2xl lg:[&_.swiper-slide]:rounded-3xl [&_.swiper-slide]:overflow-hidden" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms; transition-delay: 0ms;">
                                    <div class="swiper-slide h-auto !transition-all duration-500 opacity-60 [&_.swiper-slide-thumb-active]:opacity-100 swiper-slide-visible swiper-slide-fully-visible swiper-slide-active swiper-slide-thumb-active" style="width: 179.667px; margin-right: 10px;">
                                         <img nolazy="" class="w-full h-full object-cover lazyload"  alt="" src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2244&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                    </div>
                                    <div class="swiper-slide h-auto !transition-all duration-500 opacity-60 [&_.swiper-slide-thumb-active]:opacity-100 swiper-slide-next swiper-slide-visible swiper-slide-fully-visible" style="width: 179.667px; margin-right: 10px;">
                                        <img nolazy="" class="w-full h-full object-cover lazyload"  alt="" src="https://images.unsplash.com/photo-1496147539180-13929f8aa03a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZSUyMGJpa2V8ZW58MHx8NHx8fDI%3D">
                                    </div>
                                    <div class="swiper-slide h-auto !transition-all duration-500 opacity-60 [&_.swiper-slide-thumb-active]:opacity-100 swiper-slide-visible swiper-slide-fully-visible" style="width: 179.667px; margin-right: 10px;">
                                       <img nolazy="" class="w-full h-full object-cover lazyload"  alt="" src="https://images.unsplash.com/photo-1496147433903-1e62fdb6f4be?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGUlMjBiaWtlfGVufDB8fDR8fHwy">
                                    </div>
                                    <div class="swiper-slide h-auto !transition-all duration-500 opacity-60 [&_.swiper-slide-thumb-active]:opacity-100" style="width: 179.667px; margin-right: 10px;">
                                        <img nolazy="" class="w-full h-full object-cover lazyload"  alt="" src="https://images.unsplash.com/photo-1497515098781-e965764ab601?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGUlMjBiaWtlfGVufDB8fDR8fHwy">
                                    </div>
                                   
                                </div>
                            </div>

                            <div class="flex justify-between swiper-nav absolute top-1/2 translate-y-[-50%] left-0 right-0 w-full z-10 pointer-events-none">
                                <div class="swiper-button-prev pointer-events-auto cursor-pointer flex justify-center items-center w-[45px] h-[45px] rounded-[50%] bg-[#fff] [&amp;:not(.swiper-button-disabled)>svg>path]:stroke-white [&_.swiper-button-disabled]:bg-white [&_.swiper-button-disabled]:transition-transform transition-transform ms-[-2%] swiper-button-disabled" style="box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.25);">
                                    <svg viewBox="0 0 11 18" fill="none" width="11"><path d="M9.96832 0.874023L1.84332 8.99902L9.96832 17.124" stroke="#233808" stroke-width="2"></path></svg>               
                                </div>
                                <div class="swiper-button-next pointer-events-auto cursor-pointer flex justify-center items-center w-[45px] h-[45px] rounded-[50%] bg-[#fff] [&amp;:not(.swiper-button-disabled)>svg>path]:stroke-white [&_.swiper-button-disabled]:bg-white [&_.swiper-button-disabled]:transition-transform transition-transform me-[-2%]" style="box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.25);">
                                    <svg viewBox="0 0 11 18" fill="none" width="11"><path d="M1 0.999023L9.125 9.12402L1 17.249" stroke="#233808" stroke-width="2"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div class="hidden lg:flex lg:flex-wrap lg:justify-center lg:mt-[30px] [&_img]:max-w-[24px] [&_img]:max-h-auto">
                            <div class="w-6/12 md:w-4/12 p-3">
                                      <img src="https://img.icons8.com/?size=100&id=AdSgGRnON0R9&format=png" class="img-fluid view-animation" /> 
                                <strong class="text-[15px] text-black font-semibold leading-[1.2] tracking-[-0.15px] capitalize mb-2">250W Powerful Motor</strong>
                                <p class="text-[14px] text-[#4D4D4D] tracking-[-0.14px] capitalize">
                                    Peak Power of 350W 
                                </p>
                            </div>
                            <div class="w-6/12 md:w-4/12 p-3">
                                <img src="https://img.icons8.com/?size=100&id=FZVdgkJT1VjQ&format=png" class="img-fluid view-animation" /> 
                                <strong class="text-[15px] text-black font-semibold leading-[1.2] tracking-[-0.15px] capitalize mb-2">48V 12.5ah battery</strong>
                                <p class="text-[14px] text-[#4D4D4D] tracking-[-0.14px] capitalize">Brand Battery</p>
                            </div>
                            <div class="w-6/12 md:w-4/12 p-3">
                              <img src="https://img.icons8.com/?size=100&id=119920&format=png" class="img-fluid view-animation" /> 
                                <strong class="text-[15px] text-black font-semibold leading-[1.2] tracking-[-0.15px] capitalize mb-2">Dual mechanical</strong>
                                <p class="text-[14px] text-[#4D4D4D] tracking-[-0.14px] capitalize">Guaranteed safe riding</p>
                            </div>
                            <div class="w-6/12 md:w-4/12 p-3">
                               <img src="https://img.icons8.com/?size=160&id=ik972OFH0_vz&format=png" class="img-fluid view-animation" /> 
                                <strong class="text-[15px] text-black font-semibold leading-[1.2] tracking-[-0.15px] capitalize mb-2">65 KM Max Range</strong>
                                <p class="text-[14px] text-[#4D4D4D] tracking-[-0.14px] capitalize">On A Single Charge</p>
                            </div>
                            <div class="w-6/12 md:w-4/12 p-3">
                               <img src="https://img.icons8.com/?size=128&id=VB3TWEW571Gu&format=png" class="img-fluid view-animation" /> 
                                <strong class="text-[15px] text-black font-semibold leading-[1.2] tracking-[-0.15px] capitalize mb-2">26-Inch Fat Tire</strong>
                                <p class="text-[14px] text-[#4D4D4D] tracking-[-0.14px] capitalize">Multipurpose tires</p>
                            </div>
                            <div class="w-6/12 md:w-4/12 p-3">
                              <img src="https://img.icons8.com/?size=100&id=120148&format=png" class="img-fluid view-animation" /> 
                                <strong class="text-[15px] text-black font-semibold leading-[1.2] tracking-[-0.15px] capitalize mb-2">Speed 25KM/H</strong>
                                <p class="text-[14px] text-[#4D4D4D] tracking-[-0.14px] capitalize">Passion and speed</p>
                            </div>
                        </div>

                        <div class="hidden lg:block lg:w-full">
                            <div class="accordion__title cursor-pointer transition-colors duration-500 relative font-bold text-[#353535] uppercase text-base lg:text-[17px] py-[18px] pr-14  after:w-0 after:h-0 after:border-8 after:border-b-0 after:border-transparent after:border-t-black after:block after:absolute after:right-6 after:top-1/2 after:-translate-y-1/2 after:transition-[transform] after:duration-500 [&_.active]:after:rotate-180 active">
                                Description
                            </div>
                            <div class="accordion__content h-0 overflow-hidden transition-[height] duration-500 border-b border-b-[#CFD3D6]" style="height: 305px;">
                                <div class="pb-6 lg:text-xl">
                                    <p class="mb-8">
                                        The DYU C1 electric bike is the ideal choice for commuters seeking a reliable, stylish, and efficient transportation solution. Its 26-inch wheels and advanced shock absorption ensure a smooth ride, even on rough terrain.
                                    </p>
                                    <p class="mb-8">
                                        Combining performance, style, and functionality, the DYU C1 is perfect for anyone looking for a comfortable and efficient way to get around.
                                    </p>
                                    <p>
                                        Upgrade your daily commute with the DYU C1 electric bike. Experience the perfect blend of convenience, power, and style. Order yours today and start enjoying the freedom of electric biking!
                                    </p>
                                </div>
                            </div>

                            <div class="accordion__title cursor-pointer transition-colors duration-500 relative font-bold text-[#353535] uppercase text-base lg:text-[17px] py-[18px] pr-14  after:w-0 after:h-0 after:border-8 after:border-b-0 after:border-transparent after:border-t-black after:block after:absolute after:right-6 after:top-1/2 after:-translate-y-1/2 after:transition-[transform] after:duration-500 [&_.active]:after:rotate-180">
                                Review
                            </div>
                            <div class="accordion__content h-0 overflow-hidden transition-[height] duration-500 border-b border-b-[#CFD3D6]">
                                <div class="pb-6 lg:text-xl relative">
                                    <div class="swiper swiper-mini-testimonial swiper-initialized swiper-horizontal swiper-backface-hidden">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide flex flex-col lg:flex-row gap-x-[10px] swiper-slide-active" style="width: 559px; margin-right: 30px;">
                                                <div class="flex-shrink-0">
                                                    <picture><source data-srcset="assets/images/mini-review-01-208px.webp 208w" type="image/webp"><img class="w-[104px] lazyload" alt="" data-src="assets/images/mini-review-01.png" width="208" height="140"></picture>
                                                </div>
                                                <div>
                                                    <p class="text-[19.39px] text-[#080808] font-semibold mb-[9px]">
                                                        C1 Purchase
                                                    </p>
                                                    <p>
                                                        After a bit of a wait received well and good. Unfortunately Ive had some health issues which have prevented me from my first ride but have assembled the bike and apart from some tweeking to get the front wheel correctly lined up without scraping the disc brake, it is all together. Looks fantastic and hoping to be on the road this weekend.
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="swiper-slide flex flex-col lg:flex-row gap-x-[10px] swiper-slide-next" style="width: 559px; margin-right: 30px;">
                                                <div class="flex-shrink-0">
                                                    <picture><source data-srcset="assets/images/mini-review-01-208px.webp 208w" type="image/webp"><img class="w-[104px] lazyload" alt="" data-src="assets/images/mini-review-01.png" width="208" height="140"></picture>
                                                </div>
                                                <div>
                                                    <p class="text-[19.39px] text-[#080808] font-semibold mb-[9px]">
                                                        What an awesome bike
                                                    </p>
                                                    <p>
                                                        I bought this bike for my partner for her birthday and she is absolutely stoked. She hadn’t ridden a bike in nearly 40 years. It was easy to assemble, easy and fun to ride and is really comfortable. The staff at Dyu are helpful and friendly which makes a huge difference when purchasing a product from interstate. The Dyu 6 is worth every penny…enjoy!
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="swiper-slide flex flex-col lg:flex-row gap-x-[10px]" style="width: 559px; margin-right: 30px;">
                                                <div class="flex-shrink-0">
                                                    <picture><source data-srcset="assets/images/mini-review-01-208px.webp 208w" type="image/webp"><img class="w-[104px] lazyload" alt="" data-src="assets/images/mini-review-01.png" width="208" height="140"></picture>
                                                </div>
                                                <div>
                                                    <p class="text-[19.39px] text-[#080808] font-semibold mb-[9px]">
                                                        Highly recommend!
                                                    </p>
                                                    <p>
                                                        Love my Ebike! DYU were great to purchase from, easy to chat to on the phone about the bike before I purchased, quick delivery and the bike was easy to assemble.I highly recommend this bike and DYU Australia.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="flex gap-x-[13px] swiper-nav lg:absolute lg:top-[34%] lg:left-[2%] z-10">
                                        <div class="swiper-button-prev mini-swiper-prev cursor-pointer p-3 bg-[#E90011] [&_.swiper-button-disabled>svg>path]:fill-black [&_.swiper-button-disabled]:bg-[#F3F4F6] transition-colors duration-300 ease-in-out">
                                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.81284 5.23623H13.1109V6.76401H3.81284L7.91034 10.8615L6.8302 11.9416L0.888672 6.00012L6.8302 0.0585938L7.91034 1.13873L3.81284 5.23623Z" fill="#fff"></path>
                                            </svg>
                                        </div>
                                        <div class="swiper-button-next mini-swiper-next cursor-pointer p-3 bg-[#E90011] [&_.swiper-button-disabled>svg>path]:fill-black [&_.swiper-button-disabled]:bg-[#F3F4F6] transition-colors duration-300 ease-in-out">
                                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.298 6.70517L-5.34058e-05 6.70517V5.1774L9.298 5.1774L5.2005 1.0799L6.28064 -0.000241118L12.2222 5.94129L6.28064 11.8828L5.2005 10.8027L9.298 6.70517Z" fill="#fff"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion__title cursor-pointer transition-colors duration-500 relative font-bold text-[#353535] uppercase text-base lg:text-[17px] py-[18px] pr-14  after:w-0 after:h-0 after:border-8 after:border-b-0 after:border-transparent after:border-t-black after:block after:absolute after:right-6 after:top-1/2 after:-translate-y-1/2 after:transition-[transform] after:duration-500 [&_.active]:after:rotate-180">
                                Guarantee
                            </div>
                            <div class="accordion__content h-0 overflow-hidden transition-[height] duration-500">
                                <div class="w-full">
                                    <p class="mb-5">
                                        The “Iron-Clad DYU” Double Guarantee
                                    </p>
                                    <p class="mb-5">
                                        Let’s face it: Not all e-bikes are built to last. Many will let you down when you need them most. But with our e-bikes, you’re investing in a powerhouse of reliability and performance, engineered and designed to exceed Australian Standards to give you a power packed ride that’s safe and reliable
                                    </p>
                                    <p class="mb-5">
                                        1. 1-Year Power Electronics Warranty: Ride with confidence knowing we’ll handle any issues with your power electronics. That’s right - we’ll cover any repairs or replacements, free for a full 12-months
                                    </p>
                                    <p class="mb-5">
                                        2. 3-Year Frame Warranty: You can rest assured that our bikes are built to the highest standards. Enjoy worry-free riding for 3 whole years, knowing we’ll fix or replace any issues with your frame at no cost to you - guaranteed!
                                    </p>
                                    <p class="mb-5">
                                        Stop wasting time with inferior bikes. Get the performance, durability, and peace of mind you deserve. Make the smart choice today and experience the ride that sets the standard.
                                    </p>
                                    <p class="mb-5">
                                        *T&amp;C’s Apply
                                    </p>
                                    <picture><source data-srcset="assets/images/guarantee-badges-320px.webp 320w, assets/images/guarantee-badges-640px.webp 640w, assets/images/guarantee-badges-1062px.webp 1062w, assets/images/guarantee-badges-1024px.webp 1024w" type="image/webp"><img class="w-full max-w-[531px] lazyload" alt="" data-src="assets/images/guarantee-badges.png" width="1062" height="198"></picture>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full lg:w-[49%] mt-4 lg:mt-0">
                        <div class="bg-[#fff] p-5 lg:px-[28px] lg:py-[30px] rounded-[14px] lg:rounded-[30px] mb-[20px] lg:mb-[10px]">
                            <p class="text-[12px] lg:text-[14px] font-semibold text-[#B4333B] uppercase w-fit bg-[#FBF4F4] py-[5px] px-[12px]  lg:py-[10px] lg:px-[18px] rounded-[100px] tracking-[0.48px] lg:tracking-[0.84px] mb-[10px] lg:mb-3">
                                Loved by 2746+ Riding Enthusiasts
                            </p>
        
                            <h1 class="text-[32px] lg:text-[55px] font-semibold lg:font-bold tracking-[-0.64px] lg:tracking-[-1.1px] leading-[1.18] mb-[10px] lg:mb-[15px]">
                                DYU C1 Electric Bike
                            </h1>
        
                            <div class="flex items-center gap-x-2 mb-[10px] lg:mb-[15px]">
                                <svg viewBox="0 0 127 25" fill="none" width="126.5"><path d="M12.25 0L15.0003 8.46454L23.9004 8.46454L16.7001 13.6959L19.4504 22.1605L12.25 16.9291L5.04963 22.1605L7.79993 13.6959L0.599558 8.46454L9.4997 8.46454L12.25 0Z" fill="#FF9900"></path><path d="M37.75 0L40.5003 8.46454L49.4004 8.46454L42.2001 13.6959L44.9504 22.1605L37.75 16.9291L30.5496 22.1605L33.2999 13.6959L26.0996 8.46454L34.9997 8.46454L37.75 0Z" fill="#FF9900"></path><path d="M63.25 0L66.0003 8.46454L74.9004 8.46454L67.7001 13.6959L70.4504 22.1605L63.25 16.9291L56.0496 22.1605L58.7999 13.6959L51.5996 8.46454L60.4997 8.46454L63.25 0Z" fill="#FF9900"></path><path d="M88.75 0L91.5003 8.46454L100.4 8.46454L93.2001 13.6959L95.9504 22.1605L88.75 16.9291L81.5496 22.1605L84.2999 13.6959L77.0996 8.46454L85.9997 8.46454L88.75 0Z" fill="#FF9900"></path><path d="M114.25 0L117 8.46454L125.9 8.46454L118.7 13.6959L121.45 22.1605L114.25 16.9291L107.05 22.1605L109.8 13.6959L102.6 8.46454L111.5 8.46454L114.25 0Z" fill="#FF9900"></path></svg>
                                <p class="font-bold text-[#404040] text-[14px] lg:text-[17px] tracking-[-0.28px] lg:tracking-[-0.34px]">Based on 194+ reviews</p>
                            </div>
        
                            <p class="mb-[20px] lg:mb-[30px]">
                                Beat traffic and conquer mountains with the high-performance DYU C1! This all terrain 350W Peak Power' e-bike boasts 65Km range on a single charge of the 12.5aH lithium-ion battery. It’s the perfect ebike to reduce commute times, save $1000s in transportation costs, and enjoy wild ‘on-and-off-road’ adventures with zero range anxiety.
                            </p>
        
                            <div class="flex gap-x-[10px] px-[20px] py-[15px] rounded-[15px] bg-[#F3F4F6] mb-[20px] lg:mb-[30px] items-center">
                                <div class="flex-shrink-0 w-full max-w-[58.84px] overflow-hidden  max-h-[58.84px] aspect-square lazyload rounded-full">
                                    <img class="h-full w-full object-cover" alt="avatar image of a man"  src="https://images.unsplash.com/photo-1444069069008-83a57aac43ac?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                </div>
                            <div>
                                    <p class="text-lg text-[#2C2B2A] font-bold">Nick. P</p>
                                    <p class="text-[14px] lg:text-base text-[#2C2B2A] font-medium">Zipping past traffic and reliving my childhood<br class="hidden lg:block tracking-[-0.16px]"> daily is a good vibe</p>
                                </div>
                            </div>
        
                            <p class="text-[14px] lg:text-base text-[#E90011] font-bold tracking-[0.64px] uppercase mb-[18px] lg:mb-[15px]">
                                BONUS For The Next 30 Orders In <span class="dyn-month">January</span>
                            </p>
        
                            <div class="flex justify-between items-center gap-[17px] mb-[20px] lg:mb-[30px] relative">
                                <div class="w-6/12 p-[6px] md:p-[10px] rounded-[10px] border border-[#F2F0F4]">
                                     <img class="mb-[10px] rounded-[10px] lazyload" alt=""  src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGUlMjBiaWtlfGVufDB8fDR8fHwy">
                                    <p class="text-[11px] lg:text-base text-center font-medium">Mobile Magnetic</p>
                                </div>
        
                                <svg viewBox="0 0 29 31" fill="none" class="absolute top-1/2 translate-y-[-50%] left-0 right-0 mx-auto" width="28.61"><ellipse cx="14.3035" cy="14.8631" rx="14.3035" ry="14.8631" transform="matrix(1 -1.54505e-07 -4.94654e-08 -1 0.393066 30.1621)" fill="#E90011"></ellipse><path d="M9.60596 15.2989H19.7214M14.6637 10.2412V20.3566" stroke="white" stroke-width="1.40834" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        
                                <div class="w-6/12 p-[6px] md:p-[10px] rounded-[10px] border border-[#F2F0F4]">
                                     <img class="mb-[10px] rounded-[10px] lazyload" alt=""  src="https://images.unsplash.com/photo-1513308549331-2e371c685fbd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZSUyMGxvY2t8ZW58MHx8NHx8fDI%3D">
                                    <p class="text-[11px] lg:text-base text-center font-medium">Ebike Lock</p>
                                </div>
                            </div>
        
                            <div class="w-full">
                                <div class="accordion__title content-sneak-peak cursor-pointer transition-colors duration-500 relative font-bold text-[#353535] uppercase text-base lg:text-[17px] py-[18px] pr-14  after:w-0 after:h-0 after:border-8 after:border-b-0 after:border-transparent after:border-t-black after:block after:absolute after:right-6 after:top-1/2 after:-translate-y-1/2 after:transition-[transform] after:duration-500 [&_.active]:after:rotate-180 [&_.active+.accordion__content]:border">
                                    Bike Specification
                                </div>
                                <div class="accordion__content partial-view relative overflow-hidden transition-[height] duration-500">
                                    <ul class="[&_>li]:flex [&_>li]:items-center [&_>li]:gap-x-[10px] [&_>li]:text-[15.505px] lg:[&_>li]:text-lg [&_>li]:leading-[1.595] [&_>li]:tracking-[-0.18px] [&_>li>svg]:flex-shrink-0 pb-[20px] lg:pb-[30px]">
                                        <li>
                                            <svg viewBox="0 0 16 16" fill="none" width="15.28"><rect x="0.283203" width="15.2832" height="15.2832" rx="7.6416" fill="#E90011"></rect><path d="M7.39698 8.51343L10.9239 5.22415C11.2443 4.9253 11.7639 4.92527 12.0843 5.22415C12.4048 5.52303 12.4047 6.00756 12.0843 6.3064L7.97719 10.1368C7.65668 10.4357 7.13715 10.4356 6.81676 10.1368L4.52355 7.99809C4.20309 7.69921 4.20309 7.21468 4.52355 6.91583C4.84402 6.61699 5.36356 6.61695 5.68398 6.91583L7.39698 8.51343Z" fill="white"></path></svg>
                                            350W Peak Power (250W Motor, 60Nm)
                                        </li>
                                        <li>
                                            <svg viewBox="0 0 16 16" fill="none" width="15.28"><rect x="0.283203" width="15.2832" height="15.2832" rx="7.6416" fill="#E90011"></rect><path d="M7.39698 8.51343L10.9239 5.22415C11.2443 4.9253 11.7639 4.92527 12.0843 5.22415C12.4048 5.52303 12.4047 6.00756 12.0843 6.3064L7.97719 10.1368C7.65668 10.4357 7.13715 10.4356 6.81676 10.1368L4.52355 7.99809C4.20309 7.69921 4.20309 7.21468 4.52355 6.91583C4.84402 6.61699 5.36356 6.61695 5.68398 6.91583L7.39698 8.51343Z" fill="white"></path></svg>
                                            LCD Screen for easy viewing in bright sunlight
                                        </li>
                                        <li>
                                            <svg viewBox="0 0 16 16" fill="none" width="15.28"><rect x="0.283203" width="15.2832" height="15.2832" rx="7.6416" fill="#E90011"></rect><path d="M7.39698 8.51343L10.9239 5.22415C11.2443 4.9253 11.7639 4.92527 12.0843 5.22415C12.4048 5.52303 12.4047 6.00756 12.0843 6.3064L7.97719 10.1368C7.65668 10.4357 7.13715 10.4356 6.81676 10.1368L4.52355 7.99809C4.20309 7.69921 4.20309 7.21468 4.52355 6.91583C4.84402 6.61699 5.36356 6.61695 5.68398 6.91583L7.39698 8.51343Z" fill="white"></path></svg>
                                            Removable fast-charging battery – 48V / 12.5AH
                                        </li>
                                        <li>
                                            <svg viewBox="0 0 16 16" fill="none" width="15.28"><rect x="0.283203" width="15.2832" height="15.2832" rx="7.6416" fill="#E90011"></rect><path d="M7.39698 8.51343L10.9239 5.22415C11.2443 4.9253 11.7639 4.92527 12.0843 5.22415C12.4048 5.52303 12.4047 6.00756 12.0843 6.3064L7.97719 10.1368C7.65668 10.4357 7.13715 10.4356 6.81676 10.1368L4.52355 7.99809C4.20309 7.69921 4.20309 7.21468 4.52355 6.91583C4.84402 6.61699 5.36356 6.61695 5.68398 6.91583L7.39698 8.51343Z" fill="white"></path></svg>
                                            Lightweight aluminium alloy frame – weight 22 kg
                                        </li>
                                        <li>
                                            <svg viewBox="0 0 16 16" fill="none" width="15.28"><rect x="0.283203" width="15.2832" height="15.2832" rx="7.6416" fill="#E90011"></rect><path d="M7.39698 8.51343L10.9239 5.22415C11.2443 4.9253 11.7639 4.92527 12.0843 5.22415C12.4048 5.52303 12.4047 6.00756 12.0843 6.3064L7.97719 10.1368C7.65668 10.4357 7.13715 10.4356 6.81676 10.1368L4.52355 7.99809C4.20309 7.69921 4.20309 7.21468 4.52355 6.91583C4.84402 6.61699 5.36356 6.61695 5.68398 6.91583L7.39698 8.51343Z" fill="white"></path></svg>
                                            Go anywhere with 26inch x 2.75 all-terrain tyres
                                        </li>
                                        <li>
                                            <svg viewBox="0 0 16 16" fill="none" width="15.28"><rect x="0.283203" width="15.2832" height="15.2832" rx="7.6416" fill="#E90011"></rect><path d="M7.39698 8.51343L10.9239 5.22415C11.2443 4.9253 11.7639 4.92527 12.0843 5.22415C12.4048 5.52303 12.4047 6.00756 12.0843 6.3064L7.97719 10.1368C7.65668 10.4357 7.13715 10.4356 6.81676 10.1368L4.52355 7.99809C4.20309 7.69921 4.20309 7.21468 4.52355 6.91583C4.84402 6.61699 5.36356 6.61695 5.68398 6.91583L7.39698 8.51343Z" fill="white"></path></svg>
                                            Smooth-shifting Shimano 7 speed derailleur&nbsp;
                                        </li>
                                        <li>
                                            <svg viewBox="0 0 16 16" fill="none" width="15.28"><rect x="0.283203" width="15.2832" height="15.2832" rx="7.6416" fill="#E90011"></rect><path d="M7.39698 8.51343L10.9239 5.22415C11.2443 4.9253 11.7639 4.92527 12.0843 5.22415C12.4048 5.52303 12.4047 6.00756 12.0843 6.3064L7.97719 10.1368C7.65668 10.4357 7.13715 10.4356 6.81676 10.1368L4.52355 7.99809C4.20309 7.69921 4.20309 7.21468 4.52355 6.91583C4.84402 6.61699 5.36356 6.61695 5.68398 6.91583L7.39698 8.51343Z" fill="white"></path></svg>
                                            LED front light for safe riding in the dark&nbsp;
                                        </li>
                                        <li>
                                            <svg viewBox="0 0 16 16" fill="none" width="15.28"><rect x="0.283203" width="15.2832" height="15.2832" rx="7.6416" fill="#E90011"></rect><path d="M7.39698 8.51343L10.9239 5.22415C11.2443 4.9253 11.7639 4.92527 12.0843 5.22415C12.4048 5.52303 12.4047 6.00756 12.0843 6.3064L7.97719 10.1368C7.65668 10.4357 7.13715 10.4356 6.81676 10.1368L4.52355 7.99809C4.20309 7.69921 4.20309 7.21468 4.52355 6.91583C4.84402 6.61699 5.36356 6.61695 5.68398 6.91583L7.39698 8.51343Z" fill="white"></path></svg>
                                            Battery Monitoring System for added safety
                                        </li>
                                    </ul>
                                </div>
                            </div>
        
                            <div class="w-full mb-[20px] lg:mb-[30px] pb-[20px] lg:pb-[30px] border-b border-b-[#CFD3D6]">
                                <p class="font-bold tracking-[0.64px] mb-[15px]">COLOR</p>
                                <input type="radio" class="hidden" name="item-color" id="item-color" value="gray">
                                <label for="item-color" class="block h-[46px] w-[46px] bg-[#5A5A5A] border-[3px] border-[#fdebed] rounded-full cursor-pointer"></label>
                            </div>
        
                            <div class="w-full flex flex-wrap lg:justify-between items-center mb-[20px] lg:mb-[30px] gap-[15px] lg:gap-0">
                                <p class="text-[45px] lg:text-[65px] text-[#2c2b2a] tracking-[-2px] font-semibold lg:font-bold leading-[1]">$<span data-price="" data-product="7948464455855" data-variant="43886360953007" class="loaded">1,790</span></p>
        
                                <p class="text-[22px] lg:text-[26px] text-[#9B9B9B] font-medium tracking-[-2px] line-through decoration-black">$<span data-oriprice="">2250</span></p>
        
                                <div class="flex justify-center items-center gap-x-[6.25px] lg:gap-x-[10px] bg-[#FFF5F6] px-[15px] py-[10px] rounded-[9.38px] lg:rounded-[15px]">
                                     <img src="https://img.icons8.com/?size=100&id=120092&format=png" class="w-full max-w-[13.382px] lg:max-w-[16.95px]"  > 
                                    <p class="text-[#1A2A46] font-semibold text-[12px] lg:text-xl">You Save $460</p>
                                </div>
        
                                <div class="w-full lg:mt-5">
                                    <p class="text-[14px] lg:text-base">Or 4 interest-free payments of $<span class="afterpay-installment">447.50</span> fortnightly with  <img class="afterpay-icon h-4 inline relative top-[1px]" src="logo-afterpay.png" alt="afterpay"></p>
                                </div>
                            </div>
        
                            <div class="flex items-center gap-x-[14px] mb-[20px] lg:mb-[30px]">
                                <p class="text-[14px] text-[#2C2B2A] tracking-[0.56px] lg:tracking-[2.72px] uppercase font-bold lg:font-semibold">QUANTITY:</p>
        
                                <div class="flex items-center border border-[#D6D6D6] rounded-[49px] quantity">
                                    <span class="font-semibold ps-3 cursor-pointer quantity__minus">-</span>
        
                                    <input type="number" name="item-qty" class="text-center w-[47px] lg:w-[83px] py-[6px] lg:py-[10px] hide-input-arrows border-none quantity__input" id="item-qty" value="1">
        
                                    <span class="font-semibold pe-3 cursor-pointer quantity__plus">+</span>
                                </div>
        
                                <div class="flex items-center gap-x-[10px]">
                                    <div class="flex-shrink-0 bg-[#5DB56E] w-2 h-2 lg:w-[13px] lg:h-[13px] rounded-[50%] animate-pulse -mt-[1px]"></div>
                                    <p class="text-[14px] lg:text-base font-medium leading-[1.05] tracking-[-0.28px] lg:tracking-normal text-[#5DB56E]">
                                        The product is in stock now! 
                                    </p>
                                </div>
                            </div>
        
                            <a href="https://dyuaus.com.au/cart/43886360953007:1?utm_source=direct&amp;page_source=kk_lander&amp;" class="flex justify-center items-center gap-x-[16px] text-lg text-white font-bold bg-[#E90011] rounded-[52px] py-[14px] w-full mb-[10px] lg:mb-[20px]" data-checkout="">
                                Add To Cart
                                <svg viewBox="0 0 17 16" fill="none" width="15"><path d="M0.5 8H15.5M15.5 8L9 1.5M15.5 8L9 14.5" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg>
                            </a>
        
                            <div class="flex flex-wrap justify-center items-center gap-y-[10px] lg:gap-y-[20px]">
                                <div class="w-5/12 lg:w-4/12">
                                    <p class="text-[14px] lg:text-base text-[#2C2B2A]">Secure Checkout</p>
                                </div>
                                <div class="w-7/12 lg:w-1/2 text-center">
                                     <img class="flex-shrink-0 w-full max-w-[172.75.5px] lg:max-w-[80px] lazyload" alt="" src="https://img.icons8.com/?size=100&id=121571&format=png" width="505" height="40">
                                </div>      
        
                                <div class="w-5/12 lg:w-4/12">
                                    <p class="text-[14px] lg:text-base text-[#2C2B2A]">Trusted Delivery</p>
                                </div>
                                <div class="w-1/2">
                                    <img class="flex-shrink-0 w-full max-w-[136px] lg:max-w-[80px] lazyload" alt=""  src="https://img.icons8.com/?size=160&id=ik972OFH0_vz&format=png" width="424" height="54"> 
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-wrap justify-center gap-x-[6px] lg:gap-x-[8px]">
                            <div class="w-[49%] flex justify-center items-center gap-x-[7px] bg-[#1A2A46] p-[15px] lg:p-[25px] rounded-[10px] lg:rounded-[20px]">
                               <img src="https://img.icons8.com/?size=100&id=CY1rBGBPIwL-&format=png" class="w-full max-w-[23.51px] lg:max-w-[40px] invert" />
                                <p class="text-white font-bold text-[12px] lg:text-xl leading-[1.14]">
                                    1-3 Yr “Iron-Clad” Double Guarantee
                                </p>
                            </div>
                            <div class="w-[49%] flex justify-center items-center gap-x-[7px] bg-[#1A2A46] p-[15px] lg:p-[25px] rounded-[10px] lg:rounded-[20px]">
                                <img src="https://img.icons8.com/?size=128&id=xBLiYPD7RRe7&format=png" class="w-full max-w-[23.51px] lg:max-w-[40px] invert" />
                                <p class="text-white font-bold text-[12px] lg:text-xl leading-[1.14]">
                                    Free Shipping Australia wide
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-wrap justify-center mt-[20px] lg:hidden">
                            <div class="w-6/12 md:w-4/12 p-3">
                               <img src="https://img.icons8.com/?size=100&id=AdSgGRnON0R9&format=png" class="img-fluid view-animation" /> 
                                <strong class="text-[15px] text-black font-semibold leading-[1.2] tracking-[-0.15px] capitalize mb-2">250W Powerful Motor</strong>
                                <p class="text-[14px] text-[#4D4D4D] tracking-[-0.14px] capitalize">Peak Power of 250W</p>
                            </div>
                            <div class="w-6/12 md:w-4/12 p-3">
                            <img src="https://img.icons8.com/?size=100&id=FZVdgkJT1VjQ&format=png" class="img-fluid view-animation" /> 
                               
                                <strong class="text-[15px] text-black font-semibold leading-[1.2] tracking-[-0.15px] capitalize mb-2">48V 12.5ah battery</strong>
                                <p class="text-[14px] text-[#4D4D4D] tracking-[-0.14px] capitalize">Brand Battery</p>
                            </div>
                            <div class="w-6/12 md:w-4/12 p-3">
                                <img src="https://img.icons8.com/?size=100&id=119920&format=png" class="img-fluid view-animation" /> 
                                <strong class="text-[15px] text-black font-semibold leading-[1.2] tracking-[-0.15px] capitalize mb-2">Dual mechanical</strong>
                                <p class="text-[14px] text-[#4D4D4D] tracking-[-0.14px] capitalize">Guaranteed safe riding</p>
                            </div>
                            <div class="w-6/12 md:w-4/12 p-3">
                               <img src="https://img.icons8.com/?size=160&id=ik972OFH0_vz&format=png" class="img-fluid view-animation" /> 
                                <strong class="text-[15px] text-black font-semibold leading-[1.2] tracking-[-0.15px] capitalize mb-2">65 KM Max Range</strong>
                                <p class="text-[14px] text-[#4D4D4D] tracking-[-0.14px] capitalize">On A Single Charge</p>
                            </div>
                            <div class="w-6/12 md:w-4/12 p-3">
                               <img src="https://img.icons8.com/?size=128&id=VB3TWEW571Gu&format=png" class="img-fluid view-animation" /> 
                                <strong class="text-[15px] text-black font-semibold leading-[1.2] tracking-[-0.15px] capitalize mb-2">26-Inch Fat Tire</strong>
                                <p class="text-[14px] text-[#4D4D4D] tracking-[-0.14px] capitalize">Multipurpose tires</p>
                            </div>
                            <div class="w-6/12 md:w-4/12 p-3">
                               <img src="https://img.icons8.com/?size=100&id=120148&format=png" class="img-fluid view-animation" /> 
                                <strong class="text-[15px] text-black font-semibold leading-[1.2] tracking-[-0.15px] capitalize mb-2">Speed 25KM/H</strong>
                                <p class="text-[14px] text-[#4D4D4D] tracking-[-0.14px] capitalize">Passion and speed</p>
                            </div>
                        </div>

                        <div class="block w-full lg:hidden">
                            <div class="accordion__title cursor-pointer transition-colors duration-500 relative font-bold text-[#353535] uppercase text-base lg:text-[17px] py-[18px] pr-14 after:w-0 after:h-0 after:border-8 after:border-b-0 after:border-transparent after:border-t-black after:block after:absolute after:right-6 after:top-1/2 after:-translate-y-1/2 after:transition-[transform] after:duration-500 [&_.active]:after:rotate-180">
                                Description
                            </div>
                            <div class="accordion__content h-0 overflow-hidden transition-[height] duration-500 border-b border-b-[#CFD3D6]">
                                <div class="pb-6 lg:text-xl">
                                    <p class="mb-8">
                                        The DYU C1 electric bike is the ideal choice for commuters seeking a reliable, stylish, and efficient transportation solution. Its 26-inch wheels and advanced shock absorption ensure a smooth ride, even on rough terrain.
                                    </p>
                                    <p class="mb-8">
                                        Combining performance, style, and functionality, the DYU C1 is perfect for anyone looking for a comfortable and efficient way to get around.
                                    </p>
                                    <p>
                                        Upgrade your daily commute with the DYU C1 electric bike. Experience the perfect blend of convenience, power, and style. Order yours today and start enjoying the freedom of electric biking!
                                    </p>
                                </div>
                            </div>

                            <div class="accordion__title cursor-pointer transition-colors duration-500 relative font-bold text-[#353535] uppercase text-base lg:text-[17px] py-[18px] pr-14  after:w-0 after:h-0 after:border-8 after:border-b-0 after:border-transparent after:border-t-black after:block after:absolute after:right-6 after:top-1/2 after:-translate-y-1/2 after:transition-[transform] after:duration-500 [&_.active]:after:rotate-180">
                                Review
                            </div>
                            <div class="accordion__content h-0 overflow-hidden transition-[height] duration-500 border-b border-b-[#CFD3D6]">
                                <div class="pb-6 lg:text-xl relative">
                                    <div class="swiper swiper-mini-testimonial mb-5 swiper-initialized swiper-horizontal">
                                        <div class="swiper-wrapper" style="transition-duration: 0ms; transition-delay: 0ms;">
                                            <div class="swiper-slide flex flex-col lg:flex-row gap-x-[10px]">
                                                <div class="flex-shrink-0">
                                                    <picture><source data-srcset="assets/images/mini-review-01-208px.webp 208w" type="image/webp"><img class="w-[104px] lazyload" alt="" data-src="assets/images/mini-review-01.png" width="208" height="140"></picture>
                                                </div>
                                                <div>
                                                    <p class="text-[19.39px] text-[#080808] font-semibold mb-[9px]">
                                                        C1 Purchase
                                                    </p>
                                                    <p>
                                                        After a bit of a wait received well and good. Unfortunately Ive had some health issues which have prevented me from my first ride but have assembled the bike and apart from some tweeking to get the front wheel correctly lined up without scraping the disc brake, it is all together. Looks fantastic and hoping to be on the road this weekend.
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="swiper-slide flex flex-col lg:flex-row gap-x-[10px]">
                                                <div class="flex-shrink-0">
                                                    <picture><source data-srcset="assets/images/mini-review-01-208px.webp 208w" type="image/webp"><img class="w-[104px] lazyload" alt="" data-src="assets/images/mini-review-01.png" width="208" height="140"></picture>
                                                </div>
                                                <div>
                                                    <p class="text-[19.39px] text-[#080808] font-semibold mb-[9px]">
                                                        What an awesome bike
                                                    </p>
                                                    <p>
                                                        I bought this bike for my partner for her birthday and she is absolutely stoked. She hadn’t ridden a bike in nearly 40 years. It was easy to assemble, easy and fun to ride and is really comfortable. The staff at Dyu are helpful and friendly which makes a huge difference when purchasing a product from interstate. The Dyu 6 is worth every penny…enjoy!
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="swiper-slide flex flex-col lg:flex-row gap-x-[10px]">
                                                <div class="flex-shrink-0">
                                                    <picture><source data-srcset="assets/images/mini-review-01-208px.webp 208w" type="image/webp"><img class="w-[104px] lazyload" alt="" data-src="assets/images/mini-review-01.png" width="208" height="140"></picture>
                                                </div>
                                                <div>
                                                    <p class="text-[19.39px] text-[#080808] font-semibold mb-[9px]">
                                                        Highly recommend!
                                                    </p>
                                                    <p>
                                                        Love my Ebike! DYU were great to purchase from, easy to chat to on the phone about the bike before I purchased, quick delivery and the bike was easy to assemble.I highly recommend this bike and DYU Australia.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="flex justify-center gap-x-[13px] swiper-nav z-10">
                                        <div class="swiper-button-prev mini-swiper-prev cursor-pointer p-3 bg-[#E90011] [&_.swiper-button-disabled>svg>path]:fill-black [&_.swiper-button-disabled]:bg-[#F3F4F6] transition-colors duration-300 ease-in-out">
                                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.81284 5.23623H13.1109V6.76401H3.81284L7.91034 10.8615L6.8302 11.9416L0.888672 6.00012L6.8302 0.0585938L7.91034 1.13873L3.81284 5.23623Z" fill="#fff"></path>
                                            </svg>
                                        </div>
                                        <div class="swiper-button-next mini-swiper-next cursor-pointer p-3 bg-[#E90011] [&_.swiper-button-disabled>svg>path]:fill-black [&_.swiper-button-disabled]:bg-[#F3F4F6] transition-colors duration-300 ease-in-out">
                                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.298 6.70517L-5.34058e-05 6.70517V5.1774L9.298 5.1774L5.2005 1.0799L6.28064 -0.000241118L12.2222 5.94129L6.28064 11.8828L5.2005 10.8027L9.298 6.70517Z" fill="#fff"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion__title cursor-pointer transition-colors duration-500 relative font-bold text-[#353535] uppercase text-base lg:text-[17px] py-[18px] pr-14  after:w-0 after:h-0 after:border-8 after:border-b-0 after:border-transparent after:border-t-black after:block after:absolute after:right-6 after:top-1/2 after:-translate-y-1/2 after:transition-[transform] after:duration-500 [&_.active]:after:rotate-180">
                                Guarantee
                            </div>
                            <div class="accordion__content h-0 overflow-hidden transition-[height] duration-500">
                                <div class="w-full">
                                    <p class="mb-5">
                                        The “Iron-Clad DYU” Double Guarantee
                                    </p>
                                    <p class="mb-5">
                                        Let’s face it: Not all e-bikes are built to last. Many will let you down when you need them most. But with our e-bikes, you’re investing in a powerhouse of reliability and performance, engineered and designed to exceed Australian Standards to give you a power packed ride that’s safe and reliable
                                    </p>
                                    <p class="mb-5">
                                        1. 1-Year Power Electronics Warranty: Ride with confidence knowing we’ll handle any issues with your power electronics. That’s right - we’ll cover any repairs or replacements, free for a full 12-months
                                    </p>
                                    <p class="mb-5">
                                        2. 3-Year Frame Warranty: You can rest assured that our bikes are built to the highest standards. Enjoy worry-free riding for 3 whole years, knowing we’ll fix or replace any issues with your frame at no cost to you - guaranteed!
                                    </p>
                                    <p class="mb-5">
                                        Stop wasting time with inferior bikes. Get the performance, durability, and peace of mind you deserve. Make the smart choice today and experience the ride that sets the standard.
                                    </p>
                                    <p class="mb-5">
                                        *T&amp;C’s Apply
                                    </p>
                                    <picture><source data-srcset="assets/images/guarantee-badges-320px.webp 320w, assets/images/guarantee-badges-640px.webp 640w, assets/images/guarantee-badges-1062px.webp 1062w, assets/images/guarantee-badges-1024px.webp 1024w" type="image/webp"><img class="w-full max-w-[531px] lazyload" alt="" data-src="assets/images/guarantee-badges.png" width="1062" height="198"></picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

export const WilkopetcareHero = () => {
	return `
        <section class="pt-[70px] md:pt-[103px] pb-[80px] md:pb-[95px] relative bg-[#D3ECCE]">
            <div class="container relative z-20 px-6">
                <div class="flex flex-wrap justify-center lg:flex-nowrap gap-x-8">
                    <div class="w-full md:w-10/12 lg:w-1/2 mb-[10px] md:mb-[30px]">
                        <div class="flex sticky-slider transition-all duration-150" style="transform: translateY(82px);">
                            <div class="relative w-full">
                                <div class="relative">
                                    <div class="swiper swiper-top swiper-initialized swiper-horizontal swiper-backface-hidden">
                                        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-1160px, 0px, 0px); transition-delay: 0ms;">
                                            <div class="swiper-slide" style="width: 570px; margin-right: 10px;" data-swiper-slide-index="0">
                                               <img nolazy="" class="nolazy w-full rounded-[14px] md:rounded-[25px] nolazy hidden md:block" src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" > 
                                                
                                            </div>        
                                            <div class="swiper-slide " style="width: 570px; margin-right: 10px;" data-swiper-slide-index="1">
                                               <img nolazy="" class="nolazy w-full rounded-[14px] md:rounded-[25px] nolazy hidden md:block" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" > 
                                            </div>
                                            <div class="swiper-slide" style="width: 570px; margin-right: 10px;" data-swiper-slide-index="2"> 
                                               <img nolazy="" class="nolazy w-full rounded-[14px] md:rounded-[25px] nolazy hidden md:block" src="https://images.unsplash.com/photo-1576873689575-e3d860bccdc2?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" > 
                                            </div>
                                            <div class="swiper-slide" style="width: 570px; margin-right: 10px;" data-swiper-slide-index="2"> 
                                               <img nolazy="" class="nolazy w-full rounded-[14px] md:rounded-[25px] nolazy hidden md:block" src="https://images.unsplash.com/photo-1583337426008-2fef51aa841d?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZyUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D" alt="" > 
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="swiper control mt-4 px-[1px] py-[1px] swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden swiper-thumbs">
                                        <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms; transition-delay: 0ms;">
                                            <div class="swiper-slide h-auto transition-all duration-500 cursor-pointer swiper-slide-visible swiper-slide-fully-visible swiper-slide-active" style="width: 182.667px; margin-right: 10px;" data-swiper-slide-index="0">
                                                <img nolazy="" class="nolazy w-full rounded-[14px] md:rounded-[25px] nolazy hidden md:block" src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" > 
                                            </div>
                                            <div class="swiper-slide h-auto transition-all duration-500 cursor-pointer swiper-slide-visible swiper-slide-fully-visible" style="width: 182.667px; margin-right: 10px;" data-swiper-slide-index="1">
                                                <img nolazy="" class="nolazy w-full rounded-[14px] md:rounded-[25px] nolazy hidden md:block" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" > 
                                            </div>
                                            <div class="swiper-slide h-auto transition-all duration-500 cursor-pointer swiper-slide-visible swiper-slide-fully-visible swiper-slide-thumb-active" style="width: 182.667px; margin-right: 10px;" data-swiper-slide-index="2">
                                               <img nolazy="" class="nolazy w-full rounded-[14px] md:rounded-[25px] nolazy hidden md:block" src="https://images.unsplash.com/photo-1576873689575-e3d860bccdc2?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" > 
                                            </div>
                                            <div class="swiper-slide h-auto transition-all duration-500 cursor-pointer" style="width: 182.667px; margin-right: 10px;" data-swiper-slide-index="3">
                                                    <img nolazy="" class="nolazy w-full rounded-[14px] md:rounded-[25px] nolazy hidden md:block" src="https://images.unsplash.com/photo-1583337426008-2fef51aa841d?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZyUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D" alt="" > 
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="flex justify-center mt-0 swiper-nav">
                                        <div class="z-[1000] swiper-button-prev absolute outline-none inline-block md:flex justify-center items-center mt-0 top-[50%] translate-y-[-50%] rounded-full transition-all duration-300 cursor-pointer mx-0 left-[-12px] md:left-[-13px] max-w-[28px] md:max-w-[35px] h-[28px] md:h-[35px]"><svg viewBox="0 0 36 36" fill="none" class="w-full"><circle cx="17.5244" cy="17.5244" r="17.5244" fill="#FF7F5B"></circle><path d="M10.6421 17.0582C10.3852 17.3151 10.3852 17.7317 10.6421 17.9887L14.8296 22.1762C15.0866 22.4332 15.5032 22.4332 15.7602 22.1762C16.0172 21.9192 16.0172 21.5026 15.7602 21.2457L12.038 17.5234L15.7602 13.8012C16.0172 13.5443 16.0172 13.1276 15.7602 12.8707C15.5032 12.6137 15.0866 12.6137 14.8296 12.8707L10.6421 17.0582ZM11.1074 18.1814H23.9423V16.8654H11.1074V18.1814Z" fill="white"></path></svg></div>
                                        <div class="z-[1000] swiper-button-next absolute outline-none inline-block md:flex justify-center items-center mt-0 top-[50%] translate-y-[-50%] rounded-full transition-all duration-300 cursor-pointer mx-0 right-[-12px] md:right-[-13px] w-[28px] md:w-[35px] h-[28px] md:h-[35px]"><svg viewBox="0 0 36 36" fill="none" class="w-full"><circle cx="17.5244" cy="17.5244" r="17.5244" transform="matrix(-1 0 0 1 35.0488 0)" fill="#FF7F5B"></circle><path d="M24.4067 17.0582C24.6636 17.3151 24.6636 17.7317 24.4067 17.9887L20.2192 22.1762C19.9622 22.4332 19.5456 22.4332 19.2886 22.1762C19.0317 21.9192 19.0317 21.5026 19.2886 21.2457L23.0109 17.5234L19.2886 13.8012C19.0317 13.5443 19.0317 13.1276 19.2886 12.8707C19.5456 12.6137 19.9622 12.6137 20.2192 12.8707L24.4067 17.0582ZM23.9414 18.1814H11.1065V16.8654H23.9414V18.1814Z" fill="white"></path></svg></div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-10/12 lg:w-1/2">
                        <div class="bg-white rounded-[14px] md:rounded-[25px] px-[17px] py-[19px] md:px-[37px] md:pt-[37px] md:pb-[27px] mb-[10px]">
                            <span class="bg-[#D3ECCE] text-[#191919] uppercase rounded-[100px] font-fm text-[1.2rem] md:text-[1.2rem] px-5 py-2  md:py-1 tracking-[.5px] md:tracking-[1.6px] mb-[10px] block md:inline-block text-center md:text-left">
                            loved by 10,134+ OF pet parents aus wide!</span>
                            <h1 class="font-tss text-xl md:text-xl xl:text-5xl tracking-[-.4px] md:tracking-[-.6px] leading-[1.1] md:leading-[1.038] mb-[12px] md:mb-[18px]">Wilkool™ Cooling Vest Bundle</h1>
                            <div class="mb-[14px] md:mb-[17px] gap-2 flex items-center">
                                <svg viewBox="0 0 128 25" fill="none" class="max-w-[77px] md:max-w-[126px] mr-[5px] md:mr-[7px] inline"><path d="M13.0771 0.25L15.8274 8.71454L24.7276 8.71454L17.5272 13.9459L20.2775 22.4105L13.0771 17.1791L5.87678 22.4105L8.62708 13.9459L1.42671 8.71454L10.3269 8.71454L13.0771 0.25Z" fill="#FF9900"></path><path d="M38.5771 0.25L41.3274 8.71454L50.2276 8.71454L43.0272 13.9459L45.7775 22.4105L38.5771 17.1791L31.3768 22.4105L34.1271 13.9459L26.9267 8.71454L35.8269 8.71454L38.5771 0.25Z" fill="#FF9900"></path><path d="M64.0771 0.25L66.8274 8.71454L75.7276 8.71454L68.5272 13.9459L71.2775 22.4105L64.0771 17.1791L56.8768 22.4105L59.6271 13.9459L52.4267 8.71454L61.3269 8.71454L64.0771 0.25Z" fill="#FF9900"></path><path d="M89.5771 0.25L92.3274 8.71454L101.228 8.71454L94.0272 13.9459L96.7775 22.4105L89.5771 17.1791L82.3768 22.4105L85.1271 13.9459L77.9267 8.71454L86.8269 8.71454L89.5771 0.25Z" fill="#FF9900"></path><path d="M115.077 0.25L117.827 8.71454L126.728 8.71454L119.527 13.9459L122.278 22.4105L115.077 17.1791L107.877 22.4105L110.627 13.9459L103.427 8.71454L112.327 8.71454L115.077 0.25Z" fill="#FF9900"></path></svg>
                                <img class="w-auto h-[25px]  lazyload"  alt=""  src="icon-google.png"> 
                               <img class="w-auto h-[22px]  lazyload opacity-70" src="icon-facebook.svg" alt=""> 
                                <p class="mb-0 leading-[1] inline text-[1.4rem] md:text-[1.8rem] tracking-[-.5px] md:tracking-[-.5px]">Top rated product</p>
                            </div>
                            <p class="font-fm tracking-[-.1px] mb-[13px] md:mb-[25px]">Lower your doggo’s core temperature in minutes with our fast-absorbing rapid evap ‘HydroCool Fusion’ tech with industry-leading 3-hour slow-release technology &amp; a 60 doggo-year quality guarantee.</p>
                            <div class="bg-[#FFFBEF] py-[10px] pl-[10px] pr-[34px] md:py-[15px] md:px-[20px] flex text-[1.4rem] md:text-[1.6rem] leading-[1.3] rounded-[15px] tracking-[.2px] mb-[14px] md:mb-[29px]">

<div class="w-[40px] h-[40px] md:w-[58px] md:h-[58px] mr-[10px] rounded-full overflow-hidden shrink-0">
                                <img class="w-full h-full object-cover lazyload"  alt=""  src="https://images.unsplash.com/photo-1588145497009-0b234790d741?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0JTIwd29tZW58ZW58MHx8MHx8fDA%3D">
</div>
                                <div class="block">
                                    <span class="block font-fb text-[1.6rem] md:text-[1.6rem] md:text-[1.8rem]">Susan. G</span>
                                    <p class="mb-0">“I am gobsmacked, never have I seen anything work like this! My girl was overheating and in 2 mins of the Wilkool she laid down and slept peacefully”</p>
                                </div>
                            </div>
                            <ul class="p-0 m-0 list-none text-[1.6rem] md:text-[1.8rem]">
                                <li class="flex items-start mb-4 md:items-center md:mb-3">
                                    <svg viewBox="0 0 17 16" fill="none" class="w-full max-w-[18px] mr-[6px] mt-[3px] md:mt-0"><circle cx="8.46875" cy="8" r="7.6416" fill="#FF7F5B"></circle><path d="M7.56318 8.83472L11.0901 5.54543C11.4105 5.24659 11.93 5.24655 12.2505 5.54543C12.571 5.84431 12.5709 6.32885 12.2505 6.62769L8.14339 10.4581C7.82288 10.757 7.30335 10.7569 6.98296 10.4581L4.68975 8.31938C4.36928 8.0205 4.36928 7.53597 4.68975 7.23712C5.01022 6.93828 5.52976 6.93824 5.85018 7.23712L7.56318 8.83472Z" fill="white"></path></svg>
                                    <p class="mb-0">Keeps Your Dog Cool In Scorching Heat</p>
                                </li>
                                <li class="flex items-start mb-4 md:items-center md:mb-3">
                                    <svg viewBox="0 0 17 16" fill="none" class="w-full max-w-[18px] mr-[6px] mt-[3px] md:mt-0"><circle cx="8.46875" cy="8" r="7.6416" fill="#FF7F5B"></circle><path d="M7.56318 8.83472L11.0901 5.54543C11.4105 5.24659 11.93 5.24655 12.2505 5.54543C12.571 5.84431 12.5709 6.32885 12.2505 6.62769L8.14339 10.4581C7.82288 10.757 7.30335 10.7569 6.98296 10.4581L4.68975 8.31938C4.36928 8.0205 4.36928 7.53597 4.68975 7.23712C5.01022 6.93828 5.52976 6.93824 5.85018 7.23712L7.56318 8.83472Z" fill="white"></path></svg>
                                    <p class="mb-0">Rapid Core Temperature Drop By 5%</p>
                                </li>
                                <li class="flex items-start mb-4 md:items-center md:mb-3">
                                    <svg viewBox="0 0 17 16" fill="none" class="w-full max-w-[18px] mr-[6px] mt-[3px] md:mt-0"><circle cx="8.46875" cy="8" r="7.6416" fill="#FF7F5B"></circle><path d="M7.56318 8.83472L11.0901 5.54543C11.4105 5.24659 11.93 5.24655 12.2505 5.54543C12.571 5.84431 12.5709 6.32885 12.2505 6.62769L8.14339 10.4581C7.82288 10.757 7.30335 10.7569 6.98296 10.4581L4.68975 8.31938C4.36928 8.0205 4.36928 7.53597 4.68975 7.23712C5.01022 6.93828 5.52976 6.93824 5.85018 7.23712L7.56318 8.83472Z" fill="white"></path></svg>
                                    <p class="mb-0">Proven To Reduce Stress &amp; Panting In Minutes</p>
                                </li>
                                <li class="flex items-start mb-4 md:items-center md:mb-3">
                                    <svg viewBox="0 0 17 16" fill="none" class="w-full max-w-[18px] mr-[6px] mt-[3px] md:mt-0"><circle cx="8.46875" cy="8" r="7.6416" fill="#FF7F5B"></circle><path d="M7.56318 8.83472L11.0901 5.54543C11.4105 5.24659 11.93 5.24655 12.2505 5.54543C12.571 5.84431 12.5709 6.32885 12.2505 6.62769L8.14339 10.4581C7.82288 10.757 7.30335 10.7569 6.98296 10.4581L4.68975 8.31938C4.36928 8.0205 4.36928 7.53597 4.68975 7.23712C5.01022 6.93828 5.52976 6.93824 5.85018 7.23712L7.56318 8.83472Z" fill="white"></path></svg>
                                    <p class="mb-0">Patent ‘HydroCool Fusion’ Technology Last For 10 Years</p>
                                </li>
                                <li class="flex items-start mb-4 md:items-center md:mb-3">
                                    <svg viewBox="0 0 17 16" fill="none" class="w-full max-w-[18px] mr-[6px] mt-[3px] md:mt-0"><circle cx="8.46875" cy="8" r="7.6416" fill="#FF7F5B"></circle><path d="M7.56318 8.83472L11.0901 5.54543C11.4105 5.24659 11.93 5.24655 12.2505 5.54543C12.571 5.84431 12.5709 6.32885 12.2505 6.62769L8.14339 10.4581C7.82288 10.757 7.30335 10.7569 6.98296 10.4581L4.68975 8.31938C4.36928 8.0205 4.36928 7.53597 4.68975 7.23712C5.01022 6.93828 5.52976 6.93824 5.85018 7.23712L7.56318 8.83472Z" fill="white"></path></svg>
                                    <p class="mb-0">Easily Fits All Dog Breeds, Shapes And Sizes</p>
                                </li>
                                <li class="flex items-start mb-4 md:items-center md:mb-3">
                                    <svg viewBox="0 0 17 16" fill="none" class="w-full max-w-[18px] mr-[6px] mt-[3px] md:mt-0"><circle cx="8.46875" cy="8" r="7.6416" fill="#FF7F5B"></circle><path d="M7.56318 8.83472L11.0901 5.54543C11.4105 5.24659 11.93 5.24655 12.2505 5.54543C12.571 5.84431 12.5709 6.32885 12.2505 6.62769L8.14339 10.4581C7.82288 10.757 7.30335 10.7569 6.98296 10.4581L4.68975 8.31938C4.36928 8.0205 4.36928 7.53597 4.68975 7.23712C5.01022 6.93828 5.52976 6.93824 5.85018 7.23712L7.56318 8.83472Z" fill="white"></path></svg>
                                    <p class="mb-0">Special Wilkool™ Fabric Cools For Up To 3 Hours</p>
                                </li>
                            </ul>

                            <div class="mt-4 variant-selection">
                                <p class="m-0 text-[1.75rem] font-bold variant-options-title w-100 pt-4">COOLING VEST SIZES</p>

                                <div id="variants-vest" class="flex gap-4 py-4 radio-holder">
                                    <div class="relative radio"> 
                                        <input value="X-Small" data-variant-small="44720560013481" data-variant-medium="44720564601001" data-variant-large="44720564633769" type="radio" name="vest-size" id="x-small" checked="" class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer peer">
                                        <label class="flex items-center justify-center p-2 font-semibold  bg-white cursor-pointer bg-white cursor-pointer label-holder w-[50px] h-[30px] rounded-[100px] border border-[#d9d9d9] peer-checked:bg-[#ff7f5b] peer-checked:border-[#ff7f5b] transition-all duration-300 peer-checked:text-white text-[1.5rem]" for="x-small">
                                            <span class="sr-only">XS</span>
                                            XS
                                        </label>
                                    </div>
                                    <div class="relative radio">
                                        <input value="Small" data-variant-small="44720560046249" data-variant-medium="44720564666537" data-variant-large="44720564699305" type="radio" name="vest-size" id="small" class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer peer">
                                        <label class="flex items-center justify-center p-2 font-semibold  bg-white cursor-pointer bg-white cursor-pointer label-holder w-[50px] h-[30px] rounded-[100px] border border-[#d9d9d9] peer-checked:bg-[#ff7f5b] peer-checked:border-[#ff7f5b] transition-all duration-300 peer-checked:text-white text-[1.5rem]" for="small">
                                            <span class="sr-only">Small</span>
                                            S
                                        </label>
                                    </div>
                                    <div class="relative radio">
                                        <input value="Medium" data-variant-small="44720560079017" data-variant-medium="44720564732073" data-variant-large="44720564764841" type="radio" name="vest-size" id="medium" class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer peer">
                                        <label class="flex items-center justify-center p-2 font-semibold  bg-white cursor-pointer bg-white cursor-pointer label-holder w-[50px] h-[30px] rounded-[100px] border border-[#d9d9d9] peer-checked:bg-[#ff7f5b] peer-checked:border-[#ff7f5b] transition-all duration-300 peer-checked:text-white text-[1.5rem]" for="medium">
                                            <span class="sr-only">Medium</span>
                                            M
                                        </label>
                                    </div>
                                    <div class="relative radio">
                                        <input value="Large" data-variant-small="44720560111785" data-variant-medium="44720564797609" data-variant-large="44720564830377" type="radio" name="vest-size" id="large" class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer peer">
                                        <label class="flex items-center justify-center p-2 font-semibold  bg-white cursor-pointer bg-white cursor-pointer label-holder w-[50px] h-[30px] rounded-[100px] border border-[#d9d9d9] peer-checked:bg-[#ff7f5b] peer-checked:border-[#ff7f5b] transition-all duration-300 peer-checked:text-white text-[1.5rem]" for="large">
                                            <span class="sr-only">Large</span>
                                            L
                                        </label>
                                    </div>
                                    <div class="relative radio">
                                        <input value="X-Large" data-variant-small="44720560144553" data-variant-medium="44720564863145" data-variant-large="44720564895913" type="radio" name="vest-size" id="x-large" class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer peer">
                                        <label class="flex items-center justify-center p-2 font-semibold  bg-white cursor-pointer bg-white cursor-pointer label-holder w-[50px] h-[30px] rounded-[100px] border border-[#d9d9d9] peer-checked:bg-[#ff7f5b] peer-checked:border-[#ff7f5b] transition-all duration-300 peer-checked:text-white text-[1.5rem]" for="x-large">
                                            <span class="sr-only">X-Large</span>
                                            XL
                                        </label>
                                    </div>
                                </div>

                                <p class="m-0 text-[1.75rem] font-bold variant-options-title w-100 pt-4">COOLING COLLAR SIZES</p>

                                <div id="variants-collar" class="flex gap-4 py-4 radio-holder">
                                    <div class="relative radio">
                                        <input value="Small" data-variant-id="44720564633769" type="radio" name="collar-size" id="small-collar" class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer peer" checked="">
                                        <label class="flex items-center justify-center p-2 font-semibold  bg-white cursor-pointer bg-white cursor-pointer label-holder w-[50px] h-[30px] rounded-[100px] border border-[#d9d9d9] peer-checked:bg-[#ff7f5b] peer-checked:border-[#ff7f5b] transition-all duration-300 peer-checked:text-white text-[1.5rem]" for="small-collar">
                                            <span class="sr-only">Small</span>
                                            S
                                        </label>
                                    </div>

                                    <div class="relative radio">
                                        <input value="Medium" data-variant-id="44720560046249" type="radio" name="collar-size" id="medium-collar" class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer peer">
                                        <label class="flex items-center justify-center p-2 font-semibold  bg-white cursor-pointer bg-white cursor-pointer label-holder w-[50px] h-[30px] rounded-[100px] border border-[#d9d9d9] peer-checked:bg-[#ff7f5b] peer-checked:border-[#ff7f5b] transition-all duration-300 peer-checked:text-white text-[1.5rem]" for="medium-collar">
                                            <span class="sr-only">Medium</span>
                                            M
                                        </label>
                                    </div>
                                    <div class="relative radio">
                                        <input value="Large" data-variant-id="44720560046249" type="radio" name="collar-size" id="large-collar" class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer peer">
                                        <label class="flex items-center justify-center p-2 font-semibold  bg-white cursor-pointer bg-white cursor-pointer label-holder w-[50px] h-[30px] rounded-[100px] border border-[#d9d9d9] peer-checked:bg-[#ff7f5b] peer-checked:border-[#ff7f5b] transition-all duration-300 peer-checked:text-white text-[1.5rem]" for="large-collar">
                                            <span class="sr-only">Large</span>
                                            L
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <p id="variant-selected" class="mt-4 font-sm"></p> 


                            <hr class="mt-[13px] mb-[18px] md:mt-[30px] md:mb-[20px] h-[1px] bg-[#D7D7D7]">
                            <div class="flex  flex-wrap md:flex-nowrap items-center justify-between mb-[3px] md:mb-[10px]">
                                <div class="flex items-center tracking-[-3px] xl:tracking-[-1.9px] mb-[8px] lg:mb-[0]">
                                    <span data-price="" data-product="8283700953257" data-variant="44720560013481" class="text-[#191919] font-fb text-[4.5rem] md:text-[6.5rem] mr-[14px] leading-[1] loaded">$112.00</span>
                                    <span class="text-[#9B9B9B] font-fm text-[2.2rem] md:text-[2.6rem] line-through tracking-[-1px] line-through font-fm">$150.00</span>
                                </div>
                            </div>
                            <div class="mb-[20px] leading-[1.25]">
                                <p class="text-[1.4rem] xl:text-[1.6rem] inline">Or 4 interest-free payments of $28.00 fortnightly with</p>
                                <img class="w-[59px] md:w-[77px] ml-[5px] inline lazyload"  alt="" width="155" height="37" src="logo-afterpay.png">
                            </div>

                            <div class="flex items-center mb-[26px] md:mb-[30px]">
                                <div class="flex items-center mr-[12px] md:mr-[8px]">
                                    <span class="label d-block text-[1.4rem] md:text-[1.6rem] text-[#191919] mr-[8px] md:mr-[10px] tracking-[1.5px] md:tracking-[2.5px] font-fb uppercase">Quantity:</span>
                                    <div class="number-holder input-wrapper text-[#424143]">
                                        <div class="quantity relative pl-[29px] pr-[26px]  md:pl-[40px] md:pr-[40px]  xl:pl-[48px] xl:pr-[48px] border-[1px] border-[#D6D6D6] rounded-[49px]">
                                            <label for="quantity" class="sr-only"></label>
                                            <input aria-label="quantity" id="quantity" class="quantity quantity__input w-[30px] md:w-[40px] text-[1.4rem] md:text-[1.6rem] bg-none border-0 py-[10px] md:py-[12px] shadow-none font-fb text-center" type="number" min="1" value="1" readonly="">
                                            <div class="quantity-nav">
                                                <div class="quantity-button quantity-button--up quantity__plus q_plus absolute right-0 top-[0] bottom-0 flex items-center justify-center pt-[5px] cursor-pointer mt-[-4px] w-[36px] md:w-[50px]">+</div>
                                                <div class="quantity-button quantity-button--down quantity__minus q_minus absolute left-0  top-[0] bottom-0 flex items-center justify-center pt-[5px] cursor-pointer mt-[-4px] w-[36px] md:w-[50px]">-</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span class="note relative pl-[13px] md:pl-[18px] xl:pl-[20px] text-[1.4rem] md:text-[1.6rem] text-[#5DB56E] font-fm leading-[1.08]"><span class="absolute left-[3px] top-[4px] md:top-[2px] w-[8px] h-[8px] md:w-[13px] md:h-[13px] rounded-[50%] bg-[#5DB56E] animate-pulse"></span>The product is in stock now!</span>
                            </div>

                            <div class="w-full mb-[5px] max-w-[478px] lg:max-w-[100%] m-auto lg:ml-0 lg:mr-0">
                                <a href="https://wilkopetcare.com/cart/44720560013481:1?attributes[source]=direct&amp;" data-checkout="" class="flex justify-center w-full border-0 rounded-[52px] mb-4 text-center text-[1.6rem]  md:text-[1.8rem] font-fb px-3 py-5 lg:py-4 whitespace-normal cursor-pointer bg-[#FF7F5B] text-white transition duration-500  hover:no-underline hover:opacity-[.8]">
                                Add To Cart 
                                <svg viewBox="0 0 17 15" fill="none" class="w-[16px] ml-[9px] md:ml-[18px]"><path d="M0.827148 7.30469H15.8271M15.8271 7.30469L9.32715 0.804688M15.8271 7.30469L9.32715 13.8047" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg>
                                </a>
                                <div class="flex items-center justify-center max-w-[280px] md:max-w-[100%] m-auto">
                                <span class="text-[#230608] whitespace-nowrap text-[1.2rem] md:text-[1.6rem] mr-[10px] md:mr-[15px] font-fb ">Secure Checkout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

export const WorkfromyourhappyplaceHero = () => {
	return `
        <section class="banner_section bg-white pt-[128px] md:pt-[135px] pb-[35px] md:pb-[76px] relative">
            <div class="container relative z-20 px-5">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-[49%] relative ">


                        <div class="swiper swiper-product-gallery p-3 lg:p-5 bg-white rounded-[14px] lg:rounded-[35px] swiper-initialized swiper-horizontal">
                            <div class="swiper-wrapper [&_.swiper-slide]:overflow-hidden [&_.swiper-slide]:rounded-2xl lg:[&_.swiper-slide]:rounded-3xl">
                                <div class="swiper-slide h-auto swiper-slide-active overflow-hidden" style=" margin-right: 30px;">
                                    <img nolazy="" class="w-full h-full object-cover lazyload"  alt="" src="https://plus.unsplash.com/premium_photo-1661763066898-6aac7f3758ab?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVtb3RlJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D">
                                </div>
                                <div class="swiper-slide h-auto swiper-slide-active overflow-hidden" style=" margin-right: 30px;">
                                    <img nolazy="" class="w-full h-full object-cover lazyload"  alt="" src="https://images.unsplash.com/photo-1530977875151-aae9742fde19?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlbW90ZSUyMHdvcmt8ZW58MHx8MHx8fDA%3D">
                                </div>
                                 <div class="swiper-slide h-auto swiper-slide-active overflow-hidden" style=" margin-right: 30px;">
                                    <img nolazy="" class="w-full h-full object-cover lazyload"  alt="" src="https://plus.unsplash.com/premium_photo-1721605855743-6b27da3f2d30?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlbW90ZSUyMHdvcmt8ZW58MHx8MHx8fDA%3D">
                                </div>
                                 
                            </div>
                        </div>

                        <div class="relative">
                            <div class="swiper p-3 lg:p-5 control mt-4 swiper-initialized swiper-horizontal swiper-watch-progress swiper-thumbs">
                                <div class="swiper-wrapper [&_.swiper-slide]:rounded-2xl lg:[&_.swiper-slide]:rounded-3xl [&_.swiper-slide]:overflow-hidden" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms; transition-delay: 0ms;">
                                    <div class="swiper-slide h-auto !transition-all duration-500 opacity-60 [&_.swiper-slide-thumb-active]:opacity-100  swiper-slide-visible swiper-slide-fully-visible swiper-slide-active swiper-slide-thumb-active" style="width: 179.667px; margin-right: 10px;">
                                         <img nolazy="" class="w-full h-full object-cover lazyload"  alt="" src="https://plus.unsplash.com/premium_photo-1661763066898-6aac7f3758ab?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVtb3RlJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D">
                                    </div>
                                    <div class="swiper-slide h-auto !transition-all duration-500 opacity-60 [&_.swiper-slide-thumb-active]:opacity-100 swiper-slide-next swiper-slide-visible swiper-slide-fully-visible" style="width: 179.667px; margin-right: 10px;">
                                        <img nolazy="" class="w-full h-full object-cover lazyload"  alt="" src="https://images.unsplash.com/photo-1530977875151-aae9742fde19?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlbW90ZSUyMHdvcmt8ZW58MHx8MHx8fDA%3D">
                                    </div>
                                    <div class="swiper-slide h-auto !transition-all duration-500 opacity-60 [&_.swiper-slide-thumb-active]:opacity-100 swiper-slide-visible swiper-slide-fully-visible" style="width: 179.667px; margin-right: 10px;">
                                       <img nolazy="" class="w-full h-full object-cover lazyload"  alt="" src="https://plus.unsplash.com/premium_photo-1721605855743-6b27da3f2d30?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlbW90ZSUyMHdvcmt8ZW58MHx8MHx8fDA%3D">
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-between swiper-nav absolute top-1/2 translate-y-[-50%] left-0 right-0 w-full z-10 pointer-events-none">
                                <div class="swiper-button-prev pointer-events-auto cursor-pointer flex justify-center items-center w-[45px] h-[45px] rounded-[50%] bg-[#fff] [&amp;:not(.swiper-button-disabled)>svg>path]:stroke-white [&_.swiper-button-disabled]:bg-white [&_.swiper-button-disabled]:transition-transform transition-transform ms-[-2%] swiper-button-disabled" style="box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.25);">
                                    <svg viewBox="0 0 11 18" fill="none" width="11"><path d="M9.96832 0.874023L1.84332 8.99902L9.96832 17.124" stroke="#233808" stroke-width="2"></path></svg>               
                                </div>
                                <div class="swiper-button-next pointer-events-auto cursor-pointer flex justify-center items-center w-[45px] h-[45px] rounded-[50%] bg-[#fff] [&amp;:not(.swiper-button-disabled)>svg>path]:stroke-white [&_.swiper-button-disabled]:bg-white [&_.swiper-button-disabled]:transition-transform transition-transform me-[-2%]" style="box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.25);">
                                    <svg viewBox="0 0 11 18" fill="none" width="11"><path d="M1 0.999023L9.125 9.12402L1 17.249" stroke="#233808" stroke-width="2"></path></svg>
                                </div>
                            </div>
                        </div>
                        </div>
                     
                    <div class="w-full lg:w-[47.2%] lg:pl-[10px]">
                        <div class="px-5 md:px-0 pb-[14px] md:pb-[22px]">
                            <p class="text-[0.875rem] leading-[1.5] tracking-[-0.02em] md:text-[0.813rem] md:leading-[1.538] md:tracking-[-0.01em] font-medium text-black py-1 px-3 border rounded-[100px] inline-block mb-3 md:mb-2.5 border-[#1D9B85] uppercase text-center">LOVED BY 35,974+ ENTREPRENUERS GLOBALLY</p>
                            <h1 class="lg:max-w-[550px] mb-2.5 md:mb-[18px] uppercase">The 2025 'Everything I Need To Succeed' Bundle</h1>
                            <p class="text-[0.875rem] leading-[1.595] md:text-base md:leading-[1.644] text-black mb-2.5 md:mb-4">
                               <svg viewBox="0 0 127 25" fill="none" width="126.5"><path d="M12.25 0L15.0003 8.46454L23.9004 8.46454L16.7001 13.6959L19.4504 22.1605L12.25 16.9291L5.04963 22.1605L7.79993 13.6959L0.599558 8.46454L9.4997 8.46454L12.25 0Z" fill="#FF9900"></path><path d="M37.75 0L40.5003 8.46454L49.4004 8.46454L42.2001 13.6959L44.9504 22.1605L37.75 16.9291L30.5496 22.1605L33.2999 13.6959L26.0996 8.46454L34.9997 8.46454L37.75 0Z" fill="#FF9900"></path><path d="M63.25 0L66.0003 8.46454L74.9004 8.46454L67.7001 13.6959L70.4504 22.1605L63.25 16.9291L56.0496 22.1605L58.7999 13.6959L51.5996 8.46454L60.4997 8.46454L63.25 0Z" fill="#FF9900"></path><path d="M88.75 0L91.5003 8.46454L100.4 8.46454L93.2001 13.6959L95.9504 22.1605L88.75 16.9291L81.5496 22.1605L84.2999 13.6959L77.0996 8.46454L85.9997 8.46454L88.75 0Z" fill="#FF9900"></path><path d="M114.25 0L117 8.46454L125.9 8.46454L118.7 13.6959L121.45 22.1605L114.25 16.9291L107.05 22.1605L109.8 13.6959L102.6 8.46454L111.5 8.46454L114.25 0Z" fill="#FF9900"></path></svg>
                               <span class="font-bold">4.9 3,526+</span> Reviews</p>
                            <p class="text-black text-[0.875rem] leading-[1.5] tracking-[-0.02em] md:-tracking-normal md:text-sm md:leading-lhxs max-w-[512px]">Forget Generic 'To-Do' Planners-Meet Your New Stress-Free Blueprint To 3X Your Daily Output In Just 30 Minutes A Day, And Scale Your Start-Up To 7 Figures With The Perfect Work-Life Balance!</p>
                        </div>
                        <div class="author-box bg-white shadow-[0px_31px_80px_rgba(140,140,140,0.13)] rounded-[15px] mx-5 md:mx-0 px-5 py-[14px] md:p-5 flex gap-2.5 items-start mb-[18px] md:mb-[14px]">
                        <div class="w-[40px] h-[40px] md:w-[51px] md:h-[51px] overflow-hidden rounded-full">
                             <img class="w-full h-full object-cover lazyload"   alt=""   src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0JTIwd29tZW58ZW58MHx8MHx8fDA%3D">
                              </div>
                            <div class="deatils">
                                <p class=" text-[1rem] leading-[1.1] md:text-lg md:leading-lhlg font-bold tracking-[-0.04em]">
                                    D. Christine</p>
                                <p class="text-[0.875rem] leading-[1.302] md:text-xs md:leading-[1.269] tracking-[-0.04em]">
                                    “My Business Has Grown 200% Since Using This System”</p>
                            </div>
                        </div>
                        <div class="product-checklist pb-[17px] px-5 md:px-0 md:pb-[28px]">
                            <ul class="flex flex-col gap-y-[3px] md:gap-y-[13px]">
                                <li class="flex gap-[7px]">
                                    <img class="w-4 min-w-4 mt-[5px] lazyload" alt="" width="31" height="31" src="https://img.icons8.com/?size=100&id=jjDBU5huEYlX&format=png"> 
                                    <p class="text-black md:text-sm md:leading-lhxs font-SFProDisplay md:font-Poppins">All-In-One Life &amp; Business Planner</p>
                                </li>
                                <li class="flex gap-[7px]">
                                <img class="w-4 min-w-4 mt-[5px] lazyload" alt="" width="31" height="31" src="https://img.icons8.com/?size=128&id=VB3TWEW571Gu&format=png"> 
                                    <p class="text-black md:text-sm md:leading-lhxs font-SFProDisplay md:font-Poppins">Tried, Tested &amp; Implemented To Reach 7-Figures Per Year</p>
                                </li>
                                <li class="flex gap-[7px]">
                                      <img class="w-4 min-w-4 mt-[5px] lazyload" alt="" width="31" height="31" src="https://img.icons8.com/?size=160&id=3UczBgyhM6Pl&format=png"> 
                                    <p class="text-black md:text-sm md:leading-lhxs font-SFProDisplay md:font-Poppins">Works With Any Business Or Niche</p>
                                </li>
                                <li class="flex gap-[7px]">
                                      <img class="w-4 min-w-4 mt-[5px] lazyload" alt="" width="31" height="31" src="https://img.icons8.com/?size=160&id=FJL-9gVmgOba&format=png"> 
                                    <p class="text-black md:text-sm md:leading-lhxs font-SFProDisplay md:font-Poppins">Only 30-Mins Of Use Per Day</p>
                                </li>
                                <li class="flex gap-[7px]">
                                      <img class="w-4 min-w-4 mt-[5px] lazyload" alt="" width="31" height="31" src="https://img.icons8.com/?size=100&id=120092&format=png"> 
                                    <p class="text-black md:text-sm md:leading-lhxs font-SFProDisplay md:font-Poppins">Zero Confusion About Goal Setting, Priorities Or Next Steps</p>
                                </li>
                                <li class="flex gap-[7px]">
                                      <img class="w-4 min-w-4 mt-[5px] lazyload" alt="" width="31" height="31" src="https://img.icons8.com/?size=160&id=FJL-9gVmgOba&format=png"> 
                                    <p class="text-black md:text-sm md:leading-lhxs font-SFProDisplay md:font-Poppins">Create The Perfect Work-Life Balance</p>
                                </li>
                            </ul>
                        </div>
                        <div class="qty-wrap ms-5 me-[8px] md:mx-0 pt-[14px] pb-[10px] md:py-[22px] border-t border-[#D7D7D7] max-w-[493px]">
                            <div class="number-row quantity_flex flex items-center gap-[10px] md:gap-[18px]">    
                                <div class="number-holder input-wrapper qty-box flex items-center gap-[10px] md:gap-[13px]">
                                    <span class="text-[0.875rem] leading-[1.545] tracking-[0.1em] md:text-[0.938rem] md:leading-lhxs text-[#091F2D] md:tracking-[0.17em] uppercase font-semibold">Quantity:</span>
                                    <div class="quantity flex items-center gap-[10px] border border-[#D6D6D6] px-[5px] md:px-0 rounded-[49px]">
                                        <div class="quantity-button quantity__minus quantity-button--down quantity__minus w-[16px] h-[33px] md:w-9 md:h-10 flex items-center justify-center cursor-pointer">
                                            <p class="text-black text-[0.875rem] leading-[1.545] md:text-[1rem] md:leading-[1.55] font-SFProDisplay">
                                                -</p>
                                        </div>
                                        <label for="quantity" class="sr-only">Select quantity</label>
                                        <input id="quantity" name="quantity" type="number" class="quantity__input p-0 appearance-none w-[18px] h-[36px] md:w-[40px] text-center md:h-10 text-black text-[0.875rem] leading-[1.545] md:text-[0.938rem] md:leading-lhxs font-SFProDisplay font-bold bg-transparent border-0 " value="1" disabled="">
                                        <div class="quantity-button quantity__plus quantity-button--up quantity__plusw-[33px] w-[16px] h-[33px] md:w-9 md:h-10 flex items-center justify-center cursor-pointer">
                                            <p class="text-black text-[0.875rem] leading-[1.545] md:text-[0.938rem] md:leading-lhxs font-SFProDisplay">
                                                +</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="availability flex gap-2.5">
                                    <div class="bg-[#5DB56E] mt-[3px] w-[8px] min-w-[8px] h-[8px] md:w-[13px] md:min-w-[13px] md:h-[13px] rounded-[100px] animate-[newfade_2s_ease_infinite] transition-all">
                                    </div>
                                    <span class="text-[0.875rem] leading-[1.16] md:text-[0.813rem] md:leading-[1.549] text-[#5DB56E] font-medium">The
                                        product is in stock now!</span>
                                </div>
                            </div>
                        </div>
                        <div class="price-box pe-5 ps-4 md:px-0 pb-[10px] md:pb-[22px]">
                            <div class="price-inner relative flex items-center gap-[12px] md:gap-[22px]">
                                <h2 class="flex gap-[6px] items-center text-black text-[2.813rem] leading-[1.111] md:text-[2.75rem] md:leading-[1.136] tracking-[-2px] font-semibold loaded" data-price="" data-product="8700836839638" data-variant="46062939308246">$119.00</h2>
                                <h3 class="h4 text-[#9B9B9B] text-[1.375rem] leading-[2.273] tracking-[-0.02em] md:text-[1.625rem] md:leading-[1.923] md:tracking-[-2px] line-through font-semibold" data-oriprice="" data-product="8700836839638">
                                    $323.00</h3>
                            </div>
                        </div>
                        <p class="text-[0.875rem] leading-[1.429] max-w-[288px] md:max-w-full md:text-[0.938rem] md:leading-[1.449] px-5 md:px-0 pb-[22px]"> Pay over 4 interest-free payments of $<span class="afterpay-installment">29.75 </span> with   <img class="afterpay-icon h-4 inline relative top-[1px]" src="logo-afterpay.png" alt="afterpay">
                        </p>
                        <div class="w-full max-w-[480px] lg:m-0 px-5 md:px-0 pb-[14px] md:pb-[22px]">
                            <div class="text-center max-w-[479px] m-auto {{center}}">
                                <a href="https://store.workfromyourhappyplace.com/cart/46062939308246:1?attributes[utm_source]=direct&amp;attributes[page_source]=kk_lander&amp;" data-checkout="" class="inline-flex items-center justify-center gap-[16px] py-[14px] px-[15px] w-full rounded-[100px] text-xs leading-[1.2] md:text-base md:leading-[1.222] font-semibold cursor-pointer bg-black text-white transition-all ease-linear duration-500 hover:no-underline hover:bg-black hover:white">
                                    Add To Cart
                                   
                                </a>
                                <div class="checkout flex md:flex-row items-center justify-center mt-2.5 md:mt-[15px]">
                                    <p class="text-[0.75rem] leading-[1.45] md:text-[0.938rem] md:leading-[1.449] text-parablack pr-[9px] md:pr-[14px] py-[9px] md:border-r md:border-[#EFEFEF]">
                                        Secure Checkout
                                    </p>
                                  <img class="w-full max-w-[180px] md:max-w-[252px] pl-[6px] md:pl-[14px] lazyload" data-src="assets/images/checkout.png" alt="" width="506" height="40" src="payment-methods-cover.png">
                                </div>
                            </div>
                        </div>
                        <div class="flex md:grid md:grid-cols-2 gap-2.5 mx-5 md:mx-0 py-2.5 max-w-[493px] border-t border-[#D7D7D7]">
                            <div class="feature_block flex gap-[7px] md:p-[15px] md:pr-[35px] max-w-[156px] md:max-w-full">
                                <img class="min-w-[24px] w-[24px] h-[25px] md:h-[28px] md:w-[28px] md:min-w-[28px] lazyload" src="https://img.icons8.com/?size=100&id=120357&format=png" alt="" width="57" height="59" >
                                <span class="text-[#091F2D] text-[0.81rem] leading-[1.1] md:text-[0.938rem] md:leading-[1.099] font-bold font-SFProDisplay">30 DAY MONEY-BACK GUARANTEE</span>
                            </div>
                            <div class="feature_block flex gap-[6px] md:gap-[14px] md:p-[15px] md:pr-[50px] xl:pr-[70px]">
                                <img class="min-w-[28px] w-[28px] h-[25px] md:h-[32px] md:w-[29.5px] md:min-w-[32px] lazyload"   alt="" width="66" height="60" src="https://img.icons8.com/?size=160&id=1fLeDxsh4m70&format=png"> 
                                <span class="text-[#091F2D] text-[0.81rem] leading-[1.1] md:text-[0.938rem] md:leading-[1.099] font-bold font-SFProDisplay">FREE SHIPPING US WIDE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}
