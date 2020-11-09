<template>
    <div class='c-wrap'>   
        <div class = 'c-chat' ref = 'block'>
            <Message v-for="m in messages" :key="m.text"
                :name = "m.name"
                :text = "m.text"
                :owner = "m.id === user.id"
            />
        </div>
        <div class = 'c-form'>
            <ChatForm/>
        </div>
    </div>
</template>
<script>
import Message from '@/components/Message'
import ChatForm from '@/components/ChatForm'
import{mapState} from 'vuex'
export default {
    middleware: ['chat'],
    head(){
        return{
            title: `Комната ${this.user.room}`
        };
    },
    computed: mapState(["user","messages"]),
    watch:{
        messages(){
            setTimeout(()=> {
                this.$refs.block.scrollTop = this.$refs.block.scrollHeight
            }) 
        }
    },
    components: {Message,ChatForm},
}
</script>
<style scoped>
    .c-wrap{
        height: 100%;
        position: relative;
        overflow: hidden;
    };
    .c-form{
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1rem;
        height: 80px;
        background: #faf8f8;
    };
    .c-chat{
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 80px;
        padding: 1rem;
        overflow-y: auto;
    };
</style>