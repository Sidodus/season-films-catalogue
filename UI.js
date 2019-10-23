class UI {
    constructor() {
        this.logo = document.getElementById("logo");

        this.imageFile1 = document.getElementById("image-file1");
        this.imageFile2 = document.getElementById("image-file2");
//        this.imageFile3 = document.getElementById("image-file3");

        this.groupName = document.getElementById("group-name");

//        this.progressBarWidth = document.getElementById("progress-bar-width");

//        this.btnPrevious = document.getElementById("btn-previous");
//        this.btnNext = document.getElementById("btn-next");

        this.dropdownMenu = document.getElementById('dropdown-menu');

        this.catalogueRow = document.querySelector('.catalogue-row');
        this.catalogueCol1 = document.querySelector('.catalogues-col1');
        this.catalogueCol2 = document.querySelector('.catalogues-col2');
        this.catalogueCol3 = document.querySelector('.catalogues-col3');

        this.catalogue = document.getElementById("catalogue");

        this.soundTrack = document.getElementById("sound-track");

        this.hrefGOT = document.querySelector(".href-got");
        this.hrefGOT2 = document.querySelector(".href-got2");

        this.hrefMoneyHeist = document.querySelector(".href-money-heist");
        this.hrefMoneyHeist2 = document.querySelector(".href-money-heist2");

        this.hrefWallpapers = document.querySelector(".href-wallpapers");
        this.hrefWallpapers2 = document.querySelector(".href-wallpapers2");

        this.clearBtn = document.querySelector(".clear-btn");
        this.clearBtn2 = document.querySelector(".clear-btn2");

    } // END OF constructor()


    clearInnerHtml() {
        this.catalogueCol1.style.display = 'block';
        this.catalogueCol2.style.display = 'block';
        this.catalogueCol3.style.display = 'none';
        this.dropdownMenu.style.display = 'block';

        this.imageFile1.innerHTML = '';
        this.imageFile2.innerHTML = '';

        // Remove Soundtrack
        this.soundTrack.setAttribute("src", "");
        this.soundTrack.style.display = 'none';

    } // END OF clearInnerHtml()

    // Logo Link
    Logo() {
        this.logo.addEventListener('click', () => {
            // Hide Catalogue Display
            this.catalogueRow.style.display = 'none';
            // Clear UI InnerHTML
            ui.clearInnerHtml();

            // Save Page Status To Local Storage
            storage.save2Storage('Page Status', 'Logo');

            // Change Page Heading To Default
            this.catalogue.textContent = 'Season Films Catalogue';
        })
    } // END OF LOGO LINK

    // Menu cLICK
    menuClick(data) {

        // Clear UI
        this.clearBtn2.addEventListener('click', () => {
            // Hide Catalogue Display
            this.catalogueRow.style.display = 'none';

            // Clear UI InnerHTML
            ui.clearInnerHtml();

            // Save Page Status To Local Storage
            storage.save2Storage('Page Status', 'Clear Btn');

            // Change Page Heading To Default
            this.catalogue.textContent = 'Season Films Catalogue';
        }); // End Of Clear UI ..............................................

        // MainMenu Buttons ::::::::::::::::::
        // Insert Game Of Thrones Data To UI
        this.hrefGOT2.addEventListener('click', (e) => {
            // Show Catalogue Display
            this.catalogueRow.style.display = 'inline-flex';

            // Clear UI InnerHTML
            ui.clearInnerHtml();

            // Save Page Status To Local Storage
            storage.save2Storage('Page Status', 'GOT');

            ui.display2GOTActors(data.Game_Of_Thrones.got_actors);
            ui.display2GOT2(data.Game_Of_Thrones.GOT2);
        }); // END OF Insert Game Of Thrones Data To UI .........................................

        // Insert Money Heist Data To UI
        this.hrefMoneyHeist2.addEventListener("click", () => {
            // Show Catalogue Display
            this.catalogueRow.style.display = 'inline-flex';

            // Clear UI InnerHTML
            ui.clearInnerHtml();

            // Save Page Status To Local Storage
            storage.save2Storage('Page Status', 'Money Heist');

            ui.display2MoneyHeistActors(data.Money_Heist.money_heist_actors);
            ui.display2MoneyHeistActors2(data.Money_Heist.money_heist_actors2);

        }); // END OF Insert Money Heist Data To UI ................................

        // Insert WallPaper To UI
        this.hrefWallpapers2.addEventListener("click", () => {
            // Show Catalogue Display
            this.catalogueRow.style.display = 'inline-flex';

            // Save Page Status To Local Storage
            storage.save2Storage('Page Status', 'WallPaper');

            UI.prototype.wallPaperCall(data);
        })
    } // END OF MENU cLICK


    // dROPDOWN cLICK
    dropdownOnclick(data) {

        // Clear UI
        this.clearBtn.addEventListener('click', () => {
            // Hide Catalogue Display
            this.catalogueRow.style.display = 'none';

            // Clear UI InnerHTML
            ui.clearInnerHtml();

            // Save Page Status To Local Storage
            storage.save2Storage('Page Status', 'Clear Btn');

            // Change Page Heading To Default
            this.catalogue.textContent = 'Season Films Actors Catalogue';

        }); // End Of Clear UI ..............................................

        // Insert Game Of Thrones Data To UI
        this.hrefGOT.addEventListener('click', (e) => {
            // Show Catalogue Display
            this.catalogueRow.style.display = 'inline-flex';

            // Clear UI InnerHTML
            ui.clearInnerHtml();

            // Save Page Status To Local Storage
            storage.save2Storage('Page Status', 'GOT');

            ui.display2GOTActors(data.Game_Of_Thrones.got_actors);
            ui.display2GOT2(data.Game_Of_Thrones.GOT2);

        }); // END OF Insert Game Of Thrones Data To UI .........................................

        // Insert Money Heist Data To UI
        this.hrefMoneyHeist.addEventListener("click", () => {
            // Show Catalogue Display
            this.catalogueRow.style.display = 'inline-flex';

            // Clear UI InnerHTML
            ui.clearInnerHtml();

            // Save Page Status To Local Storage
            storage.save2Storage('Page Status', 'Money Heist');

            ui.display2MoneyHeistActors(data.Money_Heist.money_heist_actors);
            ui.display2MoneyHeistActors2(data.Money_Heist.money_heist_actors2);

        }); // END OF Insert Money Heist Data To UI .........................................................

        // Insert WallPapers To UI
        this.hrefWallpapers.addEventListener("click", () => {
            // Show Catalogue Display
            this.catalogueRow.style.display = 'inline-flex';

            // Save Page Status To Local Storage
            storage.save2Storage('Page Status', 'WallPaper');

            UI.prototype.wallPaperCall(data)

        }) // Insert WallPapers To UI .............................................

    } // END OF dROPDOWN cLICK()


    // Call Display WallPaper
    wallPaperCall(data){

        // Clear UI InnerHTML
        ui.clearInnerHtml();
        ui.catalogueCol1.style.display = 'none';
        ui.catalogueCol2.style.display = 'none';
        ui.catalogueCol3.style.display = 'block';

        // Change WallPaper Page Header
        document.getElementById("catalogue").textContent = 'Season Films WallPaper Catalogue...';

        // Make GOT Quotes The Default Display
        ui.displayGOTQuotes(data.Game_Of_Thrones.GOTQuotes);

        // GOT Quotes Event
        document.getElementById('nav-link-got-quotes').addEventListener('click', function(){

            // Save Page Status To Local Storage
            storage.save2Storage('Page Status', 'GOT Quotes');

            ui.displayGOTQuotes(data.Game_Of_Thrones.GOTQuotes);
        })

        // GOT WallPaper Event
        document.getElementById('nav-link-got-wallpapers').addEventListener('click', function(){

            // Save Page Status To Local Storage
            storage.save2Storage('Page Status', 'GOT WallPapers');

            ui.displayGOTWallPapers(data.Game_Of_Thrones.GOTWallpapers);
        })

        // Money Heist WallPaper Event
        document.getElementById('nav-link-money-heist-wallpapers').addEventListener('click', function(){

            // Save Page Status To Local Storage
            storage.save2Storage('Page Status', 'Money Heist WallPapers');

            ui.displayMoneyHeistWallPapers(data.Money_Heist.moneyHeistWallpaper);
        })

        // Sofia The First WallPaper Event
        document.getElementById('nav-link-sofia-the-first-wallpapers').addEventListener('click', function(){

            // Save Page Status To Local Storage
            storage.save2Storage('Page Status', 'Sofia The First');

            ui.displaySofiaTheFirstWallPapers(data.Sofia_The_First.Sofia_The_First_Wallpaper);
        })
    } // END OF Call Display WallPaper

    // Lazy Load Images
    lazyLoadImg(target) {
        const obs = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-lazy');

                    img.setAttribute('src', src);
                    img.classList.add('fadein');

                    observer.disconnect();
                }
            })
        })
        obs.observe(target);
    } // END OF lazyLoadImg

    // Display GOT Actors
    display2GOTActors(data) {

        // Change Page Header
        this.catalogue.textContent = 'Game Of Thrones Actors Catalogue';

        // ............Shove......IMG................................
        data.sort(function(a,b){
            return 0.5 - Math.random();
        })
        // ...........................................................

        data.forEach(dataOutput => {

            // Create A Div
            let imageFile1Div = document.createElement("div");
            // Set Div Class Attribute
            imageFile1Div.classList = 'card card-body mb-3 db';

            // Append HTTML To Div
            imageFile1Div.innerHTML += `
<div class="row pt-2 pb-2" style="background-color: mediumpurple">
    <div class="col-sm-8">
        <img class="card-img img-fluid mt-2 mb-2 lazy-loading" data-lazy="${dataOutput.image}">
    </div>
    <div class="col-sm-4 bg-info">
        <ul class="list-group mt-5" >
            <li class="list-group-item" style="background-color: skyblue"> <b> Stage Name: </b> ${dataOutput.stage_name}</li>
            <li class="list-group-item" style="background-color: lightblue"><b> Name: </b> ${dataOutput.name}</li>
            <li class="list-group-item" style="background-color: skyblue"><b> Gender: </b> ${dataOutput.gender}</li>
            <li class="list-group-item" style="background-color: lightblue"><b> Season Film: </b> ${dataOutput.movie}</li>
        </ul>
    </div>
</div>
`;
            // Append Div To UI
            this.imageFile1.appendChild(imageFile1Div);

            // Implement LazyLoad
            let lazyTarget = document.querySelectorAll('.lazy-loading');
            lazyTarget.forEach(ui.lazyLoadImg)

        });

    } // END OF Display GOT Actors ......................................................


    // Display GOT2
    display2GOT2(data) {

        // ............Shove......IMG................................
        data.sort(function(a,b){
            return 0.5 - Math.random();
        })
        // ...........................................................

        data.forEach(dataOutput => {

            // Create A Div
            let imageFile1Div2 = document.createElement("div");
            // Set Div Class Attribute
            imageFile1Div2.classList = 'card card-body mb-3 db2';

            // Append HTTML To Div
            imageFile1Div2.innerHTML += `
<div class="row pt-2 pb-2" style="background: lightblue">
    <div class="col-sm-12">
<img class="card-img img-fluid mt-1 mb-2 lazy-loading" data-lazy="${dataOutput.image}">
    </div>
    <br>
    <div class="col-sm-12">
        <ul class="list-group">
            <li class="list-group-item" style="background: lightgreen"> <b> Stage Name: </b> ${dataOutput.stage_name}</li>
            <li class="list-group-item bg-success"><b> Name: </b> ${dataOutput.name}</li>
            <li class="list-group-item" style="background: lightgreen"><b> Gender: </b> ${dataOutput.gender}</li>
            <li class="list-group-item bg-success"><b> Season Film: </b> ${dataOutput.movie}</li>
        </ul>
    </div>
</div>
`;
            // Append Div To UI
            this.imageFile2.appendChild(imageFile1Div2);

            // Implement LazyLoad
            let lazyTarget = document.querySelectorAll('.lazy-loading');
            lazyTarget.forEach(ui.lazyLoadImg)

            // Append Sound Track
            this.soundTrack.style.display = 'block';
            this.soundTrack.setAttribute("src", "SeasonFilmsCasts/GOT/GOT2/Game_of_Thrones_Main_Title_sample.ogg");
        });

    } // END OF Display GOT2 .........................................................


    // Display To Money Heist Actors
    display2MoneyHeistActors(data) {

        // Change Page Header
        this.catalogue.textContent = 'Money Heist Actors Catalogue';

        // ............Shove......IMG................................
        data.sort(function(a,b){
            return 0.5 - Math.random();
        })
        // ...........................................................


        data.forEach(dataOutput => {

            // Create A Div
            let imageFile1Div = document.createElement("div");
            // Set Div Class Attribute
            imageFile1Div.classList = 'card card-body mb-3 db';

            // Append HTTML To Div
            imageFile1Div.innerHTML += `
<div class="row pt-2 pb-2" style="background-color: lightgray">
    <div class="col-sm-3">
<img class="card-img img-fluid mt-2 mb-2 lazy-loading" data-lazy="${dataOutput.image}">
    </div>
    <div class="col-sm-9 bg-info">
        <ul class="list-group mt-3" >
            <li class="list-group-item" style="background-color: skyblue"> <b> Stage Name: </b> ${dataOutput.stage_name}</li>
            <li class="list-group-item" style="background-color: lightblue"><b> Name: </b> ${dataOutput.name}</li>
            <li class="list-group-item" style="background-color: skyblue"><b> Gender: </b> ${dataOutput.gender}</li>
            <li class="list-group-item" style="background-color: lightblue"><b> Season Film: </b> ${dataOutput.movie}</li>
        </ul>
    </div>
</div>
`;
            // Append Div To UI
            this.imageFile1.appendChild(imageFile1Div);

            // Implement LazyLoad
            let lazyTarget = document.querySelectorAll('.lazy-loading');
            lazyTarget.forEach(ui.lazyLoadImg)

        });

    } // END OF DISPLAY TO MONEY HEIST ACTORS ....................................................


    // // Display To Money Heist Actors2
    display2MoneyHeistActors2(data) {

        // ............Shove......IMG................................
        data.sort(function(a,b){
            return 0.5 - Math.random();
        })
        // ...........................................................


        data.forEach(dataOutput => {

            // Create A Div
            let imageFile1Div2 = document.createElement("div");
            // Set Div Class Attribute
            imageFile1Div2.classList = 'card card-body mb-3 db2';

            // Append HTTML To Div
            imageFile1Div2.innerHTML += `
<div class="row pt-2 pb-2" style="background: lightblue">
    <div class="col-sm-12">
<img class="card-img img-fluid mt-1 mb-2 lazy-loading" data-lazy="${dataOutput.image}" style="width: 360px">
    </div>
    <br>
    <div class="col-sm-12">
        <ul class="list-group">
            <li class="list-group-item" style="background: lightgreen"> <b> Stage Name: </b> ${dataOutput.stage_name}</li>
            <li class="list-group-item bg-success"><b> Name: </b> ${dataOutput.name}</li>
            <li class="list-group-item" style="background: lightgreen"><b> Gender: </b> ${dataOutput.gender}</li>
            <li class="list-group-item bg-success"><b> Season Film: </b> ${dataOutput.movie}</li>
        </ul>
    </div>
</div>
`;
            // Append Div To UI
            this.imageFile2.appendChild(imageFile1Div2);

            // Implement LazyLoad
            let lazyTarget = document.querySelectorAll('.lazy-loading');
            lazyTarget.forEach(ui.lazyLoadImg)

            // Append Sound Track
            this.soundTrack.style.display = 'block';
            this.soundTrack.setAttribute("src", "SeasonFilmsCasts/MoneyHeist/MoneyHeist2/Bella%20Ciao%20Money%20Heist.ogg");
        });

    } // END OF DISPLAY TO MONEY HEIST ACTORS2 ..................................................

    // Create Image Iterator
    imageIterator(imageCount) {
        let indexCount = 0;

        return {
            next: function () {
                return indexCount < imageCount.length ? {
                    value: imageCount[indexCount++],
                    done: false
                } : {
                    done: true
                }
            }, // END OF next

            previous: function () {
                return indexCount !== imageCount.length || indexCount === imageCount.length ? {
                    value: imageCount[indexCount--],
                    done: false
                } : {
                    done: true
                }
            } // END OF previous
        } // END OF return
    } // END OF imageIterator


    progressBar(dataCount) {
        let indexCount = 1;

        return {
            progerssBarPlus: function(){
                return indexCount < dataCount.length || indexCount === dataCount.length ? {
                    percentage: function(){return Math.floor((indexCount++/dataCount.length*100)*1)},
                    done: false } :
                    {done: true}
            }, // END OF progressBarPlus

            progerssBarMinus: function(){
                return indexCount !== dataCount.length || indexCount === dataCount.length ? {
                    percentage: function(){return Math.floor((indexCount--/dataCount.length*100)*1)},
                    done: false } :
                    {done: true}
            }, // END OF progressBarMinus

            // ProgressBar Number %
            progerssBarPlusNum: function(){
                return indexCount !== dataCount.length || indexCount === dataCount.length ? {
                    percentage: function(){return Math.floor((indexCount++/dataCount.length*100)*1)},
                    done: false } :
                    {done: true}
            }, // END OF progressBarPlusNum

            progerssBarMinusNum: function(){
                return indexCount !== dataCount.length || indexCount === dataCount.length ? {
                    percentage: function(){return Math.floor((indexCount--/dataCount.length*100)*1)},
                    done: false } :
                    {done: true}
            } // END OF progerssBarMinusNum
        } // END OF return
    } // END OF progressBar


    // Button Iteration
    btnIteration(data){

        let allImages = [];
        data.forEach(function (image) {
            let imageFile = image.image;

            document.getElementById("group-name").textContent = image.Title;

            allImages.push(imageFile);
        })
//        console.log(allImages);

        allImages.sort(function(a,b){
            return 0.5 - Math.random();
        })

        let imageIteration = ui.imageIterator(allImages);
        let progressiveBar = ui.progressBar(allImages);
        let progressiveBarNum = ui.progressBar(allImages);

        // Display First Image
        document.getElementById("image-file3").classList.add('lazy-loading');
        document.getElementById("image-file3").setAttribute('data-lazy', imageIteration.next().value);

        // Implement LazyLoad
        let lazyTarget = document.querySelectorAll('.lazy-loading');
        lazyTarget.forEach(ui.lazyLoadImg);

        // ......Reset......ProgressBar....&....Num.....On....btnIteration...................//
        // ProgressBarPlus .......................
        let progressiveBarWidthPlus = progressiveBar.progerssBarPlus()
        let progressiveBarWidthNumPlus = progressiveBarNum.progerssBarPlusNum()

        document.getElementById("progress-bar-width").style.width = `${progressiveBarWidthPlus.percentage()}%`;

        document.getElementById("progress-bar-width").textContent = `${progressiveBarWidthNumPlus.percentage()}%`;
        // ......Reset......ProgressBar....&....Num.....On....btnIteration...................//

        // Next Button
        document.getElementById("btn-next").addEventListener('click', function () {
            let imageIterationValue = imageIteration.next().value
            if (imageIterationValue !== undefined) {
                document.getElementById('image-file3').setAttribute('data-lazy', imageIterationValue);

                // Implement LazyLoad
                let lazyTarget = document.querySelectorAll('.lazy-loading');
                lazyTarget.forEach(ui.lazyLoadImg);
            } else {
                window.location.reload();

                // GET TE STATE OF STORAGE AND LOAD PRESENT STATE::::::::::::::::::::::::::::::::::::
                // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//                storage.fetch4rmStorage();
                // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
                // ::::::::::::::::::::::::::::::::::::::::::::
            }

            document.getElementById("progress-bar-width").style.width = `${progressiveBarWidthPlus.percentage()}%`;

            document.getElementById("progress-bar-width").textContent = `${progressiveBarWidthNumPlus.percentage()}%`
        })

        // Previous Button
        document.getElementById("btn-previous").addEventListener('click', function () {
            let imageIterationValue = imageIteration.previous().value
            if(imageIterationValue !== undefined){
                document.getElementById('image-file3').setAttribute('data-lazy', imageIterationValue);

                // Implement LazyLoad
                let lazyTarget = document.querySelectorAll('.lazy-loading');
                lazyTarget.forEach(ui.lazyLoadImg);
            }else{
                window.location.reload();

                // GET TE STATE OF STORAGE AND LOAD PRESENT STATE::::::::::::::::::::::::::::::::::::
                // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//                storage.fetch4rmStorage();
                // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
                // ::::::::::::::::::::::::::::::::::::::::::::
            };

            // ProgressBarMinus .......................
            let progressiveBarWidthMinus = progressiveBar.progerssBarMinus()
            let progressiveBarWidthNumMinus = progressiveBarNum.progerssBarMinusNum()

            document.getElementById("progress-bar-width").style.width = `${progressiveBarWidthMinus.percentage()}%`

            document.getElementById("progress-bar-width").textContent = `${progressiveBarWidthNumMinus.percentage()}%`
        })
    } // END OF Button Iteration


    // Display GOT Quotes
    displayGOTQuotes(data) {

        UI.prototype.btnIteration(data);

        // Append Sound Track
        this.soundTrack.style.display = 'block';
        this.soundTrack.setAttribute("src", "SeasonFilmsCasts/GOT/GOT2/Game_of_Thrones_Main_Title_sample.ogg");

    } // END OF Display GOT Quotes ....................................................


    // Display To GOT Wallpapers
    displayGOTWallPapers(data) {

        ui.btnIteration(data);

        // Append Sound Track
        this.soundTrack.style.display = 'block';
        this.soundTrack.setAttribute("src", "SeasonFilmsCasts/GOT/GOT2/Game%20of%20Thrones%20S8%20-%20A%20Song%20of%20Ice%20and%20Fire%20-%20Ramin%20Djawadi%20(Official%20Video).ogg");

    } // END OF Display To GOT Wallpapers ..........................................................


    // Display To Money Heist Wallpapers
    displayMoneyHeistWallPapers(data) {

        UI.prototype.btnIteration(data);

        // Append Sound Track
        this.soundTrack.style.display = 'block';
        this.soundTrack.setAttribute("src", "SeasonFilmsCasts/MoneyHeist/moneyHeistWallpaper/La%20casa%20de%20papel%20-%20My%20Life%20Is%20Going%20On.ogg");

    } //END OF Display To Money Heist Wallpapers .............................


    // Display To Sofia The First Wallpapers
    displaySofiaTheFirstWallPapers(data) {

        UI.prototype.btnIteration(data);

        // Append Sound Track
        this.soundTrack.style.display = 'block';
        this.soundTrack.setAttribute("src", "SeasonFilmsCasts/SofiaD1st/SofiaWallpaper/Sofia%20D%201st.ogg");

    } // END OF Display To Sofia The First Wallpapers .....................................


    // Insert Year Into Copyright Footer
    presentDate() {
        const startYear = document.getElementById('startYear');
        const presentDateSpan = document.getElementById("present-date");

        const presentDateYear = new Date().getFullYear();
        const startYearNumber = Number(startYear.textContent);

        if(startYearNumber === presentDateYear){
            presentDateSpan.appendChild(document.createTextNode(''));
        }else{
            presentDateSpan.appendChild(document.createTextNode(`- ${presentDateYear}`));
        };

    } //END OF presentDate() ..............................................................

    // CopyRight
    CopyRight() {
        document.getElementById('copyRight').addEventListener('click', (e) => {

            storage.save2Storage('Page Status', 'CopyRight');

            // Clear UI InnerHTML
            ui.clearInnerHtml();
            ui.catalogueCol1.style.display = 'none';
            ui.catalogueCol2.style.display = 'none';
            ui.catalogueCol3.style.display = 'none';
            this.dropdownMenu.style.display = 'none';

            // Change WallPaper Page Header
            this.catalogue.innerHTML = `
<div class="card">
    <div class="card-header">
        <h5 class="card-title" style="text-align: left; color: black"> CopyRight Note... </h5>
    </div>
    <div class='card-body'>
        <ol style="text-align: left; color: black; font-size: 19px">
            <li class="card-text"> All Pages, Codes, Input{I} & Output(O) Logos are TradeMark Of  Saheed Odulaja </li>
            <ul>
                <li> All Other Libraries & TradeMarks Are Properties Of Their Respective Owners </li>
                <li> All Images And Audio Are Properties Of Their Respective Owners </li>
            </ul>
        </ol>
    </div>
    <div class='card-footer'>
        <p style="color: grey; font-size: 19px"> My 1st Dev Using Vanilla JS </p>
    </div>
</div>
`

            e.preventDefault();
        })
    }

} // END OF UI CLASS .............................................................
