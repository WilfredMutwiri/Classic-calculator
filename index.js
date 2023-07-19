// alert("Click on ' >' button below for more calculations")
//more calculations section
let more=document.querySelector("#more");
more.addEventListener("click",moreClick);
function moreClick(){
    let request=prompt("Want to do more math faster?(1.Yes, 2.No)");
    if(request==1){
        let request2=prompt("Calculate:\n 1.Age\n 2.Body Mass Index(BMI)\n3.Area\n4.Perimeter\n5.Surface Area\n6.Speed\n7.Time Taken\n8.Distance Travelled\n9.Simple Interest\n10.Profit\n11.More...")
        //more calculations
        switch(request2){
            case '1':
                //Age calculation
                dateOfBirth=prompt("Enter Year of birth.");
                let currentYear=2023;
               let age=(currentYear-dateOfBirth);
                alert("Age= "+age+" Years");
                break;
                case '2':
                     // Body Mass Index calculation
                     let  weight=prompt("Enter your weight in Kg");
                     let height2=prompt("Enter your Height in metres");
                     let BMI=weight/(height2*height2);
                     alert("BMI = "+BMI);
                    break;
                    case '3':
                        //Area calculation.
                        alert("All values MUST be entered in cm");
                        let objectArea=prompt("1.Circle\n2.Triangle\n3.Rectangle\n4.Square");
                        switch(objectArea){
                            // circle calculation.
                            case '1':
                                let radius=prompt("Enter radius of circle");
                                const PI=3.14;
                                areaOfCircle=PI*radius*radius;
                                prompt("Area = "+areaOfCircle+" square Centimeters");
                                break;
                                case '2':
                                    //Triangle calculation
                                    let base=prompt("Enter base-length of Triangle.");
                                    let height=prompt("Enter height of triangle.");
                                    let triangleArea=(0.5*base)*height;
                                    alert("Area= "+triangleArea+" square centimeters");
                                    break;
                                    case '3':
                                        // Rectangle calculations
                                        let length=prompt("Enter Rectangle length");
                                        let width=prompt("Enter Rectangle width");
                                        let rectangleArea=length*width;
                                        alert("Area = "+rectangleArea+" square centimeters");
                                        break;
                                        case '4':
                                            // Square calculations
                                            let sLength=prompt("Enter length of square");
                                            let squareArea=length*length;
                                            alert("Area = "+squareArea+" square centimeters");
                                            break;
                                            default:
                                                alert("Invalid entry. Try again");
                        }
                        case '4':
                            // Perimeter calculation
                            alert("All values MUST be entered in cm");
                            let objectperimeter=prompt("1.Circle\n2.Rectangle\n3.Square\n");
                            switch(objectperimeter){
                                // circle calculation.
                                case '1':
                                    let radius=prompt("Enter radius of circle");
                                    const PI=3.14;
                                    perimeterOfCircle=PI*(radius+radius);
                                    prompt("Perimeter = "+perimeterOfCircle+" Centimeters");
                                    break;
                                        case '2':
                                            // Rectangle calculations
                                            let length=prompt("Enter Rectangle length");
                                            let width=prompt("Enter Rectangle width");
                                            let rectangleperimeter=(length*2)+(width*2);
                                            alert("Perimeter = "+rectangleperimeter+" centimeters");
                                            break;
                                            case '3':
                                                // Square calculations
                                                let sLength=prompt("Enter length of square");
                                                let squarePerimeter=sLength*4;
                                                alert("Perimeter = "+squarePerimeter+" centimeters");
                                                break;
                                                default:
                                                    alert("Invalid entry. Try again");
                            }
                            case '5':
                                // surface area calculation
                                let request3=prompt("Calculate surface area of:\n1.Sphere\n2.Cube\n3.Cylinder");
                                switch(request3){
                                    case '1':
                                        // sphere surface area
                                        const PI=3.14;
                                        let radius=prompt("Enter sphere radius");
                                        let sphereSA=4*PI*(radius*radius);
                                        alert("Sphere Surface Area = "+sphereSA+" square centimeters");
                                        break;
                                        case '2':
                                            // cube surface area
                                            let sideLength=prompt("Enter side length");
                                            let cubeArea=6*(sideLength*sideLength);
                                            alert("Cube surface area = "+cubeArea+" square centimeters");
                                            break;
                                            case '3':
                                                // cylinder surface area
                                                const PI2=3.14;
                                                let radius2=prompt("Enter cylinder radius");
                                                let height3=prompt("Enter cyinder height");
                                                let cylinderSA=(2*PI2*(radius2*radius2))+(2*PI2*radius2*height3);
                                                alert("Cylinder surface area = "+cylinderSA+" square centimeters");
                                                break;
                                }
                                break;
                                case '6':
                                    // speed calculation
                                    let distance=prompt("Enter distance travelled(Km).");
                                    let time=prompt("Enter time taken(Hrs)");
                                    let speed=distance/time;
                                    alert("Speed = "+speed+" Km/hr");
                                    break;
                                    case '7':
                                        // Time calculation
                                        let distance2=prompt("Enter distance travelled (Km).");
                                        let speed2=prompt("Enter speed used (Km/hr)");
                                        let time2=distance2/speed2;
                                        alert("Speed = "+time2+" hr");
                                        break;
                                        case '8':
                                            // Distance travelled calculation
                                        let time3=prompt("Enter time taken(Hrs)");
                                        let speed3=prompt("Enter speed used (Km/hr)");
                                        let distance3=speed3*time3;
                                        alert("Distance = "+distance3+" Km");
                                        break;
                                        case '9':
                                            // simple Interest calculation
                                            let principal=prompt("Enter Interest Principal");
                                            let Rate=prompt("Enter Interest rate");
                                            let time4=prompt("Enter Interest time in years");
                                            let Interest=(principal*Rate*time4)/100;
                                            alert("Simple Interest = "+Interest);
                                            break;
                                            case '10':
                                                // Profit calculation
                                                let totalSells=prompt("Enter total revenue/sells");
                                                let totalExpenses=prompt("Enter total Expenses");
                                                let Profit=totalSells-totalExpenses;
                                                alert("Profit = "+Profit);
                                                break;
                                                case '11':
                                                    // More calculations section
                                                    alert("More quick calculations are yet to be developed!");
                                                    break;
                                                    default:
                                                        alert("Wrong choice. Try Again");
        }


    }else{
        alert("More calculations cancelled!")
    }
}