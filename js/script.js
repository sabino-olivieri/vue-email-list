const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            arrayMail: [],
            load: false,
        }
    },

    methods: {
        generateMail() {

            this.arrayMail = []
            this.load = true;

            for (let i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                    const mail = resp.data.response;

                    this.arrayMail.push(mail);
                    if(this.arrayMail.length === 10){
                        this.load = false;
                    }
                });

            }

        },
    }

}).mount('.container');