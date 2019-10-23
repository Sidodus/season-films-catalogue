class SeasonFilms{

    async getSeasonFilms(url){
        let response = await fetch(url);

        let responseData = await response.json();

        return responseData;
    }
}
