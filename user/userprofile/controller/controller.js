const User = require('../../../user/user');
const userprofile = require('../../../user/userprofile/userprofile');



const getAllusers =  async(req,res) => {
    const user = await User.find({});
    res.json({userdetail:user});
}





const getAllProfileusers =  async(req,res) => {
    const user = await userprofile.find({});
    res.json({userprofiledetail:user});
}

const storeUser = async(req,res) => {
    const data =  req.body;
    const user = new User(data);
    user.save((error,result) =>{
        if(error){
res.json({status:false});
        }else {
            res.json({status:true});
        
        }
    });
}




const storeProfileUser = async(req,res) => {
    const data =  req.body;
    const user = new userprofile(data);
    user.save((error,result) =>{
        if(error){
res.json({status:false});
        }else {
            res.json({status:true});
        
        }
    });
}

const getUserwithprofile = async(req,res) =>{
    const userwithprofile = await  userprofile.find({}).populate('user_id');
    res.json({user:userwithprofile});
}





module.exports = {getAllusers,storeUser,storeProfileUser,getUserwithprofile,getAllProfileusers};