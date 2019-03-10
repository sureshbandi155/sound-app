import {Component, OnInit, ViewChild} from '@angular/core';
import {Http,Response} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PhoanacrmService } from '../phoanacrm.service';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  public location = "";
  public sessionUsername = "";
   public suserid = "";

   cityArray : any = [];
    stateArray : any = [];


  constructor(private http:HttpClient, public phoanamService : PhoanacrmService){}
  @ViewChild('cityForm') cityForm: NgForm;

  ngOnInit() {
	  //alert(sessionStorage.getItem("items"));

	  var windowLocation = window.location.href;
	  //alert(windowLocation);
	  var windowSplit = windowLocation.split(":4200/");
	  this.location = windowSplit[1];
	  if(windowSplit[1]=="" || windowSplit[1]==null)
	  {
		  this.location = "login";
	  }
	   this.getStates();
	   this.getCity();

	 var  suser =  sessionStorage.getItem("suser");
	 this.sessionUsername = suser;
	var  suserid = sessionStorage.getItem("suserid");
	this.suserid = suserid;

	   //document.getElementById("sessionUser").innerHTML=suser;
  }

  cityData = {cityName: '', status: 'Active'};

  cityId =undefined;

  private getStates() {

    this.phoanamService.getStates()
    .then(data => {
      console.log(JSON.stringify(data));
      this.stateArray = data;
      console.log("state array : " , this.stateArray);
    })
    .catch(error => {
      console.log(error)
    })


  }

hidedivbydefault()
{
	this.cityId = undefined;
	this.cityForm.reset();
	document.getElementById("hidedivbydefault").style.display="block";
	document.getElementById("hideTable").style.display="none";
	document.getElementById("hideTable1").style.display="none";
	document.getElementById("goback").style.display="block";
}

goback()
{
		document.getElementById("hideTable").style.display="block";
	document.getElementById("hideTable1").style.display="block";
	document.getElementById("hidedivbydefault").style.display="none";
	document.getElementById("goback").style.display="none";
}







  onSubmit(cityData, form: NgForm) {



    let arr = [];
	if(this.cityId==undefined)
	{
			this.phoanamService.newCity(cityData)
      .then(Response => {
        console.log(Response);

		form.resetForm();

		document.getElementById("hidedivbydefault").style.display="none";

      })
      .catch(error => {
        console.log(error)
      })

      setTimeout(() => {
		  document.getElementById("hideTable").style.display="block";
        this.getCity();


      },1000)
	}
	else
	{
		this.phoanamService.updateCity(this.cityId, this.cityData)
      .then(Response => {
        console.log(Response);

		form.resetForm();
		document.getElementById("hidedivbydefault").style.display="none";

      })
      .catch(error => {
        console.log(error)
      })

      setTimeout(() => {
		  document.getElementById("hideTable").style.display="block";
		  document.getElementById("hideTable1").style.display="block";
        this.getCity();
		form.resetForm();

      },1000)

	}


  }

  private getCity() {

    this.phoanamService.getCity()
    .then(cities => {
     // console.log(data);
      this.cityArray = cities['data'];
	  //alert(JSON.stringify(data));
      console.log("city array : " , this.cityArray);
    })
    .catch(error => {
      console.log(error)
    })


  }
  updateCity(id , cityList)
  {
	  this.cityData.cityName = cityList.cityName;
	  this.cityData.status = cityList.status;
	  this.cityId = cityList.id;
    document.getElementById("hideTable").style.display="none";
		document.getElementById("hidedivbydefault").style.display="block";
		document.getElementById("hideTable1").style.display="none";
    document.getElementById("goback").style.display="block";

  }
  deleteCity(cityList)
  {

	   this.phoanamService.deleteCity(cityList)
      .then(Response => {
        console.log('deleteCity resp: '+JSON.stringify(Response));
		document.getElementById("hidedivbydefault").style.display="none";

      })
      .catch(error => {
        console.log(error)
      })

      setTimeout(() => {
		  document.getElementById("hideTable").style.display="block";
		  document.getElementById("hideTable1").style.display="block";
        this.getCity();


      },1000)
  }
}
