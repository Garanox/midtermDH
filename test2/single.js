
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "work questions",
    pages: [{
        questions: [
            {
                type: "radiogroup",
                name: "Hours",
                title: "How many hours do you work a week",
                choices: [
                    "8", "16", "40", "56"
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
            {
                type: "radiogroup",
                name: "team",
                title: "do you work in a team",
                
                choices: [
                    "yes", "no", 
                ]
                
            },
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
    }],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });