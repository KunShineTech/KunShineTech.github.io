<script setup lang="ts">
import {ref} from 'vue'; const copied=ref(false);async function copy(){try{await navigator.clipboard.writeText('https://kunshine.tech/contact/');copied.value=true;}catch{copied.value=false;}}
</script><template><button type="button" @click="copy" class="btn btn-outline">{{copied?'链接已复制':'复制合作页面链接'}}</button></template>
