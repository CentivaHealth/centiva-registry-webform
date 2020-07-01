import * as $protobuf from "protobufjs";
export namespace health {

    namespace centiva {

        namespace registry {

            namespace model {

                interface IErrorResponse {
                    message?: (string|null);
                }

                class ErrorResponse implements IErrorResponse {
                    constructor(properties?: health.centiva.registry.model.IErrorResponse);
                    public message: string;
                    public static create(properties?: health.centiva.registry.model.IErrorResponse): health.centiva.registry.model.ErrorResponse;
                    public static encode(message: health.centiva.registry.model.IErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: health.centiva.registry.model.IErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): health.centiva.registry.model.ErrorResponse;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): health.centiva.registry.model.ErrorResponse;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): health.centiva.registry.model.ErrorResponse;
                    public static toObject(message: health.centiva.registry.model.ErrorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}
