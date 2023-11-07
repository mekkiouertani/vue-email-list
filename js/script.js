const { createApp } = Vue
    createApp({
        data(){
            return{
                mailList: [],
                mailToGenerate: 10,
                nValue: "",
                
            }
        },
        methods: {
            valueMGenerate(){
                this.mailToGenerate = this.nValue
                this.mailList = [];
                this.mailGenerator();
            },
            
            
        },
        mounted(){
            
        },
        computed: {
            mailGenerator(){
            for(let i = 0; i < this.mailToGenerate; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((mail)=>{
                    this.$nextTick(() => { 
                        this.mailList.push(mail.data.response)
                    });
                    
                })
            }
            }   
        }
    }).mount('#app')
