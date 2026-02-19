import React, { Children } from 'react'
import {Header} from '@/Components'

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
