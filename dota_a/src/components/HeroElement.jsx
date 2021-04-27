import React from 'react'
import '../styles/heroList.css'
import {
    NavLink
  } from "react-router-dom";

export default function HeroElement({data}) {
    const image = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${data.name.slice(14)}.png`
    const link = `/hero/${data.id}`
    return (
        <NavLink to = {link} >
        <div className = 'heroMini'>
            <img src = {image} />
            <div className="txtHero">
                <h1>{data.localized_name}</h1>
            </div>
        </div>
        </NavLink>
    )
}
