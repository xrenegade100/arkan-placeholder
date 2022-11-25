import React from 'react';
import Typewriter, { TypewriterClass} from 'typewriter-effect';
import icon from './images/eye.svg';

const App: React.FC = () => (
    <div className='w-full h-screen p-0 m-0 absolute'>
        <div className='-z-10 w-full h-screen flex justify-center items-center animate-cover'>
            <img src={icon} className="w-72 xl:w-96 h-auto animate-fade-in"/>
        </div>
        <div className='absolute top-0 left-0 z-0 w-full h-screen flex justify-center items-center'>
            <span className='font-logo text-logo text-8xl xl:text-9xl'>
                <Typewriter
                    options={{
                        loop: false,
                        cursor: '_',
                    }}

                    onInit={(typewriter: TypewriterClass) => {
                        typewriter
                            .pauseFor(2000)
                            .changeDelay(400)
                            .typeString('<span style="color: #fff0;">_</span>ARKAN')
                            .start();
            }}
        />
        </span>
        </div>
    </div>
);

export default App;