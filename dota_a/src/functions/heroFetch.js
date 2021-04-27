
export const heroFetch = () => {
    
let h = fetch("https://api.opendota.com/api/heroes").then(res => res.json()).then(data => {
       return data
    })
  
}