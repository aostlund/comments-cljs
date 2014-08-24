// Compiled by ClojureScript 0.0-2280
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11164 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11164 = (function (f,fn_handler,meta11165){
this.f = f;
this.fn_handler = fn_handler;
this.meta11165 = meta11165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11164.cljs$lang$type = true;
cljs.core.async.t11164.cljs$lang$ctorStr = "cljs.core.async/t11164";
cljs.core.async.t11164.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t11164");
});
cljs.core.async.t11164.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11166){var self__ = this;
var _11166__$1 = this;return self__.meta11165;
});
cljs.core.async.t11164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11166,meta11165__$1){var self__ = this;
var _11166__$1 = this;return (new cljs.core.async.t11164(self__.f,self__.fn_handler,meta11165__$1));
});
cljs.core.async.__GT_t11164 = (function __GT_t11164(f__$1,fn_handler__$1,meta11165){return (new cljs.core.async.t11164(f__$1,fn_handler__$1,meta11165));
});
}
return (new cljs.core.async.t11164(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11168 = buff;if(G__11168)
{var bit__4194__auto__ = null;if(cljs.core.truth_((function (){var or__3544__auto__ = bit__4194__auto__;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return G__11168.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11168.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11168);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11168);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11169 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11169);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11169,ret){
return (function (){return fn1.call(null,val_11169);
});})(val_11169,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3532__auto__ = ret;if(cljs.core.truth_(and__3532__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3532__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4400__auto___11170 = n;var x_11171 = (0);while(true){
if((x_11171 < n__4400__auto___11170))
{(a[x_11171] = (0));
{
var G__11172 = (x_11171 + (1));
x_11171 = G__11172;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11173 = (i + (1));
i = G__11173;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11177 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11177 = (function (flag,alt_flag,meta11178){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11178 = meta11178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11177.cljs$lang$type = true;
cljs.core.async.t11177.cljs$lang$ctorStr = "cljs.core.async/t11177";
cljs.core.async.t11177.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t11177");
});})(flag))
;
cljs.core.async.t11177.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11179){var self__ = this;
var _11179__$1 = this;return self__.meta11178;
});})(flag))
;
cljs.core.async.t11177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11179,meta11178__$1){var self__ = this;
var _11179__$1 = this;return (new cljs.core.async.t11177(self__.flag,self__.alt_flag,meta11178__$1));
});})(flag))
;
cljs.core.async.__GT_t11177 = ((function (flag){
return (function __GT_t11177(flag__$1,alt_flag__$1,meta11178){return (new cljs.core.async.t11177(flag__$1,alt_flag__$1,meta11178));
});})(flag))
;
}
return (new cljs.core.async.t11177(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11183 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11183 = (function (cb,flag,alt_handler,meta11184){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11184 = meta11184;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11183.cljs$lang$type = true;
cljs.core.async.t11183.cljs$lang$ctorStr = "cljs.core.async/t11183";
cljs.core.async.t11183.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t11183");
});
cljs.core.async.t11183.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11185){var self__ = this;
var _11185__$1 = this;return self__.meta11184;
});
cljs.core.async.t11183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11185,meta11184__$1){var self__ = this;
var _11185__$1 = this;return (new cljs.core.async.t11183(self__.cb,self__.flag,self__.alt_handler,meta11184__$1));
});
cljs.core.async.__GT_t11183 = (function __GT_t11183(cb__$1,flag__$1,alt_handler__$1,meta11184){return (new cljs.core.async.t11183(cb__$1,flag__$1,alt_handler__$1,meta11184));
});
}
return (new cljs.core.async.t11183(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11186_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11186_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3544__auto__ = wport;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11187 = (i + (1));
i = G__11187;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3544__auto__ = ret;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3532__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3532__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3532__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11188){var map__11190 = p__11188;var map__11190__$1 = ((cljs.core.seq_QMARK_.call(null,map__11190))?cljs.core.apply.call(null,cljs.core.hash_map,map__11190):map__11190);var opts = map__11190__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11188 = null;if (arguments.length > 1) {
  p__11188 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11188);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11191){
var ports = cljs.core.first(arglist__11191);
var p__11188 = cljs.core.rest(arglist__11191);
return alts_BANG___delegate(ports,p__11188);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11199 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11199 = (function (ch,f,map_LT_,meta11200){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11200 = meta11200;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11199.cljs$lang$type = true;
cljs.core.async.t11199.cljs$lang$ctorStr = "cljs.core.async/t11199";
cljs.core.async.t11199.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t11199");
});
cljs.core.async.t11199.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11199.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11199.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11199.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11202 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11202 = (function (fn1,_,meta11200,ch,f,map_LT_,meta11203){
this.fn1 = fn1;
this._ = _;
this.meta11200 = meta11200;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11203 = meta11203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11202.cljs$lang$type = true;
cljs.core.async.t11202.cljs$lang$ctorStr = "cljs.core.async/t11202";
cljs.core.async.t11202.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t11202");
});})(___$1))
;
cljs.core.async.t11202.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11202.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11192_SHARP_){return f1.call(null,(((p1__11192_SHARP_ == null))?null:self__.f.call(null,p1__11192_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11204){var self__ = this;
var _11204__$1 = this;return self__.meta11203;
});})(___$1))
;
cljs.core.async.t11202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11204,meta11203__$1){var self__ = this;
var _11204__$1 = this;return (new cljs.core.async.t11202(self__.fn1,self__._,self__.meta11200,self__.ch,self__.f,self__.map_LT_,meta11203__$1));
});})(___$1))
;
cljs.core.async.__GT_t11202 = ((function (___$1){
return (function __GT_t11202(fn1__$1,___$2,meta11200__$1,ch__$2,f__$2,map_LT___$2,meta11203){return (new cljs.core.async.t11202(fn1__$1,___$2,meta11200__$1,ch__$2,f__$2,map_LT___$2,meta11203));
});})(___$1))
;
}
return (new cljs.core.async.t11202(fn1,___$1,self__.meta11200,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3532__auto__ = ret;if(cljs.core.truth_(and__3532__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3532__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11199.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11199.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11201){var self__ = this;
var _11201__$1 = this;return self__.meta11200;
});
cljs.core.async.t11199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11201,meta11200__$1){var self__ = this;
var _11201__$1 = this;return (new cljs.core.async.t11199(self__.ch,self__.f,self__.map_LT_,meta11200__$1));
});
cljs.core.async.__GT_t11199 = (function __GT_t11199(ch__$1,f__$1,map_LT___$1,meta11200){return (new cljs.core.async.t11199(ch__$1,f__$1,map_LT___$1,meta11200));
});
}
return (new cljs.core.async.t11199(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11208 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11208 = (function (ch,f,map_GT_,meta11209){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11209 = meta11209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11208.cljs$lang$type = true;
cljs.core.async.t11208.cljs$lang$ctorStr = "cljs.core.async/t11208";
cljs.core.async.t11208.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t11208");
});
cljs.core.async.t11208.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11208.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11208.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11208.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11208.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11208.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11210){var self__ = this;
var _11210__$1 = this;return self__.meta11209;
});
cljs.core.async.t11208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11210,meta11209__$1){var self__ = this;
var _11210__$1 = this;return (new cljs.core.async.t11208(self__.ch,self__.f,self__.map_GT_,meta11209__$1));
});
cljs.core.async.__GT_t11208 = (function __GT_t11208(ch__$1,f__$1,map_GT___$1,meta11209){return (new cljs.core.async.t11208(ch__$1,f__$1,map_GT___$1,meta11209));
});
}
return (new cljs.core.async.t11208(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11214 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11214 = (function (ch,p,filter_GT_,meta11215){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11215 = meta11215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11214.cljs$lang$type = true;
cljs.core.async.t11214.cljs$lang$ctorStr = "cljs.core.async/t11214";
cljs.core.async.t11214.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t11214");
});
cljs.core.async.t11214.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11214.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11214.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11214.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11214.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11214.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11216){var self__ = this;
var _11216__$1 = this;return self__.meta11215;
});
cljs.core.async.t11214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11216,meta11215__$1){var self__ = this;
var _11216__$1 = this;return (new cljs.core.async.t11214(self__.ch,self__.p,self__.filter_GT_,meta11215__$1));
});
cljs.core.async.__GT_t11214 = (function __GT_t11214(ch__$1,p__$1,filter_GT___$1,meta11215){return (new cljs.core.async.t11214(ch__$1,p__$1,filter_GT___$1,meta11215));
});
}
return (new cljs.core.async.t11214(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6346__auto___11299 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto___11299,out){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto___11299,out){
return (function (state_11278){var state_val_11279 = (state_11278[(1)]);if((state_val_11279 === (7)))
{var inst_11274 = (state_11278[(2)]);var state_11278__$1 = state_11278;var statearr_11280_11300 = state_11278__$1;(statearr_11280_11300[(2)] = inst_11274);
(statearr_11280_11300[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11279 === (1)))
{var state_11278__$1 = state_11278;var statearr_11281_11301 = state_11278__$1;(statearr_11281_11301[(2)] = null);
(statearr_11281_11301[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11279 === (4)))
{var inst_11260 = (state_11278[(7)]);var inst_11260__$1 = (state_11278[(2)]);var inst_11261 = (inst_11260__$1 == null);var state_11278__$1 = (function (){var statearr_11282 = state_11278;(statearr_11282[(7)] = inst_11260__$1);
return statearr_11282;
})();if(cljs.core.truth_(inst_11261))
{var statearr_11283_11302 = state_11278__$1;(statearr_11283_11302[(1)] = (5));
} else
{var statearr_11284_11303 = state_11278__$1;(statearr_11284_11303[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11279 === (6)))
{var inst_11260 = (state_11278[(7)]);var inst_11265 = p.call(null,inst_11260);var state_11278__$1 = state_11278;if(cljs.core.truth_(inst_11265))
{var statearr_11285_11304 = state_11278__$1;(statearr_11285_11304[(1)] = (8));
} else
{var statearr_11286_11305 = state_11278__$1;(statearr_11286_11305[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11279 === (3)))
{var inst_11276 = (state_11278[(2)]);var state_11278__$1 = state_11278;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11278__$1,inst_11276);
} else
{if((state_val_11279 === (2)))
{var state_11278__$1 = state_11278;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11278__$1,(4),ch);
} else
{if((state_val_11279 === (11)))
{var inst_11268 = (state_11278[(2)]);var state_11278__$1 = state_11278;var statearr_11287_11306 = state_11278__$1;(statearr_11287_11306[(2)] = inst_11268);
(statearr_11287_11306[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11279 === (9)))
{var state_11278__$1 = state_11278;var statearr_11288_11307 = state_11278__$1;(statearr_11288_11307[(2)] = null);
(statearr_11288_11307[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11279 === (5)))
{var inst_11263 = cljs.core.async.close_BANG_.call(null,out);var state_11278__$1 = state_11278;var statearr_11289_11308 = state_11278__$1;(statearr_11289_11308[(2)] = inst_11263);
(statearr_11289_11308[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11279 === (10)))
{var inst_11271 = (state_11278[(2)]);var state_11278__$1 = (function (){var statearr_11290 = state_11278;(statearr_11290[(8)] = inst_11271);
return statearr_11290;
})();var statearr_11291_11309 = state_11278__$1;(statearr_11291_11309[(2)] = null);
(statearr_11291_11309[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11279 === (8)))
{var inst_11260 = (state_11278[(7)]);var state_11278__$1 = state_11278;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11278__$1,(11),out,inst_11260);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6346__auto___11299,out))
;return ((function (switch__6331__auto__,c__6346__auto___11299,out){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_11295 = [null,null,null,null,null,null,null,null,null];(statearr_11295[(0)] = state_machine__6332__auto__);
(statearr_11295[(1)] = (1));
return statearr_11295;
});
var state_machine__6332__auto____1 = (function (state_11278){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_11278);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e11296){if((e11296 instanceof Object))
{var ex__6335__auto__ = e11296;var statearr_11297_11310 = state_11278;(statearr_11297_11310[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11278);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11296;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11311 = state_11278;
state_11278 = G__11311;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_11278){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_11278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto___11299,out))
})();var state__6348__auto__ = (function (){var statearr_11298 = f__6347__auto__.call(null);(statearr_11298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto___11299);
return statearr_11298;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto___11299,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6346__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto__){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto__){
return (function (state_11463){var state_val_11464 = (state_11463[(1)]);if((state_val_11464 === (7)))
{var inst_11459 = (state_11463[(2)]);var state_11463__$1 = state_11463;var statearr_11465_11502 = state_11463__$1;(statearr_11465_11502[(2)] = inst_11459);
(statearr_11465_11502[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11464 === (20)))
{var inst_11434 = (state_11463[(7)]);var inst_11445 = (state_11463[(2)]);var inst_11446 = cljs.core.next.call(null,inst_11434);var inst_11420 = inst_11446;var inst_11421 = null;var inst_11422 = (0);var inst_11423 = (0);var state_11463__$1 = (function (){var statearr_11466 = state_11463;(statearr_11466[(8)] = inst_11445);
(statearr_11466[(9)] = inst_11422);
(statearr_11466[(10)] = inst_11420);
(statearr_11466[(11)] = inst_11421);
(statearr_11466[(12)] = inst_11423);
return statearr_11466;
})();var statearr_11467_11503 = state_11463__$1;(statearr_11467_11503[(2)] = null);
(statearr_11467_11503[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11464 === (1)))
{var state_11463__$1 = state_11463;var statearr_11468_11504 = state_11463__$1;(statearr_11468_11504[(2)] = null);
(statearr_11468_11504[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11464 === (4)))
{var inst_11409 = (state_11463[(13)]);var inst_11409__$1 = (state_11463[(2)]);var inst_11410 = (inst_11409__$1 == null);var state_11463__$1 = (function (){var statearr_11472 = state_11463;(statearr_11472[(13)] = inst_11409__$1);
return statearr_11472;
})();if(cljs.core.truth_(inst_11410))
{var statearr_11473_11505 = state_11463__$1;(statearr_11473_11505[(1)] = (5));
} else
{var statearr_11474_11506 = state_11463__$1;(statearr_11474_11506[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11464 === (15)))
{var state_11463__$1 = state_11463;var statearr_11475_11507 = state_11463__$1;(statearr_11475_11507[(2)] = null);
(statearr_11475_11507[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11464 === (13)))
{var inst_11422 = (state_11463[(9)]);var inst_11420 = (state_11463[(10)]);var inst_11421 = (state_11463[(11)]);var inst_11423 = (state_11463[(12)]);var inst_11430 = (state_11463[(2)]);var inst_11431 = (inst_11423 + (1));var tmp11469 = inst_11422;var tmp11470 = inst_11420;var tmp11471 = inst_11421;var inst_11420__$1 = tmp11470;var inst_11421__$1 = tmp11471;var inst_11422__$1 = tmp11469;var inst_11423__$1 = inst_11431;var state_11463__$1 = (function (){var statearr_11476 = state_11463;(statearr_11476[(9)] = inst_11422__$1);
(statearr_11476[(10)] = inst_11420__$1);
(statearr_11476[(14)] = inst_11430);
(statearr_11476[(11)] = inst_11421__$1);
(statearr_11476[(12)] = inst_11423__$1);
return statearr_11476;
})();var statearr_11477_11508 = state_11463__$1;(statearr_11477_11508[(2)] = null);
(statearr_11477_11508[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11464 === (6)))
{var inst_11409 = (state_11463[(13)]);var inst_11414 = f.call(null,inst_11409);var inst_11419 = cljs.core.seq.call(null,inst_11414);var inst_11420 = inst_11419;var inst_11421 = null;var inst_11422 = (0);var inst_11423 = (0);var state_11463__$1 = (function (){var statearr_11478 = state_11463;(statearr_11478[(9)] = inst_11422);
(statearr_11478[(10)] = inst_11420);
(statearr_11478[(11)] = inst_11421);
(statearr_11478[(12)] = inst_11423);
return statearr_11478;
})();var statearr_11479_11509 = state_11463__$1;(statearr_11479_11509[(2)] = null);
(statearr_11479_11509[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11464 === (17)))
{var inst_11434 = (state_11463[(7)]);var inst_11438 = cljs.core.chunk_first.call(null,inst_11434);var inst_11439 = cljs.core.chunk_rest.call(null,inst_11434);var inst_11440 = cljs.core.count.call(null,inst_11438);var inst_11420 = inst_11439;var inst_11421 = inst_11438;var inst_11422 = inst_11440;var inst_11423 = (0);var state_11463__$1 = (function (){var statearr_11480 = state_11463;(statearr_11480[(9)] = inst_11422);
(statearr_11480[(10)] = inst_11420);
(statearr_11480[(11)] = inst_11421);
(statearr_11480[(12)] = inst_11423);
return statearr_11480;
})();var statearr_11481_11510 = state_11463__$1;(statearr_11481_11510[(2)] = null);
(statearr_11481_11510[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11464 === (3)))
{var inst_11461 = (state_11463[(2)]);var state_11463__$1 = state_11463;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11463__$1,inst_11461);
} else
{if((state_val_11464 === (12)))
{var inst_11454 = (state_11463[(2)]);var state_11463__$1 = state_11463;var statearr_11482_11511 = state_11463__$1;(statearr_11482_11511[(2)] = inst_11454);
(statearr_11482_11511[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11464 === (2)))
{var state_11463__$1 = state_11463;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11463__$1,(4),in$);
} else
{if((state_val_11464 === (19)))
{var inst_11449 = (state_11463[(2)]);var state_11463__$1 = state_11463;var statearr_11483_11512 = state_11463__$1;(statearr_11483_11512[(2)] = inst_11449);
(statearr_11483_11512[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11464 === (11)))
{var inst_11434 = (state_11463[(7)]);var inst_11420 = (state_11463[(10)]);var inst_11434__$1 = cljs.core.seq.call(null,inst_11420);var state_11463__$1 = (function (){var statearr_11484 = state_11463;(statearr_11484[(7)] = inst_11434__$1);
return statearr_11484;
})();if(inst_11434__$1)
{var statearr_11485_11513 = state_11463__$1;(statearr_11485_11513[(1)] = (14));
} else
{var statearr_11486_11514 = state_11463__$1;(statearr_11486_11514[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11464 === (9)))
{var inst_11456 = (state_11463[(2)]);var state_11463__$1 = (function (){var statearr_11487 = state_11463;(statearr_11487[(15)] = inst_11456);
return statearr_11487;
})();var statearr_11488_11515 = state_11463__$1;(statearr_11488_11515[(2)] = null);
(statearr_11488_11515[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11464 === (5)))
{var inst_11412 = cljs.core.async.close_BANG_.call(null,out);var state_11463__$1 = state_11463;var statearr_11489_11516 = state_11463__$1;(statearr_11489_11516[(2)] = inst_11412);
(statearr_11489_11516[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11464 === (14)))
{var inst_11434 = (state_11463[(7)]);var inst_11436 = cljs.core.chunked_seq_QMARK_.call(null,inst_11434);var state_11463__$1 = state_11463;if(inst_11436)
{var statearr_11490_11517 = state_11463__$1;(statearr_11490_11517[(1)] = (17));
} else
{var statearr_11491_11518 = state_11463__$1;(statearr_11491_11518[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11464 === (16)))
{var inst_11452 = (state_11463[(2)]);var state_11463__$1 = state_11463;var statearr_11492_11519 = state_11463__$1;(statearr_11492_11519[(2)] = inst_11452);
(statearr_11492_11519[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11464 === (10)))
{var inst_11421 = (state_11463[(11)]);var inst_11423 = (state_11463[(12)]);var inst_11428 = cljs.core._nth.call(null,inst_11421,inst_11423);var state_11463__$1 = state_11463;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11463__$1,(13),out,inst_11428);
} else
{if((state_val_11464 === (18)))
{var inst_11434 = (state_11463[(7)]);var inst_11443 = cljs.core.first.call(null,inst_11434);var state_11463__$1 = state_11463;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11463__$1,(20),out,inst_11443);
} else
{if((state_val_11464 === (8)))
{var inst_11422 = (state_11463[(9)]);var inst_11423 = (state_11463[(12)]);var inst_11425 = (inst_11423 < inst_11422);var inst_11426 = inst_11425;var state_11463__$1 = state_11463;if(cljs.core.truth_(inst_11426))
{var statearr_11493_11520 = state_11463__$1;(statearr_11493_11520[(1)] = (10));
} else
{var statearr_11494_11521 = state_11463__$1;(statearr_11494_11521[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6346__auto__))
;return ((function (switch__6331__auto__,c__6346__auto__){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_11498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11498[(0)] = state_machine__6332__auto__);
(statearr_11498[(1)] = (1));
return statearr_11498;
});
var state_machine__6332__auto____1 = (function (state_11463){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_11463);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e11499){if((e11499 instanceof Object))
{var ex__6335__auto__ = e11499;var statearr_11500_11522 = state_11463;(statearr_11500_11522[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11463);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11499;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11523 = state_11463;
state_11463 = G__11523;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_11463){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_11463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto__))
})();var state__6348__auto__ = (function (){var statearr_11501 = f__6347__auto__.call(null);(statearr_11501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto__);
return statearr_11501;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto__))
);
return c__6346__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6346__auto___11604 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto___11604){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto___11604){
return (function (state_11583){var state_val_11584 = (state_11583[(1)]);if((state_val_11584 === (7)))
{var inst_11579 = (state_11583[(2)]);var state_11583__$1 = state_11583;var statearr_11585_11605 = state_11583__$1;(statearr_11585_11605[(2)] = inst_11579);
(statearr_11585_11605[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (1)))
{var state_11583__$1 = state_11583;var statearr_11586_11606 = state_11583__$1;(statearr_11586_11606[(2)] = null);
(statearr_11586_11606[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (4)))
{var inst_11566 = (state_11583[(7)]);var inst_11566__$1 = (state_11583[(2)]);var inst_11567 = (inst_11566__$1 == null);var state_11583__$1 = (function (){var statearr_11587 = state_11583;(statearr_11587[(7)] = inst_11566__$1);
return statearr_11587;
})();if(cljs.core.truth_(inst_11567))
{var statearr_11588_11607 = state_11583__$1;(statearr_11588_11607[(1)] = (5));
} else
{var statearr_11589_11608 = state_11583__$1;(statearr_11589_11608[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (6)))
{var inst_11566 = (state_11583[(7)]);var state_11583__$1 = state_11583;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11583__$1,(11),to,inst_11566);
} else
{if((state_val_11584 === (3)))
{var inst_11581 = (state_11583[(2)]);var state_11583__$1 = state_11583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11583__$1,inst_11581);
} else
{if((state_val_11584 === (2)))
{var state_11583__$1 = state_11583;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11583__$1,(4),from);
} else
{if((state_val_11584 === (11)))
{var inst_11576 = (state_11583[(2)]);var state_11583__$1 = (function (){var statearr_11590 = state_11583;(statearr_11590[(8)] = inst_11576);
return statearr_11590;
})();var statearr_11591_11609 = state_11583__$1;(statearr_11591_11609[(2)] = null);
(statearr_11591_11609[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (9)))
{var state_11583__$1 = state_11583;var statearr_11592_11610 = state_11583__$1;(statearr_11592_11610[(2)] = null);
(statearr_11592_11610[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (5)))
{var state_11583__$1 = state_11583;if(cljs.core.truth_(close_QMARK_))
{var statearr_11593_11611 = state_11583__$1;(statearr_11593_11611[(1)] = (8));
} else
{var statearr_11594_11612 = state_11583__$1;(statearr_11594_11612[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (10)))
{var inst_11573 = (state_11583[(2)]);var state_11583__$1 = state_11583;var statearr_11595_11613 = state_11583__$1;(statearr_11595_11613[(2)] = inst_11573);
(statearr_11595_11613[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (8)))
{var inst_11570 = cljs.core.async.close_BANG_.call(null,to);var state_11583__$1 = state_11583;var statearr_11596_11614 = state_11583__$1;(statearr_11596_11614[(2)] = inst_11570);
(statearr_11596_11614[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6346__auto___11604))
;return ((function (switch__6331__auto__,c__6346__auto___11604){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_11600 = [null,null,null,null,null,null,null,null,null];(statearr_11600[(0)] = state_machine__6332__auto__);
(statearr_11600[(1)] = (1));
return statearr_11600;
});
var state_machine__6332__auto____1 = (function (state_11583){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_11583);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e11601){if((e11601 instanceof Object))
{var ex__6335__auto__ = e11601;var statearr_11602_11615 = state_11583;(statearr_11602_11615[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11583);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11616 = state_11583;
state_11583 = G__11616;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_11583){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_11583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto___11604))
})();var state__6348__auto__ = (function (){var statearr_11603 = f__6347__auto__.call(null);(statearr_11603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto___11604);
return statearr_11603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto___11604))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6346__auto___11703 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto___11703,tc,fc){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto___11703,tc,fc){
return (function (state_11681){var state_val_11682 = (state_11681[(1)]);if((state_val_11682 === (7)))
{var inst_11677 = (state_11681[(2)]);var state_11681__$1 = state_11681;var statearr_11683_11704 = state_11681__$1;(statearr_11683_11704[(2)] = inst_11677);
(statearr_11683_11704[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11682 === (1)))
{var state_11681__$1 = state_11681;var statearr_11684_11705 = state_11681__$1;(statearr_11684_11705[(2)] = null);
(statearr_11684_11705[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11682 === (4)))
{var inst_11662 = (state_11681[(7)]);var inst_11662__$1 = (state_11681[(2)]);var inst_11663 = (inst_11662__$1 == null);var state_11681__$1 = (function (){var statearr_11685 = state_11681;(statearr_11685[(7)] = inst_11662__$1);
return statearr_11685;
})();if(cljs.core.truth_(inst_11663))
{var statearr_11686_11706 = state_11681__$1;(statearr_11686_11706[(1)] = (5));
} else
{var statearr_11687_11707 = state_11681__$1;(statearr_11687_11707[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11682 === (6)))
{var inst_11662 = (state_11681[(7)]);var inst_11668 = p.call(null,inst_11662);var state_11681__$1 = state_11681;if(cljs.core.truth_(inst_11668))
{var statearr_11688_11708 = state_11681__$1;(statearr_11688_11708[(1)] = (9));
} else
{var statearr_11689_11709 = state_11681__$1;(statearr_11689_11709[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11682 === (3)))
{var inst_11679 = (state_11681[(2)]);var state_11681__$1 = state_11681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11681__$1,inst_11679);
} else
{if((state_val_11682 === (2)))
{var state_11681__$1 = state_11681;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11681__$1,(4),ch);
} else
{if((state_val_11682 === (11)))
{var inst_11662 = (state_11681[(7)]);var inst_11672 = (state_11681[(2)]);var state_11681__$1 = state_11681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11681__$1,(8),inst_11672,inst_11662);
} else
{if((state_val_11682 === (9)))
{var state_11681__$1 = state_11681;var statearr_11690_11710 = state_11681__$1;(statearr_11690_11710[(2)] = tc);
(statearr_11690_11710[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11682 === (5)))
{var inst_11665 = cljs.core.async.close_BANG_.call(null,tc);var inst_11666 = cljs.core.async.close_BANG_.call(null,fc);var state_11681__$1 = (function (){var statearr_11691 = state_11681;(statearr_11691[(8)] = inst_11665);
return statearr_11691;
})();var statearr_11692_11711 = state_11681__$1;(statearr_11692_11711[(2)] = inst_11666);
(statearr_11692_11711[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11682 === (10)))
{var state_11681__$1 = state_11681;var statearr_11693_11712 = state_11681__$1;(statearr_11693_11712[(2)] = fc);
(statearr_11693_11712[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11682 === (8)))
{var inst_11674 = (state_11681[(2)]);var state_11681__$1 = (function (){var statearr_11694 = state_11681;(statearr_11694[(9)] = inst_11674);
return statearr_11694;
})();var statearr_11695_11713 = state_11681__$1;(statearr_11695_11713[(2)] = null);
(statearr_11695_11713[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6346__auto___11703,tc,fc))
;return ((function (switch__6331__auto__,c__6346__auto___11703,tc,fc){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_11699 = [null,null,null,null,null,null,null,null,null,null];(statearr_11699[(0)] = state_machine__6332__auto__);
(statearr_11699[(1)] = (1));
return statearr_11699;
});
var state_machine__6332__auto____1 = (function (state_11681){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_11681);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e11700){if((e11700 instanceof Object))
{var ex__6335__auto__ = e11700;var statearr_11701_11714 = state_11681;(statearr_11701_11714[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11681);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11700;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11715 = state_11681;
state_11681 = G__11715;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_11681){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_11681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto___11703,tc,fc))
})();var state__6348__auto__ = (function (){var statearr_11702 = f__6347__auto__.call(null);(statearr_11702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto___11703);
return statearr_11702;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto___11703,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6346__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto__){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto__){
return (function (state_11762){var state_val_11763 = (state_11762[(1)]);if((state_val_11763 === (7)))
{var inst_11758 = (state_11762[(2)]);var state_11762__$1 = state_11762;var statearr_11764_11780 = state_11762__$1;(statearr_11764_11780[(2)] = inst_11758);
(statearr_11764_11780[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11763 === (6)))
{var inst_11748 = (state_11762[(7)]);var inst_11751 = (state_11762[(8)]);var inst_11755 = f.call(null,inst_11748,inst_11751);var inst_11748__$1 = inst_11755;var state_11762__$1 = (function (){var statearr_11765 = state_11762;(statearr_11765[(7)] = inst_11748__$1);
return statearr_11765;
})();var statearr_11766_11781 = state_11762__$1;(statearr_11766_11781[(2)] = null);
(statearr_11766_11781[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11763 === (5)))
{var inst_11748 = (state_11762[(7)]);var state_11762__$1 = state_11762;var statearr_11767_11782 = state_11762__$1;(statearr_11767_11782[(2)] = inst_11748);
(statearr_11767_11782[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11763 === (4)))
{var inst_11751 = (state_11762[(8)]);var inst_11751__$1 = (state_11762[(2)]);var inst_11752 = (inst_11751__$1 == null);var state_11762__$1 = (function (){var statearr_11768 = state_11762;(statearr_11768[(8)] = inst_11751__$1);
return statearr_11768;
})();if(cljs.core.truth_(inst_11752))
{var statearr_11769_11783 = state_11762__$1;(statearr_11769_11783[(1)] = (5));
} else
{var statearr_11770_11784 = state_11762__$1;(statearr_11770_11784[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11763 === (3)))
{var inst_11760 = (state_11762[(2)]);var state_11762__$1 = state_11762;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11762__$1,inst_11760);
} else
{if((state_val_11763 === (2)))
{var state_11762__$1 = state_11762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11762__$1,(4),ch);
} else
{if((state_val_11763 === (1)))
{var inst_11748 = init;var state_11762__$1 = (function (){var statearr_11771 = state_11762;(statearr_11771[(7)] = inst_11748);
return statearr_11771;
})();var statearr_11772_11785 = state_11762__$1;(statearr_11772_11785[(2)] = null);
(statearr_11772_11785[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6346__auto__))
;return ((function (switch__6331__auto__,c__6346__auto__){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_11776 = [null,null,null,null,null,null,null,null,null];(statearr_11776[(0)] = state_machine__6332__auto__);
(statearr_11776[(1)] = (1));
return statearr_11776;
});
var state_machine__6332__auto____1 = (function (state_11762){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_11762);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e11777){if((e11777 instanceof Object))
{var ex__6335__auto__ = e11777;var statearr_11778_11786 = state_11762;(statearr_11778_11786[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11762);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11787 = state_11762;
state_11762 = G__11787;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_11762){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_11762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto__))
})();var state__6348__auto__ = (function (){var statearr_11779 = f__6347__auto__.call(null);(statearr_11779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto__);
return statearr_11779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto__))
);
return c__6346__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6346__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto__){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto__){
return (function (state_11849){var state_val_11850 = (state_11849[(1)]);if((state_val_11850 === (7)))
{var inst_11830 = (state_11849[(7)]);var inst_11835 = (state_11849[(2)]);var inst_11836 = cljs.core.next.call(null,inst_11830);var inst_11830__$1 = inst_11836;var state_11849__$1 = (function (){var statearr_11851 = state_11849;(statearr_11851[(8)] = inst_11835);
(statearr_11851[(7)] = inst_11830__$1);
return statearr_11851;
})();var statearr_11852_11870 = state_11849__$1;(statearr_11852_11870[(2)] = null);
(statearr_11852_11870[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11850 === (1)))
{var inst_11829 = cljs.core.seq.call(null,coll);var inst_11830 = inst_11829;var state_11849__$1 = (function (){var statearr_11853 = state_11849;(statearr_11853[(7)] = inst_11830);
return statearr_11853;
})();var statearr_11854_11871 = state_11849__$1;(statearr_11854_11871[(2)] = null);
(statearr_11854_11871[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11850 === (4)))
{var inst_11830 = (state_11849[(7)]);var inst_11833 = cljs.core.first.call(null,inst_11830);var state_11849__$1 = state_11849;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11849__$1,(7),ch,inst_11833);
} else
{if((state_val_11850 === (6)))
{var inst_11845 = (state_11849[(2)]);var state_11849__$1 = state_11849;var statearr_11855_11872 = state_11849__$1;(statearr_11855_11872[(2)] = inst_11845);
(statearr_11855_11872[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11850 === (3)))
{var inst_11847 = (state_11849[(2)]);var state_11849__$1 = state_11849;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11849__$1,inst_11847);
} else
{if((state_val_11850 === (2)))
{var inst_11830 = (state_11849[(7)]);var state_11849__$1 = state_11849;if(cljs.core.truth_(inst_11830))
{var statearr_11856_11873 = state_11849__$1;(statearr_11856_11873[(1)] = (4));
} else
{var statearr_11857_11874 = state_11849__$1;(statearr_11857_11874[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11850 === (9)))
{var state_11849__$1 = state_11849;var statearr_11858_11875 = state_11849__$1;(statearr_11858_11875[(2)] = null);
(statearr_11858_11875[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11850 === (5)))
{var state_11849__$1 = state_11849;if(cljs.core.truth_(close_QMARK_))
{var statearr_11859_11876 = state_11849__$1;(statearr_11859_11876[(1)] = (8));
} else
{var statearr_11860_11877 = state_11849__$1;(statearr_11860_11877[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11850 === (10)))
{var inst_11843 = (state_11849[(2)]);var state_11849__$1 = state_11849;var statearr_11861_11878 = state_11849__$1;(statearr_11861_11878[(2)] = inst_11843);
(statearr_11861_11878[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11850 === (8)))
{var inst_11840 = cljs.core.async.close_BANG_.call(null,ch);var state_11849__$1 = state_11849;var statearr_11862_11879 = state_11849__$1;(statearr_11862_11879[(2)] = inst_11840);
(statearr_11862_11879[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__6346__auto__))
;return ((function (switch__6331__auto__,c__6346__auto__){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_11866 = [null,null,null,null,null,null,null,null,null];(statearr_11866[(0)] = state_machine__6332__auto__);
(statearr_11866[(1)] = (1));
return statearr_11866;
});
var state_machine__6332__auto____1 = (function (state_11849){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_11849);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e11867){if((e11867 instanceof Object))
{var ex__6335__auto__ = e11867;var statearr_11868_11880 = state_11849;(statearr_11868_11880[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11849);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11881 = state_11849;
state_11849 = G__11881;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_11849){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_11849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto__))
})();var state__6348__auto__ = (function (){var statearr_11869 = f__6347__auto__.call(null);(statearr_11869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto__);
return statearr_11869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto__))
);
return c__6346__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11883 = {};return obj11883;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3532__auto__ = _;if(and__3532__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4171__auto__ = (((_ == null))?null:_);return (function (){var or__3544__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11885 = {};return obj11885;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12109 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12109 = (function (cs,ch,mult,meta12110){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12110 = meta12110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12109.cljs$lang$type = true;
cljs.core.async.t12109.cljs$lang$ctorStr = "cljs.core.async/t12109";
cljs.core.async.t12109.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t12109");
});})(cs))
;
cljs.core.async.t12109.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12109.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12109.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12109.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12109.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12109.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12111){var self__ = this;
var _12111__$1 = this;return self__.meta12110;
});})(cs))
;
cljs.core.async.t12109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12111,meta12110__$1){var self__ = this;
var _12111__$1 = this;return (new cljs.core.async.t12109(self__.cs,self__.ch,self__.mult,meta12110__$1));
});})(cs))
;
cljs.core.async.__GT_t12109 = ((function (cs){
return (function __GT_t12109(cs__$1,ch__$1,mult__$1,meta12110){return (new cljs.core.async.t12109(cs__$1,ch__$1,mult__$1,meta12110));
});})(cs))
;
}
return (new cljs.core.async.t12109(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6346__auto___12332 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto___12332,cs,m,dchan,dctr,done){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto___12332,cs,m,dchan,dctr,done){
return (function (state_12246){var state_val_12247 = (state_12246[(1)]);if((state_val_12247 === (7)))
{var inst_12242 = (state_12246[(2)]);var state_12246__$1 = state_12246;var statearr_12248_12333 = state_12246__$1;(statearr_12248_12333[(2)] = inst_12242);
(statearr_12248_12333[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (20)))
{var inst_12143 = (state_12246[(7)]);var inst_12153 = cljs.core.first.call(null,inst_12143);var inst_12154 = cljs.core.nth.call(null,inst_12153,(0),null);var inst_12155 = cljs.core.nth.call(null,inst_12153,(1),null);var state_12246__$1 = (function (){var statearr_12249 = state_12246;(statearr_12249[(8)] = inst_12154);
return statearr_12249;
})();if(cljs.core.truth_(inst_12155))
{var statearr_12250_12334 = state_12246__$1;(statearr_12250_12334[(1)] = (22));
} else
{var statearr_12251_12335 = state_12246__$1;(statearr_12251_12335[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (27)))
{var inst_12185 = (state_12246[(9)]);var inst_12183 = (state_12246[(10)]);var inst_12190 = cljs.core._nth.call(null,inst_12183,inst_12185);var state_12246__$1 = (function (){var statearr_12252 = state_12246;(statearr_12252[(11)] = inst_12190);
return statearr_12252;
})();var statearr_12253_12336 = state_12246__$1;(statearr_12253_12336[(2)] = null);
(statearr_12253_12336[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (1)))
{var state_12246__$1 = state_12246;var statearr_12254_12337 = state_12246__$1;(statearr_12254_12337[(2)] = null);
(statearr_12254_12337[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (24)))
{var inst_12143 = (state_12246[(7)]);var inst_12160 = (state_12246[(2)]);var inst_12161 = cljs.core.next.call(null,inst_12143);var inst_12123 = inst_12161;var inst_12124 = null;var inst_12125 = (0);var inst_12126 = (0);var state_12246__$1 = (function (){var statearr_12255 = state_12246;(statearr_12255[(12)] = inst_12123);
(statearr_12255[(13)] = inst_12125);
(statearr_12255[(14)] = inst_12160);
(statearr_12255[(15)] = inst_12126);
(statearr_12255[(16)] = inst_12124);
return statearr_12255;
})();var statearr_12256_12338 = state_12246__$1;(statearr_12256_12338[(2)] = null);
(statearr_12256_12338[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (39)))
{var inst_12203 = (state_12246[(17)]);var inst_12221 = (state_12246[(2)]);var inst_12222 = cljs.core.next.call(null,inst_12203);var inst_12182 = inst_12222;var inst_12183 = null;var inst_12184 = (0);var inst_12185 = (0);var state_12246__$1 = (function (){var statearr_12260 = state_12246;(statearr_12260[(18)] = inst_12182);
(statearr_12260[(9)] = inst_12185);
(statearr_12260[(10)] = inst_12183);
(statearr_12260[(19)] = inst_12221);
(statearr_12260[(20)] = inst_12184);
return statearr_12260;
})();var statearr_12261_12339 = state_12246__$1;(statearr_12261_12339[(2)] = null);
(statearr_12261_12339[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (4)))
{var inst_12114 = (state_12246[(21)]);var inst_12114__$1 = (state_12246[(2)]);var inst_12115 = (inst_12114__$1 == null);var state_12246__$1 = (function (){var statearr_12262 = state_12246;(statearr_12262[(21)] = inst_12114__$1);
return statearr_12262;
})();if(cljs.core.truth_(inst_12115))
{var statearr_12263_12340 = state_12246__$1;(statearr_12263_12340[(1)] = (5));
} else
{var statearr_12264_12341 = state_12246__$1;(statearr_12264_12341[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (15)))
{var inst_12123 = (state_12246[(12)]);var inst_12125 = (state_12246[(13)]);var inst_12126 = (state_12246[(15)]);var inst_12124 = (state_12246[(16)]);var inst_12139 = (state_12246[(2)]);var inst_12140 = (inst_12126 + (1));var tmp12257 = inst_12123;var tmp12258 = inst_12125;var tmp12259 = inst_12124;var inst_12123__$1 = tmp12257;var inst_12124__$1 = tmp12259;var inst_12125__$1 = tmp12258;var inst_12126__$1 = inst_12140;var state_12246__$1 = (function (){var statearr_12265 = state_12246;(statearr_12265[(12)] = inst_12123__$1);
(statearr_12265[(13)] = inst_12125__$1);
(statearr_12265[(15)] = inst_12126__$1);
(statearr_12265[(22)] = inst_12139);
(statearr_12265[(16)] = inst_12124__$1);
return statearr_12265;
})();var statearr_12266_12342 = state_12246__$1;(statearr_12266_12342[(2)] = null);
(statearr_12266_12342[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (21)))
{var inst_12164 = (state_12246[(2)]);var state_12246__$1 = state_12246;var statearr_12267_12343 = state_12246__$1;(statearr_12267_12343[(2)] = inst_12164);
(statearr_12267_12343[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (31)))
{var inst_12190 = (state_12246[(11)]);var inst_12191 = (state_12246[(2)]);var inst_12192 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12193 = cljs.core.async.untap_STAR_.call(null,m,inst_12190);var state_12246__$1 = (function (){var statearr_12268 = state_12246;(statearr_12268[(23)] = inst_12192);
(statearr_12268[(24)] = inst_12191);
return statearr_12268;
})();var statearr_12269_12344 = state_12246__$1;(statearr_12269_12344[(2)] = inst_12193);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12246__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (32)))
{var inst_12114 = (state_12246[(21)]);var inst_12190 = (state_12246[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12246,(31),Object,null,(30));var inst_12197 = cljs.core.async.put_BANG_.call(null,inst_12190,inst_12114,done);var state_12246__$1 = state_12246;var statearr_12270_12345 = state_12246__$1;(statearr_12270_12345[(2)] = inst_12197);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12246__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (40)))
{var inst_12212 = (state_12246[(25)]);var inst_12213 = (state_12246[(2)]);var inst_12214 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12215 = cljs.core.async.untap_STAR_.call(null,m,inst_12212);var state_12246__$1 = (function (){var statearr_12271 = state_12246;(statearr_12271[(26)] = inst_12214);
(statearr_12271[(27)] = inst_12213);
return statearr_12271;
})();var statearr_12272_12346 = state_12246__$1;(statearr_12272_12346[(2)] = inst_12215);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12246__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (33)))
{var inst_12203 = (state_12246[(17)]);var inst_12205 = cljs.core.chunked_seq_QMARK_.call(null,inst_12203);var state_12246__$1 = state_12246;if(inst_12205)
{var statearr_12273_12347 = state_12246__$1;(statearr_12273_12347[(1)] = (36));
} else
{var statearr_12274_12348 = state_12246__$1;(statearr_12274_12348[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (13)))
{var inst_12133 = (state_12246[(28)]);var inst_12136 = cljs.core.async.close_BANG_.call(null,inst_12133);var state_12246__$1 = state_12246;var statearr_12275_12349 = state_12246__$1;(statearr_12275_12349[(2)] = inst_12136);
(statearr_12275_12349[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (22)))
{var inst_12154 = (state_12246[(8)]);var inst_12157 = cljs.core.async.close_BANG_.call(null,inst_12154);var state_12246__$1 = state_12246;var statearr_12276_12350 = state_12246__$1;(statearr_12276_12350[(2)] = inst_12157);
(statearr_12276_12350[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (36)))
{var inst_12203 = (state_12246[(17)]);var inst_12207 = cljs.core.chunk_first.call(null,inst_12203);var inst_12208 = cljs.core.chunk_rest.call(null,inst_12203);var inst_12209 = cljs.core.count.call(null,inst_12207);var inst_12182 = inst_12208;var inst_12183 = inst_12207;var inst_12184 = inst_12209;var inst_12185 = (0);var state_12246__$1 = (function (){var statearr_12277 = state_12246;(statearr_12277[(18)] = inst_12182);
(statearr_12277[(9)] = inst_12185);
(statearr_12277[(10)] = inst_12183);
(statearr_12277[(20)] = inst_12184);
return statearr_12277;
})();var statearr_12278_12351 = state_12246__$1;(statearr_12278_12351[(2)] = null);
(statearr_12278_12351[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (41)))
{var inst_12212 = (state_12246[(25)]);var inst_12114 = (state_12246[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12246,(40),Object,null,(39));var inst_12219 = cljs.core.async.put_BANG_.call(null,inst_12212,inst_12114,done);var state_12246__$1 = state_12246;var statearr_12279_12352 = state_12246__$1;(statearr_12279_12352[(2)] = inst_12219);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12246__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (43)))
{var state_12246__$1 = state_12246;var statearr_12280_12353 = state_12246__$1;(statearr_12280_12353[(2)] = null);
(statearr_12280_12353[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (29)))
{var inst_12230 = (state_12246[(2)]);var state_12246__$1 = state_12246;var statearr_12281_12354 = state_12246__$1;(statearr_12281_12354[(2)] = inst_12230);
(statearr_12281_12354[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (44)))
{var inst_12239 = (state_12246[(2)]);var state_12246__$1 = (function (){var statearr_12282 = state_12246;(statearr_12282[(29)] = inst_12239);
return statearr_12282;
})();var statearr_12283_12355 = state_12246__$1;(statearr_12283_12355[(2)] = null);
(statearr_12283_12355[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (6)))
{var inst_12174 = (state_12246[(30)]);var inst_12173 = cljs.core.deref.call(null,cs);var inst_12174__$1 = cljs.core.keys.call(null,inst_12173);var inst_12175 = cljs.core.count.call(null,inst_12174__$1);var inst_12176 = cljs.core.reset_BANG_.call(null,dctr,inst_12175);var inst_12181 = cljs.core.seq.call(null,inst_12174__$1);var inst_12182 = inst_12181;var inst_12183 = null;var inst_12184 = (0);var inst_12185 = (0);var state_12246__$1 = (function (){var statearr_12284 = state_12246;(statearr_12284[(18)] = inst_12182);
(statearr_12284[(9)] = inst_12185);
(statearr_12284[(30)] = inst_12174__$1);
(statearr_12284[(10)] = inst_12183);
(statearr_12284[(20)] = inst_12184);
(statearr_12284[(31)] = inst_12176);
return statearr_12284;
})();var statearr_12285_12356 = state_12246__$1;(statearr_12285_12356[(2)] = null);
(statearr_12285_12356[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (28)))
{var inst_12182 = (state_12246[(18)]);var inst_12203 = (state_12246[(17)]);var inst_12203__$1 = cljs.core.seq.call(null,inst_12182);var state_12246__$1 = (function (){var statearr_12286 = state_12246;(statearr_12286[(17)] = inst_12203__$1);
return statearr_12286;
})();if(inst_12203__$1)
{var statearr_12287_12357 = state_12246__$1;(statearr_12287_12357[(1)] = (33));
} else
{var statearr_12288_12358 = state_12246__$1;(statearr_12288_12358[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (25)))
{var inst_12185 = (state_12246[(9)]);var inst_12184 = (state_12246[(20)]);var inst_12187 = (inst_12185 < inst_12184);var inst_12188 = inst_12187;var state_12246__$1 = state_12246;if(cljs.core.truth_(inst_12188))
{var statearr_12289_12359 = state_12246__$1;(statearr_12289_12359[(1)] = (27));
} else
{var statearr_12290_12360 = state_12246__$1;(statearr_12290_12360[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (34)))
{var state_12246__$1 = state_12246;var statearr_12291_12361 = state_12246__$1;(statearr_12291_12361[(2)] = null);
(statearr_12291_12361[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (17)))
{var state_12246__$1 = state_12246;var statearr_12292_12362 = state_12246__$1;(statearr_12292_12362[(2)] = null);
(statearr_12292_12362[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (3)))
{var inst_12244 = (state_12246[(2)]);var state_12246__$1 = state_12246;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12246__$1,inst_12244);
} else
{if((state_val_12247 === (12)))
{var inst_12169 = (state_12246[(2)]);var state_12246__$1 = state_12246;var statearr_12293_12363 = state_12246__$1;(statearr_12293_12363[(2)] = inst_12169);
(statearr_12293_12363[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (2)))
{var state_12246__$1 = state_12246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12246__$1,(4),ch);
} else
{if((state_val_12247 === (23)))
{var state_12246__$1 = state_12246;var statearr_12294_12364 = state_12246__$1;(statearr_12294_12364[(2)] = null);
(statearr_12294_12364[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (35)))
{var inst_12228 = (state_12246[(2)]);var state_12246__$1 = state_12246;var statearr_12295_12365 = state_12246__$1;(statearr_12295_12365[(2)] = inst_12228);
(statearr_12295_12365[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (19)))
{var inst_12143 = (state_12246[(7)]);var inst_12147 = cljs.core.chunk_first.call(null,inst_12143);var inst_12148 = cljs.core.chunk_rest.call(null,inst_12143);var inst_12149 = cljs.core.count.call(null,inst_12147);var inst_12123 = inst_12148;var inst_12124 = inst_12147;var inst_12125 = inst_12149;var inst_12126 = (0);var state_12246__$1 = (function (){var statearr_12296 = state_12246;(statearr_12296[(12)] = inst_12123);
(statearr_12296[(13)] = inst_12125);
(statearr_12296[(15)] = inst_12126);
(statearr_12296[(16)] = inst_12124);
return statearr_12296;
})();var statearr_12297_12366 = state_12246__$1;(statearr_12297_12366[(2)] = null);
(statearr_12297_12366[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (11)))
{var inst_12123 = (state_12246[(12)]);var inst_12143 = (state_12246[(7)]);var inst_12143__$1 = cljs.core.seq.call(null,inst_12123);var state_12246__$1 = (function (){var statearr_12298 = state_12246;(statearr_12298[(7)] = inst_12143__$1);
return statearr_12298;
})();if(inst_12143__$1)
{var statearr_12299_12367 = state_12246__$1;(statearr_12299_12367[(1)] = (16));
} else
{var statearr_12300_12368 = state_12246__$1;(statearr_12300_12368[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (9)))
{var inst_12171 = (state_12246[(2)]);var state_12246__$1 = state_12246;var statearr_12301_12369 = state_12246__$1;(statearr_12301_12369[(2)] = inst_12171);
(statearr_12301_12369[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (5)))
{var inst_12121 = cljs.core.deref.call(null,cs);var inst_12122 = cljs.core.seq.call(null,inst_12121);var inst_12123 = inst_12122;var inst_12124 = null;var inst_12125 = (0);var inst_12126 = (0);var state_12246__$1 = (function (){var statearr_12302 = state_12246;(statearr_12302[(12)] = inst_12123);
(statearr_12302[(13)] = inst_12125);
(statearr_12302[(15)] = inst_12126);
(statearr_12302[(16)] = inst_12124);
return statearr_12302;
})();var statearr_12303_12370 = state_12246__$1;(statearr_12303_12370[(2)] = null);
(statearr_12303_12370[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (14)))
{var state_12246__$1 = state_12246;var statearr_12304_12371 = state_12246__$1;(statearr_12304_12371[(2)] = null);
(statearr_12304_12371[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (45)))
{var inst_12236 = (state_12246[(2)]);var state_12246__$1 = state_12246;var statearr_12305_12372 = state_12246__$1;(statearr_12305_12372[(2)] = inst_12236);
(statearr_12305_12372[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (26)))
{var inst_12174 = (state_12246[(30)]);var inst_12232 = (state_12246[(2)]);var inst_12233 = cljs.core.seq.call(null,inst_12174);var state_12246__$1 = (function (){var statearr_12306 = state_12246;(statearr_12306[(32)] = inst_12232);
return statearr_12306;
})();if(inst_12233)
{var statearr_12307_12373 = state_12246__$1;(statearr_12307_12373[(1)] = (42));
} else
{var statearr_12308_12374 = state_12246__$1;(statearr_12308_12374[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (16)))
{var inst_12143 = (state_12246[(7)]);var inst_12145 = cljs.core.chunked_seq_QMARK_.call(null,inst_12143);var state_12246__$1 = state_12246;if(inst_12145)
{var statearr_12312_12375 = state_12246__$1;(statearr_12312_12375[(1)] = (19));
} else
{var statearr_12313_12376 = state_12246__$1;(statearr_12313_12376[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (38)))
{var inst_12225 = (state_12246[(2)]);var state_12246__$1 = state_12246;var statearr_12314_12377 = state_12246__$1;(statearr_12314_12377[(2)] = inst_12225);
(statearr_12314_12377[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (30)))
{var inst_12182 = (state_12246[(18)]);var inst_12185 = (state_12246[(9)]);var inst_12183 = (state_12246[(10)]);var inst_12184 = (state_12246[(20)]);var inst_12199 = (state_12246[(2)]);var inst_12200 = (inst_12185 + (1));var tmp12309 = inst_12182;var tmp12310 = inst_12183;var tmp12311 = inst_12184;var inst_12182__$1 = tmp12309;var inst_12183__$1 = tmp12310;var inst_12184__$1 = tmp12311;var inst_12185__$1 = inst_12200;var state_12246__$1 = (function (){var statearr_12315 = state_12246;(statearr_12315[(18)] = inst_12182__$1);
(statearr_12315[(33)] = inst_12199);
(statearr_12315[(9)] = inst_12185__$1);
(statearr_12315[(10)] = inst_12183__$1);
(statearr_12315[(20)] = inst_12184__$1);
return statearr_12315;
})();var statearr_12316_12378 = state_12246__$1;(statearr_12316_12378[(2)] = null);
(statearr_12316_12378[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (10)))
{var inst_12126 = (state_12246[(15)]);var inst_12124 = (state_12246[(16)]);var inst_12132 = cljs.core._nth.call(null,inst_12124,inst_12126);var inst_12133 = cljs.core.nth.call(null,inst_12132,(0),null);var inst_12134 = cljs.core.nth.call(null,inst_12132,(1),null);var state_12246__$1 = (function (){var statearr_12317 = state_12246;(statearr_12317[(28)] = inst_12133);
return statearr_12317;
})();if(cljs.core.truth_(inst_12134))
{var statearr_12318_12379 = state_12246__$1;(statearr_12318_12379[(1)] = (13));
} else
{var statearr_12319_12380 = state_12246__$1;(statearr_12319_12380[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (18)))
{var inst_12167 = (state_12246[(2)]);var state_12246__$1 = state_12246;var statearr_12320_12381 = state_12246__$1;(statearr_12320_12381[(2)] = inst_12167);
(statearr_12320_12381[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (42)))
{var state_12246__$1 = state_12246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12246__$1,(45),dchan);
} else
{if((state_val_12247 === (37)))
{var inst_12203 = (state_12246[(17)]);var inst_12212 = cljs.core.first.call(null,inst_12203);var state_12246__$1 = (function (){var statearr_12321 = state_12246;(statearr_12321[(25)] = inst_12212);
return statearr_12321;
})();var statearr_12322_12382 = state_12246__$1;(statearr_12322_12382[(2)] = null);
(statearr_12322_12382[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12247 === (8)))
{var inst_12125 = (state_12246[(13)]);var inst_12126 = (state_12246[(15)]);var inst_12128 = (inst_12126 < inst_12125);var inst_12129 = inst_12128;var state_12246__$1 = state_12246;if(cljs.core.truth_(inst_12129))
{var statearr_12323_12383 = state_12246__$1;(statearr_12323_12383[(1)] = (10));
} else
{var statearr_12324_12384 = state_12246__$1;(statearr_12324_12384[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6346__auto___12332,cs,m,dchan,dctr,done))
;return ((function (switch__6331__auto__,c__6346__auto___12332,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_12328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12328[(0)] = state_machine__6332__auto__);
(statearr_12328[(1)] = (1));
return statearr_12328;
});
var state_machine__6332__auto____1 = (function (state_12246){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_12246);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e12329){if((e12329 instanceof Object))
{var ex__6335__auto__ = e12329;var statearr_12330_12385 = state_12246;(statearr_12330_12385[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12246);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12329;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12386 = state_12246;
state_12246 = G__12386;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_12246){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_12246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto___12332,cs,m,dchan,dctr,done))
})();var state__6348__auto__ = (function (){var statearr_12331 = f__6347__auto__.call(null);(statearr_12331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto___12332);
return statearr_12331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto___12332,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12388 = {};return obj12388;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3532__auto__ = m;if(and__3532__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4171__auto__ = (((m == null))?null:m);return (function (){var or__3544__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12498 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12498 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12499){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12499 = meta12499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12498.cljs$lang$type = true;
cljs.core.async.t12498.cljs$lang$ctorStr = "cljs.core.async/t12498";
cljs.core.async.t12498.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t12498");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12498.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12498.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12498.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12498.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12498.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12498.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12498.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12498.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12500){var self__ = this;
var _12500__$1 = this;return self__.meta12499;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12500,meta12499__$1){var self__ = this;
var _12500__$1 = this;return (new cljs.core.async.t12498(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12499__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12498 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12498(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12499){return (new cljs.core.async.t12498(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12499));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12498(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6346__auto___12607 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto___12607,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto___12607,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12565){var state_val_12566 = (state_12565[(1)]);if((state_val_12566 === (7)))
{var inst_12514 = (state_12565[(7)]);var inst_12519 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12514);var state_12565__$1 = state_12565;var statearr_12567_12608 = state_12565__$1;(statearr_12567_12608[(2)] = inst_12519);
(statearr_12567_12608[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (20)))
{var inst_12529 = (state_12565[(8)]);var state_12565__$1 = state_12565;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12565__$1,(23),out,inst_12529);
} else
{if((state_val_12566 === (1)))
{var inst_12504 = (state_12565[(9)]);var inst_12504__$1 = calc_state.call(null);var inst_12505 = cljs.core.seq_QMARK_.call(null,inst_12504__$1);var state_12565__$1 = (function (){var statearr_12568 = state_12565;(statearr_12568[(9)] = inst_12504__$1);
return statearr_12568;
})();if(inst_12505)
{var statearr_12569_12609 = state_12565__$1;(statearr_12569_12609[(1)] = (2));
} else
{var statearr_12570_12610 = state_12565__$1;(statearr_12570_12610[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (4)))
{var inst_12504 = (state_12565[(9)]);var inst_12510 = (state_12565[(2)]);var inst_12511 = cljs.core.get.call(null,inst_12510,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12512 = cljs.core.get.call(null,inst_12510,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12513 = cljs.core.get.call(null,inst_12510,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12514 = inst_12504;var state_12565__$1 = (function (){var statearr_12571 = state_12565;(statearr_12571[(7)] = inst_12514);
(statearr_12571[(10)] = inst_12511);
(statearr_12571[(11)] = inst_12513);
(statearr_12571[(12)] = inst_12512);
return statearr_12571;
})();var statearr_12572_12611 = state_12565__$1;(statearr_12572_12611[(2)] = null);
(statearr_12572_12611[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (15)))
{var state_12565__$1 = state_12565;var statearr_12573_12612 = state_12565__$1;(statearr_12573_12612[(2)] = null);
(statearr_12573_12612[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (21)))
{var state_12565__$1 = state_12565;var statearr_12574_12613 = state_12565__$1;(statearr_12574_12613[(2)] = null);
(statearr_12574_12613[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (13)))
{var inst_12561 = (state_12565[(2)]);var state_12565__$1 = state_12565;var statearr_12575_12614 = state_12565__$1;(statearr_12575_12614[(2)] = inst_12561);
(statearr_12575_12614[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (22)))
{var inst_12522 = (state_12565[(13)]);var inst_12558 = (state_12565[(2)]);var inst_12514 = inst_12522;var state_12565__$1 = (function (){var statearr_12576 = state_12565;(statearr_12576[(7)] = inst_12514);
(statearr_12576[(14)] = inst_12558);
return statearr_12576;
})();var statearr_12577_12615 = state_12565__$1;(statearr_12577_12615[(2)] = null);
(statearr_12577_12615[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (6)))
{var inst_12563 = (state_12565[(2)]);var state_12565__$1 = state_12565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12565__$1,inst_12563);
} else
{if((state_val_12566 === (17)))
{var inst_12544 = (state_12565[(15)]);var state_12565__$1 = state_12565;var statearr_12578_12616 = state_12565__$1;(statearr_12578_12616[(2)] = inst_12544);
(statearr_12578_12616[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (3)))
{var inst_12504 = (state_12565[(9)]);var state_12565__$1 = state_12565;var statearr_12579_12617 = state_12565__$1;(statearr_12579_12617[(2)] = inst_12504);
(statearr_12579_12617[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (12)))
{var inst_12525 = (state_12565[(16)]);var inst_12530 = (state_12565[(17)]);var inst_12544 = (state_12565[(15)]);var inst_12544__$1 = inst_12525.call(null,inst_12530);var state_12565__$1 = (function (){var statearr_12580 = state_12565;(statearr_12580[(15)] = inst_12544__$1);
return statearr_12580;
})();if(cljs.core.truth_(inst_12544__$1))
{var statearr_12581_12618 = state_12565__$1;(statearr_12581_12618[(1)] = (17));
} else
{var statearr_12582_12619 = state_12565__$1;(statearr_12582_12619[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (2)))
{var inst_12504 = (state_12565[(9)]);var inst_12507 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12504);var state_12565__$1 = state_12565;var statearr_12583_12620 = state_12565__$1;(statearr_12583_12620[(2)] = inst_12507);
(statearr_12583_12620[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (23)))
{var inst_12555 = (state_12565[(2)]);var state_12565__$1 = state_12565;var statearr_12584_12621 = state_12565__$1;(statearr_12584_12621[(2)] = inst_12555);
(statearr_12584_12621[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (19)))
{var inst_12552 = (state_12565[(2)]);var state_12565__$1 = state_12565;if(cljs.core.truth_(inst_12552))
{var statearr_12585_12622 = state_12565__$1;(statearr_12585_12622[(1)] = (20));
} else
{var statearr_12586_12623 = state_12565__$1;(statearr_12586_12623[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (11)))
{var inst_12529 = (state_12565[(8)]);var inst_12535 = (inst_12529 == null);var state_12565__$1 = state_12565;if(cljs.core.truth_(inst_12535))
{var statearr_12587_12624 = state_12565__$1;(statearr_12587_12624[(1)] = (14));
} else
{var statearr_12588_12625 = state_12565__$1;(statearr_12588_12625[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (9)))
{var inst_12522 = (state_12565[(13)]);var inst_12522__$1 = (state_12565[(2)]);var inst_12523 = cljs.core.get.call(null,inst_12522__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12524 = cljs.core.get.call(null,inst_12522__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12525 = cljs.core.get.call(null,inst_12522__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12565__$1 = (function (){var statearr_12589 = state_12565;(statearr_12589[(16)] = inst_12525);
(statearr_12589[(18)] = inst_12524);
(statearr_12589[(13)] = inst_12522__$1);
return statearr_12589;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12565__$1,(10),inst_12523);
} else
{if((state_val_12566 === (5)))
{var inst_12514 = (state_12565[(7)]);var inst_12517 = cljs.core.seq_QMARK_.call(null,inst_12514);var state_12565__$1 = state_12565;if(inst_12517)
{var statearr_12590_12626 = state_12565__$1;(statearr_12590_12626[(1)] = (7));
} else
{var statearr_12591_12627 = state_12565__$1;(statearr_12591_12627[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (14)))
{var inst_12530 = (state_12565[(17)]);var inst_12537 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12530);var state_12565__$1 = state_12565;var statearr_12592_12628 = state_12565__$1;(statearr_12592_12628[(2)] = inst_12537);
(statearr_12592_12628[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (16)))
{var inst_12540 = (state_12565[(2)]);var inst_12541 = calc_state.call(null);var inst_12514 = inst_12541;var state_12565__$1 = (function (){var statearr_12593 = state_12565;(statearr_12593[(7)] = inst_12514);
(statearr_12593[(19)] = inst_12540);
return statearr_12593;
})();var statearr_12594_12629 = state_12565__$1;(statearr_12594_12629[(2)] = null);
(statearr_12594_12629[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (10)))
{var inst_12530 = (state_12565[(17)]);var inst_12529 = (state_12565[(8)]);var inst_12528 = (state_12565[(2)]);var inst_12529__$1 = cljs.core.nth.call(null,inst_12528,(0),null);var inst_12530__$1 = cljs.core.nth.call(null,inst_12528,(1),null);var inst_12531 = (inst_12529__$1 == null);var inst_12532 = cljs.core._EQ_.call(null,inst_12530__$1,change);var inst_12533 = (inst_12531) || (inst_12532);var state_12565__$1 = (function (){var statearr_12595 = state_12565;(statearr_12595[(17)] = inst_12530__$1);
(statearr_12595[(8)] = inst_12529__$1);
return statearr_12595;
})();if(cljs.core.truth_(inst_12533))
{var statearr_12596_12630 = state_12565__$1;(statearr_12596_12630[(1)] = (11));
} else
{var statearr_12597_12631 = state_12565__$1;(statearr_12597_12631[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (18)))
{var inst_12525 = (state_12565[(16)]);var inst_12530 = (state_12565[(17)]);var inst_12524 = (state_12565[(18)]);var inst_12547 = cljs.core.empty_QMARK_.call(null,inst_12525);var inst_12548 = inst_12524.call(null,inst_12530);var inst_12549 = cljs.core.not.call(null,inst_12548);var inst_12550 = (inst_12547) && (inst_12549);var state_12565__$1 = state_12565;var statearr_12598_12632 = state_12565__$1;(statearr_12598_12632[(2)] = inst_12550);
(statearr_12598_12632[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (8)))
{var inst_12514 = (state_12565[(7)]);var state_12565__$1 = state_12565;var statearr_12599_12633 = state_12565__$1;(statearr_12599_12633[(2)] = inst_12514);
(statearr_12599_12633[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6346__auto___12607,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6331__auto__,c__6346__auto___12607,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_12603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12603[(0)] = state_machine__6332__auto__);
(statearr_12603[(1)] = (1));
return statearr_12603;
});
var state_machine__6332__auto____1 = (function (state_12565){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_12565);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e12604){if((e12604 instanceof Object))
{var ex__6335__auto__ = e12604;var statearr_12605_12634 = state_12565;(statearr_12605_12634[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12565);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12635 = state_12565;
state_12565 = G__12635;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_12565){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_12565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto___12607,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6348__auto__ = (function (){var statearr_12606 = f__6347__auto__.call(null);(statearr_12606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto___12607);
return statearr_12606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto___12607,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12637 = {};return obj12637;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3532__auto__ = p;if(and__3532__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3532__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4171__auto__ = (((p == null))?null:p);return (function (){var or__3544__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3532__auto__ = p;if(and__3532__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3532__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4171__auto__ = (((p == null))?null:p);return (function (){var or__3544__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3532__auto__ = p;if(and__3532__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4171__auto__ = (((p == null))?null:p);return (function (){var or__3544__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3532__auto__ = p;if(and__3532__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4171__auto__ = (((p == null))?null:p);return (function (){var or__3544__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3544__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3544__auto__,mults){
return (function (p1__12638_SHARP_){if(cljs.core.truth_(p1__12638_SHARP_.call(null,topic)))
{return p1__12638_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12638_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3544__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12763 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12763 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12764){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12764 = meta12764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12763.cljs$lang$type = true;
cljs.core.async.t12763.cljs$lang$ctorStr = "cljs.core.async/t12763";
cljs.core.async.t12763.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"cljs.core.async/t12763");
});})(mults,ensure_mult))
;
cljs.core.async.t12763.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12763.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12763.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12763.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12763.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12763.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12763.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12765){var self__ = this;
var _12765__$1 = this;return self__.meta12764;
});})(mults,ensure_mult))
;
cljs.core.async.t12763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12765,meta12764__$1){var self__ = this;
var _12765__$1 = this;return (new cljs.core.async.t12763(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12764__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12763 = ((function (mults,ensure_mult){
return (function __GT_t12763(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12764){return (new cljs.core.async.t12763(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12764));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12763(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6346__auto___12887 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto___12887,mults,ensure_mult,p){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto___12887,mults,ensure_mult,p){
return (function (state_12839){var state_val_12840 = (state_12839[(1)]);if((state_val_12840 === (7)))
{var inst_12835 = (state_12839[(2)]);var state_12839__$1 = state_12839;var statearr_12841_12888 = state_12839__$1;(statearr_12841_12888[(2)] = inst_12835);
(statearr_12841_12888[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (20)))
{var state_12839__$1 = state_12839;var statearr_12842_12889 = state_12839__$1;(statearr_12842_12889[(2)] = null);
(statearr_12842_12889[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (1)))
{var state_12839__$1 = state_12839;var statearr_12843_12890 = state_12839__$1;(statearr_12843_12890[(2)] = null);
(statearr_12843_12890[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (24)))
{var inst_12768 = (state_12839[(7)]);var inst_12818 = (state_12839[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12839,(23),Object,null,(22));var inst_12825 = cljs.core.async.muxch_STAR_.call(null,inst_12818);var state_12839__$1 = state_12839;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12839__$1,(25),inst_12825,inst_12768);
} else
{if((state_val_12840 === (4)))
{var inst_12768 = (state_12839[(7)]);var inst_12768__$1 = (state_12839[(2)]);var inst_12769 = (inst_12768__$1 == null);var state_12839__$1 = (function (){var statearr_12844 = state_12839;(statearr_12844[(7)] = inst_12768__$1);
return statearr_12844;
})();if(cljs.core.truth_(inst_12769))
{var statearr_12845_12891 = state_12839__$1;(statearr_12845_12891[(1)] = (5));
} else
{var statearr_12846_12892 = state_12839__$1;(statearr_12846_12892[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (15)))
{var inst_12810 = (state_12839[(2)]);var state_12839__$1 = state_12839;var statearr_12847_12893 = state_12839__$1;(statearr_12847_12893[(2)] = inst_12810);
(statearr_12847_12893[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (21)))
{var inst_12832 = (state_12839[(2)]);var state_12839__$1 = (function (){var statearr_12848 = state_12839;(statearr_12848[(9)] = inst_12832);
return statearr_12848;
})();var statearr_12849_12894 = state_12839__$1;(statearr_12849_12894[(2)] = null);
(statearr_12849_12894[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (13)))
{var inst_12792 = (state_12839[(10)]);var inst_12794 = cljs.core.chunked_seq_QMARK_.call(null,inst_12792);var state_12839__$1 = state_12839;if(inst_12794)
{var statearr_12850_12895 = state_12839__$1;(statearr_12850_12895[(1)] = (16));
} else
{var statearr_12851_12896 = state_12839__$1;(statearr_12851_12896[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (22)))
{var inst_12829 = (state_12839[(2)]);var state_12839__$1 = state_12839;var statearr_12852_12897 = state_12839__$1;(statearr_12852_12897[(2)] = inst_12829);
(statearr_12852_12897[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (6)))
{var inst_12768 = (state_12839[(7)]);var inst_12818 = (state_12839[(8)]);var inst_12816 = (state_12839[(11)]);var inst_12816__$1 = topic_fn.call(null,inst_12768);var inst_12817 = cljs.core.deref.call(null,mults);var inst_12818__$1 = cljs.core.get.call(null,inst_12817,inst_12816__$1);var state_12839__$1 = (function (){var statearr_12853 = state_12839;(statearr_12853[(8)] = inst_12818__$1);
(statearr_12853[(11)] = inst_12816__$1);
return statearr_12853;
})();if(cljs.core.truth_(inst_12818__$1))
{var statearr_12854_12898 = state_12839__$1;(statearr_12854_12898[(1)] = (19));
} else
{var statearr_12855_12899 = state_12839__$1;(statearr_12855_12899[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (25)))
{var inst_12827 = (state_12839[(2)]);var state_12839__$1 = state_12839;var statearr_12856_12900 = state_12839__$1;(statearr_12856_12900[(2)] = inst_12827);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12839__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (17)))
{var inst_12792 = (state_12839[(10)]);var inst_12801 = cljs.core.first.call(null,inst_12792);var inst_12802 = cljs.core.async.muxch_STAR_.call(null,inst_12801);var inst_12803 = cljs.core.async.close_BANG_.call(null,inst_12802);var inst_12804 = cljs.core.next.call(null,inst_12792);var inst_12778 = inst_12804;var inst_12779 = null;var inst_12780 = (0);var inst_12781 = (0);var state_12839__$1 = (function (){var statearr_12857 = state_12839;(statearr_12857[(12)] = inst_12781);
(statearr_12857[(13)] = inst_12778);
(statearr_12857[(14)] = inst_12803);
(statearr_12857[(15)] = inst_12779);
(statearr_12857[(16)] = inst_12780);
return statearr_12857;
})();var statearr_12858_12901 = state_12839__$1;(statearr_12858_12901[(2)] = null);
(statearr_12858_12901[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (3)))
{var inst_12837 = (state_12839[(2)]);var state_12839__$1 = state_12839;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12839__$1,inst_12837);
} else
{if((state_val_12840 === (12)))
{var inst_12812 = (state_12839[(2)]);var state_12839__$1 = state_12839;var statearr_12859_12902 = state_12839__$1;(statearr_12859_12902[(2)] = inst_12812);
(statearr_12859_12902[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (2)))
{var state_12839__$1 = state_12839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12839__$1,(4),ch);
} else
{if((state_val_12840 === (23)))
{var inst_12816 = (state_12839[(11)]);var inst_12820 = (state_12839[(2)]);var inst_12821 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12816);var state_12839__$1 = (function (){var statearr_12860 = state_12839;(statearr_12860[(17)] = inst_12820);
return statearr_12860;
})();var statearr_12861_12903 = state_12839__$1;(statearr_12861_12903[(2)] = inst_12821);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12839__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (19)))
{var state_12839__$1 = state_12839;var statearr_12862_12904 = state_12839__$1;(statearr_12862_12904[(2)] = null);
(statearr_12862_12904[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (11)))
{var inst_12792 = (state_12839[(10)]);var inst_12778 = (state_12839[(13)]);var inst_12792__$1 = cljs.core.seq.call(null,inst_12778);var state_12839__$1 = (function (){var statearr_12863 = state_12839;(statearr_12863[(10)] = inst_12792__$1);
return statearr_12863;
})();if(inst_12792__$1)
{var statearr_12864_12905 = state_12839__$1;(statearr_12864_12905[(1)] = (13));
} else
{var statearr_12865_12906 = state_12839__$1;(statearr_12865_12906[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (9)))
{var inst_12814 = (state_12839[(2)]);var state_12839__$1 = state_12839;var statearr_12866_12907 = state_12839__$1;(statearr_12866_12907[(2)] = inst_12814);
(statearr_12866_12907[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (5)))
{var inst_12775 = cljs.core.deref.call(null,mults);var inst_12776 = cljs.core.vals.call(null,inst_12775);var inst_12777 = cljs.core.seq.call(null,inst_12776);var inst_12778 = inst_12777;var inst_12779 = null;var inst_12780 = (0);var inst_12781 = (0);var state_12839__$1 = (function (){var statearr_12867 = state_12839;(statearr_12867[(12)] = inst_12781);
(statearr_12867[(13)] = inst_12778);
(statearr_12867[(15)] = inst_12779);
(statearr_12867[(16)] = inst_12780);
return statearr_12867;
})();var statearr_12868_12908 = state_12839__$1;(statearr_12868_12908[(2)] = null);
(statearr_12868_12908[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (14)))
{var state_12839__$1 = state_12839;var statearr_12872_12909 = state_12839__$1;(statearr_12872_12909[(2)] = null);
(statearr_12872_12909[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (16)))
{var inst_12792 = (state_12839[(10)]);var inst_12796 = cljs.core.chunk_first.call(null,inst_12792);var inst_12797 = cljs.core.chunk_rest.call(null,inst_12792);var inst_12798 = cljs.core.count.call(null,inst_12796);var inst_12778 = inst_12797;var inst_12779 = inst_12796;var inst_12780 = inst_12798;var inst_12781 = (0);var state_12839__$1 = (function (){var statearr_12873 = state_12839;(statearr_12873[(12)] = inst_12781);
(statearr_12873[(13)] = inst_12778);
(statearr_12873[(15)] = inst_12779);
(statearr_12873[(16)] = inst_12780);
return statearr_12873;
})();var statearr_12874_12910 = state_12839__$1;(statearr_12874_12910[(2)] = null);
(statearr_12874_12910[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (10)))
{var inst_12781 = (state_12839[(12)]);var inst_12778 = (state_12839[(13)]);var inst_12779 = (state_12839[(15)]);var inst_12780 = (state_12839[(16)]);var inst_12786 = cljs.core._nth.call(null,inst_12779,inst_12781);var inst_12787 = cljs.core.async.muxch_STAR_.call(null,inst_12786);var inst_12788 = cljs.core.async.close_BANG_.call(null,inst_12787);var inst_12789 = (inst_12781 + (1));var tmp12869 = inst_12778;var tmp12870 = inst_12779;var tmp12871 = inst_12780;var inst_12778__$1 = tmp12869;var inst_12779__$1 = tmp12870;var inst_12780__$1 = tmp12871;var inst_12781__$1 = inst_12789;var state_12839__$1 = (function (){var statearr_12875 = state_12839;(statearr_12875[(12)] = inst_12781__$1);
(statearr_12875[(13)] = inst_12778__$1);
(statearr_12875[(15)] = inst_12779__$1);
(statearr_12875[(16)] = inst_12780__$1);
(statearr_12875[(18)] = inst_12788);
return statearr_12875;
})();var statearr_12876_12911 = state_12839__$1;(statearr_12876_12911[(2)] = null);
(statearr_12876_12911[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (18)))
{var inst_12807 = (state_12839[(2)]);var state_12839__$1 = state_12839;var statearr_12877_12912 = state_12839__$1;(statearr_12877_12912[(2)] = inst_12807);
(statearr_12877_12912[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12840 === (8)))
{var inst_12781 = (state_12839[(12)]);var inst_12780 = (state_12839[(16)]);var inst_12783 = (inst_12781 < inst_12780);var inst_12784 = inst_12783;var state_12839__$1 = state_12839;if(cljs.core.truth_(inst_12784))
{var statearr_12878_12913 = state_12839__$1;(statearr_12878_12913[(1)] = (10));
} else
{var statearr_12879_12914 = state_12839__$1;(statearr_12879_12914[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6346__auto___12887,mults,ensure_mult,p))
;return ((function (switch__6331__auto__,c__6346__auto___12887,mults,ensure_mult,p){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_12883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12883[(0)] = state_machine__6332__auto__);
(statearr_12883[(1)] = (1));
return statearr_12883;
});
var state_machine__6332__auto____1 = (function (state_12839){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_12839);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e12884){if((e12884 instanceof Object))
{var ex__6335__auto__ = e12884;var statearr_12885_12915 = state_12839;(statearr_12885_12915[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12839);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12884;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12916 = state_12839;
state_12839 = G__12916;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_12839){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_12839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto___12887,mults,ensure_mult,p))
})();var state__6348__auto__ = (function (){var statearr_12886 = f__6347__auto__.call(null);(statearr_12886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto___12887);
return statearr_12886;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto___12887,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6346__auto___13053 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto___13053,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto___13053,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13023){var state_val_13024 = (state_13023[(1)]);if((state_val_13024 === (7)))
{var state_13023__$1 = state_13023;var statearr_13025_13054 = state_13023__$1;(statearr_13025_13054[(2)] = null);
(statearr_13025_13054[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (1)))
{var state_13023__$1 = state_13023;var statearr_13026_13055 = state_13023__$1;(statearr_13026_13055[(2)] = null);
(statearr_13026_13055[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (4)))
{var inst_12987 = (state_13023[(7)]);var inst_12989 = (inst_12987 < cnt);var state_13023__$1 = state_13023;if(cljs.core.truth_(inst_12989))
{var statearr_13027_13056 = state_13023__$1;(statearr_13027_13056[(1)] = (6));
} else
{var statearr_13028_13057 = state_13023__$1;(statearr_13028_13057[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (15)))
{var inst_13019 = (state_13023[(2)]);var state_13023__$1 = state_13023;var statearr_13029_13058 = state_13023__$1;(statearr_13029_13058[(2)] = inst_13019);
(statearr_13029_13058[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (13)))
{var inst_13012 = cljs.core.async.close_BANG_.call(null,out);var state_13023__$1 = state_13023;var statearr_13030_13059 = state_13023__$1;(statearr_13030_13059[(2)] = inst_13012);
(statearr_13030_13059[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (6)))
{var state_13023__$1 = state_13023;var statearr_13031_13060 = state_13023__$1;(statearr_13031_13060[(2)] = null);
(statearr_13031_13060[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (3)))
{var inst_13021 = (state_13023[(2)]);var state_13023__$1 = state_13023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13023__$1,inst_13021);
} else
{if((state_val_13024 === (12)))
{var inst_13009 = (state_13023[(8)]);var inst_13009__$1 = (state_13023[(2)]);var inst_13010 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13009__$1);var state_13023__$1 = (function (){var statearr_13032 = state_13023;(statearr_13032[(8)] = inst_13009__$1);
return statearr_13032;
})();if(cljs.core.truth_(inst_13010))
{var statearr_13033_13061 = state_13023__$1;(statearr_13033_13061[(1)] = (13));
} else
{var statearr_13034_13062 = state_13023__$1;(statearr_13034_13062[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (2)))
{var inst_12986 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12987 = (0);var state_13023__$1 = (function (){var statearr_13035 = state_13023;(statearr_13035[(9)] = inst_12986);
(statearr_13035[(7)] = inst_12987);
return statearr_13035;
})();var statearr_13036_13063 = state_13023__$1;(statearr_13036_13063[(2)] = null);
(statearr_13036_13063[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (11)))
{var inst_12987 = (state_13023[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13023,(10),Object,null,(9));var inst_12996 = chs__$1.call(null,inst_12987);var inst_12997 = done.call(null,inst_12987);var inst_12998 = cljs.core.async.take_BANG_.call(null,inst_12996,inst_12997);var state_13023__$1 = state_13023;var statearr_13037_13064 = state_13023__$1;(statearr_13037_13064[(2)] = inst_12998);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13023__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (9)))
{var inst_12987 = (state_13023[(7)]);var inst_13000 = (state_13023[(2)]);var inst_13001 = (inst_12987 + (1));var inst_12987__$1 = inst_13001;var state_13023__$1 = (function (){var statearr_13038 = state_13023;(statearr_13038[(10)] = inst_13000);
(statearr_13038[(7)] = inst_12987__$1);
return statearr_13038;
})();var statearr_13039_13065 = state_13023__$1;(statearr_13039_13065[(2)] = null);
(statearr_13039_13065[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (5)))
{var inst_13007 = (state_13023[(2)]);var state_13023__$1 = (function (){var statearr_13040 = state_13023;(statearr_13040[(11)] = inst_13007);
return statearr_13040;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13023__$1,(12),dchan);
} else
{if((state_val_13024 === (14)))
{var inst_13009 = (state_13023[(8)]);var inst_13014 = cljs.core.apply.call(null,f,inst_13009);var state_13023__$1 = state_13023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13023__$1,(16),out,inst_13014);
} else
{if((state_val_13024 === (16)))
{var inst_13016 = (state_13023[(2)]);var state_13023__$1 = (function (){var statearr_13041 = state_13023;(statearr_13041[(12)] = inst_13016);
return statearr_13041;
})();var statearr_13042_13066 = state_13023__$1;(statearr_13042_13066[(2)] = null);
(statearr_13042_13066[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (10)))
{var inst_12991 = (state_13023[(2)]);var inst_12992 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13023__$1 = (function (){var statearr_13043 = state_13023;(statearr_13043[(13)] = inst_12991);
return statearr_13043;
})();var statearr_13044_13067 = state_13023__$1;(statearr_13044_13067[(2)] = inst_12992);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13023__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (8)))
{var inst_13005 = (state_13023[(2)]);var state_13023__$1 = state_13023;var statearr_13045_13068 = state_13023__$1;(statearr_13045_13068[(2)] = inst_13005);
(statearr_13045_13068[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6346__auto___13053,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6331__auto__,c__6346__auto___13053,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_13049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13049[(0)] = state_machine__6332__auto__);
(statearr_13049[(1)] = (1));
return statearr_13049;
});
var state_machine__6332__auto____1 = (function (state_13023){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_13023);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e13050){if((e13050 instanceof Object))
{var ex__6335__auto__ = e13050;var statearr_13051_13069 = state_13023;(statearr_13051_13069[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13023);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13070 = state_13023;
state_13023 = G__13070;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_13023){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_13023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto___13053,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6348__auto__ = (function (){var statearr_13052 = f__6347__auto__.call(null);(statearr_13052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto___13053);
return statearr_13052;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto___13053,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6346__auto___13178 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto___13178,out){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto___13178,out){
return (function (state_13154){var state_val_13155 = (state_13154[(1)]);if((state_val_13155 === (7)))
{var inst_13133 = (state_13154[(7)]);var inst_13134 = (state_13154[(8)]);var inst_13133__$1 = (state_13154[(2)]);var inst_13134__$1 = cljs.core.nth.call(null,inst_13133__$1,(0),null);var inst_13135 = cljs.core.nth.call(null,inst_13133__$1,(1),null);var inst_13136 = (inst_13134__$1 == null);var state_13154__$1 = (function (){var statearr_13156 = state_13154;(statearr_13156[(9)] = inst_13135);
(statearr_13156[(7)] = inst_13133__$1);
(statearr_13156[(8)] = inst_13134__$1);
return statearr_13156;
})();if(cljs.core.truth_(inst_13136))
{var statearr_13157_13179 = state_13154__$1;(statearr_13157_13179[(1)] = (8));
} else
{var statearr_13158_13180 = state_13154__$1;(statearr_13158_13180[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13155 === (1)))
{var inst_13125 = cljs.core.vec.call(null,chs);var inst_13126 = inst_13125;var state_13154__$1 = (function (){var statearr_13159 = state_13154;(statearr_13159[(10)] = inst_13126);
return statearr_13159;
})();var statearr_13160_13181 = state_13154__$1;(statearr_13160_13181[(2)] = null);
(statearr_13160_13181[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13155 === (4)))
{var inst_13126 = (state_13154[(10)]);var state_13154__$1 = state_13154;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13154__$1,(7),inst_13126);
} else
{if((state_val_13155 === (6)))
{var inst_13150 = (state_13154[(2)]);var state_13154__$1 = state_13154;var statearr_13161_13182 = state_13154__$1;(statearr_13161_13182[(2)] = inst_13150);
(statearr_13161_13182[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13155 === (3)))
{var inst_13152 = (state_13154[(2)]);var state_13154__$1 = state_13154;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13154__$1,inst_13152);
} else
{if((state_val_13155 === (2)))
{var inst_13126 = (state_13154[(10)]);var inst_13128 = cljs.core.count.call(null,inst_13126);var inst_13129 = (inst_13128 > (0));var state_13154__$1 = state_13154;if(cljs.core.truth_(inst_13129))
{var statearr_13163_13183 = state_13154__$1;(statearr_13163_13183[(1)] = (4));
} else
{var statearr_13164_13184 = state_13154__$1;(statearr_13164_13184[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13155 === (11)))
{var inst_13126 = (state_13154[(10)]);var inst_13143 = (state_13154[(2)]);var tmp13162 = inst_13126;var inst_13126__$1 = tmp13162;var state_13154__$1 = (function (){var statearr_13165 = state_13154;(statearr_13165[(10)] = inst_13126__$1);
(statearr_13165[(11)] = inst_13143);
return statearr_13165;
})();var statearr_13166_13185 = state_13154__$1;(statearr_13166_13185[(2)] = null);
(statearr_13166_13185[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13155 === (9)))
{var inst_13134 = (state_13154[(8)]);var state_13154__$1 = state_13154;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13154__$1,(11),out,inst_13134);
} else
{if((state_val_13155 === (5)))
{var inst_13148 = cljs.core.async.close_BANG_.call(null,out);var state_13154__$1 = state_13154;var statearr_13167_13186 = state_13154__$1;(statearr_13167_13186[(2)] = inst_13148);
(statearr_13167_13186[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13155 === (10)))
{var inst_13146 = (state_13154[(2)]);var state_13154__$1 = state_13154;var statearr_13168_13187 = state_13154__$1;(statearr_13168_13187[(2)] = inst_13146);
(statearr_13168_13187[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13155 === (8)))
{var inst_13135 = (state_13154[(9)]);var inst_13126 = (state_13154[(10)]);var inst_13133 = (state_13154[(7)]);var inst_13134 = (state_13154[(8)]);var inst_13138 = (function (){var c = inst_13135;var v = inst_13134;var vec__13131 = inst_13133;var cs = inst_13126;return ((function (c,v,vec__13131,cs,inst_13135,inst_13126,inst_13133,inst_13134,state_val_13155,c__6346__auto___13178,out){
return (function (p1__13071_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13071_SHARP_);
});
;})(c,v,vec__13131,cs,inst_13135,inst_13126,inst_13133,inst_13134,state_val_13155,c__6346__auto___13178,out))
})();var inst_13139 = cljs.core.filterv.call(null,inst_13138,inst_13126);var inst_13126__$1 = inst_13139;var state_13154__$1 = (function (){var statearr_13169 = state_13154;(statearr_13169[(10)] = inst_13126__$1);
return statearr_13169;
})();var statearr_13170_13188 = state_13154__$1;(statearr_13170_13188[(2)] = null);
(statearr_13170_13188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6346__auto___13178,out))
;return ((function (switch__6331__auto__,c__6346__auto___13178,out){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_13174 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13174[(0)] = state_machine__6332__auto__);
(statearr_13174[(1)] = (1));
return statearr_13174;
});
var state_machine__6332__auto____1 = (function (state_13154){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_13154);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e13175){if((e13175 instanceof Object))
{var ex__6335__auto__ = e13175;var statearr_13176_13189 = state_13154;(statearr_13176_13189[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13154);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13175;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13190 = state_13154;
state_13154 = G__13190;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_13154){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_13154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto___13178,out))
})();var state__6348__auto__ = (function (){var statearr_13177 = f__6347__auto__.call(null);(statearr_13177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto___13178);
return statearr_13177;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto___13178,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6346__auto___13283 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto___13283,out){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto___13283,out){
return (function (state_13260){var state_val_13261 = (state_13260[(1)]);if((state_val_13261 === (7)))
{var inst_13242 = (state_13260[(7)]);var inst_13242__$1 = (state_13260[(2)]);var inst_13243 = (inst_13242__$1 == null);var inst_13244 = cljs.core.not.call(null,inst_13243);var state_13260__$1 = (function (){var statearr_13262 = state_13260;(statearr_13262[(7)] = inst_13242__$1);
return statearr_13262;
})();if(inst_13244)
{var statearr_13263_13284 = state_13260__$1;(statearr_13263_13284[(1)] = (8));
} else
{var statearr_13264_13285 = state_13260__$1;(statearr_13264_13285[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13261 === (1)))
{var inst_13237 = (0);var state_13260__$1 = (function (){var statearr_13265 = state_13260;(statearr_13265[(8)] = inst_13237);
return statearr_13265;
})();var statearr_13266_13286 = state_13260__$1;(statearr_13266_13286[(2)] = null);
(statearr_13266_13286[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13261 === (4)))
{var state_13260__$1 = state_13260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13260__$1,(7),ch);
} else
{if((state_val_13261 === (6)))
{var inst_13255 = (state_13260[(2)]);var state_13260__$1 = state_13260;var statearr_13267_13287 = state_13260__$1;(statearr_13267_13287[(2)] = inst_13255);
(statearr_13267_13287[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13261 === (3)))
{var inst_13257 = (state_13260[(2)]);var inst_13258 = cljs.core.async.close_BANG_.call(null,out);var state_13260__$1 = (function (){var statearr_13268 = state_13260;(statearr_13268[(9)] = inst_13257);
return statearr_13268;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13260__$1,inst_13258);
} else
{if((state_val_13261 === (2)))
{var inst_13237 = (state_13260[(8)]);var inst_13239 = (inst_13237 < n);var state_13260__$1 = state_13260;if(cljs.core.truth_(inst_13239))
{var statearr_13269_13288 = state_13260__$1;(statearr_13269_13288[(1)] = (4));
} else
{var statearr_13270_13289 = state_13260__$1;(statearr_13270_13289[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13261 === (11)))
{var inst_13237 = (state_13260[(8)]);var inst_13247 = (state_13260[(2)]);var inst_13248 = (inst_13237 + (1));var inst_13237__$1 = inst_13248;var state_13260__$1 = (function (){var statearr_13271 = state_13260;(statearr_13271[(10)] = inst_13247);
(statearr_13271[(8)] = inst_13237__$1);
return statearr_13271;
})();var statearr_13272_13290 = state_13260__$1;(statearr_13272_13290[(2)] = null);
(statearr_13272_13290[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13261 === (9)))
{var state_13260__$1 = state_13260;var statearr_13273_13291 = state_13260__$1;(statearr_13273_13291[(2)] = null);
(statearr_13273_13291[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13261 === (5)))
{var state_13260__$1 = state_13260;var statearr_13274_13292 = state_13260__$1;(statearr_13274_13292[(2)] = null);
(statearr_13274_13292[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13261 === (10)))
{var inst_13252 = (state_13260[(2)]);var state_13260__$1 = state_13260;var statearr_13275_13293 = state_13260__$1;(statearr_13275_13293[(2)] = inst_13252);
(statearr_13275_13293[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13261 === (8)))
{var inst_13242 = (state_13260[(7)]);var state_13260__$1 = state_13260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13260__$1,(11),out,inst_13242);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6346__auto___13283,out))
;return ((function (switch__6331__auto__,c__6346__auto___13283,out){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_13279 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13279[(0)] = state_machine__6332__auto__);
(statearr_13279[(1)] = (1));
return statearr_13279;
});
var state_machine__6332__auto____1 = (function (state_13260){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_13260);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e13280){if((e13280 instanceof Object))
{var ex__6335__auto__ = e13280;var statearr_13281_13294 = state_13260;(statearr_13281_13294[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13260);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13295 = state_13260;
state_13260 = G__13295;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_13260){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_13260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto___13283,out))
})();var state__6348__auto__ = (function (){var statearr_13282 = f__6347__auto__.call(null);(statearr_13282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto___13283);
return statearr_13282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto___13283,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6346__auto___13392 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto___13392,out){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto___13392,out){
return (function (state_13367){var state_val_13368 = (state_13367[(1)]);if((state_val_13368 === (7)))
{var inst_13362 = (state_13367[(2)]);var state_13367__$1 = state_13367;var statearr_13369_13393 = state_13367__$1;(statearr_13369_13393[(2)] = inst_13362);
(statearr_13369_13393[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13368 === (1)))
{var inst_13344 = null;var state_13367__$1 = (function (){var statearr_13370 = state_13367;(statearr_13370[(7)] = inst_13344);
return statearr_13370;
})();var statearr_13371_13394 = state_13367__$1;(statearr_13371_13394[(2)] = null);
(statearr_13371_13394[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13368 === (4)))
{var inst_13347 = (state_13367[(8)]);var inst_13347__$1 = (state_13367[(2)]);var inst_13348 = (inst_13347__$1 == null);var inst_13349 = cljs.core.not.call(null,inst_13348);var state_13367__$1 = (function (){var statearr_13372 = state_13367;(statearr_13372[(8)] = inst_13347__$1);
return statearr_13372;
})();if(inst_13349)
{var statearr_13373_13395 = state_13367__$1;(statearr_13373_13395[(1)] = (5));
} else
{var statearr_13374_13396 = state_13367__$1;(statearr_13374_13396[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13368 === (6)))
{var state_13367__$1 = state_13367;var statearr_13375_13397 = state_13367__$1;(statearr_13375_13397[(2)] = null);
(statearr_13375_13397[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13368 === (3)))
{var inst_13364 = (state_13367[(2)]);var inst_13365 = cljs.core.async.close_BANG_.call(null,out);var state_13367__$1 = (function (){var statearr_13376 = state_13367;(statearr_13376[(9)] = inst_13364);
return statearr_13376;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13367__$1,inst_13365);
} else
{if((state_val_13368 === (2)))
{var state_13367__$1 = state_13367;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13367__$1,(4),ch);
} else
{if((state_val_13368 === (11)))
{var inst_13347 = (state_13367[(8)]);var inst_13356 = (state_13367[(2)]);var inst_13344 = inst_13347;var state_13367__$1 = (function (){var statearr_13377 = state_13367;(statearr_13377[(10)] = inst_13356);
(statearr_13377[(7)] = inst_13344);
return statearr_13377;
})();var statearr_13378_13398 = state_13367__$1;(statearr_13378_13398[(2)] = null);
(statearr_13378_13398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13368 === (9)))
{var inst_13347 = (state_13367[(8)]);var state_13367__$1 = state_13367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13367__$1,(11),out,inst_13347);
} else
{if((state_val_13368 === (5)))
{var inst_13344 = (state_13367[(7)]);var inst_13347 = (state_13367[(8)]);var inst_13351 = cljs.core._EQ_.call(null,inst_13347,inst_13344);var state_13367__$1 = state_13367;if(inst_13351)
{var statearr_13380_13399 = state_13367__$1;(statearr_13380_13399[(1)] = (8));
} else
{var statearr_13381_13400 = state_13367__$1;(statearr_13381_13400[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13368 === (10)))
{var inst_13359 = (state_13367[(2)]);var state_13367__$1 = state_13367;var statearr_13382_13401 = state_13367__$1;(statearr_13382_13401[(2)] = inst_13359);
(statearr_13382_13401[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13368 === (8)))
{var inst_13344 = (state_13367[(7)]);var tmp13379 = inst_13344;var inst_13344__$1 = tmp13379;var state_13367__$1 = (function (){var statearr_13383 = state_13367;(statearr_13383[(7)] = inst_13344__$1);
return statearr_13383;
})();var statearr_13384_13402 = state_13367__$1;(statearr_13384_13402[(2)] = null);
(statearr_13384_13402[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6346__auto___13392,out))
;return ((function (switch__6331__auto__,c__6346__auto___13392,out){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_13388 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13388[(0)] = state_machine__6332__auto__);
(statearr_13388[(1)] = (1));
return statearr_13388;
});
var state_machine__6332__auto____1 = (function (state_13367){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_13367);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e13389){if((e13389 instanceof Object))
{var ex__6335__auto__ = e13389;var statearr_13390_13403 = state_13367;(statearr_13390_13403[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13367);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13404 = state_13367;
state_13367 = G__13404;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_13367){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_13367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto___13392,out))
})();var state__6348__auto__ = (function (){var statearr_13391 = f__6347__auto__.call(null);(statearr_13391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto___13392);
return statearr_13391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto___13392,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6346__auto___13539 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto___13539,out){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto___13539,out){
return (function (state_13509){var state_val_13510 = (state_13509[(1)]);if((state_val_13510 === (7)))
{var inst_13505 = (state_13509[(2)]);var state_13509__$1 = state_13509;var statearr_13511_13540 = state_13509__$1;(statearr_13511_13540[(2)] = inst_13505);
(statearr_13511_13540[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (1)))
{var inst_13472 = (new Array(n));var inst_13473 = inst_13472;var inst_13474 = (0);var state_13509__$1 = (function (){var statearr_13512 = state_13509;(statearr_13512[(7)] = inst_13474);
(statearr_13512[(8)] = inst_13473);
return statearr_13512;
})();var statearr_13513_13541 = state_13509__$1;(statearr_13513_13541[(2)] = null);
(statearr_13513_13541[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (4)))
{var inst_13477 = (state_13509[(9)]);var inst_13477__$1 = (state_13509[(2)]);var inst_13478 = (inst_13477__$1 == null);var inst_13479 = cljs.core.not.call(null,inst_13478);var state_13509__$1 = (function (){var statearr_13514 = state_13509;(statearr_13514[(9)] = inst_13477__$1);
return statearr_13514;
})();if(inst_13479)
{var statearr_13515_13542 = state_13509__$1;(statearr_13515_13542[(1)] = (5));
} else
{var statearr_13516_13543 = state_13509__$1;(statearr_13516_13543[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (15)))
{var inst_13499 = (state_13509[(2)]);var state_13509__$1 = state_13509;var statearr_13517_13544 = state_13509__$1;(statearr_13517_13544[(2)] = inst_13499);
(statearr_13517_13544[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (13)))
{var state_13509__$1 = state_13509;var statearr_13518_13545 = state_13509__$1;(statearr_13518_13545[(2)] = null);
(statearr_13518_13545[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (6)))
{var inst_13474 = (state_13509[(7)]);var inst_13495 = (inst_13474 > (0));var state_13509__$1 = state_13509;if(cljs.core.truth_(inst_13495))
{var statearr_13519_13546 = state_13509__$1;(statearr_13519_13546[(1)] = (12));
} else
{var statearr_13520_13547 = state_13509__$1;(statearr_13520_13547[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (3)))
{var inst_13507 = (state_13509[(2)]);var state_13509__$1 = state_13509;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13509__$1,inst_13507);
} else
{if((state_val_13510 === (12)))
{var inst_13473 = (state_13509[(8)]);var inst_13497 = cljs.core.vec.call(null,inst_13473);var state_13509__$1 = state_13509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13509__$1,(15),out,inst_13497);
} else
{if((state_val_13510 === (2)))
{var state_13509__$1 = state_13509;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13509__$1,(4),ch);
} else
{if((state_val_13510 === (11)))
{var inst_13489 = (state_13509[(2)]);var inst_13490 = (new Array(n));var inst_13473 = inst_13490;var inst_13474 = (0);var state_13509__$1 = (function (){var statearr_13521 = state_13509;(statearr_13521[(7)] = inst_13474);
(statearr_13521[(8)] = inst_13473);
(statearr_13521[(10)] = inst_13489);
return statearr_13521;
})();var statearr_13522_13548 = state_13509__$1;(statearr_13522_13548[(2)] = null);
(statearr_13522_13548[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (9)))
{var inst_13473 = (state_13509[(8)]);var inst_13487 = cljs.core.vec.call(null,inst_13473);var state_13509__$1 = state_13509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13509__$1,(11),out,inst_13487);
} else
{if((state_val_13510 === (5)))
{var inst_13477 = (state_13509[(9)]);var inst_13474 = (state_13509[(7)]);var inst_13482 = (state_13509[(11)]);var inst_13473 = (state_13509[(8)]);var inst_13481 = (inst_13473[inst_13474] = inst_13477);var inst_13482__$1 = (inst_13474 + (1));var inst_13483 = (inst_13482__$1 < n);var state_13509__$1 = (function (){var statearr_13523 = state_13509;(statearr_13523[(11)] = inst_13482__$1);
(statearr_13523[(12)] = inst_13481);
return statearr_13523;
})();if(cljs.core.truth_(inst_13483))
{var statearr_13524_13549 = state_13509__$1;(statearr_13524_13549[(1)] = (8));
} else
{var statearr_13525_13550 = state_13509__$1;(statearr_13525_13550[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (14)))
{var inst_13502 = (state_13509[(2)]);var inst_13503 = cljs.core.async.close_BANG_.call(null,out);var state_13509__$1 = (function (){var statearr_13527 = state_13509;(statearr_13527[(13)] = inst_13502);
return statearr_13527;
})();var statearr_13528_13551 = state_13509__$1;(statearr_13528_13551[(2)] = inst_13503);
(statearr_13528_13551[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (10)))
{var inst_13493 = (state_13509[(2)]);var state_13509__$1 = state_13509;var statearr_13529_13552 = state_13509__$1;(statearr_13529_13552[(2)] = inst_13493);
(statearr_13529_13552[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (8)))
{var inst_13482 = (state_13509[(11)]);var inst_13473 = (state_13509[(8)]);var tmp13526 = inst_13473;var inst_13473__$1 = tmp13526;var inst_13474 = inst_13482;var state_13509__$1 = (function (){var statearr_13530 = state_13509;(statearr_13530[(7)] = inst_13474);
(statearr_13530[(8)] = inst_13473__$1);
return statearr_13530;
})();var statearr_13531_13553 = state_13509__$1;(statearr_13531_13553[(2)] = null);
(statearr_13531_13553[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6346__auto___13539,out))
;return ((function (switch__6331__auto__,c__6346__auto___13539,out){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_13535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13535[(0)] = state_machine__6332__auto__);
(statearr_13535[(1)] = (1));
return statearr_13535;
});
var state_machine__6332__auto____1 = (function (state_13509){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_13509);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e13536){if((e13536 instanceof Object))
{var ex__6335__auto__ = e13536;var statearr_13537_13554 = state_13509;(statearr_13537_13554[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13509);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13536;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13555 = state_13509;
state_13509 = G__13555;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_13509){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_13509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto___13539,out))
})();var state__6348__auto__ = (function (){var statearr_13538 = f__6347__auto__.call(null);(statearr_13538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto___13539);
return statearr_13538;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto___13539,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6346__auto___13698 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto___13698,out){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto___13698,out){
return (function (state_13668){var state_val_13669 = (state_13668[(1)]);if((state_val_13669 === (7)))
{var inst_13664 = (state_13668[(2)]);var state_13668__$1 = state_13668;var statearr_13670_13699 = state_13668__$1;(statearr_13670_13699[(2)] = inst_13664);
(statearr_13670_13699[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13669 === (1)))
{var inst_13627 = [];var inst_13628 = inst_13627;var inst_13629 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13668__$1 = (function (){var statearr_13671 = state_13668;(statearr_13671[(7)] = inst_13628);
(statearr_13671[(8)] = inst_13629);
return statearr_13671;
})();var statearr_13672_13700 = state_13668__$1;(statearr_13672_13700[(2)] = null);
(statearr_13672_13700[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13669 === (4)))
{var inst_13632 = (state_13668[(9)]);var inst_13632__$1 = (state_13668[(2)]);var inst_13633 = (inst_13632__$1 == null);var inst_13634 = cljs.core.not.call(null,inst_13633);var state_13668__$1 = (function (){var statearr_13673 = state_13668;(statearr_13673[(9)] = inst_13632__$1);
return statearr_13673;
})();if(inst_13634)
{var statearr_13674_13701 = state_13668__$1;(statearr_13674_13701[(1)] = (5));
} else
{var statearr_13675_13702 = state_13668__$1;(statearr_13675_13702[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13669 === (15)))
{var inst_13658 = (state_13668[(2)]);var state_13668__$1 = state_13668;var statearr_13676_13703 = state_13668__$1;(statearr_13676_13703[(2)] = inst_13658);
(statearr_13676_13703[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13669 === (13)))
{var state_13668__$1 = state_13668;var statearr_13677_13704 = state_13668__$1;(statearr_13677_13704[(2)] = null);
(statearr_13677_13704[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13669 === (6)))
{var inst_13628 = (state_13668[(7)]);var inst_13653 = inst_13628.length;var inst_13654 = (inst_13653 > (0));var state_13668__$1 = state_13668;if(cljs.core.truth_(inst_13654))
{var statearr_13678_13705 = state_13668__$1;(statearr_13678_13705[(1)] = (12));
} else
{var statearr_13679_13706 = state_13668__$1;(statearr_13679_13706[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13669 === (3)))
{var inst_13666 = (state_13668[(2)]);var state_13668__$1 = state_13668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13668__$1,inst_13666);
} else
{if((state_val_13669 === (12)))
{var inst_13628 = (state_13668[(7)]);var inst_13656 = cljs.core.vec.call(null,inst_13628);var state_13668__$1 = state_13668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13668__$1,(15),out,inst_13656);
} else
{if((state_val_13669 === (2)))
{var state_13668__$1 = state_13668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13668__$1,(4),ch);
} else
{if((state_val_13669 === (11)))
{var inst_13632 = (state_13668[(9)]);var inst_13636 = (state_13668[(10)]);var inst_13646 = (state_13668[(2)]);var inst_13647 = [];var inst_13648 = inst_13647.push(inst_13632);var inst_13628 = inst_13647;var inst_13629 = inst_13636;var state_13668__$1 = (function (){var statearr_13680 = state_13668;(statearr_13680[(7)] = inst_13628);
(statearr_13680[(11)] = inst_13648);
(statearr_13680[(12)] = inst_13646);
(statearr_13680[(8)] = inst_13629);
return statearr_13680;
})();var statearr_13681_13707 = state_13668__$1;(statearr_13681_13707[(2)] = null);
(statearr_13681_13707[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13669 === (9)))
{var inst_13628 = (state_13668[(7)]);var inst_13644 = cljs.core.vec.call(null,inst_13628);var state_13668__$1 = state_13668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13668__$1,(11),out,inst_13644);
} else
{if((state_val_13669 === (5)))
{var inst_13629 = (state_13668[(8)]);var inst_13632 = (state_13668[(9)]);var inst_13636 = (state_13668[(10)]);var inst_13636__$1 = f.call(null,inst_13632);var inst_13637 = cljs.core._EQ_.call(null,inst_13636__$1,inst_13629);var inst_13638 = cljs.core.keyword_identical_QMARK_.call(null,inst_13629,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13639 = (inst_13637) || (inst_13638);var state_13668__$1 = (function (){var statearr_13682 = state_13668;(statearr_13682[(10)] = inst_13636__$1);
return statearr_13682;
})();if(cljs.core.truth_(inst_13639))
{var statearr_13683_13708 = state_13668__$1;(statearr_13683_13708[(1)] = (8));
} else
{var statearr_13684_13709 = state_13668__$1;(statearr_13684_13709[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13669 === (14)))
{var inst_13661 = (state_13668[(2)]);var inst_13662 = cljs.core.async.close_BANG_.call(null,out);var state_13668__$1 = (function (){var statearr_13686 = state_13668;(statearr_13686[(13)] = inst_13661);
return statearr_13686;
})();var statearr_13687_13710 = state_13668__$1;(statearr_13687_13710[(2)] = inst_13662);
(statearr_13687_13710[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13669 === (10)))
{var inst_13651 = (state_13668[(2)]);var state_13668__$1 = state_13668;var statearr_13688_13711 = state_13668__$1;(statearr_13688_13711[(2)] = inst_13651);
(statearr_13688_13711[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13669 === (8)))
{var inst_13628 = (state_13668[(7)]);var inst_13632 = (state_13668[(9)]);var inst_13636 = (state_13668[(10)]);var inst_13641 = inst_13628.push(inst_13632);var tmp13685 = inst_13628;var inst_13628__$1 = tmp13685;var inst_13629 = inst_13636;var state_13668__$1 = (function (){var statearr_13689 = state_13668;(statearr_13689[(7)] = inst_13628__$1);
(statearr_13689[(8)] = inst_13629);
(statearr_13689[(14)] = inst_13641);
return statearr_13689;
})();var statearr_13690_13712 = state_13668__$1;(statearr_13690_13712[(2)] = null);
(statearr_13690_13712[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6346__auto___13698,out))
;return ((function (switch__6331__auto__,c__6346__auto___13698,out){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_13694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13694[(0)] = state_machine__6332__auto__);
(statearr_13694[(1)] = (1));
return statearr_13694;
});
var state_machine__6332__auto____1 = (function (state_13668){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_13668);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e13695){if((e13695 instanceof Object))
{var ex__6335__auto__ = e13695;var statearr_13696_13713 = state_13668;(statearr_13696_13713[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13668);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13714 = state_13668;
state_13668 = G__13714;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_13668){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_13668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto___13698,out))
})();var state__6348__auto__ = (function (){var statearr_13697 = f__6347__auto__.call(null);(statearr_13697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto___13698);
return statearr_13697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto___13698,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map