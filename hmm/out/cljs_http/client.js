// Compiled by ClojureScript 0.0-2280
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__3532__auto__ = v;if(cljs.core.truth_(and__3532__auto__))
{return (v > (0));
} else
{return and__3532__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return cljs.core.reduce.call(null,(function (p1__10727_SHARP_,p2__10726_SHARP_){var vec__10729 = clojure.string.split.call(null,p2__10726_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__10729,(0),null);var v = cljs.core.nth.call(null,vec__10729,(1),null);return cljs.core.assoc.call(null,p1__10727_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url)))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__10730_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__10730_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__10731){var vec__10733 = p__10731;var k = cljs.core.nth.call(null,vec__10733,(0),null);var v = cljs.core.nth.call(null,vec__10733,(1),null);if(cljs.core.coll_QMARK_.call(null,v))
{return cljs_http.client.encode_vals.call(null,k,v);
} else
{return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__3532__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__3532__auto__)
{return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content_type))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__3532__auto__;
}
})()))
{return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6346__auto___10770 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto___10770,channel){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto___10770,channel){
return (function (state_10760){var state_val_10761 = (state_10760[(1)]);if((state_val_10761 === (2)))
{var inst_10754 = (state_10760[(2)]);var inst_10755 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_10756 = cljs_http.client.decode_body.call(null,inst_10754,cljs.reader.read_string,"application/edn",inst_10755);var inst_10757 = cljs.core.async.put_BANG_.call(null,channel,inst_10756);var inst_10758 = cljs.core.async.close_BANG_.call(null,channel);var state_10760__$1 = (function (){var statearr_10762 = state_10760;(statearr_10762[(7)] = inst_10757);
return statearr_10762;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10760__$1,inst_10758);
} else
{if((state_val_10761 === (1)))
{var inst_10752 = client.call(null,request);var state_10760__$1 = state_10760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10760__$1,(2),inst_10752);
} else
{return null;
}
}
});})(c__6346__auto___10770,channel))
;return ((function (switch__6331__auto__,c__6346__auto___10770,channel){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_10766 = [null,null,null,null,null,null,null,null];(statearr_10766[(0)] = state_machine__6332__auto__);
(statearr_10766[(1)] = (1));
return statearr_10766;
});
var state_machine__6332__auto____1 = (function (state_10760){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_10760);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e10767){if((e10767 instanceof Object))
{var ex__6335__auto__ = e10767;var statearr_10768_10771 = state_10760;(statearr_10768_10771[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10760);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10767;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10772 = state_10760;
state_10760 = G__10772;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_10760){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_10760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto___10770,channel))
})();var state__6348__auto__ = (function (){var statearr_10769 = f__6347__auto__.call(null);(statearr_10769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto___10770);
return statearr_10769;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto___10770,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__10773){var vec__10775 = p__10773;var accept = cljs.core.nth.call(null,vec__10775,(0),null);return ((function (vec__10775,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__10775,accept))
};
var wrap_accept = function (client,var_args){
var p__10773 = null;if (arguments.length > 1) {
  p__10773 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__10773);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__10776){
var client = cljs.core.first(arglist__10776);
var p__10773 = cljs.core.rest(arglist__10776);
return wrap_accept__delegate(client,p__10773);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__10777){var vec__10779 = p__10777;var content_type = cljs.core.nth.call(null,vec__10779,(0),null);return ((function (vec__10779,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__10779,content_type))
};
var wrap_content_type = function (client,var_args){
var p__10777 = null;if (arguments.length > 1) {
  p__10777 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__10777);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__10780){
var client = cljs.core.first(arglist__10780);
var p__10777 = cljs.core.rest(arglist__10780);
return wrap_content_type__delegate(client,p__10777);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6346__auto___10817 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto___10817,channel){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto___10817,channel){
return (function (state_10807){var state_val_10808 = (state_10807[(1)]);if((state_val_10808 === (2)))
{var inst_10801 = (state_10807[(2)]);var inst_10802 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_10803 = cljs_http.client.decode_body.call(null,inst_10801,cljs_http.util.json_decode,"application/json",inst_10802);var inst_10804 = cljs.core.async.put_BANG_.call(null,channel,inst_10803);var inst_10805 = cljs.core.async.close_BANG_.call(null,channel);var state_10807__$1 = (function (){var statearr_10809 = state_10807;(statearr_10809[(7)] = inst_10804);
return statearr_10809;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10807__$1,inst_10805);
} else
{if((state_val_10808 === (1)))
{var inst_10799 = client.call(null,request);var state_10807__$1 = state_10807;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10807__$1,(2),inst_10799);
} else
{return null;
}
}
});})(c__6346__auto___10817,channel))
;return ((function (switch__6331__auto__,c__6346__auto___10817,channel){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_10813 = [null,null,null,null,null,null,null,null];(statearr_10813[(0)] = state_machine__6332__auto__);
(statearr_10813[(1)] = (1));
return statearr_10813;
});
var state_machine__6332__auto____1 = (function (state_10807){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_10807);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e10814){if((e10814 instanceof Object))
{var ex__6335__auto__ = e10814;var statearr_10815_10818 = state_10807;(statearr_10815_10818[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10807);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10814;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10819 = state_10807;
state_10807 = G__10819;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_10807){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_10807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto___10817,channel))
})();var state__6348__auto__ = (function (){var statearr_10816 = f__6347__auto__.call(null);(statearr_10816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto___10817);
return statearr_10816;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto___10817,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__10822){var map__10823 = p__10822;var map__10823__$1 = ((cljs.core.seq_QMARK_.call(null,map__10823))?cljs.core.apply.call(null,cljs.core.hash_map,map__10823):map__10823);var req = map__10823__$1;var query_params = cljs.core.get.call(null,map__10823__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__10826){var map__10827 = p__10826;var map__10827__$1 = ((cljs.core.seq_QMARK_.call(null,map__10827))?cljs.core.apply.call(null,cljs.core.hash_map,map__10827):map__10827);var request = map__10827__$1;var request_method = cljs.core.get.call(null,map__10827__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.call(null,map__10827__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__3532__auto__ = form_params;if(cljs.core.truth_(and__3532__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__3532__auto__;
}
})()))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else
{return client.call(null,request);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),Math.random.call(null)):request));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__10828_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__10828_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__10832){var map__10833 = p__10832;var map__10833__$1 = ((cljs.core.seq_QMARK_.call(null,map__10833))?cljs.core.apply.call(null,cljs.core.hash_map,map__10833):map__10833);var req = map__10833__$1;var query_params = cljs.core.get.call(null,map__10833__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__10833,map__10833__$1,req,query_params){
return (function (p1__10829_SHARP_){return cljs.core.merge.call(null,p1__10829_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__10833,map__10833__$1,req,query_params))
));
} else
{return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__10834){var vec__10836 = p__10834;var credentials = cljs.core.nth.call(null,vec__10836,(0),null);return ((function (vec__10836,credentials){
return (function (req){var credentials__$1 = (function (){var or__3544__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__10836,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__10834 = null;if (arguments.length > 1) {
  p__10834 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__10834);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__10837){
var client = cljs.core.first(arglist__10837);
var p__10834 = cljs.core.rest(arglist__10837);
return wrap_basic_auth__delegate(client,p__10834);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token))));
} else
{return client.call(null,req);
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__10838){var vec__10840 = p__10838;var req = cljs.core.nth.call(null,vec__10840,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__10838 = null;if (arguments.length > 1) {
  p__10838 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__10838);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__10841){
var url = cljs.core.first(arglist__10841);
var p__10838 = cljs.core.rest(arglist__10841);
return delete$__delegate(url,p__10838);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__10842){var vec__10844 = p__10842;var req = cljs.core.nth.call(null,vec__10844,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__10842 = null;if (arguments.length > 1) {
  p__10842 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__10842);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__10845){
var url = cljs.core.first(arglist__10845);
var p__10842 = cljs.core.rest(arglist__10845);
return get__delegate(url,p__10842);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__10846){var vec__10848 = p__10846;var req = cljs.core.nth.call(null,vec__10848,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__10846 = null;if (arguments.length > 1) {
  p__10846 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__10846);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__10849){
var url = cljs.core.first(arglist__10849);
var p__10846 = cljs.core.rest(arglist__10849);
return head__delegate(url,p__10846);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__10850){var vec__10852 = p__10850;var req = cljs.core.nth.call(null,vec__10852,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__10850 = null;if (arguments.length > 1) {
  p__10850 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__10850);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__10853){
var url = cljs.core.first(arglist__10853);
var p__10850 = cljs.core.rest(arglist__10853);
return move__delegate(url,p__10850);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__10854){var vec__10856 = p__10854;var req = cljs.core.nth.call(null,vec__10856,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__10854 = null;if (arguments.length > 1) {
  p__10854 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__10854);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__10857){
var url = cljs.core.first(arglist__10857);
var p__10854 = cljs.core.rest(arglist__10857);
return options__delegate(url,p__10854);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__10858){var vec__10860 = p__10858;var req = cljs.core.nth.call(null,vec__10860,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__10858 = null;if (arguments.length > 1) {
  p__10858 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__10858);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__10861){
var url = cljs.core.first(arglist__10861);
var p__10858 = cljs.core.rest(arglist__10861);
return patch__delegate(url,p__10858);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__10862){var vec__10864 = p__10862;var req = cljs.core.nth.call(null,vec__10864,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__10862 = null;if (arguments.length > 1) {
  p__10862 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__10862);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__10865){
var url = cljs.core.first(arglist__10865);
var p__10862 = cljs.core.rest(arglist__10865);
return post__delegate(url,p__10862);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__10866){var vec__10868 = p__10866;var req = cljs.core.nth.call(null,vec__10868,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__10866 = null;if (arguments.length > 1) {
  p__10866 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__10866);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__10869){
var url = cljs.core.first(arglist__10869);
var p__10866 = cljs.core.rest(arglist__10869);
return put__delegate(url,p__10866);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map