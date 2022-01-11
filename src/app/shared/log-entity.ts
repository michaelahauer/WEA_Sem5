export class LogEntity {
    constructor(
        public id: number,
        public clientApplicationName: string,
        public clientInstanceAssignedId: number,
        public telemetryDataName : string,
        public message: string,
        public category: number,
        public createdTimestamp: Date
    ) {}

}
