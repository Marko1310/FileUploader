import axios from 'axios'

const postFile = async function (formData: FormData) {
  try {
    const response = await axios.post('http://localhost:8000/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log('File uploaded succesfully:', response?.data?.filename)
    return response.data
  } catch (err) {
    console.log(err)
  }
}

export default {
  postFile
}
