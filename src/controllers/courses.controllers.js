import { addCoursesService, getAllCoursesServices } from "../services/courses.services.js"

export const addCoursesController=async(req,res)=>{
     
    try {
        const {courseData}=req.body;
        const response =await addCoursesService(courseData);
        return res.status(200).json({status:200,sucess:true,message:"sucessfully add course"})
    } catch (error) {
        return res.status(500).json({status:500,sucsess:false,message:"internal server error",error:error.message})
    }
}

export const getAllCoursesControllers=async(req,res)=>{
    try {
        const response = await getAllCoursesServices();

        return res.status(200).json({status:200,sucess:true,message:"sucess",data:response})
    } catch (error) {
        return res.status(500).json({status:500,sucess:false,message:"internal server error",error:error.message})
    }
}