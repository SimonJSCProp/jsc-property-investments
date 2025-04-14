export default {
    title: 'Layouts/Product Hero',
}

export const ProductHero = () => {
    return `
    <section class="product-hero bg-[#0c112e] text-white pt-12 pb-12 md:py-12">
        <div class="container px-[20px] grid grid-cols-1 lg:grid-cols-2 md:gap-x-8 lg:gap-x-12">
            <div class="col relative">
                <div class="lg:sticky lg:top-1">
                    <div class="relative">
                        <div class="swiper product-swiper mb-4">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="product-slide-image relative h-[88vw] md:h-[75vw] lg:h-[34rem] overflow-hidden rounded-lg md:rounded-3xl">
                                        <img src="placeholder.png" alt="" class="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="product-slide-image relative h-[88vw] md:h-[75vw] lg:h-[34rem] overflow-hidden rounded-lg md:rounded-3xl">
                                        <img src="placeholder.png" alt="" class="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="product-slide-image relative h-[88vw] md:h-[75vw] lg:h-[34rem] overflow-hidden rounded-lg md:rounded-3xl">
                                        <img src="placeholder.png" alt="" class="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="product-slide-image relative h-[88vw] md:h-[75vw] lg:h-[34rem] overflow-hidden rounded-lg md:rounded-3xl">
                                        <img src="placeholder.png" alt="" class="w-full h-full object-cover" data-mm-target="videoModal" />
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
                            <img src="placeholder.png" alt="" class="w-full h-full object-cover" />
                        </div>
                        <div class="product-thumbnail relative h-[26vw] lg:h-[10.2rem] overflow-hidden rounded-xl cursor-pointer" data-thumbnail="1">
                            <img src="placeholder.png" alt="" class="w-full h-full object-cover" />
                        </div>
                        <div class="product-thumbnail relative h-[26vw] lg:h-[10.2rem] overflow-hidden rounded-xl cursor-pointer" data-thumbnail="2">
                            <img src="placeholder.png" alt="" class="w-full h-full object-cover" />
                        </div>
                        <div class="product-thumbnail relative h-[26vw] lg:h-[10.2rem] overflow-hidden rounded-xl cursor-pointer" data-thumbnail="3">
                            <img src="placeholder.png" alt="" class="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-information">
                <!-- main title -->
                <h1 class="product-title text-[2.4rem] md:text-[2.6rem] font-semibold leading-[120%]">Lorem Ipsum 30-Day Test Drive - Success Guaranteed Or Your Money Back</h1>
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
                            <img src="placeholder.png" alt="customer avatar" class="w-[4rem] h-[4rem] object-cover rounded-full">
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
                        <img src="icon-checkmark-green.png" class="min-w-[1.6rem] max-w-[1.6rem] h-auto mr-2">
                        <span class="flex-grow">33.71 Hz Gamma Frequency Unlocks 100% Of Your Brain’s Cognitive Ability</span>
                    </li>
                    <li class="mb-4 flex items-center text-md">
                        <img src="icon-checkmark-green.png" class="min-w-[1.6rem] max-w-[1.6rem] h-auto mr-2">
                        <span class="flex-grow">Stronger Than Binaural Beats</span>
                    </li>
                    <li class="mb-4 flex items-center text-md">
                        <img src="icon-checkmark-green.png" class="min-w-[1.6rem] max-w-[1.6rem] h-auto mr-2">
                        <span class="flex-grow">Increases Energy and Vitality</span>
                    </li>
                    <li class="mb-4 flex items-center text-md">
                        <img src="icon-checkmark-green.png" class="min-w-[1.6rem] max-w-[1.6rem] h-auto mr-2">
                        <span class="flex-grow">PEMF Technology Backed By 242 Academic Studies</span>
                    </li>
                    <li class="mb-4 flex items-center text-md">
                        <img src="icon-checkmark-green.png" class="min-w-[1.6rem] max-w-[1.6rem] h-auto mr-2">
                        <span class="flex-grow">Enhances Mental Capacity</span>
                    </li>
                    <li class="mb-4 flex items-center text-md">
                        <img src="icon-checkmark-green.png" class="min-w-[1.6rem] max-w-[1.6rem] h-auto mr-2">
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
                <!-- add to cart button -->
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
                        bg-[#5271ff]
                        uppercase 
                        text-white 
                        font-bold 
                        text-xl 
                        hover:bg-secondary
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
                        <!-- Visa Logo -->
                        <img class="payment-options-icon h-[14px] inline mr-[5px] align-middle" src="logo-visa.png" alt="Visa">
                        <!-- Mastercard Logo -->
                        <img class="payment-options-icon h-[14px] inline mr-[5px] align-middle" src="logo-mastercard.png" alt="Mastercard">
                        <!-- ShopPay Logo -->
                        <img class="payment-options-icon h-[14px] inline mr-[5px] align-middle" src="logo-shoppay.png" alt="ShopPay">
                        <!-- ApplePay Logo -->
                        <img class="payment-options-icon h-[14px] inline mr-[5px] align-middle" src="logo-applepay.png" alt="ApplePay">
                        <!-- GPay Logo -->
                        <img class="payment-options-icon h-[14px] inline mr-[5px] align-middle" src="logo-gpay.png" alt="GooglePay">
                        <img class="payment-options-icon h-[14px] inline mr-[5px] align-middle" src="logo-paypal.png" alt="Paypal">
                    </div>
                </div>
                <!-- product accordion section -->
                <div class="container p-0 py-4">
                    <!-- FAQ Section - If you're not using this be sure to comment out the SCSS and JS files named "accordion" -->
                    <div class="w-full mx-auto">
                        <div class="border-b">
                            <div class="accordion__title group active relative cursor-pointer flex justify-between transition-colors duration-500 relative font-bold text-white text-lg py-3">
                                <span class="font-semibold text-md">Key Features</span>
                                <img src="icon-chevron-down.svg" class="w-4 h-auto ml-2 inline-block transition-all group-[.active]:rotate-180"> 
                            </div>
                            <div class="accordion__content h-0 overflow-hidden transition-[height] duration-500">
                                <div class="pt-2 pb-6">
                                    <ul class="p-0">
                                        <li class="mb-2 flex items-start md:items-center justify-start">
                                            <img src="icon-checkmark-purple-alt.svg" class="w-[1rem] h-auto inline-block relative top-[0.3rem] md:top-0 mr-2 flex-shrink-0">
                                            <span class="flex-grow">
                                                Neo-coil headband with PEMF tech
                                            </span>
                                        </li>
                                        <li class="mb-2 flex items-start md:items-center justify-start">
                                            <img src="icon-checkmark-purple-alt.svg" class="w-[1rem] h-auto inline-block relative top-[0.3rem] md:top-0 mr-2 flex-shrink-0">
                                            <span class="flex-grow">
                                                Rechargeable long-life battery
                                            </span>
                                        </li>
                                        <li class="mb-2 flex items-start md:items-center justify-start">
                                            <img src="icon-checkmark-purple-alt.svg" class="w-[1rem] h-auto inline-block relative top-[0.3rem] md:top-0 mr-2 flex-shrink-0">
                                            <span class="flex-grow">
                                                Portable
                                            </span>
                                        </li>
                                        <li class="mb-2 flex items-start md:items-center justify-start">
                                            <img src="icon-checkmark-purple-alt.svg" class="w-[1rem] h-auto inline-block relative top-[0.3rem] md:top-0 mr-2 flex-shrink-0">
                                            <span class="flex-grow">
                                                Control program and frequencies using the companion app
                                            </span>
                                        </li>
                                        <li class="mb-2 flex items-start md:items-center justify-start">
                                            <img src="icon-checkmark-purple-alt.svg" class="w-[1rem] h-auto inline-block relative top-[0.3rem] md:top-0 mr-2 flex-shrink-0">
                                            <span class="flex-grow">
                                                Free express shipping
                                            </span>
                                        </li>
                                        <li class="mb-2 flex items-start md:items-center justify-start">
                                            <img src="icon-checkmark-purple-alt.svg" class="w-[1rem] h-auto inline-block relative top-[0.3rem] md:top-0 mr-2 flex-shrink-0">
                                            <span class="flex-grow">
                                                Exclusive 50% off discount on other PEMF devices
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="border-b">
                            <div class="accordion__title group relative cursor-pointer flex justify-between transition-colors duration-500 relative font-bold text-white text-lg py-3">
                                <span class="font-semibold text-md">Shipping Information</span>
                                <img src="icon-chevron-down.svg" class="w-4 h-auto ml-2 inline-block transition-all group-[.active]:rotate-180"> 
                            </div>
                            <div class="accordion__content h-0 overflow-hidden transition-[height] duration-500">
                                <div class="pt-2 pb-6">
                                    <ul class="list-disc ml-4">
                                        <li>
                                            We will arrange the shipment of the product(s) to you. 
                                        </li>
                                        <li>
                                            Free shipping to Australia.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="accordion__title group relative cursor-pointer flex justify-between transition-colors duration-500 relative font-bold text-white text-lg py-3">
                                <span class="font-semibold text-md">Warranty & Return Policy</span>
                                <img src="icon-chevron-down.svg" class="w-4 h-auto ml-2 inline-block transition-all group-[.active]:rotate-180"> 
                            </div>
                            <div class="accordion__content h-0 overflow-hidden transition-[height] duration-500">
                                <div class="pt-2 pb-6">
                                    <p class="mb-4">
                                        Our warranty policy covers physical and digital defects. If a product exhibits physical or digital defects that affect its functioning and 
                                        this is verified by our customer support team, then a replacement or direct compensation is in line with this warranty policy. The warranty 
                                        policy is active for two (2) years after the product is received by the customer, with a maximum extension of twenty-six (26) months. If a 
                                        defect is verified and replacement approved, a new replacement product will be sent to the customer using the address and shipping instructions 
                                        of their original order, unless requested otherwise.
                                    </p>
                                    <p class="mb-4">
                                        The warranty is not applicable in the following cases:
                                    </p>
                                    <ul class="list-disc ml-4 [&>li]:mb-1">
                                        <li>
                                            Failure or damage to the device or its components due to misuse or abuse.
                                        </li>
                                        <li>
                                            Damage and contamination of the device caused by improper protection.
                                        </li>
                                        <li>
                                            The removal or tearing of the device’s inner quality seal (which protects the electronic components and cushion) in the case of the NeoRhythm pad.
                                        </li>
                                        <li>
                                            If the device’s hardware or software has been opened, accessed and/or modified from its original functioning state.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
};
