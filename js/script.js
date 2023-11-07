const { createApp } = Vue
    createApp({
        data(){
            return{
                mailList: [],
                
            }
        },
        methods: {
           
        },
        mounted(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((mail)=>{
                console.log(mail.data.response);
            })
        },
    }).mount('#app')
