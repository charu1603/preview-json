import React from 'react';
import { MdKeyboardVoice } from "react-icons/md";

const ChatPreview = ({ config, downloadConfig }) => (
    <div className='flex flex-col justify-center items-center bg-[#e8e1db] shadow-lg h-full'>
        <div className='flex flex-col  '>
         <div className='flex flex-col justify-start items-start h-[400px] w-[400px] rounded-lg overflow-hidden shadow-2xl z-99'>
  <div style={{ fontFamily: config.fontFamily, backgroundColor: config.backgroundColor }} className='w-full h-full'>
    <header style={{ backgroundColor: config.headerColor, color: config.headerFontColor }} className='h-12 px-2 flex items-center'>
     
      <h2>{config.botName}</h2>
    </header>
    <div className='flex p-2 gap-2 '>
    <img src={config.avatarImage} className='h-8 w-8'/>
      <p style={{ color: config.chatFontColor }}>Hii! I am geebo, your friendly conceirge monster, here to answer your questions, show you around and help you.</p>
    </div>
  </div><div className='h-12 bg-white w-full flex justify-between items-center px-2 text-gray-700'>
    <p className=' text-xs'>Need help ? Just type or say it</p><MdKeyboardVoice /></div></div>
  <div className='flex justify-end text-right z-9'>
  <img src={config.launcherImage} className='h-8 w-8  -mt-2 '/>
  </div>
  <button
        type="button"
        onClick={downloadConfig}
        className="mt-4 px-4 py-2 bg-black mx-auto text-white rounded"
      >
        Download Config
      </button>
      <p className='text-center py-2'>{config.configName}</p>
  </div></div>
);

export default ChatPreview;
