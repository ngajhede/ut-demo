<script setup lang="ts">
const uploadedFile = ref<string>(null);
const { startUpload } = useUploadThing("imageUploader", {
  onClientUploadComplete(res) {
    console.log("Client upload complete", res);
    uploadedFile.value = res[0].url;
  },
});
</script>

<template>
  <input
    type="file"
    @change="
      async (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) return;
        await startUpload([file]);
      }
    "
  />

  <div v-if="uploadedFile">
    <p>File: {{ uploadedFile }}</p>
    <img :src="uploadedFile" />
  </div>
</template>
