// @mui
import { enUS, ruRU } from '@mui/material/locale';


// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: '/assets/icons/flags/ic_flag_en.svg',
  },
  {
    label: 'Russian',
    value: 'ru',
    systemValue: 'ruRu',
    icon: '/assets/icons/flags/ic_flag_ru.png',
  },
  {
    label: 'Uzbek',
    value: 'uz',
    systemValue: 'ruRu',
    icon: '/assets/icons/flags/ic_flag_uz.png',
  },
];

export const defaultLang = allLangs[0]; // English
