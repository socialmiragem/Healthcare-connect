import React from 'react'
import Hero from '../component/Hero'
import Counter from '../component/Counter'
import Cards from '../component/Cards'
import Table from '../component/Table'
import Testimonials from '../component/Testimonials'
import Faqs from '../component/Faqs'
import Contact from '../component/Contact'

const Home = () => {
    return (
        <>
            <Hero
                title = "Healthcare Made Simple for You & Your Family"
                desc = "Skip the stress. Get affordable coverage with clear benefits and personal support every step of the way."
                anchor_text="book an appointment"
                anchor_link=""
            />
            <Counter/>
            <Cards
                title="Why Families Trust HealthCare Connect"
            />
            <Table
                title="Private vs Traditional Insurance"
            />
            <Testimonials
                title = "Trusted by Families Nationwide"
            />
            <Faqs
                title="Get Answers to Your Questions"
            />
            <Contact
                title = "Speak With a Licensed Expert Today"
            />
        </>
    )
}

export default Home