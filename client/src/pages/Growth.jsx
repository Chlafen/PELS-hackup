import React from 'react'
import Layout from '../common/Layout'
import GrowthCard from '../components/growth/Card'

const categories = ['Social', 'Jardinnage', 'Ménage', 'Cuisine', 'Bricolage', 'Autres'];
const cards = [
    {
        title: 'Lorem Ipsum',
        categories: ['Social', 'Jardinnage'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    },
    {
        title: 'Lorem Ipsum',
        categories: ['Social', 'Ménage'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    },{
        title: 'Lorem Ipsum',
        categories: ['Social', 'Cuisine'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    },{
        title: 'Lorem Ipsum',
        categories: ['Jardinnage'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    },{
        title: 'Lorem Ipsum',
        categories: ['Sécurité', 'Autres'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    },
    {
        title: 'Lorem Ipsum',
        categories: ['Social', 'Ménage'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    },{
        title: 'Lorem Ipsum',
        categories: ['Social', 'Cuisine'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    },{
        title: 'Lorem Ipsum',
        categories: ['Jardinnage'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    },{
        title: 'Lorem Ipsum',
        categories: ['Sécurité', 'Autres'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    },
    {
        title: 'Lorem Ipsum',
        categories: ['Social', 'Ménage'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    },{
        title: 'Lorem Ipsum',
        categories: ['Social', 'Cuisine'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    },{
        title: 'Lorem Ipsum',
        categories: ['Jardinnage'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    },{
        title: 'Lorem Ipsum',
        categories: ['Sécurité', 'Autres'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    },
    {
        title: 'Lorem Ipsum',
        categories: ['Social', 'Ménage'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    },{
        title: 'Lorem Ipsum',
        categories: ['Social', 'Cuisine'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    },{
        title: 'Lorem Ipsum',
        categories: ['Jardinnage'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    },{
        title: 'Lorem Ipsum',
        categories: ['Sécurité', 'Autres'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit.'
    }
]
    



export default function Growth() {

  const toggleSelected = (e) => {
    e.target.classList.toggle('bg-slate-300');
    e.target.classList.toggle('bg-slate-500');
    }

  return (
    <Layout>
        <div className='flex my-5 flex-col justify-center gap-9 mx-60'> 
            <h1 className='text-4xl'>Filtrer par catégories</h1> 
            <div className='flex flex-row items-center gap-5'>
                <p className='text-3xl'>Catégories: </p>
                    {
                        categories.map((category) => (
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <button className='text-2xl rounded bg-slate-300 p-3' onClick={toggleSelected}>{category}</button>
                        </div>))
                    }
            </div>
            {/* cards with title and desc */}
            <div className='grid-cols-5 grid gap-5'>
            {
                cards.map((card) => (
                <GrowthCard title={card.title} key={card.title} categories={card.categories} description={card.description} />
            ))}
            </div>
            </div>
    </Layout>
  )
}
