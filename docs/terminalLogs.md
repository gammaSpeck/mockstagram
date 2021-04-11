# Here's a sample run of the skaffold dev command

## The Skaffold dev command

```powershell
> skaffold dev

Listing files to watch...
 - gammaspeck/mk-nurse
 - gammaspeck/mk-producer
Generating tags...
 - gammaspeck/mk-nurse -> gammaspeck/mk-nurse:517d055
 - gammaspeck/mk-producer -> gammaspeck/mk-producer:517d055
Checking cache...
 - gammaspeck/mk-nurse: Not found. Building
 - gammaspeck/mk-producer: Not found. Building
Found [docker-desktop] context, using local docker daemon.
Building [gammaspeck/mk-nurse]...
Sending build context to Docker daemon  62.46kB
Step 1/6 : FROM node:alpine
 ---> 5d97b3d11dc1
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 6a5985b1248b
Step 3/6 : COPY package.json .
 ---> 261666655981
Step 4/6 : RUN yarn
 ---> Running in e7c3c54d0527
yarn install v1.22.4
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.2: The platform "linux" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 16.63s.
 ---> e93c3b953a41
Step 5/6 : COPY . .
 ---> 7fa9d32116bb
Step 6/6 : CMD ["yarn", "start"]
 ---> Running in adee766c5916
 ---> cad4682cc1ad
Successfully built cad4682cc1ad
Successfully tagged gammaspeck/mk-nurse:517d055
Building [gammaspeck/mk-producer]...
Sending build context to Docker daemon   59.9kB
Step 1/6 : FROM node:alpine
 ---> 5d97b3d11dc1
Step 2/6 : WORKDIR /app
 ---> Using cache
 ---> 6a5985b1248b
Step 3/6 : COPY package.json .
 ---> 85d426dfbe7e
Step 4/6 : RUN yarn
 ---> Running in 258c1377a327
yarn install v1.22.4
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.2: The platform "linux" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 5.79s.
 ---> 5fa834bb8d1c
Step 5/6 : COPY . .
 ---> 94df520ee0f7
Step 6/6 : CMD ["yarn", "start"]
 ---> Running in c32983733d9b
 ---> 8f4d49da1e40
Successfully built 8f4d49da1e40
Successfully tagged gammaspeck/mk-producer:517d055
Tags used in deployment:
 - gammaspeck/mk-nurse -> gammaspeck/mk-nurse:cad4682cc1ad8aad8652602d984ccaf9dc8e6f22c3affbe27277778fa4a1aca5
 - gammaspeck/mk-producer -> gammaspeck/mk-producer:8f4d49da1e401d63915acd2cfe60ae48fc598aa6471285b77bbd32489c1df351
Starting deploy...
 - deployment.apps/mk-nurse-depl created
 - deployment.apps/mk-producer-depl created
 - deployment.apps/nats-depl created
 - service/nats-srv created
 - deployment.apps/redis-depl created
 - service/redis-srv created
Waiting for deployments to stabilize...
 - deployment/mk-producer-depl: waiting for rollout to finish: 0 of 4 updated replicas are available...
    - pod/mk-producer-depl-64d8dd5b67-7fc25: creating container mk-producer
    - pod/mk-producer-depl-64d8dd5b67-7rb7n: creating container mk-producer
    - pod/mk-producer-depl-64d8dd5b67-gjb5s: creating container mk-producer
    - pod/mk-producer-depl-64d8dd5b67-5wqpw: creating container mk-producer
 - deployment/nats-depl: waiting for rollout to finish: 0 of 1 updated replicas are available...
    - pod/nats-depl-7d8d64549d-tm9zd: creating container nats
 - deployment/mk-nurse-depl: waiting for rollout to finish: 0 of 1 updated replicas are available...
    - pod/mk-nurse-depl-d68cf74cd-czgg9: creating container mk-nurse
 - deployment/mk-producer-depl: waiting for rollout to finish: 0 of 4 updated replicas are available...
    - pod/mk-producer-depl-64d8dd5b67-5wqpw: creating container mk-producer
    - pod/mk-producer-depl-64d8dd5b67-7fc25: creating container mk-producer
    - pod/mk-producer-depl-64d8dd5b67-7rb7n: creating container mk-producer
    - pod/mk-producer-depl-64d8dd5b67-gjb5s: creating container mk-producer
 - deployment/nats-depl: waiting for rollout to finish: 0 of 1 updated replicas are available...
    - pod/nats-depl-7d8d64549d-tm9zd: creating container nats
 - deployment/redis-depl: waiting for rollout to finish: 0 of 1 updated replicas are available...
    - pod/redis-depl-68bc5979d8-4fncz: creating container redis
 - deployment/mk-nurse-depl: waiting for rollout to finish: 0 of 1 updated replicas are available...
 - deployment/nats-depl: waiting for rollout to finish: 0 of 1 updated replicas are available...
 - deployment/nats-depl is ready. [3/4 deployment(s) still pending]
 - deployment/mk-nurse-depl is ready. [2/4 deployment(s) still pending]
 - deployment/mk-producer-depl: waiting for rollout to finish: 0 of 4 updated replicas are available...
    - pod/mk-producer-depl-64d8dd5b67-gjb5s: creating container mk-producer
 - deployment/mk-producer-depl is ready. [1/4 deployment(s) still pending]
 - deployment/redis-depl is ready.
Deployments stabilized in 39.8866437s
Press Ctrl+C to exit
Watching for changes...
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] yarn run v1.22.4
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] $ ts-node-dev --poll src/index.ts
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] [INFO] 17:10:00 ts-node-dev ver. 1.1.6 (using ts-node ver. 9.1.1, typescript ver. 4.2.4)
[mk-producer-depl-64d8dd5b67-gjb5s mk-producer] yarn run v1.22.4
[mk-producer-depl-64d8dd5b67-gjb5s mk-producer] $ ts-node-dev --poll src/index.ts
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer] yarn run v1.22.4
[mk-producer-depl-64d8dd5b67-7rb7n mk-producer] yarn run v1.22.4
[mk-producer-depl-64d8dd5b67-7fc25 mk-producer] yarn run v1.22.4
[mk-producer-depl-64d8dd5b67-gjb5s mk-producer] [INFO] 17:10:00 ts-node-dev ver. 1.1.6 (using ts-node ver. 9.1.1, typescript ver. 4.2.4)
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer] $ ts-node-dev --poll src/index.ts
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer] [INFO] 17:09:59 ts-node-dev ver. 1.1.6 (using ts-node ver. 9.1.1, typescript ver. 4.2.4)
[mk-producer-depl-64d8dd5b67-7rb7n mk-producer] $ ts-node-dev --poll src/index.ts
[mk-producer-depl-64d8dd5b67-7rb7n mk-producer] [INFO] 17:09:59 ts-node-dev ver. 1.1.6 (using ts-node ver. 9.1.1, typescript ver. 4.2.4)
[mk-producer-depl-64d8dd5b67-7fc25 mk-producer] $ ts-node-dev --poll src/index.ts
[mk-producer-depl-64d8dd5b67-7fc25 mk-producer] [INFO] 17:09:59 ts-node-dev ver. 1.1.6 (using ts-node ver. 9.1.1, typescript ver. 4.2.4)
[mk-producer-depl-64d8dd5b67-7rb7n mk-producer] Connected to NATS
[mk-producer-depl-64d8dd5b67-7fc25 mk-producer] Connected to NATS
[mk-producer-depl-64d8dd5b67-7rb7n mk-producer] Connected to REDIS
[mk-producer-depl-64d8dd5b67-7fc25 mk-producer] Connected to REDIS
[mk-producer-depl-64d8dd5b67-7rb7n mk-producer] First server registered, and total num of servers: 1
[mk-producer-depl-64d8dd5b67-7fc25 mk-producer] I am not the first server. Existing servers: { 'ro0GRIHPvQzXCQO-Tm4of': '1' }
[mk-producer-depl-64d8dd5b67-7rb7n mk-producer] -----------------------------------------------------------
[mk-producer-depl-64d8dd5b67-7fc25 mk-producer] -----------------------------------------------------------
[mk-producer-depl-64d8dd5b67-7fc25 mk-producer] Latest Redis Map State { 'ro0GRIHPvQzXCQO-Tm4of': '1', DGdWVGA6eB7nEoSJTXX2p: '2' }
[mk-producer-depl-64d8dd5b67-7fc25 mk-producer] Latest Total:  2
[mk-producer-depl-64d8dd5b67-7fc25 mk-producer] -----------------------------------------------------------
[mk-producer-depl-64d8dd5b67-7fc25 mk-producer]
[mk-producer-depl-64d8dd5b67-7rb7n mk-producer] Latest Redis Map State { 'ro0GRIHPvQzXCQO-Tm4of': '1' }
[mk-producer-depl-64d8dd5b67-7rb7n mk-producer] Latest Total:  1
[mk-producer-depl-64d8dd5b67-7rb7n mk-producer] -----------------------------------------------------------
[mk-producer-depl-64d8dd5b67-7rb7n mk-producer]
[mk-producer-depl-64d8dd5b67-7fc25 mk-producer] Event published to subject: producer:started
[mk-producer-depl-64d8dd5b67-7rb7n mk-producer] Event published to subject: producer:started
[mk-producer-depl-64d8dd5b67-gjb5s mk-producer] Connected to NATS
[mk-producer-depl-64d8dd5b67-gjb5s mk-producer] Connected to REDIS
[mk-producer-depl-64d8dd5b67-gjb5s mk-producer] I am not the first server. Existing servers: { 'ro0GRIHPvQzXCQO-Tm4of': '1', DGdWVGA6eB7nEoSJTXX2p: '2' }
[mk-producer-depl-64d8dd5b67-gjb5s mk-producer] -----------------------------------------------------------
[mk-producer-depl-64d8dd5b67-gjb5s mk-producer] Latest Redis Map State {
[mk-producer-depl-64d8dd5b67-gjb5s mk-producer]   'ro0GRIHPvQzXCQO-Tm4of': '1',
[mk-producer-depl-64d8dd5b67-gjb5s mk-producer]   DGdWVGA6eB7nEoSJTXX2p: '2',
[mk-producer-depl-64d8dd5b67-gjb5s mk-producer]   '1rO8NDz7wEysnxdSu0ry2': '3'
[mk-producer-depl-64d8dd5b67-gjb5s mk-producer] }
[mk-producer-depl-64d8dd5b67-gjb5s mk-producer] Latest Total:  3
[mk-producer-depl-64d8dd5b67-gjb5s mk-producer] -----------------------------------------------------------
[mk-producer-depl-64d8dd5b67-gjb5s mk-producer]
[mk-producer-depl-64d8dd5b67-gjb5s mk-producer] Event published to subject: producer:started
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer] Connected to NATS
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer] Connected to REDIS
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer] I am not the first server. Existing servers: {
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer]   'ro0GRIHPvQzXCQO-Tm4of': '1',
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer]   DGdWVGA6eB7nEoSJTXX2p: '2',
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer]   '1rO8NDz7wEysnxdSu0ry2': '3'
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer] }
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer] -----------------------------------------------------------
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer] Latest Redis Map State {
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer]   'ro0GRIHPvQzXCQO-Tm4of': '1',
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer]   DGdWVGA6eB7nEoSJTXX2p: '2',
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer]   '1rO8NDz7wEysnxdSu0ry2': '3',
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer]   '1CxUeKutKNuKzAHid_4fb': '4'
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer] }
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer] Latest Total:  4
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer] -----------------------------------------------------------
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer]
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer] Event published to subject: producer:started
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Connected to NATS
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Connected to REDIS
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] MK Nurse is listening for any Server births and deaths!
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Message received: producer:started / mk-nurse-service
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] MK Producer: DGdWVGA6eB7nEoSJTXX2p hsa been started
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Message received: producer:started / mk-nurse-service
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] MK Producer: ro0GRIHPvQzXCQO-Tm4of hsa been started
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Message received: producer:started / mk-nurse-service
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] MK Producer: 1rO8NDz7wEysnxdSu0ry2 hsa been started
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Message received: producer:started / mk-nurse-service
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] MK Producer: 1CxUeKutKNuKzAHid_4fb hsa been started
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]

```

## To get stats of the pods in your k8s cluster, in another terminal type:

```powershell
> kubectl get pods # Lists out all pods

NAME                                READY   STATUS    RESTARTS   AGE
mk-nurse-depl-d68cf74cd-czgg9       1/1     Running   1          6m52s
mk-producer-depl-64d8dd5b67-5wqpw   1/1     Running   1          6m52s
mk-producer-depl-64d8dd5b67-7fc25   1/1     Running   1          6m52s
mk-producer-depl-64d8dd5b67-7rb7n   1/1     Running   1          6m52s
mk-producer-depl-64d8dd5b67-gjb5s   1/1     Running   1          6m52s
nats-depl-7d8d64549d-tm9zd          1/1     Running   0          6m52s
redis-depl-68bc5979d8-4fncz         1/1     Running   0          6m52s

```

## To terminate any one of your producer replicas, type:

```powershell
> kubectl delete pod mk-producer-depl-64d8dd5b67-5wqpw # Deletes one producer replica
  pod "mk-producer-depl-64d8dd5b67-5wqpw" deleted
```

## When the above pod would have gotten terminated:

You will notice new logs in your skaffold terminal. Sample is shown below:

```powershell
[mk-producer-depl-64d8dd5b67-5wqpw mk-producer] Event published to subject: producer:stopped
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] A MK Producer has died, RIP 💀 { serverName: '1CxUeKutKNuKzAHid_4fb' }
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Current total 4
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] deadServerNumber 4
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Old Server entry has been deleted
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Total has been updated
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] updatedMap {
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]   'ro0GRIHPvQzXCQO-Tm4of': '1',
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]   DGdWVGA6eB7nEoSJTXX2p: '2',
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]   '1rO8NDz7wEysnxdSu0ry2': '3'
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] }
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] [
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]   [ 'ro0GRIHPvQzXCQO-Tm4of', '1' ],
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]   [ 'DGdWVGA6eB7nEoSJTXX2p', '2' ],
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]   [ '1rO8NDz7wEysnxdSu0ry2', '3' ]
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] ]
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Computed lastServerName, lastServerNum 1rO8NDz7wEysnxdSu0ry2 3
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] This is the last server, no need to perform a producer server number reassign
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer] yarn run v1.22.4
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer] $ ts-node-dev --poll src/index.ts
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer] [INFO] 17:19:01 ts-node-dev ver. 1.1.6 (using ts-node ver. 9.1.1, typescript ver. 4.2.4)
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer] Connected to NATS
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer] Connected to REDIS
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer] I am not the first server. Existing servers: {
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer]   'ro0GRIHPvQzXCQO-Tm4of': '1',
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer]   DGdWVGA6eB7nEoSJTXX2p: '2',
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer]   '1rO8NDz7wEysnxdSu0ry2': '3'
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer] }
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer] -----------------------------------------------------------
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer] Latest Redis Map State {
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer]   'ro0GRIHPvQzXCQO-Tm4of': '1',
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer]   DGdWVGA6eB7nEoSJTXX2p: '2',
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer]   '1rO8NDz7wEysnxdSu0ry2': '3',
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer]   kEE6xRZXcwqeU6Swb4UaV: '4'
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer] }
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer] Latest Total:  4
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer] -----------------------------------------------------------
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer]
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Message received: producer:started / mk-nurse-service
[mk-producer-depl-64d8dd5b67-xwhkh mk-producer] Event published to subject: producer:started
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] MK Producer: kEE6xRZXcwqeU6Swb4UaV hsa been started
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]

```

Here is what exactly happened above:

- **A Producer Service pod** **_mk-producer-depl-64d8dd5b67-5wqpw_** crashed. This published an event of **producer:stopped** and passed along it's unique serverName assigned during its creation (Over here it is **_1CxUeKutKNuKzAHid_4fb_**)
- The **Nurse Service** which was listening for this specific event caught it, and:
  1. Removed the PODs serverName entry from redis
  2. Updated total number of producer replicas on redis
- The **Nurse Service** is responsible to update redis whenever a producer pod crashes, and reassigns the last pod number to the crashed pod number, so that when the next replica of the producer comes up, it can easily be assigned a serverNumber.

Here is a snippet of logs when any producer replica other than the last one is terminated:

```powershell
> kubectl delete pod mk-producer-depl-64d8dd5b67-7fc25
  pod "mk-producer-depl-64d8dd5b67-7fc25" deleted
```

The Skaffold terminal:

```powershell
[mk-producer-depl-64d8dd5b67-7fc25 mk-producer] Event published to subject: producer:stopped
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Message received: producer:stopped / mk-nurse-service
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] A MK Producer has died, RIP 💀 { serverName: 'DGdWVGA6eB7nEoSJTXX2p' }
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Current total 4
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] deadServerNumber 2
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Old Server entry has been deleted
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Total has been updated
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] updatedMap {
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]   'ro0GRIHPvQzXCQO-Tm4of': '1',
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]   '1rO8NDz7wEysnxdSu0ry2': '3',
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]   kEE6xRZXcwqeU6Swb4UaV: '4'
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] }
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] [
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]   [ 'ro0GRIHPvQzXCQO-Tm4of', '1' ],
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]   [ '1rO8NDz7wEysnxdSu0ry2', '3' ],
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]   [ 'kEE6xRZXcwqeU6Swb4UaV', '4' ]
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] ]
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Computed lastServerName, lastServerNum kEE6xRZXcwqeU6Swb4UaV 4
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] -----------------------------------------------------------
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Latest Redis Map State {
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]   'ro0GRIHPvQzXCQO-Tm4of': '1',
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]   '1rO8NDz7wEysnxdSu0ry2': '3',
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]   kEE6xRZXcwqeU6Swb4UaV: '2'
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] }
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Latest Total 3
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] -----------------------------------------------------------
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer] yarn run v1.22.4
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer] $ ts-node-dev --poll src/index.ts
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer] [INFO] 17:29:27 ts-node-dev ver. 1.1.6 (using ts-node ver. 9.1.1, typescript ver. 4.2.4)
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer] Connected to NATS
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer] Connected to REDIS
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer] I am not the first server. Existing servers: {
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer]   'ro0GRIHPvQzXCQO-Tm4of': '1',
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer]   '1rO8NDz7wEysnxdSu0ry2': '3',
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer]   kEE6xRZXcwqeU6Swb4UaV: '2'
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer] }
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer] -----------------------------------------------------------
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer] Latest Redis Map State {
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer]   'ro0GRIHPvQzXCQO-Tm4of': '1',
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer]   '1rO8NDz7wEysnxdSu0ry2': '3',
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer]   kEE6xRZXcwqeU6Swb4UaV: '2',
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer]   Mvg_m4vYvhUYG0hC5tzBU: '4'
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer] }
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer] Latest Total:  4
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer] -----------------------------------------------------------
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer]
[mk-producer-depl-64d8dd5b67-fqfhx mk-producer] Event published to subject: producer:started
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] Message received: producer:started / mk-nurse-service
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] MK Producer: Mvg_m4vYvhUYG0hC5tzBU hsa been started
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse] ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[mk-nurse-depl-d68cf74cd-czgg9 mk-nurse]

```
