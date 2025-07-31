document.getElementById("submitbtn").addEventListener('click', function(event){
    console.group("submit pressed")
    event.preventDefault();

    let name = document.getElementById("namebox").value;
    console.log(name);
    let email = document.getElementById("emailbox").value;
    console.log(email);
    let dob = document.getElementById("datebox").value;
    console.log(dob);
    
    let age = document.getElementById("agebox").value;
    //console.log(age);
    let agecon="";
    if(age>=18){
        agecon="youre good";
    }else{
        agecon="youre not good";
    }
    console.log( age,",",agecon);

    let genderInputs = document.getElementsByName("gender");
    for (let gen of genderInputs) {
        if (gen.checked) {
            console.log(gen.value);
        }
    }

    let phonenumber = document.getElementById("numberbox").value;
    console.log(phonenumber);
    
    subjectList=[]
    let chosensubjects =document.getElementsByName("subjects")
    for(let sub of chosensubjects){
        if (sub.checked){
            subjectList.push(sub.value);
        }
    }
    console.log(`subjects: ${subjectList}`);
});



