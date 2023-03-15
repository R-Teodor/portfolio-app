import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import NODE from '../assets/node.png'
import GITHUB from '../assets/github.png'
import MONGODB from '../assets/mongo.png'
import TAILWIND from '../assets/tailwind.png'
const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Skills
          </p>
          <p className='py-4'>/ These are the technologies I've Worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={HTML} alt='HTMLICOn' className='w-20 mx-auto' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={CSS} alt='HTMLICOn' className='w-20 mx-auto' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={JS} alt='HTMLICOn' className='w-20 mx-auto' />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={ReactImg} alt='HTMLICOn' className='w-20 mx-auto' />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={GITHUB} alt='HTMLICOn' className='w-20 mx-auto' />
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={NODE} alt='HTMLICOn' className='w-20 mx-auto' />
            <p className='my-4'>NODE</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={MONGODB} alt='HTMLICOn' className='w-20 mx-auto' />
            <p className='my-4'>MONGODB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={TAILWIND} alt='HTMLICOn' className='w-20 mx-auto' />
            <p className='my-4'>TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills
