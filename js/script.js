const { createApp } = Vue
    createApp({
        data(){
            return{
                mailList: [],
                mailToGenerate: 10,
                
            }
        },
        methods: {
           
        },
        mounted(){
            for(let i = 0; i < this.mailToGenerate; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((mail)=>{
                    this.mailList.push(mail.data.response)
                })
            }
        },
    }).mount('#app')
