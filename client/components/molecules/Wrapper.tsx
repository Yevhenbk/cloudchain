import clsx from 'clsx'
import { MainOrSection, Props as MainOrSectionProps } from '@atoms/MainOrSection'

export interface Props 
  extends MainOrSectionProps {
    intent?: 'main' | 'section' 
  }  

export function Wrapper({ intent='main', ...props }: Props) {
  return (
    <MainOrSection
      className={clsx(
        'flex',
        {'w-[100vw] bg-secondary h-[100vh] overflow-hidden flex-row justify-center gap-28 items-center':
        intent==='main',
        'flex-col justify-start items-center max-w-[645px] 2xl:max-w-[800px]':
        intent==='section'}
      )}
    {...props}/>
  )
}