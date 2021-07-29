/*-------------------- Start of Fee Type Selection process --------------------------------------*/


feeOptionsButton = document.getElementById('feeOptionField');
dropDownFeeOption = document.getElementById('feeTypes')
ListOfFee = document.getElementsByClassName('FeeType')
ContentBox = document.getElementsByClassName('MainContainer')[0];

countrySelect = document.getElementById('countriesList');
countrylistElement = document.getElementById('CountryList');
countrySelection = document.getElementsByClassName('countryName');

courseList = document.getElementById("CoursesList");
courseSelect = document.getElementById("CourseOptionList");
courseSelection = document.getElementsByClassName('courseName');

LevelList = document.getElementById("LevelList");
LevelSelect = document.getElementById("ListOfLevels");
LevelSelection = document.getElementsByClassName('LevelName');

CourseFeeAmount = document.getElementsByClassName("FinalValue")[0];

countries=[];
Levels=[];
courses = ["Medical","Dental","Ayurveda"];
feeOptionsButton.style.zIndex="2"; 

function CheckForResult(){

    if(feeOptionsButton.value!="" && countrySelect.value!="" && courseSelect.value!="" && LevelSelect.value!=""){

        if(feeOptionsButton.value == "Application Fee")
        {   
            let gst  = data[feeOptionsButton.value][countrySelect.value]["ALL_COURSES"][LevelSelect.value].Gst;
        //    console.log(gst);
            amount = data[feeOptionsButton.value][countrySelect.value]["ALL_COURSES"][LevelSelect.value].amount;
            CourseFeeAmount.textContent = amount+(amount*gst)/100;
        }
        else
        {
            let gst  = data[feeOptionsButton.value][countrySelect.value]["ALL_COURSES"]["ALL_LEVEL"].Gst;
        //    console.log(gst);
            amount = data[feeOptionsButton.value][countrySelect.value]["ALL_COURSES"]["ALL_LEVEL"].amount;
            CourseFeeAmount.textContent = amount+(amount*gst)/100;
        }
    }
}


showFeeTypes=()=>
{
    
    if(dropDownFeeOption.style.display != "block"){
        dropDownFeeOption.style.display="block";
        for(let i=0;i<ListOfFee.length;i++)
        {    
             ListOfFee[i].addEventListener('click',()=>{

                CourseFeeAmount.textContent="";
                feeOptionsButton.value=ListOfFee[i].textContent;
                ContentBox.style.display="flex";           
                countrySelect.value = "";
                courseSelect.value = "";
                LevelSelect.value  = ""; 
                
                if(feeOptionsButton.value == "Application Fee")
                {
                    Levels = ["UG", "PG", "UG-DIPLOMA"];
                    countries = ["INDIAN","FOREIGN"]; 
                }
                else
                {
                    Levels = ["UG", "PG", "UG-DIPLOMA", "Ph.D"];
                    countries = ["INDIAN","FOREIGN","NRI","SAARC"]
                }
                dropDownFeeOption.style.display='none';
                CheckForResult();
            })  
        }
        feeOptionsButton.placeholder="please Select one from the list";
    }
    else{
        dropDownFeeOption.style.display="none"; 
        feeOptionsButton.placeholder="Click to Select Fee Type First...";   
    }
}
feeOptionsButton.addEventListener('click',showFeeTypes)

/*--------------------- End of Fee Type Selection Process ------------------------------------------------- */


/* -------------------- Start of Application or Exam Fee country drop-down menu-------------- */
    


countrySelect.addEventListener('click',()=>{

    countrylistElement.innerHTML="";
    countrylistElement.style.display="block";
    for(i=0;i<countries.length;i++)
    {
        countryName = document.createElement('p');
        countryName.style.cursor="pointer";
        countryName.className="countryName";
        countryName.style.width = "22vw";
        countryName.textContent = countries[i];
        countryName.style.backgroundColor="white";
        countryName.style.padding = "8px";
        countrylistElement.appendChild(countryName);
    } 
    for(let i=0;i<countrySelection.length;i++){
        countrySelection[i].addEventListener('click',()=>{
            countrylistElement.style.display="none";
            countrySelect.style.top="227px";
            countrySelect.value=countrySelection[i].textContent;
            CheckForResult();
        }) 
    }
})

/* -------------------- End of Application or Exam Fee country drop-down menu-------------- */

/* -------------------- Start of Courses List selection process ----------------------------- */

    
    courseSelect.addEventListener('click',()=>{

        courseList.innerHTML="";
        courseList.style.display="block";
        for(i=0;i<courses.length;i++)
        {
            courseName = document.createElement('p');
            courseName.style.cursor="pointer";
            courseName.className="courseName";
            courseName.style.width = "22vw";
            courseName.textContent = courses[i];
            courseName.style.backgroundColor="white";
            courseName.style.padding = "8px";
            courseList.appendChild(courseName);
        }


    
        for(let i=0;i<courseSelection.length;i++)
        {
            courseSelection[i].addEventListener('click',()=>{
                courseList.style.display="none";
                courseSelect.value=courseSelection[i].textContent;
                CheckForResult();
            }) 
        }
    })


/* --------------------- End of courses List selection process  ----------------------------- */

/* ---------------------Start of AllLevel ----------*/

LevelSelect.addEventListener('click',()=>{

    LevelList.innerHTML="";
    LevelList.style.display="block";
    for(i=0;i<Levels.length;i++)
    {
        LevelName = document.createElement('p');
        LevelName.style.cursor="pointer";
        LevelName.className="LevelName";
        LevelName.style.width = "22vw";

        LevelName.textContent = Levels[i];
        LevelName.style.backgroundColor="white";
        LevelName.style.padding = "8px";
        LevelList.appendChild(LevelName);
    }


    for(let i=0;i<LevelSelection.length;i++)
    {
        LevelSelection[i].addEventListener('click',()=>{
            LevelList.style.display="none";
            LevelSelect.value=LevelSelection[i].textContent;
            CheckForResult();
        }) 
    }
    

})

/* -------------End of All Level------------------ */



