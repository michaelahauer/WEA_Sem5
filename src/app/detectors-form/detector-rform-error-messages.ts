export class ErrorMessage {
    constructor(
      public forControl: string,
      public forValidator: string,
      public text: string
    ) { }
  }
  
export const DetectorRFormErrorMessages = [
    new ErrorMessage('name', 'required', 'Name für Detector wird benötigt'),
    new ErrorMessage('pauseTimeInSec', 'required', 'PauseTime muss angegeben werden'),
    new ErrorMessage('backTimeInSec', 'required', 'BackTime muss angegeben werden'),
    new ErrorMessage('detectorType', 'required', 'Es muss ein DetectorTyp ausgewählt sein'),
];  