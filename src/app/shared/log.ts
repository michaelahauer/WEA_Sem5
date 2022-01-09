import { Timestamp } from "rxjs";

export class Log {
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
