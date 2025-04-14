import video from '../../assets/js/video-embeds.js'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'Components/Video Embeds',
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: 'The `Video Embeds` component displays placeholder image and button for video embeds. The component should be used to display video embeds in a consistent way across the website.',
			},
		},
	},
	argTypes: {
		embedType: {
			options: ['wistia', 'vimeo', 'youtube'],
			control: {
				type: 'select',
			},
			defaultValue: 'youtube',
		},
		videoId: {
			control: {
				type: 'text',
			},
			defaultValue: 'gvSGTP2D_Lo',
		},
		previewType: {
			options: ['image', 'video'],
			control: {
				type: 'select',
			},
			defaultValue: 'image',
		},
	},
};

const Template = ({ embedType, videoId, previewType }) => {
	setTimeout(() => {
		video() // This function should be exported from your `video.js`
	}, 0) // Executing after the current call stack clears, giving time for the DOM to update

	let preview = '';

	if (previewType === 'image') {
		preview = `<img src="https://picsum.photos/640/360" class="w-full h-full object-cover " />`;
	} else {
		preview = `
			<video width="100%" muted="" autoplay="" playsinline="" loop="" data-js-modal-trigger="free-training">
				<source src="https://kingkong.co/wp-content/uploads/2024/04/vsl-2024-preview.mp4" type="video/mp4">
			</video>
		`;  
	}

	return `
		<div class="container p-4">
			<div class="relative bg-black overflow-hidden mb-8 group/video">
				<iframe class="aspect-video w-full" src="about:blank" frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen></iframe>

				<div class="absolute top-0 left-0 w-full h-full group-[.playing]/video:hidden inline-video-trigger cursor-pointer" data-video-id="${videoId}">
					${preview}
				</div>

				<button class="w-24 p-0 m-0 border-0 appearance-none bg-none z-10 transition duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 group-hover/video:scale-110 group-[.playing]/video:hidden pointer-events-none">
					<svg viewBox="0 0 183 183" fill="none" class=""><circle opacity=".2" cx="91.605" cy="91.267" r="91.099" fill="#4AC186"></circle><circle cx="91.605" cy="91.266" r="62.113" fill="#4AC186"></circle><path d="M112.311 92.302l-31.057 17.93v-35.86l31.057 17.93z" fill="#fff"></path></svg>
				</button>
			</div>
		</div>
	`;
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ImagePreview = Template.bind({});
ImagePreview.args = {
    embedType: 'youtube',
	videoId: 'gvSGTP2D_Lo',
	previewType: 'image',
};

export const VideoPreview = Template.bind({});
VideoPreview.args = {
	embedType: 'youtube',
	videoId: 'gvSGTP2D_Lo',
	previewType: 'video',
};

export const VideoWithOverlay = () => {
	return `
		<section class="text-center pt-20 pb-32 relative bg-[#F4F6FF]">
			<div class="container relative z-20">
				<div class="flex flex-wrap justify-center">
					<div class="w-full md:w-10/12 lg:w-8/12 relative">
						<!-- Youtube stats badge -->
						<div class="absolute top-[-2rem] md:top-0 left-[-5px] z-20 md:scale-[1.8]">
							<div class="relative view-animation fade-up">
								<div class="absolute top-[-5px] right-[-17px]">
									<icon src="icon-youtube-round.svg" class="w-[2.2rem] h-auto"></icon>
								</div>
								<div class="bg-white items-start shadow-[0_0px_10px_-4px_rgba(0,0,0,0.3)] 
								px-2 py-1 pr-5 rounded-md grid grid-template-columns-auto grid-flow-col">
									<div class="mr-2 mt-2">
										<img src="" alt="" class="w-8 h-8 object-cover rounded-full bg-black" />
									</div>
									<div class="text-left">
										<span class="block font-bold text-[14px] tracking-tight mb-[-8px]">
											Riley Marks <icon src="icon-checkmark-teal.svg" class="w-3 h-auto inline-block ml-[2px]"></icon>
										</span>
										<span class="text-[10px]">@RileyMarks</span>
										<div class="flex pt-[0px]">
											<div class="flex-shrink-0 mr-4">
												<span class="block font-bold text-[11px] mb-[-10px]">48.7K </span>
												<span class="text-[10px]">Subscribers</span>
											</div>
											<div class="flex-grow">
												<span class="block font-bold text-[11px] mb-[-10px]">315 </span>
												<span class="text-[10px]">Videos</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Video element -->
						<div class="relative mb-8 group/video rounded-2xl overflow-hidden md:rounded-3xl hover:z-[20] bg-gray-500">
							<iframe class="aspect-video w-full" src="about:blank" frameborder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen=""></iframe>
			
							<div class="absolute top-0 left-0 w-full h-full group-[.playing]/video:hidden rounded-lg md:rounded-3xl border-2 border-white">
								<img src="thumbnail-rileymarks.jpg" class="w-full h-full object-cover md:rounded-3xl" />
							</div>
			
							<button
								class="wistia w-20 p-0 m-0 border-0 appearance-none bg-none z-10 transition duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-video-trigger hover:scale-110 group-[.playing]/video:hidden"
								data-video-id="example12345">
								<img src="icon-play.svg" class="img-fluid view-animation" />
							</button>
						</div>
						<!-- Video description card -->
						<div class="absolute right-2 md:scale-[1.5]" style="top: calc(100% - 4rem);">
							<div class="relative view-animation fade-up">
								<span class="absolute top-[-8px] left-[-8px] flex items-center justify-center rounded-full bg-[#5271FF4D] w-6 h-6 mr-3">
									<span class="w-4 h-4 bg-[#5271FF] rounded-full"></span>
								</span>     
								<div class="bg-white max-w-[200px] text-left shadow-[0_0px_10px_-4px_rgba(0,0,0,0.3)] 
								p-4 pr-1 rounded-md">
									<span class="block font-bold text-md tracking-normal">Riley <span class="font-bold text-[#5271FF]">Marks</span></span>
									<p class="text-[10px]">
										Riley Marks is an educator and technology enthusiast with a focus on digital transformation.
									</p>
								</div>
							</div>
						</div> 
					</div>
				</div>
			</div>
		</section>

	`;	
};