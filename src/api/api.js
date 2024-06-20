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

export const fetchTestimonies = async () => {
  try{
    const results = await fetch(`${API}testimonies`)
    const { data } = await results.json()
    const testimonials = data.map(item => {
      const {id, attributes} = item 
      const {name, text, position, program} = attributes
      return { id, name, text, position, program}
    })
    return testimonials
  }catch {
  }
}

export const fetchClients = async () => {
  try{
    const results = await fetch(`${API}clients?populate=*`)
    const { data } = await results.json()
    const clients = data.map(item => {
      const { id, attributes} = item
      const{name, logo} = attributes
      return {id, name, logo}
    }) 
    return clients
  } catch {

  }
}