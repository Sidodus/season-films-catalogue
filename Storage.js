class Storage {
    constructor() {
        //        this.gotQuotes = document.getElementById('nav-link-got-quotes')

    } // END OF constructor

    save2Storage(name, value) {

        localStorage.setItem(name, value)
    }

        fetch4rmStorage(data) {
//
//            if (localStorage.getItem('Page Status') === null) {
//
//                // Clear UI InnerHTML
//                ui.clearInnerHtml();
//                // Change Page Heading To Default
//                document.getElementById("catalogue").textContent = 'Season Films Catalogue';
//
//            } else if (localStorage.getItem('Page Status') === 'WallPaper') {
//                // Load GOT Quotes
//                ui.displayGOTQuotes(data.Game_Of_Thrones.GOTQuotes);
//            } else if (localStorage.getItem('Page Status') === 'GOT Quotes') {
//                // Load GOT Quotes
//                ui.displayGOTQuotes(data.Game_Of_Thrones.GOTQuotes);
//            } else if (localStorage.getItem('Page Status') === 'GOT WallPapers') {
//                // Load GOT WallPapers
//                ui.displayGOTWallPapers(data.Game_Of_Thrones.GOTWallpapers);
//            } else if (localStorage.getItem('Page Status') === 'Money Heist WallPapers') {
//                // Load Money Heist WallPapers
//                ui.displayMoneyHeistWallPapers(data.Money_Heist.moneyHeistWallpaper);
//            } else if (localStorage.getItem('Page Status') === 'Sofia The First') {
//                // Loa Sofia The First
//                ui.displaySofiaTheFirstWallPapers(data.Sofia_The_First.Sofia_The_First_Wallpaper);
//                console.log(data.Sofia_The_First.Sofia_The_First_Wallpaper)
//            } else {
//                // Clear UI InnerHTML
//                // Even If Page Status Is Logo/GOT/Money Heist/CopyRight
//                ui.clearInnerHtml();
//                // Change Page Heading To Default
//                document.getElementById("catalogue").textContent = 'Season Films Catalogue';
//            }
        }
} // END OF Storage
