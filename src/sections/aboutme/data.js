import React from 'react'
import { FaAward } from 'react-icons/fa'
import {TbBooks } from 'react-icons/tb'
import {BiHappyHeartEyes } from 'react-icons/bi'
import './about-me.css'

const data = [
    {id:1, icon: <FaAward/>, title: 'Experience', desc: '1+ Years Working'},
    {id:2, icon: <TbBooks/>, title: 'Projects', desc: '8+ Completed'},
    {id:3, icon: <BiHappyHeartEyes/>, title: 'Clients', desc: '10+ happy clients'}

]

export default data;