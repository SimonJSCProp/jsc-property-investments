import sliders from '../../assets/js/sliders.js'

export default {
	title: 'Layouts/Testimonials',
	argTypes: {
		type: {
			control: { type: 'select' },
			options: ['single', 'offset', 'marquee', 'masonary'],
		},
	},
	render: (args) => {
		setTimeout(sliders, 0)

		if (args.type === 'single') {
		}

		if (args.type === 'offset') {
		}
	},
}

export const SingleSlide = () => {
	setTimeout(sliders, 0)
	return `
        <section class="py-16 md:py-28 text-center text-white relative">
            <div class="absolute top-0 left-0 z-10 pointer-events-none h-full w-full bg-black">
                <img src="placeholder.png" class="w-full h-full object-cover select-none opacity-60" />
            </div>
            <div class="container px-4 relative z-20">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full md:w-10/12 lg:w-8/12">
                        <h2 class="text-3xl lg:text-4xl mb-5 font-bold capitalize leading-tight">This Is What Our Customers Are Saying About Us...</h2>
                    </div>
                    <div class="w-full md:w-10/12 lg:w-8/12">
    
                        <!-- Slider and slides within -->
                        <div class="swiper reviews flex justify-center items-center text-center lg:text-xl">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <p class="mx-auto">This is the paragraph text of the section. It will usually be one big paragraph, or two separate paragraphs. Make sure you separate the different blocks of text with separate paragraph tags and not just line breaks.</p>
                                </div>
                                <div class="swiper-slide">
                                    <p class="mx-auto">It will usually be one big paragraph, or two separate paragraphs. Make sure you separate the different blocks of text with separate paragraph tags and not just line breaks. This is the paragraph text of the section.</p>
                                </div>
                                <div class="swiper-slide">
                                    <p class="mx-auto">Make sure you separate the different blocks of text with separate paragraph tags and not just line breaks. This is the paragraph text of the section. It will usually be one big paragraph, or two separate paragraphs.</p>
                                </div>
                            </div>
                        </div>
    
                        <div class="swiper-nav flex justify-center mt-8 md:mt-0">
                            <div class="swiper-button-prev relative md:absolute outline-none inline-block md:flex justify-center items-center mt-0 md:top-1/2 md:-translate-y-1/2 rounded-full transition-all duration-300 cursor-pointer mx-4 md:mx-0 left-4 after:border-t-2 after:border-l-2 after:border-blue-400 after:w-8 after:h-8 after:block after:-rotate-45"></div>
                            <div class="swiper-button-next relative md:absolute outline-none inline-block md:flex justify-center items-center mt-0 md:top-1/2 md:-translate-y-1/2 rounded-full transition-all duration-300 cursor-pointer mx-4 md:mx-0 right-4 after:border-t-2 after:border-r-2 after:border-blue-400 after:w-8 after:h-8 after:block after:rotate-45"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

export const OffsetSlides = () => {
	setTimeout(sliders, 0)
	return `
        <section class="py-16 md:py-24 lg:py-28 bg-black">
            <div class="px-4 sm:px-0">
                <div class="flex flex-wrap justify-center text-center text-light">
                    <div class="w-full">
                        <h2 class="text-3xl lg:text-4xl mb-4 leading-tight font-bold capitalize text-center text-white mb-5">
                            Offset Testimonial Blocks Slider
                        </h2>
                    </div>
                </div>
                <div class="flex flex-wrap justify-center ">
                    <div class="w-full">
    
                        <div class="swiper swiper-testimonial-blocks mb-8">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide bg-white p-3">
                                    <blockquote class="text-lg lg:text-2xl mb-0">
                                        <p>This is some testimonial text. It is a paragraph of text that also includes a
                                            citation of who the person was that gave the quote. This particular testimonial
                                            contains heaps more words init. This is some testimonial text. It is a paragraph
                                            of text that also includes a
                                            citation of who the person was that gave the quote. This particular testimonial
                                            contains heaps more words init.This is some testimonial text. It is a paragraph
                                            of text that also includes a
                                            citation of who the person was that gave the quote. This particular testimonial
                                            contains heaps more words init.</p>
                                        <cite class="text-end">John Snow</cite>
                                    </blockquote>
                                </div>
                                <div class="swiper-slide bg-white p-3">
                                    <blockquote class="text-lg lg:text-2xl mb-0">
                                        <p>This is some testimonial text. It is a paragraph of text that also includes a
                                            citation of who the person was that gave the quote.</p>
                                        <cite class="text-end">John Snow</cite>
                                    </blockquote>
                                </div>
                                <div class="swiper-slide bg-white p-3">
                                    <blockquote class="text-lg lg:text-2xl mb-0">
                                        <p>This is some testimonial text. It is a paragraph of text that also includes a
                                            citation of who the person was that gave the quote.</p>
                                        <cite class="text-end">John Snow</cite>
                                    </blockquote>
                                </div>
                                <div class="swiper-slide bg-white p-3">
                                    <blockquote class="text-lg lg:text-2xl mb-0">
                                        <p>This is some testimonial text. It is a paragraph of text that also includes a
                                            citation of who the person was that gave the quote.</p>
                                        <cite class="text-end">John Snow</cite>
                                    </blockquote>
                                </div>
                                <div class="swiper-slide bg-white p-3">
                                    <blockquote class="text-lg lg:text-2xl mb-0">
                                        <p>This is some testimonial text. It is a paragraph of text that also includes a
                                            citation of who the person was that gave the quote.</p>
                                        <cite class="text-end">John Snow</cite>
                                    </blockquote>
                                </div>
                                <div class="swiper-slide bg-white p-3">
                                    <blockquote class="text-lg lg:text-2xl mb-0">
                                        <p>This is some testimonial text. It is a paragraph of text that also includes a
                                            citation of who the person was that gave the quote.</p>
                                        <cite class="text-end">John Snow</cite>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
    
                        <div class="swiper-pagination flex justify-center text-white/20"></div>
                    </div>
                </div>
            </div>
        </section>
    `
}

export const masonry = () => {
	setTimeout(sliders, 0)
	return `
    <section
			class="pt-[51px] md:pt-[90px] pb-[71px] md:pb-[118px] bg-[#fafafa] rounded-t-[14px] md:rounded-t-[30px]"
		>
			<div class="container px-6">
				<div class="flex flex-wrap justify-center">
					<div class="w-full md:w-10/12 lg:w-8/12">
						<h2
							class="text-3xl lg:text-4xl mb-4 leading-tight font-bold capitalize text-center text-black mb-5"
						>
							Real Stories, Real Results: Ordinary Aussie Women
							Are Transforming Their Passion Into Thriving $7K P/M
							Pilates Businesses
						</h2>
					</div>
				</div>
				<div class="w-full md:block mt-[50px]">
					<div
						class="gap-5 md:gap-4 md:columns-2 xl:columns-3 text-[1.4rem] md:text-[1.7rem] tracking-[-.2px] mb-[30px] md:mb-0"
					>
						<!-- card 	 -->
						<div
							class="overflow-hidden relative rounded-[14px] md:rounded-[16px] shadow-masonry bg-[#fff] break-inside-avoid mb-[10px]"
						>
							<img
								src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8"
								class="w-full min-h-[20rem] -mb-[3.125rem] z-10 relative"
							/>
							<div
								class="relative z-20 bg-white rounded-t-[1.25rem] px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<h3
									class="h4 mb-0 text-[#222222] text-[22px] font-bold font-sans capitalize leading-relaxed"
								>
									Penny Hargrave
								</h3>
								<img
									src="review-stars.svg"
									class="w-auto h-[1.25rem]"
								/>
							</div>
							<div
								class="z-30 bg-white px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<div
									class="flex items-between justify-center flex-col"
								>
									<p class="mb-[1rem] text-lg">
										This was a great training session with
										so many takeaways that i could implement
										straight away. i am constantly referring
										to the manual for ideas and my classes
										love the program. do yourself a favour
										and sign up. you won't regret it and
										your classes will love you for it.
									</p>
									<div
										class="flex justify-start gap-2 items-center pb-[1.15rem]"
									>
										<img
											src="icon-verified.svg"
											class="h-[19px] w-[1.25rem]"
										/>
										<p class="text-lg">Verified Review</p>
									</div>
								</div>
							</div>
						</div>

						<!-- card 	 -->
						<div
							class="overflow-hidden relative rounded-[14px] md:rounded-[16px] shadow-masonry bg-[#fff] break-inside-avoid mb-[10px]"
						>
							<div
								class="relative z-20 bg-white rounded-t-[1.25rem] px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<h3
									class="h4 mb-0 text-[#222222] text-[22px] font-bold font-sans capitalize leading-relaxed"
								>
									Melissa Neilson
								</h3>
								<img
									src="review-stars.svg"
									class="w-auto h-[1.25rem]"
								/>
							</div>
							<div
								class="z-30 bg-white px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<div
									class="flex items-between justify-center flex-col"
								>
									<p class="mb-[1rem] text-lg">
										I did the Melbourne foundations course
										and loved it. renee was wonderful, i
										look forward to continuing my journey as
										a barre attack instructor
									</p>
									<div
										class="flex justify-start gap-2 items-center pb-[1.15rem]"
									>
										<img
											src="icon-verified.svg"
											class="h-[19px] w-[1.25rem]"
										/>
										<p class="text-lg">Verified Review</p>
									</div>
								</div>
							</div>
						</div>

						<!-- card 	 -->
						<div
							class="overflow-hidden relative rounded-[14px] md:rounded-[16px] shadow-masonry bg-[#fff] break-inside-avoid mb-[10px]"
						>
							<img
								src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8"
								class="w-full min-h-[20rem] -mb-[3.125rem] z-10 relative"
							/>
							<div
								class="relative z-20 bg-white rounded-t-[1.25rem] px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<h3
									class="h4 mb-0 text-[#222222] text-[22px] font-bold font-sans capitalize leading-relaxed"
								>
									Yvette Clements
								</h3>
								<img
									src="review-stars.svg"
									class="w-auto h-[1.25rem]"
								/>
							</div>
							<div
								class="z-30 bg-white px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<div
									class="flex items-between justify-center flex-col"
								>
									<p class="mb-[1rem] text-lg">
										Renee Scott-director from Barre Attack
										is incredible! I highly recommend the
										courses run by Barre Attack- the course
										was fun, informative, and I feel a great
										addition to "Pilates Nest'.
									</p>
									<div
										class="flex justify-start gap-2 items-center pb-[1.15rem]"
									>
										<img
											src="icon-verified.svg"
											class="h-[19px] w-[1.25rem]"
										/>
										<p class="text-lg">Verified Review</p>
									</div>
								</div>
							</div>
						</div>

						<!-- card 	 -->
						<div
							class="overflow-hidden relative rounded-[14px] md:rounded-[16px] shadow-masonry bg-[#fff] break-inside-avoid mb-[10px]"
						>
							<div
								class="relative z-20 bg-white rounded-t-[1.25rem] px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<h3
									class="h4 mb-0 text-[#222222] text-[22px] font-bold font-sans capitalize leading-relaxed"
								>
									Annette Counsel
								</h3>
								<img
									src="review-stars.svg"
									class="w-auto h-[1.25rem]"
								/>
							</div>
							<div
								class="z-30 bg-white px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<div
									class="flex items-between justify-center flex-col"
								>
									<p class="mb-[1rem] text-lg">
										Renee and her team have created a
										syllabus that you can grow into over
										many years and still be challenged, have
										fun, be motivated and work hard!
									</p>
									<div
										class="flex justify-start gap-2 items-center pb-[1.15rem]"
									>
										<img
											src="icon-verified.svg"
											class="h-[19px] w-[1.25rem]"
										/>
										<p class="text-lg">Verified Review</p>
									</div>
								</div>
							</div>
						</div>

						<!-- card 	 -->
						<div
							class="overflow-hidden relative rounded-[14px] md:rounded-[16px] shadow-masonry bg-[#fff] break-inside-avoid mb-[10px]"
						>
							<img
								src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8"
								class="w-full min-h-[20rem] -mb-[3.125rem] z-10 relative"
							/>
							<div
								class="relative z-20 bg-white rounded-t-[1.25rem] px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<h3
									class="h4 mb-0 text-[#222222] text-[22px] font-bold font-sans capitalize leading-relaxed"
								>
									Katrina Dawson
								</h3>
								<img
									src="review-stars.svg"
									class="w-auto h-[1.25rem]"
								/>
							</div>
							<div
								class="z-30 bg-white px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<div
									class="flex items-between justify-center flex-col"
								>
									<p class="mb-[1rem] text-lg">
										The foundation program really exceeded
										all of my expectations, even online. It
										was excellent, professional, fun, very
										well structured, & expertly facilitated.
									</p>
									<div
										class="flex justify-start gap-2 items-center pb-[1.15rem]"
									>
										<img
											src="icon-verified.svg"
											class="h-[19px] w-[1.25rem]"
										/>
										<p class="text-lg">Verified Review</p>
									</div>
								</div>
							</div>
						</div>
						<!-- card 	 -->
						<div
							class="overflow-hidden relative rounded-[14px] md:rounded-[16px] shadow-masonry bg-[#fff] break-inside-avoid mb-[10px]"
						>
							<img
								src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8"
								class="w-full min-h-[20rem] -mb-[3.125rem] z-10 relative"
							/>
							<div
								class="relative z-20 bg-white rounded-t-[1.25rem] px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<h3
									class="h4 mb-0 text-[#222222] text-[22px] font-bold font-sans capitalize leading-relaxed"
								>
									Chondelle Couper
								</h3>
								<img
									src="review-stars.svg"
									class="w-auto h-[1.25rem]"
								/>
							</div>
							<div
								class="z-30 bg-white px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<div
									class="flex items-between justify-center flex-col"
								>
									<p class="mb-[1rem] text-lg">
										Amazing weekend doing Barre Attack
										training with Renee Scott! I love how
										the program takes the best parts of
										ballets adds in great cardio pilates and
										props plus u have fun doing it!! Looking
										forward to teaching it at Yoganic.
										thankyou xo
									</p>
									<div
										class="flex justify-start gap-2 items-center pb-[1.15rem]"
									>
										<img
											src="icon-verified.svg"
											class="h-[19px] w-[1.25rem]"
										/>
										<p class="text-lg">Verified Review</p>
									</div>
								</div>
							</div>
						</div>

						<!-- card 	 -->
						<div
							class="overflow-hidden relative rounded-[14px] md:rounded-[16px] shadow-masonry bg-[#fff] break-inside-avoid mb-[10px]"
						>
							<img
								src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8"
								class="w-full min-h-[20rem] -mb-[3.125rem] z-10 relative"
							/>
							<div
								class="relative z-20 bg-white rounded-t-[1.25rem] px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<h3
									class="h4 mb-0 text-[#222222] text-[22px] font-bold font-sans capitalize leading-relaxed"
								>
									Cass Bedford
								</h3>
								<img
									src="review-stars.svg"
									class="w-auto h-[1.25rem]"
								/>
							</div>
							<div
								class="z-30 bg-white px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<div
									class="flex items-between justify-center flex-col"
								>
									<p class="mb-[1rem] text-lg">
										I always recommend Barre Attack to all
										my instructors who are wanting to teach
										barre as i find it easy to teach with
										all the guidance and knowledge we are
										given by Renee and her team and with so
										many different styles of class trainings
										made available. You can't go past Barre
										Attack!
									</p>
									<div
										class="flex justify-start gap-2 items-center pb-[1.15rem]"
									>
										<img
											src="icon-verified.svg"
											class="h-[19px] w-[1.25rem]"
										/>
										<p class="text-lg">Verified Review</p>
									</div>
								</div>
							</div>
						</div>

						<!-- card 	 -->
						<div
							class="overflow-hidden relative rounded-[14px] md:rounded-[16px] shadow-masonry bg-[#fff] break-inside-avoid mb-[10px]"
						>
							<div
								class="relative z-20 bg-white rounded-t-[1.25rem] px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<h3
									class="h4 mb-0 text-[#222222] text-[22px] font-bold font-sans capitalize leading-relaxed"
								>
									Move Plus Connect
								</h3>
								<img
									src="review-stars.svg"
									class="w-auto h-[1.25rem]"
								/>
							</div>
							<div
								class="z-30 bg-white px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<div
									class="flex items-between justify-center flex-col"
								>
									<p class="mb-[1rem] text-lg">
										Excellent day of training & instruction
										on the foundations course! a very
										rewarding, great sequences and program!
										can't wait to start teaching!
									</p>
									<div
										class="flex justify-start gap-2 items-center pb-[1.15rem]"
									>
										<img
											src="icon-verified.svg"
											class="h-[19px] w-[1.25rem]"
										/>
										<p class="text-lg">Verified Review</p>
									</div>
								</div>
							</div>
						</div>

						<!-- card 	 -->
						<div
							class="overflow-hidden relative rounded-[14px] md:rounded-[16px] shadow-masonry bg-[#fff] break-inside-avoid mb-[10px]"
						>
							<img
								src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8"
								class="w-full min-h-[20rem] -mb-[3.125rem] z-10 relative"
							/>
							<div
								class="relative z-20 bg-white rounded-t-[1.25rem] px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<h3
									class="h4 mb-0 text-[#222222] text-[22px] font-bold font-sans capitalize leading-relaxed"
								>
									Nikki Heydon
								</h3>
								<img
									src="review-stars.svg"
									class="w-auto h-[1.25rem]"
								/>
							</div>
							<div
								class="z-30 bg-white px-[1.25rem] md:px-[30px] pt-[1.25rem] pb-0 flex justify-between items-center"
							>
								<div
									class="flex items-between justify-center flex-col"
								>
									<p class="mb-[1rem] text-lg">
										I love Barre Attack for a total body,
										all-round workout. You get a great
										cardio workout but most importantly, it
										is focused on technique, and
										participants understand what they are
										working.
									</p>
									<div
										class="flex justify-start gap-2 items-center pb-[1.15rem]"
									>
										<img
											src="icon-verified.svg"
											class="h-[19px] w-[1.25rem]"
										/>
										<p class="text-lg">Verified Review</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    `
}

export const DoubleMarquee = () => {
	setTimeout(sliders, 0)
	return `
        <!-- Testimonials Marquee & Slider --> 
    <section class="py-14 lg:py-20 overflow-hidden relative">
        <div class="container relative z-[4]">
            <h2 class="text-center mb-5 lg:mb-12 lg:max-w-[40rem] lg:mx-auto">
                This is a cool heading. Guess what? You're even cooler.
            </h2>
        </div>
        <div class="absolute top-0 right-0 z-[2] xl:h-[60%]">
            <icon src="icon-graphic-nodes.svg" class="w-[80vw] xl:w-full h-full hidden md:block"></icon>
            <icon src="icon-graphic-nodes-mobile.svg" class="w-[40vw] h-full md:hidden"></icon>
        </div>
        <!-- marquee for desktop -->
         <div class="testimonials-marquee relative z-[4] [&_li]:max-w-[30vw] 2xl:[&_li]:max-w-[20vw] [&_li]:h-full mb-4 hidden md:flex"> 
            <ul class="p-0 my-1 flex items-center justify-around min-w-full animate-marqueereverse shrink-0" style="animation-duration: 50s;">
                <li class="flex mr-4">
                    <div class="bg-white p-6 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Dr. Peter Griffin
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
                            I still can't believe it's not butter.
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-6 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Randy Marsh
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
                            Oh, I'm sorry. I thought this was America!
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Spyder Mann
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
                            With great brand awareness comes great copyright infringement.
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    The Incredible Hulk
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
                            "Hulk Smash."
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Walter H. White
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
                            We need to cook. 
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Monkey D. Luffy
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
                            I'm gunna be king of the pirates!
                        </p>
                    </div>
                </li>
            </ul>
            <ul class="p-0 my-1 flex items-center justify-around min-w-full animate-marqueereverse shrink-0" style="animation-duration: 50s;">
                <li class="flex mr-4">
                    <div class="bg-white p-6 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Dr. Peter Griffin
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
                            I still can't believe it's not butter.
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-6 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Randy Marsh
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
                            Oh, I'm sorry. I thought this was America!
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Spyder Mann
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
                            With great brand awareness comes great copyright infringement.
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    The Incredible Hulk
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
                            "Hulk Smash."
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Walter H. White
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
                            We need to cook. 
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Monkey D. Luffy
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
                            I'm gunna be king of the pirates!
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- reverse marquee -->
        <div class="testimonials-marquee relative z-[4] flex [&_li]:max-w-[30vw] 2xl:[&_li]:max-w-[20vw] [&_li]:h-full mb-[8rem] hidden md:flex"> 
            <!-- Reverse -->
            <ul class="p-0 my-1 flex items-center justify-around min-w-full animate-marquee shrink-0" style="animation-duration: 50s;">
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Skeletor
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
                            Nyyyyaaaarrrrr!
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Sir. Robert Cornelius Tables of Kongshire 
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
                            Hi, my name is Robert'); DROP TABLE Students;-- 
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    John Cena
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
                            
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Angron, Daemon Primarch of Khorne
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
                            I am so angry.
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Dwight K. Schrute
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
                            Bears. Beets. Battlestar Galactica. 
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Pikachu
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
                            "Pikachu."
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
                                    Skeletor
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
                            Nyyyyaaaarrrrr!
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Sir. Robert Cornelius Tables of Kongshire 
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
                            Hi, my name is Robert'); DROP TABLE Students;-- 
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    John Cena
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
                            
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Angron, Daemon Primarch of Khorne
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
                            I am so angry.
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Dwight K. Schrute
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
                            Bears. Beets. Battlestar Galactica. 
                        </p>
                    </div>
                </li> 
                <li class="flex mr-4">
                    <div class="bg-white p-5 shadow-lg rounded-md">
                        <div class="flex items-center">
                            <div class="flex-grow">
                                <strong class="font-bold text-[12px] inline-block mr-2">
                                    Pikachu
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
                            "Pikachu."
                        </p>
                    </div>
                </li> 
            </ul>
        </div>
    </section>
    `
}
