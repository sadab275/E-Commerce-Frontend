import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'

const items = [
    {
        id: 1,
        question: 'How to download IOS app?',
        answer: 'Next.js is a JavaScript framework for building server-rendered or statically exported React apps.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit alias eos facilis aliquid ratione ut ea atque corporis quis dolore earum, voluptatum impedit? Facere blanditiis impedit ullam laborum sequi. '
    },
    {
        id: 2,
        question: 'How to download app?',
        answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus distinctio harum, error eum dolorum cum deleniti, quod nisi consequuntur possimus, atque sit nemo repellendus porro veniam animi ipsum voluptatibus at.'
    },
    {
        id: 3,
        question: 'How to download Elementor?',
        answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus distinctio harum, error eum dolorum cum deleniti, quod nisi consequuntur possimus, atque sit nemo repellendus porro veniam animi ipsum voluptatibus at.'
    },
    {
        id: 4,
        question: 'How to download Wordpress?',
        answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus distinctio harum, error eum dolorum cum deleniti, quod nisi consequuntur possimus, atque sit nemo repellendus porro veniam animi ipsum voluptatibus at.'
    },
];



interface Props {
}

const Drawer: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    const [activeIndex, setActiveIndex] = React.useState(null);
    const handleClick = (index: any) => {
        setActiveIndex(index === activeIndex ? null : index);
    }
    return (
        <div>
            <div className="accordion  ">
                <h1 className='text-qblack font-bold text-[22px]  mb-4 ml-3'>Frequently Asked Questions</h1>
                {items.map((item, index) => (
                    <div key={item.id} className={`${activeIndex === index ? 'bg-amber-400' : ''} p-3 bg-white m-3`} >
                        <button
                            className="block text-left w-full rounded-t-md py-3 font-medium text-qblack hover:text-qblack focus:outline-none focus:text-qblack"
                            onClick={() => handleClick(index)}
                        >
                            <div className="flex justify-between items-center ">
                                <div className="w-3/4 text-lg leading-5 font-medium text-qblack ">{item.question}</div>
                                <div className='w-2/10 text-qgray bg-transparent rounded-full'>
                                    {
                                        activeIndex === index ?
                                            <svg xmlns="http://www.w3.org/2000/svg" className="minus w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" className='plus w-6 h-6' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                    }
                                </div>
                                {/* <div className="w-3/4 pl-3">{item.answer}</div> */}
                            </div>
                        </button>
                        {activeIndex === index && (
                            <div className="rounded-b-md py-2 overflow-hidden 	">
                                <div className=" py-3 text-qblack">
                                    {item.description}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Drawer