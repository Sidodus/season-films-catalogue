// Initialise GOT
const seasonFilms = new SeasonFilms();
// Initialise UI
const ui = new UI();
// Initialise Storage
const storage = new Storage();

// Logo Link
ui.Logo();

// Insert Year to Footer Copyright
ui.presentDate();

// Insert CopyRight Note
ui.CopyRight();

seasonFilms.getSeasonFilms('API.json')
    .then(data => {

    // Call GOT on Dropdown onClick
    ui.dropdownOnclick(data);
    ui.menuClick(data);
    storage.fetch4rmStorage(data)

})
    .catch(err => {
    console.log(err);
    return err;
});
