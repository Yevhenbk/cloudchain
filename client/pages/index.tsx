import { NextPage } from 'next'
import Layout from '../components/Layout'
import { Text } from '@molecules/Text'
import { Button } from '@molecules/Button'
import { RiExchangeLine } from 'react-icons/ri'
import { Footer } from '@organisms/Footer'
const Fade: any = require('react-reveal/Fade')

const Home: NextPage = () =>  {
  return (
    <div className='w-[100vw] bg-[#EEF2F5] h-[100vh] overflow-hidden 
    flex flex-row justify-around items-center'>
        <Layout title='Welcome | Digital Wallet'/>
      <section className='flex flex-col justify-start items-center max-w-[645px] 2xl:max-w-[800px]'>
        <Fade top duration={1200}>
          <div className='bg-[url(../public/wavesOpacity.svg)] w-[100%] h-[110px] absolute top-0 left-0' />
        </Fade>
        <Fade right duration={1000}>
          <Text id='b-text' isHeader={true} intent='primary'>Cloudchain</Text>
        </Fade>
        <Fade left duration={1000}>
          <div className='relative h-4 -top:-12 left:-36 md:-top-8 md:-left-36 2xl:-top-12 2xl:-left-52'>
            <Text id='t-stroke' isHeader={true} intent='secondary'>Welcome to</Text>
          </div>
        </Fade>
        <Fade duration={2000}>
        <Text isHeader={false} intent='teritary'>Simply and securely transition crypto assets in two steps</Text>
          <div className='mt-6'>
            <Button isButton={true} intent='primary'>
              <Text isHeader={false} intent='button'>Connect Wallet</Text>
              <RiExchangeLine className='text-5xl bg-white rounded-full p-3 group-hover:transition ease-in-out
              duration-300 group-hover:rotate-90 relative -right-6'/>
            </Button>
          </div>
        </Fade>
      </section>
      <Footer />
    </div>
  )
}

export default Home