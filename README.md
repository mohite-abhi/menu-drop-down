# menu-drop-down

# What is this?

A module published in npmjs with the name 'menu-drop-down', which contains function to create a drop down menu DOM element.

# Installation

`npm i menu-drop-down --save`

Then ..

```
import { createDropDown } from "menu-drop-down";


let dropDown1 = createDropDown("click me", ["item 1", "item 2", "item 3", "item 4"], 2);
let dropDown2 = createDropDown("push this", ["item 5", "item 6", "item 7", "item8"]);

//remember to import script after body tag or it will throw error
document.querySelector("body").appendChild(dropDown1);
document.querySelector("body").appendChild(dropDown2);
```

# Arguments

```
createDropDown(
    nameOfDropDownToShow,
    aListOfNamesForItemsInside,
    [z-index of drop down produced]
)
```
