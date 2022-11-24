import React from 'react';
import Typewriter, { TypewriterClass} from 'typewriter-effect';
import './App.css';
import icon from './images/eye.svg';

const App: React.FC = () => (
    <div className='container'>
        <img className='eye-image' src={icon}/>
        <div className='cover' />
        <Typewriter
            options={{
                cursor: '_',
            }}

            onInit={(typewriter: TypewriterClass) => {
                typewriter
                    .pauseFor(5000)
                    .changeDelay(400)
                    .typeString('<span style="color: #fff0;">_</span>ARKAN')
                    .start();
            }}/>
    </div>
);

export default App;