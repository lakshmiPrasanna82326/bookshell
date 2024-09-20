import React from 'react';
import b1 from './images/b1.jpg'
import b2 from './images/b2.jpg'
import b6 from './images/b6.jpg'
import b3 from './images/b3.webp'
import b4 from './images/b4.jpg'
import b5 from './images/b5.webp'
import b7 from './images/b7.jpg'
import b8 from './images/b8.webp'
import elect_engin from './images/elect_engin.jpg'
import mech from './images/mech.jpg'
import ikigai from './images/ikigai.jpg'
import civil from './images/civil.jpg'

import linkedin from './images/linkedin.png'
import gmail from './images/gmail.png'
import call from './images/call.png'




function loadMore() {
  const books = document.getElementById("books1");
  console.log(books);
  books.classList.remove("hidden");
}
 

const Home = () => {
  return(
    <>
    
    
    <div className='flex'>
        <div id="books" className='flex ml-[80px] mt-14'>
    <div id='cs'  className='CS border border-blue-800 h-[320px] w-[290px] rounded-lg p-4 m-3 shadow-xl'><img className='h-[250px] w-[290px]' src={b1} alt='b1'/> computer science Deepak,1234567890</div>
    <div id="cs" className='CS border border-blue-400 h-[320px] w-[290px] rounded-lg p-4 m-3 shadow-xl'><img className='h-[250px] w-[290px]' src={b2} alt='b2'/>cambridge IGCSE Computer science Shakthi,1234567890</div>
    <div id="" className='SH border border-blue-400 h-[320px] w-[290px] rounded-lg p-4 m-3 shadow-xl'><img className='h-[250px] w-[290px]' src={b6} alt='b6'/>Atomic Habits,James clear Lakshmi,1234567890</div>
    <div id="" className=' CS border border-blue-400 h-[320px] w-[290px] rounded-lg p-4 m-3 shadow-xl'><img className='h-[250px] w-[300px]' src={b3} alt='b3'/>code Bytes(AI Coding), Sarika Singh  Arjun, 1234567890</div>
    
        </div>
        </div>

        <div className='flex'>
        <div id="books" className='flex ml-[80px] mt-0'>
    <div id="" className='CS border border-blue-400 h-[325px] w-[290px] rounded-lg p-4 m-3 shadow-xl'><img className='h-[260px] w-[300px]' src={b4} alt='b4'/>C Programming(Reema Thareeja) Hasena, 1234567890</div>
    <div id="" className='SH border border-blue-400 h-[325px] w-[290px] rounded-lg p-4 m-3 shadow-xl'><img className='h-[260px] w-[300px]' src={b7} alt='b7'/>Eat that Frog(Brain Tracy) siva,1234567890</div>
    <div id="" className='CS border border-blue-400 h-[325px] w-[290px] rounded-lg p-4 m-3 shadow-xl'><img className='h-[260px] w-[300px]' src={b5} alt='b5'/>Python(ultimate guide) Vijaya,1234567890</div>
    <div id="" className='SH border border-blue-400 h-[325px] w-[290px] rounded-lg p-4 m-3 shadow-xl'><img className='h-[260px] w-[300px]' src={b8} alt='b8'/>Power of subconsious mind Rechal,1234567890</div>
    
        </div>
        </div>


        <div  id="books1" className='flex hidden'>
        <div  className='flex ml-[80px] mt-0'>
    <div id="" className='CS border border-blue-400 h-[325px] w-[290px] rounded-lg p-4 m-3 shadow-xl'><img className='h-[260px] w-[300px]' src={elect_engin} alt='b4'/>Electrical Engineering Veena,1234567890</div>
    <div id="" className='SH border border-blue-400 h-[325px] w-[290px] rounded-lg p-4 m-3 shadow-xl'><img className='h-[260px] w-[300px]' src={mech} alt='b7'/>Mechanical Engineering Prasanna,1234567890</div>
    <div id="" className='CS border border-blue-400 h-[325px] w-[290px] rounded-lg p-4 m-3 shadow-xl'><img className='h-[260px] w-[300px]' src={ikigai} alt='b5'/>IKIGAI(Hector Garcia and Francesc) Rafi, 1234567890</div>
    <div id="" className='SH border border-blue-400 h-[325px] w-[290px] rounded-lg p-4 m-3 shadow-xl'><img className='h-[260px] w-[300px]' src={civil} alt='b8'/>Civil Engineering(DENE R Warren) Harry,1234567890</div>
    
        </div>
        </div>


        <button className='border bg-blue-500 rounded-lg w-[100px] h-10 flex m-auto text-center p-1 mt-7' onClick={loadMore}>Load More....</button>

        <footer id="footer" className='bg-gray-400 h-[200px] mt-5  '>
          <ul className='   absolute mt-[10px]'>
            <li><strong>About Us</strong></li>
            <p>Bookshell is a Professional Online selling and buying platform. Here we provide you with  academics and self help books. We are committed to provide you the best platform for buying and selling different books, with a focus on reliability and efficiency. we strive to turn our passion for sharing knowledge into a thriving website.</p>
            <li className=''><b>Contact Us</b></li>
          <li className='flex'> <img  className="h-[17px] inline" src={gmail}  alt="gmail" /> <p className='' >bookshell82326@gmail.com</p></li>
          <li className='flex'> <img  className="h-[17px]" src={call}  alt="call" /><p>1234567890</p></li>
            <li className='flex'><img className='h-[17px]' src={linkedin} alt="linkedin"/><p>bookshell98765h9boilnkedin.com</p></li>
            
          </ul> 

        

        </footer>



    </>
  )
}

export default Home;