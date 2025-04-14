// import tabs from '../../assets/js/tabs.js';

export default {
    title: 'Layouts/Tabs',
}

export const DefaultTabs = () => {
    return `
        <section class="px-[10px] py-8">
            <div class="max-w-[1000px] mx-auto text-center">
                <div class="inline-flex flex-nowrap justify-evenly mb-6 px-5 py-2 bg-gray-100 text-gray-900 font-medium rounded-full cursor-pointer">
                    <div class="inline-flex px-5 py-2 cursor-pointer select-none bg-transparent [&.active]:bg-orange-400 hover:bg-gray-400 transition duration-100 active">Tab 1</div>
                    <div class="inline-flex px-5 py-2 cursor-pointer select-none bg-transparent [&.active]:bg-orange-400 hover:bg-gray-400 transition duration-100">Tab 2</div>
                    <div class="inline-flex px-5 py-2 cursor-pointer select-none bg-transparent [&.active]:bg-orange-400 hover:bg-gray-400 transition duration-100">Tab 3</div>
                    <div class="inline-flex px-5 py-2 cursor-pointer select-none bg-transparent [&.active]:bg-orange-400 hover:bg-gray-400 transition duration-100">Tab 4</div>
                    <div class="inline-flex px-5 py-2 cursor-pointer select-none bg-transparent [&.active]:bg-orange-400 hover:bg-gray-400 transition duration-100">Tab 5</div>
                </div>
                <div class="border border-gray-100 p-6 rounded-xl">
                    <p>
                        Lorem ipsum.
                    </p>
                </div>
            </div>
        </section>
    `;
};