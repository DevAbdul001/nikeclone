import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../Components/button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img 
        src={offer}
        width={773}
        height={687}
        className="object-contain w-full"
        />
      </div>
      <div 
      className="flex flex-1 flex-col">
        
        <h1 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span>
          <span className="text-coral-red"> Offer</span>
        </h1>

        <p className="mt-4 lg:max-w-lg info-text">
        Don’t miss out on our limited-time special offers! Enjoy incredible discounts on your favorite products and elevate your style for less. Whether you’re upgrading your wardrobe or gearing up for your next adventure, we’ve got deals you’ll love. Shop now and make the most of these unbeatable savings before they’re gone!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication  to detail and excellence ensures your satisfaction</p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop Now" iconURL={arrowRight} />
        <Button label="Learn More" 
        backgroundColor="bg-white"
        borderColor="border-slate-gray"
        textColor="text-coral-red"
        />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
