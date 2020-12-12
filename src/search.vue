<template>
    <div class="header-search">
        <div class="search-browse">Browse &nbsp; <i class="fas fa-caret-down"></i></div>
        <input type="text" class="input-text" name="search" v-model="searchLine" placeholder="Search for Item...">
        <button v-on:click="$emit('filter', searchLine)"><i class="fas fa-search"></i></button>
    </div>
</template>

<script>
    export default {
        name: 'search',
        data: function() {
            return {
                searchLine: ''
            };
        },
    };
</script>
<style>

</style>