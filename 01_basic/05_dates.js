// DATES

let myDate = new Date()

console.log(myDate);                    
        //myDate print but not readable                         2026-10-10T14:29:18.519Z
console.log(myDate.toString());         
        // tostring() use to read but something not read        Sat Oct 10 2026 14:29:18 GMT+0000 (Coordinated Universal Time)  
console.log(myDate.toDateString());     
        //toDatestring() use to more readable                   Sat Oct 10 2026
console.log(myDate.toISOString());      
        //toISOString() use to read but something not read      2026-10-10T14:29:18.519Z
console.log(myDate.toJSON());           
        //toJSON() use to read but something not read           2026-10-10T14:29:18.519Z
console.log(myDate.toLocaleDateString());
        //toLocaleDateString() use the proper date like         10/10/2026
console.log(myDate.toLocaleString());  
        //toLocaleString() use proper date and time             10/10/2026, 2:29:18 PM
console.log(myDate.toLocaleTimeString());       
        //toLocaleTimeString() use for time                     2:29:18 PM

console.log(typeof myDate);


let myCreatedDate = new Date (2026, 4, 12, 4, 40, 45)
console.log(myCreatedDate.toLocaleString());
