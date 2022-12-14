import * as React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import { Text } from '@molecules/Text'
import { Wrapper } from '@molecules/Wrapper'
import { Button } from '@molecules/Button'
import { RiExchangeLine } from 'react-icons/ri'
import { Footer } from '@organisms/Footer'
import { Context } from '../store/context'
import { Header } from '@molecules/Header'
const Fade: any = require('react-reveal/Fade')

const Home: NextPage = () =>  {

  const { connectWallet, connectedAccount } = React.useContext(Context)

  return (
    <Wrapper isMain={true}>
      <Layout title='Welcome | Cloudchain'/>
      <Header />
      <Wrapper isMain={false} intent='section'>
        <Fade right duration={1000}>
          <Text id='b-text' isHeader={true} intent='primary' color='gradient'
          size='extrabig'>Cloudchain</Text>
        </Fade>
        <Fade left duration={1000}>
          <div className='relative h-4 -top:-12 left:-36 md:-top-8 md:-left-36 2xl:-top-12 2xl:-left-52'>
            <Text id='t-stroke' isHeader={true} intent='secondary' color='transparent'
            size='header'>Welcome to</Text>
          </div>
        </Fade>
        <Fade duration={2000}>
          <Text isHeader={false} intent='centered' color='dark' size='big'>
            Simply and securely transition crypto assets in two easy steps
          </Text>
          <div className='mt-6'>
            <Button isButton={true} onClick={connectedAccount !== '' ? connectWallet : () => location.replace('/wallet')}
             intent={!connectedAccount ? 'primary' : 'teritary'}>
              <Text isHeader={false} intent={!connectedAccount ? 'quinary' : 'septenary'}
              color='bright' size='medium'>
                {connectedAccount ? 'My Wallet' : 'Connect Wallet'}
              </Text>
              {!connectedAccount ?
                <span className='bg-white rounded-full w-[48px] h-[48px] flex justify-center items-center
                relative -right-6'>
                 <RiExchangeLine className='text-2xl group-hover:transition group-hover:ease-in-out
                  group-hover:duration-300 duration-300 group-hover:rotate-90'/>
                </span> : 
              <></>}
            </Button>
          </div>
        </Fade>
      </Wrapper>
      <Footer />
    </Wrapper>
  )
}

export default Home