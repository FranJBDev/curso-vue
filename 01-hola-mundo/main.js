const app = Vue.createApp({
    data(){
        return {
            user: {
            title: "Hola mundo",
            name: "Gandhyman",
            age: 47,
            movies: ["batman", "siderman", "suerman"],
            pic: "https://cdn.pixabay.com/photo/2022/03/06/13/28/dove-of-peace-7051688_960_720.png"
            }
        };
    }
});
console.log(app)