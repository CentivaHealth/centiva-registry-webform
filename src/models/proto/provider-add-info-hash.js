/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.health = (function() {
    
        /**
         * Namespace health.
         * @exports health
         * @namespace
         */
        var health = {};
    
        health.centiva = (function() {
    
            /**
             * Namespace centiva.
             * @memberof health
             * @namespace
             */
            var centiva = {};
    
            centiva.registry = (function() {
    
                /**
                 * Namespace registry.
                 * @memberof health.centiva
                 * @namespace
                 */
                var registry = {};
    
                registry.model = (function() {
    
                    /**
                     * Namespace model.
                     * @memberof health.centiva.registry
                     * @namespace
                     */
                    var model = {};
    
                    model.AddInfoHashRequest = (function() {
    
                        /**
                         * Properties of an AddInfoHashRequest.
                         * @memberof health.centiva.registry.model
                         * @interface IAddInfoHashRequest
                         * @property {Uint8Array|null} [infoHash] AddInfoHashRequest infoHash
                         * @property {string|null} [labId] AddInfoHashRequest labId
                         * @property {string|null} [labName] AddInfoHashRequest labName
                         * @property {string|null} [version] AddInfoHashRequest version
                         * @property {string|null} [testDate] AddInfoHashRequest testDate
                         * @property {string|null} [testResult] AddInfoHashRequest testResult
                         */
    
                        /**
                         * Constructs a new AddInfoHashRequest.
                         * @memberof health.centiva.registry.model
                         * @classdesc Represents an AddInfoHashRequest.
                         * @implements IAddInfoHashRequest
                         * @constructor
                         * @param {health.centiva.registry.model.IAddInfoHashRequest=} [properties] Properties to set
                         */
                        function AddInfoHashRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * AddInfoHashRequest infoHash.
                         * @member {Uint8Array} infoHash
                         * @memberof health.centiva.registry.model.AddInfoHashRequest
                         * @instance
                         */
                        AddInfoHashRequest.prototype.infoHash = $util.newBuffer([]);
    
                        /**
                         * AddInfoHashRequest labId.
                         * @member {string} labId
                         * @memberof health.centiva.registry.model.AddInfoHashRequest
                         * @instance
                         */
                        AddInfoHashRequest.prototype.labId = "";
    
                        /**
                         * AddInfoHashRequest labName.
                         * @member {string} labName
                         * @memberof health.centiva.registry.model.AddInfoHashRequest
                         * @instance
                         */
                        AddInfoHashRequest.prototype.labName = "";
    
                        /**
                         * AddInfoHashRequest version.
                         * @member {string} version
                         * @memberof health.centiva.registry.model.AddInfoHashRequest
                         * @instance
                         */
                        AddInfoHashRequest.prototype.version = "";
    
                        /**
                         * AddInfoHashRequest testDate.
                         * @member {string} testDate
                         * @memberof health.centiva.registry.model.AddInfoHashRequest
                         * @instance
                         */
                        AddInfoHashRequest.prototype.testDate = "";
    
                        /**
                         * AddInfoHashRequest testResult.
                         * @member {string} testResult
                         * @memberof health.centiva.registry.model.AddInfoHashRequest
                         * @instance
                         */
                        AddInfoHashRequest.prototype.testResult = "";
    
                        /**
                         * Creates a new AddInfoHashRequest instance using the specified properties.
                         * @function create
                         * @memberof health.centiva.registry.model.AddInfoHashRequest
                         * @static
                         * @param {health.centiva.registry.model.IAddInfoHashRequest=} [properties] Properties to set
                         * @returns {health.centiva.registry.model.AddInfoHashRequest} AddInfoHashRequest instance
                         */
                        AddInfoHashRequest.create = function create(properties) {
                            return new AddInfoHashRequest(properties);
                        };
    
                        /**
                         * Encodes the specified AddInfoHashRequest message. Does not implicitly {@link health.centiva.registry.model.AddInfoHashRequest.verify|verify} messages.
                         * @function encode
                         * @memberof health.centiva.registry.model.AddInfoHashRequest
                         * @static
                         * @param {health.centiva.registry.model.IAddInfoHashRequest} message AddInfoHashRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AddInfoHashRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.infoHash != null && Object.hasOwnProperty.call(message, "infoHash"))
                                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.infoHash);
                            if (message.labId != null && Object.hasOwnProperty.call(message, "labId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.labId);
                            if (message.labName != null && Object.hasOwnProperty.call(message, "labName"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.labName);
                            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.version);
                            if (message.testDate != null && Object.hasOwnProperty.call(message, "testDate"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.testDate);
                            if (message.testResult != null && Object.hasOwnProperty.call(message, "testResult"))
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.testResult);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified AddInfoHashRequest message, length delimited. Does not implicitly {@link health.centiva.registry.model.AddInfoHashRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof health.centiva.registry.model.AddInfoHashRequest
                         * @static
                         * @param {health.centiva.registry.model.IAddInfoHashRequest} message AddInfoHashRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AddInfoHashRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an AddInfoHashRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof health.centiva.registry.model.AddInfoHashRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {health.centiva.registry.model.AddInfoHashRequest} AddInfoHashRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AddInfoHashRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.health.centiva.registry.model.AddInfoHashRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.infoHash = reader.bytes();
                                    break;
                                case 2:
                                    message.labId = reader.string();
                                    break;
                                case 3:
                                    message.labName = reader.string();
                                    break;
                                case 4:
                                    message.version = reader.string();
                                    break;
                                case 5:
                                    message.testDate = reader.string();
                                    break;
                                case 6:
                                    message.testResult = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes an AddInfoHashRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof health.centiva.registry.model.AddInfoHashRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {health.centiva.registry.model.AddInfoHashRequest} AddInfoHashRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AddInfoHashRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an AddInfoHashRequest message.
                         * @function verify
                         * @memberof health.centiva.registry.model.AddInfoHashRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        AddInfoHashRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.infoHash != null && message.hasOwnProperty("infoHash"))
                                if (!(message.infoHash && typeof message.infoHash.length === "number" || $util.isString(message.infoHash)))
                                    return "infoHash: buffer expected";
                            if (message.labId != null && message.hasOwnProperty("labId"))
                                if (!$util.isString(message.labId))
                                    return "labId: string expected";
                            if (message.labName != null && message.hasOwnProperty("labName"))
                                if (!$util.isString(message.labName))
                                    return "labName: string expected";
                            if (message.version != null && message.hasOwnProperty("version"))
                                if (!$util.isString(message.version))
                                    return "version: string expected";
                            if (message.testDate != null && message.hasOwnProperty("testDate"))
                                if (!$util.isString(message.testDate))
                                    return "testDate: string expected";
                            if (message.testResult != null && message.hasOwnProperty("testResult"))
                                if (!$util.isString(message.testResult))
                                    return "testResult: string expected";
                            return null;
                        };
    
                        /**
                         * Creates an AddInfoHashRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof health.centiva.registry.model.AddInfoHashRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {health.centiva.registry.model.AddInfoHashRequest} AddInfoHashRequest
                         */
                        AddInfoHashRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.health.centiva.registry.model.AddInfoHashRequest)
                                return object;
                            var message = new $root.health.centiva.registry.model.AddInfoHashRequest();
                            if (object.infoHash != null)
                                if (typeof object.infoHash === "string")
                                    $util.base64.decode(object.infoHash, message.infoHash = $util.newBuffer($util.base64.length(object.infoHash)), 0);
                                else if (object.infoHash.length)
                                    message.infoHash = object.infoHash;
                            if (object.labId != null)
                                message.labId = String(object.labId);
                            if (object.labName != null)
                                message.labName = String(object.labName);
                            if (object.version != null)
                                message.version = String(object.version);
                            if (object.testDate != null)
                                message.testDate = String(object.testDate);
                            if (object.testResult != null)
                                message.testResult = String(object.testResult);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an AddInfoHashRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof health.centiva.registry.model.AddInfoHashRequest
                         * @static
                         * @param {health.centiva.registry.model.AddInfoHashRequest} message AddInfoHashRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        AddInfoHashRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                if (options.bytes === String)
                                    object.infoHash = "";
                                else {
                                    object.infoHash = [];
                                    if (options.bytes !== Array)
                                        object.infoHash = $util.newBuffer(object.infoHash);
                                }
                                object.labId = "";
                                object.labName = "";
                                object.version = "";
                                object.testDate = "";
                                object.testResult = "";
                            }
                            if (message.infoHash != null && message.hasOwnProperty("infoHash"))
                                object.infoHash = options.bytes === String ? $util.base64.encode(message.infoHash, 0, message.infoHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.infoHash) : message.infoHash;
                            if (message.labId != null && message.hasOwnProperty("labId"))
                                object.labId = message.labId;
                            if (message.labName != null && message.hasOwnProperty("labName"))
                                object.labName = message.labName;
                            if (message.version != null && message.hasOwnProperty("version"))
                                object.version = message.version;
                            if (message.testDate != null && message.hasOwnProperty("testDate"))
                                object.testDate = message.testDate;
                            if (message.testResult != null && message.hasOwnProperty("testResult"))
                                object.testResult = message.testResult;
                            return object;
                        };
    
                        /**
                         * Converts this AddInfoHashRequest to JSON.
                         * @function toJSON
                         * @memberof health.centiva.registry.model.AddInfoHashRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        AddInfoHashRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return AddInfoHashRequest;
                    })();
    
                    return model;
                })();
    
                return registry;
            })();
    
            return centiva;
        })();
    
        return health;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.Timestamp = (function() {
    
                /**
                 * Properties of a Timestamp.
                 * @memberof google.protobuf
                 * @interface ITimestamp
                 * @property {number|Long|null} [seconds] Timestamp seconds
                 * @property {number|null} [nanos] Timestamp nanos
                 */
    
                /**
                 * Constructs a new Timestamp.
                 * @memberof google.protobuf
                 * @classdesc Represents a Timestamp.
                 * @implements ITimestamp
                 * @constructor
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 */
                function Timestamp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Timestamp seconds.
                 * @member {number|Long} seconds
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Timestamp nanos.
                 * @member {number} nanos
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.nanos = 0;
    
                /**
                 * Creates a new Timestamp instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 * @returns {google.protobuf.Timestamp} Timestamp instance
                 */
                Timestamp.create = function create(properties) {
                    return new Timestamp(properties);
                };
    
                /**
                 * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                    if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                    return writer;
                };
    
                /**
                 * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.seconds = reader.int64();
                            break;
                        case 2:
                            message.nanos = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Timestamp message.
                 * @function verify
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Timestamp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                            return "seconds: integer|Long expected";
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        if (!$util.isInteger(message.nanos))
                            return "nanos: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Timestamp} Timestamp
                 */
                Timestamp.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Timestamp)
                        return object;
                    var message = new $root.google.protobuf.Timestamp();
                    if (object.seconds != null)
                        if ($util.Long)
                            (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                        else if (typeof object.seconds === "string")
                            message.seconds = parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                    if (object.nanos != null)
                        message.nanos = object.nanos | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.Timestamp} message Timestamp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Timestamp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.seconds = options.longs === String ? "0" : 0;
                        object.nanos = 0;
                    }
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (typeof message.seconds === "number")
                            object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                        else
                            object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        object.nanos = message.nanos;
                    return object;
                };
    
                /**
                 * Converts this Timestamp to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Timestamp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Timestamp;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
