<template>
    <div class='c-wrap'>   
        <div class = 'c-chat'>
            <Message v-for="m in messages" :key="m.text"
                :name = "m.name"
                :text = "m.text"
            />
        </div>
        <div class = 'c-form'>

        </div>
    </div>
</template>
<script>
import Message from '@/components/Message'
import{mapState} from 'vuex'
export default {
    middleware: ['chat'],
    head(){
        return{
            title: `Комната ${this.user.room}`
        };
    },
    computed: mapState(["user","messages"]),
    components: {Message},
}
</script>
<style scoped>
    .c-wrap{
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    .c-form{
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1rem;
        height: 80px;
        background: #212121;
    }
    .c-chat{
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 80px;
        padding: 1rem;
        overflow-y: auto;
    }
</style>