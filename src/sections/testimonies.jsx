import { fetchTestimonies } from '../api/api.js'
const testimonies = await fetchTestimonies()

console.log()

const Testimonies = () => {
  return (
    <section className="p-12 bg-[#f9f9f9] ">
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-center text-large md:text-custom mb-12">¿Que dicen nuestros <span className="font-bold ">Alumnos?</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-8">
        {
          testimonies && testimonies.map(item => {
            const {id, name, text, position, program} = item
            return(
              <div className="flex flex-col gap-5 justify-between">
                <p className="italic">"{text}"</p>
                <section className="text-xs"> 
                  <p className="text-bold">{name}</p>
                  <p className="font-thin">{position}</p>
                  <p className="font-light">{program}</p>
                </section>
              </div>
            )
          })
        }
        </div>
      </div>
    </section>
  )
}

export default Testimonies