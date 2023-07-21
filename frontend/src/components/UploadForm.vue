<template>
  <form @submit.prevent>
    <label>Select file</label>
    <input type="file" name="file" required @change="selectFile" />

    <div class="submit">
      <button @click="handleFileUploadToServer">Upload File to Server</button>
    </div>
    <div class="submit">
      <button @click="handleFileUploadDirectlyToAWS">Upload File to AWS</button>
    </div>
  </form>
</template>

<script lang="ts">
// Services
import uploadFileServices from '../services/uploadFileServices'

export default {
  name: 'UploadForm',
  data() {
    return {
      file: null as File | null
    }
  },
  methods: {
    selectFile(event: Event): void {
      const inputElement = event.target as HTMLInputElement
      if (inputElement.files && inputElement.files.length > 0) {
        this.file = inputElement.files[0]
      }
    },
    handleFileUploadToServer(): void {
      if (!this.file) {
        return
      }
      const formData = new FormData()
      formData.append('file', this.file)

      uploadFileServices.postFileToServer(formData)
    },
    handleFileUploadToAWS(): void {
      if (!this.file) {
        return
      }
      const formData = new FormData()
      formData.append('file', this.file)

      uploadFileServices.postFileToAWS(formData)
    },
    handleFileUploadDirectlyToAWS(): void {
      if (!this.file) {
        return
      }
      // const formData = new FormData()
      // formData.append('file', this.file)
      uploadFileServices.postFileDirectlyToAWS(this.file)
    }
  }
}
</script>

<style>
form {
  background: white;
  max-width: 420px;
  margin: 30px auto;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

button {
  background-color: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

input[type='file'] {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  color: #555;
  display: inline-block;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
  cursor: pointer;
}

.submit {
  text-align: center;
}
</style>
