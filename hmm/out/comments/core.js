// Compiled by ClojureScript 0.0-2280
goog.provide('comments.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
comments.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Dexrion",new cljs.core.Keyword(null,"message","message",-406056002),"test message"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Sork pippi",new cljs.core.Keyword(null,"message","message",-406056002),"this is another test message"], null)], null));
comments.core.user = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),"not logged in"], null));
comments.core.read_data = (function read_data(){goog.net.XhrIo.send("http://198.168.0.180:3000/posts/10.json",(function (res){return cljs.core.reset_BANG_.call(null,comments.core.app_state,cljs.core.js__GT_clj.call(null,res.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));
return goog.net.XhrIo.send("http://bombers-hockey.com/shouts/show.json",(function (res){return cljs.core.reset_BANG_.call(null,comments.core.user,cljs.core.js__GT_clj.call(null,res.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));
});
comments.core.read_data.call(null);
comments.core.update_fn = (function update_fn(data,owner){cljs.core.reset_BANG_.call(null,comments.core.app_state,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),om.core.get_node.call(null,owner,"name").value,new cljs.core.Keyword(null,"message","message",-406056002),om.core.get_node.call(null,owner,"message").value], null)], null),cljs.core.deref.call(null,comments.core.app_state)));
cljs_http.client.post.call(null,"http://bombers-hockey.com/shouts",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shout","shout",186018337),cljs.core.first.call(null,cljs.core.deref.call(null,comments.core.app_state))], null)], null));
return om.core.get_node.call(null,owner,"message").value = "";
});
comments.core.delete_comment = (function delete_comment(id){return cljs_http.client.delete$.call(null,("http://bombers-hockey.com/shouts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_method","_method",-1879292821),"delete"], null)], null));
});
comments.core.comment_form = (function comment_form(state,owner){if(typeof comments.core.t9543 !== 'undefined')
{} else
{
/**
* @constructor
*/
comments.core.t9543 = (function (owner,state,comment_form,meta9544){
this.owner = owner;
this.state = state;
this.comment_form = comment_form;
this.meta9544 = meta9544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
comments.core.t9543.cljs$lang$type = true;
comments.core.t9543.cljs$lang$ctorStr = "comments.core/t9543";
comments.core.t9543.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"comments.core/t9543");
});
comments.core.t9543.prototype.om$core$IRender$ = true;
comments.core.t9543.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,om.dom.input.call(null,{"value": "true", "type": "hidden", "name": "utf8"}),om.dom.textarea.call(null,{"ref": "message", "row": "3", "name": "shout[messagr]", "id": "shouts_message", "style": {"height": "70px", "width": "97%"}}),React.DOM.p({"style": {"margin": "2%", "display": "inline", "width:": "24%", "color": "#FBB600"}},"Name:"),om.dom.input.call(null,{"style": {"width": "50%"}, "ref": "name", "type": "text", "name": "shout[name]", "id": "shout_name"}),om.dom.input.call(null,{"style": {"width": "24%"}, "value": "Submit", "type": "submit", "onClick": ((function (this$__$1){
return (function (){return comments.core.update_fn.call(null,self__.state,self__.owner);
});})(this$__$1))
, "name": "commit"}));
});
comments.core.t9543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9545){var self__ = this;
var _9545__$1 = this;return self__.meta9544;
});
comments.core.t9543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9545,meta9544__$1){var self__ = this;
var _9545__$1 = this;return (new comments.core.t9543(self__.owner,self__.state,self__.comment_form,meta9544__$1));
});
comments.core.__GT_t9543 = (function __GT_t9543(owner__$1,state__$1,comment_form__$1,meta9544){return (new comments.core.t9543(owner__$1,state__$1,comment_form__$1,meta9544));
});
}
return (new comments.core.t9543(owner,state,comment_form,null));
});
comments.core.comment = (function comment(state,owner){return React.DOM.tr(null,React.DOM.td({"style": {"fontSize": "small", "color": "#FBB600"}},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state))+":")),React.DOM.td({"style": {"fontSize": "small"}},new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(state)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comments.core.user)),"admin"))?React.DOM.td({"onClick": (function (){return comments.core.delete_comment.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
}), "style": {"fontSize": "xx-small"}},"Delete"):null));
});
comments.core.comments = (function comments__$1(state,owner){return cljs.core.apply.call(null,om.dom.tbody,null,om.core.build_all.call(null,comments.core.comment,state));
});
comments.core.comment_box = (function comment_box(state,owner){return React.DOM.div({"className": "b_box"},React.DOM.div({"className": "b_header"},React.DOM.img({"src": "/assets/shout.png"})),React.DOM.div({"style": {"overflow": "auto", "height": "200px"}},React.DOM.table(null,om.core.build.call(null,comments.core.comments,state))),om.core.build.call(null,comments.core.comment_form,state));
});
om.core.root.call(null,comments.core.comment_box,comments.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("comments")], null));
var c__6346__auto___9575 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6346__auto___9575){
return (function (){var f__6347__auto__ = (function (){var switch__6331__auto__ = ((function (c__6346__auto___9575){
return (function (state_9559){var state_val_9560 = (state_9559[(1)]);if((state_val_9560 === (7)))
{var inst_9550 = (state_9559[(2)]);var inst_9551 = comments.core.read_data.call(null);var state_9559__$1 = (function (){var statearr_9561 = state_9559;(statearr_9561[(7)] = inst_9550);
(statearr_9561[(8)] = inst_9551);
return statearr_9561;
})();var statearr_9562_9576 = state_9559__$1;(statearr_9562_9576[(2)] = null);
(statearr_9562_9576[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9560 === (6)))
{var inst_9555 = (state_9559[(2)]);var state_9559__$1 = state_9559;var statearr_9563_9577 = state_9559__$1;(statearr_9563_9577[(2)] = inst_9555);
(statearr_9563_9577[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9560 === (5)))
{var state_9559__$1 = state_9559;var statearr_9564_9578 = state_9559__$1;(statearr_9564_9578[(2)] = null);
(statearr_9564_9578[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9560 === (4)))
{var inst_9548 = cljs.core.async.timeout.call(null,(5000));var state_9559__$1 = state_9559;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9559__$1,(7),inst_9548);
} else
{if((state_val_9560 === (3)))
{var inst_9557 = (state_9559[(2)]);var state_9559__$1 = state_9559;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9559__$1,inst_9557);
} else
{if((state_val_9560 === (2)))
{var state_9559__$1 = state_9559;if(true)
{var statearr_9565_9579 = state_9559__$1;(statearr_9565_9579[(1)] = (4));
} else
{var statearr_9566_9580 = state_9559__$1;(statearr_9566_9580[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9560 === (1)))
{var state_9559__$1 = state_9559;var statearr_9567_9581 = state_9559__$1;(statearr_9567_9581[(2)] = null);
(statearr_9567_9581[(1)] = (2));
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
});})(c__6346__auto___9575))
;return ((function (switch__6331__auto__,c__6346__auto___9575){
return (function() {
var state_machine__6332__auto__ = null;
var state_machine__6332__auto____0 = (function (){var statearr_9571 = [null,null,null,null,null,null,null,null,null];(statearr_9571[(0)] = state_machine__6332__auto__);
(statearr_9571[(1)] = (1));
return statearr_9571;
});
var state_machine__6332__auto____1 = (function (state_9559){while(true){
var ret_value__6333__auto__ = (function (){try{while(true){
var result__6334__auto__ = switch__6331__auto__.call(null,state_9559);if(cljs.core.keyword_identical_QMARK_.call(null,result__6334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6334__auto__;
}
break;
}
}catch (e9572){if((e9572 instanceof Object))
{var ex__6335__auto__ = e9572;var statearr_9573_9582 = state_9559;(statearr_9573_9582[(5)] = ex__6335__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9559);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9572;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9583 = state_9559;
state_9559 = G__9583;
continue;
}
} else
{return ret_value__6333__auto__;
}
break;
}
});
state_machine__6332__auto__ = function(state_9559){
switch(arguments.length){
case 0:
return state_machine__6332__auto____0.call(this);
case 1:
return state_machine__6332__auto____1.call(this,state_9559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6332__auto____0;
state_machine__6332__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6332__auto____1;
return state_machine__6332__auto__;
})()
;})(switch__6331__auto__,c__6346__auto___9575))
})();var state__6348__auto__ = (function (){var statearr_9574 = f__6347__auto__.call(null);(statearr_9574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6346__auto___9575);
return statearr_9574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6348__auto__);
});})(c__6346__auto___9575))
);

//# sourceMappingURL=core.js.map