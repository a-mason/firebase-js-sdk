/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as protoLoader from '@grpc/proto-loader';
import * as grpc from 'grpc';
import { resolve } from 'path';

/**
 * Loads the protocol buffer definitions for Firestore.
 *
 * @returns The GrpcObject representing our protos.
 */
export function loadProtos(): grpc.GrpcObject {
  const root = resolve(
    __dirname,
    process.env.FIRESTORE_PROTO_ROOT || '../protos'
  );
  const pkgDef = protoLoader.loadSync(
    resolve(root, 'google/firestore/v1/firestore.proto'),
    { includeDirs: [root] }
  );
  return grpc.loadPackageDefinition(pkgDef);
}
