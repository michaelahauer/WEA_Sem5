import { DetectorDetails } from "./detector-details";

export class Detector {
    constructor(
        public id?: number,
		public metricId?: number,
		public pauseTimeInSec?: number, 
		public backTimeInSec?: number, 
		public name?: string, 				
		public createdTimestamp?: Date, 
		public detectorType?: number,                // Boundary = 1, SlidingWindow = 2
		public isActive?: Boolean, 		
		public lastTriggered?: Date, 
        public detail: DetectorDetails = new DetectorDetails(0,0,0,0,0,0,0)
    ) {}
}
