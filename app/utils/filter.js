import React from 'react';
import { Image } from 'semantic-ui-react';
import getLocalImage from './image';
import styles from '../components/FileLoader.scss'

// Values are based on mappings between character and Slippi's numerical index
// but in the filter they are represented alphabetically.
const characterList = [
  { value: "5", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-5-0.png")} inline={true} spaced='bottom'/>Bowser</div> },
  { value: "0", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-0-0.png")} inline={true} spaced='bottom'/>Captain Falcon</div> },
  { value: "1", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-1-0.png")} inline={true} spaced='bottom'/>Donkey Kong</div> },
  { value: "22", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-22-0.png")} inline={true} spaced='bottom'/>Dr. Mario</div> },
  { value: "20", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-20-0.png")} inline={true} spaced='bottom'/>Falco</div> },
  { value: "2", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-2-0.png")} inline={true} spaced='bottom'/>Fox</div> },
  { value: "25", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-25-0.png")} inline={true} spaced='bottom'/>Ganondorf </div> },
  { value: "14", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-14-0.png")} inline={true} spaced='bottom'/>Ice Climbers</div> },
  { value: "15", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-15-0.png")} inline={true} spaced='bottom'/>Jigglypuff </div> },
  { value: "4", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-4-0.png")} inline={true} spaced='bottom'/>Kirby </div> },
  { value: "6", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-6-0.png")} inline={true} spaced='bottom'/>Link </div> },
  { value: "7", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-7-0.png")} inline={true} spaced='bottom'/>Luigi </div> },
  { value: "8", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-8-0.png")} inline={true} spaced='bottom'/>Mario </div> },
  { value: "9", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-9-0.png")} inline={true} spaced='bottom'/>Marth </div> },
  { value: "10", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-10-0.png")} inline={true} spaced='bottom'/>Mewtwo </div> },
  { value: "3", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-3-0.png")} inline={true} spaced='bottom'/>Mr. Game & Watch</div> },
  { value: "11", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-11-0.png")} inline={true} spaced='bottom'/>Ness </div> },
  { value: "24", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-24-0.png")} inline={true} spaced='bottom'/>Pichu </div> },
  { value: "13", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-13-0.png")} inline={true} spaced='bottom'/>Pikachu </div> },
  { value: "12", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-12-0.png")} inline={true} spaced='bottom'/>Peach </div> },
  { value: "18", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-18-0.png")} inline={true} spaced='bottom'/>Zelda </div> },
  { value: "23", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-23-0.png")} inline={true} spaced='bottom'/>Roy </div> },
  { value: "16", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-16-0.png")} inline={true} spaced='bottom'/>Samus </div> },
  { value: "19", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-19-0.png")} inline={true} spaced='bottom'/>Sheik </div> },
  { value: "17", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-17-0.png")} inline={true} spaced='bottom'/>Yoshi </div> },
  { value: "21", label: <div><Image className={styles["filter-list"]} src={getLocalImage("stock-icon-21-0.png")} inline={true} spaced='bottom'/>Young Link</div> },
]

export function getCharacterList() {
  return characterList;
}

// Filter a list of files given a list of characters to filter by
export function filterCharacters(files, chars) {
  let filteredFiles = files
  chars.forEach(char => {
    filteredFiles = filteredFiles.filter(file => {
      const settings = file.game.getSettings();
      return settings.players[0].characterId === parseInt(char.value, 10) ||
        settings.players[1].characterId === parseInt(char.value, 10);
    })
  })

  return filteredFiles
}
