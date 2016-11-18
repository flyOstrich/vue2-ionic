<template>
    <a @click="selectTab()" :class="active?'tab-item tab-item-active':'tab-item'">
        <i :class="'icon '+icon" v-if="icon"></i>
        <span class="tab-title">{{title}}</span>
    </a>
</template>
<script>
export default {
    props: {
        title: String,
        icon: String,
        iconOn: String,
        iconOff: String,
        badge: String,
        badgeStyle: String,
        tabId:String
    },
    computed:{
       active:function(){
          if(!this.$parent.activeTabId)this.$parent.activeTabId=this.tabId;
          return this.$parent.activeTabId==this.tabId;
       }
    },
    created: function () {
        console.log('tab create')
        if (this.$parent.$children.length == 1) {
            this.active = true;
        }
    },
    mounted: function () {
        console.log('tab mounted')
    },
    methods: {
        selectTab () {
            this.$parent.activeTabId=this.tabId;
            this.$router.push({path:"/main/posts"})
        }
    },
}





</script>
