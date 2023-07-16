import forward from "./assets/forward.svg";
import {animated, useSpring} from '@react-spring/web'
import {useEffect, useRef} from "react";

type Props = {
  title: string;
  desc: string;
  img: string;
  bgColor: string;
  aspectRatio: string;
  className?: string;
  defaultOpen?: boolean;
}

const cardStyles = {
  from: {
    width: '23vw',
    transform: 'rotate(8.5deg)',
  },
  to: {
    width: '49vw',
    transform: 'rotate(-7deg)',
  }
}
const titleStyles = {
  from: {
    top: '11.5vw',
    left: '5.5vw',
    color: 'white',
  },
  to: {
    color: 'black',
    left: '22.8vw',
    top: '4vw',
  }
}

export const AnimatedCard = ({defaultOpen, aspectRatio, title, desc, img, bgColor, className}: Props) => {
  const id = 'animatedCard:' + Math.random() + '';
  const [cardSprings, cardApi] = useSpring(() => ({
    from: defaultOpen ? cardStyles.to : cardStyles.from,
  }))
  const [titleSprings, titleApi] = useSpring(() => ({
    from: defaultOpen ? titleStyles.to : titleStyles.from,
  }))
  const handleHover = () => {
    cardApi.start({
      to: cardStyles.to,
    })
    titleApi.start({
      to: titleStyles.to,
    })
  }
  const handleLeave = () => {
    cardApi.start({
      to: cardStyles.from
    })
    titleApi.start({
      to: titleStyles.from,
    })
  }
  useEffect(() => {
    document.querySelectorAll('.animateCard').forEach(element => {
      element.addEventListener('mouseenter', (e) => {
        // @ts-ignore
        const targetId = e.target.id
        if (targetId.startsWith('animatedCard') && targetId !== id) {
          handleLeave()
        }
      })
    })
  }, [])
  return <animated.div
    id={id}
    onMouseEnter={handleHover}
    className={`animateCard rounded-[5px] overflow-hidden relative p-[20px] ${className}`}
    style={{border: '1px #1A1A1A solid', backgroundColor: bgColor, ...cardSprings}}>
    <animated.h3 className='absolute' style={{...titleSprings}}>{title}</animated.h3>
    <img style={{aspectRatio}} src={img} className='w-[calc(23vw-42px)] object-cover object-center'/>
    <div className='absolute pl-[calc(23vw-42px+20px)] w-[calc(49vw-20px)] top-0 flex flex-col h-full'>
      <p className='mt-[6.5vw]'>{desc}</p>
      <button
        className='w-[121px] leading-[21px] rounded-[20px] text-sm text-white mt-[34px] bg-[#3232FB] py-2 px-3'>
        Know more
        <img className='inline-block ml-[6px] w-[16px] h-[16px]' src={forward}/>
      </button>
    </div>
  </animated.div>
}

export const Card = (props: Props) => {
  // const {width} = useWindowSize()
  return <AnimatedCard {...props}/>
}
