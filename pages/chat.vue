<template>
    <h1>chatpage{{user.name}}</h1>
</template>
<script>
import{mapState} from 'vuex'
export default {
    computed: mapState(["user"])
}
</script>