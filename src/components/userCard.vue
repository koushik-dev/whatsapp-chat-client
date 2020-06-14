<template>
    <div class="flex items-center p-1 w-screen overflow-hidden">
        <div class="">
            <Avatar />
        </div>
        <div class="w-full my-1 mx-2 text-left border-gray-400 border-b border-solid text-black">
            <p>John Doe</p>
            <p class="text-xs text-gray-600 font-light pb-3">johndoe: last message i sent throgh socket io and vue socket</p>
        </div>
    </div>
</template>
<script>
import Avatar from "./avatar";
export default {
    components: {
        Avatar
    }
}
</script>