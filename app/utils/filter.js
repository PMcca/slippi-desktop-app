import React from 'react';
import { Image } from 'semantic-ui-react';
import { stages as stageUtils, characters as charUtils } from '@slippi/slippi-js';
import types from '@slippi/slippi-js'
// import { characters as charUtils } from '@slippi/slippi-js'
import getLocalImage from './image';
import styles from '../components/FileLoader.scss';

const characterList = generateCharacterList();

export function getCharacterList() {
  return characterList;
}

function generateCharacterList() {
  const chars = [];
  let i;
  for(i = 0; i < 26; i++) {
    const charName = charUtils.getCharacterName(i)
    chars.push({ value: i, label: <div><Image className={styles["filter-list"]} src={getLocalImage(`stock-icon-${  i  }-0.png`)} inline={true} spaced='bottom'/>{ charName }</div> , name:charName})
  }
  // Return list sorted alphabetically
  return chars.sort((a, b) =>  a.name.localeCompare(b.name));
}

function generateStageList() {
  let stgs = types.Stage
  const stages = [];
  let i;
  for(i = 2; i < 29; i++) {
    const stage = stageUtils.getStageName(i);
    stages.push(stage);
  }
  return stages;
}

// Filter a list of files given a list of characters to filter by
export function filterCharacters(files, chars) {
  generateStageList();
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

export function filterStages(files, stages) {
  let filteredFiles = files;
  stages.forEach(stage => {
    filteredFiles = filteredFiles.filter(file => {
      const settings = file.game.getSettings();
      return settings.stageId === parseInt(stage.value, 10);
    })
  })

  return filteredFiles;
}
