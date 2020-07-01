import * as $protobuf from "protobufjs";
import * as Long from 'long';
export namespace health {

    namespace centiva {

        namespace registry {

            namespace model {

                interface IAddInfoHashRequest {
                    infoHash?: (Uint8Array|null);
                    labId?: (string|null);
                    labName?: (string|null);
                    version?: (string|null);
                    testDate?: (string|null);
                    testResult?: (string|null);
                }

                class AddInfoHashRequest implements IAddInfoHashRequest {
                    constructor(properties?: health.centiva.registry.model.IAddInfoHashRequest);
                    public infoHash: Uint8Array;
                    public labId: string;
                    public labName: string;
                    public version: string;
                    public testDate: string;
                    public testResult: string;
                    public static create(properties?: health.centiva.registry.model.IAddInfoHashRequest): health.centiva.registry.model.AddInfoHashRequest;
                    public static encode(message: health.centiva.registry.model.IAddInfoHashRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: health.centiva.registry.model.IAddInfoHashRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): health.centiva.registry.model.AddInfoHashRequest;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): health.centiva.registry.model.AddInfoHashRequest;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): health.centiva.registry.model.AddInfoHashRequest;
                    public static toObject(message: health.centiva.registry.model.AddInfoHashRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}

export namespace google {

    namespace protobuf {

        interface ITimestamp {
            seconds?: (number|Long|null);
            nanos?: (number|null);
        }

        class Timestamp implements ITimestamp {
            constructor(properties?: google.protobuf.ITimestamp);
            public seconds: (number|Long);
            public nanos: number;
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }
}
