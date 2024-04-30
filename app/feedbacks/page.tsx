import FeedbackCard from "@/components/feedbackCard";

export default function Feedbacks(){
    return <div className="bg-white w-full">
        
        <div className=" flex justify-center items-center">
    <div className="bg-white flex flex-col justify-center items-center shadow-sm  min-h-screen w-10/12 rounded-lg border-2 border-gray-200 m-2 ">
        <FeedbackCard name="Subhadeep" feedback="The dish had a delightful surprise of flavors dancing on my taste buds. It was like a culinary adventure with each bite, never knowing what delicious sensation would come next. The presentation was artfully chaotic, like a masterpiece painted by a playful chef. Overall, it was a delightful culinary journey through the unexpected!"></FeedbackCard>
        <FeedbackCard name="Achyut" feedback="This dish was a culinary tour de force, a testament to the chef's expertise and creativity. It was a symphony of flavors, with each element meticulously crafted to perfection. From its tantalizing aroma to its decadent taste, every aspect of the dish was pure perfection. It was a culinary experience unlike any other, leaving me in awe of the chef's talent and skill"></FeedbackCard>
        <FeedbackCard name="Wildan" feedback="I was transported to food heaven with every bite of this divine dish. It was a celebration of flavors, with each ingredient perfectly complementing the next. The chef's skill was evident in every aspect of the meal, from its flawless presentation to its impeccable execution. It was a culinary masterpiece that left me feeling both satisfied and deeply grateful for the culinary journey"></FeedbackCard>
        <FeedbackCard name="Adithya" feedback="This dish was a revelation, challenging my taste buds with its bold flavors and unexpected combinations. It was a culinary adventure, with each bite unveiling a new layer of complexity and intrigue. The chef's creativity knew no bounds, as they fearlessly experimented with ingredients to create a truly unique dining experience. It was a feast for the senses that left me craving more."></FeedbackCard>
        <FeedbackCard name="Vamshi" feedback="From the first bite to the last, every mouthful was a burst of pure bliss. The flavors danced on my palate, leaving me craving more with each savory morsel. The chef's attention to detail was evident in every aspect of the dish, from its vibrant colors to its exquisite presentation. It was a culinary masterpiece that left me feeling both satisfied and longing for another taste"></FeedbackCard>
        <FeedbackCard name="Abijit" feedback="The dish was a symphony of flavors, each ingredient harmonizing perfectly with the next. It was as if the chef had mastered the art of culinary alchemy, transforming ordinary ingredients into a gastronomic masterpiece. The presentation was elegant yet unpretentious, inviting me to indulge in its savory delights. A truly memorable dining experience!"></FeedbackCard>
    </div>
    </div>
    </div>
}
Feedbacks.displayName = 'Feedbacks';