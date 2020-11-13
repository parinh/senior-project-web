// Get a reference to the database service
const database = firebase.database();
const userInfoRef = database.ref("userInfo");

new Vue({
    el:"#userInfo",
    data:{
        weight:'',
        height:'',
        shouderW:'',
        infos:[],
        editText:null
    },
    methods:{
        
        editInfo:function(info){
            this.editText=info
            this.weight=info.weight
            this.height=info.height
            this.shouderW=info.shouderW
            
        },

        updateInfo:function(info){
            this.editText=info
            this.weight=info.weight
            this.height=info.height
            this.shouderW=info.shouderW
            
            userInfoRef.child('MLs2pz2HisdOvzC6VRR').update({weight:this.weight,height:this.height,shouderW:this.shouderW})

            this.cancelInfo()
        },

        cancelInfo:function(){
            this.editText=null
            this.weight=''
            this.height=''
            this.shouderW=''
        },
    },

    created(){
        userInfoRef.on('child_added', snapshot=>{   
            this.infos.push(snapshot.val())
        })
    }
})