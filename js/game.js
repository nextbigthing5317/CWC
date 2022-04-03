$(document).ready(() => {
    $('.info').on('submit', () => {
        return false;
    });
});
$('.info').keypress((e) => {
    if (e.which === 13) {
        $('.info').submit();
        hidediv();
    }
})


cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
    card.addEventListener( 'click', async function() {
        iscomalichoosen = true;
        data = data+1;
        if(data==1)
        {
            themetoturn = card;
            const artistdiv = themetoturn.children[1];
            artistid = artistdiv.id;
            card.classList.toggle('is-flipped');
            const sleep = ms => new Promise(res => setTimeout(res, ms));
            await sleep(500);
            var scrolltosub = document.getElementById("scrollmodal");
            scrolltosub.style.display="block";
            document.getElementById("chosencomaliname1").innerHTML= "Your Comali for today’s cooking is "+comali_list[result][artistid];
            document.getElementById("chosencomaliname2").innerHTML= "Get ready to cook with  "+comali_list[result][artistid];
           }
         else{
            var turnover = document.getElementById("turnover");
            turnover.style.display = "block";
            document.getElementById("turnovermessage").innerHTML =  "Your turn is over!";
            data=1;

        }
        });
    });


    var cards,themetoturn,chosendishid,result,iscomalichoosen=false,spinans,previousresult,artistid;
    var flag=true, choosenchoice, chosenid,dishid,finalresult = 0,data=0,wheelSpinning = false;;
    var comali_list =
    {
              "Actors": ["shivangi","kureshi","sarath","manimegalai","bala","shakthi","sunitha","pugal"],
              "Schools" : ["manimegalai","shivangi","sunitha","kureshi","pugal","sarath","bala","shakthi"],
              "Vijay_TV" : ["bala","pugal","shakthi","sunitha","sarath","kureshi","manimegalai","shivangi"],
              "Sweet" : ["sunitha","manimegalai","kureshi","bala","shivangi","pugal","shakthi","sarath"],
              "Cartoons" : ["shakthi","bala","shivangi","pugal","sunitha","manimegalai","sarath","kureshi"],
              "Colors": ["pugal","sarath","manimegalai","shakthi","kureshi","bala","shivangi","sunitha"]
    };
    var cuisines =
    {
                NorthIndian:["Aaloo Parotta","Chole Bature","Panner Tikka","Dal Makhani"],
                SouthIndian:["Bisi Bela Bath","Pongal","Puttu Kadala curry","Gunta paddu"],
                StreetFoods:["Momos","Pani Puri","Pav Bhaji","Samosa"],
                Chinese:["Schezwan fried rice","Sushi","Gobi Manchurian","Hakka noodles"],
                Italian:["Pasta","Pizza","Lasagna","Egg Bake"],
                Dessert:["Kaju Katli","Gulab Jamun","Black forest cake","Falooda Ice creams"],
                Starters:["Chicken Nuggets","Spring rolls","Garlic bread","Cajun spicy baby potato"],
                NonVeg:["Hyderabad Biriyani","Fish Pollichathu","Butter Chicken","Grill chicken"]
    };
    var ingredients =
    {
        "NorthIndian":
        {
            "1": { "correct":["Wheat Flour","Salt","Oil","Potato","Chilli","Ginger Paste","Coriander","Garam Masala","Carom","Seeds","Aamchur"], "wrong":["Coconut","Almonds","Tamarind","Green Gram","Urad Dal"] },
            "2": { "correct":["Maida","Rava","Sugar","Curd","Kasuri Methi","Bay Leaf","Tomato Puree","Coriander","Cumin","Onion"],"wrong":["White Pepper","Lemon","Banana","Saffron","Cucumber"] },
            "3": { "correct":["Curd","Turmeric","Chilli Powder","Onion","Capsicum","Panneer","Lemon Juice","Chaat Masala","Cumin","Oil"],"wrong":["Tamarind","Milk","Sugar","Coconut","Dry Grapes"] },
            "4": { "correct":["Kidney Beans","Bay Leaf","Ghee","Tomato","Chilli Powder","Butter","Fresh Cream","Onion","Black Urad Dal","Salt"],"wrong":["Sugar","Beetroot","Maida","Rava","Flattened Rice"] },
        },
        "SouthIndian":
        {
            "1": { "correct":["Chana Dal","Red Chilli","Onion","Peanuts","Beans","Tamarind","Cashews","Toor Dal","Tomato","Rice"],"wrong":["Milk","Cumin","Fenugreek","Urad Dal","Wheat"] },
            "2": { "correct":["Rice","Moong Dal","Ghee","Cashews","Asafoetida","Black Pepper","Water","Cumin","Turmeric","Curry Leaves"],"wrong":["Tomato","Lemon","Anise","Cinnamon","Bay Leaf"] },
            "3": { "correct":["Black Chickpea","Coconut Oil","Tomato","Water","Onion","Chilli Powder","Ginger","Puttu Flour","Coconut","Cardamom"],"wrong":["Curd","Chicken","Fenugreek","Bengal Gram","Dry Grapes"] },
            "4": { "correct":["Urad Dal","Fenugreek","Ginger","Curry Leaves","Flattened Rice","Dosa Rice","Coriander","Onion","Salt","Oil"],"wrong":["Sugar","Soya Beans","Maida","Corn Flour","Milk"] },
        },

        "StreetFoods":
        {
            "1": { "correct":["Maida","Oil","Clove","Garlic","Ginger","Carrot","Cabbage","Pepper","Onion","Chilli"],"wrong":["Sugar","Milk","Coconut","Cumin","Flattened Rice"] },
            "2": { "correct":["Rava","Maida","Coriander","Mint","Potato","Chaat Masala","Red Chilli Powder","Asafoetida","Jaggery","Salt"],"wrong":["Milk","Kasuri Methi","Cucumber","Honey","Moong Dal"] },
            "3": { "correct":["Butter","Peas","Capsicum","Potato","Lemon","Ginger Garlic Paste","Coriander","Chilli Powder","Turmeric","Bread Roll"],"wrong":["Beetroot","Spinach","Flattened Rice","Ground Nut","Dry Grapes"] },
            "4": { "correct":["Maida","Ajwain","Cumin","Potato","Garam Masala","Peas","Asafoetida","Chilli Powder","Ginger","Oil"],"wrong":["Milk","Lemon","Honey","Sugar","Rava"] },
        },
        "Chinese":
        {
            "1": { "correct":["Tomato Sauce","Vinegar","Capsicum","Sweet Corn","Beans","Clove","Carrot","Garlic","Onion","Rice"],"wrong":["Milk","Lemon","Honey","Sugar","Fish"] },
            "2": { "correct":["Fish","Rice","Vinegar","Cucumber","Nori Sheets","Avocados","Carrot","Soy Sauce","Wasabi","Onion"],"wrong":["Milk","Honey","Panneer","Almonds","Asafoetida"] },
            "3": { "correct":["Cauli Flower","Oil","Clove","Ginger","Onion","Chilli Sauce","Vinegar","Pepper","Chilli","Corn Flour"],"wrong":["Milk","Sugar","Dry Grapes","Cashews","Fenugreek"] },
            "4": { "correct":["Noodles","Cabbage","Capsicum","Carrot","Beans","Tomato Sauce","Vinegar","Soy Sauce","Pepper Powder","Bean Sprouts"],"wrong":["Corn Flour","Honey","Vermicelli","Curd","Spinach"] },
        },
        "Italian":
        {
            "1": { "correct":["Pasta","Sweet Corn","Butter","Garam Masala","Cheese","Tomato Puree","Capsicum","Turmeric","Carrot","Ginger"],"wrong":["Rice","Wheat","Cucumber","Lemon","Moong Dal"] },
            "2": { "correct":["Maida","Cheese","Oregano","Chilli Flakes","Yeast","Capsicum","Baking Powder","Mozzarella","Tomato","Onion"],"wrong":["Wine","Lemon","Rava","Flattened Rice","Coconut"] },
            "3": { "correct":["Olive Oil","Garlic","Italian Seasoning","Vinegar","Cheese","Noodles","Wheat","Tomato","Oregano","Egg"],"wrong":["Milk","Flattened Rice","Vermicelli","Dry grapes","Beetroot"] },
            "4": { "correct":["Egg","Cheese","Bread","Onion","Milk","Garlic","Pepper Powder","Bacon","Tomato Sauce","Tomato"],"wrong":["Coconut","Jaggery","Tamarind","Ground nut","Anise"] },
        },
        "Dessert":
        {
            "1": { "correct":["Cashews","Sugar","Water","Ghee","Cardamom Powder","Silver Vark","Almonds","Coconut","Saffron","Rose Water"],"wrong":["Salt","Cheese","Dry Grapes","Lemon","Yogurt"] },
            "2": { "correct":["Sugar","Maida","Cardamom","Lemon Juice","Baking Powder","Milk Powder","Ghee","Milk","Oil","Water"],"wrong":["Cashews","Spinach","Cucumber","Chilli","Vermicelli"] },
            "3": { "correct":["Sugar","Maida","Cocoa Powder","Baking Powder","Baking Soda","Egg","Milk","Vegetable Oil","Vanilla Extract","Cream"],"wrong":["Ghee","Dry Grapes","Wheat","Spinach","Cheese"] },
            "4": { "correct":["Milk","Sugar","Nuts","Cherry","Basil Seeds","Falooda Sev","Rose Syrup","Tutti Frutti","Strawberry Jelly","Vanilla Ice Cream"],"wrong":["Spinach","Curd","Asafoetida","Cumin","Ghee"] },
        },
        "Starters":
        {
            "1": { "correct":["Chicken","Oil","Egg","Bread Crumbs","Yeast","Corn Flour","Lemon","Garlic Powder","Pepper","Garam Masala"],"wrong":["Honey","Asafoetida","Anise","Tomato","Almonds"] },
            "2": { "correct":["Maida","Corn Flour","Cabbage","Capsicum","Vinegar","Pepper Powder","Chilli Sauce","Oil","Carrot","Beans"],"wrong":["Beetroot","Milk","Honey","Cashews","Lemon"] },
            "3": { "correct":["Milk","Yeast","Sugar","Butter","Maida","Oregano","Coriander","Chilli Flakes","Mozzarella","Garlic"],"wrong":["Honey","Cashews","Spinach","Cucumber","Rava"] },
            "4": { "correct":["Potato","Corn Flour","Maida","Chilli Flakes","Pepper","Salt","Mayonnaise","Garlic Powder","Onion","Chilli Sauce"],"wrong":["Cashews","Honey","Cheese","Wheat","Bread"] },
        },
        "NonVeg":
        {
            "1": { "correct":["Cinnamon","Cumin","Ginger Garlic Paste","Clove","Lemon Juice","Meat","Basmati Rice","Saffron","Water","Butter"],"wrong":["Curd","Rava","Honey","Fenugreek","Spinach"] },
            "2": { "correct":["Pomfret Fish","Pepper","Chilli Powder","Tomato","Onion","Turmeric","Banana Leaf","Coconut Oil","Lemon","Curry Leaves"],"wrong":["Cheese","Almonds","Soy Sauce","Kasuri Methi","Honey"] },
            "3": { "correct":["Boneless Chicken","Ginger Garlic Paste","Butter","Cashews","Almonds","Tomato","Garam Masala","Coriander","Yogurt","Cream"],"wrong":["Honey","Maida","Oregano","Soy Sauce","Asafoetida"] },
            "4": { "correct":["Chicken","Vinegar","Olive Oil","Pepper Powder","Clove","Garlic","Salt","Lemon","Paprika","Thyme"],"wrong":["Milk","Asafoetida","Yeast","Capsicum","Honey"] },
        }
    }
    function hidediv()
    {
        var x = document.forms["myForm"]["username"].value;
        var input = document.getElementById("username");
        input.addEventListener("keyup", function(event) {
          if (event.keyCode === 13) {
           event.preventDefault();
           hidediv();
          }
        });
        if (x == "" || x == null)
        {
            document.getElementById('noname').innerText = "Please Enter your name!";
        }
        else
        {
            if (document.getElementById('Div1').style.display == 'none') {
                document.getElementById('Div1').style.display = 'block';
                document.getElementById('Div2').style.display = 'none';
            }
            else {
                document.getElementById('Div1').style.display = 'none';
                document.getElementById('Div2').style.display = 'block';
                var element = document.getElementById("Div2");
                    element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                    });

                var t = document.getElementById('themes');
                var theme = ["Schools","Vijay_TV","Sweet","Cartoons","Colors","Actors"]
                result = theme[Math.floor(Math.random() * theme.length)];
                t.innerHTML = "Theme : "+result;
                previousresult = result;
                document.getElementById('obj-1').src="comalis/"+result+"/1.jpeg";
                document.getElementById('obj-2').src="comalis/"+result+"/2.jpeg";
                document.getElementById('obj-3').src="comalis/"+result+"/3.jpeg";
                document.getElementById('obj-4').src="comalis/"+result+"/4.jpeg";
                document.getElementById('obj-5').src="comalis/"+result+"/5.jpeg";
                document.getElementById('obj-6').src="comalis/"+result+"/6.jpeg";
                document.getElementById('obj-7').src="comalis/"+result+"/7.jpeg";
                document.getElementById('obj-8').src="comalis/"+result+"/8.jpeg";
                document.getElementById('artist-1').src="comali/"+comali_list[result][0]+".jpeg";
                document.getElementById('artist-2').src="comali/"+comali_list[result][1]+".jpeg";
                document.getElementById('artist-3').src="comali/"+comali_list[result][2]+".jpeg";
                document.getElementById('artist-4').src="comali/"+comali_list[result][3]+".jpeg";
                document.getElementById('artist-5').src="comali/"+comali_list[result][4]+".jpeg";
                document.getElementById('artist-6').src="comali/"+comali_list[result][5]+".jpeg";
                document.getElementById('artist-7').src="comali/"+comali_list[result][6]+".jpeg";
                document.getElementById('artist-8').src="comali/"+comali_list[result][7]+".jpeg";

            }
        }
    }
    async function GetValue(chosen)
    {
        var arr = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15];
        var random = arr[Math.floor(Math.random() * arr.length)];
            if(document.getElementById(random.id).disabled == true)
            {
                GetValue(chosen);
            }
            else
            {
                document.getElementById(random.id).disabled = true;
                flag=true;
                count++;
                turn.innerHTML= document.getElementById('username').value + "'s turn!";
                var comalichosen = document.getElementById(random.id).innerText;
                if(ingredients[choosenchoice][dishid]["correct"].includes(comalichosen))
                {
                    finalresult = finalresult+1;
                    document.getElementById(random.id).style.opacity = "1";
                    document.getElementById(random.id).style.background='#00ff00';
                }
                else
                {
                    document.getElementById(random.id).style.opacity = "1";
                    document.getElementById(random.id).style.background='#FF0000';
                }
                // code for creating ribbon for comali
                var vl1 = random.id+'8';
                var vl2 = random.id+'9';
                document.getElementById(vl1).className = 'ribbon-wrapper';
                document.getElementById(vl2).className = 'ribbon';
                document.getElementById(vl2).innerText = "Comali";
                // Ribbon code end
                if(count == 10)
                {
                    turn.innerHTML="Game over!";
                    const sleep = ms => new Promise(res => setTimeout(res, ms));
                    await sleep(500);
                    var scrolltoscore = document.getElementById("scrolltoscore");
                    scrolltoscore.style.display="block";
                    document.getElementById("scoremessage").innerHTML = "Game over! Step out of the Kitchen!";
                }
            }
    }

    function correctans(chosen)
    {
        if(ingredients[choosenchoice][dishid]["correct"].includes(chosen))
        {
                    finalresult = finalresult+1;
                    document.getElementById(chosenid).style.opacity = "1";
                    document.getElementById(chosenid).style.background='#00ff00';
        }
        else
        {
                    document.getElementById(chosenid).style.opacity = "1";
                    document.getElementById(chosenid).style.background='#FF0000';
        }
    }
    var count = 0;
    function buttondisabling(clicked_id)
    {
        var btn = document.getElementById(clicked_id);
        btn.disabled = true;
    }

    async function ingredientControl(clicked_id)
    {

        if(flag==true)
        {
            var chosen = document.getElementById(clicked_id).innerText;
            chosenid = clicked_id;
            count++;
            buttondisabling(clicked_id);
            correctans(chosen);
            // code for creating ribbon
            var vl1 = clicked_id+'8';
            var vl2 = clicked_id+'9';
            document.getElementById(vl1).className = 'ribbon-wrapper';
            document.getElementById(vl2).className = 'ribbon';
            document.getElementById(vl2).innerText = "You";
            // Ribbon code end
            flag=false;
            const sleep = ms => new Promise((resolve,reject) => setTimeout(resolve, ms));
            await sleep(500);
            turn.innerHTML = "Comali's turn!";
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
            await sleep(1000);
            modal.style.display = "none";
            GetValue(chosen);
            clearTimeout(sleep);
            await sleep(500);
            var yourmodal = document.getElementById("yourturnmodal");
            document.getElementById("userpopturn").innerHTML = document.getElementById('username').value + "'s turn!";
            yourmodal.style.display = "block";
            await sleep(1000);
            yourmodal.style.display = "none";
        }
        else
        {

        }
    }

    function displayscore(finalresult)
    {
            const totalCount = document.getElementById("score");
            if (document.getElementById('ques')) {

                if (document.getElementById('ques').style.display == 'none' && count > 0) {
                    document.getElementById('ques').style.display = 'block';
                    document.getElementById('final').style.display = 'none';
                    totalCount.innerHTML = finalresult+'/10';
                }
                else if(count>0){

                    document.getElementById('ques').style.display = 'none';
                    document.getElementById('final').style.display = 'block';

                    totalCount.innerHTML = finalresult+'/10';
                    document.getElementById("name").innerHTML = "Hope you had good time cooking "+ document.getElementById("username").value;
                    var element = document.getElementById("final");
                    element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                    });
                }
            }
    }
    async function refresh()
    {
        if(data==1)
        {
            themetoturn.classList.toggle("is-flipped");
        }
        data=0;
        iscomalichoosen=false;

        var t = document.getElementById('themes');
        var theme = ["Schools","Vijay_TV","Sweet","Cartoons","Colors","Actors"]
        result = theme[Math.floor(Math.random() * theme.length)];
        if(previousresult == result)
        {
            refresh();
        }
        else
        {
            t.innerHTML = "Theme : " +result;
            previousresult = result;
            document.getElementById('obj-1').src="comalis/"+result+"/1.jpeg";
            document.getElementById('obj-2').src="comalis/"+result+"/2.jpeg";
            document.getElementById('obj-3').src="comalis/"+result+"/3.jpeg";
            document.getElementById('obj-4').src="comalis/"+result+"/4.jpeg";
            document.getElementById('obj-5').src="comalis/"+result+"/5.jpeg";
            document.getElementById('obj-6').src="comalis/"+result+"/6.jpeg";
            document.getElementById('obj-7').src="comalis/"+result+"/7.jpeg";
            document.getElementById('obj-8').src="comalis/"+result+"/8.jpeg";
            document.getElementById('artist-1').src="comali/"+comali_list[result][0]+".jpeg";
            document.getElementById('artist-2').src="comali/"+comali_list[result][1]+".jpeg";
            document.getElementById('artist-3').src="comali/"+comali_list[result][2]+".jpeg";
            document.getElementById('artist-4').src="comali/"+comali_list[result][3]+".jpeg";
            document.getElementById('artist-5').src="comali/"+comali_list[result][4]+".jpeg";
            document.getElementById('artist-6').src="comali/"+comali_list[result][5]+".jpeg";
            document.getElementById('artist-7').src="comali/"+comali_list[result][6]+".jpeg";
            document.getElementById('artist-8').src="comali/"+comali_list[result][7]+".jpeg";
            var element = document.getElementById("Div2");
                    element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                    });
        }
    }

function rules(cdid)
{
    var modal2 = document.getElementById("myModal2");
    modal2.style.display = "block";
    chosendishid = cdid;
}
function checkcomali()
{
    if(iscomalichoosen == false)
    {
        var nocomali = document.getElementById("nocomali");
        nocomali.style.display = "block";
        document.getElementById("nocomalichosen").innerHTML = "Please choose your comali to proceed!";
    }
    else
    {
        displaywheel();
    }
}
function displaywheel()
{
    if (document.getElementById('Div2'))
    {
        if (document.getElementById('Div2').style.display == 'none') {
            document.getElementById('Div2').style.display = 'block';
            document.getElementById('wheel').style.display = 'none';
        }
        else{

            document.getElementById('Div2').style.display = 'none';
            document.getElementById('wheel').style.display = 'block';
            var element = document.getElementById("wheel");
            element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
            });

            var theWheel = new Winwheel({
            'outerRadius'     : 163,        // Set outer radius so wheel fits inside the background.
            'innerRadius'     : 57,         // Make wheel hollow so segments don't go all way to center.
            'textFontSize'    : 12,
            'textAlignment'   : 'left',    // Align text to outside of wheel.
            'numSegments'     : 8,         // Specify number of segments.
            'segments'        :             // Define segments including colour and text.
            [                               // font size and test colour overridden on backrupt segments.
            {'fillStyle' : '#ee1c24', 'text' : 'SouthIndian'},
            {'fillStyle' : '#3cb878', 'text' : 'NorthIndian'},
            {'fillStyle' : '#f26522', 'text' : 'StreetFoods'},
            {'fillStyle' : '#f6989d', 'text' : 'Chinese'},
            {'fillStyle' : '#fff200', 'text' : 'Italian'},
            {'fillStyle' : '#00aef0', 'text' : 'Dessert'},
            {'fillStyle' : '#f6989d', 'text' : 'Starters'},
            {'fillStyle' : '#a186be', 'text' : 'NonVeg'}
            ],
            'animation' :           // Specify the animation to use.
            {
                'type'     : 'spinToStop',
                'duration' : 10,    // Duration in seconds.
                'spins'    : 3,     // Default number of complete spins.
                'callbackFinished' : alertPrize,
                'callbackSound'    : playSound,   // Function to call when the tick sound is to be triggered.
                'soundTrigger'     : 'pin'        // Specify pins are to trigger the sound, the other option is 'segment'.
            },
            'pins' :				// Turn pins on.
            {
                'number'     : 24,
                'fillStyle'  : 'silver',
                'outerRadius': 4,
            }
        });
        }
    }
}
function playSound()
        {
            var audio = new Audio('audio/tick.mp3');
            // Stop and rewind the sound if it already happens to be playing.
            audio.pause();
            audio.currentTime = 0;

            // Play the sound.
            audio.play();
        }

        // Vars used by the code in this page to do power controls.

                    // -------------------------------------------------------
        // Click handler for spin button.
        // -------------------------------------------------------
        // function checkSpin()
        // {

        // }
        function startSpin()
        {
            var theWheel = new Winwheel({
                'outerRadius'     : 163,        // Set outer radius so wheel fits inside the background.
            'innerRadius'     : 57,         // Make wheel hollow so segments don't go all way to center.
            'textFontSize'    : 12,
            'textAlignment'   : 'left',    // Align text to outside of wheel.
            'numSegments'     : 8,         // Specify number of segments.
            'segments'        :             // Define segments including colour and text.
            [                               // font size and test colour overridden on backrupt segments.
            {'fillStyle' : '#ee1c24', 'text' : 'SouthIndian'},
            {'fillStyle' : '#3cb878', 'text' : 'NorthIndian'},
            {'fillStyle' : '#f26522', 'text' : 'StreetFoods'},
            {'fillStyle' : '#f6989d', 'text' : 'Chinese'},
            {'fillStyle' : '#fff200', 'text' : 'Italian'},
            {'fillStyle' : '#00aef0', 'text' : 'Dessert'},
            {'fillStyle' : '#f6989d', 'text' : 'Starters'},
            {'fillStyle' : '#a186be', 'text' : 'NonVeg'}
            ],
            'animation' :           // Specify the animation to use.
            {
                'type'     : 'spinToStop',
                'duration' : 10,    // Duration in seconds.
                'spins'    : 3,     // Default number of complete spins.
                'callbackFinished' : alertPrize,
                'callbackSound'    : playSound,   // Function to call when the tick sound is to be triggered.
                'soundTrigger'     : 'pin'        // Specify pins are to trigger the sound, the other option is 'segment'.
            },
            'pins' :				// Turn pins on.
            {
                'number'     : 24,
                'fillStyle'  : 'silver',
                'outerRadius': 4,
            }
        });
            var wheelPower    = 0;

            document.getElementById('spin_button').className = "clickable";
            if (wheelSpinning == false) {

                wheelSpinning = true;
                if (wheelPower == 1) {
                    theWheel.animation.spins = 2;
                } else if (wheelPower == 2) {
                    theWheel.animation.spins = 2;
                } else if (wheelPower == 3) {
                    theWheel.animation.spins = 2;
                }
                document.getElementById('spin_button').src       = "img/spin_on.png";
                document.getElementById('spin_button').className = "";
                theWheel.startAnimation();

            }
            else
            {
                var spinagain = document.getElementById("spinagain");
                spinagain.style.display = "block";
                document.getElementById("spun").innerHTML = "You have spun already!";
            }
        }
        function scrolltospin()
        {
            var spinagain = document.getElementById("spinagain");
            spinagain.style.display = "none";
        }
        // -------------------------------------------------------
        // Function for reset button.
        // -------------------------------------------------------
        function resetWheel()
        {
            theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
            theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
            theWheel.draw();                // Call draw to render changes to the wheel.
            document.getElementById('spin_button').className = "clickable";

            // document.getElementById('pw1').className = "";  // Remove all colours from the power level indicators.
            // document.getElementById('pw2').className = "";
            // document.getElementById('pw3').className = "";

            wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
        }

        // -------------------------------------------------------
        // Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters.
        // -------------------------------------------------------
        function alertPrize(indicatedSegment)
        {
                var scrolltodish = document.getElementById("scrolltodish");
                scrolltodish.style.display="block";
                document.getElementById("spinmessage").innerHTML ="Hurray! You gonna cook " + indicatedSegment.text+" today ";
                spinans = indicatedSegment.text;
        }
        function displaydish(choice)
        {
            if (document.getElementById('wheel').style.display == 'none')
            {
                document.getElementById('wheel').style.display = 'block';
                document.getElementById('dishes').style.display = 'none';
            }
            else {

                choosenchoice = choice;
                document.getElementById('wheel').style.display = 'none';
                document.getElementById('dishes').style.display = 'block';
                var element = document.getElementById("dishes");
                element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
                });
                document.getElementById('dish1').innerText = cuisines[choice][0];
                document.getElementById('dish2').innerText = cuisines[choice][1];
                document.getElementById('dish3').innerText = cuisines[choice][2];
                document.getElementById('dish4').innerText = cuisines[choice][3];
                document.getElementById('img1').src="cuisines/"+choice+"/1.*";
                document.getElementById('img2').src="cuisines/"+choice+"/2.jpeg";
                document.getElementById('img3').src="cuisines/"+choice+"/3.jpeg";
                document.getElementById('img4').src="cuisines/"+choice+"/4.jpeg";
            }
        }

        function displayingredients(id)
        {
            if (document.getElementById('dishes'))
            {
                if (document.getElementById('dishes').style.display == 'none') {
                document.getElementById('dishes').style.display = 'block';
                document.getElementById('ques').style.display = 'none';
                }
                else {
                    document.getElementById('dishes').style.display = 'none';
                    document.getElementById('ques').style.display = 'block';
                    document.getElementById('dishname').innerText = "Choose ingredients for "+ cuisines[choosenchoice][id-1];
                    turn.innerHTML= document.getElementById('username').value + "'s turn!";
                    var element = document.getElementById("ques");
                    element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                    });

                    dishid = id;
                    var ingredientslist =
                    {
                        "NorthIndian":
                        {
                            "1": ["Wheat Flour","Urad Dal","Salt","Coconut","Oil","Potato","Chilli","Almonds", "Ginger Paste","Tamarind","Coriander","Garam Masala","Green Gram","Carom Seeds","Aamchur"],
                            "2": ["White Pepper", "Maida","Rava","Sugar","Curd","Lemon","Kasuri Methi","Saffron","Bay Leaf","Tomato Puree","Cucumber","Coriander","Cumin","Onion","Banana"],
                            "3": ["Curd","Turmeric","Tamarind", "Chilli Powder","Onion","Milk","Capsicum","Panneer","Coconut","Lemon Juice","Chaat Masala","Sugar","Dry Grapes","Cumin","Oil"],
                            "4": ["Kidney Beans","Bay Leaf","Sugar","Ghee","Tomato","Rava","Chilli Powder","Beetroot","Butter","Fresh Cream","Onion","Black Urad Dal", "Flattened Rice","Salt","Maida"],
                        },
                        "SouthIndian":
                        {
                            "1": ["Chana Dal","Red Chilli", "Milk","Cumin","Onion","Peanuts","Urad Dal","Beans","Tamarind","Cashews","Fenugreek","Toor Dal","Tomato","Wheat","Rice"],
                            "2": ["Anise","Rice","Moong Dal","Ghee","Cashews","Bay Leaf","Asafoetida","Cinnamon","Black Pepper","Tomato","Water","Lemon","Cumin","Turmeric","Curry Leaves"],
                            "3": ["Black Chickpea","Coconut Oil","Curd","Tomato","Water","Onion","Chilli Powder","Chicken","Bengal Gram","Ginger","Puttu Flour","Coconut","Fenugreek","Cardamom","Dry Grapes"],
                            "4": ["Sugar","Urad Dal","Fenugreek","Ginger","Soya Beans","Curry Leaves","Flattened Rice","Maida","Dosa Rice","Coriander","Corn Flour","Onion","Salt","Milk","Oil"],

                        },
                        "StreetFoods":
                        {
                            "1": ["Maida","Coconut","Oil","Clove","Garlic","Ginger","Flattened Rice","Carrot","Sugar","Cabbage","Pepper","Cumin","Onion","Chilli","Milk"],
                            "2": ["Rava","Maida","Kasuri Methi","Coriander","Mint","Cucumber","Potato","Moong Dal","Chaat Masala","Milk","Red Chilli Powder","Honey","Asafoetida","Jaggery","Salt"],
                            "3": ["Butter","Beetroot","Peas","Capsicum","Potato","Lemon","Spinach","Ginger Garlic Paste","Coriander","Chilli Powder", "Flattened Rice","Turmeric","Ground Nut","Bread Roll","Dry Grapes"],
                            "4": ["Honey","Maida","Ajwain","Cumin","Lemon","Potato","Garam Masala","Peas","Sugar","Asafoetida","Milk","Chilli Powder","Rava","Ginger","Oil" ],
                        },
                        "Chinese":
                        {
                            "1": ["Tomato Sauce","Sugar","Vinegar","Capsicum","Sweet Corn","Lemon","Beans","Clove","Carrot","Milk","Garlic","Fish","Onion","Rice","Honey"],
                            "2": ["Fish","Milk","Rice","Almonds","Vinegar","Cucumber","Nori Sheets","Honey","Avocados","Carrot","Soy Sauce","Panneer","Asafoetida","Wasabi","Onion"],
                            "3": ["Cauli Flower","Oil","Clove","Sugar","Ginger","Onion","Chilli Sauce","Dry Grapes","Vinegar","Pepper","Chilli","Cashews","Corn Flour","Fenugreek","Milk"],
                            "4": ["Noodles","Corn Flour","Cabbage","Capsicum","Carrot","Honey","Beans","Tomato Sauce","Vermicelli","Vinegar","Soy Sauce","Pepper Powder","Curd","Bean Sprouts","Spinach"],
                        },
                        "Italian":
                        {
                            "1": ["Pasta","Rice","Sweet Corn","Wheat","Butter","Garam Masala","Cucumber","Cheese","Tomato Puree","Lemon","Capsicum","Turmeric","Carrot","Moong Dal","Ginger"],
                            "2": ["Maida","Cheese","Wine","Oregano","Chilli Flakes","Lemon","Yeast","Rava","Capsicum","Baking Powder","Mozzarella","Tomato","Flattened Rice","Coconut","Onion"],
                            "3": ["Olive Oil","Vermicelli","Garlic","Italian Seasoning","Milk","Vinegar","Cheese","Flattened Rice","Noodles","Wheat","Dry grapes","Tomato","Beetroot","Oregano","Egg"],
                            "4": ["Ground nut","Egg","Cheese","Bread","Coconut","Onion","Milk","Garlic","Jaggery","Pepper Powder","Bacon","Tamarind","Tomato Sauce","Tomato","Anise"],
                        },
                        "Dessert":
                        {
                            "1": ["Salt","Cashews","Cheese","Sugar","Water","Ghee","Cardamom Powder","Silver Vark","Dry Grapes","Almonds","Lemon","Coconut","Saffron","Rose Water","Yogurt"],
                            "2": ["Sugar","Maida","Cardamom","Lemon Juice","Cashews","Baking Powder","Chilli","Milk Powder","Spinach","Ghee","Milk","Cucumber","Oil","Vermicelli","Water"],
                            "3": ["Sugar","Ghee","Maida","Cocoa Powder","Baking Powder","Dry Grapes","Baking Soda","Egg","Milk","Wheat","Vegetable Oil","Vanilla Extract","Spinach","Cream","Cheese"],
                            "4": ["Milk","Cumin","Sugar","Nuts","Cherry","Basil Seeds","Curd","Falooda Sev","Asafoetida","Rose Syrup","Tutti Frutti","Spinach","Strawberry Jelly","Ghee","Vanilla Ice Cream"],
                        },
                        "Starters":
                        {
                            "1": ["Chicken","Oil","Egg","Honey","Bread Crumbs","Yeast","Corn Flour","Anise","Lemon","Garlic Powder","Tomato","Pepper","Asafoetida","Garam Masala","Almonds"],
                            "2": ["Beetroot","Maida","Corn Flour","Cabbage","Capsicum","Milk","Vinegar","Pepper Powder","Lemon","Chilli Sauce","Honey","Oil","Carrot","Cashews","Beans"],
                            "3": ["Milk","Yeast","Honey","Cashews","Sugar","Butter","Maida","Oregano","Spinach","Coriander","Chilli Flakes","Cucumber","Mozzarella","Rava","Garlic"],
                            "4": ["Potato","Cheese","Corn Flour","Maida","Chilli Flakes","Honey","Pepper","Salt","Wheat","Mayonnaise","Garlic Powder","Onion","Bread","Chilli Sauce","Cashews"],
                        },
                        "NonVeg":
                        {
                            "1": ["Cinnamon","Cumin","Ginger Garlic Paste","Curd","Clove","Lemon Juice","Rava","Meat","Basmati Rice","Honey","Saffron","Spinach","Water","Fenugreek","Butter"],
                            "2": ["Pomfret Fish","Cheese","Pepper","Chilli Powder","Almonds","Tomato","Onion","Soy Sauce","Turmeric","Banana Leaf","Coconut Oil","Kasuri Methi","Lemon","Honey","Curry Leaves"],
                            "3": ["Boneless Chicken","Ginger Garlic Paste","Butter","Cashews","Honey","Almonds","Tomato","Maida","Garam Masala","Coriander","Oregano","Soy Sauce","Yogurt","Cream","Asafoetida"],
                            "4": ["Chicken","Asafoetida","Vinegar","Olive Oil","Pepper Powder","Yeast","Clove","Capsicum","Garlic","Salt","Honey","Lemon","Paprika","Thyme","Milk"],
                        }
                    }

                    document.getElementById('d1').innerText = ingredientslist[choosenchoice][id][0];
                    document.getElementById('d2').innerText = ingredientslist[choosenchoice][id][1];
                    document.getElementById('d3').innerText = ingredientslist[choosenchoice][id][2];
                    document.getElementById('d4').innerText = ingredientslist[choosenchoice][id][3];
                    document.getElementById('d5').innerText = ingredientslist[choosenchoice][id][4];
                    document.getElementById('d6').innerText = ingredientslist[choosenchoice][id][5];
                    document.getElementById('d7').innerText = ingredientslist[choosenchoice][id][6];
                    document.getElementById('d8').innerText = ingredientslist[choosenchoice][id][7];
                    document.getElementById('d9').innerText = ingredientslist[choosenchoice][id][8];
                    document.getElementById('d10').innerText = ingredientslist[choosenchoice][id][9];
                    document.getElementById('d11').innerText = ingredientslist[choosenchoice][id][10];
                    document.getElementById('d12').innerText = ingredientslist[choosenchoice][id][11];
                    document.getElementById('d13').innerText = ingredientslist[choosenchoice][id][12];
                    document.getElementById('d14').innerText = ingredientslist[choosenchoice][id][13];
                    document.getElementById('d15').innerText = ingredientslist[choosenchoice][id][14];
                    document.getElementById('ing1').src = "ingredients/"+ingredientslist[choosenchoice][id][0]+".jpeg";
                    document.getElementById('ing2').src = "ingredients/"+ingredientslist[choosenchoice][id][1]+".jpeg";
                    document.getElementById('ing3').src = "ingredients/"+ingredientslist[choosenchoice][id][2]+".jpeg";
                    document.getElementById('ing4').src = "ingredients/"+ingredientslist[choosenchoice][id][3]+".jpeg";
                    document.getElementById('ing5').src = "ingredients/"+ingredientslist[choosenchoice][id][4]+".jpeg";
                    document.getElementById('ing6').src = "ingredients/"+ingredientslist[choosenchoice][id][5]+".jpeg";
                    document.getElementById('ing7').src = "ingredients/"+ingredientslist[choosenchoice][id][6]+".jpeg";
                    document.getElementById('ing8').src = "ingredients/"+ingredientslist[choosenchoice][id][7]+".jpeg";
                    document.getElementById('ing9').src = "ingredients/"+ingredientslist[choosenchoice][id][8]+".jpeg";
                    document.getElementById('ing10').src = "ingredients/"+ingredientslist[choosenchoice][id][9]+".jpeg";
                    document.getElementById('ing11').src = "ingredients/"+ingredientslist[choosenchoice][id][10]+".jpeg";
                    document.getElementById('ing12').src = "ingredients/"+ingredientslist[choosenchoice][id][11]+".jpeg";
                    document.getElementById('ing13').src = "ingredients/"+ingredientslist[choosenchoice][id][12]+".jpeg";
                    document.getElementById('ing14').src = "ingredients/"+ingredientslist[choosenchoice][id][13]+".jpeg";
                    document.getElementById('ing15').src = "ingredients/"+ingredientslist[choosenchoice][id][14]+".jpeg";
                    document.getElementById('comali-turn-img').src = "comali/"+comali_list[result][artistid]+".jpeg";
                }
            }
        }


        function playagain()
        {
            window.location.reload();
            $(window).scrollTop($('#header').offset().top);
        }
        function scrolltosubmit()
        {
            var scrolltosub = document.getElementById("scrollmodal");
            scrolltosub.style.display="none";
            var my_element = document.getElementById("chosencomaliname2");
            my_element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
            });
        }
        function scrolltosubmit2()
        {
            var turnover = document.getElementById("turnover");
            turnover.style.display = "none";
            var my_element = document.getElementById("chosencomaliname2");
            my_element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
            });
        }
        function scrolltotheme()
        {
            var nocomali = document.getElementById("nocomali");
            nocomali.style.display = "none";
            var my_element = document.getElementById("themes");
            my_element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
            });
        }
