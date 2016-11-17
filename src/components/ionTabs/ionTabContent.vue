<template>
    <span class="pane tab-content" nav-view="active">AAAAAAAAAAAAAAAAAA</span>
</template>

<script>
    export default{
        props:{
           for:String
        },
        data(){
           return {
               active:false
           }
        },
        computed:{
            active:function(){
            }
        },
        created(){
           alert(this.for)
        }
    }




</script>
