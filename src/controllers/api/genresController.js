const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    list:async (req, res) => {
try {
    const genres = await db.Genre.findAll();

return res.status(200).json({
    
    ok:true,
    meta:{total:genres.length,status:200,url:'/api/genres'},
    data:genres
})

} catch (error) {
    console.log(error);
    return res.status(500).json({
        msg:error.message
    })
}


     
    },
    detail:async (req, res) => {
        try {

            const{id}=req.params


            const genres = await db.Genre.findByPk(id);
        
        return res.status(200).json({
            
            ok:true,
            meta:{total:1,
                status:200,
                url:`/api/genres/${id}`},
            data:genres
        })
        
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg:error.message
            })
        }
        
        
             
            },
            store:async(req,res)=>{

            },
            update:async(req,res)=>{
                
            },
            
            destroy2:async(req,res)=>{
                
            }

}

module.exports = genresController;