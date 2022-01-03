export class Metric {
    constructor(
        public id?: bigint,
        public clientApplicationName?: string,
        public clientInstanceAssignedId?: bigint,
        public telemetryDataName?: string,
        public metricType?: bigint,
		public CreatedTimestamp?: Date
    ) {}
}
