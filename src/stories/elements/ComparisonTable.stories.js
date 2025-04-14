export default {
    title: 'Design Elements/Comparison Table',
}

export const ComparisonTable = () => {
    return `
        <section class="py-16 md:py-24 lg:py-28">
            <div class="container px-4">
                <div class="flex flex-wrap justify-center items-center justify-center">
                    <div class="w-full xl:w-10/12">
                        <table class="bg-white rounded-md text-left">
                            <tbody>
                            <tr class="border-b-2 border-gray-200 uppercase text-sm lg:text-lg xl:text-xl">
                                <th class="w-[40%] p-3 md:p-5 align-middle ">
                                    Feature
                                </th>
                                <th class="w-[20%] p-3 md:p-5 align-middle text-center bg-indigo-900 relative before:absolute before:w-full before:left-0 before:h-10 before:bg-indigo-900 before:-top-4 before:rounded-r-lg before:rounded-l-lg">
                                    <img class="w-full w-10/12" src="logo.svg"/>
                                </th>
                                <th class="w-[20%] p-3 md:p-5 align-middle text-center">
                                    Other Jewelry Stores
                                </th>
                                <th class="w-[20%] p-3 md:p-5 align-middle text-center">
                                    Third Option
                                </th>
                            </tr>
                            <tr class="border-b-2 border-gray-200">
                                <th class="w-[20%] p-3 md:p-5 font-normal lg:text-xl align-middle">
                                    One-Of-A-Kind Rings
                                </td>
                                <td class="w-[20%] text-center bg-indigo-900">
                                    <img class="w-7 inline-block" src="icon-check.svg" alt="Icon check"/>
                                </td>
                                <td class="w-[20%] text-center">X</td>
                                <td class="w-[20%] text-center">X</td>
                            </tr>
                            <tr class="border-b-2 border-gray-200">
                                <th class="w-[20%] p-3 md:p-5 font-normal lg:text-xl align-middle">
                                    High Quality Stones
                                </td>
                                <td class="w-[20%] text-center bg-indigo-900">
                                    <img class="w-7 inline-block" src="icon-check.svg" alt="Icon check"/>
                                </td>
                                <td class="w-[20%] text-center">X</td>
                                <td class="w-[20%] text-center">X</td>
                            </tr>
                            <tr class="border-b-2 border-gray-200">
                                <th class="w-[20%] p-3 md:p-5 font-normal lg:text-xl align-middle">
                                    G.I.A Certified Diamonds
                                </td>
                                <td class="w-[20%] text-center bg-indigo-900">
                                    <img class="w-7 inline-block" src="icon-check.svg" alt="Icon check"/>
                                </td>
                                <td class=" text-center">
                                    <img class="w-7 inline-block" src="icon-check.svg" alt="Icon check"/>
                                </td>
                                <td class="w-[20%] text-center">X</td>
                            </tr>
                            <tr class="border-b-2 border-gray-200">
                                <th class="w-[20%] p-3 md:p-5 font-normal lg:text-xl align-middle">
                                    Personalised, One-On-One Time
                                </td>
                                <td class="w-[20%] text-center bg-indigo-900">
                                    <img class="w-7 inline-block" src="icon-check.svg" alt="Icon check"/>
                                </td>
                                <td class=" text-center">
                                    <img class="w-7 inline-block" src="icon-check.svg" alt="Icon check"/>
                                </td>
                                <td class="w-[20%] text-center">X</td>
                            </tr>
                            <tr class="border-b-2 border-gray-200">
                                <th class="w-[20%] p-3 md:p-5 font-normal lg:text-xl align-middle">
                                    Lifetime Warranty
                                </td>
                                <td class="w-[20%] text-center bg-indigo-900">
                                    <img class="w-7 inline-block" src="icon-check.svg" alt="Icon check"/>
                                </td>
                                <td class="w-[20%] text-center">X</td>
                                <td class="w-[20%] text-center">
                                    <img class="w-7 inline-block" src="icon-check.svg" alt="Icon check"/>
                                </td>
                            </tr>
                            <tr class="border-b-2 border-gray-200">
                                <th class="w-[20%] p-3 md:p-5 font-normal lg:text-xl align-middle">
                                    Hassle Free Refunds and Returns
                                </td>
                                <td class="w-[20%] text-center bg-indigo-900">
                                    <img class="w-7 inline-block" src="icon-check.svg" alt="Icon check"/>
                                </td>
                                <td class="w-[20%] text-center">X</td>
                                <td class="w-[20%] text-center">X</td>
                            </tr>
                            <tr class="border-b-2 border-gray-200">
                                <th class="w-[20%] p-3 md:p-5 font-normal lg:text-xl align-middle">
                                    Free Ring Resizing
                                </td>
                                <td class="w-[20%] text-center bg-indigo-900">
                                    <img class="w-7 inline-block" src="icon-check.svg" alt="Icon check"/>
                                </td>
                                <td class="w-[20%] text-center">
                                    <img class="w-7 inline-block" src="icon-check.svg" alt="Icon check"/>
                                </td>
                                <td class="w-[20%] text-center">
                                    <img class="w-7 inline-block" src="icon-check.svg" alt="Icon check"/>
                                </td>
                            </tr>
                            <tr class="border-b-2 border-gray-200">
                                <th class="w-[20%] p-3 md:p-5 font-normal lg:text-xl align-middle">
                                    Natural and Lab Grown Diamonds
                                </td>
                                <td class="w-[20%] text-center bg-indigo-900">
                                    <img class="w-7 inline-block" src="icon-check.svg" alt="Icon check"/>
                                </td>
                                <td class="w-[20%] text-center">X</td>
                                <td class="w-[20%] text-center">X</td>
                            </tr>
                            <tr class="border-b-2 border-gray-200">
                                <th class="w-[20%] p-3 md:p-5 font-normal lg:text-xl align-middle">
                                    Lifetime Diamond Upgrades
                                </td>
                                <td class="w-[20%] text-center bg-indigo-900">
                                    <img class="w-7 inline-block" src="icon-check.svg" alt="Icon check"/>
                                </td>
                                <td class="w-[20%] text-center">X</td>
                                <td class="w-[20%] text-center">X</td>
                            </tr>
                            <tr class="border-b-2 border-gray-200">
                                <th class="w-[20%] p-3 md:p-5 font-normal lg:text-xl align-middle">
                                    100% Satisfaction Guarantee
                                </td>
                                <td class="w-[20%] text-center bg-indigo-900">
                                    <img class="w-7 inline-block" src="icon-check.svg" alt="Icon check"/>
                                </td>
                                <td class="w-[20%] text-center">X</td>
                                <td class="w-[20%] text-center">X</td>
                            </tr>
                            <tr class="border-b-2 border-gray-200">
                                <th class="w-[20%] p-3 md:p-5 font-normal lg:text-xl align-middle">
                                    Diamond Price-Beat Promise
                                </td>
                                <td class="w-[20%] text-center bg-indigo-900 relative before:absolute before:w-full before:left-0 before:h-[130%] before:bg-indigo-900 before:top-0 before:rounded-t-lg before:rounded-l-lg before:rounded-r-md">
                                    <img class="w-7 inline-block relative z-20" src="icon-check.svg" alt="Icon check"/>
                                </td>
                                <td class="w-[20%] text-center">X</td>
                                <td class="w-[20%] text-center">
                                    <img class="w-7 inline-block" src="icon-check.svg" alt="Icon check"/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    `
};

export const ComparisonTableAlt = () => {
    return `
        <section class="py-12 md:py-24 lg:py-28 bg-[#F4F6FF]">
            <div class="container">
                <div class="flex flex-wrap justify-center items-center justify-center">
                    <div class="w-full xl:w-10/12">
                        <table class="rounded-md text-left mt-10 lg:mt-14">
                            <tbody>
                                <tr class="relative top-[1px] uppercase text-sm lg:text-lg xl:text-xl">
                                    <th class="w-[32%] p-3 md:p-5 align-middle"></th>
                                    <th class="w-[36%] p-3 md:p-5 align-middle text-center bg-[#5271FF] text-white relative rounded-t-2xl">
                                        <span class="text-lg font-semibold">PEMF</span>
                                    </th>
                                    <th class="w-[32%] p-3 md:p-5 align-middle text-center">
                                        <span class="text-lg font-semibold">EEG</span>
                                    </th>
                                </tr>
                                <tr class="border-b-[1px] border-[#F4F6FF] bg-white">
                                    <th class="align-middle w-[32%] p-3 md:p-5 font-normal lg:text-xl align-middle rounded-tl-2xl px-2 py-5">
                                        <span class="block font-semibold tracking-tight text-md lg:max-w-[70%] lg:py-8 lg:mx-auto">
                                            Puts Your Brain In A Focused State
                                        </span>
                                    </th>
                                    <td class="align-top w-[36%] text-center bg-[#5271FF] text-white px-2 py-5">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block" alt="checkmark icon">
                                        <span class="block text-[0.75rem] tracking-tight font-regular lg:text-[1rem] lg:max-w-[60%] lg:mx-auto lg:mt-4">
                                            Applies The 33.71 Hz Gamma Frequency To Unlock Hyper-Focus
                                        </span>
                                    </td>
                                    <td class="align-top w-[32%] text-center rounded-tr-2xl px-2 py-5">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block invert" alt="checkmark icon">
                                        <span class="block text-[0.75rem] tracking-tight font-regular lg:max-w-[70%] lg:mx-auto lg:mt-4 lg:text-[1rem]">
                                            Provides Brain Biofeedback ONLY
                                        </span>
                                    </td>
                                </tr>
                                <tr class="flex-col items-start border-b-[1px] border-[#F4F6FF] bg-white">
                                    <th class="align-middle w-[32%] p-3 md:p-5 font-normal lg:text-xl align-middle px-2 py-5">
                                        <span class="block font-semibold tracking-tight text-md lg:max-w-[70%] lg:py-8 lg:mx-auto">
                                            Influence Brainwaves For Better Results
                                        </span>
                                    </th>
                                    <td class="align-top w-[36%] text-center bg-[#5271FF] text-white px-2 py-5">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block" alt="checkmark icon">
                                        <span class="block text-[0.75rem] tracking-tight font-regular lg:text-[1rem] lg:max-w-[60%] lg:mx-auto lg:mt-4">
                                            PEMF Is Backed By 242 Academic Studies /Peer-Reviewed Articles
                                        </span>
                                    </td>
                                    <td class="align-top w-[32%] text-center px-2 py-5">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block invert" alt="checkmark icon">
                                        <span class="block text-[0.75rem] tracking-tight font-regular lg:max-w-[70%] lg:mx-auto lg:mt-4 lg:text-[1rem]">
                                            Merely Measures The Brainwaves And Analyze The Patterns Without Directly Influencing Them
                                        </span>
                                    </td>
                                </tr>
                                <tr class="border-b-[1px] border-[#F4F6FF] bg-white">
                                    <th class="align-middle w-[32%] p-3 md:p-5 font-normal lg:text-xl align-middle px-2 py-5">
                                        <span class="block font-semibold tracking-tight text-md lg:max-w-[70%] lg:py-8 lg:mx-auto">
                                            Encourage The Body’s Natural Recovery Process
                                        </span>
                                    </th>
                                    <td class="align-top w-[36%] text-center bg-[#5271FF] text-white px-2 py-5">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block" alt="checkmark icon">
                                        <span class="block text-[0.75rem] tracking-tight font-regular lg:text-[1rem] lg:max-w-[60%] lg:mx-auto lg:mt-4">
                                            Suggests To Your Mind To Get On The Right Frequency To Heal The Body Faster
                                        </span>
                                    </td>
                                    <td class="align-top w-[32%] text-center px-2 py-5">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block invert" alt="checkmark icon">
                                        <span class="block text-[0.75rem] tracking-tight font-regular lg:max-w-[70%] lg:mx-auto lg:mt-4 lg:text-[1rem]">
                                            Provides Brain Biofeedback ONLY
                                        </span>
                                    </td>
                                </tr>
                                <tr class="bg-white">
                                    <th class="align-middle w-[32%] p-3 md:p-5 font-normal lg:text-xl align-middle rounded-bl-2xl px-2 py-5">
                                        <span class="block font-semibold tracking-tight text-md lg:max-w-[70%] lg:py-8 lg:mx-auto">
                                            Helps You Achieve Better Sleep
                                        </span>
                                    </th>
                                    <td class="align-top w-[36%] text-center bg-[#5271FF] text-white px-2 py-5">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block" alt="checkmark icon">
                                        <span class="block text-[0.75rem] tracking-tight font-regular lg:text-[1rem] lg:max-w-[60%] lg:mx-auto lg:mt-4">
                                            PEMF Suggests To Your Brain To Get On The Lower Frequencies So You Can Unlock Your Brain's Limitless Potential
                                        </span>
                                    </td>
                                    <td class="align-top w-[32%] text-center rounded-br-2xl px-2 py-5">
                                        <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block invert" alt="checkmark icon">
                                        <span class="block text-[0.75rem] tracking-tight font-regular lg:max-w-[70%] lg:mx-auto lg:mt-4 lg:text-[1rem]">
                                            Provides Brain Biofeedback ONLY
                                        </span>
                                    </td>
                                </tr>
                                <tr class="relative -top-[1px] text-sm lg:text-lg xl:text-xl">
                                    <th class="w-[32%] p-3 md:p-5 align-middle"></th>
                                    <th class="w-[36%] py-5 md:p-5 align-middle text-center bg-[#5271FF] text-white relative rounded-b-2xl"></th>
                                    <th class="w-[32%] p-3 md:p-5 align-middle text-center"></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    `;
};

export const TableUsingDivs = () => {
    return `
        <section class="px-[10px] py-14">
            <div class="max-w-[800px] mx-auto relative">
                <div class="grid grid-cols-[2fr_1fr_1fr] absolute top-0 right-0 bottom-0 left-0">
                    <div></div>
                    <div class="h-[calc(100%_+_80px)] translate-y-[-40px] bg-[#202020] rounded-xl relative z-[3]"></div>
                    <div></div>
                </div>
                <div class="flex flex-col relative">
                    <div class="grid grid-cols-[2fr_1fr_1fr] items-center pb-5">
                        <div></div>
                        <div class="text-center relative z-[5]">
                            <span class="font-bold text-white">Us</span>
                        </div>
                        <div class="text-center">
                            <span class="font-bold">Them</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-[2fr_1fr_1fr] items-center border-l border-r border-t rounded-t-xl">
                        <div class="py-5 pl-5">
                            <span>Placeholder Text</span>
                        </div>
                        <div class="text-center">
                            <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block relative z-[3]" alt="checkmark icon">
                        </div>
                        <div class="text-center">
                            <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block invert" alt="checkmark icon">
                        </div>
                    </div>
                    <div class="grid grid-cols-[2fr_1fr_1fr] items-center border-l border-r border-t">
                        <div class="py-5 pl-5">
                            <span>Placeholder Text</span>
                        </div>
                        <div class="text-center">
                            <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block relative z-[3]" alt="checkmark icon">
                        </div>
                        <div class="text-center">
                            <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block invert" alt="checkmark icon">
                        </div>
                    </div>
                    <div class="grid grid-cols-[2fr_1fr_1fr] items-center border-l border-r border-t">
                        <div class="py-5 pl-5">
                            <span>Placeholder Text</span>
                        </div>
                        <div class="text-center">
                            <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block relative z-[3]" alt="checkmark icon">
                        </div>
                        <div class="text-center">
                            <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block invert" alt="checkmark icon">
                        </div>
                    </div>
                    <div class="grid grid-cols-[2fr_1fr_1fr] items-center border-l border-r border-t">
                        <div class="py-5 pl-5">
                            <span>Placeholder Text</span>
                        </div>
                        <div class="text-center">
                            <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block relative z-[3]" alt="checkmark icon">
                        </div>
                        <div class="text-center">
                            <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block invert" alt="checkmark icon">
                        </div>
                    </div>
                    <div class="grid grid-cols-[2fr_1fr_1fr] items-center border-l border-r border-t">
                        <div class="py-5 pl-5">
                            <span>Placeholder Text</span>
                        </div>
                        <div class="text-center">
                            <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block relative z-[3]" alt="checkmark icon">
                        </div>
                        <div class="text-center">
                            <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block invert" alt="checkmark icon">
                        </div>
                    </div>
                    <div class="grid grid-cols-[2fr_1fr_1fr] items-center border-l border-r border-t">
                        <div class="py-5 pl-5">
                            <span>Placeholder Text</span>
                        </div>
                        <div class="text-center">
                            <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block relative z-[3]" alt="checkmark icon">
                        </div>
                        <div class="text-center">
                            <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block invert" alt="checkmark icon">
                        </div>
                    </div>
                    <div class="grid grid-cols-[2fr_1fr_1fr] items-center border rounded-b-xl">
                        <div class="py-5 pl-5">
                            <span>Placeholder Text</span>
                        </div>
                        <div class="text-center">
                            <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block relative z-[3]" alt="checkmark icon">
                        </div>
                        <div class="text-center">
                            <img src="icon-checkmark-green.png" class="w-5 h-auto inline-block invert" alt="checkmark icon">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;  
};