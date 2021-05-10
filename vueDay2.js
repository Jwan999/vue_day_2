let vue = new Vue({
    el: '#app',
    data: {
        name: '',
        names: [],
        facts: [],
        movies:[],
        amount: 5
    },
    methods: {
        showingName() {
            this.names.push(this.name)
        },

        getRandomFact() {
            let url = `https://cat-fact.herokuapp.com/facts/random`;
            axios.get(url, {
                params: {
                    amount: this.amount,
                    animal_type: "dog"
                }
            }).then((response) => {
                this.facts = response.data;
            });

        },
        getTrendingMovies(){

        }
    },
    created(){
      console.log("Created");
    },
    mounted(){
        console.log("Mounted");
        let url = `https://api.themoviedb.org/3/trending/all/week`;
        axios.get(url,{
            params: {
                api_key: "e6c02eff135212384cf3ef9f1d9a34c4"
            }
        }).then(response => {
            this.movies = response.data.results;
        })
    }
})
