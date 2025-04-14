export default {
    title: 'Layouts/Steps',
}

export const Steps = () => {
    return `
        <section class="py-16 md:py-24 lg:py-28">
            <div class="container px-4">
                <div class="flex flex-wrap justify-center mb-2">
                    <div class="lg:w-8/12">
                        <h2 class="text-3xl lg:text-4xl mb-4 leading-tight font-bold capitalize text-center">Steps/Blocks Section </h2>
                    </div>
                </div>
                <div class="flex flex-wrap justify-center -mx-4 mb-5">
                    <div class="w-full md:w-1/2 lg:w-1/3 mb-5 px-4">
                        <div class="h-full shadow-lg p-4 lg:p-8 lg:text-xl">
                            <p class="mx-auto bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-5 lg:mb-8"> 1 </p>
                            <h4 class="text-xl lg:text-2xl text-center font-bold leading-tight mb-5"> Interdum et malesuada fames ac ante ipsum </h4>
                            <p> Quisque placerat eget ligula in dictum. Vestibulum pellentesque
                                dictum sem, in sagittis enim faucibus at. </p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 mb-5 px-4">
                        <div class="h-full shadow-lg p-4 lg:p-8 lg:text-xl">
                            <p class="mx-auto bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-5 lg:mb-8"> 2 </p>
                            <h4 class="text-xl lg:text-2xl text-center font-bold leading-tight mb-5"> Curabitur ullamcorper tortor eget est imperdiet </h4>
                            <p> Vestibulum tincidunt mattis urna, ac aliquet nunc interdum et.
                                Curabitur magna eros, porttitor in purus vitae, vestibulum faucibus leo. </p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 mb-5 px-4">
                        <div class="h-full shadow-lg p-4 lg:p-8 lg:text-xl">
                            <p class="mx-auto bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-5 lg:mb-8"> 3 </p>
                            <h4 class="text-xl lg:text-2xl text-center font-bold leading-tight mb-5"> Fusce interdum luctus est et elementum </h4>
                            <p> Quisque placerat eget ligula in dictum. Vestibulum pellentesque
                                dictum sem, in sagittis enim faucibus at. </p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 mb-5 px-4">
                        <div class="h-full shadow-lg p-4 lg:p-8 lg:text-xl">
                            <p class="mx-auto bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-5 lg:mb-8"> 4 </p>
                            <h4 class="text-xl lg:text-2xl text-center font-bold leading-tight mb-5"> Donec tortor est ullamcorper vel </h4>
                            <p> Vestibulum tincidunt mattis urna, ac aliquet nunc interdum et.
                                Curabitur magna eros, porttitor in purus vitae, vestibulum faucibus leo. </p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 mb-5 px-4">
                        <div class="h-full shadow-lg p-4 lg:p-8 lg:text-xl">
                            <p class="mx-auto bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-5 lg:mb-8"> 5 </p>
                            <h4 class="text-xl lg:text-2xl text-center font-bold leading-tight mb-5"> Pellentesque pulvinar dui viverra congue </h4>
                            <p> Quisque placerat eget ligula in dictum. Vestibulum pellentesque
                                dictum sem, in sagittis enim faucibus at. </p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap justify-center">
                    <div class="md:w-8/12 lg:w-1/2">
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
    `;
};

export const StepsWithImage = () => {
    return `
        <section class="py-10 pb-6 md:py-24 lg:py-28 bg-gray-100">
            <div class="container px-4">
                <div class="lg:max-w-[950px] lg:mx-auto 
                    [&>div]:flex-col md:[&>div]:flex-row [&>div]:border-b [&>div]:mb-[1.5rem] lg:[&>div]:mb-[3rem] [&>div]:pb-[2rem] md:[&>div]:pb-[3rem] [&>div]:border-black [&_span]:mr-[0.8rem] lg:[&_span]:mr-[2rem] [&_span]:text-brand-orange [&_span]:font-semibold [&_span]:text-[2.2rem] [&_span]:leading-[2rem] lg:[&_span]:text-[3rem] lg:[&_span]:leading-[3rem] 
                    [&_h3]:font-semibold [&_h3]:text-[1.2rem] [&_h3]:leading-[1.5rem] lg:[&_h3]:text-[1.36rem] lg:[&_h3]:leading-[1.6rem] [&_h3]:tracking-[-0.5px] [&_h3]:mb-[0.8rem]
                    [&_img]:w-full [&_img]:max-w-[100%] [&_img]:h-10rem [&_img]:object-cover [&_img]:mt-[1rem] md:[&_img]:mt-0 md:[&_img]:w-[22rem] md:[&_img]:ml-[4rem]
                    [&_.step-icon]:max-w-[3rem] md:[&_.step-icon]:max-w-[5rem] [&_.step-icon]:mt-0 [&_.step-icon]:mr-[1rem] [&_.step-icon]:ml-0
                    [&_p]:m-0">
                    <div class="flex items-start">
                        <div class="flex flex-grow flex-col">
                            <div class="flex w-full">
                                <div class="flex flex-shrink-0">
                                    <span class="flex items-center justify-center w-12 h-12 bg-orange-500 text-white font-black rounded-full">1</span>
                                </div>
                                <div class="flex-col flex-grow pt-[0.4rem] lg:pt-0">
                                    <h3 class=""> 
                                        Scroll down, enter your details and claim a free 30-minute viral branding session with the Rivyl team.
                                    </h3>
                                </div>
                            </div>
                            <p class="w-full">
                                This will give us a chance to share the 4D mechanics of how we transform brands into viral powerhouses - with zero pressure to continue talking with us or coming on board after the session. 
                            </p>
                        </div>
                        <div class="flex flex-shrink-0 h-auto">
                            <img src="placeholder.png" alt="steps img" class="bg-gray-300 w-full h-auto">
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex flex-grow flex-col">
                            <div class="flex w-full">
                                <div class="flex flex-shrink-0">
                                    <span class="flex items-center justify-center w-12 h-12 bg-orange-500 text-white font-black rounded-full">2</span>
                                </div>
                                <div class="flex-col flex-grow pt-[0.4rem] lg:pt-0">
                                    <h3 class=""> 
                                        You decide to come on board, and the fun begins.
                                    </h3>
                                </div>
                            </div>
                            <p class="w-full">
                                We use hands-on workshops, in-depth market research, data-driven insight, and our 4D viral framework honed over $628+ million of brand building to create a viral strategy for your brand.  
                            </p>
                        </div>
                        <div class="flex flex-shrink-0 h-auto">
                            <img src="placeholder.png" alt="steps img" class="bg-gray-300 w-full h-auto">
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex flex-grow flex-col">
                            <div class="flex w-full">
                                <div class="flex flex-shrink-0">
                                    <span class="flex items-center justify-center w-12 h-12 bg-orange-500 text-white font-black rounded-full">3</span>
                                </div>
                                <div class="flex-col flex-grow pt-[0.4rem] lg:pt-0">
                                    <h3 class=""> 
                                        Go to market with your new viral brand identity, and enjoy more recognition, buzz and sales
                                    </h3>
                                </div>
                            </div>
                            <p class="w-full">
                                We use hands-on workshops, in-depth market research, data-driven insight, and our 4D viral framework honed over $628+ million of brand building to create a viral strategy for your brand.  
                            </p>
                        </div>
                        <div class="flex flex-shrink-0 h-auto">
                            <img src="placeholder.png" alt="steps img" class="bg-gray-300 w-full h-auto">
                        </div>
                    </div>
                </div>
                <div class="mt-[0.5rem] [&>div]:mx-auto lg:mt-0">
                    <include src="button_offer.html"></include>
                </div>
            </div>
        </section>
    `;
};

export const StepsAlternating = () => {
    return `
        <section class="px-[10px] py-8">
            <div class="flex flex-col gap-y-10 max-w-[800px] mx-auto
                [&>div]:relative [&>div]:pl-20 md:[&>div]:pl-0 [&>div>div:nth-child(2)]:absolute [&>div>div:nth-child(2)]:h-full md:[&>div>div:nth-child(2)]:relative
                md:[&>div:nth-child(odd)>div:first-child]:pl-4 md:[&>div:nth-child(even)>div:first-child]:order-3 md:[&>div:nth-child(even)>div:last-child]:order-1 [&>div:last-child>div:nth-child(2):before]:hidden [&>div:last-child>div:nth-child(2):before]:bottom-0">
                <div class="grid grid-cols-1 md:grid-cols-[1fr_0.4fr_1fr_]">
                    <div class="order-2 md:order-1">
                        <h3 class="font-bold text-lg">Step Title</h3>
                        <p>
                            Lorem ipsum, doth thou sit amet?
                        </p>
                    </div>
                    <div class="order-1 md:order-2 relative before:absolute before:w-[2px] before:h-full before:bg-gradient-to-b before:from-black before:to-transparent before:top-10 before:left-[calc(50%_-_1px)]">
                        <span class="flex items-center justify-center relative z-2 mx-auto w-[60px] h-[60px] bg-white shadow-xl rounded-full font-black">01</span>
                    </div>
                    <div class="order-1 md:order-3">
                        <img src="placeholder.png" alt="" class="rounded-xl object-cover w-full h-[200px]">
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-[1fr_0.4fr_1fr_]">
                    <div class="order-2 md:order-1">
                        <h3 class="font-bold text-lg">Step Title</h3>
                        <p>
                            Lorem ipsum, doth thou sit amet?
                        </p>
                    </div>
                    <div class="order-1 md:order-2 relative before:absolute before:w-[2px] before:h-full before:bg-gradient-to-b before:from-black before:to-transparent before:top-10 before:left-[calc(50%_-_1px)]">
                        <span class="flex items-center justify-center relative z-2 mx-auto w-[60px] h-[60px] bg-white shadow-xl rounded-full font-black">02</span>
                    </div>
                    <div class="order-1 md:order-3">
                        <img src="placeholder.png" alt="" class="rounded-xl object-cover w-full h-[200px]">
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-[1fr_0.4fr_1fr_]">
                    <div class="order-2 md:order-1">
                        <h3 class="font-bold text-lg">Step Title</h3>
                        <p>
                            Lorem ipsum, doth thou sit amet?
                        </p>
                    </div>
                    <div class="order-1 md:order-2 relative before:absolute before:w-[2px] before:h-full before:bg-gradient-to-b before:from-black before:to-transparent before:top-10 before:left-[calc(50%_-_1px)]">
                        <span class="flex items-center justify-center relative z-2 mx-auto w-[60px] h-[60px] bg-white shadow-xl rounded-full font-black">03</span>
                    </div>
                    <div class="order-1 md:order-3">
                        <img src="placeholder.png" alt="" class="rounded-xl object-cover w-full h-[200px]">
                    </div>
                </div>
            </div>
        </section>
    `;
};

export const StepsTimeline = () => {
    return `
      <section class="px-[10px] py-8">
        <div class="max-w-[600px] mx-auto [&>div:last-child>div:first-child>div:before]:hidden">
            <div class="flex relative">
                <div class="h-full before:w-2px">
                    <div class="flex items-center justify-center w-[40px] h-[40px] bg-[rgba(100,200,100,0.2)] rounded-full shadow-xl before:absolute before:w-[2px] before:top-[20px] before:bottom-0 before:left-[19px] before:bg-[rgba(100,200,100,0.3)] after:relative after:z-[2] after:absolute after:w-[17px] after:h-[17px] after:rounded-full after:bg-[rgba(100,100,200,1)]">
                        <span class="absolute z-[3] bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">1</span>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-xl p-5 ml-4 mb-5 pl-[30px] -translate-y-5">
                    <h3 class="font-bold text-xl mb-1">
                        The title text
                    </h3>
                    <p>
                        the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.
                    </p>
                </div>
            </div>
            <div class="flex relative">
                <div class="h-full before:w-2px">
                    <div class="flex items-center justify-center w-[40px] h-[40px] bg-[rgba(100,200,100,0.2)] rounded-full shadow-xl before:absolute before:w-[2px] before:top-[20px] before:bottom-0 before:left-[19px] before:bg-[rgba(100,200,100,0.3)] after:relative after:z-[2] after:absolute after:w-[17px] after:h-[17px] after:rounded-full after:bg-[rgba(100,100,200,1)]">
                        <span class="absolute z-[3] bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">2</span>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-xl p-5 ml-4 mb-5 pl-[30px] -translate-y-5">
                    <h3 class="font-bold text-xl mb-1">
                        The title text
                    </h3>
                    <p>
                        the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.
                    </p>
                </div>
            </div>
            <div class="flex relative">
                <div class="h-full before:w-2px">
                    <div class="flex items-center justify-center w-[40px] h-[40px] bg-[rgba(100,200,100,0.2)] rounded-full shadow-xl before:absolute before:w-[2px] before:top-[20px] before:bottom-0 before:left-[19px] before:bg-[rgba(100,200,100,0.3)] after:relative after:z-[2] after:absolute after:w-[17px] after:h-[17px] after:rounded-full after:bg-[rgba(100,100,200,1)]">
                        <span class="absolute z-[3] bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">3</span>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-xl p-5 ml-4 mb-5 pl-[30px] -translate-y-5">
                    <h3 class="font-bold text-xl mb-1">
                        The title text
                    </h3>
                    <p>
                        the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.
                    </p>
                </div>
            </div>
            <div class="flex relative">
                <div class="h-full before:w-2px">
                    <div class="flex items-center justify-center w-[40px] h-[40px] bg-[rgba(100,200,100,0.2)] rounded-full shadow-xl before:absolute before:w-[2px] before:top-[20px] before:bottom-0 before:left-[19px] before:bg-[rgba(100,200,100,0.3)] after:relative after:z-[2] after:absolute after:w-[17px] after:h-[17px] after:rounded-full after:bg-[rgba(100,100,200,1)]">
                        <span class="absolute z-[3] bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">4</span>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-xl p-5 ml-4 mb-5 pl-[30px] -translate-y-5">
                    <h3 class="font-bold text-xl mb-1">
                        The title text
                    </h3>
                    <p>
                        the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.the paragraph text.
                    </p>
                </div>
            </div>
        </div>
    </section>
    `
  };