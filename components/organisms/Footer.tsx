import { Text } from '@molecules/Text'
import { Button } from '@molecules/Button'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export function Footer() {
  return (
    <div className='absolute bottom-0 left-0 py-8 flex flex-row justify-around
    w-[100vw]'>
      <section className='flex flex-row gap-5'>
        <Text isHeader={false} intent='quaternary'>Find me Here -</Text>
        <div className='flex flex-row gap-2'>
          <Button isButton={false} link='https://github.com/Yevhenbk' intent='secondary'>
            <AiFillGithub className='text-dark hover:text-[#5A3BF8]' />
          </Button> 
          <Button isButton={false} link='https://github.com/Yevhenbk' intent='secondary'>
            <AiFillLinkedin className='text-dark hover:text-[#5A3BF8]' />
          </Button> 
        </div>
      </section>
      <section className='flex flex-row gap-1'>
        <Text isHeader={false} intent='quinary'>Website by</Text>   
        <Text isHeader={false} intent='italic'>Yevhen Balahutrak</Text>   
      </section>      
    </div>
  )
}