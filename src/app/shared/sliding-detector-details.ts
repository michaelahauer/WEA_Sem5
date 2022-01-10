export class SlidingDetectorDetails {

    constructor(
        //SlidingWindowDetector:
                public thresholdValue?: number, 
                public timeWindowInSec?: number, 
                public aggregationType?: number, 			// CurrentVal = 1, Sum = 2, Avg = 3
                public comparisonOperation?: number, 		// Smaller = 1, Bigger = 2
        ){}

}
