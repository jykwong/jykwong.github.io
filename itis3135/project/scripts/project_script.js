var menu_click;
window.onload = function() {
    const menuItems = [ //The comments are for indexes
        {name: "Shrimp Spring Roll", price: 7.99},//0
        {name: "Pork Pot Sticker", price: 8.99},//1
        {name: "6pc Chicken Wing", price:8.99},//2
        {name: "Crab Rangoon", price: 5.99},//3
        {name: "Edamame", price: 5.99},//4
        {name: "Harcau Shrimp Dumplings", price: 5.99},//5
        {name: "Vegetable Tempura", price: 6.50},//6
        {name: "Salt & Pepper Calamari", price: 8.99},//7
        {name: "Filet Mignon", price: "18.99"},//8
        {name: "Steak", price: 14.99},//9
        {name: "Ribeye", price: "16.50"},//10
        {name: "Chicken", price: 12.99},//11
        {name: "Small Shrimp", price: 12.99},//12
        {name: "Jumbo Shrimp", price: 16.50},//13
        {name: "Lobster", price: 18.50},//14
        {name: "Vegetable Dinner", price: 11.50},//15
        {name: "Steak & Chicken", price: 15.50},//16
        {name: "Steak & Jumbo Shrimp", price: 17.50},//17
        {name: "Steak & Small Shrimp", price: 16.99},//18
        {name: "Steak & Lobster", price: 19.99},//19
        {name: "Ribeye & Chicken", price: 17.50},//20
        {name: "Ribeye & Small Shrimp", price: 17.99},//21
        {name: "Ribeye & Jumbo Shrimp", price: 18.99},//22
        {name: "Ribeye & Lobster", price: 20.99},//23
        {name: "Filet & Chicken", price: 21.99},//24
        {name: "Filet & Small Shrimp", price: 21.99},//25
        {name: "Filet & Jumbo Shrimp", price: 22.99},//26
        {name: "Filet & Lobster", price: 24.99},//27
        {name: "Chicken & Jumbo Shrimp", price: 17.50},//28
        {name: "Chicken & Small Shrimp", price: 18.50},//29
        {name: "Chicken & Lobster", price: 18.99},//30
        {name: "Lobster & Jumbo Shrimp", price: 22.00},//31
        {name: "Lobster & Small Shrimp", price: 21.50},//32
        {name: "Japanese Tempura Udon Bowl", price: 16.50},//33
        {name: "Seafood Udon Bowl", price: 17.00},//34
        {name: "Hong Kong Wonton Egg Noodle Bowl", price: 14.99},//35
        {name: "Vietnamese Beef Rice Noodle Broth(Pho)", price: 15.99},//36
        {name: "Chicken Mushroom Soba Noodle Bowl", price: 14.00},//37
        {name: "Seafood Curry Egg Noodle Bowl", price: 16.99},//38
        {name: "Tum Yum Seafood Mei Fun Bowl", price: 16.99},//39
        {name: "Miso Ginger Pork Ramen Bowl", price: 14.99},//40
        {name: "Pad See Yew(Thai)", price: 13.99},//41
        {name: "Hong Kong Chow Fun", price: 12.99},//42
        {name: "Curry Chow Mei Fun", price: 12.99},//43
        {name: "Chinese Lo Mein", price: 11.99},//44
        {name: "Stir Fry Udon", price: 12.99},//45
        {name: "Double Pan Fried Egg Noodles", price: 13.99},//46
        {name: "Stir Fried Yaki Ramen", price: 13.99},//47
        {name: "Buckwheat Yaki Soba", price: 13.99},//48
        {name: "California Roll", price: 5.99},//49
        {name: "Philadelphia Roll", price: 5.99},//50
        {name: "Dragon Roll", price: 8.99},//51
        {name: "Rainbow Roll", price: 9.99},//52
        {name: "American Dream Roll", price: 8.99},//53
        {name: "Crab Rangoon Roll", price: 9.99},//54
        {name: "Unagi Roll", price: 6.99},//55
        {name: "Tuna Roll", price: 6.99},//56
        {name: "Spicy Tuna Roll", price: 7.50},//57
        {name: "Salmon Roll", price: 6.50},//58
        {name: "Spicy Salmon Roll", price: 7.00},//59
        {name: "Spicy Shrimp Roll", price: 7.00},//60
        {name: "Crispy California Roll", price: 7.99},//61
        {name: "Trust Me Roll", price: 8.99},//62
        {name: "White Tuna Roll", price: 6.99},//63
        {name: "Spicy White Tuna Roll", price: 7.50}//64
    ];
    function saySomething() {
        console.log("Test 123");
    }
    //console.log(menuItems[3].price) outputs 5.99 from Crab Rangoon(index 3) <-- this could work
    menu_click = function(clicked_id) {
        var totalCost;
        var amt;
        //we're using the id to match with the array objects
        var menuLength = menuItems.length;
        var itemIndex;
        for(let i = 0; i < menuLength; i++) {
            if (menuItems[i].name === clicked_id) {
                itemIndex = i;
                console.log(menuItems[i].name);//for testing-- menu item name to console
                console.log(menuItems[i].price)//for testing-- menu item price to console
            }
        }

        
    }
};// end onload