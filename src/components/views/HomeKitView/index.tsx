import { SelectableList, SelectableListOption } from 'components';
import { PREVIEW } from 'components/previews';
import { ViewOptions } from 'components/views';
import { useMenuHideWindow, useScrollHandler } from 'hooks';


function Chill() {
    
  // Send data to the backend via POST
  fetch('https://maker.ifttt.com/trigger/TouchBar_Chill/with/key/gwZrwr5gXovvGRMelBjTg', {  // Enter your IP address here

    method: 'GET', 
    mode: 'cors', 

  })
  
}

//export { Chill };


const HomeKitActions = () => {
  useMenuHideWindow(ViewOptions.Home.id);
  const options: SelectableListOption[] = [
    {
      type: 'ActionSheet',
      id: ViewOptions.HomeKit.id,
      label: 'Choose Action',
      listOptions: [
        {
          type: 'Action',
          label: `Chill`,
          onSelect: Chill,
        },
      ],
      preview: PREVIEW.HOME_KIT,
    },
  ];

  const [scrollIndex] = useScrollHandler(ViewOptions.games.id, options);

  return <SelectableList options={options} activeIndex={scrollIndex} />;
};

export default HomeKitActions;
