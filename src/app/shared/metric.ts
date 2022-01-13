export class Metric {
    constructor(
        public id?: number,
        public clientApplicationName?: string,
        public clientInstanceAssignedId?: number,
        public telemetryDataName?: string,
        public metricType?: number,
		public createdTimestamp?: Date
    ) {}
}
