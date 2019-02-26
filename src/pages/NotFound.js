import React from 'react'
import { BreadCrumb } from '../components/BreadCrumb';

export const NotFound = () => (
    <div>
        <BreadCrumb/>
        <h4 className='title' style={{color: '#000', fontSize: 40}}>404!</h4>
        <h1 className='subtitle'>La página no existe</h1>
    </div>
)