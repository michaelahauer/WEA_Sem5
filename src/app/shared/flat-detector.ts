export class FlatDetector {
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
        public lowerLimit?: number, 
        public upperLimit: number = 0, 
        public maxAllowedOutlier?: number,
        public thresholdValue?: number, 
        public timeWindowInSec?: number, 
        public aggregationType?: number, 			// CurrentVal = 1, Sum = 2, Avg = 3
        public comparisonOperation?: number 		// Smaller = 1, Bigger = 2
    ) {}

}
