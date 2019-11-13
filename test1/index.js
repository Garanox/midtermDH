
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
                    
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "libertyordeath",
                    title: "Who said 'Give me liberty or give me death?'",
                    choicesOrder: "random",
                    choices: [
                        "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
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