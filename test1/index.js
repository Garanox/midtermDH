
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "work questions",
    pages: [
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "daysWorked",
                    title: "How many days do you work a week",
                    choices: [
                        "1-2", "2-3", "3-4", "4-5"
                    ]
                    
                },
        
        
                {
                    type: "radiogroup",
                    name: "department",
                    title: "What separtment do you work in",
                    choices: [
                        "front desk", "IT", "Reaserch", "financial"
                    ]
                    
                },
            
            
        
               
            ]
            
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "coffee",
                    title: "do you use the coffee station?",
                    
                    choices: [
                        "yes", "no", 
                    ]
                    
                },
            
            
        
            
                {
                    type: "radiogroup",
                    name: "oncall",
                    title: "How often are you oncall per week?",
                    
                    choices: [
                        "1", "2","3","4","5" 
                    ]
                    
                }
            ]
            
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "tech",
                    title: "do you use computers?",
                    
                    choices: [
                        "yes", "no", 
                    ]
                    
                },
            
            
         
            
                {
                    type: "radiogroup",
                    name: "drive",
                    title: "do you drive to work?",
                    
                    choices: [
                        "yes", "no", 
                    ]
                    
                }
            ]
            
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "howlong",
                    title: "how many years have you been working here for?",
                    
                    choices: [
                        "less than a year", "1-5","5-10","10-15" 
                    ]
                    
                },
                {
                    type: "radiogroup",
                    name: "team",
                    title: "do you work in a team",
                    
                    choices: [
                        "yes", "no", 
                    ]
                    
                }
            ]
            
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "breaks",
                    title: "do you take breaks? ",
                    
                    choices: [
                        "yes", "no", 
                    ]
                    
                },{
                   type: "radiogroup",
                    name: "enjoy",
                    title: "do you enjoy your current position at work",
                    
                    choices: [
                        "yes", "no", 
                    ]
                }
            ]
            
        },
         
        
    ],
    
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });