import React from "react";
import { useEffect, useState } from "react";
import Square from "./Square";

const FibClock = () => {
    const fibboniciClockSeq = [1,1,2,3,5];
    const findAllSubsetsoOfFibboniciClockSeq =
    originalArrayValue => originalArrayValue.reduce(
    (givenSet, setValue) => givenSet.concat(
        givenSet.map(givenSet => [setValue,...givenSet])),[[]]);

    let allSubSets = findAllSubsetsoOfFibboniciClockSeq(fibboniciClockSeq);
    function getSquares(hoursNum){
        let result = [];
        for(let i = 0; i < 32; i++){
            const initialValue = 0;
            const sumWithInitial = allSubSets[i].reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue
            );
            if(sumWithInitial === hoursNum){
                result.push(allSubSets[i])
                console.log(result)
            }

        }
        return result;
    }

    const [squareOne,setSquareOne] = useState(
        {
            backgroundColor:"#808080",
            height:"75px",
            width:"75px",
            position:"absolute",
            top:"0",
            left:"151px"
        });
    const [secondSquareOne,setSecondSquareOne] = useState({
            backgroundColor:"#808080",
            height:"75px",
            width:"75px",
            position:"absolute",
            top:"76px",
            left:"151px",
        });

    
    const [squareTwo,setSquareTwo] = useState(
    {
        backgroundColor:"#808080",
        height:"150px",
        width:"150px",
        position:"absolute",
        top:"0",
    });

    const [squareThree,setSquareThree] = useState({
        backgroundColor:"#808080",
        height:"225px",
        width:"225px",
        position:"absolute",
        top:"152px",
        bottom:"0",
        left:"0",
    });
    
    const [squareFifth,setSquareFifth] = useState({
        backgroundColor:"#808080",
        height:"375px",
        width:"375px",
        position:"absolute",
        top:"0px",
        right:"0px",
        bottom:"0px",
        left:"228px",

    });

    const commonSquares = (arr1=[], arr2 = []) => {
        const map = {};
        arr1.forEach(a => {
           map[a] = map[a] ? map[a] + 1 : 1;
        })
        const result = [];
        for(let key of arr2) {
           if(key in map && map[key] > 0) {
              result.push(key);
              map[key]--;
           }
        }
        return result;
     };

     // n is bigger lenght of arr1 or arr2
    function difference(arr1 =[],arr2 = [],n){
        for(let i = 0;i < n;i++){
            if(arr1.includes(arr2[i])){
               arr1.splice(arr1.indexOf(arr2[i]),1);               
            }
        }
        return arr1;
     }

    function whichSquareToColor(listHH,listMM){
        let bothOneSquare = [];
        let arr1 = [...listHH];
        let arr2 = [...listMM];
        let intersect = commonSquares(listHH,listMM);
        console.log("intersect",intersect);

        let longestArray1 = arr1.length >= intersect.length ? arr1.length:intersect.length;
        let longestArray2 = arr2.length >= intersect.length ? arr2.length:intersect.length;

        let uniqueSquaresHH = difference(arr1,intersect,longestArray1);
        console.log("uniqueSquaresHH",uniqueSquaresHH);
        let uniqueSquaresMM = difference(arr2,intersect,longestArray2);
        console.log("uniqueSquaresMM",uniqueSquaresMM);

        for(let i = 0; i < intersect.length;i++){
            if(intersect[i] === 5){
                setSquareFifth(existingValues => ({
                    ...existingValues,
                    backgroundColor: "#0000FF",
                  }))
            }

            else if(intersect[i] === 3){
                setSquareThree(existingValues => ({
                    ...existingValues,
                    backgroundColor: "#0000FF",
                  }))
            }
            else if(intersect[i] === 2){
                setSquareTwo(existingValues => ({
                    ...existingValues,
                    backgroundColor: "#0000FF",
                  }))
            }

            else if(intersect[i] === 1){
                bothOneSquare.push(i);
                setSquareOne(existingValues => ({
                    ...existingValues,
                    backgroundColor: "#0000FF",
                  }))
                if(bothOneSquare.includes(i) === true && bothOneSquare.length >=2){
                    setSecondSquareOne(existingValues => ({
                        ...existingValues,
                        backgroundColor: "#0000FF",
                      }))

                }
            }
        }

        bothOneSquare = [];
        for(let i = 0; i < uniqueSquaresMM.length;i++){
            if(uniqueSquaresMM[i] === 5){
                setSquareFifth(existingValues => ({
                    ...existingValues,
                    backgroundColor: "#00FF00",
                  }))
            }

            else if(uniqueSquaresMM[i] === 3){
                setSquareThree(existingValues => ({
                    ...existingValues,
                    backgroundColor: "#00FF00",
                  }))
            }
            else if(uniqueSquaresMM[i] === 2){
                setSquareTwo(existingValues => ({
                    ...existingValues,
                    backgroundColor: "#00FF00",
                  }))
            }

            else if(uniqueSquaresMM[i] === 1){
                bothOneSquare.push(i);
                if(intersect.includes(1) === false){
                    setSquareOne(existingValues => ({
                        ...existingValues,
                        backgroundColor: "#00FF00",
                      }))
                }
                
                if(bothOneSquare.includes(i) === true && bothOneSquare.length >=2 && secondSquareOne.backgroundColor !=="#0000FF"){
                    setSecondSquareOne(existingValues => ({
                        ...existingValues,
                        backgroundColor: "#00FF00",
                      }))

                }
                else if(intersect.includes(1) === true && secondSquareOne.backgroundColor !=="#0000FF"){
                    setSecondSquareOne(existingValues => ({
                        ...existingValues,
                        backgroundColor: "#00FF00",
                      }))

                }
            }
        }
        bothOneSquare =[];
        for(let i = 0; i < uniqueSquaresHH.length;i++){
            if(uniqueSquaresHH[i] === 5){
                setSquareFifth(existingValues => ({
                    ...existingValues,
                    backgroundColor: "#FF0000",
                  }))
            }

            else if(uniqueSquaresHH[i] === 3){
                setSquareThree(existingValues => ({
                    ...existingValues,
                    backgroundColor: "#FF0000",
                  }))
            }
            else if(uniqueSquaresHH[i] === 2){
                setSquareTwo(existingValues => ({
                    ...existingValues,
                    backgroundColor: "#FF0000",
                  }))
            }

            else if(uniqueSquaresHH[i] === 1 ){
                bothOneSquare.push(i);
                if(intersect.includes(1) === false){
                    setSquareOne(existingValues => ({
                        ...existingValues,
                        backgroundColor: "#FF0000",
                      }))
                }
               
                if(bothOneSquare.includes(i) === true && bothOneSquare.length >=2 && secondSquareOne.backgroundColor !=="#0000FF"){
                    setSecondSquareOne(existingValues => ({
                        ...existingValues,
                        backgroundColor: "#FF0000",
                      }))

                }
                else if(intersect.includes(1) === true && secondSquareOne.backgroundColor !=="#0000FF"){
                    setSecondSquareOne(existingValues => ({
                        ...existingValues,
                        backgroundColor: "#FF0000",
                      }))

                }
            }
        }


    }
    useEffect(()=>{
        console.log("Effect is running");
        const timer = setTimeout(() => {
            let time = new Date();
            let hours = time.getHours();
            if(hours > 12){
                hours = hours - 12;
            }
            if(hours === 0){
                hours = 12;
            }
            let minutes = Math.floor(time.getMinutes()/5);
            let listOfhoursSq = getSquares(hours);
            
            let squaresToColorForHour = listOfhoursSq[listOfhoursSq.length-1];

            let listOfMinSq = getSquares(minutes);
            let squaresToColorForMinutes = listOfMinSq[0];
            console.log("squaresToColorForMinutes ", squaresToColorForMinutes);
            console.log("squaresToColorForHour ", squaresToColorForHour);
            setSquareThree(existingValues => ({
                ...existingValues,
                backgroundColor: "#808080",
              }))
              setSquareTwo(existingValues => ({
                ...existingValues,
                backgroundColor: "#808080",
              }))
              setSquareFifth(existingValues => ({
                ...existingValues,
                backgroundColor: "#808080",
              }))
              setSquareOne(existingValues => ({
                ...existingValues,
                backgroundColor: "#808080",
              }))
              setSecondSquareOne(existingValues => ({
                ...existingValues,
                backgroundColor: "#808080",
              }))

            whichSquareToColor(squaresToColorForHour,squaresToColorForMinutes);

          },3);

        return () => clearTimeout(timer);
    })
    return(
        <div style={{position:"relative",margin:"auto",marginTop:"80px",marginBottom:"100px" ,height:"375px",width:"600px",backgroundColor:"white"}}>
            <Square squareProps={squareTwo}/>
            <Square  squareProps={squareOne}/>
            <Square  squareProps={secondSquareOne}/>
            <Square  squareProps={squareFifth}/>
            <Square  squareProps={squareThree}/>
        </div>
    )
}


export default FibClock;