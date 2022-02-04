const daily=document.querySelector(".Daily");
const weekly=document.querySelector(".week");
const monthly=document.querySelector(".month");
const workh=document.querySelector(".workh");
const playh=document.querySelector(".playh");
const studyh=document.querySelector(".studyh");
const exerciseh=document.querySelector(".exerciseh");
const socialh=document.querySelector(".socialh");
const selfh=document.querySelector(".selfh");

const repWo=document.querySelector(".rep-wo");
const repPl=document.querySelector(".rep-pl");
const repSt=document.querySelector(".rep-st");
const repEx=document.querySelector(".rep-ex");
const repSo=document.querySelector(".rep-so");
const repSe=document.querySelector(".rep-se");
 
changeDaily()
daily.addEventListener('click',(e)=>{
    daily.style.color="white";
    weekly.style.color="hsl(235, 45%, 61%)";
    monthly.style.color="hsl(235, 45%, 61%)"
    changeDaily()
})
function changeDaily(){
    daily.style.color="white";

    workh.textContent=10;
    playh.textContent=2;
    studyh.textContent=5;
    exerciseh.textContent=2;
    socialh.textContent=1;
    selfh.textContent=4;
    repWo.textContent=`yesterday - ${workh.textContent}hr`
    repPl.textContent=`yesterday - ${playh.textContent}hr`
    repSt.textContent=`yesterday - ${studyh.textContent}hr`;
    repEx.textContent=`yesterday - ${exerciseh.textContent}hr`
    repSo.textContent=`yesterday - ${socialh.textContent}hr`;
    repSe.textContent=`yesterday - ${selfh.textContent}hr`
}
weekly.addEventListener('click',(e)=>{
    daily.style.color="hsl(235, 45%, 61%)";
    weekly.style.color="white";
    monthly.style.color="hsl(235, 45%, 61%)"
    changeWeekly()
})
function changeWeekly(){
    workh.textContent=70;
    playh.textContent=7;
    studyh.textContent=15;
    exerciseh.textContent=5;
    socialh.textContent=2;
    selfh.textContent=4;
    repWo.textContent=`Last Week - ${workh.textContent}hr`
    repPl.textContent=`Last Week - ${playh.textContent}hr`
    repSt.textContent=`Last Week- ${studyh.textContent}hr`;
    repEx.textContent=`Last Week- ${exerciseh.textContent}hrs`
    repSo.textContent=`Last Week- ${socialh.textContent}hr`;
    repSe.textContent=`Last Week- ${selfh.textContent}hr`
}
monthly.addEventListener('click',(e)=>{
    daily.style.color="hsl(235, 45%, 61%)";
    weekly.style.color="hsl(235, 45%, 61%)";
    monthly.style.color="white";
    changeMonthly()
})
function changeMonthly(){
    workh.textContent="100";
    playh.textContent="27";
    studyh.textContent="55";
    exerciseh.textContent="15";
    socialh.textContent="20";
    selfh.textContent="24";
    repWo.textContent=`Last Week - ${workh.textContent}hr`;
    repPl.textContent=`Last Week - ${playh.textContent}hr`;
    repSt.textContent=`Last Week- ${studyh.textContent}hr`;
    repEx.textContent=`Last Week- ${exerciseh.textContent}hrs`;
    repSo.textContent=`Last Week- ${socialh.textContent}hr`;
    repSe.textContent=`Last Week- ${selfh.textContent}hr`;
}

