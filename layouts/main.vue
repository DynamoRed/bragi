<template>
    <div>
        <Nuxt/>
        <div class="notifications">
            <Notification v-for="notification in notifications" :key="notification.id" :notification="notification"/>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            notifications(){
                return this.$store.state.notifications.list
            },
        },
    }
</script>

<style lang="css" scoped>
    div {
        width: 100%
    }

    .notifications {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-end;
        width: 100vw;
        position: fixed;
        bottom: 0;
        left: 0;
        margin-bottom: 15px;
        pointer-events: none;
    }
</style>