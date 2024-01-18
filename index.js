const inputbtn=document.querySelector(".age-dob-input");
const calculatebtn=document.querySelector(".calculate-btn");
const ageresult=document.querySelector(".age-result");

calculatebtn.addEventListener("click",function ()
{
    if(inputbtn.value==="")
    {
        alert("Please enter your D.O.B");
    }
    else{
        //real date of birth taken using calender input
        const dob=new Date(inputbtn.value);
        const dob_year=dob.getFullYear();

        //current year
        const now=new Date();
        const now_year=now.getFullYear();

        const age=now_year-dob_year;
        ageresult.innerHTML=`Your age is : ${age}`;
    }
});