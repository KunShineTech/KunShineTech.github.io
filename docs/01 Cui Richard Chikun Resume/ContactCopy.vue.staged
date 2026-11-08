<script setup lang="ts">
import {ref} from 'vue';
const status=ref('');
async function copy(){
 try {
  await navigator.clipboard.writeText('大连坤晟科技有限公司\n电话：1394110896\n邮箱：cuichikun@kunshinetech.cn\n企业微信：@坤晟咨询');
  status.value='联系方式已复制';
 } catch {
  status.value='复制未成功，请手动复制上方联系方式';
 }
}
</script>
<template><div><button type="button" @click="copy" class="btn btn-outline">复制联系方式</button><p role="status" aria-live="polite" class="mt-3 text-sm text-jade">{{status}}</p></div></template>
