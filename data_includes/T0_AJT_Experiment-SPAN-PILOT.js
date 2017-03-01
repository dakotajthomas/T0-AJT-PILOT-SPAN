var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle(anyOf(startsWith("ms"), startsWith("mo"), startsWith("c"), startsWith("f"))))));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 500,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(not natural at all)", rightComment: "(very natural)"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var practiceItemMessage = true;

var items = [


    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "AJT_Introduction-SPAN-PILOT.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    
    ["sep", "Separator", { }],

//PRACTICE//
    ["practice", "AcceptabilityJudgment", {s: "This is a practice sentence to get you used to reading sentences like this.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["practice", "AcceptabilityJudgment", {s: "This is another practice sentence for you to read.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["practice", "AcceptabilityJudgment", {s: "This is the last practice item before the experiment begins.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    
    ["sep", "Separator", { }], 
    
//Experimental Items//
  //Uncountable Substance//
    //salt//
    ["ms1-zs", "AcceptabilityJudgment", {s: "People do not worry about salt in their food.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["ms1-zp", "AcceptabilityJudgment", {s: "Can you bring salts to the table?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["ms1-i",  "AcceptabilityJudgment", {s: "Although they think he is crazy, he puts a salt on everything.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["ms1-ds", "AcceptabilityJudgment", {s: "The salt burns our eyes.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["ms1-dp", "AcceptabilityJudgment", {s: "You can dissolve the salts in the water.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    //toothpaste//
    ["ms2-zs", "AcceptabilityJudgment", {s: "Did you use toothpaste this morning?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["ms2-zp", "AcceptabilityJudgment", {s: "Toothpastes come in tubes.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["ms2-i",  "AcceptabilityJudgment", {s: "There is a toothpaste on the table but I am not sure if it is good.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["ms2-ds", "AcceptabilityJudgment", {s: "We would bring the toothpaste to the kids.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["ms2-dp", "AcceptabilityJudgment", {s: "The toothpastes contain some mint.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    //mustard//
    ["ms3-zs", "AcceptabilityJudgment", {s: "Do you like mustard on your sandwich?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["ms3-zp", "AcceptabilityJudgment", {s: "There are mustards for use over there.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["ms3-i",  "AcceptabilityJudgment", {s: "She asked for a mustard for her french fries.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["ms3-ds", "AcceptabilityJudgment", {s: "The mustard that I bought is in the refrigerator.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["ms3-dp", "AcceptabilityJudgment", {s: "Have you seen the mustards we got at the store?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
  //Uncountable Object//
    //furniture//
    ["mo1-zs", "AcceptabilityJudgment", {s: "Would you believe me if I told you that I have furniture older than you?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo1-zp", "AcceptabilityJudgment", {s: "I could not understand why furnitures were spread all over the room.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo1-i",  "AcceptabilityJudgment", {s: "We have a furniture in that room.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["mo1-ds", "AcceptabilityJudgment", {s: "They have the furniture in the garage.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo1-dp", "AcceptabilityJudgment", {s: "Do you think the furnitures belong to them?", as: ["1", "2", "3", "4", "5", "6", "7"]}],      
    //mail//
    ["mo2-zs", "AcceptabilityJudgment", {s: "Did the postman bring mail yesterday?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo2-zp", "AcceptabilityJudgment", {s: "While on vacation, the Post Office did not deliver any mails.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo2-i",  "AcceptabilityJudgment", {s: "I need to go to the Post Office to send a mail to my mother.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["mo2-ds", "AcceptabilityJudgment", {s: "Last week the postman delivered the mail on Sunday.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo2-dp", "AcceptabilityJudgment", {s: "I am so angry because the postman does not sort the mails properly.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    //traffic//
    ["mo3-zs", "AcceptabilityJudgment", {s: "There is traffic in Iowa City.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo3-zp", "AcceptabilityJudgment", {s: "Traffics in this city cause people to be late to work.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo3-i",  "AcceptabilityJudgment", {s: "People turn when they see there is a traffic.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["mo3-ds", "AcceptabilityJudgment", {s: "Today, the traffic in the city center was thinner than usual.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo3-dp", "AcceptabilityJudgment", {s: "The traffics on Main Street caused him to arrive late.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
  //Countable [+prototypical]//
    //boy//
    ["c1-zs", "AcceptabilityJudgment", {s: "There was boy on the ground.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c1-zp", "AcceptabilityJudgment", {s: "Boys may be influenced by their father.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c1-i",  "AcceptabilityJudgment", {s: "There is a boy sitting on the ground with his hands on his head.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["c1-ds", "AcceptabilityJudgment", {s: "They boy would go out of his way to walk home safely.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c1-dp", "AcceptabilityJudgment", {s: "The boys looked at their mom with those sad eyes.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    //door//
    ["c2-zs", "AcceptabilityJudgment", {s: "Door was in the middle of the room because the building had caught on fire.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c2-zp", "AcceptabilityJudgment", {s: "There were doors on all sides of the building.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c2-i",  "AcceptabilityJudgment", {s: "Every three steps there was a door and I could not find my way around.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["c2-ds", "AcceptabilityJudgment", {s: "I could see the door from the table.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c2-dp", "AcceptabilityJudgment", {s: "Do you know where the doors for the project are?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    //book//
    ["c3-zs", "AcceptabilityJudgment", {s: "When I arrived in the room, book was all over the desk.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c3-zp", "AcceptabilityJudgment", {s: "Books come in all different shapes and sizes.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c3-i",  "AcceptabilityJudgment", {s: "I have to buy a book for my new class that starts tomorrow.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["c3-ds", "AcceptabilityJudgment", {s: "The book is entertaining and I recommend you read it!", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c3-dp", "AcceptabilityJudgment", {s: "The books are for studying.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
  //Countable [-prototypical]//
    //noodle//
    ["cnp1-zs", "AcceptabilityJudgment", {s: "Do you want to have noodle for dinner?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["cnp1-zp", "AcceptabilityJudgment", {s: "I have tasted noodles that were flavored with garlic.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["cnp1-i",  "AcceptabilityJudgment", {s: "She said that there was a noodle on the table after dinner.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["cnp1-ds", "AcceptabilityJudgment", {s: "John saw the noodle fall on the ground while the baby was trying to eat.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["cnp1-dp", "AcceptabilityJudgment", {s: "I am looking for the noodles that we use when we make pasta.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    //crayon//
    ["cnp2-zs", "AcceptabilityJudgment", {s: "I like when you draw pictures with crayon.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["cnp2-zp", "AcceptabilityJudgment", {s: "She wants to know if you have crayons.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["cnp2-i",  "AcceptabilityJudgment", {s: "I have a crayon that you can borrow right now.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["cnp2-ds", "AcceptabilityJudgment", {s: "Have you seen the crayon that Tim was using?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["cnp2-dp", "AcceptabilityJudgment", {s: "Look at the crayons that the teacher got for all of the students.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    //stick//
    ["cnp3-zs", "AcceptabilityJudgment", {s: "Have they told you about stick on the sidewalk?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["cnp3-zp", "AcceptabilityJudgment", {s: "Do you have sticks that need to be put in the pile?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["cnp3-i",  "AcceptabilityJudgment", {s: "I saw a stick on the back porch.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["cnp3-ds", "AcceptabilityJudgment", {s: "Tanner said that he picked up the stick earlier today.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["cnp3-dp", "AcceptabilityJudgment", {s: "We thought that the recycling center would take the sticks.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
  //Flexible//
    //chocolate//
    ["f1-zs", "AcceptabilityJudgment", {s: "I have chocolate for you since it is your birthday.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f1-zp", "AcceptabilityJudgment", {s: "She bought chocolates for everyone in the office.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f1-i",  "AcceptabilityJudgment", {s: "They want a chocolate.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["f1-ds", "AcceptabilityJudgment", {s: "We need the chocolate to finish baking the cake.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f1-dp", "AcceptabilityJudgment", {s: "The chocolates are for us.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    //stone//
    ["f2-zs", "AcceptabilityJudgment", {s: "Do you have stone for the path?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f2-zp", "AcceptabilityJudgment", {s: "There are stones in the garden, so pick the one you like.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["f2-i",  "AcceptabilityJudgment", {s: "I have a stone for him.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f2-ds", "AcceptabilityJudgment", {s: "The stone is ready to be used.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f2-dp", "AcceptabilityJudgment", {s: "We have the stones for the project, but I think we need more.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    //string//
    ["f3-zs", "AcceptabilityJudgment", {s: "Cats can be entertained for hours by playing with string.", as: ["1", "2", "3", "4", "5", "6", "7"]}],    
    ["f3-zp", "AcceptabilityJudgment", {s: "Do you have strings for the project?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f3-i",  "AcceptabilityJudgment", {s: "She has a string for you to hang up the picture.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f3-ds", "AcceptabilityJudgment", {s: "The string is in the cabinet.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f3-dp", "AcceptabilityJudgment", {s: "They have the strings on the table over there.", as: ["1", "2", "3", "4", "5", "6", "7"]}],    
];