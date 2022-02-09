const bege=document.querySelector(".bg");
const loading=document.querySelector(".Loading-text");
let body=document.querySelector("body");
const arr=['download (11).jpg','bottles.jpg','Nature.jpg','lion.jpg']
let  backEl=bege.style;
let parEl=document.querySelector("#par1")
let parEl2=document.querySelector("#par2")

    const imgs=(i)=>{
        setTimeout(function(){
        backEl=bege.style;
        backEl.backgroundImage=`url('${arr[i]}')`
        },4000*i)
    }
    for (let i=0;i<arr.length;i++){
        imgs(i)
    }
        // bege.style.backgroundImage=`url('.//MY-IMAGES/photos/${arr[2]}')`
    // for(let m=0;m<3;m++){
     
    //     // let text=backEl.backgroundImage=`url('.//MY-IMAGES/photos/${arr[i]}')`;
    //     // let textual=  backEl.backgroundImage=`url('.//MY-IMAGES/photos/${arr[m]}')`
    //     // console.log(arr[m])
    //     }
     


        
            //     if(text==textual){
            //     parEl.style.color="#fff"
            //     parEl2.style.color="#fff"
            // }
            // else if (text>textual){
            //     parEl.style.color="#000"
            //     parEl2.style.color="#000"
            // }
            // else{
            //     parEl.style.color="green"
            //     parEl2.style.color="green"
            // }
    // for(let i=0;i<10;i++){
    //     task(i)
    // }
    // function task(i){
    //     setTimeout( function(){console.log(i)},2000*i
    //     );
    // }
    
  
let opaque=1;
let filter=30;
let  load=0;
const Int=setInterval(blurring,30)
    function blurring(){
        filter-=0.3
        load++
        opaque-=0.008
        console.log(load)
        if (load===100){
            clearInterval(Int)
            loading.style.display="none"
        }
        loading.style.opacity=`${opaque}`
    loading.textContent=load+"%"
        // console.log(filter)
        // console.log(load)
        bege.style.filter=`blur(${filter}px)`
    }

    const MotherExpand= setInterval(Mother,4000)
    let rise
    let expand=0;
    let risen
        Mother()
        function Mother(){
            
            expand+=1;
            console.log(expand)
            if(expand>3){
                clearInterval(MotherExpand)
            }
            
            rise=0
     risen = setInterval(rising,30)
        }
        function rising(){
            rise+=0.4
            if(rise>39){
                clearInterval( risen )
            }
            console.log(rise)
        }
     
    
    //     rising()
  
    
        const sizeInt= setInterval(sizer,30)
        let sizing=0;
    function sizer(){
        sizing+=1;
        if(sizing===667){
            clearInterval(sizeInt)
        }
        console.log("Higher")
        // console.log(rise)
        bege.style.height=`calc(${rise}vh + 60vh + 40px)`
        bege.style.width=`calc(${rise}vw + 60vw + 40px)`
        console.log(rise)
    }
    // sizer()
    // setTimeout(()=>{console.log("First Message")},5000);
    // setTimeout(()=>{console.log("Second Message")},3000);
    // setTimeout(()=>{console.log("Third Message")},1000);


// const blurring=()=>{
//     load++
//     console.log(load)
// }
