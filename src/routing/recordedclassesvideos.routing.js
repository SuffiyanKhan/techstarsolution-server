import express from 'express';
import { addClassesVideosControllers, deleterecordedclassevideocontroller, getallclassesvideoscontroller, updaterecordedvideocontroller } from '../controllers/recordedclassesvideos.controllers.js';

const recordedclassesvideosrouting= express.Router();

recordedclassesvideosrouting.post('/addClassesVideos',addClassesVideosControllers);
recordedclassesvideosrouting.get('/getallclassesvideos',getallclassesvideoscontroller)
 recordedclassesvideosrouting.delete('/deleterecordedclassevideo/:id',deleterecordedclassevideocontroller)
 recordedclassesvideosrouting.post('/updaterecordedvideo',updaterecordedvideocontroller)

export default recordedclassesvideosrouting;