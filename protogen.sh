#!/bin/bash
 
protoc --proto_path=. ./proto/*.proto --js_out=import_style=commonjs:./src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src