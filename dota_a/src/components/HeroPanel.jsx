import React, {useEffect, useState} from 'react'
import {
   useParams
  } from "react-router-dom";
import '../styles/panel.css'
export default function HeroPanel() {
    const params = useParams()
    const [dataInfo, setDataInfo] = useState(null)
    const [dataMetch, setDataMetch] = useState(null)
   

    const [lett, setLett] = useState(false)
    const fetchAll = async() => {
            await fetch(`https://api.opendota.com/api/heroes`).then(res => res.json()).then(item => setDataInfo(item[params.code - 1]))
          await  fetch(`https://api.opendota.com/api/heroes/${params.code - 1}/matchups`).then(res => res.json()).then(item => setDataMetch(item.find(it => it.hero_id === Number(params.code))))
         
           
    }
    const procentMaker = (num) => {
        return String(num.toFixed(2)).slice(2) + '%'
    }
    useEffect(async() => {
        setLett(false)
        await fetchAll()   
        setLett(true)
    }, [])
    return (
        lett ?

        <div className = 'panel'>

            <h1 className = 'name'>{dataInfo.localized_name}</h1>
            <img src = {`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${dataInfo.name.slice(14)}.png`} />
            <div className="roles">
            {dataInfo.roles.map(thing => <h3>{thing}.</h3>)}
            </div>
            <h1 className="wr"> <span style = {dataMetch.wins/dataMetch.games_played > 0.5 ? {color: "green"} : {color: 'rgb(160, 35, 35)'}} >{procentMaker(dataMetch.wins/dataMetch.games_played)}</span></h1>
         
        </div>
        :
        <div className="spinner">
        </div>
    )
}
