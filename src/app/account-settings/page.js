"use client"
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { hideLinearBar } from '../redux/reducers/linearProgressSlice';

export default function page() {
    const dispatch = useDispatch();
     useEffect(()=>{
            dispatch(hideLinearBar());
        },[])
  return (
    <>Account settings</>
  )
}
