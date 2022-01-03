import { Timestamp } from "rxjs";

export class Log {
    constructor(
        public id: bigint,
        public clientApplicationName: string,
        public clientInstanceAssignedId: bigint,
        public telemetryDataName : string,
        public message: string,
        public category: bigint,
        public createdTimestamp: Date
    ) {}
}
