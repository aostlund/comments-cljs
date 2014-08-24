(ns comments.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! timeout]]
            [cljs-http.client :as http])
  (:import [goog.net XhrIo]))

(enable-console-print!)

(def app-state (atom [{:name "Dexrion" :message "test message"} {:name "Sork pippi" :message "this is another test message"}]))
(def user (atom {:user "not logged in"}))

(defn read-data [] (.send XhrIo "http://198.168.0.180:3000/posts/10.json"
  (fn [res] (reset! app-state (js->clj (.getResponseJson (.-target res)) :keywordize-keys true))))
  (.send XhrIo "http://bombers-hockey.com/shouts/show.json"
  (fn [res] (reset! user (js->clj (.getResponseJson (.-target res)) :keywordize-keys true)))))

(read-data)

(defn update-fn [data owner]
  (reset! app-state (into [{:name (.-value (om/get-node owner "name")) :message (.-value (om/get-node owner "message"))}] @app-state))
  (http/post "http://bombers-hockey.com/shouts" {:json-params {:shout (first @app-state)}})
  (set! (.-value (om/get-node owner "message")) ""))

(defn delete-comment [id]
  (http/delete (str "http://bombers-hockey.com/shouts/" id) {:json-params {:_method "delete"}}))

(defn comment-form [state owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (dom/input #js {:name "utf8" :type "hidden" :value "true"})
        (dom/textarea #js {:style #js {:width "97%" :height "70px"} :id "shouts_message" :name "shout[messagr]" :row "3" :ref "message"})
        (dom/p #js {:style #js {:color "#FBB600" :width: "24%" :display "inline" :margin "2%"}} "Name:")
        (dom/input #js {:id "shout_name" :name "shout[name]" :type "text" :ref "name" :style #js {:width "50%"}})
        (dom/input #js {:name "commit" :onClick #(update-fn state owner) :type "submit" :value "Submit" :style #js {:width "24%"}})))))

(defn comment [state owner]
  (dom/tr nil
    (dom/td #js {:style #js {:color "#FBB600" :fontSize "small"}} (str (:name state) ":"))
    (dom/td #js {:style #js {:fontSize "small"}} (:message state))
    (if (= (:user @user) "admin")
      (dom/td #js {:style #js {:fontSize "xx-small"} :onClick #(delete-comment (:id @state))} "Delete"))))

(defn comments [state owner]
  (apply dom/tbody nil
    (om/build-all comment state)))

(defn comment-box [state owner]
  (dom/div #js {:className "b_box"}
    (dom/div #js {:className "b_header"}
      (dom/img #js {:src "/assets/shout.png"}))
    (dom/div #js {:style #js {:height "200px" :overflow "auto"}}
      (dom/table nil
        (om/build comments state)))
    (om/build comment-form state)))

(om/root comment-box
  app-state
  {:target (. js/document (getElementById "comments"))})

(go (while true
  (<! (timeout 5000))
  (read-data)))
