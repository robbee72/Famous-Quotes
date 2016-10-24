

/**
 * App ID for the skill
 */
var APP_ID = "amzn1.ask.skill.f9ecb065-2ab6-4fd4-9265-00afee7963d3"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * Array containing famous quotes.
 */
var QUOTES = [

 "The reports of my death are greatly exaggerated. Mark Twain",
   
"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.  Mark Twain",
    
"A banker is a fellow who lends you his umbrella when the sun is shining, but wants it back the minute it begins to rain.   Mark Twain",

"Age is an issue of mind over matter. If you don’t mind, it doesn’t matter. ",

"Common sense is the collection of prejudices acquired by age 18.  Albert Einstein",

"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.  Albert Einstein ",

"I think and think for months, for years. Ninety-nine times the conclusion is false. The hundredth time I am right. -Albert Einstein",

"When you sit with a nice girl for two hours, you think it's only a minute. But when you sit on a hot stove for a minute, you think it's two hours. That's relativity.   Albert Einstein",

"Imagination is more important than knowledge. Albert Einstein",
    
"I immediately regret this decision.  Ron Burgundy  <break time='2s'/> What, <break time='1s'/>That may not be a famous quote. <break time='3s'/>You stay classy San Diego",   
    
<audio src="Phones-ringing-Dude-Thank-you-Donny.mp3"/>    
    
"So I jump ship in Hong Kong and I make my way over to Tibet, and I get on as a looper at a course over in the Himalayas. A looper, you know, a caddy, a looper, a jock. So, I tell them I’m a pro jock, and who do you think they give me? The Dalai Lama, himself. Twelfth son of the Lama. The flowing robes, the grace, bald striking. <break time='1s'/> So, I’m on the first tee with him. I give him the driver. He hauls off and whacks one <break time='1s'/> big hitter, the Lama  long, into a ten-thousand foot crevasse, right at the base of this glacier. Do you know what the Lama says? Gunga galunga… gunga, gunga-lagunga. So we finish the eighteenth and he’s gonna stiff me.<break time='2s'/> And I say, “Hey, Lama, hey, how about a little something, you know, for the effort, you know.” And he says, 'Oh, uh, there won’t be any money, but when you die, on your deathbed, you will receive total consciousness.' <break time='1s'/> So I got that goin’ for me, which is nice.  Carl Spackler",  
    
"Don't cry because it's over, smile because it happened.  Dr. Seuss",

"Courage is grace under pressure.  Ernest Hemingway",

"You only live once, but if you do it right, once is enough.  Mae West",
    
"Live as if you were to die tomorrow. Learn as if you were to live forever.  Mahatma Gandhi",
    
"The whole secret of a successful life is to find out what is one's destiny to do, and then do it.  Henry Ford",
    
"I find that the harder I work, the more luck I seem to have.  Thomas Jefferson",
    
"Don't be afraid to give up the good to go for the great.  John D. Rockefeller",
    
"Nothing great was ever achieved without enthusiasm.  Ralph Waldo Emerson",
    
"In the midst of movement and chaos, keep stillness inside of you.  Deepak Chopra",
    
"I’ve missed more than nine thousand shots in my career. I’ve lost almost three hundreds games. Twenty six times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. Michael Jordan",
    
"Screw it, let’s do it! Richard Branson",
    
"Even if you’re on the right track, you’ll get run over if you just sit there. Will Rogers",
    
"Those who believe in telekinetics, raise my hand. Kurt Vonnegut",
    
"Sometimes I worry about being a success in a mediocre world. Lily Tomlin",
    
"In times like these, it helps to recall that there have always been times like these.  Paul Harvey",
    
"I have never seen a monument erected to a pessimist.  Paul Harvey",
    
"Golf is a game in which you yell fore, shoot six, and write down five. Paul Harvey",
    
"Whatever you are, be a good one.  Abraham Lincoln",
    
"Predictions are difficult, especially about the future.  Yogi Berra"
    
];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');


var Quote = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Quote.prototype = Object.create(AlexaSkill.prototype);
Quote.prototype.constructor = Quote;

Quote.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    //console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Quote.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    //console.log("onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewQuoteRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
Quote.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    //console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

Quote.prototype.intentHandlers = {
    "GetNewQuoteIntent": function (intent, session, response) {
        handleNewQuoteRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say tell me a famous quote, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new Quote from the list and returns to the user.
 */
function handleNewQuoteRequest(response) {
    
    var quoteIndex = Math.floor(Math.random() * QUOTES.length);
    var famousQuote = QUOTES[quoteIndex];

    // Create speech output
    var speechOutput = "Here's your quote: " + famousQuote;
    var cardTitle = "Your quote";
    response.tellWithCard(speechOutput, cardTitle, speechOutput);
}

//function handleNewQuoteRequest(response) {
//    
//    var quotesIndex =Math.floor(Math.random() *
//    QUOTES.length);
//    var famousQuote =QUOTES[quoteIndex];
//    
//    // create another speech output
//    var speechout = "Would you like to here another famous quote? "
//}
//
//    var cardTitle = "Your next quote";
//    response.tellWithCard(speechOutput, cardTitle, speechOutput);
// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the SpaceGeek skill.
    var quote = new Quote();
    quote.execute(event, context);
};
