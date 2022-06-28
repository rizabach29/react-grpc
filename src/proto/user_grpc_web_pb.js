/**
 * @fileoverview gRPC-Web generated client stub for user
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.user = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.user.ExamplePhotoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.user.ExamplePhotoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.User,
 *   !proto.user.User>}
 */
const methodDescriptor_ExamplePhotoService_CreateUser = new grpc.web.MethodDescriptor(
  '/user.ExamplePhotoService/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.user.User,
  proto.user.User,
  /**
   * @param {!proto.user.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.User.deserializeBinary
);


/**
 * @param {!proto.user.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.user.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.ExamplePhotoServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.ExamplePhotoService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_ExamplePhotoService_CreateUser,
      callback);
};


/**
 * @param {!proto.user.User} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.User>}
 *     Promise that resolves to the response
 */
proto.user.ExamplePhotoServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.ExamplePhotoService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_ExamplePhotoService_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.GetUserRequest,
 *   !proto.user.User>}
 */
const methodDescriptor_ExamplePhotoService_GetUser = new grpc.web.MethodDescriptor(
  '/user.ExamplePhotoService/GetUser',
  grpc.web.MethodType.UNARY,
  proto.user.GetUserRequest,
  proto.user.User,
  /**
   * @param {!proto.user.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.User.deserializeBinary
);


/**
 * @param {!proto.user.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.user.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.ExamplePhotoServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.ExamplePhotoService/GetUser',
      request,
      metadata || {},
      methodDescriptor_ExamplePhotoService_GetUser,
      callback);
};


/**
 * @param {!proto.user.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.User>}
 *     Promise that resolves to the response
 */
proto.user.ExamplePhotoServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.ExamplePhotoService/GetUser',
      request,
      metadata || {},
      methodDescriptor_ExamplePhotoService_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.UpdateUserRequest,
 *   !proto.user.User>}
 */
const methodDescriptor_ExamplePhotoService_UpdateUser = new grpc.web.MethodDescriptor(
  '/user.ExamplePhotoService/UpdateUser',
  grpc.web.MethodType.UNARY,
  proto.user.UpdateUserRequest,
  proto.user.User,
  /**
   * @param {!proto.user.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.User.deserializeBinary
);


/**
 * @param {!proto.user.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.user.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.ExamplePhotoServiceClient.prototype.updateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.ExamplePhotoService/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_ExamplePhotoService_UpdateUser,
      callback);
};


/**
 * @param {!proto.user.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.User>}
 *     Promise that resolves to the response
 */
proto.user.ExamplePhotoServicePromiseClient.prototype.updateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.ExamplePhotoService/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_ExamplePhotoService_UpdateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.CreatePhotoRequest,
 *   !proto.user.Photo>}
 */
const methodDescriptor_ExamplePhotoService_CreatePhoto = new grpc.web.MethodDescriptor(
  '/user.ExamplePhotoService/CreatePhoto',
  grpc.web.MethodType.UNARY,
  proto.user.CreatePhotoRequest,
  proto.user.Photo,
  /**
   * @param {!proto.user.CreatePhotoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.Photo.deserializeBinary
);


/**
 * @param {!proto.user.CreatePhotoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.user.Photo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.Photo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.ExamplePhotoServiceClient.prototype.createPhoto =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.ExamplePhotoService/CreatePhoto',
      request,
      metadata || {},
      methodDescriptor_ExamplePhotoService_CreatePhoto,
      callback);
};


/**
 * @param {!proto.user.CreatePhotoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.Photo>}
 *     Promise that resolves to the response
 */
proto.user.ExamplePhotoServicePromiseClient.prototype.createPhoto =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.ExamplePhotoService/CreatePhoto',
      request,
      metadata || {},
      methodDescriptor_ExamplePhotoService_CreatePhoto);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.ListPhotosRequest,
 *   !proto.user.ListPhotosResponse>}
 */
const methodDescriptor_ExamplePhotoService_ListPhotos = new grpc.web.MethodDescriptor(
  '/user.ExamplePhotoService/ListPhotos',
  grpc.web.MethodType.UNARY,
  proto.user.ListPhotosRequest,
  proto.user.ListPhotosResponse,
  /**
   * @param {!proto.user.ListPhotosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.ListPhotosResponse.deserializeBinary
);


/**
 * @param {!proto.user.ListPhotosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.user.ListPhotosResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.ListPhotosResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.ExamplePhotoServiceClient.prototype.listPhotos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.ExamplePhotoService/ListPhotos',
      request,
      metadata || {},
      methodDescriptor_ExamplePhotoService_ListPhotos,
      callback);
};


/**
 * @param {!proto.user.ListPhotosRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.ListPhotosResponse>}
 *     Promise that resolves to the response
 */
proto.user.ExamplePhotoServicePromiseClient.prototype.listPhotos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.ExamplePhotoService/ListPhotos',
      request,
      metadata || {},
      methodDescriptor_ExamplePhotoService_ListPhotos);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.GetPhotoRequest,
 *   !proto.user.Photo>}
 */
const methodDescriptor_ExamplePhotoService_GetPhoto = new grpc.web.MethodDescriptor(
  '/user.ExamplePhotoService/GetPhoto',
  grpc.web.MethodType.UNARY,
  proto.user.GetPhotoRequest,
  proto.user.Photo,
  /**
   * @param {!proto.user.GetPhotoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.Photo.deserializeBinary
);


/**
 * @param {!proto.user.GetPhotoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.user.Photo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.Photo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.ExamplePhotoServiceClient.prototype.getPhoto =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.ExamplePhotoService/GetPhoto',
      request,
      metadata || {},
      methodDescriptor_ExamplePhotoService_GetPhoto,
      callback);
};


/**
 * @param {!proto.user.GetPhotoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.Photo>}
 *     Promise that resolves to the response
 */
proto.user.ExamplePhotoServicePromiseClient.prototype.getPhoto =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.ExamplePhotoService/GetPhoto',
      request,
      metadata || {},
      methodDescriptor_ExamplePhotoService_GetPhoto);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.user.Photo>}
 */
const methodDescriptor_ExamplePhotoService_GetPhotos = new grpc.web.MethodDescriptor(
  '/user.ExamplePhotoService/GetPhotos',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_empty_pb.Empty,
  proto.user.Photo,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.Photo.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.user.Photo>}
 *     The XHR Node Readable Stream
 */
proto.user.ExamplePhotoServiceClient.prototype.getPhotos =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/user.ExamplePhotoService/GetPhotos',
      request,
      metadata || {},
      methodDescriptor_ExamplePhotoService_GetPhotos);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.user.Photo>}
 *     The XHR Node Readable Stream
 */
proto.user.ExamplePhotoServicePromiseClient.prototype.getPhotos =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/user.ExamplePhotoService/GetPhotos',
      request,
      metadata || {},
      methodDescriptor_ExamplePhotoService_GetPhotos);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.DeletePhotoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ExamplePhotoService_DeletePhoto = new grpc.web.MethodDescriptor(
  '/user.ExamplePhotoService/DeletePhoto',
  grpc.web.MethodType.UNARY,
  proto.user.DeletePhotoRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.user.DeletePhotoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.user.DeletePhotoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.ExamplePhotoServiceClient.prototype.deletePhoto =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.ExamplePhotoService/DeletePhoto',
      request,
      metadata || {},
      methodDescriptor_ExamplePhotoService_DeletePhoto,
      callback);
};


/**
 * @param {!proto.user.DeletePhotoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.user.ExamplePhotoServicePromiseClient.prototype.deletePhoto =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.ExamplePhotoService/DeletePhoto',
      request,
      metadata || {},
      methodDescriptor_ExamplePhotoService_DeletePhoto);
};


module.exports = proto.user;

