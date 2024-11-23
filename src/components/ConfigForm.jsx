import React,{useState} from 'react';
import { SketchPicker } from 'react-color';

const ConfigForm = ({ config, setConfig, savedConfigs }) => {
    const [visiblePickers, setVisiblePickers] = useState({}); 
    const loadConfig = (e) => {
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
          const loadedConfig = JSON.parse(event.target.result);
          setConfig(loadedConfig);
        };
        fileReader.readAsText(e.target.files[0]);
      };
      
      const handleTogglePicker = (picker) => {
        setVisiblePickers((prev) => ({
          ...prev,
          [picker]: !prev[picker],
        }));
      };
    
      const handleHexChange = (name, e) => {
        const { value } = e.target;
    
        if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(value) || value === "") {
          setConfig((prev) => ({ ...prev, [name]: value }));
        }
      };
    
      const handleColorChange = (name, color) => {
        const hexValue = color.hex;
 
        setConfig((prev) => ({ ...prev, [name]: hexValue }));
    
   
        setVisiblePickers((prev) => ({ ...prev, [name]: false }));
      };
      
  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };


  const applySavedConfig = (selectedConfigName) => {
    const selectedConfig = savedConfigs.find(
      (cfg) => cfg.configName === selectedConfigName
    );
    if (selectedConfig) {
      setConfig(selectedConfig);
    }
  };
  return (
    <div className="p-16 bg-gray-100 space-y-4">
             <div className='px-4'>
       
        <select
          className="block mt-2 p-3 font-semibold border border-gray-300 rounded-md bg-black text-white"
          onChange={(e) => applySavedConfig(e.target.value)}
        >
          <option value="" >Load Config</option>
          {savedConfigs.map((cfg, index) => (
            <option key={index} value={cfg.configName}>
              {cfg.configName}
            </option>
          ))}
        </select>
      </div>
      <div className='px-4'>
        <label className="block font-medium">Config Name</label>
        <input
          type="text"
          name="configName"
          value={config.configName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter configuration name"
        />
      </div>

      <div className='px-4'>
        <label className="block font-medium">Bot Name</label>
        <input
          type="text"
          name="botName"
          value={config.botName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter bot name"
        />
      </div>

      <div className='px-4'>
        <label className="block font-medium">Font Family</label>
        <select
          name="fontFamily"
          value={config.fontFamily}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
      </div>

      <div className="px-4 bg-gray-100 space-y-4">
     
      <div>
        <label className="block font-medium">Header Color</label>
        <div className="relative flex items-center">
        
          <input
            type="text"
            value={config.headerColor} 
            onChange={(e) => handleHexChange('headerColor', e)} 
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="#RRGGBB"
          />
    
          <button
            type="button"
            className="w-10 h-10 ml-2 border border-gray-300 rounded"
            style={{ backgroundColor: config.headerColor }} 
            onClick={() => handleTogglePicker('headerColor')}
          ></button>
      
          {visiblePickers.headerColor && (
            <div className="absolute top-0 right-0 z-10">
              <SketchPicker
                color={config.headerColor} 
                onChangeComplete={(color) => handleColorChange('headerColor', color)} 
              />
            </div>
          )}
        </div>
      </div>


      <div>
        <label className="block font-medium">Header Font Color</label>
        <div className="relative flex items-center">
          <input
            type="text"
            value={config.headerFontColor}
            onChange={(e) => handleHexChange('headerFontColor', e)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="button"
            className="w-10 h-10 ml-2 border border-gray-300 rounded"
            style={{ backgroundColor: config.headerFontColor }}
            onClick={() => handleTogglePicker('headerFontColor')}
          ></button>
          {visiblePickers.headerFontColor && (
            <div className="absolute top-0 right-0 z-10">
              <SketchPicker
                color={config.headerFontColor}
                onChangeComplete={(color) =>
                  handleColorChange('headerFontColor', color)
                }
              />
            </div>
          )}
        </div>
      </div>

      
      <div>
        <label className="block font-medium">Background Color</label>
        <div className="relative flex items-center">
          <input
            type="text"
            value={config.backgroundColor}
            onChange={(e) => handleHexChange('backgroundColor', e)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="button"
            className="w-10 h-10 ml-2 border border-gray-300 rounded"
            style={{ backgroundColor: config.backgroundColor }}
            onClick={() => handleTogglePicker('backgroundColor')}
          ></button>
          {visiblePickers.backgroundColor && (
            <div className="absolute top-0 right-0 z-10">
              <SketchPicker
                color={config.backgroundColor}
                onChangeComplete={(color) =>
                  handleColorChange('backgroundColor', color)
                }
              />
            </div>
          )}
        </div>
      </div>

      <div>
        <label className="block font-medium">Chat Font Color</label>
        <div className="relative flex items-center">
          <input
            type="text"
            value={config.chatFontColor}
            onChange={(e) => handleHexChange('chatFontColor', e)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="button"
            className="w-10 h-10 ml-2 border border-gray-300 rounded"
            style={{ backgroundColor: config.chatFontColor }}
            onClick={() => handleTogglePicker('chatFontColor')}
          ></button>
          {visiblePickers.chatFontColor && (
            <div className="absolute top-0 right-0 z-10">
              <SketchPicker
                color={config.chatFontColor}
                onChangeComplete={(color) =>
                  handleColorChange('chatFontColor', color)
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>

      <div className='px-4'>
        <label className="block font-medium">Avatar Image</label>
        <input
          type="file"
          name="avatarImage"
          accept="image/*"
          onChange={(e) =>
            setConfig((prev) => ({
              ...prev,
              avatarImage: URL.createObjectURL(e.target.files[0]),
            }))
          }
          className="w-full p-2 border border-gray-300 rounded"
        /><div className="mt-2">
        <img
          src={config.avatarImage}
          alt="Avatar Preview"
          className="h-16 w-16 rounded-full"
        />
      </div>
      </div>

      <div className='px-4'>
        <label className="block font-medium">Launcher Image</label>
        <input
          type="file"
          name="launcherImage"
          accept="image/*"
          onChange={(e) =>
            setConfig((prev) => ({
              ...prev,
              launcherImage: URL.createObjectURL(e.target.files[0]),
            }))
          }
          className="w-full p-2 border border-gray-300 rounded"
        /><div className="mt-2">
        <img
          src={config.launcherImage}
          alt="Avatar Preview"
          className="h-16 w-16 rounded-full"
        />
      </div>
      </div>
    </div>
  );
};

export default ConfigForm;
