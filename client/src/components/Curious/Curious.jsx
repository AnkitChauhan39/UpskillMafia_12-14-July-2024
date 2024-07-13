import React from 'react'
import Ques from './Ques'

const Curious = () => {

    const data = [
        {
            ques:"How do I register on the platform?",
            ans:"Registration is easy as pie! Just click on the 'Sign Up' button and follow simple steps to complete 'Sign Up'"
        },
        {
            ques:"How do I register on the platform?",
            ans:"Registration is easy as pie! Just click on the 'Sign Up' button and follow simple steps to complete 'Sign Up'"
        },
        {
            ques:"How do I register on the platform?",
            ans:"Registration is easy as pie! Just click on the 'Sign Up' button and follow simple steps to complete 'Sign Up'"
        },
        {
            ques:"How do I register on the platform?",
            ans:"Registration is easy as pie! Just click on the 'Sign Up' button and follow simple steps to complete 'Sign Up'"
        },
        {
            ques:"How do I register on the platform?",
            ans:"Registration is easy as pie! Just click on the 'Sign Up' button and follow simple steps to complete 'Sign Up'"
        },
        {
            ques:"How do I register on the platform?",
            ans:"Registration is easy as pie! Just click on the 'Sign Up' button and follow simple steps to complete 'Sign Up'"
        },
    ]


  return (
    <div className='p-10 flex justify-center items-center flex-col' >
        <div className=' text-[28px] md:text-[44px] font-bold' >Curious Minds Ask</div>
        <div className='md:w-[1200px] p-10 flex flex-col gap-3 justify-center items-center' >
            {
                data.map( (ele,index) => {
                    return <Ques ques={ele.ques} ans={ele.ans}/>
                })
            }
        </div>
    </div>
  )
}

export default Curious
