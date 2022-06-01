import React, { Children } from 'react'
import Header from '@/Components/Header'

interface Props {
    children: React.ReactNode
}

const HomeLayout = (props: Props) => {
    return (
        <>
         <Header/>   
         {props.children}
        </>
    )
}

export default HomeLayout
