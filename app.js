//const app = Vue.createApp();

//app.mount("#app");
const app = {
    data() {
        return {
            showBooks: true,
            books: [
                {
                    title: "The Final Empire",
                    author: "Brandon Sanderson",
                    age: 45
                },
                {
                    title: "The Name of the Wind",
                    author: "Patrick Rothfuss"
                },
                {
                    title: "The Way of Kings",
                    author: "Brandon Sanderson"
                }
            ],
            data: [12,24,36,48,60],
            x:0,
            y:0
        }
    }, methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, data){ //e is always the event object and is given as the first argument as long as it's not called with an argument
            //to call it with custom args and the event object do this: handleEvent($event, whatever);
            console.log(e, e.type);
            console.log(data);
        },
        handleMousemove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }


    //,
    //template: '<h2>I am the template made in Vue! Doobely Doo {{counter}}</h2>'
}

const vueInstance = Vue.createApp(app);
vueInstance.mount('#app');
