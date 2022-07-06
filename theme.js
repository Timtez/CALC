

    // THEME BACKGROUND COLOR CODE
    const toggleBtns = document.querySelectorAll(".toggleBtn");
    // we used the spread operator to create an array where we can store our btns
    // so we can pass them as arguments to these callbackFns below
    const toggleBtnsArray = [...toggleBtns];
    //foreach loop calls a callback function for each item in the array.
    toggleBtnsArray.forEach(getItem);
    // this function adds an eventlistener to each toggle button
    function getItem(element, index){
        element.addEventListener("click", () =>{
            element.style.opacity = "1";
            
            if(index === index){
                changeTheme(index);
            }

            // grab buttons and filter them, then return any button that does not match the clicked button

            toggleBtnsArray.filter(function (item){
                return item != element;
            }).forEach((item) => {
                item.style.opacity = "0";
            });
        });
    }

    function changeTheme(index){
        if(index === 1){
            document.documentElement.style.setProperty('--bodyColor', '#17062A');
            document.documentElement.style.setProperty('--bodyTxt', '#E2D06B');
            document.documentElement.style.setProperty('--toggleBtn', '#90FEF6');
            document.documentElement.style.setProperty('--switchBg', '#1E0836');
            document.documentElement.style.setProperty('--calc-bg', '#1E0836');
            document.documentElement.style.setProperty('--calc-screen', '#1E0836');
            document.documentElement.style.setProperty('--calc-screenTxt', '#90FEF6');
            document.documentElement.style.setProperty('--calc-headerTxt', '#90FEF6');
            document.documentElement.style.setProperty('--calc-key', '#331B4E');
            document.documentElement.style.setProperty('--calc-keyTxt', '#E2D06B');
            document.documentElement.style.setProperty('--calc-keyHover', '#6B34AC');
            document.documentElement.style.setProperty('--eqBtnHover', '#00DECF');
            document.documentElement.style.setProperty('--specialKeysHover', '#882EB0');
            document.documentElement.style.setProperty('--btnShadow', '#56077C');
        } else if(index === 2){
            document.documentElement.style.setProperty('--bodyColor', '#E6E6E6');
            document.documentElement.style.setProperty('--bodyTxt', 'rgb(24, 21, 21)');
            document.documentElement.style.setProperty('--toggleBtn', '#D13F30');
            document.documentElement.style.setProperty('--switchBg', '#D3CDCD');
            document.documentElement.style.setProperty('--calc-bg', '#D3CDCD');
            document.documentElement.style.setProperty('--calc-screen', '#D3CDCD');
            document.documentElement.style.setProperty('--calc-screenTxt', '#D13F30');
            document.documentElement.style.setProperty('--calc-headerTxt', '#D13F30');
            document.documentElement.style.setProperty('--calc-key', '#E5E4E0');
            document.documentElement.style.setProperty('--calc-keyTxt', '#808080');
            document.documentElement.style.setProperty('--calc-keyHover', 'rgba(201, 49, 74, 0.795)');
            document.documentElement.style.setProperty('--eqBtnHover', '#D13F30');
            document.documentElement.style.setProperty('--specialKeysHover', '#66B3BB');
            document.documentElement.style.setProperty('--btnShadow', 'rgb(43, 41, 41)');
        } else if(index === 0) {
            document.documentElement.style.setProperty('--bodyColor', '#3B4664');
            document.documentElement.style.setProperty('--bodyTxt', 'white');
            document.documentElement.style.setProperty('--toggleBtn', '#D13F30');
            document.documentElement.style.setProperty('--switchBg', '#181F32');
            document.documentElement.style.setProperty('--calc-bg', '#252D44');
            document.documentElement.style.setProperty('--calc-screen', '#181F32');
            document.documentElement.style.setProperty('--calc-screenTxt', 'white');
            document.documentElement.style.setProperty('--calc-headerTxt', 'white');
            document.documentElement.style.setProperty('--calc-key', '#EBE2DB');
            document.documentElement.style.setProperty('--calc-keyTxt', '#808080');
            document.documentElement.style.setProperty('--calc-keyHover', 'white');
            document.documentElement.style.setProperty('--eqBtnHover', '#D13F30');
            document.documentElement.style.setProperty('--specialKeysHover', '#66B3BB');
            document.documentElement.style.setProperty('--btnShadow', 'rgb(43, 41, 41)');
        }
        // return;

    }


