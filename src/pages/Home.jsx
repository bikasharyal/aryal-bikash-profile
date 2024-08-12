import React from 'react';
import { useTheme } from '../context/ThemeContext';
import profileImg from '../assets/profileImage.png';
import { Link } from 'react-scroll';

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div name="home" className='w-full h-screen' style={{ backgroundColor: darkMode ? '#0A192F' : '#d3d3d3' }}>
      <div className='max-w-[1300px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center h-full font-normal'>
        
        {/* Text Section */}
        <div className='text-left w-full md:w-2/3'>
          <p className='text-800 font-bold' style={{ color:'#800000', fontWeight: 'bold' }}>
            Hello, my name is
          </p>
          <h2 className='text-6xl font-bold' style={{ color: darkMode ? '#fff' : '#0A192F' }}>
            Bikash Aryal
          </h2>
          <h2 className='text-5xl font-bold' style={{ color: darkMode ? '#fff' : '#800000' }}>
            I'm a full stack .Net developer.
          </h2>
          <p className='mt-4 font-light' style={{ color: darkMode ? '#8892b0' : '#0A192F' }}>
            With 4+ years of experience, I'm currently pursuing a master’s in computer science at EPITA - Paris and seeking year-end internship opportunities to further enhance my skills.
          </p>
          <div>
            <Link to='work' smooth={true} duration={1000}>
              <button className='px-6 py-3 mt-8 text-base font-normal text-white border border-white rounded-md duration-500' style={{ backgroundColor: darkMode ? '#0A192F' : '#800000' }}>
                Check out my work
              </button>
            </Link>
          </div>
        </div>
        
        {/* Image Section */}
        <div className='w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0'>
          <img src={profileImg} alt="Profile" className='w-[600px] h-[550px] object-cover' />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
