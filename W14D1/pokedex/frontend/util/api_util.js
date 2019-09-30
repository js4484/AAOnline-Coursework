
module.exports = {
    fetchAllPokemon () {
        return $.ajax({
            method: "GET",
            url: "/api/pokemon"
        });
    },
    
    fetchOnePokemon (id) {
        return $.ajax({
            method: "GET",
            url: "/api/pokemon/${id}"
        });
    }

};