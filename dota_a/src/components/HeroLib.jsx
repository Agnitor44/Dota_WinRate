import React, {useState, useEffect} from 'react'
import {heroFetch} from '../functions/heroFetch'
import HeroElement from './HeroElement'
import '../styles/heroList.css'

export default function HeroLib() {
    const [heroList, setHeroList] = useState()
    const [lett, setLett] = useState(false)
    const [ab, setAb] = useState(false)
    useEffect(async() => {
        setLett(false)
     
      await fetch("https://api.opendota.com/api/heroes").then(res => res.json()).then(data => setHeroList(data))
        setLett(true)
    }, [])
    return (
        lett ?

        <div className = 'heroContainer'>
            <div className = 'nav'> <button onClick = {() => {
            setAb(prev => !prev)
            if(ab) setHeroList(heroList.reverse())
            if(!ab) setHeroList(heroList.reverse())

            } }>{ab ? "1 - 2" : "2 - 1"} </button> </div>
            {heroList.map(item => <HeroElement data = {item} />)}
        </div>
        :
        <div className="spinner">
        </div>
    )
}
