import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PhoanacrmService {

  public location = "";
  constructor(public http : HttpClient ) { }

  userLogin(loginDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/Customers/customerLogin",loginDetails);
  return request.toPromise();
  }

  getCurrentUrl()
  {
	  var windowLocation = window.location.href;

	  var windowSplit = windowLocation.split(":4200/");
	  this.location = windowSplit[1];
	  if(windowSplit[1]=="" || windowSplit[1]==null)
	  {
		  this.location = "login";
	  }

	  return this.location;
  }

   newCity(cityData : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/Cities",cityData);
  return request.toPromise();
  }
    newState(details : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/deliveryState",{"details":details});
  return request.toPromise();
  }

  getCity(){
    let request = this.http.get(environment.APIURL+"/api/Cities");
    return request.toPromise();
  }
   updateCity(id:string, cityDetails:object)
  {

  let request =  this.http.patch(environment.APIURL + '/api/Cities/' + id, cityDetails);
  return request.toPromise();
  }
   updateState(details : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/updateState",{"details":details});
  return request.toPromise();
  }

   newSize(sizeDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/size",{"sizeDetails":sizeDetails});
  return request.toPromise();
  }
  getSize(){
    let request = this.http.get(environment.APIURL+"/api/FrameWidths");
    return request.toPromise();
  }
  newFrameMaterial(frameMaterialDetails: Object)
  {

  let request =  this.http.post(environment.APIURL + '/api/FrameMaterials/', frameMaterialDetails);
  return request.toPromise();
  }
   updateFrameMaterial(id: string, frameMaterial: object)
  {

  let request =  this.http.patch(environment.APIURL + '/api/FrameMaterials/' + id, frameMaterial);
  return request.toPromise();
  }
  getFrameMaterial(){
    let request = this.http.get(environment.APIURL+"/api/FrameMaterials");
    return request.toPromise();
  }
   newRole(roleDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/role",{"roleDetails":roleDetails});
  return request.toPromise();
  }
  updateRole(roleDetails : Object)
  {
	let request =  this.http.post(environment.APIURL+"/api/updateRole",{"roleDetails":roleDetails});
  return request.toPromise();

  }
  getRole(){
    let request = this.http.get(environment.APIURL+"/api/getrole");
    return request.toPromise();
  }
   getStates(){
    let request = this.http.get(environment.APIURL+"/api/getStates");
    return request.toPromise();
  }
  getCountry(){
    let request = this.http.get(environment.APIURL+"/api/getCountry");
    return request.toPromise();
  }
  newUser(newUserDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/add_new_user",{"newUserDetails":newUserDetails});
  return request.toPromise();
  }
  getuser()
  {
	let request = this.http.get(environment.APIURL+"/api/getuser");
    return request.toPromise();
  }
   getframepaperType(){
    let request = this.http.get(environment.APIURL+"/api/getframepaperType");
    return request.toPromise();
  }
   newPhoto(newPhotoDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/add_new_photo",{"newPhotoDetails":newPhotoDetails});
  return request.toPromise();
  }
  getPhoto(){
    let request = this.http.get(environment.APIURL+"/api/getPhoto");
    return request.toPromise();
  }
  updatePhoto(newPhotoDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/updatePhoto",{"newPhotoDetails":newPhotoDetails});
  return request.toPromise();
  }

  newFrameCover(frameCover: Object)
  {

  let request =  this.http.post(environment.APIURL + '/api/FrameTypes', frameCover);
  return request.toPromise();
  }
  updateFrameCover(id: string, frameCoverDetails: Object)
  {
	 let request =  this.http.patch(environment.APIURL + '/api/FrameTypes/' + id , frameCoverDetails);
  return request.toPromise();
  }

  getFrameCover(){
    let request = this.http.get(environment.APIURL+"/api/FrameTypes");
    return request.toPromise();
  }
  getframeBitSize(){
    let request = this.http.get(environment.APIURL+"/api/FrameBitSizes");
    return request.toPromise();
  }
  getframetype(){
    let request = this.http.get(environment.APIURL+"/api/FrameTypes");
    return request.toPromise();
  }
  getPhotoSize(){
    let request = this.http.get(environment.APIURL+"/api/PhotoSizes");
    return request.toPromise();
  }
   newReligion(religionDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/newReligion",{"religionDetails":religionDetails});
  return request.toPromise();
  }

  getReligion(){
    let request = this.http.get(environment.APIURL+"/api/getReligion");
    return request.toPromise();
  }

  updateReligion(religionDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/updateReligion",{"religionDetails":religionDetails});
  return request.toPromise();
  }

   newRelation(relationDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/newRelation",{"relationDetails":relationDetails});
  return request.toPromise();
  }
  updateRelation(relationDetails : Object)
  {
	  let request =  this.http.post(environment.APIURL+"/api/updateRelation",{"relationDetails":relationDetails});
  return request.toPromise();
  }
  getRelation(){
    let request = this.http.get(environment.APIURL+"/api/getRelation");
    return request.toPromise();
  }

   getdeliveryCity(){
    let request = this.http.get(environment.APIURL+"/api/Cities");
    return request.toPromise();
  }

   usermaster(usermasterDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/usermaster",{"usermasterDetails":usermasterDetails});
  return request.toPromise();
  }
  updateUsermaster(usermasterDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/updateUsermaster",{"usermasterDetails":usermasterDetails});
  return request.toPromise();
  }
  getusermaster()
  {
	 let request = this.http.get(environment.APIURL+"/api/getusermaster");
    return request.toPromise();
  }
   aboutus(aboutusDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/aboutus",{"aboutusDetails":aboutusDetails});
  return request.toPromise();
  }
   terms(termsDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/termsconditions",{"termsDetails":termsDetails});
  return request.toPromise();
  }
   pincode(pincodeDetails : Object)
  {

  let request =  this.http.post(environment.APIURL + '/api/DeliveryPincodes', pincodeDetails);
  return request.toPromise();
  }
  updatepincode(id: string, pincode: Object)
  {

  let request =  this.http.patch(environment.APIURL + '/api/DeliveryPincodes/' + id , pincode);
  return request.toPromise();

  }
    getpincode(){
    let request = this.http.get(environment.APIURL+"/api/DeliveryPincodes");
    return request.toPromise();
  }

  locality(){
    let request = this.http.get(environment.APIURL+"/api/locality");
    return request.toPromise();
  }
   executive(executiveDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/executive",{"executiveDetails":executiveDetails});
  return request.toPromise();
  }
   updateLocality(localityDetails : Object)
  {
	  let request =  this.http.post(environment.APIURL+"/api/updateLocality",{"localityDetails":localityDetails});
	  return request.toPromise();
  }

  updateExecutive(executiveDetails : Object)
  {
	  let request =  this.http.post(environment.APIURL+"/api/updateExecutive",{"executiveDetails":executiveDetails});
	  return request.toPromise();
  }
  getExecutive()
  {
	   console.log("came to service ts")
	  let request = this.http.get(environment.APIURL+"/api/getExecutive");
    return request.toPromise();

  }
  getvendor()
  {
	  console.log("came to service ts")
	  let request = this.http.get(environment.APIURL+"/api/vendors");
    return request.toPromise();

  }
   newframemaster(framemaster: Object)
  {

  let request =  this.http.post(environment.APIURL + '/api/FrameDesignMasters' ,framemaster);
  return request.toPromise();
  }

   getframemaster()
  {
	  console.log("came to service ts")
	  let request = this.http.get(environment.APIURL+"/api/FrameDesignMasters");
    return request.toPromise();

  }
  updateframemaster(id: string, framemaster: object)
  {

  let request =  this.http.patch(environment.APIURL + '/api/FrameDesignMasters/' + id, framemaster);
  return request.toPromise();
  }
  updateSize(sizeDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/updateSize",{"sizeDetails":sizeDetails});
  return request.toPromise();
  }


  newpickupoint(pickupDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/newpickup",{"pickupDetails":pickupDetails});
  return request.toPromise();
  }

   getpickupPoints()
  {
	  console.log("came to service ts")
	  let request = this.http.get(environment.APIURL+"/api/getpickupPoints");
    return request.toPromise();

  }
   updatepickupoint(pickupDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/updatepickupoint",{"pickupDetails":pickupDetails});
  return request.toPromise();
  }
  newalbum(albumDetails : Object)
  {
	 let request =  this.http.post(environment.APIURL+"/api/newalbum",{"albumDetails":albumDetails});
  return request.toPromise();

  }
  updatealbum(albumDetails : Object)
  {
	 let request =  this.http.post(environment.APIURL+"/api/updatealbum",{"albumDetails":albumDetails});
  return request.toPromise();

  }

   getalbum()
  {
	  console.log("came to service ts")
	  let request = this.http.get(environment.APIURL+"/api/getalbum");
    return request.toPromise();

  }
  newoffer(offerDetails : Object)
  {
	  let request =  this.http.post(environment.APIURL+"/api/newoffer",{"offerDetails":offerDetails});
  return request.toPromise();

  }
  updateoffer(offerDetails:Object)
  {
	 let request =  this.http.post(environment.APIURL+"/api/updateoffer",{"offerDetails":offerDetails});
  return request.toPromise();

  }
  getoffer()
  {
	 console.log("came to service ts")
	  let request = this.http.get(environment.APIURL+"/api/getoffer");
    return request.toPromise();
  }
  wallTemplate(templateDetails:Object)
  {
	 let request =  this.http.post(environment.APIURL+"/api/newwallTemplate",{"templateDetails":templateDetails});
  return request.toPromise();

  }
  updateWallTemplate(templateDetails:Object)
  {
	 let request =  this.http.post(environment.APIURL+"/api/updateWallTemplate",{"templateDetails":templateDetails});
  return request.toPromise();

  }
   gettemplate()
  {
	 console.log("came to service ts")
	  let request = this.http.get(environment.APIURL+"/api/gettemplate");
    return request.toPromise();
  }
  getaboutus()
  {
	   console.log("came to service ts")
	  let request = this.http.get(environment.APIURL+"/api/getaboutus");
    return request.toPromise();
  }
  getterms()
  {
	   console.log("came to service ts")
	  let request = this.http.get(environment.APIURL+"/api/getterms");
    return request.toPromise();
  }

   newFeedback(feedbackDetails : Object)
  {

  let request =  this.http.post(environment.APIURL+"/api/newFeedback",{"feedbackDetails":feedbackDetails});
  return request.toPromise();
  }
  getfeedback()
  {
	   console.log("came to service ts")
	  let request = this.http.get(environment.APIURL+"/api/getfeedback");
    return request.toPromise();
  }
  deleteCity(cityId : Object)
  {
    let request =  this.http.delete(environment.APIURL+"/api/Cities/"+cityId);
    return request.toPromise();
  }
   deleteState(deletedDetails : Object)
  {
	   let request =  this.http.post(environment.APIURL+"/api/deleteState",{"deletedDetails":deletedDetails});
  return request.toPromise();
  }
  deleteSize(id: Object)
  {
	   let request =  this.http.delete(environment.APIURL+"/api/PhotoSizes/"+id);/*,{"deletedDetails":deletedDetails});*/
  return request.toPromise();
  }
  deletepickup(deletedDetails : Object)
  {
	   let request =  this.http.post(environment.APIURL+"/api/deletepickup",{"deletedDetails":deletedDetails});
  return request.toPromise();
  }
  deleteRole(deletedDetails : Object)
  {
	   let request =  this.http.post(environment.APIURL+"/api/deleteRole",{"deletedDetails":deletedDetails});
  return request.toPromise();
  }
  deleteOffer(deletedDetails : Object)
  {
	   let request =  this.http.post(environment.APIURL+"/api/deleteOffer",{"deletedDetails":deletedDetails});
  return request.toPromise();
  }
  deleteReligion(deletedDetails : Object)
  {
	   let request =  this.http.post(environment.APIURL+"/api/deleteReligion",{"deletedDetails":deletedDetails});
  return request.toPromise();
  }
  deleteRelation(deletedDetails : Object)
  {
	   let request =  this.http.post(environment.APIURL+"/api/deleteRelation",{"deletedDetails":deletedDetails});
  return request.toPromise();
  }
  deleteExecutive(deletedDetails : Object)
  {
	   let request =  this.http.post(environment.APIURL+"/api/deleteExecutive",{"deletedDetails":deletedDetails});
  return request.toPromise();
  }
  deletePhoto(deletedDetails : Object)
  {
	   let request =  this.http.post(environment.APIURL+"/api/deletePhoto",{"deletedDetails":deletedDetails});
  return request.toPromise();
  }
  deleteAlbum(deletedDetails : Object)
  {
	   let request =  this.http.post(environment.APIURL+"/api/deleteAlbum",{"deletedDetails":deletedDetails});
  return request.toPromise();
  }
  deleteUserMaster(deletedDetails : Object)
  {
	   let request =  this.http.post(environment.APIURL+"/api/deleteUserMaster",{"deletedDetails":deletedDetails});
  return request.toPromise();
  }
  deleteWallTemplate(deletedDetails : Object)
  {
	   let request =  this.http.post(environment.APIURL+"/api/deleteWallTemplate",{"deletedDetails":deletedDetails});
  return request.toPromise();
  }
  deleteFrameMaster(id: Object)
  {
	   let request =  this.http.delete(environment.APIURL+"/api/FrameDesignMasters/"+id);/*,{"deletedDetails":deletedDetails});*/
  return request.toPromise();
  }
   deleteFrameMaterial(id: Object)
  {
	   let request =  this.http.delete(environment.APIURL+"/api/FrameMaterials/"+id);/*{"deletedDetails":deletedDetails});*/
  return request.toPromise();
  }
   deleteFrameCover(id)
  {
	   let request =  this.http.delete(environment.APIURL+"/api/FrameTypes/"+id);
  return request.toPromise();
  }
  deletepincode(id)
  {
	   let request =  this.http.delete(environment.APIURL+"/api/DeliveryPincodes/"+id);/*,{"deletedDetails":deletedDetails});*/
  return request.toPromise();
  }
  deleteFeedback(deletedDetails : Object)
  {
	   let request =  this.http.post(environment.APIURL+"/api/deleteFeedback",{"deletedDetails":deletedDetails});
  return request.toPromise();
  }
  newvendorEnrollment(vendorBusiness: object)
  {
    console.log('post method called!');
	 let request =  this.http.post(environment.APIURL + '/api/BusinessEnrollments' , vendorBusiness);
  return request.toPromise();
  }

  updateVendor(id: string,  vendorDetails: Object)
  {
    let request =  this.http.patch(environment.APIURL + '/api/BusinessEnrollments/' + id , vendorDetails);
    return request.toPromise();
  }
   getvendorbusiness()
  {
	   console.log("came to service ts");
	  let request = this.http.get(environment.APIURL + '/api/BusinessEnrollments');
    return request.toPromise();
  }
  deleteVendorBusiness(id)
  {
	   let request =  this.http.delete(environment.APIURL + '/api/BusinessEnrollments/' + id);
  return request.toPromise();
  }
  newLocality(localityDetails : Object)
  {
	  let request =  this.http.post(environment.APIURL+"/api/addLocality",{"localityDetails":localityDetails});
  return request.toPromise();
  }
   deleteLocality(deletedDetails : Object)
  {
	    let request =  this.http.post(environment.APIURL+"/api/deleteLocality",{"deletedDetails":deletedDetails});
  return request.toPromise();
  }
  insertDailyOrder(dailyOrderDetails: Object)
  {
	   let request =  this.http.post(environment.APIURL+"/api/addDailyOrder",{"dailyOrderDetails":dailyOrderDetails});
	   return request.toPromise();
  }
  retrieveDailyOrderByUserId()
  {
	 let request =  this.http.get(environment.APIURL+"/api/getDailyOrderById");
	   return request.toPromise();
  }

   updateUserData(userDetails : Object)
  {
	let request =  this.http.post(environment.APIURL+"/api/updateNewUser",{"userDetails":userDetails});
  return request.toPromise();

  }
   deleteUser(deletedDetails : Object)
  {
	   let request =  this.http.post(environment.APIURL+"/api/deleteUser",{"deletedDetails":deletedDetails});
  return request.toPromise();
  }





}

