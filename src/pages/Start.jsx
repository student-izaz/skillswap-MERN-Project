import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // if using React Router


const Start = () => {
      const navigate = useNavigate();

       useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); 
    }, 2500);

    return () => clearTimeout(timer); 
  }, [navigate]);
  return (
   <div className="w-full h-screen bg-yellow-500 flex items-center justify-center">
  <h1 className="text-white text-4xl font-bold animate-fade-in">
  {'SkillSwap'.split('').map((char, i) => (
    <span key={i}>{char}</span>
  ))}
</h1>

</div>



  )
}

export default Start
