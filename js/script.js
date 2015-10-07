$(document).ready(function() {

	var images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'];
	var title = ["Peach Paradise Cocktail", "Classic Sangria", "Frozen Strawberry Daiquiri", "Noon Wine", "Cuban Mojitos", "Mango Margaritas", "Winter Smoothie", "Green Ginger Peach Smoothie", "Orange Creamsicle Float", "Watermelon Lemodade Slushie"];

	var recipe = ["7 oz. canned peaches (drained) <br> 1 tbsp. fresh ginger <br> 1 tsp. evaporated milk <br> 3 oz. rum <br> 3 oz pineapple juice <br> 3 oz. orange juice <br> 1 tsp. grenadine <br> 1 tsp. honey <br> 1 maraschino cherry",

	"2 bottles red wine <br> 1 c. Grand Marnier or triple sec <br> 2 c. orange juice <br> 1/2 c. simple syrup <br> 7-Up <br> 1 orange <br> 1 c. strawberries <br> a dash of ground cinnamon",

	"1 c. light rum <br> 3/4 c. lime juice <br> 1/3 c. sugar <br> 1 (16 oz) package frozen whole strawberries", 

	"1/4 c. elderflower concentrate <br> 3 tbsp. sugar <br> 12 large sage leaves <br> 1 bottle sauvignon blanc <br> 2 peaches <br> 1/2 c. raspberries",

	"1 tsp. superfine sugar or simple syrup <br> 2 sprigs fresh mint <br> 6 tbsp. lime juice <br> 2 oz. light rum",

	"2 limes <br> 2 tbsp. coarse sugar <br> 2 20 oz. jars mango chunks, drained <br> 1 1/2 c. tequila <br> 1 1/2 c. triple sec <br> 1/2 c. granulated sugar",

	"2 1/2 c. pineapple juice <br> 2 1/2 c. fresh orange juice <br> 3/4 c. plain yogurt <br> 1 banana <br> 3 tbsp. honey <br> 1/4 tsp. ground cinnamon",

	"2 handfuls baby spinach <br> 1 tsp. grated peeled fresh ginger <br> 2 c. frozen sliced peaches <br> 2 tsp. honey <br> 1 1/4 c. water",

	"2 mandarin oranges <br> 1/4 tsp. vanilla extract <br> 2 scoops vaninna ice cream <br> club soda",

	"4 c. cubed watermelon <br> 1/2 c. sugar <br> 1 large bunch basil - chopped <br> 1/2 c. lemon juice"];

	var instructions = ["Blend ingredients, top with honey and cherry.", 
	"Combine ingredients (except 7Up), keep covered and refrigerate overnight. Add 7Up as needed prior to serving.", 
	"Blend and serve in a chilled glass.", 
	"Stir ingredients, let fruit mascerate 2 hours before serving.",
	"muddle mint and sugar, stir in remaining ingredients with a splash of club soda and serve over ice.",
	"Zest limes and toss with coarse sugar. Blend remaining ingredients, coat rims with lime-sugar mixture. <br> (makes 8 servings)",
	"freeze pineapple and orange juice into ice cube trays. Blend yogurt, honey, banana, and cinnamon. Blend pineapple cubes and top with yogurt mixture. Blend orange juice cube and fill glasses to top. Garnish with cinnamon and orange. <br> (Makes 4 glasses)",
	"Blend and serve.",
	"Supreme the oranges into a small bowl and stir in the vanilla. Pour into a glass and add ice cream and club soda. Serve immediately.",
	"Freeze watermelon on baking sheet. Heat sugar and 1/2 cup water on stovetop; stir in basil and let cool. Strain basil syrup into blender with frozen watermelon and lemon juice. Blend until smooth. <br> (makes 4 small glasses)"];

	var source = ["original recipe at food.com", "original recipe at delish.com", "original recipe at food.com", "original recipe at delish.com", "original recipe at food.com", "original recipe at foodnetwork.com", "original recipe at marthastewart.com", "original recipe at marthastewart.com", "original recipe at marthastewart.com", "original recipe at foodnetwork.com"];


	randomize();

	function randomize() {
		var x = Math.floor(Math.random() * images.length);

		$("#pic").css({"background-image": "url(images/" + images[ x ] + ")"});
		document.getElementById("title").innerHTML = title[ x ];
		document.getElementById("ingredients").innerHTML = recipe[ x ];
		document.getElementById("instructions").innerHTML = instructions[ x ];
		document.getElementById("source").innerHTML = source[ x ];
	}

		$("#refresh").click(function() {
		randomize(); 
	});
	
});