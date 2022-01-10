import { SlidingDetectorDetails } from "./sliding-detector-details";

export class SlidingDetector {
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
            public detail: SlidingDetectorDetails = new SlidingDetectorDetails(0,0,0,0)
        ) {}

}
