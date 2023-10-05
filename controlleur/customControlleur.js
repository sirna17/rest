// pour exporter 
export const customApiControlleur = async (req,res) => {
        try {
            const url ='https://api.jikan.moe/v4/anime?q=naruto&sfw'
            const data = await fetch (url)
            const json = await data.json()
                // objet json
            const newItem = {
                'monAnime':{
                        'title':'cendrillon',
                        'auteur':'Pierre'

                }
            }
            const monJsonCustom = {...json,...newItem} // ... c'est un spread opertor pour copie coller des tableau
            
            res.send(monJsonCustom)
        } catch (error) {
                console.log(error)
        }
}