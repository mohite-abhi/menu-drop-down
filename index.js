function createDropDown(buttonName, listItems, zin = 1) {
  var dropMenuDown = function (params) {
    let itemList = params.target.parentNode.lastElementChild.firstElementChild;
    if (itemList.style.dropped == undefined) {
      itemList.style.dropped = 1;
      itemList.classList.add("dropDownItemsVisible");
    } else {
      itemList.style.dropped = undefined;
      itemList.classList.remove("dropDownItemsVisible");
    }
  };
  (function addRespectiveCss() {
    var css =
      ".dropDown{background-color:cadetblue;width:fit-content;visibility:hidden;width:-moz-fit-content;height:30px;} .dropItemCover{overflow:hidden;} .mainDropDownButton{border-radius:3px;visibility:visible;cursor:pointer;background-color:#f8f9f7;padding:3px;border:1px solid #eadede;} .dropItem:hover{border-color:#57aaf2;} .dropItem{padding:1px;text-align:center;background-color:aliceblue;border:1px solid #2222220a;cursor:pointer;visibility:visible;border-radius:2px;} .mainDropDownButton:hover{border-color:#595959;} .dropDownItems{position:relative;visibility:hidden;bottom:116px;transition:bottom 300ms ease-out;} .dropDownItemsVisible{bottom:0px;}";

    var style = document.createElement("style");

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName("head")[0].appendChild(style);
  })();

  const dropDown = document.createElement("div");
  dropDown.className = "dropDown";
  dropDown.style.cssText =
    "background-color: cadetblue;width: fit-content;visibility: hidden;width: -moz-fit-content;height: 30px;";
  const mainDropDownButton = document.createElement("div");
  mainDropDownButton.className = "mainDropDownButton";
  mainDropDownButton.innerHTML = buttonName;
  mainDropDownButton.style.cssText =
    "border-radius: 3px;visibility: visible;cursor: pointer;background-color: #f8f9f7;padding: 3px;border: 1px solid #eadede;";
  const dropItemCover = document.createElement("div");
  dropItemCover.className = "dropItemCover";
  dropItemCover.style.cssText = "overflow: hidden;";
  const dropDownItems = document.createElement("div");
  dropDownItems.className = "dropDownItems";
  dropDownItems.style.zIndex = zin;

  let i = 0;
  listItems.forEach((element) => {
    const dropItem = document.createElement("div");
    dropItem.innerHTML = element;
    dropItem.className = "dropItem";
    dropItem.id = i++;
    dropItem.onclick = () => {};
    dropDownItems.appendChild(dropItem);
  });
  dropItemCover.appendChild(dropDownItems);
  mainDropDownButton.onclick = dropMenuDown;
  dropDown.appendChild(mainDropDownButton);
  dropDown.appendChild(dropItemCover);

  return dropDown;
}

module.exports.createDropDown = createDropDown;