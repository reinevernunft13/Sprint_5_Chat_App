const sortBtnList = (btn) => {
    let buttonList = document.getElementById(btn);
    let buttonArray = Array.from(buttonList.getElementsByTagName("BUTTON"))
    let general = buttonArray.shift(); 
    buttonList.append(general);
    buttonArray.sort((a, b) => {
            return a.textContent.localeCompare(b.textContent)
        })
        .forEach(li => buttonList.append(li));
}

