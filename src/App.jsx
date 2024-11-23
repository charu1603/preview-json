import React, { useState } from 'react';
import ConfigForm from './components/ConfigForm';
import ChatPreview from './components/ChatPreview';
import hero from './assets/hero.png';
import hero2 from './assets/hero2.jpg';
import FileSaver from 'file-saver';
const App = () => {
  const [savedConfigs, setSavedConfigs] = useState([]);
  const downloadConfig = () => {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const fileName = config.configName || 'config';
    FileSaver.saveAs(blob, `${fileName}.json`);

    setSavedConfigs((prev) => [...prev, { ...config, configName: fileName }]);
  };


  const [config, setConfig] = useState({
    configName: 'Config-1',
    botName: 'Greebo',
    fontFamily: 'Arial',
    headerColor: '#f4714d',
    headerFontColor: '#FFFFFF',
    backgroundColor: '#e8e1db',
    chatFontColor: '#000000',
    avatarImage: hero,
    launcherImage: hero2,
  });

  return (
    <div className="flex w-full h-screen">
       <div className="w-1/2">
      <ConfigForm config={config} setConfig={setConfig} savedConfigs={savedConfigs}/></div>
      <div className="h-screen fixed w-1/2 ml-[50%]">
      <ChatPreview config={config} downloadConfig={downloadConfig}  /></div>
     
    </div>
  );
};

export default App;
