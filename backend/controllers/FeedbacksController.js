const FeedBack = require('../models/FeedBack')

exports.feedBacks = async(req,res)=>{

    try{

        const{name , email , message} = req.body;

        if(!name || !email || !message){
            return res.status(404).json({
                sucess:false,
                message:"All fields are required",
                error:err.message
            }) 
        }

        const newfeedBack = await FeedBack.create({name , email , message})

        return res.status(200).json({
            sucess:true,
            message:"Feedback saved successfully",
            newfeedBack
        })

    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            sucess:false,
            message:"Internal Server Error",
            error:err.message
        })
    }
}


exports.getFeedbacks = async(req,res)=>{

    try{

        const feedbacks = await FeedBack.find().sort({ createdAt: -1 });

    
        return res.status(200).json({
            sucess:true,
            message:"feedback fetched sucesssfully",
            feedbacks
        })

    }
    catch(err){

        console.log(err)
        return res.status(500).json({
            sucess:false,
            message:"Internal Server Error",
            error:err.message
        })
    }
}

exports.deleteFeedback = async(req,res)=>{

    try{

        const feedBackid = req.body.id;
        // console.log(feedBackid)

        if(!feedBackid){
          
        return res.status(404).json({
            sucess:false,
            message:"Not a valid ID",
          
        })

        }

      const updatedList=  await FeedBack.findByIdAndDelete(feedBackid).populate().exec()


      return res.status(200).json({
        sucess:true,
        message:"Deleted Sucessfully",
        updatedList
    })

    }
      
    catch(err){
        console.log(err)
        return res.status(500).json({
            sucess:false,
            message:"Internal Server Error",
            error:err.message
        })   
    }
}