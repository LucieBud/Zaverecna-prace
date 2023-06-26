'use strict'

class NewInsured{
    constructor(){
        this.nameInput = document.getElementById("firstName");
        this.lastNameInput = document.getElementById("lastName");
        this.ageInput= document.getElementById("age");
        this.phoneNumberInput = document.getElementById("phoneNumber");
        this.tbody = document.getElementById("tbody");
        this.dataOfNewPeople = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];
        this.btnSubmit = document.getElementById("btnSubmit");
        this.form = document.getElementById("form");
        this.btnOnsubmit();
         
    }

    btnOnsubmit(){
        this.form.onsubmit=(e)=>{
            e.preventDefault();
            e.stopPropagation();
            
            if (this.form.checkValidity()){
                //add data of new person to localStorage and write them to the table
                const dataOfNewPerson = [this.nameInput.value, this.lastNameInput.value, parseInt(this.ageInput.value), parseInt(this.phoneNumberInput.value)]; 
                this.dataOfNewPeople.push(dataOfNewPerson);
                localStorage.setItem("data", JSON.stringify(this.dataOfNewPeople));
                    
                this.writeDataToTable();
                
            }
            else{
                this.form.classList.add('was-validated');
                
                
            }
        }
        
    }
    
    writeDataToTable=()=>{
        //creation of the table
        for (const dataOfNewPerson of this.dataOfNewPeople){
            let tr = document.createElement("tr");
            this.tbody.appendChild(tr);
            for (const element of dataOfNewPerson){
                let td = document.createElement("td");
                tr.appendChild(td);
                td.innerHTML = element;
            }
            
        }
        //clear form after click on the button
        this.nameInput.value="";
        this.lastNameInput.value="";
        this.ageInput.value="";
        this.phoneNumberInput.value="";
        
    }
        
    
    
}



