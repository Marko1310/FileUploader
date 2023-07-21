import axios from 'axios'

const postFileToServer = async function (formData: FormData) {
  try {
    const response = await axios.post('http://localhost:8000/api/uploadtoserver', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log('File uploaded succesfully on the server:', response?.data?.filename)
    return response.data
  } catch (err) {
    console.log(err)
  }
}

const postFileToAWS = async function (formData: FormData) {
  try {
    const response = await axios.post('http://localhost:8000/api/uploadtoaws', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log('File uploaded succesfully to AWS:', response?.data?.originalname)
    return response.data
  } catch (err) {
    console.log(err)
  }
}

const postFileDirectlyToAWS = async function (file: File) {
  try {
    const response = await axios.get('http://localhost:8000/api/requestpresignedurl')
    console.log(response)
    axios
      .put(response.data.urll, file)
      .then((response) => {
        console.log('File uploaded successfully!')
      })
      .catch((error) => {
        console.error('Error uploading file:', error)
      })
  } catch (err) {
    console.log(err)
  }
}

export default {
  postFileToServer,
  postFileToAWS,
  postFileDirectlyToAWS
}
