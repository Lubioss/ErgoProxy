# Simple Proxy

The current version of ergo only support http request and response.

In order to work with a stratum pool, this proxy is required.

This proxy is a simple wrapper that gets jobs from stratum pool
and creates an http interface.


# Quick Start

See other options by running with `-h` argument. Among these arguments, listening port (-l), password (-w) and timeout (-t) are optional.

- Argument `-l` opens a port for listening to the app (default port is 3000)
- Argument `-t` changes the reconnection timeout (in seconds) to the stratum server (default is 300 seconds)

## App Configuration

- In the app's config file `config.json` set node address to the proxy's address
 (by default this address is: ```{"node":"http://127.0.0.1:3000"}```, unless you have changed the listening port)


# Build

1. Install Node v12+ and npm

2. Install package dependencies:

```
npm install
```
3. Pass arguments to [`client.js`](https://github.com/mhssamadani/ErgoStratumProxy/blob/main/client.js):

![](https://raw.githubusercontent.com/mhssamadani/ErgoStratumProxy/main/img/arguments.png)

4. Start proxy
```
node client.js -s <POOL_ADDRESS> -p <POOL_PORT> -u <WORKER_NAME>
```
![](https://raw.githubusercontent.com/mhssamadani/ErgoStratumProxy/main/img/start.png)

