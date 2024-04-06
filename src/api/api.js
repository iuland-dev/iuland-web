const API = 'https://iuland.up.railway.app/api/'

export const sendMessage = async (message) => {
  try{
    const result = await fetch(`${API}messages`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(message, null, 2)
    })
    return result
  } catch{} 
}