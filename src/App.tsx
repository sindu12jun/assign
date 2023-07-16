import './App.css'
import hero1 from './assets/hero1.jpg'
import hero2 from './assets/hero2.jpg'
import {AnimatedCard} from "./AnimatedCard.tsx";

function App() {
  return <main className="sm:flex sm:flex-row sm:items-center flex-col px-[20px] pt-[50px] pb-[52px]">
    <div className='text-center sm:text-left sm:w-[20vw]'>
      <p className='text-base leading-1.5 mb-2'>
        We believe
      </p>
      <h3 style={{fontSize: 'clamp(24px, 2.5vw, 36px)', lineHeight: 'clamp(24px, 2.5vw, 36px)'}}
          className='mb-6 sm:mb-0'>
        Save planet is something everyone can do
      </h3>
    </div>
    <AnimatedCard defaultOpen aspectRatio='293/315' title={'Sustainability'} desc={'donate the value of your product to Stichting Leergeld.'} img={hero1} bgColor={'#EDE9FF'}/>
    <AnimatedCard title={'Sustainability'} aspectRatio='293/315' desc={'donate the value of your product to Stichting Leergeld.'} img={hero2} bgColor={'#E8FFA8'}/>
  </main>
}

export default App
