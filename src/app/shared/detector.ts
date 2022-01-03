export class Detector {
    constructor(
        public id?: bigint,
		public MetricId?: bigint,
		public PauseTimeInSec?: bigint, 
		public BackTimeInSec?: bigint, 
		public Name?: string, 				
		public CreatedTimestamp?: Date, 
		public DetectorType?: bigint,                // Boundary = 1, SlidingWindow = 2
		public IsActive?: Boolean, 		
		public LastTriggered?: Date, 

//SlidingWindowDetector:
        public ThresholdValue?: number, 
        public TimeWindowInSec?: bigint, 
        public AggregationType?: bigint, 			// CurrentVal = 1, Sum = 2, Avg = 3
        public ComparisonOperation?: bigint, 		// Smaller = 1, Bigger = 2

//BoundaryDetector:
        public LowerLimit?: number, 
        public UpperLimit?: number, 
        public MaxAllowedOutlier?: bigint 
    ) {}
}
