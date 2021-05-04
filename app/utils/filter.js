import React from 'react';
import getLocalImage from './image';
import styles from '../components/FileLoader.scss'

// Values are based on mappings between character and Slippi's numerical index
// but in the filter they are represented alphabetically.
const characterList = [
  { value: "5", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-5-0.png")}/>Bowser </div> },
  { value: "0", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-0-0.png")}/>Captain Falcon</div> },
  { value: "1", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-1-0.png")}/>Donkey Kong</div> },
  { value: "22", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-22-0.png")}/>Dr. Mario</div> },
  { value: "20", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-20-0.png")}/>Falco </div> },
  { value: "2", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-2-0.png")}/>Fox </div> },
  { value: "25", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-25-0.png")}/>Ganondorf </div> },
  { value: "14", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-14-0.png")}/>Ice Climbers</div> },
  { value: "15", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-15-0.png")}/>Jigglypuff </div> },
  { value: "4", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-4-0.png")}/>Kirby </div> },
  { value: "6", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-6-0.png")}/>Link </div> },
  { value: "7", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-7-0.png")}/>Luigi </div> },
  { value: "8", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-8-0.png")}/>Mario </div> },
  { value: "9", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-9-0.png")}/>Marth </div> },
  { value: "10", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-10-0.png")}/>Mewtwo </div> },
  { value: "3", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-3-0.png")}/>Mr. Game & Watch</div> },
  { value: "11", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-11-0.png")}/>Ness </div> },
  { value: "24", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-24-0.png")}/>Pichu </div> },
  { value: "13", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-13-0.png")}/>Pikachu </div> },
  { value: "12", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-12-0.png")}/>Peach </div> },
  { value: "18", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-18-0.png")}/>Zelda </div> },
  { value: "23", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-23-0.png")}/>Roy </div> },
  { value: "16", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-16-0.png")}/>Samus </div> },
  { value: "19", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-19-0.png")}/>Sheik </div> },
  { value: "17", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-17-0.png")}/>Yoshi </div> },
  { value: "21", label: <div><img className={styles["filter-list"]} src={getLocalImage("stock-icon-21-0.png")}/>Young Link</div> }
]

export function getCharacterList() {
  return characterList;
}

// Filter a list of files given a list of characters to filter by
export function filterCharacters(files, chars) {
  chars.forEach(char => {
    files = files.filter(file => {
      const settings = file.game.getSettings();
      return settings.players[0].characterId == char.value ||
        settings.players[1].characterId == char.value
    })
  })

  return files
}
