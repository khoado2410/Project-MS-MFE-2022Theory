// Original file: src/protobuf/log.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Log as _packagelogs_Log, Log__Output as _packagelogs_Log__Output } from '../packagelogs/Log';

export interface LogServiceClient extends grpc.Client {
  LogInfo(argument: _packagelogs_Log, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_packagelogs_Log__Output>): grpc.ClientUnaryCall;
  LogInfo(argument: _packagelogs_Log, metadata: grpc.Metadata, callback: grpc.requestCallback<_packagelogs_Log__Output>): grpc.ClientUnaryCall;
  LogInfo(argument: _packagelogs_Log, options: grpc.CallOptions, callback: grpc.requestCallback<_packagelogs_Log__Output>): grpc.ClientUnaryCall;
  LogInfo(argument: _packagelogs_Log, callback: grpc.requestCallback<_packagelogs_Log__Output>): grpc.ClientUnaryCall;
  logInfo(argument: _packagelogs_Log, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_packagelogs_Log__Output>): grpc.ClientUnaryCall;
  logInfo(argument: _packagelogs_Log, metadata: grpc.Metadata, callback: grpc.requestCallback<_packagelogs_Log__Output>): grpc.ClientUnaryCall;
  logInfo(argument: _packagelogs_Log, options: grpc.CallOptions, callback: grpc.requestCallback<_packagelogs_Log__Output>): grpc.ClientUnaryCall;
  logInfo(argument: _packagelogs_Log, callback: grpc.requestCallback<_packagelogs_Log__Output>): grpc.ClientUnaryCall;
  
}

export interface LogServiceHandlers extends grpc.UntypedServiceImplementation {
  LogInfo: grpc.handleUnaryCall<_packagelogs_Log__Output, _packagelogs_Log>;
  
}

export interface LogServiceDefinition extends grpc.ServiceDefinition {
  LogInfo: MethodDefinition<_packagelogs_Log, _packagelogs_Log, _packagelogs_Log__Output, _packagelogs_Log__Output>
}
