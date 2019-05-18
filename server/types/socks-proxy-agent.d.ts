/** Declaration file generated by dts-gen */

export = socks_proxy_agent;

declare class socks_proxy_agent {
  constructor(opts: any);

  callback(req: any, opts: any, fn: any): any;
}

declare namespace socks_proxy_agent {
  // @ts-ignore
  namespace prototype {
    function addListener(type: any, listener: any): any;

    function addRequest(req: any, _opts: any): void;

    function callback(req: any, opts: any, fn: any): any;

    function emit(type: any, args: any): any;

    function eventNames(): any;

    function freeSocket(socket: any, opts: any): void;

    function getMaxListeners(): any;

    function listenerCount(type: any): any;

    function listeners(type: any): any;

    function off(type: any, listener: any): any;

    function on(type: any, listener: any): any;

    function once(type: any, listener: any): any;

    function prependListener(type: any, listener: any): any;

    function prependOnceListener(type: any, listener: any): any;

    function rawListeners(type: any): any;

    function removeAllListeners(type: any, ...args: any[]): any;

    function removeListener(type: any, listener: any): any;

    function setMaxListeners(n: any): any;

    namespace addListener {
      const prototype: {};
    }

    namespace addRequest {
      const prototype: {};
    }

    namespace callback {
      const prototype: {};
    }

    namespace emit {
      const prototype: {};
    }

    namespace eventNames {
      const prototype: {};
    }

    namespace freeSocket {
      const prototype: {};
    }

    namespace getMaxListeners {
      const prototype: {};
    }

    namespace listenerCount {
      const prototype: {};
    }

    namespace listeners {
      const prototype: {};
    }

    namespace off {
      const prototype: {};
    }

    namespace on {
      const prototype: {};
    }

    namespace once {
      const prototype: {};
    }

    namespace prependListener {
      const prototype: {};
    }

    namespace prependOnceListener {
      const prototype: {};
    }

    namespace rawListeners {
      const prototype: {};
    }

    namespace removeAllListeners {
      const prototype: {};
    }

    namespace removeListener {
      const prototype: {};
    }

    namespace setMaxListeners {
      const prototype: {};
    }
  }
}
