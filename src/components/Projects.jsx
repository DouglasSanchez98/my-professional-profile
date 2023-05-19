import React from 'react'
import ProjectItem from './ProjectItem'
import donacionesEnviosPetImg from '../assets/donacionesEnviosPet.png'
import mainIverCorpImg from '../assets/mainIverCorp.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'> Projects</h1>
      <p className='text-center py-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eius dolore commodi omnis. Est hic nisi dolorem laudantium officia doloremque. Rem temporibus at dolore eveniet reiciendis totam. Modi, ullam error
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={donacionesEnviosPetImg}  title='Donaciones Web' link='https://enviospet.com.bo/donaciones'/>
        <ProjectItem img={mainIverCorpImg} title='Construcción Web' link='https://ivercorporaciones.com/'/>
       
      </div>
    </div>
  )
}

export default Projects
