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
    
                    model.ErrorResponse = (function() {
    
                        /**
                         * Properties of an ErrorResponse.
                         * @memberof health.centiva.registry.model
                         * @interface IErrorResponse
                         * @property {string|null} [message] ErrorResponse message
                         */
    
                        /**
                         * Constructs a new ErrorResponse.
                         * @memberof health.centiva.registry.model
                         * @classdesc Represents an ErrorResponse.
                         * @implements IErrorResponse
                         * @constructor
                         * @param {health.centiva.registry.model.IErrorResponse=} [properties] Properties to set
                         */
                        function ErrorResponse(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ErrorResponse message.
                         * @member {string} message
                         * @memberof health.centiva.registry.model.ErrorResponse
                         * @instance
                         */
                        ErrorResponse.prototype.message = "";
    
                        /**
                         * Creates a new ErrorResponse instance using the specified properties.
                         * @function create
                         * @memberof health.centiva.registry.model.ErrorResponse
                         * @static
                         * @param {health.centiva.registry.model.IErrorResponse=} [properties] Properties to set
                         * @returns {health.centiva.registry.model.ErrorResponse} ErrorResponse instance
                         */
                        ErrorResponse.create = function create(properties) {
                            return new ErrorResponse(properties);
                        };
    
                        /**
                         * Encodes the specified ErrorResponse message. Does not implicitly {@link health.centiva.registry.model.ErrorResponse.verify|verify} messages.
                         * @function encode
                         * @memberof health.centiva.registry.model.ErrorResponse
                         * @static
                         * @param {health.centiva.registry.model.IErrorResponse} message ErrorResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ErrorResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ErrorResponse message, length delimited. Does not implicitly {@link health.centiva.registry.model.ErrorResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof health.centiva.registry.model.ErrorResponse
                         * @static
                         * @param {health.centiva.registry.model.IErrorResponse} message ErrorResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ErrorResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an ErrorResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof health.centiva.registry.model.ErrorResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {health.centiva.registry.model.ErrorResponse} ErrorResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ErrorResponse.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.health.centiva.registry.model.ErrorResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.message = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes an ErrorResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof health.centiva.registry.model.ErrorResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {health.centiva.registry.model.ErrorResponse} ErrorResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ErrorResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an ErrorResponse message.
                         * @function verify
                         * @memberof health.centiva.registry.model.ErrorResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ErrorResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.message != null && message.hasOwnProperty("message"))
                                if (!$util.isString(message.message))
                                    return "message: string expected";
                            return null;
                        };
    
                        /**
                         * Creates an ErrorResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof health.centiva.registry.model.ErrorResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {health.centiva.registry.model.ErrorResponse} ErrorResponse
                         */
                        ErrorResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.health.centiva.registry.model.ErrorResponse)
                                return object;
                            var message = new $root.health.centiva.registry.model.ErrorResponse();
                            if (object.message != null)
                                message.message = String(object.message);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an ErrorResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof health.centiva.registry.model.ErrorResponse
                         * @static
                         * @param {health.centiva.registry.model.ErrorResponse} message ErrorResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ErrorResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.message = "";
                            if (message.message != null && message.hasOwnProperty("message"))
                                object.message = message.message;
                            return object;
                        };
    
                        /**
                         * Converts this ErrorResponse to JSON.
                         * @function toJSON
                         * @memberof health.centiva.registry.model.ErrorResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ErrorResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return ErrorResponse;
                    })();
    
                    return model;
                })();
    
                return registry;
            })();
    
            return centiva;
        })();
    
        return health;
    })();

    return $root;
});
